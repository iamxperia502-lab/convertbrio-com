import sharp from "sharp";
import JSZip from "jszip";

// A .docx / .pptx is an OPC (Open Packaging Conventions) ZIP. Almost all of
// an oversized Office file's weight is the raster images stored under a
// single media folder, kept at whatever resolution they were inserted at —
// far higher than the slide or page ever displays. This re-encodes those
// images in place (same filename, same extension, so the relationship
// references and [Content_Types].xml don't need touching) and rezips.
//
// Text, layout, fonts, vector shapes, charts, and any media type we don't
// understand (EMF/WMF/SVG/GIF/TIFF/…) are left exactly as they were.

const MEDIA_DIR: Record<"docx" | "pptx", string> = {
  docx: "word/media/",
  pptx: "ppt/media/",
};

// On-screen viewing ceiling. A full-bleed slide tops out around 1920px wide;
// 1800 on the longest side keeps images crisp at presentation size while
// cutting the pixel count of camera-resolution photos dramatically.
const MAX_DIMENSION = 1800;
const JPEG_QUALITY = 72;
// Below this an image is an icon, a bullet, or a logo — not worth touching,
// and re-encoding tiny PNGs often makes them larger.
const MIN_BYTES = 12 * 1024;
// Only swap in the re-encoded image if it's meaningfully smaller, so a pass
// that can't help doesn't trade quality for nothing.
const KEEP_IF_UNDER = 0.92;

export async function compressOfficeMedia(input: Buffer, kind: "docx" | "pptx"): Promise<Buffer> {
  let zip: JSZip;
  try {
    zip = await JSZip.loadAsync(input);
  } catch {
    throw new Error("That file isn't a valid .docx / .pptx (it may be a legacy .doc/.ppt or corrupted).");
  }

  const mediaDir = MEDIA_DIR[kind];
  const mediaEntries = Object.values(zip.files).filter((entry) => !entry.dir && entry.name.startsWith(mediaDir));

  let changed = false;

  for (const entry of mediaEntries) {
    const name = entry.name.toLowerCase();
    const isJpeg = name.endsWith(".jpg") || name.endsWith(".jpeg");
    const isPng = name.endsWith(".png");
    if (!isJpeg && !isPng) continue;

    let original: Buffer;
    try {
      original = await entry.async("nodebuffer");
    } catch {
      continue;
    }
    if (original.length < MIN_BYTES) continue;

    try {
      const source = sharp(original, { failOn: "none" });
      const meta = await source.metadata();
      if (!meta.width || !meta.height) continue;

      let pipeline = source;
      if (Math.max(meta.width, meta.height) > MAX_DIMENSION) {
        pipeline = pipeline.resize({
          width: meta.width >= meta.height ? MAX_DIMENSION : undefined,
          height: meta.height > meta.width ? MAX_DIMENSION : undefined,
          withoutEnlargement: true,
        });
      }

      let reencoded: Buffer;
      if (isJpeg) {
        reencoded = await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toBuffer();
      } else {
        // Screenshots (few colours) shrink dramatically as a palette PNG;
        // photos-saved-as-PNG palettise badly but still benefit from the
        // downscale + max compression. Try both, keep whichever is smaller.
        const [palette, deep] = await Promise.all([
          pipeline.clone().png({ compressionLevel: 9, palette: true, quality: 80, effort: 7 }).toBuffer(),
          pipeline.clone().png({ compressionLevel: 9, palette: false, effort: 7 }).toBuffer(),
        ]);
        reencoded = palette.length <= deep.length ? palette : deep;
      }

      if (reencoded.length < original.length * KEEP_IF_UNDER) {
        zip.file(entry.name, reencoded);
        changed = true;
      }
    } catch {
      // Anything sharp can't decode/re-encode (unusual colour spaces,
      // truncated data) is left untouched.
    }
  }

  if (!changed) return input;

  return zip.generateAsync({
    type: "nodebuffer",
    compression: "DEFLATE",
    compressionOptions: { level: 6 },
  });
}
