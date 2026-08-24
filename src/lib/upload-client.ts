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

// XMLHttpRequest (not fetch) because it's the only way to get real upload
// progress events across browsers — fetch has no cross-browser hook for
// request-body upload progress.
export function submitConversion({ endpoint, formData, onProgress, onUploaded }: SubmitConversionOptions): Promise<SubmitConversionResult> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", endpoint);
    xhr.responseType = "blob";

    xhr.upload.addEventListener("progress", (event) => {
      if (!event.lengthComputable) return;
      const percent = Math.round((event.loaded / event.total) * 100);
      onProgress(percent);
      if (percent >= 100) onUploaded();
    });

    xhr.addEventListener("load", async () => {
      if (xhr.status < 200 || xhr.status >= 300) {
        let message = "Conversion failed.";
        try {
          const text = await (xhr.response as Blob).text();
          message = JSON.parse(text).error ?? message;
        } catch {
          // Response wasn't JSON — fall back to the default message.
        }
        reject(new Error(message));
        return;
      }

      const disposition = xhr.getResponseHeader("Content-Disposition") ?? "";
      const match = disposition.match(/filename="([^"]+)"/);
      resolve({ filename: match?.[1] ?? "converted", blob: xhr.response as Blob });
    });

    xhr.addEventListener("error", () => reject(new Error("Something went wrong. Try again.")));

    xhr.send(formData);
  });
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
