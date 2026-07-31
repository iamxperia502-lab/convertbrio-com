import type { APIRoute } from "astro";
import { createRequire } from "node:module";
import util from "node:util";
import { getTool, type AiOperation } from "../../../data/tools";
import { recordConversionAttempt, finalizeConversionJob, failConversionJob } from "../../../lib/conversion-jobs";
import { contentDisposition } from "../../../lib/content-disposition";

// @tensorflow/tfjs-node's native backend still calls `util.isNullOrUndefined`,
// which Node removed after long deprecation. Shim it back before the backend
// loads rather than patching the published package.
if (typeof (util as Record<string, unknown>).isNullOrUndefined !== "function") {
  (util as unknown as Record<string, unknown>).isNullOrUndefined = (value: unknown) => value === null || value === undefined;
}

// `upscaler/node` and the model packages only declare a "require" export
// condition (no "import"), so pull them in via createRequire rather than a
// static ESM import.
const require = createRequire(import.meta.url);
const tf = require("@tensorflow/tfjs-node");
const Upscaler = require("upscaler/node");
const model2x = require("@upscalerjs/esrgan-slim/2x");
const model4x = require("@upscalerjs/esrgan-slim/4x");

// Runs entirely in-process (no external API, no network call, no cost) —
// small bundled TensorFlow.js models, same pattern as the local ONNX model
// used for background removal in api/convert/image.ts.
const MAX_BYTES = 20 * 1024 * 1024;

const MODEL_BY_OPERATION: Record<AiOperation, unknown> = {
  upscale: model4x.default ?? model4x,
  enhance: model2x.default ?? model2x,
};

const FILENAME_SUFFIX: Record<AiOperation, string> = {
  upscale: "upscaled",
  enhance: "enhanced",
};

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
    return new Response(JSON.stringify({ error: "File exceeds the 20 MB limit." }), { status: 413 });
  }

  const tool = getTool(slug);
  if (!tool || tool.kind !== "ai") {
    return new Response(JSON.stringify({ error: "Unknown AI tool." }), { status: 400 });
  }

  const jobId = await recordConversionAttempt(slug, locals.user?.id ?? null);
  const model = MODEL_BY_OPERATION[tool.operation];

  let inputTensor: import("@tensorflow/tfjs-node").Tensor3D | undefined;
  let outputTensor: import("@tensorflow/tfjs-node").Tensor3D | undefined;
  try {
    const inputBuffer = Buffer.from(await file.arrayBuffer());
    const upscaler = new Upscaler({ model });

    inputTensor = tf.node.decodeImage(inputBuffer, 3) as import("@tensorflow/tfjs-node").Tensor3D;
    outputTensor = (await upscaler.upscale(inputTensor, { output: "tensor" })) as import("@tensorflow/tfjs-node").Tensor3D;
    const outputBuffer: Buffer = await tf.node.encodePng(outputTensor);

    const filename = `${baseName(file.name)}-${FILENAME_SUFFIX[tool.operation]}.png`;
    await finalizeConversionJob(jobId, outputBuffer, "image/png");

    return new Response(new Uint8Array(outputBuffer), {
      status: 200,
      headers: {
        "Content-Type": "image/png",
        "Content-Disposition": contentDisposition(filename),
      },
    });
  } catch (err) {
    await failConversionJob(jobId);
    const message = err instanceof Error ? err.message : "AI processing failed.";
    return new Response(JSON.stringify({ error: message }), { status: 422 });
  } finally {
    inputTensor?.dispose();
    outputTensor?.dispose();
  }
};
