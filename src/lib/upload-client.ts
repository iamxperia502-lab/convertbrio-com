import { upload } from "@vercel/blob/client";

export interface SubmitConversionOptions {
  endpoint: string;
  formData: FormData;
  onProgress: (percent: number) => void;
  onUploaded: () => void;
}

export interface SubmitConversionResult {
  filename: string;
  blob: Blob;
}

const BLOB_HANDLE_UPLOAD_URL = "/api/blob-upload";
// Mirrors MAX_BYTES in the convert API routes (src/pages/api/convert/*.ts),
// enforced again server-side in lib/blob-input.ts's onBeforeGenerateToken -
// this is just what the client asks for, so an oversized file fails fast
// during upload with a clear message rather than after a wasted round trip.
const MAX_UPLOAD_BYTES = 100 * 1024 * 1024;

interface BlobFileRef {
  pathname: string;
  name: string;
  type: string;
}

// Files go straight from the browser to Vercel Blob storage - Vercel
// Functions have a hard 4.5 MB request body limit that raw multipart uploads
// used to hit well under the 25/100 MB caps this site promises. Uploaded one
// at a time (Blob's upload() is single-file), with progress aggregated
// across all files by byte share so multi-file tools still show one smooth
// combined percentage.
async function uploadFilesToBlob(files: File[], onProgress: (percent: number) => void): Promise<BlobFileRef[]> {
  const totalBytes = files.reduce((sum, file) => sum + file.size, 0) || 1;
  const loadedByFile = new Array(files.length).fill(0);

  const reportProgress = () => {
    const loaded = loadedByFile.reduce((sum, n) => sum + n, 0);
    onProgress(Math.min(100, Math.round((loaded / totalBytes) * 100)));
  };

  return Promise.all(
    files.map(async (file, index) => {
      const result = await upload(file.name, file, {
        access: "private",
        handleUploadUrl: BLOB_HANDLE_UPLOAD_URL,
        clientPayload: JSON.stringify({ maxBytes: MAX_UPLOAD_BYTES }),
        onUploadProgress: ({ loaded }) => {
          loadedByFile[index] = loaded;
          reportProgress();
        },
      });
      return { pathname: result.pathname, name: file.name, type: file.type };
    }),
  );
}

// Uploads every "file" entry in formData to Blob storage, then POSTs the
// remaining fields plus blob references as JSON to `endpoint` - the server
// side (resolveConversionForm in lib/blob-input.ts) fetches each blob's
// bytes and reconstructs a FormData equivalent to what this used to send
// directly, so every convert route's own logic is unaffected by this swap.
export async function submitConversion({ endpoint, formData, onProgress, onUploaded }: SubmitConversionOptions): Promise<SubmitConversionResult> {
  const files = formData.getAll("file").filter((f): f is File => f instanceof File);
  const fields: Record<string, string> = {};
  for (const [key, value] of formData.entries()) {
    if (key === "file") continue;
    fields[key] = String(value);
  }

  if (files.length === 0) {
    throw new Error("Choose a file first.");
  }

  let blobFiles: BlobFileRef[];
  try {
    blobFiles = await uploadFilesToBlob(files, onProgress);
  } catch (err) {
    throw new Error(err instanceof Error ? err.message : "Upload failed. Try again.");
  }

  onUploaded();

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ fields, files: blobFiles }),
  });

  if (!response.ok) {
    let message = "Conversion failed.";
    try {
      const data = await response.json();
      message = data.error ?? message;
    } catch {
      // Response wasn't JSON — fall back to the default message.
    }
    throw new Error(message);
  }

  const disposition = response.headers.get("Content-Disposition") ?? "";
  const match = disposition.match(/filename="([^"]+)"/);
  const blob = await response.blob();
  return { filename: match?.[1] ?? "converted", blob };
}

/**
 * Wraps a real, visible <a download> element so the browser's own download
 * triggers it - not just a one-shot programmatic click. Object URLs used to
 * be created, clicked, and revoked immediately in the same tick, which
 * triggers an automatic download but leaves nothing for the user to click
 * again if that download silently doesn't register (blocked, missed,
 * dismissed) - the only recovery was re-uploading and re-converting from
 * scratch. Keeping the URL alive on a persistent button fixes that.
 */
export function createDownloadHandle(anchor: HTMLAnchorElement) {
  let currentUrl: string | null = null;

  function revoke() {
    if (currentUrl) {
      URL.revokeObjectURL(currentUrl);
      currentUrl = null;
    }
  }

  function set(blob: Blob, filename: string) {
    revoke();
    currentUrl = URL.createObjectURL(blob);
    anchor.href = currentUrl;
    anchor.download = filename;
  }

  return { set, revoke };
}
