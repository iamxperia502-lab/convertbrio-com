import type { APIRoute } from "astro";
import { getTool } from "../../../data/tools";
import { recordConversionAttempt, finalizeConversionJob, failConversionJob } from "../../../lib/conversion-jobs";
import { contentDisposition } from "../../../lib/content-disposition";
import { wordToPdf, pdfToDocx, excelToPdf, powerpointToPdf, mergePdfBuffers, compressOfficeMedia } from "../../../lib/office-convert";
import { renderPdfToImages } from "./pdf";
import { resolveConversionForm } from "../../../lib/blob-input";

// Global 100 MB cap advertised across the site. Uploads route through
// Vercel Blob (see resolveConversionForm in lib/blob-input.ts), so this is a
// real processing-capacity limit, not a request-body-size workaround.
const MAX_BYTES = 100 * 1024 * 1024;
const MAX_FILES = 25;

const DOCX_MIME = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
const PPTX_MIME = "application/vnd.openxmlformats-officedocument.presentationml.presentation";

function baseName(filename: string) {
  const dot = filename.lastIndexOf(".");
  return dot > 0 ? filename.slice(0, dot) : filename;
}

function detectOfficeKind(file: File): "docx" | "xlsx" | "pptx" | "pdf" | "unsupported" {
  const ext = file.name.toLowerCase().split(".").pop() ?? "";
  if (ext === "pdf" || file.type === "application/pdf") return "pdf";
  if (ext === "docx") return "docx";
  if (ext === "xlsx" || ext === "xls") return "xlsx";
  if (ext === "pptx") return "pptx";
  return "unsupported"; // legacy .doc/.ppt or an unrecognized extension
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

      case "compress-word":
      case "compress-powerpoint": {
        const kind = tool.operation === "compress-word" ? "docx" : "pptx";
        if (detectOfficeKind(file) !== kind) {
          throw new Error(
            kind === "docx"
              ? `"${file.name}" isn't a .docx file. Legacy .doc isn't supported — open it in Word and use File → Save As to convert it.`
              : `"${file.name}" isn't a .pptx file. Legacy .ppt isn't supported — open it in PowerPoint and use File → Save As to convert it.`,
          );
        }
        outputBuffer = await compressOfficeMedia(Buffer.from(await file.arrayBuffer()), kind);
        contentType = kind === "docx" ? DOCX_MIME : PPTX_MIME;
        filename = `${baseName(file.name)}-compressed.${kind}`;
        break;
      }

      case "merge-documents": {
        const pdfBuffers: Buffer[] = [];
        for (const f of files) {
          const buf = Buffer.from(await f.arrayBuffer());
          switch (detectOfficeKind(f)) {
            case "pdf": pdfBuffers.push(buf); break;
            case "docx": pdfBuffers.push(await wordToPdf(buf)); break;
            case "xlsx": pdfBuffers.push(await excelToPdf(buf)); break;
            case "pptx": pdfBuffers.push(await powerpointToPdf(buf)); break;
            case "unsupported":
              throw new Error(`"${f.name}" is a legacy .doc/.ppt/.xls file — please save it as .docx/.pptx/.xlsx and try again.`);
          }
        }
        outputBuffer = await mergePdfBuffers(pdfBuffers);
        contentType = "application/pdf";
        filename = "merged.pdf";
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
