import type { APIRoute } from "astro";
import { fileURLToPath } from "node:url";
import { PDFDocument, StandardFonts, degrees, rgb } from "pdf-lib";
import JSZip from "jszip";
import { getTool } from "../../../data/tools";
import { recordConversionAttempt, finalizeConversionJob, failConversionJob } from "../../../lib/conversion-jobs";
import { contentDisposition } from "../../../lib/content-disposition";
import { ensureDomMatrixPolyfill } from "../../../lib/pdfjs-node-polyfills";

// pdfjs-dist needs this to substitute a fallback font for any text that uses
// a standard PDF font (Helvetica, Times, etc.) without embedding it - the
// common case for most real-world PDFs, as opposed to files pdf-lib itself
// generates with embedded fonts. Without it, pdfjs throws
// "UnknownErrorException: Ensure that the `standardFontDataUrl` API
// parameter is provided" while rendering any page that hits this path.
// `import.meta.resolve` (not a relative path) so this keeps working
// regardless of how the package manager nests/hoists node_modules.
const standardFontDataUrl = fileURLToPath(new URL("./standard_fonts/", import.meta.resolve("pdfjs-dist/package.json")));

// Free-tier cap from pricing.astro. A global hard cap until M3 wires per-plan limits.
const MAX_BYTES = 25 * 1024 * 1024;
const MAX_FILES = 25;

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

export const POST: APIRoute = async ({ request, locals }) => {
  const form = await request.formData();
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
    return new Response(JSON.stringify({ error: "Files exceed the 25 MB limit." }), { status: 413 });
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
        // Best-effort: pdf-lib can't re-encode embedded images like Ghostscript,
        // but object streams + dropping stale metadata still shave real size off
        // most PDFs. See the tool description in src/data/tools.ts.
        const src = await PDFDocument.load(await files[0].arrayBuffer());
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

      case "unlock": {
        // Only lifts owner-password/permission restrictions on PDFs pdf-lib can
        // still parse. A PDF that requires a password just to *open* can't be
        // decrypted here since we don't collect a password in this tool.
        const src = await PDFDocument.load(await files[0].arrayBuffer(), { ignoreEncryption: true });
        outputBuffer = Buffer.from(await src.save());
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
          const pageImages = await renderPdfToImages(new Uint8Array(await files[0].arrayBuffer()), "png");
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

      case "jpg-to-pdf": {
        const doc = await PDFDocument.create();
        for (const file of files) {
          const bytes = new Uint8Array(await file.arrayBuffer());
          const image = file.type === "image/png" ? await doc.embedPng(bytes) : await doc.embedJpg(bytes);
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
      },
    });
  } catch (err) {
    await failConversionJob(jobId);
    const message = err instanceof Error ? err.message : "Conversion failed.";
    return new Response(JSON.stringify({ error: message }), { status: 422 });
  }
};
