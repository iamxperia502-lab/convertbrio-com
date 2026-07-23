import type { APIRoute } from "astro";
import { getTool } from "../../../data/tools";
import { recordConversionAttempt, finalizeConversionJob, failConversionJob } from "../../../lib/conversion-jobs";
import { contentDisposition } from "../../../lib/content-disposition";
import { pdfToDocx } from "../../../lib/office-convert";

// Free-tier cap from pricing.astro. A global hard cap until M3 wires
// per-plan limits (Pro/Business get raised caps).
const MAX_BYTES = 25 * 1024 * 1024;

const DOCX_MIME = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

function baseName(filename: string) {
  const dot = filename.lastIndexOf(".");
  return dot > 0 ? filename.slice(0, dot) : filename;
}

export const POST: APIRoute = async ({ request, locals }) => {
  const form = await request.formData();
  const file = form.get("file");
  const slug = String(form.get("slug") ?? "");

  if (!(file instanceof File)) {
    return new Response(JSON.stringify({ error: "No file provided." }), { status: 400 });
  }
  if (file.size > MAX_BYTES) {
    return new Response(JSON.stringify({ error: "File exceeds the 25 MB limit." }), { status: 413 });
  }

  const tool = getTool(slug);
  if (!tool || tool.kind !== "office") {
    return new Response(JSON.stringify({ error: "Unknown document tool." }), { status: 400 });
  }

  const jobId = await recordConversionAttempt(slug, locals.user?.id ?? null);

  try {
    const outputBuffer = await pdfToDocx(new Uint8Array(await file.arrayBuffer()));
    const contentType = DOCX_MIME;
    const filename = `${baseName(file.name)}.docx`;

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
