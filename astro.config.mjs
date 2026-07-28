// @ts-check
import { readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

// @imgly/background-removal-node loads its ONNX model weights from hashed
// filenames at a computed path, so Vercel's static file tracer can't detect
// them and drops them from the bundle by default. `includeFiles` only
// accepts individual file paths (not directories or globs), so build the
// list explicitly here instead. Model chunks are ~4MB each and split across
// "small" (~42MB) and "medium" (~84MB, the package's default) tiers; the
// image API route pins `model: "small"`, so only that tier's chunks (plus
// the non-model wrapper code) need to ship, keeping the function well under
// Vercel's function size limit.
const bgRemovalDistUrl = new URL('./node_modules/@imgly/background-removal-node/dist/', import.meta.url);
const bgRemovalDistPath = fileURLToPath(bgRemovalDistUrl);
/** @type {{ [model: string]: { chunks: { hash: string }[] } }} */
const resources = JSON.parse(readFileSync(`${bgRemovalDistPath}/resources.json`, 'utf-8'));
const smallModelHashes = new Set(resources['/models/small'].chunks.map((chunk) => chunk.hash));
const bgRemovalFiles = readdirSync(bgRemovalDistPath, { withFileTypes: true })
  .filter((entry) => entry.isFile() && !/^[0-9a-f]{64}$/.test(entry.name))
  .map((entry) => entry.name)
  .concat([...smallModelHashes])
  .map((name) => `node_modules/@imgly/background-removal-node/dist/${name}`);

// tesseract.js-core loads its WASM binaries (picked at runtime based on CPU
// SIMD support) from raw .wasm files that Vercel's static tracer also can't
// detect from a computed path. Only ~18MB total across all variants, so
// just include all of them rather than guess which one gets picked.
const tesseractCoreDir = fileURLToPath(new URL('./node_modules/tesseract.js-core/', import.meta.url));
const tesseractWasmFiles = readdirSync(tesseractCoreDir)
  .filter((name) => name.endsWith('.wasm'))
  .map((name) => `node_modules/tesseract.js-core/${name}`);

// pdfjs-dist's Node build loads its worker script from a path Vercel's
// static tracer also can't detect - "Setting up fake worker failed: Cannot
// find module .../pdf.worker.mjs" at runtime without this.
const pdfjsWorkerFile = 'node_modules/pdfjs-dist/legacy/build/pdf.worker.mjs';

// pdfjs-dist also loads its standard (non-embedded) font substitutes from a
// path resolved at runtime (see standardFontDataUrl in
// src/pages/api/convert/pdf.ts), which the static tracer misses the same way
// it misses pdf.worker.mjs above - "UnknownErrorException: Ensure that the
// `standardFontDataUrl` API parameter is provided" without these.
const pdfjsStandardFontsDir = fileURLToPath(new URL('./node_modules/pdfjs-dist/standard_fonts/', import.meta.url));
const pdfjsStandardFontsFiles = readdirSync(pdfjsStandardFontsDir).map(
  (name) => `node_modules/pdfjs-dist/standard_fonts/${name}`
);

// onnxruntime-node ships prebuilt native binaries (each with its own ~10-25MB
// libonnxruntime shared library alongside the small .node binding) for every
// OS/arch, but Vercel's Node.js functions run linux/x64 — the other five
// platforms (~100MB combined) would otherwise ship as dead weight.
const onnxBinDir = fileURLToPath(new URL('./node_modules/onnxruntime-node/bin/napi-v3/', import.meta.url));
const onnxPlatformsToExclude = ['darwin/arm64', 'darwin/x64', 'linux/arm64', 'win32/arm64', 'win32/x64'];
const onnxExcludeFiles = onnxPlatformsToExclude.flatMap((platform) =>
  readdirSync(`${onnxBinDir}${platform}`).map((name) => `node_modules/onnxruntime-node/bin/napi-v3/${platform}/${name}`)
);

// https://astro.build/config
export default defineConfig({
  site: 'https://www.convertbrio.com',
  output: 'server',

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: vercel({
    // Headless-Chromium-backed Word conversions (see src/lib/chromium.ts) need
    // more than the default function timeout, especially on a cold start.
    maxDuration: 60,
    includeFiles: [...bgRemovalFiles, ...tesseractWasmFiles, pdfjsWorkerFile, ...pdfjsStandardFontsFiles],
    excludeFiles: onnxExcludeFiles,
  })
});