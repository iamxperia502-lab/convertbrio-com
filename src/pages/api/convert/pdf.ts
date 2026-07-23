import type { APIRoute } from "astro";
import { PDFDocument, StandardFonts, degrees, rgb } from "pdf-lib";
import JSZip from "jszip";
import { PDFiumLibrary } from "@hyzyla/pdfium/browser/base64";
import { getTool } from "../../../data/tools";
import { recordConversionAttempt, finalizeConversionJob, failConversionJob } from "../../../lib/conversion-jobs";
import { contentDisposition } from "../../../lib/content-disposition";
import { encodeImage, type RawImage } from "../../../lib/image-pipeline";

// Free-tier cap from pricing.astro. A global hard cap until M3 wires per-plan limits.
const MAX_BYTES = 25 * 1024 * 1024;
const MAX_FILES = 25;

function baseName(filename: string) {
  const dot = filename.lastIndexOf(".");
  return dot > 0 ? filename.slice(0, dot) : filename;
}

// pdfium is WASM (works in Cloudflare Workers), unlike the old pdfjs-dist + `canvas`
// pairing, which needed a native canvas 2D context to rasterize pages. The library
// instance is cached at module scope since Workers isolates get reused across requests.
let pdfiumLibrary: ReturnType<typeof PDFiumLibrary.init> | null = null;
function getPdfiumLibrary() {
  if (!pdfiumLibrary) {
    pdfiumLibrary = PDFiumLibrary.init({ disableBase64Warning: true });
  }
  return pdfiumLibrary;
}

export async function renderPdfToImages(bytes: Uint8Array, format: "jpeg" | "png"): Promise<Uint8Array[]> {
  const library = await getPdfiumLibrary();
  const document = await library.loadDocument(bytes);
  const images: Uint8Array[] = [];

  try {
    for (const page of document.pages()) {
      // Identity render callback: pdfium hands back the raw RGBA bitmap instead of
      // encoding it itself, and we encode via the same jsquash pipeline image.ts uses.
      const rendered = await page.render({ scale: 2, render: async (options) => options.data });
      const image: RawImage = {
        width: rendered.width,
        height: rendered.height,
        data: new Uint8ClampedArray(rendered.data.buffer, rendered.data.byteOffset, rendered.data.length),
      };
      images.push(await encodeImage(format, image, 90));
    }
  } finally {
    document.destroy();
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
    let outputBuffer: Uint8Array;
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
