// pdfjs-dist's own module runs `const SCALE_MATRIX = new DOMMatrix();` at
// import time, not deferred to render/parse time. It normally self-polyfills
// this from @napi-rs/canvas, but that polyfill silently no-ops if
// @napi-rs/canvas fails to load its native binary for the platform - which
// happens on Vercel's Linux runtime even though it happens to work on some
// local machines - crashing the import itself with "DOMMatrix is not
// defined" before any of our own code even runs.
//
// Must be called - and `canvas` imported - BEFORE any pdfjs-dist import.
export async function ensureDomMatrixPolyfill() {
  if (globalThis.DOMMatrix) return;
  const { DOMMatrix } = await import("canvas");
  // node-canvas's DOMMatrix is a runtime-compatible implementation, just
  // typed slightly differently than the DOM lib's built-in declaration.
  globalThis.DOMMatrix = DOMMatrix as unknown as typeof globalThis.DOMMatrix;
}
