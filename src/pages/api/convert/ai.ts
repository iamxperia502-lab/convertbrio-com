import type { APIRoute } from "astro";
import sharp from "sharp";
import { createRequire } from "node:module";
import util from "node:util";
import { getTool, type AiOperation } from "../../../data/tools";
import { recordConversionAttempt, finalizeConversionJob, failConversionJob } from "../../../lib/conversion-jobs";
import { contentDisposition } from "../../../lib/content-disposition";

const MAX_BYTES = 20 * 1024 * 1024;

// The ESRGAN model's intermediate feature maps run at ~input resolution
// (64 channels, float32) before the upscaling step, so memory scales with
// input pixel count rather than file size. A file well under MAX_BYTES can
// still OOM the function - e.g. a 1616x944 PNG (86 KB) blew past available
// memory with "OOM when allocating tensor with shape[1,944,1616,64]".
// Downscaling first keeps that feature-map size bounded.
const MAX_UPSCALE_INPUT_DIMENSION = 1024;

const FILENAME_SUFFIX: Record<AiOperation, string> = {
  upscale: "upscaled",
  enhance: "enhanced",
};

function baseName(filename: string) {
  const dot = filename.lastIndexOf(".");
  return dot > 0 ? filename.slice(0, dot) : filename;
}

// Deterministic auto-enhance: no AI model, no external call, no cost.
// Same technique used by "Auto Enhance" in tools like Snapseed - auto levels
// (normalize), a mild saturation/brightness lift, and unsharp-mask sharpening.
async function enhanceLocally(inputBuffer: Buffer): Promise<{ buffer: Buffer; format: "jpeg" | "png" }> {
  const metadata = await sharp(inputBuffer, { failOn: "none" }).metadata();
  const format: "jpeg" | "png" = metadata.format === "png" ? "png" : "jpeg";

  let image = sharp(inputBuffer, { failOn: "none" })
    .rotate() // auto-orient per EXIF before any other op
    .normalize() // stretch contrast to use the full tonal range
    .modulate({ saturation: 1.15, brightness: 1.03 })
    .sharpen({ sigma: 1 });

  image = format === "png" ? image.png() : image.jpeg({ quality: 90 });

  return { buffer: await image.toBuffer(), format };
}

async function upscaleLocally(inputBuffer: Buffer): Promise<Buffer> {
  // @tensorflow/tfjs-node's native backend still calls `util.isNullOrUndefined`,
  // which Node removed after long deprecation. Shim it back before the backend
  // loads rather than patching the published package.
  if (typeof (util as Record<string, unknown>).isNullOrUndefined !== "function") {
    (util as unknown as Record<string, unknown>).isNullOrUndefined = (value: unknown) => value === null || value === undefined;
  }

  // `upscaler/node` and the model package only declare a "require" export
  // condition (no "import"), so pull them in via createRequire rather than a
  // static ESM import. Required lazily here (not at module scope) so the
  // enhance path doesn't pay tfjs-node's native-binary load cost on every
  // cold start.
  const require = createRequire(import.meta.url);
  const tf = require("@tensorflow/tfjs-node") as typeof import("@tensorflow/tfjs-node");
  const Upscaler = require("upscaler/node");
  const model4x = require("@upscalerjs/esrgan-slim/4x");

  let inputTensor: import("@tensorflow/tfjs-node").Tensor3D | undefined;
  let outputTensor: import("@tensorflow/tfjs-node").Tensor3D | undefined;
  try {
    const upscaler = new Upscaler({ model: model4x.default ?? model4x });
    inputTensor = tf.node.decodeImage(inputBuffer, 3) as import("@tensorflow/tfjs-node").Tensor3D;

    const [height, width] = inputTensor.shape;
    if (height > MAX_UPSCALE_INPUT_DIMENSION || width > MAX_UPSCALE_INPUT_DIMENSION) {
      const scale = MAX_UPSCALE_INPUT_DIMENSION / Math.max(height, width);
      const resized = tf.image.resizeBilinear(inputTensor, [
        Math.round(height * scale),
        Math.round(width * scale),
      ]) as import("@tensorflow/tfjs-node").Tensor3D;
      inputTensor.dispose();
      inputTensor = resized;
    }

    outputTensor = (await upscaler.upscale(inputTensor, { output: "tensor" })) as import("@tensorflow/tfjs-node").Tensor3D;
    return Buffer.from(await tf.node.encodePng(outputTensor));
  } finally {
    inputTensor?.dispose();
    outputTensor?.dispose();
  }
}

export const POST: APIRoute = async ({ request, locals }) => {
  const form = await request.formData();
  const file = form.get("file");
  const slug = String(form.get("slug") ?? "");

  if (!(file instanceof File)) {
    return new Response(JSON.stringify({ error: "No file provided." }), { status: 400 });
  }
  if (file.size > MAX_BYTES) {
    return new Response(JSON.stringify({ error: "File exceeds the 20 MB limit." }), { status: 413 });
  }

  const tool = getTool(slug);
  if (!tool || tool.kind !== "ai") {
    return new Response(JSON.stringify({ error: "Unknown AI tool." }), { status: 400 });
  }

  const jobId = await recordConversionAttempt(slug, locals.user?.id ?? null);

  try {
    const inputBuffer = Buffer.from(await file.arrayBuffer());
    let outputBuffer: Buffer;
    let outputMimeType: string;

    if (tool.operation === "enhance") {
      const result = await enhanceLocally(inputBuffer);
      outputBuffer = result.buffer;
      outputMimeType = result.format === "png" ? "image/png" : "image/jpeg";
    } else {
      outputBuffer = await upscaleLocally(inputBuffer);
      outputMimeType = "image/png";
    }

    const extension = outputMimeType === "image/jpeg" ? "jpg" : "png";
    const filename = `${baseName(file.name)}-${FILENAME_SUFFIX[tool.operation]}.${extension}`;
    await finalizeConversionJob(jobId, outputBuffer, outputMimeType);

    return new Response(new Uint8Array(outputBuffer), {
      status: 200,
      headers: {
        "Content-Type": outputMimeType,
        "Content-Disposition": contentDisposition(filename),
      },
    });
  } catch (err) {
    await failConversionJob(jobId);
    const message = err instanceof Error ? err.message : "AI processing failed.";
    return new Response(JSON.stringify({ error: message }), { status: 422 });
  }
};
