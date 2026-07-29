import { createRequire } from "node:module";
import sharp from "sharp";

// libheif-js's module wraps an emscripten-generated build in ways Vite's SSR
// dev transform mangles when loaded via dynamic import() (its named export
// ends up missing/undefined). A real CJS require() sidesteps that.
const require = createRequire(import.meta.url);

// HEIC/HEIF brands in the ftyp box. Deliberately excludes "avif"/"avis" -
// AVIF failures should surface sharp's own error, not get routed through a
// decoder this fallback wasn't verified against.
const HEIC_BRANDS = new Set(["heic", "heix", "heim", "heis", "hevc", "hevx", "hevm", "hevs", "mif1", "msf1"]);

export function looksLikeHeic(buffer: Buffer): boolean {
  if (buffer.length < 12 || buffer.toString("ascii", 4, 8) !== "ftyp") return false;
  return HEIC_BRANDS.has(buffer.toString("ascii", 8, 12));
}

// libvips hardcodes a 16-item security limit on HEIC's `iref` box that
// false-positives on real iPhone photos (Live Photo/depth/portrait data
// routinely exceeds it), and sharp's `unlimited: true` escape hatch - meant
// for exactly this - triggers a separate decoder crash in the libvips
// 8.18.3 / libheif 1.23.1 build this project bundles, on the same files.
// libheif-js ships its own libheif build without vips's tighter override, so
// it decodes these files fine. It's WASM and slower than sharp's native
// decode, so it's only used as a fallback after sharp fails.
export async function decodeHeicFallback(buffer: Buffer): Promise<{ buffer: Buffer; width: number; height: number }> {
  const { HeifDecoder } = require("libheif-js") as typeof import("libheif-js");
  const images = new HeifDecoder().decode(buffer);
  if (images.length === 0) {
    throw new Error("No image found in this HEIC file.");
  }

  const image = images[0];
  const width = image.get_width();
  const height = image.get_height();

  // HEIF bakes rotation/mirroring (irot/imir) into the decode itself, unlike
  // JPEG's advisory EXIF orientation tag - the result is already upright.
  const { data } = await new Promise<{ data: Uint8ClampedArray }>((resolve, reject) => {
    image.display({ data: new Uint8ClampedArray(width * height * 4), width, height }, (result) => {
      if (!result) {
        reject(new Error("Couldn't decode this HEIC file."));
        return;
      }
      resolve(result);
    });
  });

  return { buffer: Buffer.from(data.buffer, data.byteOffset, data.byteLength), width, height };
}

export function sharpFromHeicFallback(decoded: { buffer: Buffer; width: number; height: number }) {
  return sharp(decoded.buffer, { raw: { width: decoded.width, height: decoded.height, channels: 4 } });
}
