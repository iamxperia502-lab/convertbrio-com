/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SUPABASE_URL: string;
  readonly PUBLIC_SUPABASE_ANON_KEY: string;
  readonly SUPABASE_SERVICE_ROLE_KEY: string;
  readonly CRON_SECRET?: string;
  readonly RESEND_API_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.wasm?module" {
  const wasmModule: WebAssembly.Module;
  export default wasmModule;
}

// No @types package exists for these — minimal shapes for what src/lib/image-pipeline.ts
// and src/lib/office-convert.ts actually call.
declare module "omggif" {
  export class GifReader {
    constructor(buffer: Uint8Array);
    width: number;
    height: number;
    decodeAndBlitFrameRGBA(frameNum: number, pixels: Uint8ClampedArray): void;
  }
}

declare module "gifenc" {
  export function quantize(rgba: Uint8ClampedArray, maxColors: number): number[][];
  export function applyPalette(rgba: Uint8ClampedArray, palette: number[][]): Uint8Array;
  export function GIFEncoder(): {
    writeFrame(index: Uint8Array, width: number, height: number, options?: { palette?: number[][] }): void;
    finish(): void;
    bytes(): Uint8Array;
  };
}

declare module "pdfjs-dist/legacy/build/pdf.worker.mjs" {
  export const WorkerMessageHandler: unknown;
}

declare namespace App {
  interface Locals {
    supabase: import("@supabase/supabase-js").SupabaseClient | null;
    user: import("@supabase/supabase-js").User | null;
  }
}
