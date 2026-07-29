import type { DetectedFace } from "./face-detection";

// US and Indian passport photos share the same spec: 2x2in at 600 DPI.
export const PASSPORT_PHOTO_PX = 1200;
export const PASSPORT_PHOTO_DPI = 600;

// US spec: head height (chin to crown) 1in-1 3/8in of a 2in photo (50%-69%),
// eye height 1 1/8in-1 3/8in from the bottom (56%-69%). Targeting the
// midpoints of both ranges keeps results centered even though these are the
// two dimensions with the most tolerance in the actual spec.
const TARGET_HEAD_HEIGHT_FRACTION = 0.59;
const TARGET_EYE_FROM_BOTTOM_FRACTION = 0.62;

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
  size: number;
}

/**
 * Computes a square crop box, in the source image's pixel coordinates, that
 * positions the detected face per passport-photo proportions. If the ideal
 * box would fall outside the source image, it's shifted (not resized) back
 * within bounds - the head-to-frame ratio stays correct even if the photo
 * wasn't framed with symmetric margin, which matters more for a usable
 * result than exact eye-line centering. Returns null only when the source
 * image genuinely doesn't have enough pixels for the target head size at
 * any position (a true "photo needs to be retaken further back" case).
 */
export function computeCropBox(face: DetectedFace, imageWidth: number, imageHeight: number): CropBox | null {
  const eyeLineY = (face.eyeRight[1] + face.eyeLeft[1]) / 2;
  const faceCenterX = face.x + face.width / 2;

  const crownY = eyeLineY - face.height * EYE_TO_CROWN_RATIO;
  const chinY = eyeLineY + face.height * EYE_TO_CHIN_RATIO;
  const headHeight = chinY - crownY;

  const cropSize = headHeight / TARGET_HEAD_HEIGHT_FRACTION;
  if (cropSize > imageWidth || cropSize > imageHeight) {
    return null;
  }

  const idealTop = eyeLineY - cropSize * TARGET_EYE_FROM_BOTTOM_FRACTION;
  const idealLeft = faceCenterX - cropSize / 2;

  const top = Math.min(Math.max(idealTop, 0), imageHeight - cropSize);
  const left = Math.min(Math.max(idealLeft, 0), imageWidth - cropSize);

  return { left: Math.round(left), top: Math.round(top), size: Math.round(cropSize) };
}
