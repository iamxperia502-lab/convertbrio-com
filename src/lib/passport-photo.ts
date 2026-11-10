import type { DetectedFace } from "./face-detection";

export type PassportSize = "2x2in" | "35x45mm";

export interface PassportSpec {
  /** Output size in pixels. */
  width: number;
  height: number;
  dpi: number;
  /** Target head height (chin to crown) as a fraction of the photo height. */
  headHeightFraction: number;
  /** Target eye-line height above the bottom edge, as a fraction of photo height. */
  eyeFromBottomFraction: number;
}

/**
 * Supported output sizes.
 *
 * 2x2in: the US photo format. Spec: head height 1in-1 3/8in of a 2in photo
 * (50%-69%), eye height 1 1/8in-1 3/8in from the bottom (56%-69%). Targeting
 * the midpoints of both ranges keeps results centered even though these are
 * the two dimensions with the most tolerance in the actual spec.
 *
 * 35x45mm: the common ICAO-style format used for UK, Schengen and many other
 * passports and ID documents, output as 413 x 531 px at 300 DPI. Head height
 * (chin to crown) is typically 32-36 mm of the 45 mm height (about 71%-80%);
 * we target the middle, 34 mm (75.5%), with the eye line near the vertical
 * middle of the frame. These are best-effort visual proportions, not a
 * measured compliance check - the page tells users to confirm the exact
 * requirement of the authority they are applying to.
 */
export const PASSPORT_SPECS: Record<PassportSize, PassportSpec> = {
  "2x2in": { width: 1200, height: 1200, dpi: 600, headHeightFraction: 0.59, eyeFromBottomFraction: 0.62 },
  "35x45mm": { width: 413, height: 531, dpi: 300, headHeightFraction: 0.755, eyeFromBottomFraction: 0.49 },
};

export function parsePassportSize(value: unknown): PassportSize {
  return value === "35x45mm" ? "35x45mm" : "2x2in";
}

// Kept for existing callers/docs: the original (and default) 2x2in output.
export const PASSPORT_PHOTO_PX = PASSPORT_SPECS["2x2in"].width;
export const PASSPORT_PHOTO_DPI = PASSPORT_SPECS["2x2in"].dpi;

// YuNet's bounding box spans roughly eyebrow-to-chin, not crown-to-chin - it
// doesn't include hair/forehead above the brow. These multipliers (relative
// to the detected eye-to-eye-line-adjacent bbox height) approximate the
// crown and chin from the eye line using typical facial proportions. This is
// a best-effort visual approximation, not a measured anatomical constant -
// results should look professional, not pass a pixel-measured compliance
// audit.
const EYE_TO_CROWN_RATIO = 0.6;
const EYE_TO_CHIN_RATIO = 0.5;

export interface CropBox {
  left: number;
  top: number;
  width: number;
  height: number;
}

/**
 * Computes a crop box (aspect ratio of the chosen spec), in the source
 * image's pixel coordinates, that positions the detected face per the spec's
 * proportions. If the ideal box would fall outside the source image, it's
 * shifted (not resized) back within bounds - the head-to-frame ratio stays
 * correct even if the photo wasn't framed with symmetric margin, which
 * matters more for a usable result than exact eye-line centering. Returns
 * null only when the source image genuinely doesn't have enough pixels for
 * the target head size at any position (a true "photo needs to be retaken
 * further back" case).
 */
export function computeCropBox(
  face: DetectedFace,
  imageWidth: number,
  imageHeight: number,
  spec: PassportSpec = PASSPORT_SPECS["2x2in"],
): CropBox | null {
  const eyeLineY = (face.eyeRight[1] + face.eyeLeft[1]) / 2;
  const faceCenterX = face.x + face.width / 2;

  const crownY = eyeLineY - face.height * EYE_TO_CROWN_RATIO;
  const chinY = eyeLineY + face.height * EYE_TO_CHIN_RATIO;
  const headHeight = chinY - crownY;

  const cropHeight = headHeight / spec.headHeightFraction;
  const cropWidth = (cropHeight * spec.width) / spec.height;
  if (cropWidth > imageWidth || cropHeight > imageHeight) {
    return null;
  }

  const idealTop = eyeLineY - cropHeight * (1 - spec.eyeFromBottomFraction);
  const idealLeft = faceCenterX - cropWidth / 2;

  const top = Math.min(Math.max(idealTop, 0), imageHeight - cropHeight);
  const left = Math.min(Math.max(idealLeft, 0), imageWidth - cropWidth);

  return { left: Math.round(left), top: Math.round(top), width: Math.round(cropWidth), height: Math.round(cropHeight) };
}
