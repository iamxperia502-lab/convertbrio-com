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

declare namespace App {
  interface Locals {
    supabase: import("@supabase/supabase-js").SupabaseClient | null;
    user: import("@supabase/supabase-js").User | null;
  }
}
