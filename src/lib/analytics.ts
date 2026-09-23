// Product-analytics helper. GA4 is configured once, directly, in
// layouts/Layout.astro (the GTM container only carries a Clarity tag), so
// custom events go through the page's own gtag() - one copy per action.
//
// Only the operational parameters below are ever sent: never filenames,
// file/OCR contents, Blob paths, download URLs, form values, account ids or
// raw exception messages.

export type ErrorCategory =
  | "validation"
  | "upload_token"
  | "blob_upload"
  | "conversion_api"
  | "download"
  | "network"
  | "unsupported_format"
  | "file_too_large"
  | "unknown";

export type SizeBand = "lt_100kb" | "100kb_1mb" | "1_5mb" | "5_25mb" | "25_100mb" | "gt_100mb";

export interface EventParams {
  tool_slug?: string;
  tool_category?: string;
  input_format?: string;
  output_format?: string;
  file_count?: number;
  size_band?: SizeBand;
  error_category?: ErrorCategory;
  processing_mode?: string;
  // tool_feedback_submitted only
  result?: "yes" | "no";
  reason?: string;
}

export type EventName =
  | "file_selected"
  | "conversion_started"
  | "conversion_completed"
  | "download_completed"
  | "conversion_failed"
  | "tool_feedback_submitted";

const ALLOWED_KEYS = new Set([
  "tool_slug",
  "tool_category",
  "input_format",
  "output_format",
  "file_count",
  "size_band",
  "error_category",
  "processing_mode",
  "result",
  "reason",
]);

export function sizeBand(totalBytes: number): SizeBand {
  const KB = 1024;
  const MB = 1024 * KB;
  if (totalBytes < 100 * KB) return "lt_100kb";
  if (totalBytes < MB) return "100kb_1mb";
  if (totalBytes < 5 * MB) return "1_5mb";
  if (totalBytes < 25 * MB) return "5_25mb";
  if (totalBytes <= 100 * MB) return "25_100mb";
  return "gt_100mb";
}

/** Extension-derived format label (e.g. "jpg"); never the filename itself. */
export function formatOf(file: File): string {
  const ext = file.name.includes(".") ? file.name.split(".").pop()!.toLowerCase() : "";
  if (/^[a-z0-9]{1,5}$/.test(ext)) return ext;
  const sub = file.type.split("/")[1];
  return sub && /^[a-z0-9.+-]{1,20}$/.test(sub) ? sub : "unknown";
}

export function track(name: EventName, params: EventParams = {}): void {
  try {
    const clean: Record<string, string | number> = {};
    for (const [key, value] of Object.entries(params)) {
      if (ALLOWED_KEYS.has(key) && value !== undefined) clean[key] = value as string | number;
    }
    const w = window as unknown as { gtag?: (...args: unknown[]) => void };
    if (typeof w.gtag === "function") w.gtag("event", name, clean);
  } catch {
    // Analytics must never break the tool.
  }
}

export interface ToolContext {
  tool_slug: string;
  tool_category: string;
  output_format?: string;
  processing_mode: string;
}

/** Reads the tool descriptors the page renders on its form element. */
export function toolContextFrom(el: HTMLElement | null): ToolContext {
  const d = el?.dataset ?? ({} as DOMStringMap);
  return {
    tool_slug: d.toolSlug ?? "unknown",
    tool_category: d.toolCategory ?? "unknown",
    output_format: d.toolOutput || undefined,
    processing_mode: d.toolMode ?? "server",
  };
}
