import type { APIRoute } from "astro";
import sharp from "sharp";
import { getTool } from "../../../data/tools";
import { recordConversionAttempt, finalizeConversionJob, failConversionJob } from "../../../lib/conversion-jobs";
import { contentDisposition } from "../../../lib/content-disposition";

// Free-tier cap from pricing.astro. A global hard cap until M3 wires
// per-plan limits (Pro/Business get raised caps).
const MAX_BYTES = 25 * 1024 * 1024;

const WRITABLE_FORMATS = ["jpeg", "png", "webp", "avif", "gif"] as const;
type WritableFormat = (typeof WRITABLE_FORMATS)[number];

const FORMAT_MIME: Record<WritableFormat, string> = {
  jpeg: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
  avif: "image/avif",
  gif: "image/gif",
};

function isWritableFormat(value: string): value is WritableFormat {
  return (WRITABLE_FORMATS as readonly string[]).includes(value);
}

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
  if (!tool || tool.kind !== "image") {
    return new Response(JSON.stringify({ error: "Unknown image tool." }), { status: 400 });
  }

  const jobId = await recordConversionAttempt(slug, locals.user?.id ?? null);

  if (tool.operation === "remove-background") {
    try {
      const { removeBackground } = await import("@imgly/background-removal-node");
      // Pass a Blob with an explicit MIME type: the library wraps a raw
      // Buffer/Uint8Array in `new Blob([...])` with no type, which fails its
      // own format detection ("Unsupported format: " with an empty type).
      const inputBlob = new Blob([await file.arrayBuffer()], { type: file.type || "image/png" });
      // The "small" model is ~42MB vs. "medium"'s ~84MB; astro.config.mjs
      // only bundles the model tier selected here, so keep these in sync.
      const outputBlob = await removeBackground(inputBlob, { model: "small" });
      const outputBuffer = Buffer.from(await outputBlob.arrayBuffer());
      const filename = `${baseName(file.name)}-no-bg.png`;

      await finalizeConversionJob(jobId, outputBuffer, "image/png");

      return new Response(outputBuffer, {
        status: 200,
        headers: {
          "Content-Type": "image/png",
          "Content-Disposition": contentDisposition(filename),
        },
      });
    } catch (err) {
      await failConversionJob(jobId);
      const message = err instanceof Error ? err.message : "Background removal failed.";
      return new Response(JSON.stringify({ error: message }), { status: 422 });
    }
  }

  try {
    const inputBuffer = Buffer.from(await file.arrayBuffer());
    // .rotate() with no args auto-orients the pixels per EXIF before any further op.
    let image = sharp(inputBuffer, { failOn: "none" }).rotate();
    const metadata = await sharp(inputBuffer).metadata();

    const requestedFormat = String(form.get("format") ?? "");
    let outputFormat: WritableFormat =
      tool.outputFormat ?? (isWritableFormat(requestedFormat) ? requestedFormat : null) ?? (isWritableFormat(metadata.format ?? "") ? (metadata.format as WritableFormat) : "jpeg");

    switch (tool.operation) {
      case "convert": {
        const quality = Number(form.get("quality") ?? 85);
        image = image.toFormat(outputFormat, { quality });
        break;
      }
      case "compress": {
        const quality = Number(form.get("quality") ?? 60);
        image = image.toFormat(outputFormat, { quality });
        break;
      }
      case "resize": {
        const width = form.get("width") ? Number(form.get("width")) : undefined;
        const height = form.get("height") ? Number(form.get("height")) : undefined;
        if (!width && !height) {
          throw new Error("Provide a width and/or height to resize.");
        }
        image = image.resize(width, height, { fit: "inside", withoutEnlargement: true }).toFormat(outputFormat);
        break;
      }
      case "crop": {
        const left = Number(form.get("left") ?? 0);
        const top = Number(form.get("top") ?? 0);
        const width = Number(form.get("width") ?? 0);
        const height = Number(form.get("height") ?? 0);
        if (!width || !height) {
          throw new Error("Provide a crop width and height.");
        }
        image = image.extract({ left, top, width, height }).toFormat(outputFormat);
        break;
      }
      case "rotate": {
        const degrees = Number(form.get("degrees") ?? 90);
        image = image.rotate(degrees).toFormat(outputFormat);
        break;
      }
    }

    const outputBuffer = await image.toBuffer();
    const contentType = FORMAT_MIME[outputFormat];
    const filename = `${baseName(file.name)}.${outputFormat === "jpeg" ? "jpg" : outputFormat}`;

    await finalizeConversionJob(jobId, outputBuffer, contentType);

    return new Response(outputBuffer, {
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
