import type { APIRoute } from "astro";
import { getTool } from "../../../data/tools";
import { recordConversionAttempt, finalizeConversionJob, failConversionJob } from "../../../lib/conversion-jobs";
import { contentDisposition } from "../../../lib/content-disposition";
import { wordToPdf, pdfToDocx, excelToPdf, powerpointToPdf } from "../../../lib/office-convert";
import { renderPdfToImages } from "./pdf";

// Free-tier cap from pricing.astro. A global hard cap until M3 wires
// per-plan limits (Pro/Business get raised caps).
const MAX_BYTES = 25 * 1024 * 1024;
const MAX_FILES = 25;

const DOCX_MIME = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

function baseName(filename: string) {
  const dot = filename.lastIndexOf(".");
  return dot > 0 ? filename.slice(0, dot) : filename;
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
  if (!tool || tool.kind !== "office") {
    return new Response(JSON.stringify({ error: "Unknown document tool." }), { status: 400 });
  }

  const jobId = await recordConversionAttempt(slug, locals.user?.id ?? null);

  try {
    let outputBuffer: Buffer;
    let contentType: string;
    let filename: string;
    const file = files[0];

    switch (tool.operation) {
      case "word-to-pdf": {
        outputBuffer = await wordToPdf(Buffer.from(await file.arrayBuffer()));
        contentType = "application/pdf";
        filename = `${baseName(file.name)}.pdf`;
        break;
      }

      case "pdf-to-word": {
        outputBuffer = await pdfToDocx(new Uint8Array(await file.arrayBuffer()));
        contentType = DOCX_MIME;
        filename = `${baseName(file.name)}.docx`;
        break;
      }

      case "word-to-jpg":
      case "word-to-png": {
        const format = tool.operation === "word-to-png" ? "png" : "jpeg";
        const ext = format === "png" ? "png" : "jpg";
        const pdfBuffer = await wordToPdf(Buffer.from(await file.arrayBuffer()));
        const images = await renderPdfToImages(new Uint8Array(pdfBuffer), format);

        if (images.length === 1) {
          outputBuffer = images[0];
          contentType = format === "png" ? "image/png" : "image/jpeg";
          filename = `${baseName(file.name)}.${ext}`;
        } else {
          const JSZip = (await import("jszip")).default;
          const zip = new JSZip();
          images.forEach((image, index) => zip.file(`page-${index + 1}.${ext}`, image));
          outputBuffer = await zip.generateAsync({ type: "nodebuffer" });
          contentType = "application/zip";
          filename = `${baseName(file.name)}-pages.zip`;
        }
        break;
      }

      case "excel-to-pdf": {
        outputBuffer = await excelToPdf(Buffer.from(await file.arrayBuffer()));
        contentType = "application/pdf";
        filename = `${baseName(file.name)}.pdf`;
        break;
      }

      case "powerpoint-to-pdf": {
        outputBuffer = await powerpointToPdf(Buffer.from(await file.arrayBuffer()));
        contentType = "application/pdf";
        filename = `${baseName(file.name)}.pdf`;
        break;
      }
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
