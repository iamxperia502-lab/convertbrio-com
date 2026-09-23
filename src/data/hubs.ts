import { tools, isComingSoon, type Tool } from "./tools";

export interface HubWorkflowStep {
  text: string;
  /** Tool slug this step links to. */
  slug?: string;
}

export interface HubWorkflow {
  title: string;
  steps: HubWorkflowStep[];
}

export interface Hub {
  /** Root-relative URL, e.g. "/pdf-tools". */
  path: string;
  id: "pdf" | "image" | "document" | "compress" | "ocr" | "ai";
  name: string;
  h1: string;
  seoTitle: string;
  description: string;
  intro: string[];
  /** Selects the tools that belong to this hub. */
  include: (tool: Tool) => boolean;
  workflows: HubWorkflow[];
  /** Blog post ids (src/content/blog) relevant to this category. */
  articles: string[];
  /** Short guidance on choosing between the tools. */
  chooser: { heading: string; body: string };
}

const OCR_SLUGS = new Set(["ocr-pdf", "image-to-text", "scan-to-word"]);
const live = (tool: Tool) => !isComingSoon(tool) && tool.kind !== "external";

export const hubs: Hub[] = [
  {
    path: "/pdf-tools",
    id: "pdf",
    name: "PDF Tools",
    h1: "PDF tools: merge, split, organize, compress, and convert",
    seoTitle: "Free PDF Tools: Merge, Split, Organize & Compress | ConvertBrio",
    description:
      "Merge, split, reorder, rotate, unlock, compress, and convert PDFs online. Free ConvertBrio PDF tools with no sign-up; files are deleted within 24 hours.",
    intro: [
      "PDFs are meant to look the same everywhere, which also makes them awkward to change. These tools cover the jobs people actually run into: combining several files, pulling pages apart, putting pages in the right order, shrinking a file to fit an upload limit, and turning pages into images or images into pages.",
      "Every tool runs in your browser session on ConvertBrio's servers, works on files up to 100 MB, and needs no account. Pick the task below, or follow one of the workflows if your job takes more than one step.",
    ],
    include: (t) => live(t) && t.categories.includes("pdf"),
    workflows: [
      {
        title: "Prepare a PDF for an upload with a size limit",
        steps: [
          { text: "Remove pages you don't need with the visual organizer.", slug: "pdf-page-organizer" },
          { text: "Shrink it to the exact limit the form allows.", slug: "compress-pdf-to-size" },
        ],
      },
      {
        title: "Turn phone photos into one PDF",
        steps: [
          { text: "Combine the photos into a single PDF.", slug: "jpg-to-pdf" },
          { text: "Reduce the size if it's too large to email.", slug: "compress-pdf" },
        ],
      },
      {
        title: "Assemble a report from several documents",
        steps: [
          { text: "Merge the separate PDFs in order.", slug: "merge-pdf" },
          { text: "Add page numbers to the finished document.", slug: "add-page-numbers" },
        ],
      },
    ],
    articles: ["compress-pdf-to-a-specific-size", "compress-pdf-without-losing-quality", "combine-photos-into-one-pdf", "add-page-numbers-to-pdf", "pdf-password-restrictions-explained"],
    chooser: {
      heading: "Which PDF tool should I use?",
      body: "Use Merge PDF to join files and Split PDF to separate every page. If you need to keep only some pages, change their order, or fix a sideways page, the PDF Page Organizer lets you see each page first. For size limits, Compress PDF applies one standard level, while Compress PDF to Exact Size works toward a KB or MB target and reports the size it reached.",
    },
  },
  {
    path: "/image-tools",
    id: "image",
    name: "Image Tools",
    h1: "Image tools: convert, resize, compress, and clean up photos",
    seoTitle: "Free Image Tools: Convert, Resize & Compress Photos | ConvertBrio",
    description:
      "Convert HEIC, JPG, PNG, WEBP, and AVIF, resize to exact pixels, compress to a target KB, crop, rotate, and remove backgrounds. Free image tools with no sign-up.",
    intro: [
      "Most image problems come down to three things: the format isn't accepted, the pixel size is wrong, or the file is too big. The tools here solve each one directly, whether you're preparing a profile photo, filling in an application form, or publishing pictures on a website.",
      "Conversions keep your original resolution, and compression tools work toward a size you choose. Nothing is watermarked, and uploads are deleted within 24 hours.",
    ],
    include: (t) => live(t) && t.categories.includes("image"),
    workflows: [
      {
        title: "Prepare a photo for an application form",
        steps: [
          { text: "Resize to the exact pixels and KB limit the form asks for.", slug: "photo-signature-resizer" },
          { text: "Strip location and camera data before uploading.", slug: "metadata-remover" },
        ],
      },
      {
        title: "Open an iPhone photo anywhere",
        steps: [
          { text: "Convert the HEIC photo to JPG.", slug: "heic-to-jpg" },
          { text: "Compress it if the file is still too large to send.", slug: "compress-image" },
        ],
      },
      {
        title: "Optimize a set of images for a website",
        steps: [
          { text: "Convert to a modern format such as WEBP.", slug: "image-converter" },
          { text: "Compress the whole set to one target size.", slug: "batch-image-compressor" },
        ],
      },
    ],
    articles: ["reduce-photo-size-for-online-forms", "image-size-guide-linkedin-instagram-passport", "png-vs-webp-vs-avif", "heic-to-jpg-not-opening", "when-to-remove-photo-background"],
    chooser: {
      heading: "Which image tool should I use?",
      body: "Use the Image Converter when a format is the problem, Resize Image for pixel dimensions, and Compress Image when only the file size matters. The Photo & Signature Resizer does exact pixels and a KB limit in one step, which is what most application forms want. For several files at once, use the Batch Image Compressor.",
    },
  },
  {
    path: "/document-tools",
    id: "document",
    name: "Document Tools",
    h1: "Document tools: Word, Excel, PowerPoint, PDF, and text",
    seoTitle: "Free Document Tools: Word, Excel, PowerPoint & PDF | ConvertBrio",
    description:
      "Convert Word, Excel, and PowerPoint to and from PDF, compress Office files, extract text from scans, and strip hidden metadata. Free document tools, no sign-up.",
    intro: [
      "Documents move between people who use different software. These tools translate between Word, Excel, PowerPoint, and PDF, shrink Office files that are too big to email, pull text out of scans, and remove the author details that files carry without you noticing.",
      "Each tool states what it keeps and what it can't, for example that converting a PDF back to Word can't perfectly rebuild complex layouts. Uploads are encrypted and deleted within 24 hours.",
    ],
    include: (t) => live(t) && t.categories.includes("document"),
    workflows: [
      {
        title: "Send a Word document that can't be edited",
        steps: [
          { text: "Convert it to PDF so the layout stays fixed.", slug: "word-to-pdf" },
          { text: "Clear the author and company details first if needed.", slug: "metadata-remover" },
        ],
      },
      {
        title: "Edit a document you only have as a scan",
        steps: [
          { text: "Convert the scan to an editable Word file.", slug: "scan-to-word" },
          { text: "Save the corrected version as a PDF.", slug: "word-to-pdf" },
        ],
      },
      {
        title: "Email a heavy presentation",
        steps: [{ text: "Compress the PowerPoint to a size that fits in an email.", slug: "compress-powerpoint" }],
      },
    ],
    articles: ["pdf-to-word-formatting-loss-explained", "ocr-scanned-pdf-to-word", "compress-powerpoint-for-email"],
    chooser: {
      heading: "PDF to Word or Scan to Word?",
      body: "If you can select the words in your PDF, use PDF to Word, which keeps the formatting as closely as possible. If the PDF is a picture of a page, there is no text to convert until it's recognized, so use Scan to Word.",
    },
  },
  {
    path: "/compression-tools",
    id: "compress",
    name: "Compression Tools",
    h1: "Compression tools: reduce PDF, image, and Office file size",
    seoTitle: "Free File Compression Tools: PDF, Image & Office | ConvertBrio",
    description:
      "Shrink PDFs, photos, Word files, and PowerPoints to fit an email or upload limit, including exact KB and MB targets. Free, with no sign-up.",
    intro: [
      "Upload forms, email systems, and websites all set size limits, and the right way to shrink a file depends on what's inside it. Photos compress by lowering quality or dimensions, PDFs shrink mostly by re-encoding the images they contain, and Office files hold embedded media that can be reduced separately.",
      "Where a tool works toward a target, it measures the real result and tells you the size it reached, including when the target can't be met without ruining the file.",
    ],
    include: (t) => live(t) && t.categories.includes("compress"),
    workflows: [
      {
        title: "Fit a scanned PDF under a portal's limit",
        steps: [
          { text: "Compress the PDF to the size the portal allows.", slug: "compress-pdf-to-size" },
          { text: "If it's still too big, split it into parts.", slug: "split-pdf" },
        ],
      },
      {
        title: "Shrink many photos for one upload",
        steps: [{ text: "Compress the whole batch to a single KB target.", slug: "batch-image-compressor" }],
      },
    ],
    articles: ["compress-pdf-to-a-specific-size", "compress-pdf-without-losing-quality", "reduce-photo-size-for-online-forms", "compress-powerpoint-for-email"],
    chooser: {
      heading: "How much can a file shrink?",
      body: "It depends on the content. Photo-heavy PDFs and PowerPoints shrink a lot, while text-only PDFs are already compact. Reducing to a very small target costs quality, so start with the limit you actually have rather than the smallest number possible.",
    },
  },
  {
    path: "/ocr-tools",
    id: "ocr",
    name: "OCR Tools",
    h1: "OCR tools: extract text from scans, photos, and PDFs",
    seoTitle: "Free OCR Tools: Image to Text, Scan to Word, OCR PDF | ConvertBrio",
    description:
      "Use OCR to copy text from an image, turn a scan into an editable Word file, or make a scanned PDF searchable. Free, no sign-up, with honest accuracy notes.",
    intro: [
      "A scan or a photo of text is only a picture. Optical character recognition (OCR) reads the letters in it and gives you real, selectable text. Which tool to use depends on what you want back: plain text you can copy, an editable Word file, or the same PDF made searchable.",
      "OCR is accurate on clean, high-resolution printed text and much weaker on handwriting, low-quality scans, and complex tables. Each tool page explains what to expect.",
    ],
    include: (t) => live(t) && OCR_SLUGS.has(t.slug),
    workflows: [
      {
        title: "Turn a scanned letter into an editable document",
        steps: [
          { text: "Convert the scan to Word.", slug: "scan-to-word" },
          { text: "Proofread, then save as PDF.", slug: "word-to-pdf" },
        ],
      },
      {
        title: "Make an archive of scans searchable",
        steps: [
          { text: "Run OCR to add a text layer to each PDF.", slug: "ocr-pdf" },
          { text: "Shrink the searchable PDF for storage.", slug: "compress-pdf" },
        ],
      },
    ],
    articles: ["ocr-scanned-pdf-to-word"],
    chooser: {
      heading: "Which OCR tool should I use?",
      body: "Image to Text is for a photo or screenshot when you just want the words, and it shows them on the page to copy. Scan to Word gives an editable DOCX from a scanned page or PDF. OCR PDF keeps your original pages exactly as they look and adds an invisible text layer so the PDF becomes searchable.",
    },
  },
  {
    path: "/ai-tools",
    id: "ai",
    name: "AI Tools",
    h1: "AI tools: enhance, upscale, and cut out photos",
    seoTitle: "Free AI Photo Tools: Enhance, Upscale, Remove Background | ConvertBrio",
    description:
      "Enhance, upscale, and cut out photos with AI, or make a passport photo. Free, no sign-up, with honest notes on what each tool can and can't do.",
    intro: [
      "These tools use machine-learning models for jobs that are hard to do by hand: sharpening a dull photo, enlarging a small image without turning it to mush, and separating a person from their background.",
      "AI results depend on the input. A clear photo gives a clear result, and nothing here can recover detail that was never captured. Each page explains where a tool works well and where it doesn't.",
    ],
    include: (t) => live(t) && t.categories.includes("ai"),
    workflows: [
      {
        title: "Improve a small, dull photo",
        steps: [
          { text: "Balance colour and sharpness.", slug: "ai-image-enhancer" },
          { text: "Enlarge it for printing or a larger display.", slug: "ai-upscaler" },
        ],
      },
      {
        title: "Make a clean product or profile image",
        steps: [
          { text: "Remove the background.", slug: "remove-background" },
          { text: "Compress the result for the web.", slug: "compress-image" },
        ],
      },
    ],
    articles: ["when-to-remove-photo-background"],
    chooser: {
      heading: "Enhancer or upscaler?",
      body: "The AI Image Enhancer fixes colour and sharpness at the same size. The AI Upscaler increases the pixel dimensions. If a photo is both small and dull, enhance it first, then upscale it.",
    },
  },
];

export function hubToolsFor(hub: Hub): Tool[] {
  return tools.filter(hub.include);
}

/** The hub a tool page should link back to (first match by priority). */
export function hubForTool(tool: Tool): Hub | undefined {
  if (OCR_SLUGS.has(tool.slug)) return hubs.find((h) => h.id === "ocr");
  for (const cat of tool.categories) {
    const hub = hubs.find((h) => h.id === cat);
    if (hub) return hub;
  }
  return undefined;
}

export const HUB_BY_CATEGORY: Record<string, string> = Object.fromEntries(
  hubs.filter((h) => h.id !== "ocr").map((h) => [h.id, h.path]),
);
