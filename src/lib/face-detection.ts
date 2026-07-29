import { readFileSync } from "node:fs";
import { join } from "node:path";
import { randomUUID } from "node:crypto";

// YuNet (MIT-licensed, see models/YUNET_LICENSE.txt) via @techstark/opencv-js
// - a WASM build of real OpenCV, not a hand-rolled reimplementation of
// YuNet's anchor/NMS decode math. That decode logic is exact, non-trivial,
// and easy to get subtly wrong; running the actual OpenCV C++ implementation
// (compiled to WASM) avoids reimplementing it at all. Fully self-hosted: no
// external API, no API key, no per-request cost, no user photo ever leaves
// this server.
//
// Path is built from process.cwd(), not import.meta.url: Astro's build
// bundles this module's code into a chunk under dist/server/chunks/, so
// import.meta.url at runtime points there, not at this file's original
// location - an import.meta.url-relative path would look for the model next
// to the bundled chunk instead of where astro.config.mjs's includeFiles
// actually places it (project-root-relative, matching the source tree).
// process.cwd() is the function root on Vercel and the project root in
// `astro dev`, so this resolves correctly in both.
const modelPath = join(process.cwd(), "src/lib/models/yunet.onnx");
const modelBytes = readFileSync(modelPath);

export interface DetectedFace {
  x: number;
  y: number;
  width: number;
  height: number;
  eyeRight: [number, number];
  eyeLeft: [number, number];
  confidence: number;
}

/**
 * Detects faces in a raw RGBA pixel buffer of the given dimensions.
 */
export async function detectFaces(rgba: Buffer, width: number, height: number): Promise<DetectedFace[]> {
  const cvModule = await import("@techstark/opencv-js");
  // @techstark/opencv-js's .d.ts is hand-maintained and doesn't cover the
  // Emscripten-generated bindings actually used here (FaceDetectorYN,
  // FS_createDataFile, FS_unlink) - verified against the real runtime API,
  // not guessed.
  const cv: any = await cvModule.default;

  // Each call uses a unique virtual-FS path: the WASM module instance is
  // reused across warm invocations of the same serverless instance (Node
  // caches the dynamic import after the first request), and Emscripten's FS
  // layer throws if the same path is written twice.
  const virtualModelPath = `/yunet-${randomUUID()}.onnx`;
  cv.FS_createDataFile("/", virtualModelPath.slice(1), modelBytes, true, false, false);

  let mat: any;
  let bgr: any;
  let results: any;
  let detector: any;
  try {
    mat = cv.matFromImageData({ data: new Uint8ClampedArray(rgba), width, height });
    bgr = new cv.Mat();
    cv.cvtColor(mat, bgr, cv.COLOR_RGBA2BGR);

    results = new cv.Mat();
    detector = new cv.FaceDetectorYN(virtualModelPath, "", new cv.Size(width, height), 0.7, 0.3, 5000);
    detector.detect(bgr, results);

    // Each row: [x, y, w, h, rightEyeX, rightEyeY, leftEyeX, leftEyeY,
    // noseX, noseY, rightMouthX, rightMouthY, leftMouthX, leftMouthY, score]
    const faces: DetectedFace[] = [];
    for (let i = 0; i < results.rows; i++) {
      faces.push({
        x: results.floatAt(i, 0),
        y: results.floatAt(i, 1),
        width: results.floatAt(i, 2),
        height: results.floatAt(i, 3),
        eyeRight: [results.floatAt(i, 4), results.floatAt(i, 5)],
        eyeLeft: [results.floatAt(i, 6), results.floatAt(i, 7)],
        confidence: results.floatAt(i, 14),
      });
    }
    return faces;
  } finally {
    mat?.delete();
    bgr?.delete();
    results?.delete();
    detector?.delete();
    cv.FS_unlink(virtualModelPath);
  }
}
