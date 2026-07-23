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

export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
