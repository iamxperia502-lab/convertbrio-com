import type { ErrorCategory } from "./analytics";

/**
 * A failure in the browser -> Blob -> convert pipeline. `category` is safe to
 * send to analytics; `detail` may hold a server-supplied message that is shown
 * to the visitor but never sent to analytics.
 */
export class ConversionError extends Error {
  category: ErrorCategory;
  detail?: string;
  constructor(category: ErrorCategory, detail?: string) {
    super(detail ?? category);
    this.name = "ConversionError";
    this.category = category;
    this.detail = detail;
  }
}

/** Browsers surface blocked/offline requests as an opaque TypeError. */
export function isNetworkFailure(err: unknown): boolean {
  if (err instanceof TypeError) return true;
  const msg = err instanceof Error ? err.message : "";
  return /failed to fetch|networkerror|load failed|network request failed|network error/i.test(msg);
}

export function toConversionError(err: unknown, fallback: ErrorCategory): ConversionError {
  if (err instanceof ConversionError) return err;
  if (isNetworkFailure(err)) return new ConversionError("network");
  return new ConversionError(fallback, err instanceof Error ? err.message : undefined);
}

/** Maps an HTTP status from the convert API to a controlled category. */
export function categoryForStatus(status: number): ErrorCategory {
  if (status === 413) return "file_too_large";
  if (status === 415) return "unsupported_format";
  if (status === 400 || status === 422) return "validation";
  return "conversion_api";
}

export interface ErrorMessages {
  network: string;
  upload: string;
  tooLarge: string;
  unsupported: string;
  conversion: string;
  generic: string;
}

/** Visitor-facing explanation plus a next step for each failure category. */
export function messageFor(err: ConversionError, m: ErrorMessages): string {
  switch (err.category) {
    case "network":
      return m.network;
    case "upload_token":
    case "blob_upload":
      return m.upload;
    case "file_too_large":
      return m.tooLarge;
    case "unsupported_format":
      return err.detail ?? m.unsupported;
    case "validation":
    case "conversion_api":
      return err.detail ?? m.conversion;
    default:
      return m.generic;
  }
}
