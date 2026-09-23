import type { APIRoute } from "astro";
import { PDFDocument, PDFName, PDFNumber, PDFArray, PDFRawStream, StandardFonts, degrees, rgb } from "pdf-lib";
import JSZip from "jszip";
import sharp from "sharp";
import { getTool } from "../../../data/tools";
import { recordConversionAttempt, finalizeConversionJob, failConversionJob } from "../../../lib/conversion-jobs";
import { contentDisposition } from "../../../lib/content-disposition";
import { ensureDomMatrixPolyfill, standardFontDataUrl } from "../../../lib/pdfjs-node-polyfills";
import { looksLikeHeic, decodeHeicFallback, sharpFromHeicFallback } from "../../../lib/heic-fallback";
import { resolveConversionForm } from "../../../lib/blob-input";

// Global 100 MB cap advertised across the site. Uploads route through Vercel
// Blob (see resolveConversionForm in lib/blob-input.ts), so this is a real
// processing-capacity limit, not a request-body-size workaround.
const MAX_BYTES = 100 * 1024 * 1024;
const MAX_FILES = 25;
// OCR is per-page (render + tesseract recognize), not per-byte - measured
// ~2s/page including render, which at 300s (astro.config.mjs maxDuration)
// caps out well before a byte-size limit would catch a many-page scan (e.g.
// a 60 MB PDF with 400 small page images would still time out). This bounds
// wall-clock time directly instead of trusting file size as a proxy for it.
const MAX_OCR_PAGES = 100;

function baseName(filename: string) {
  const dot = filename.lastIndexOf(".");
  return dot > 0 ? filename.slice(0, dot) : filename;
}

export async function renderPdfToImages(bytes: Uint8Array, format: "jpeg" | "png"): Promise<Buffer[]> {
  // Dynamic import: pdfjs-dist's Node build and `canvas` are only needed by
  // this one operation, so a failure here shouldn't break the whole route.
  //
  // `canvas` must be imported BEFORE pdfjs-dist; see ensureDomMatrixPolyfill.
  const { createCanvas, CanvasRenderingContext2D } = await import("canvas");
  await ensureDomMatrixPolyfill();
  // Same self-polyfill gap as DOMMatrix above, for the same reason: pdfjs-dist
  // tries to source `Path2D` from @napi-rs/canvas and no-ops with just a
  // warning if that package isn't available, then throws a plain
  // "Path2D is not defined" the moment page rendering actually reaches a
  // fill/stroke/clip call - node-canvas has no Path2D implementation of its
  // own, so `path2d` (a small, dependency-free polyfill built for exactly
  // this node-canvas + pdfjs-dist combination) supplies one.
  if (!globalThis.Path2D) {
    const { Path2D, applyPath2DToCanvasRenderingContext } = await import("path2d");
    applyPath2DToCanvasRenderingContext(CanvasRenderingContext2D as any);
    globalThis.Path2D = Path2D as unknown as typeof globalThis.Path2D;
  }
  const { getDocument } = await import("pdfjs-dist/legacy/build/pdf.mjs");

  // pdfjs-dist 6.x's own Node canvas factory defaults to @napi-rs/canvas, a
  // different native module than the `canvas` (node-canvas) package used
  // below. Any page with an embedded raster image needs pdfjs to create
  // internal mask/pattern canvases via this factory, and drawing an
  // @napi-rs/canvas object onto a node-canvas context throws "Image or
  // Canvas expected" (the native instanceof check fails across packages).
  // Supplying our own factory keeps every canvas on node-canvas.
  class NodeCanvasFactory {
    create(width: number, height: number) {
      if (width <= 0 || height <= 0) {
        throw new Error("Invalid canvas size");
      }
      const canvas = createCanvas(width, height);
      const context = canvas.getContext("2d");
      return { canvas, context };
    }
    reset(canvasAndContext: { canvas: any; context: any }, width: number, height: number) {
      if (!canvasAndContext.canvas) {
        throw new Error("Canvas is not specified");
      }
      if (width <= 0 || height <= 0) {
        throw new Error("Invalid canvas size");
      }
      canvasAndContext.canvas.width = width;
      canvasAndContext.canvas.height = height;
    }
    destroy(canvasAndContext: { canvas: any; context: any }) {
      if (!canvasAndContext.canvas) {
        throw new Error("Canvas is not specified");
      }
      canvasAndContext.canvas.width = 0;
      canvasAndContext.canvas.height = 0;
      canvasAndContext.canvas = null;
      canvasAndContext.context = null;
    }
  }

  const pdf = await getDocument({
    data: bytes,
    CanvasFactory: NodeCanvasFactory,
    standardFontDataUrl,
  }).promise;
  const images: Buffer[] = [];
  const canvasFactory = new NodeCanvasFactory();

  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const viewport = page.getViewport({ scale: 2 });
    const { canvas, context } = canvasFactory.create(viewport.width, viewport.height);
    // @ts-expect-error - pdfjs-dist's RenderParameters type expects a DOM CanvasRenderingContext2D; node-canvas's is compatible at runtime.
    await page.render({ canvasContext: context, viewport, canvas }).promise;
    images.push(format === "png" ? canvas.toBuffer("image/png") : canvas.toBuffer("image/jpeg", { quality: 0.9 }));
    canvasFactory.destroy({ canvas, context });
  }

  return images;
}

// Longest side, in pixels, that any re-encoded image is allowed to keep.
// Most embedded photos/scans come in well above what's useful for screen
// or print (phone scanner apps in particular often export 3000px+ pages),
// so downsampling first is where most of the real size reduction comes from.
const IMAGE_MAX_DIMENSION = 2000;
const IMAGE_JPEG_QUALITY = 64;
// Below this, a JPEG's own re-encoding overhead (headers, tables) tends to
// eat whatever's saved, so skip re-encoding it at all.
const IMAGE_MIN_BYTES = 8 * 1024;

function singleFilterName(filter: unknown): string | null {
  if (filter instanceof PDFName) return filter.asString();
  if (filter instanceof PDFArray && filter.size() === 1) {
    const entry = filter.get(0);
    if (entry instanceof PDFName) return entry.asString();
  }
  return null;
}

// Re-encodes embedded JPEG (DCTDecode) images at a lower quality/resolution
// in place. This is intentionally narrow in scope: pdf-lib can decode
// FlateDecode-compressed raw image samples too, but it doesn't apply PNG/TIFF
// predictors (a very common case for those), so reinterpreting that data
// without them would silently corrupt pixels. DCTDecode streams are already
// literal JPEG bytes, so they're safe to hand straight to sharp. CMYK JPEGs,
// indexed/exotic color spaces, and images with a custom /Decode array or a
// stencil /Mask are skipped since they need color-managed handling this
// tool doesn't attempt - those objects are left untouched rather than risk
// producing a corrupted-looking PDF.
interface ImageCompressOptions {
  maxDimension: number;
  quality: number;
}
const DEFAULT_IMAGE_OPTIONS: ImageCompressOptions = { maxDimension: IMAGE_MAX_DIMENSION, quality: IMAGE_JPEG_QUALITY };

async function compressEmbeddedImages(doc: PDFDocument, options: ImageCompressOptions = DEFAULT_IMAGE_OPTIONS): Promise<void> {
  const context = doc.context;

  for (const [ref, obj] of context.enumerateIndirectObjects()) {
    if (!(obj instanceof PDFRawStream)) continue;
    const dict = obj.dict;

    const subtype = dict.lookup(PDFName.of("Subtype"));
    if (!(subtype instanceof PDFName) || subtype.asString() !== "/Image") continue;
    if (dict.lookup(PDFName.of("Decode"))) continue;
    if (dict.lookup(PDFName.of("Mask"))) continue;
    if (dict.lookup(PDFName.of("ImageMask"))) continue;

    if (singleFilterName(dict.lookup(PDFName.of("Filter"))) !== "/DCTDecode") continue;

    const colorSpace = dict.lookup(PDFName.of("ColorSpace"));
    if (!(colorSpace instanceof PDFName)) continue;
    const csName = colorSpace.asString();
    if (csName !== "/DeviceGray" && csName !== "/DeviceRGB") continue;

    const original = obj.getContents();
    if (original.length < IMAGE_MIN_BYTES) continue;

    let output: Buffer;
    let outWidth: number;
    let outHeight: number;
    try {
      const input = sharp(Buffer.from(original), { failOn: "none" });
      const meta = await input.metadata();
      if (!meta.width || !meta.height) continue;
      // Channel count mismatched against the declared color space means this
      // JPEG isn't what the dict claims it is - leave it alone.
      const expectedChannels = csName === "/DeviceGray" ? 1 : 3;
      if (meta.channels !== expectedChannels) continue;

      const longestSide = Math.max(meta.width, meta.height);
      let pipeline = input;
      if (longestSide > options.maxDimension) {
        pipeline = pipeline.resize({
          width: meta.width >= meta.height ? options.maxDimension : undefined,
          height: meta.height > meta.width ? options.maxDimension : undefined,
          withoutEnlargement: true,
        });
      }
      output = await pipeline
        .jpeg({
          quality: options.quality,
          mozjpeg: true,
          chromaSubsampling: csName === "/DeviceGray" ? "4:4:4" : "4:2:0",
        })
        .toBuffer();

      const outMeta = await sharp(output).metadata();
      if (!outMeta.width || !outMeta.height) continue;
      outWidth = outMeta.width;
      outHeight = outMeta.height;
    } catch {
      // Anything sharp can't decode/re-encode is left as-is.
      continue;
    }

    if (output.length >= original.length) continue;

    const newDict = dict.clone(context);
    newDict.set(PDFName.of("Width"), PDFNumber.of(outWidth));
    newDict.set(PDFName.of("Height"), PDFNumber.of(outHeight));
    newDict.set(PDFName.of("BitsPerComponent"), PDFNumber.of(8));
    newDict.set(PDFName.of("Filter"), PDFName.of("DCTDecode"));
    newDict.delete(PDFName.of("DecodeParms"));
    newDict.delete(PDFName.of("Length1"));
    newDict.set(PDFName.of("Length"), PDFNumber.of(output.length));

    context.assign(ref, PDFRawStream.of(newDict, new Uint8Array(output)));
  }
}

// Progressively harsher image settings, tried in order until the PDF fits.
// Each rung re-encodes from the untouched original, never from the previous
// rung's output, so quality loss doesn't compound.
const TARGET_LADDER: ImageCompressOptions[] = [
  { maxDimension: 2000, quality: 64 },
  { maxDimension: 1600, quality: 55 },
  { maxDimension: 1400, quality: 45 },
  { maxDimension: 1200, quality: 38 },
  { maxDimension: 1000, quality: 30 },
  { maxDimension: 800, quality: 25 },
  { maxDimension: 640, quality: 20 },
  { maxDimension: 500, quality: 15 },
];

async function saveCompressed(sourceBytes: ArrayBuffer, options: ImageCompressOptions): Promise<Buffer> {
  const doc = await PDFDocument.load(sourceBytes);
  await compressEmbeddedImages(doc, options);
  doc.setTitle("");
  doc.setAuthor("");
  doc.setSubject("");
  doc.setKeywords([]);
  doc.setProducer("");
  doc.setCreator("");
  return Buffer.from(await doc.save({ useObjectStreams: true }));
}

function formatSize(bytes: number): string {
  return bytes >= 1024 * 1024 ? `${(bytes / (1024 * 1024)).toFixed(2)} MB` : `${(bytes / 1024).toFixed(1)} KB`;
}

export const POST: APIRoute = async ({ request, locals }) => {
  let form: FormData;
  try {
    form = await resolveConversionForm(request);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Upload failed.";
    return new Response(JSON.stringify({ error: message }), { status: 400 });
  }
  const slug = String(form.get("slug") ?? "");
  const files = form.getAll("file").filter((f): f is File => f instanceof File);

  if (files.length === 0) {
    return new Response(JSON.stringify({ error: "No file provided." }), { status: 400 });
  }
  if (files.length > MAX_FILES) {
    return new Response(JSON.stringify({ error: `Provide at most ${MAX_FILES} files.` }), { status: 400 });
  }
  const totalBytes = files.reduce((sum, f) => sum + f.size, 0);
  if (totalBytes > MAX_BYTES) {
    return new Response(JSON.stringify({ error: "Files exceed the 100 MB limit." }), { status: 413 });
  }

  const tool = getTool(slug);
  if (!tool || tool.kind !== "pdf") {
    return new Response(JSON.stringify({ error: "Unknown PDF tool." }), { status: 400 });
  }

  const jobId = await recordConversionAttempt(slug, locals.user?.id ?? null);

  try {
    let outputBuffer: Buffer;
    let contentType: string;
    let filename: string;
    const extraHeaders: Record<string, string> = {};

    switch (tool.operation) {
      case "merge": {
        const merged = await PDFDocument.create();
        for (const file of files) {
          const src = await PDFDocument.load(await file.arrayBuffer());
          const pages = await merged.copyPages(src, src.getPageIndices());
          pages.forEach((page) => merged.addPage(page));
        }
        outputBuffer = Buffer.from(await merged.save());
        contentType = "application/pdf";
        filename = "merged.pdf";
        break;
      }

      case "split": {
        const src = await PDFDocument.load(await files[0].arrayBuffer());
        const zip = new JSZip();
        for (const index of src.getPageIndices()) {
          const single = await PDFDocument.create();
          const [page] = await single.copyPages(src, [index]);
          single.addPage(page);
          zip.file(`page-${index + 1}.pdf`, await single.save());
        }
        outputBuffer = await zip.generateAsync({ type: "nodebuffer" });
        contentType = "application/zip";
        filename = `${baseName(files[0].name)}-pages.zip`;
        break;
      }

      case "rotate": {
        const degreesParam = Number(form.get("degrees") ?? 90);
        const src = await PDFDocument.load(await files[0].arrayBuffer());
        src.getPages().forEach((page) => page.setRotation(degrees(page.getRotation().angle + degreesParam)));
        outputBuffer = Buffer.from(await src.save());
        contentType = "application/pdf";
        filename = `${baseName(files[0].name)}-rotated.pdf`;
        break;
      }

      case "add-page-numbers": {
        const src = await PDFDocument.load(await files[0].arrayBuffer());
        const font = await src.embedFont(StandardFonts.Helvetica);
        src.getPages().forEach((page, index) => {
          const { width } = page.getSize();
          const text = String(index + 1);
          const textWidth = font.widthOfTextAtSize(text, 10);
          page.drawText(text, { x: width / 2 - textWidth / 2, y: 20, size: 10, font, color: rgb(0.3, 0.3, 0.3) });
        });
        outputBuffer = Buffer.from(await src.save());
        contentType = "application/pdf";
        filename = `${baseName(files[0].name)}-numbered.pdf`;
        break;
      }

      case "compress": {
        // Best-effort: this re-encodes embedded JPEGs (the bulk of most
        // PDFs' size) at a lower quality/resolution via sharp, then strips
        // metadata and re-saves with object streams. It doesn't touch
        // Flate-compressed raw image samples, CMYK/indexed color spaces, or
        // vector content - see compressEmbeddedImages() for why. Results
        // vary with how image-heavy the source PDF is.
        const src = await PDFDocument.load(await files[0].arrayBuffer());
        await compressEmbeddedImages(src);
        src.setTitle("");
        src.setAuthor("");
        src.setSubject("");
        src.setKeywords([]);
        src.setProducer("");
        src.setCreator("");
        outputBuffer = Buffer.from(await src.save({ useObjectStreams: true }));
        contentType = "application/pdf";
        filename = `${baseName(files[0].name)}-compressed.pdf`;
        break;
      }

      case "compress-target": {
        const value = Number(form.get("targetValue") ?? 0);
        const unit = String(form.get("targetUnit") ?? "kb").toLowerCase();
        if (!Number.isFinite(value) || value <= 0) {
          throw new Error("Enter a maximum size greater than zero.");
        }
        const targetBytes = Math.round(value * (unit === "mb" ? 1024 * 1024 : 1024));
        const sourceBytes = await files[0].arrayBuffer();

        // Iterative, measured compression: try each rung, keep the smallest
        // result, and stop as soon as one fits. Never assumes a single pass
        // lands on the target.
        let best: Buffer | null = null;
        for (const rung of TARGET_LADDER) {
          const candidate = await saveCompressed(sourceBytes, rung);
          if (!best || candidate.length < best.length) best = candidate;
          if (candidate.length <= targetBytes) break;
        }
        // If the original is already smaller than anything we produced, it
        // is the honest best result.
        if (best && sourceBytes.byteLength < best.length) best = Buffer.from(sourceBytes);
        outputBuffer = best!;
        contentType = "application/pdf";
        filename = `${baseName(files[0].name)}-compressed.pdf`;
        const met = outputBuffer.length <= targetBytes;
        extraHeaders["X-Target-Met"] = String(met);
        extraHeaders["X-Achieved-Bytes"] = String(outputBuffer.length);
        extraHeaders["X-Result-Note"] = encodeURIComponent(
          met
            ? `Compressed from ${formatSize(sourceBytes.byteLength)} to ${formatSize(outputBuffer.length)}, under your ${formatSize(targetBytes)} limit.`
            : `We could not reach ${formatSize(targetBytes)} without unacceptable quality loss. The smallest result is ${formatSize(outputBuffer.length)} (original ${formatSize(sourceBytes.byteLength)}). Try a larger limit, or split the PDF into parts. Vector-only or text-only PDFs shrink very little.`,
        );
        break;
      }

      case "organize": {
        let plan: { i: number; r: number }[];
        try {
          plan = JSON.parse(String(form.get("pages") ?? "[]"));
        } catch {
          throw new Error("The page order could not be read. Reload the page and try again.");
        }
        const src = await PDFDocument.load(await files[0].arrayBuffer());
        const count = src.getPageCount();
        const valid =
          Array.isArray(plan) &&
          plan.length > 0 &&
          plan.length <= count &&
          plan.every((p) => Number.isInteger(p?.i) && p.i >= 0 && p.i < count && Number.isInteger(p?.r) && p.r % 90 === 0);
        if (!valid || new Set(plan.map((p) => p.i)).size !== plan.length) {
          throw new Error("Keep at least one page, and use each page at most once.");
        }
        const out = await PDFDocument.create();
        const copied = await out.copyPages(src, plan.map((p) => p.i));
        copied.forEach((page, idx) => {
          const delta = ((plan[idx].r % 360) + 360) % 360;
          if (delta) page.setRotation(degrees((page.getRotation().angle + delta) % 360));
          out.addPage(page);
        });
        outputBuffer = Buffer.from(await out.save());
        contentType = "application/pdf";
        filename = `${baseName(files[0].name)}-organized.pdf`;
        break;
      }

      case "unlock": {
        // pdf-lib has no decryption support at all - `ignoreEncryption` only
        // skips its "throw if encrypted" guard, it doesn't decrypt the
        // object streams. Passing an actually-encrypted PDF through that
        // path used to return HTTP 200 with a corrupted file (confirmed:
        // pypdf can't read the "unlocked" output - "Cannot find Root object
        // in pdf"), silently failing while reporting success. Until this
        // tool has real decryption (e.g. shelling out to qpdf, or a
        // password-aware library), fail honestly instead of faking success.
        const buf = await files[0].arrayBuffer();
        const probe = await PDFDocument.load(buf, { ignoreEncryption: true });
        if (probe.isEncrypted) {
          throw new Error(
            "This PDF is password-protected or encrypted, and ConvertBrio can't remove that protection yet. This tool currently only works on PDFs that aren't encrypted."
          );
        }
        outputBuffer = Buffer.from(await probe.save());
        contentType = "application/pdf";
        filename = `${baseName(files[0].name)}-unlocked.pdf`;
        break;
      }

      case "pdf-to-jpg":
      case "pdf-to-png": {
        const format = tool.operation === "pdf-to-png" ? "png" : "jpeg";
        const ext = format === "png" ? "png" : "jpg";
        const images = await renderPdfToImages(new Uint8Array(await files[0].arrayBuffer()), format);
        if (images.length === 1) {
          outputBuffer = images[0];
          contentType = format === "png" ? "image/png" : "image/jpeg";
          filename = `${baseName(files[0].name)}.${ext}`;
        } else {
          const zip = new JSZip();
          images.forEach((image, index) => zip.file(`page-${index + 1}.${ext}`, image));
          outputBuffer = await zip.generateAsync({ type: "nodebuffer" });
          contentType = "application/zip";
          filename = `${baseName(files[0].name)}-pages.zip`;
        }
        break;
      }

      case "ocr": {
        // Tesseract's built-in PDF renderer produces a searchable PDF per
        // page (original page image + an invisible text layer). We render
        // each source page to an image, OCR it, then stitch the resulting
        // single-page PDFs back into one document with pdf-lib.
        const ocrSourceBytes = await files[0].arrayBuffer();
        const ocrPageCount = (await PDFDocument.load(ocrSourceBytes)).getPageCount();
        if (ocrPageCount > MAX_OCR_PAGES) {
          throw new Error(
            `OCR supports PDFs up to ${MAX_OCR_PAGES} pages (this one has ${ocrPageCount}). Try splitting it first.`,
          );
        }

        const { createWorker } = await import("tesseract.js");
        const worker = await createWorker("eng", undefined, {
          // Vercel's serverless functions only allow writes under /tmp;
          // without this, tesseract.js defaults to caching its downloaded
          // language data in the (read-only) function bundle directory and
          // fails at runtime.
          cachePath: "/tmp",
          // Without an errorHandler, tesseract.js re-throws any internal
          // worker error at the top level, crashing the whole Node process
          // (and with it, the whole serverless function) instead of just
          // failing this one request. The actual failure still reaches our
          // own try/catch below via the rejected recognize()/createWorker()
          // promise; this only stops it from also taking down the process.
          errorHandler: (e) => console.error("[tesseract]", e),
        });
        try {
          const pageImages = await renderPdfToImages(new Uint8Array(ocrSourceBytes), "png");
          const pagePdfBuffers: Buffer[] = [];
          for (const image of pageImages) {
            const result = await worker.recognize(image, {}, { pdf: true });
            if (!result.data.pdf) {
              throw new Error("Text recognition failed for a page.");
            }
            pagePdfBuffers.push(Buffer.from(result.data.pdf));
          }

          if (pagePdfBuffers.length === 1) {
            outputBuffer = pagePdfBuffers[0];
          } else {
            const merged = await PDFDocument.create();
            for (const buf of pagePdfBuffers) {
              const src = await PDFDocument.load(buf);
              const copiedPages = await merged.copyPages(src, src.getPageIndices());
              copiedPages.forEach((page) => merged.addPage(page));
            }
            outputBuffer = Buffer.from(await merged.save());
          }
        } finally {
          await worker.terminate();
        }
        contentType = "application/pdf";
        filename = `${baseName(files[0].name)}-ocr.pdf`;
        break;
      }

      case "jpg-to-pdf":
      case "image-to-pdf": {
        const doc = await PDFDocument.create();
        for (const file of files) {
          const inputBuffer = Buffer.from(await file.arrayBuffer());
          let embedBuffer: Buffer;
          let isPng: boolean;
          if (file.type === "image/jpeg" || file.type === "image/png") {
            embedBuffer = inputBuffer;
            isPng = file.type === "image/png";
          } else {
            // pdf-lib only embeds JPEG/PNG, so normalize WEBP/HEIC/AVIF/GIF
            // to PNG first. .rotate() with no args auto-orients per EXIF,
            // matching the upright handling in api/convert/image.ts.
            try {
              embedBuffer = await sharp(inputBuffer, { failOn: "none" }).rotate().png().toBuffer();
            } catch (err) {
              if (!looksLikeHeic(inputBuffer)) throw err;
              // See lib/heic-fallback.ts for why sharp's native HEIC decode
              // fails on some real iPhone photos.
              embedBuffer = await sharpFromHeicFallback(await decodeHeicFallback(inputBuffer)).png().toBuffer();
            }
            isPng = true;
          }
          const image = isPng ? await doc.embedPng(embedBuffer) : await doc.embedJpg(embedBuffer);
          const page = doc.addPage([image.width, image.height]);
          page.drawImage(image, { x: 0, y: 0, width: image.width, height: image.height });
        }
        outputBuffer = Buffer.from(await doc.save());
        contentType = "application/pdf";
        filename = "images.pdf";
        break;
      }

      default:
        return new Response(JSON.stringify({ error: "Unsupported operation." }), { status: 400 });
    }

    await finalizeConversionJob(jobId, outputBuffer, contentType);

    return new Response(new Uint8Array(outputBuffer), {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": contentDisposition(filename),
        ...extraHeaders,
      },
    });
  } catch (err) {
    await failConversionJob(jobId);
    let message = err instanceof Error ? err.message : "Conversion failed.";
    // pdf-lib's own error for encrypted input names its API directly
    // ("PDFDocument.load(..., { ignoreEncryption: true })"), which is
    // meaningless to an end user. Every operation here except "unlock"
    // loads without ignoreEncryption, so this only fires for genuinely
    // encrypted input.
    if (message.includes("is encrypted")) {
      message = "This PDF is password-protected or encrypted, and ConvertBrio can't process protected PDFs yet.";
    }
    return new Response(JSON.stringify({ error: message }), { status: 422 });
  }
};
