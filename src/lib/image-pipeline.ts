// Cloudflare Workers can't run sharp (native libvips). This module replaces it with
// WASM codecs (jsquash, derived from the Squoosh app) plus plain-JS pixel operations
// for the parts sharp did in native code but that our UI only ever needs in simple form
// (exact-rect crop, 90/180/270 rotate — see src/pages/tools/[slug].astro for the actual
// UI constraints that make the plain-JS versions sufficient instead of a general affine
// transform).

import decodeJpeg, { init as initJpegDecode } from "@jsquash/jpeg/decode";
import encodeJpeg, { init as initJpegEncode } from "@jsquash/jpeg/encode";
import decodePng, { init as initPngDecode } from "@jsquash/png/decode";
import encodePng, { init as initPngEncode } from "@jsquash/png/encode";
import decodeWebp, { init as initWebpDecode } from "@jsquash/webp/decode";
import encodeWebp, { init as initWebpEncode } from "@jsquash/webp/encode";
import decodeAvif, { init as initAvifDecode } from "@jsquash/avif/decode";
import encodeAvif, { init as initAvifEncode } from "@jsquash/avif/encode";
import resize, { initResize } from "@jsquash/resize";
import { GIFEncoder, quantize, applyPalette } from "gifenc";
import { GifReader } from "omggif";
// @ts-expect-error - libheif-js ships .d.ts files that don't resolve cleanly against
// this deep .mjs subpath; the HeifModule shape used below is declared locally instead.
import createHeifModule from "libheif-js/libheif-wasm/libheif-bundle.mjs";

// Vite's `?module` suffix compiles the .wasm to a WebAssembly.Module at build time
// instead of a URL, which is what jsquash's `init()` functions expect to run without
// a `fetch()` of a same-origin asset (not available for node_modules-relative paths
// inside a Workers isolate).
import jpegDecWasm from "@jsquash/jpeg/codec/dec/mozjpeg_dec.wasm?module";
import jpegEncWasm from "@jsquash/jpeg/codec/enc/mozjpeg_enc.wasm?module";
import pngWasm from "@jsquash/png/codec/pkg/squoosh_png_bg.wasm?module";
import webpDecWasm from "@jsquash/webp/codec/dec/webp_dec.wasm?module";
import webpEncWasm from "@jsquash/webp/codec/enc/webp_enc.wasm?module";
import avifDecWasm from "@jsquash/avif/codec/dec/avif_dec.wasm?module";
import avifEncWasm from "@jsquash/avif/codec/enc/avif_enc.wasm?module";
import resizeWasm from "@jsquash/resize/lib/resize/pkg/squoosh_resize_bg.wasm?module";
import heifWasm from "libheif-js/libheif-wasm/libheif.wasm?module";

export interface RawImage {
  width: number;
  height: number;
  data: Uint8ClampedArray;
}

export type ImageFormat = "jpeg" | "png" | "webp" | "avif" | "gif" | "heic";
export type WritableImageFormat = "jpeg" | "png" | "webp" | "avif" | "gif";

let wasmReady: Promise<void> | null = null;

function initAll(): Promise<void> {
  if (!wasmReady) {
    wasmReady = Promise.all([
      initJpegDecode(jpegDecWasm),
      initJpegEncode(jpegEncWasm),
      initPngDecode(pngWasm),
      initPngEncode(pngWasm),
      initWebpDecode(webpDecWasm),
      initWebpEncode(webpEncWasm),
      initAvifDecode(avifDecWasm),
      initAvifEncode(avifEncWasm),
      initResize(resizeWasm),
    ]).then(() => undefined);
  }
  return wasmReady;
}

function decodeGif(buffer: Uint8Array): RawImage {
  const reader = new GifReader(buffer);
  const width = reader.width;
  const height = reader.height;
  const data = new Uint8ClampedArray(width * height * 4);
  reader.decodeAndBlitFrameRGBA(0, data);
  return { width, height, data };
}

function encodeGif(image: RawImage): Uint8Array {
  const { data, width, height } = image;
  const palette = quantize(data, 256);
  const indexed = applyPalette(data, palette);
  const gif = GIFEncoder();
  gif.writeFrame(indexed, width, height, { palette });
  gif.finish();
  return gif.bytes();
}

interface HeifImage {
  get_width(): number;
  get_height(): number;
  display(
    target: { data: Uint8ClampedArray; width: number; height: number },
    callback: (result: { data: Uint8ClampedArray; width: number; height: number } | null) => void
  ): void;
}
interface HeifModule {
  HeifDecoder: new () => { decode(buffer: Uint8Array): HeifImage[] };
}

let heifModuleReady: Promise<HeifModule> | null = null;
function getHeifModule(): Promise<HeifModule> {
  if (!heifModuleReady) {
    heifModuleReady = createHeifModule({
      instantiateWasm(imports: WebAssembly.Imports, successCallback: (instance: WebAssembly.Instance, module: WebAssembly.Module) => void) {
        const instance = new WebAssembly.Instance(heifWasm, imports);
        successCallback(instance, heifWasm);
        return instance.exports;
      },
    });
  }
  return heifModuleReady;
}

async function decodeHeic(buffer: Uint8Array): Promise<RawImage> {
  const heif = await getHeifModule();
  const images = new heif.HeifDecoder().decode(buffer);
  if (images.length === 0) throw new Error("No image found in HEIC file.");
  const image = images[0];
  const width = image.get_width();
  const height = image.get_height();
  const data = await new Promise<Uint8ClampedArray>((resolve, reject) => {
    image.display({ data: new Uint8ClampedArray(width * height * 4), width, height }, (result) => {
      if (!result) return reject(new Error("HEIC decoding failed."));
      resolve(result.data);
    });
  });
  return { width, height, data };
}

export async function decodeImage(format: ImageFormat, buffer: Uint8Array): Promise<RawImage> {
  if (format === "heic") {
    return decodeHeic(buffer);
  }
  if (format === "gif") {
    return decodeGif(buffer);
  }

  await initAll();
  switch (format) {
    case "jpeg":
      return decodeJpeg(buffer);
    case "png":
      return decodePng(buffer);
    case "webp":
      return decodeWebp(buffer);
    case "avif":
      return decodeAvif(buffer);
  }
}

export async function encodeImage(
  format: WritableImageFormat,
  image: RawImage,
  quality: number
): Promise<Uint8Array> {
  if (format === "gif") {
    return encodeGif(image);
  }

  await initAll();
  switch (format) {
    case "jpeg":
      return new Uint8Array(await encodeJpeg(image, { quality }));
    case "png":
      return new Uint8Array(await encodePng(image));
    case "webp":
      return new Uint8Array(await encodeWebp(image, { quality }));
    case "avif":
      return new Uint8Array(await encodeAvif(image, { quality }));
  }
}

// HEIC/HEIF is an ISO base media file: bytes 4-8 are "ftyp", bytes 8-12 name the
// brand. AVIF uses the same container with a different brand, checked below it.
const HEIC_BRANDS = new Set(["mif1", "msf1", "heic", "heix", "hevc", "hevx"]);

export async function detectFormat(buffer: Uint8Array): Promise<ImageFormat | null> {
  if (buffer.length >= 12 && String.fromCharCode(...buffer.slice(4, 8)) === "ftyp") {
    const brand = String.fromCharCode(...buffer.slice(8, 12));
    if (HEIC_BRANDS.has(brand)) return "heic";
    return "avif";
  }
  if (buffer.length >= 3 && buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff) return "jpeg";
  if (buffer.length >= 8 && buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4e && buffer[3] === 0x47) return "png";
  if (buffer.length >= 12 && buffer[8] === 0x57 && buffer[9] === 0x45 && buffer[10] === 0x42 && buffer[11] === 0x50) return "webp";
  if (buffer.length >= 3 && buffer[0] === 0x47 && buffer[1] === 0x49 && buffer[2] === 0x46) return "gif";
  return null;
}

export function cropImage(image: RawImage, left: number, top: number, width: number, height: number): RawImage {
  const src32 = new Uint32Array(image.data.buffer, image.data.byteOffset, image.data.length / 4);
  const out32 = new Uint32Array(width * height);
  for (let y = 0; y < height; y++) {
    const srcRowStart = (top + y) * image.width + left;
    out32.set(src32.subarray(srcRowStart, srcRowStart + width), y * width);
  }
  return { width, height, data: new Uint8ClampedArray(out32.buffer) };
}

// UI only ever offers 90/180/270 (src/pages/tools/[slug].astro rotate <select>), so a
// plain array transpose covers every case — no need for a general-angle affine rotate.
export function rotateImage(image: RawImage, degrees: number): RawImage {
  const normalized = ((degrees % 360) + 360) % 360;
  if (normalized === 0) return image;
  if (normalized !== 90 && normalized !== 180 && normalized !== 270) {
    throw new Error("Rotation must be a multiple of 90 degrees.");
  }

  const { width: w, height: h } = image;
  const src32 = new Uint32Array(image.data.buffer, image.data.byteOffset, image.data.length / 4);

  if (normalized === 180) {
    const out32 = new Uint32Array(w * h);
    for (let i = 0; i < src32.length; i++) out32[src32.length - 1 - i] = src32[i];
    return { width: w, height: h, data: new Uint8ClampedArray(out32.buffer) };
  }

  const outW = h;
  const outH = w;
  const out32 = new Uint32Array(outW * outH);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const pixel = src32[y * w + x];
      const [dx, dy] =
        normalized === 90 ? [outW - 1 - y, x] : [y, outH - 1 - x];
      out32[dy * outW + dx] = pixel;
    }
  }
  return { width: outW, height: outH, data: new Uint8ClampedArray(out32.buffer) };
}

export async function resizeImage(
  image: RawImage,
  targetWidth?: number,
  targetHeight?: number
): Promise<RawImage> {
  let width = targetWidth;
  let height = targetHeight;
  if (!width && !height) throw new Error("Provide a width and/or height to resize.");
  if (!width) width = Math.round((image.width * (height as number)) / image.height);
  if (!height) height = Math.round((image.height * width) / image.width);

  // Mirrors sharp's `{ fit: "inside", withoutEnlargement: true }`: scale down to fit
  // within the box, preserving aspect ratio, and never scale up past the original.
  const scale = Math.min(width / image.width, height / image.height, 1);
  const finalWidth = Math.max(1, Math.round(image.width * scale));
  const finalHeight = Math.max(1, Math.round(image.height * scale));

  if (finalWidth === image.width && finalHeight === image.height) return image;

  await initAll();
  const result = await resize(
    { width: image.width, height: image.height, data: image.data },
    { width: finalWidth, height: finalHeight }
  );
  return { width: finalWidth, height: finalHeight, data: new Uint8ClampedArray(result.data) };
}

// EXIF orientation tag (0x0112) parsing for JPEG only — PNG/WEBP/AVIF/GIF/HEIC either
// don't carry this tag the same way or the decoder already normalizes it.
export function readJpegOrientation(buffer: Uint8Array): number {
  if (buffer[0] !== 0xff || buffer[1] !== 0xd8) return 1;
  let offset = 2;
  while (offset < buffer.length - 1) {
    if (buffer[offset] !== 0xff) break;
    const marker = buffer[offset + 1];
    if (marker === 0xd8 || marker === 0xd9) {
      offset += 2;
      continue;
    }
    const size = (buffer[offset + 2] << 8) | buffer[offset + 3];
    if (marker === 0xe1) {
      const segment = buffer.subarray(offset + 4, offset + 2 + size);
      const orientation = parseExifOrientation(segment);
      if (orientation) return orientation;
    }
    if (marker === 0xda) break; // start of scan — no more APP segments
    offset += 2 + size;
  }
  return 1;
}

function parseExifOrientation(segment: Uint8Array): number | null {
  // "Exif\0\0" header
  if (String.fromCharCode(...segment.slice(0, 4)) !== "Exif") return null;
  const tiff = segment.subarray(6);
  const little = tiff[0] === 0x49 && tiff[1] === 0x49;
  const readU16 = (off: number) => (little ? tiff[off] | (tiff[off + 1] << 8) : (tiff[off] << 8) | tiff[off + 1]);
  const readU32 = (off: number) =>
    little
      ? tiff[off] | (tiff[off + 1] << 8) | (tiff[off + 2] << 16) | (tiff[off + 3] << 24)
      : (tiff[off] << 24) | (tiff[off + 1] << 16) | (tiff[off + 2] << 8) | tiff[off + 3];

  const ifdOffset = readU32(4);
  const entryCount = readU16(ifdOffset);
  for (let i = 0; i < entryCount; i++) {
    const entryOffset = ifdOffset + 2 + i * 12;
    const tag = readU16(entryOffset);
    if (tag === 0x0112) {
      return readU16(entryOffset + 8);
    }
  }
  return null;
}

// Applies the standard EXIF orientation transform (values 2-8 are mirror/rotate
// combinations; sharp's bare `.rotate()` does this automatically, we do it explicitly).
export function applyExifOrientation(image: RawImage, orientation: number): RawImage {
  switch (orientation) {
    case 1:
      return image;
    case 3:
      return rotateImage(image, 180);
    case 6:
      return rotateImage(image, 90);
    case 8:
      return rotateImage(image, 270);
    case 2:
      return flipHorizontal(image);
    case 4:
      return flipVertical(image);
    case 5:
      return flipHorizontal(rotateImage(image, 90));
    case 7:
      return flipHorizontal(rotateImage(image, 270));
    default:
      return image;
  }
}

function flipHorizontal(image: RawImage): RawImage {
  const { width, height } = image;
  const src32 = new Uint32Array(image.data.buffer, image.data.byteOffset, image.data.length / 4);
  const out32 = new Uint32Array(width * height);
  for (let y = 0; y < height; y++) {
    const rowStart = y * width;
    for (let x = 0; x < width; x++) {
      out32[rowStart + x] = src32[rowStart + (width - 1 - x)];
    }
  }
  return { width, height, data: new Uint8ClampedArray(out32.buffer) };
}

function flipVertical(image: RawImage): RawImage {
  const { width, height } = image;
  const src32 = new Uint32Array(image.data.buffer, image.data.byteOffset, image.data.length / 4);
  const out32 = new Uint32Array(width * height);
  for (let y = 0; y < height; y++) {
    out32.set(src32.subarray((height - 1 - y) * width, (height - y) * width), y * width);
  }
  return { width, height, data: new Uint8ClampedArray(out32.buffer) };
}
