import type { APIRoute } from "astro";
import sharp from "sharp";
import { Document, Packer, Paragraph, TextRun, PageBreak } from "docx";
import { PDFDocument } from "pdf-lib";
import { getTool } from "../../../data/tools";
import { recordConversionAttempt, finalizeConversionJob, failConversionJob } from "../../../lib/conversion-jobs";
import { contentDisposition } from "../../../lib/content-disposition";
import { looksLikeHeic, decodeHeicFallback, sharpFromHeicFallback } from "../../../lib/heic-fallback";
import { resolveConversionForm } from "../../../lib/blob-input";
import { renderPdfToImages } from "./pdf";

const MAX_BYTES = 100 * 1024 * 1024;
// Same wall-clock reasoning as MAX_OCR_PAGES in pdf.ts: OCR cost scales with
// pages, not bytes.
const MAX_OCR_PAGES = 50;

// Tesseract language codes offered on the tool page. Anything else falls back
// to English rather than being passed through to the worker.
const LANGUAGES = new Set(["eng", "por", "spa", "fra", "deu", "ita", "ind"]);

function baseName(filename: string) {
  const dot = filename.lastIndexOf(".");
  return dot > 0 ? filename.slice(0, dot) : filename;
}

async function imageToPng(input: Buffer): Promise<Buffer> {
  try {
    // .rotate() with no args auto-orients per EXIF so text is upright for OCR.
    return await sharp(input, { failOn: "none" }).rotate().png().toBuffer();
  } catch (err) {
    if (!looksLikeHeic(input)) throw err;
    return sharpFromHeicFallback(await decodeHeicFallback(input)).png().toBuffer();
  }
}

export const POST: APIRoute = async ({ request, locals }) => {
  let form: FormData;
  try {
    form = await resolveConversionForm(request);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Upload failed.";
    return new Response(JSON.stringify({ error: message }), { status: 400 });
  }
  const file = form.get("file");
  const slug = String(form.get("slug") ?? "");

  if (!(file instanceof File)) {
    return new Response(JSON.stringify({ error: "No file provided." }), { status: 400 });
  }
  if (file.size > MAX_BYTES) {
    return new Response(JSON.stringify({ error: "File exceeds the 100 MB limit." }), { status: 413 });
  }
  const tool = getTool(slug);
  if (!tool || tool.kind !== "ocr") {
    return new Response(JSON.stringify({ error: "Unknown OCR tool." }), { status: 400 });
  }

  const requestedLang = String(form.get("lang") ?? "eng");
  const lang = LANGUAGES.has(requestedLang) ? requestedLang : "eng";
  const jobId = await recordConversionAttempt(slug, locals.user?.id ?? null);

  try {
    const bytes = Buffer.from(await file.arrayBuffer());
    const isPdf = file.type === "application/pdf" || bytes.subarray(0, 5).toString("latin1") === "%PDF-";

    if (isPdf && tool.operation === "image-to-text") {
      throw new Error("Image to Text reads image files. For a PDF, use Scan to Word or OCR PDF.");
    }

    let pageImages: Buffer[];
    if (isPdf) {
      const pageCount = (await PDFDocument.load(bytes)).getPageCount();
      if (pageCount > MAX_OCR_PAGES) {
        throw new Error(`Scan to Word supports PDFs up to ${MAX_OCR_PAGES} pages (this one has ${pageCount}). Split it first.`);
      }
      pageImages = await renderPdfToImages(new Uint8Array(bytes), "png");
    } else {
      pageImages = [await imageToPng(bytes)];
    }

    const { createWorker } = await import("tesseract.js");
    const worker = await createWorker(lang, undefined, {
      // Vercel functions may only write under /tmp; see the same option in pdf.ts.
      cachePath: "/tmp",
      errorHandler: (e) => console.error("[tesseract]", e),
    });

    const pageTexts: string[] = [];
    try {
      for (const image of pageImages) {
        const result = await worker.recognize(image);
        pageTexts.push(result.data.text.replace(/\r/g, "").trim());
      }
    } finally {
      await worker.terminate();
    }

    if (pageTexts.every((t) => t.length === 0)) {
      throw new Error(
        "No text was detected. Use a sharper, higher-resolution image of printed text, straighten the page, and pick the right language.",
      );
    }

    let outputBuffer: Buffer;
    let contentType: string;
    let filename: string;

    if (tool.operation === "image-to-text") {
      outputBuffer = Buffer.from(pageTexts.join("\n\n"), "utf-8");
      contentType = "text/plain; charset=utf-8";
      filename = `${baseName(file.name)}.txt`;
    } else {
      const children: Paragraph[] = [];
      pageTexts.forEach((text, pageIndex) => {
        if (pageIndex > 0) children.push(new Paragraph({ children: [new PageBreak()] }));
        // Tesseract separates paragraphs with blank lines; single newlines
        // are line wraps within a paragraph.
        for (const block of text.split(/\n{2,}/)) {
          const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);
          if (lines.length === 0) continue;
          children.push(
            new Paragraph({
              spacing: { after: 160 },
              children: lines.flatMap((line, i) => [new TextRun({ text: line, break: i > 0 ? 1 : 0 })]),
            }),
          );
        }
      });
      const doc = new Document({ sections: [{ children }] });
      outputBuffer = Buffer.from(await Packer.toBuffer(doc));
      contentType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
      filename = `${baseName(file.name)}.docx`;
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
    const message = err instanceof Error ? err.message : "Text recognition failed.";
    return new Response(JSON.stringify({ error: message }), { status: 422 });
  }
};
