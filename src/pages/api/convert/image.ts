import type { APIRoute } from "astro";
import { getTool } from "../../../data/tools";
import { recordConversionAttempt, finalizeConversionJob, failConversionJob } from "../../../lib/conversion-jobs";
import { contentDisposition } from "../../../lib/content-disposition";
import {
  decodeImage,
  encodeImage,
  detectFormat,
  cropImage,
  rotateImage,
  resizeImage,
  readJpegOrientation,
  applyExifOrientation,
  type RawImage,
  type WritableImageFormat,
} from "../../../lib/image-pipeline";

// Free-tier cap from pricing.astro. A global hard cap until M3 wires
// per-plan limits (Pro/Business get raised caps).
const MAX_BYTES = 25 * 1024 * 1024;

const WRITABLE_FORMATS = ["jpeg", "png", "webp", "gif"] as const;

const FORMAT_MIME: Record<WritableImageFormat, string> = {
  jpeg: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
  gif: "image/gif",
};

function isWritableFormat(value: string): value is WritableImageFormat {
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

  try {
    const inputBuffer = new Uint8Array(await file.arrayBuffer());
    const detectedFormat = await detectFormat(inputBuffer);
    if (!detectedFormat) {
      throw new Error("Unrecognized or unsupported image format.");
    }

    let image: RawImage = await decodeImage(detectedFormat, inputBuffer);
    if (detectedFormat === "jpeg") {
      const orientation = readJpegOrientation(inputBuffer);
      image = applyExifOrientation(image, orientation);
    }

    const requestedFormat = String(form.get("format") ?? "");
    const outputFormat: WritableImageFormat =
      tool.outputFormat ??
      (isWritableFormat(requestedFormat) ? requestedFormat : null) ??
      (isWritableFormat(detectedFormat) ? detectedFormat : "jpeg");

    let quality = 85;

    switch (tool.operation) {
      case "convert": {
        quality = Number(form.get("quality") ?? 85);
        break;
      }
      case "compress": {
        quality = Number(form.get("quality") ?? 60);
        break;
      }
      case "resize": {
        const width = form.get("width") ? Number(form.get("width")) : undefined;
        const height = form.get("height") ? Number(form.get("height")) : undefined;
        if (!width && !height) {
          throw new Error("Provide a width and/or height to resize.");
        }
        image = await resizeImage(image, width, height);
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
        image = cropImage(image, left, top, width, height);
        break;
      }
      case "rotate": {
        const degrees = Number(form.get("degrees") ?? 90);
        image = rotateImage(image, degrees);
        break;
      }
    }

    const outputBuffer = await encodeImage(outputFormat, image, quality);
    const contentType = FORMAT_MIME[outputFormat];
    const filename = `${baseName(file.name)}.${outputFormat === "jpeg" ? "jpg" : outputFormat}`;

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
