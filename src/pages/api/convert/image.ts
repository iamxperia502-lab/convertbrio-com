import type { APIRoute } from "astro";
import sharp from "sharp";
import type { Sharp, Metadata } from "sharp";
import { getTool } from "../../../data/tools";
import { recordConversionAttempt, finalizeConversionJob, failConversionJob } from "../../../lib/conversion-jobs";
import { contentDisposition } from "../../../lib/content-disposition";
import { detectFaces } from "../../../lib/face-detection";
import { computeCropBox, PASSPORT_PHOTO_PX, PASSPORT_PHOTO_DPI } from "../../../lib/passport-photo";
import { looksLikeHeic, decodeHeicFallback, sharpFromHeicFallback } from "../../../lib/heic-fallback";
import { resolveConversionForm } from "../../../lib/blob-input";

// Face detection runs on a downscaled copy for speed; detected coordinates
// are then scaled back up to the full-resolution image for the actual crop,
// so output quality doesn't depend on the detection resolution.
const FACE_DETECTION_MAX_DIMENSION = 640;

// Free-tier cap from pricing.astro. A global hard cap until M3 wires
// per-plan limits (Pro/Business get raised caps). Uploads route through
// Vercel Blob (see resolveConversionForm in lib/blob-input.ts), so this is a
// real processing-capacity limit, not a request-body-size workaround.
const MAX_BYTES = 100 * 1024 * 1024;

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

const MIN_COMPRESS_QUALITY = 10;
const MAX_COMPRESS_QUALITY = 95;
const MAX_DOWNSCALE_STEPS = 6;

async function encodeAtQuality(base: Sharp, format: WritableFormat, quality: number, width?: number) {
  let pipeline = base.clone();
  if (width) pipeline = pipeline.resize({ width, withoutEnlargement: true });
  // PNG only shrinks with quality when palette quantization is enabled.
  const options = format === "png" ? { quality, palette: true } : { quality };
  return pipeline.toFormat(format, options).toBuffer();
}

// Binary-searches JPEG/WEBP/AVIF/PNG quality to fit under targetBytes, then
// returns the settings to re-apply to the caller's own pipeline (rather than
// a buffer) so the caller keeps a single `image.toFormat(...).toBuffer()`
// call site. If even the minimum quality doesn't fit, falls back to
// progressively downscaling dimensions — matching the "quality and, if
// necessary, dimensions" promise made on the tool's marketing/FAQ copy.
async function findCompressSettings(
  base: Sharp,
  format: WritableFormat,
  targetBytes: number,
): Promise<{ quality: number; width?: number }> {
  let low = MIN_COMPRESS_QUALITY;
  let high = MAX_COMPRESS_QUALITY;
  let bestQuality: number | null = null;

  while (low <= high) {
    const quality = Math.floor((low + high) / 2);
    const buffer = await encodeAtQuality(base, format, quality);
    if (buffer.length <= targetBytes) {
      bestQuality = quality;
      low = quality + 1;
    } else {
      high = quality - 1;
    }
  }

  if (bestQuality !== null) return { quality: bestQuality };

  const metadata = await base.clone().metadata();
  let width = metadata.width;
  let buffer = await encodeAtQuality(base, format, MIN_COMPRESS_QUALITY);

  for (let i = 0; i < MAX_DOWNSCALE_STEPS && buffer.length > targetBytes && width && width > 50; i++) {
    width = Math.round(width * 0.85);
    buffer = await encodeAtQuality(base, format, MIN_COMPRESS_QUALITY, width);
  }

  return { quality: MIN_COMPRESS_QUALITY, width };
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

  if (tool.operation === "passport-photo") {
    try {
      const inputBuffer = Buffer.from(await file.arrayBuffer());
      // uprightBuffer is a re-encoded buffer (not the original bytes) so
      // every sharp() call below can treat it uniformly, regardless of
      // which branch produced it.
      let uprightBuffer: Buffer;
      try {
        // .rotate() with no args auto-orients per EXIF - detection and the
        // final crop both need to work in this same upright coordinate space.
        uprightBuffer = await sharp(inputBuffer, { failOn: "none" }).rotate().toBuffer();
      } catch (err) {
        if (!looksLikeHeic(inputBuffer)) throw err;
        // See lib/heic-fallback.ts for why sharp's native HEIC decode fails
        // on some real iPhone photos. Re-encode to PNG (lossless) so the
        // rest of this handler doesn't need to know a fallback happened.
        uprightBuffer = await sharpFromHeicFallback(await decodeHeicFallback(inputBuffer)).png().toBuffer();
      }
      const { width: fullWidth, height: fullHeight } = await sharp(uprightBuffer).metadata();
      if (!fullWidth || !fullHeight) {
        throw new Error("Couldn't read this image's dimensions.");
      }

      const detectionScale = Math.min(1, FACE_DETECTION_MAX_DIMENSION / Math.max(fullWidth, fullHeight));
      const detectionWidth = Math.round(fullWidth * detectionScale);
      const detectionHeight = Math.round(fullHeight * detectionScale);
      const { data: rgba } = await sharp(uprightBuffer)
        .resize(detectionWidth, detectionHeight)
        .ensureAlpha()
        .raw()
        .toBuffer({ resolveWithObject: true });

      const detected = await detectFaces(rgba, detectionWidth, detectionHeight);
      if (detected.length === 0) {
        throw new Error("No face found in this photo. Try a clear, front-facing photo with good lighting.");
      }
      if (detected.length > 1) {
        throw new Error("This photo has more than one face. Upload a photo with just one person.");
      }

      // Scale the detection (run on a downscaled copy) back up to full-res
      // source-image coordinates.
      const inverseScale = 1 / detectionScale;
      const face = detected[0];
      const faceFullRes = {
        x: face.x * inverseScale,
        y: face.y * inverseScale,
        width: face.width * inverseScale,
        height: face.height * inverseScale,
        eyeRight: [face.eyeRight[0] * inverseScale, face.eyeRight[1] * inverseScale] as [number, number],
        eyeLeft: [face.eyeLeft[0] * inverseScale, face.eyeLeft[1] * inverseScale] as [number, number],
        confidence: face.confidence,
      };

      const cropBox = computeCropBox(faceFullRes, fullWidth, fullHeight);
      if (!cropBox) {
        throw new Error("Not enough space around the face in this photo. Try a photo taken further back, with more room above the head and around the shoulders.");
      }

      // Explicit .png() rather than inheriting the upload's original format
      // (often JPEG): the Blob type below must match the actual bytes for
      // @imgly/background-removal-node's format detection, and lossless PNG
      // avoids compounding compression artifacts before the cutout step.
      const croppedBuffer = await sharp(uprightBuffer)
        .extract({ left: cropBox.left, top: cropBox.top, width: cropBox.size, height: cropBox.size })
        .png()
        .toBuffer();

      const { removeBackground } = await import("@imgly/background-removal-node");
      const cutoutBlob = await removeBackground(new Blob([croppedBuffer], { type: "image/png" }), { model: "small" });
      const cutoutBuffer = Buffer.from(await cutoutBlob.arrayBuffer());

      // Two passes: withMetadata() preserves whatever metadata is already on
      // its input, not just the field being set, so setting density in the
      // same call that still touches cutoutBuffer would let the original
      // photo's EXIF (potentially including GPS) leak into the download.
      // sharp strips all metadata by default when withMetadata() is never
      // called, so the first pass (no withMetadata) produces a clean buffer
      // with nothing left to inherit before density is set on it.
      const flattenedBuffer = await sharp(cutoutBuffer)
        .flatten({ background: "#ffffff" })
        .resize(PASSPORT_PHOTO_PX, PASSPORT_PHOTO_PX)
        .jpeg({ quality: 95 })
        .toBuffer();
      const outputBuffer = await sharp(flattenedBuffer).withMetadata({ density: PASSPORT_PHOTO_DPI }).jpeg({ quality: 95 }).toBuffer();

      const filename = `${baseName(file.name)}-passport-photo.jpg`;
      await finalizeConversionJob(jobId, outputBuffer, "image/jpeg");

      return new Response(outputBuffer, {
        status: 200,
        headers: {
          "Content-Type": "image/jpeg",
          "Content-Disposition": contentDisposition(filename),
        },
      });
    } catch (err) {
      await failConversionJob(jobId);
      const message = err instanceof Error ? err.message : "Couldn't create a passport photo from this image.";
      return new Response(JSON.stringify({ error: message }), { status: 422 });
    }
  }

  try {
    const inputBuffer = Buffer.from(await file.arrayBuffer());
    let image: Sharp;
    let metadata: Metadata;
    try {
      // .rotate() with no args auto-orients the pixels per EXIF before any further op.
      image = sharp(inputBuffer, { failOn: "none" }).rotate();
      metadata = await sharp(inputBuffer).metadata();
      // Sharp can read HEIC metadata from the container's header boxes alone,
      // without invoking the actual HEVC pixel decoder - so a file that will
      // fail to decode can still pass the metadata() check above. Force a
      // cheap real decode now so that failure is caught here (and routed to
      // the HEIC fallback below) instead of surfacing as a raw libvips error
      // deep inside the operation pipeline further down.
      await image.clone().resize(8, 8).raw().toBuffer();
    } catch (err) {
      if (!looksLikeHeic(inputBuffer)) throw err;
      // See lib/heic-fallback.ts for why sharp's native HEIC decode fails on
      // some real iPhone photos. Already upright, so no .rotate() needed.
      const decoded = await decodeHeicFallback(inputBuffer);
      image = sharpFromHeicFallback(decoded);
      // Only `.format` is read below; the rest of Metadata isn't needed here.
      metadata = { format: "heif", width: decoded.width, height: decoded.height } as Metadata;
    }

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
        const targetKb = Number(form.get("targetKb") ?? 0);
        if (targetKb > 0) {
          const { quality, width } = await findCompressSettings(image, outputFormat, targetKb * 1024);
          if (width) image = image.resize({ width, withoutEnlargement: true });
          const options = outputFormat === "png" ? { quality, palette: true } : { quality };
          image = image.toFormat(outputFormat, options);
        } else {
          const quality = Number(form.get("quality") ?? 60);
          image = image.toFormat(outputFormat, { quality });
        }
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
