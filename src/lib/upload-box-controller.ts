import { submitConversion, createDownloadHandle } from "./upload-client";

// Split out of UploadBox.astro and loaded lazily (see the bootstrap script
// in that component) so this — and the upload-client module it pulls in —
// isn't fetched on the critical rendering path. None of it is needed until
// the visitor actually touches the dropzone.
export function initUploadBox() {
  const form = document.getElementById("quick-convert-form") as HTMLFormElement | null;
  const dropzone = document.getElementById("dropzone");
  const dropzoneIdle = document.getElementById("dropzone-idle");
  const dropzoneUploading = document.getElementById("dropzone-uploading");
  const dropzoneDone = document.getElementById("dropzone-done");
  const doneFilename = document.getElementById("done-filename");
  const input = document.getElementById("file-input") as HTMLInputElement | null;
  const slugField = document.getElementById("quick-slug") as HTMLInputElement | null;
  const options = document.getElementById("quick-options");
  const formatField = document.getElementById("quick-format-field");
  const convertButton = document.getElementById("quick-convert-btn") as HTMLButtonElement | null;
  const resetButton = document.getElementById("quick-reset-btn") as HTMLButtonElement | null;
  const status = document.getElementById("upload-status");
  const progressPercent = document.getElementById("progress-percent");
  const progressBar = document.getElementById("progress-bar");
  const downloadLink = document.getElementById("quick-download-link") as HTMLAnchorElement | null;
  const downloadLinkLabel = document.getElementById("quick-download-link-label");
  const downloadHandle = downloadLink ? createDownloadHandle(downloadLink) : null;

  const hideDownloadLink = () => {
    downloadHandle?.revoke();
    downloadLink?.classList.add("hidden");
    downloadLink?.classList.remove("flex");
  };

  const setProgress = (percent: number) => {
    if (progressBar) progressBar.style.width = `${percent}%`;
    if (progressPercent) progressPercent.textContent = `${percent}%`;
  };

  const showIdle = () => {
    dropzoneUploading?.classList.add("hidden");
    dropzoneUploading?.classList.remove("flex");
    dropzoneDone?.classList.add("hidden");
    dropzoneDone?.classList.remove("flex");
    dropzoneIdle?.classList.remove("hidden");
    dropzoneIdle?.classList.add("flex");
    hideDownloadLink();
  };

  const showUploading = () => {
    dropzoneIdle?.classList.add("hidden");
    dropzoneIdle?.classList.remove("flex");
    dropzoneDone?.classList.add("hidden");
    dropzoneDone?.classList.remove("flex");
    dropzoneUploading?.classList.remove("hidden");
    dropzoneUploading?.classList.add("flex");
    hideDownloadLink();
  };

  const showDone = (label: string) => {
    dropzoneIdle?.classList.add("hidden");
    dropzoneIdle?.classList.remove("flex");
    dropzoneUploading?.classList.add("hidden");
    dropzoneUploading?.classList.remove("flex");
    dropzoneDone?.classList.remove("hidden");
    dropzoneDone?.classList.add("flex");
    if (doneFilename) doneFilename.textContent = label;
  };

  const IMAGE_TYPES = new Set([
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/heic",
    "image/heif",
    "image/avif",
    "image/gif",
    "image/tiff",
  ]);

  type Kind = "image" | "pdf" | "unsupported";

  const detectKind = (file: File): Kind => {
    if (IMAGE_TYPES.has(file.type)) return "image";
    if (file.type === "application/pdf") return "pdf";
    return "unsupported";
  };

  const handleFile = (file: File | undefined) => {
    if (!status || !options || !slugField || !formatField || !convertButton) return;

    if (!file) {
      status.textContent = "No file selected yet.";
      options.classList.add("hidden");
      options.classList.remove("flex");
      showIdle();
      return;
    }

    const kind = detectKind(file);

    if (kind === "unsupported") {
      status.textContent = `We don't support quick-converting "${file.name}" here yet: browse All Tools for the right converter.`;
      options.classList.add("hidden");
      options.classList.remove("flex");
      showIdle();
      return;
    }

    status.textContent = `Selected: ${file.name}`;
    options.classList.remove("hidden");
    options.classList.add("flex");
    hideDownloadLink();
    showDone(file.name);

    if (kind === "image") {
      slugField.value = "image-converter";
      formatField.classList.remove("hidden");
      formatField.classList.add("flex");
    } else {
      slugField.value = "pdf-to-jpg";
      formatField.classList.add("hidden");
      formatField.classList.remove("flex");
    }
  };

  input?.addEventListener("change", () => handleFile(input.files?.[0]));

  resetButton?.addEventListener("click", () => {
    if (input) input.value = "";
    setProgress(0);
    handleFile(undefined);
  });

  ["dragenter", "dragover"].forEach((eventName) => {
    dropzone?.addEventListener(eventName, (event) => {
      event.preventDefault();
      dropzone.classList.add("border-lime-deep", "bg-lime/10");
    });
  });

  ["dragleave", "drop"].forEach((eventName) => {
    dropzone?.addEventListener(eventName, (event) => {
      event.preventDefault();
      dropzone.classList.remove("border-lime-deep", "bg-lime/10");
    });
  });

  dropzone?.addEventListener("drop", (event) => {
    const dt = (event as DragEvent).dataTransfer;
    const file = dt?.files?.[0];
    if (file && input) {
      input.files = dt.files;
      handleFile(file);
    }
  });

  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!status || !input?.files?.length || !slugField) return;

    const file = input.files[0];
    const kind = detectKind(file);
    if (kind === "unsupported") return;

    const endpoint = kind === "image" ? "/api/convert/image" : "/api/convert/pdf";

    convertButton?.setAttribute("disabled", "true");
    showUploading();
    setProgress(0);
    status.textContent = "Uploading… 0%";

    try {
      const { filename, blob } = await submitConversion({
        endpoint,
        formData: new FormData(form),
        onProgress: (percent) => {
          setProgress(percent);
          status.textContent = `Uploading… ${percent}%`;
        },
        onUploaded: () => {
          status.textContent = "Processing…";
          showDone(file.name);
        },
      });

      status.textContent = `Done: ${filename} downloaded. If it didn't start, use the button below.`;
      if (downloadHandle && downloadLink) {
        downloadHandle.set(blob, filename);
        if (downloadLinkLabel) downloadLinkLabel.textContent = `Download ${filename}`;
        downloadLink.classList.remove("hidden");
        downloadLink.classList.add("flex");
        downloadLink.click();
      }
    } catch (err) {
      status.textContent = err instanceof Error ? err.message : "Something went wrong. Try again.";
      showDone(file.name);
    } finally {
      convertButton?.removeAttribute("disabled");
    }
  });
}
