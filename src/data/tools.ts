import type { icons } from "../components/Icon.astro";

export type CategoryId = "convert" | "compress" | "pdf" | "image" | "document" | "ai";

export const categories: { id: CategoryId; name: string; icon: keyof typeof icons; desc: string }[] = [
  { id: "convert", name: "Convert", icon: "image", desc: "Change any file from one format to another." },
  { id: "compress", name: "Compress", icon: "shrink", desc: "Reduce file size while keeping quality intact." },
  { id: "pdf", name: "PDF Tools", icon: "pdf", desc: "Merge, split, edit, and secure PDF documents." },
  { id: "image", name: "Image Tools", icon: "image", desc: "Convert, resize, crop, and clean up images." },
  { id: "document", name: "Document Tools", icon: "word", desc: "Move content between Word, Excel, PowerPoint, and PDF." },
  { id: "ai", name: "AI Tools", icon: "sparkle", desc: "Enhance and restore images with AI models." },
];

export type ImageOperation = "convert" | "compress" | "resize" | "crop" | "rotate" | "remove-background" | "passport-photo";
export type PdfOperation =
  | "merge"
  | "split"
  | "rotate"
  | "add-page-numbers"
  | "pdf-to-jpg"
  | "pdf-to-png"
  | "jpg-to-pdf"
  | "compress"
  | "unlock"
  | "ocr";
export type OfficeOperation = "word-to-pdf" | "pdf-to-word" | "word-to-jpg" | "word-to-png";

interface ToolBase {
  slug: string;
  name: string;
  categories: CategoryId[];
  icon: keyof typeof icons;
  description: string;
  accept: string;
  multiple?: boolean;
}

export interface ImageTool extends ToolBase {
  kind: "image";
  operation: ImageOperation;
  outputFormat?: "jpeg" | "png" | "webp" | "avif" | "gif";
}

export interface PdfTool extends ToolBase {
  kind: "pdf";
  operation: PdfOperation;
}

export interface OfficeTool extends ToolBase {
  kind: "office";
  operation: OfficeOperation;
}

export interface ComingSoonTool extends ToolBase {
  kind: "office-soon" | "ai";
  comingSoonReason: string;
}

export type Tool = ImageTool | PdfTool | OfficeTool | ComingSoonTool;

const IMAGE_ACCEPT = "image/jpeg,image/png,image/webp,image/heic,image/heif,image/avif,image/gif";
const PDF_ACCEPT = "application/pdf";
const OFFICE_ACCEPT = ".doc,.docx,.xls,.xlsx,.ppt,.pptx,application/pdf";
const DOCX_ACCEPT = ".docx";

export const tools: Tool[] = [
  {
    slug: "image-converter",
    name: "Image Converter",
    categories: ["convert", "image"],
    kind: "image",
    operation: "convert",
    icon: "image",
    description: "Convert images between JPG, PNG, WEBP, AVIF, HEIC, and GIF.",
    accept: IMAGE_ACCEPT,
  },
  {
    slug: "heic-to-jpg",
    name: "HEIC to JPG",
    categories: ["convert", "image"],
    kind: "image",
    operation: "convert",
    outputFormat: "jpeg",
    icon: "heic",
    description: "Convert iPhone HEIC photos to universally-supported JPG.",
    accept: "image/heic,image/heif",
  },
  {
    slug: "jpg-to-png",
    name: "JPG to PNG",
    categories: ["convert", "image"],
    kind: "image",
    operation: "convert",
    outputFormat: "png",
    icon: "image",
    description: "Convert JPG images to PNG.",
    accept: "image/jpeg",
  },
  {
    slug: "jpg-to-webp",
    name: "JPG to WEBP",
    categories: ["convert", "image"],
    kind: "image",
    operation: "convert",
    outputFormat: "webp",
    icon: "image",
    description: "Convert JPG images to WEBP.",
    accept: "image/jpeg",
  },
  {
    slug: "jpg-to-avif",
    name: "JPG to AVIF",
    categories: ["convert", "image"],
    kind: "image",
    operation: "convert",
    outputFormat: "avif",
    icon: "image",
    description: "Convert JPG images to AVIF.",
    accept: "image/jpeg",
  },
  {
    slug: "png-to-jpg",
    name: "PNG to JPG",
    categories: ["convert", "image"],
    kind: "image",
    operation: "convert",
    outputFormat: "jpeg",
    icon: "image",
    description: "Convert PNG images to JPG.",
    accept: "image/png",
  },
  {
    slug: "png-to-webp",
    name: "PNG to WEBP",
    categories: ["convert", "image"],
    kind: "image",
    operation: "convert",
    outputFormat: "webp",
    icon: "image",
    description: "Convert PNG images to WEBP.",
    accept: "image/png",
  },
  {
    slug: "png-to-avif",
    name: "PNG to AVIF",
    categories: ["convert", "image"],
    kind: "image",
    operation: "convert",
    outputFormat: "avif",
    icon: "image",
    description: "Convert PNG images to AVIF.",
    accept: "image/png",
  },
  {
    slug: "webp-to-jpg",
    name: "WEBP to JPG",
    categories: ["convert", "image"],
    kind: "image",
    operation: "convert",
    outputFormat: "jpeg",
    icon: "image",
    description: "Convert WEBP images to JPG.",
    accept: "image/webp",
  },
  {
    slug: "webp-to-png",
    name: "WEBP to PNG",
    categories: ["convert", "image"],
    kind: "image",
    operation: "convert",
    outputFormat: "png",
    icon: "image",
    description: "Convert WEBP images to PNG.",
    accept: "image/webp",
  },
  {
    slug: "webp-to-avif",
    name: "WEBP to AVIF",
    categories: ["convert", "image"],
    kind: "image",
    operation: "convert",
    outputFormat: "avif",
    icon: "image",
    description: "Convert WEBP images to AVIF.",
    accept: "image/webp",
  },
  {
    slug: "avif-to-jpg",
    name: "AVIF to JPG",
    categories: ["convert", "image"],
    kind: "image",
    operation: "convert",
    outputFormat: "jpeg",
    icon: "image",
    description: "Convert AVIF images to JPG.",
    accept: "image/avif",
  },
  {
    slug: "avif-to-png",
    name: "AVIF to PNG",
    categories: ["convert", "image"],
    kind: "image",
    operation: "convert",
    outputFormat: "png",
    icon: "image",
    description: "Convert AVIF images to PNG.",
    accept: "image/avif",
  },
  {
    slug: "avif-to-webp",
    name: "AVIF to WEBP",
    categories: ["convert", "image"],
    kind: "image",
    operation: "convert",
    outputFormat: "webp",
    icon: "image",
    description: "Convert AVIF images to WEBP.",
    accept: "image/avif",
  },
  {
    slug: "compress-image",
    name: "Compress Image",
    categories: ["compress", "image"],
    kind: "image",
    operation: "compress",
    icon: "shrink",
    description: "Shrink image file size while keeping quality intact.",
    accept: IMAGE_ACCEPT,
  },
  {
    slug: "resize-image",
    name: "Resize Image",
    categories: ["image"],
    kind: "image",
    operation: "resize",
    icon: "scale",
    description: "Resize an image to exact pixel dimensions.",
    accept: IMAGE_ACCEPT,
  },
  {
    slug: "crop-image",
    name: "Crop Image",
    categories: ["image"],
    kind: "image",
    operation: "crop",
    icon: "image",
    description: "Crop an image to a specific region.",
    accept: IMAGE_ACCEPT,
  },
  {
    slug: "rotate-image",
    name: "Rotate Image",
    categories: ["image"],
    kind: "image",
    operation: "rotate",
    icon: "image",
    description: "Rotate an image by 90, 180, or 270 degrees.",
    accept: IMAGE_ACCEPT,
  },
  {
    slug: "merge-pdf",
    name: "Merge PDF",
    categories: ["pdf"],
    kind: "pdf",
    operation: "merge",
    icon: "merge",
    description: "Combine multiple PDFs into a single document.",
    accept: PDF_ACCEPT,
    multiple: true,
  },
  {
    slug: "split-pdf",
    name: "Split PDF",
    categories: ["pdf"],
    kind: "pdf",
    operation: "split",
    icon: "merge",
    description: "Split a PDF into individual pages.",
    accept: PDF_ACCEPT,
  },
  {
    slug: "compress-pdf",
    name: "Compress PDF",
    categories: ["compress", "pdf"],
    kind: "pdf",
    operation: "compress",
    icon: "shrink",
    description: "Reduce PDF file size (best-effort — image re-encoding and metadata cleanup).",
    accept: PDF_ACCEPT,
  },
  {
    slug: "rotate-pdf",
    name: "Rotate PDF",
    categories: ["pdf"],
    kind: "pdf",
    operation: "rotate",
    icon: "pdf",
    description: "Rotate every page of a PDF by 90, 180, or 270 degrees.",
    accept: PDF_ACCEPT,
  },
  {
    slug: "unlock-pdf",
    name: "Unlock PDF",
    categories: ["pdf"],
    kind: "pdf",
    operation: "unlock",
    icon: "lock",
    description: "Remove owner-password restrictions from a PDF you have the right to edit.",
    accept: PDF_ACCEPT,
  },
  {
    slug: "add-page-numbers",
    name: "Add Page Numbers",
    categories: ["pdf"],
    kind: "pdf",
    operation: "add-page-numbers",
    icon: "pdf",
    description: "Stamp sequential page numbers onto every page of a PDF.",
    accept: PDF_ACCEPT,
  },
  {
    slug: "pdf-to-jpg",
    name: "PDF to JPG",
    categories: ["convert", "pdf"],
    kind: "pdf",
    operation: "pdf-to-jpg",
    icon: "pdf",
    description: "Export every PDF page as a JPG image.",
    accept: PDF_ACCEPT,
  },
  {
    slug: "pdf-to-png",
    name: "PDF to PNG",
    categories: ["convert", "pdf"],
    kind: "pdf",
    operation: "pdf-to-png",
    icon: "pdf",
    description: "Export every PDF page as a PNG image.",
    accept: PDF_ACCEPT,
  },
  {
    slug: "jpg-to-pdf",
    name: "JPG to PDF",
    categories: ["convert"],
    kind: "pdf",
    operation: "jpg-to-pdf",
    icon: "image",
    description: "Combine one or more images into a single PDF.",
    accept: "image/jpeg,image/png",
    multiple: true,
  },
  {
    slug: "ocr-pdf",
    name: "OCR PDF",
    categories: ["pdf"],
    kind: "pdf",
    operation: "ocr",
    icon: "ocr",
    description: "Make scanned PDFs searchable with text recognition.",
    accept: PDF_ACCEPT,
  },
  {
    slug: "word-to-pdf",
    name: "Word to PDF",
    categories: ["convert", "document"],
    kind: "office",
    operation: "word-to-pdf",
    icon: "word",
    description: "Convert Word (.docx) documents to PDF.",
    accept: DOCX_ACCEPT,
  },
  {
    slug: "pdf-to-word",
    name: "PDF to Word",
    categories: ["convert", "pdf", "document"],
    kind: "office",
    operation: "pdf-to-word",
    icon: "pdf",
    description: "Convert a PDF into an editable Word document (text-only — complex layouts and images aren't preserved).",
    accept: PDF_ACCEPT,
  },
  {
    slug: "word-to-jpg",
    name: "Word to JPG",
    categories: ["convert", "document"],
    kind: "office",
    operation: "word-to-jpg",
    icon: "word",
    description: "Export a Word (.docx) document's pages as JPG images.",
    accept: DOCX_ACCEPT,
  },
  {
    slug: "word-to-png",
    name: "Word to PNG",
    categories: ["convert", "document"],
    kind: "office",
    operation: "word-to-png",
    icon: "word",
    description: "Export a Word (.docx) document's pages as PNG images.",
    accept: DOCX_ACCEPT,
  },
  {
    slug: "excel-to-pdf",
    name: "Excel to PDF",
    categories: ["convert", "document"],
    kind: "office-soon",
    icon: "word",
    description: "Convert Excel spreadsheets to PDF.",
    accept: ".xls,.xlsx",
    comingSoonReason: "Excel/PowerPoint conversion isn't wired up yet — only Word ↔ PDF/JPG/PNG conversion is currently supported.",
  },
  {
    slug: "pdf-to-excel",
    name: "PDF to Excel",
    categories: ["document"],
    kind: "office-soon",
    icon: "pdf",
    description: "Convert tabular PDF data into an Excel spreadsheet.",
    accept: PDF_ACCEPT,
    comingSoonReason: "Excel/PowerPoint conversion isn't wired up yet — only Word ↔ PDF/JPG/PNG conversion is currently supported.",
  },
  {
    slug: "powerpoint-to-pdf",
    name: "PowerPoint to PDF",
    categories: ["convert", "document"],
    kind: "office-soon",
    icon: "word",
    description: "Convert PowerPoint presentations to PDF.",
    accept: ".ppt,.pptx",
    comingSoonReason: "Excel/PowerPoint conversion isn't wired up yet — only Word ↔ PDF/JPG/PNG conversion is currently supported.",
  },
  {
    slug: "compress-word",
    name: "Compress Word",
    categories: ["compress"],
    kind: "office-soon",
    icon: "shrink",
    description: "Reduce the file size of a Word document.",
    accept: ".doc,.docx",
    comingSoonReason: "Excel/PowerPoint conversion isn't wired up yet — only Word ↔ PDF/JPG/PNG conversion is currently supported.",
  },
  {
    slug: "compress-powerpoint",
    name: "Compress PowerPoint",
    categories: ["compress"],
    kind: "office-soon",
    icon: "shrink",
    description: "Reduce the file size of a PowerPoint presentation.",
    accept: ".ppt,.pptx",
    comingSoonReason: "Excel/PowerPoint conversion isn't wired up yet — only Word ↔ PDF/JPG/PNG conversion is currently supported.",
  },
  {
    slug: "merge-documents",
    name: "Merge Documents",
    categories: ["document"],
    kind: "office-soon",
    icon: "merge",
    description: "Combine Word, Excel, and PowerPoint files into one PDF.",
    accept: OFFICE_ACCEPT,
    multiple: true,
    comingSoonReason: "Excel/PowerPoint conversion isn't wired up yet — only Word ↔ PDF/JPG/PNG conversion is currently supported.",
  },
  {
    slug: "remove-background",
    name: "Remove Background",
    categories: ["image", "ai"],
    kind: "image",
    operation: "remove-background",
    outputFormat: "png",
    icon: "sparkle",
    description: "Automatically remove the background from a photo.",
    accept: IMAGE_ACCEPT,
  },
  {
    slug: "passport-photo-maker",
    name: "Passport Photo Maker",
    categories: ["image", "ai"],
    kind: "image",
    operation: "passport-photo",
    outputFormat: "jpeg",
    icon: "idCard",
    description: "Turn a selfie into a passport-size photo with a white background, auto-cropped and centered.",
    accept: IMAGE_ACCEPT,
  },
  {
    slug: "ai-image-enhancer",
    name: "AI Image Enhancer",
    categories: ["ai"],
    kind: "ai",
    icon: "sparkle",
    description: "Sharpen and improve photo quality with AI.",
    accept: IMAGE_ACCEPT,
    comingSoonReason: "AI tools need an external model provider that isn't connected yet.",
  },
  {
    slug: "ai-upscaler",
    name: "AI Upscaler",
    categories: ["ai"],
    kind: "ai",
    icon: "sparkle",
    description: "Increase image resolution with AI upscaling.",
    accept: IMAGE_ACCEPT,
    comingSoonReason: "AI tools need an external model provider that isn't connected yet.",
  },
  {
    slug: "ai-object-remover",
    name: "AI Object Remover",
    categories: ["ai"],
    kind: "ai",
    icon: "sparkle",
    description: "Erase unwanted objects from a photo with AI.",
    accept: IMAGE_ACCEPT,
    comingSoonReason: "AI tools need an external model provider that isn't connected yet.",
  },
  {
    slug: "ai-photo-restoration",
    name: "AI Photo Restoration",
    categories: ["ai"],
    kind: "ai",
    icon: "sparkle",
    description: "Restore old or damaged photos with AI.",
    accept: IMAGE_ACCEPT,
    comingSoonReason: "AI tools need an external model provider that isn't connected yet.",
  },
];

export function getTool(slug: string): Tool | undefined {
  return tools.find((tool) => tool.slug === slug);
}

export function toolsByCategory(categoryId: CategoryId): Tool[] {
  return tools.filter((tool) => tool.categories.includes(categoryId));
}

export function isComingSoon(tool: Tool): tool is ComingSoonTool {
  return tool.kind === "office-soon" || tool.kind === "ai";
}
