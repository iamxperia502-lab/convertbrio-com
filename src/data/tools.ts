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

export type ImageOperation =
  | "convert"
  | "compress"
  | "resize"
  | "crop"
  | "rotate"
  | "remove-background"
  | "passport-photo"
  | "photo-resize"
  | "batch-compress";
export type PdfOperation =
  | "merge"
  | "split"
  | "rotate"
  | "add-page-numbers"
  | "pdf-to-jpg"
  | "pdf-to-png"
  | "jpg-to-pdf"
  | "image-to-pdf"
  | "compress"
  | "compress-target"
  | "organize"
  | "unlock"
  | "ocr";
export type OfficeOperation =
  | "word-to-pdf"
  | "pdf-to-word"
  | "word-to-jpg"
  | "word-to-png"
  | "excel-to-pdf"
  | "powerpoint-to-pdf"
  | "merge-documents"
  | "compress-word"
  | "compress-powerpoint";

interface ToolBase {
  slug: string;
  name: string;
  categories: CategoryId[];
  icon: keyof typeof icons;
  description: string;
  // Not meaningful for ExternalTool (no upload form), so optional.
  accept?: string;
  multiple?: boolean;
  // Overrides for the <title> tag and meta description on the tool's page.
  // Falls back to `name`/`description` when omitted. Use this to add
  // search intent ("Free Online", "No Signup", the exact output) without
  // cluttering the on-page heading, which stays plain.
  seoTitle?: string;
  seoDescription?: string;
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

export type OcrOperation = "image-to-text" | "scan-to-word";

export type AiOperation = "upscale" | "enhance";

export interface AiTool extends ToolBase {
  kind: "ai";
  operation: AiOperation;
}

export interface OcrTool extends ToolBase {
  kind: "ocr";
  operation: OcrOperation;
}

export interface MetadataTool extends ToolBase {
  kind: "metadata";
}

export interface ComingSoonTool extends ToolBase {
  kind: "office-soon" | "ai-soon";
  comingSoonReason: string;
}

// A tool that lives on a separate ConvertBrio-owned property rather than
// running through the /api/convert/* upload form - e.g. the internet speed
// test, which needs a live network connection to a nearby test server
// (liveinternetspeed.com) rather than a file conversion. Excluded from
// [slug].astro's getStaticPaths (see there) since it has its own static
// route that redirects instead of rendering the conversion form.
export interface ExternalTool extends ToolBase {
  kind: "external";
  externalUrl: string;
}

export type Tool = ImageTool | PdfTool | OfficeTool | AiTool | OcrTool | MetadataTool | ComingSoonTool | ExternalTool;

const IMAGE_ACCEPT = "image/jpeg,image/png,image/webp,image/heic,image/heif,image/avif,image/gif";
const PDF_ACCEPT = "application/pdf";
const OFFICE_ACCEPT = ".doc,.docx,.xls,.xlsx,.ppt,.pptx,application/pdf";
const DOCX_ACCEPT = ".docx";
const SCAN_ACCEPT = `${IMAGE_ACCEPT},${PDF_ACCEPT}`;
const METADATA_ACCEPT = "image/jpeg,image/png,image/webp,image/avif,image/tiff,application/pdf,.docx,.xlsx,.pptx";

export const tools: Tool[] = [
  {
    slug: "image-converter",
    name: "Image Converter",
    categories: ["convert", "image"],
    kind: "image",
    operation: "convert",
    icon: "image",
    description: "Convert images between JPG, PNG, WEBP, AVIF, HEIC, and GIF.",
    seoTitle: "Free Online Image Converter: JPG, PNG, WEBP, AVIF, HEIC | ConvertBrio",
    seoDescription:
      "Convert images between JPG, PNG, WEBP, AVIF, HEIC, and GIF in your browser. Free, no signup, files deleted automatically after conversion.",
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
    seoTitle: "Convert HEIC to JPG Free: No Signup | ConvertBrio",
    seoDescription:
      "Convert iPhone HEIC or HEIF photos to JPG online, free and without an account. Fast, private conversion that works in any browser: no app to install.",
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
    seoDescription:
      "Convert JPG images to PNG to get a lossless file that supports transparency for editing. Free, no signup, no watermark.",
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
    seoDescription:
      "Convert JPG images to WEBP for faster-loading web pages and smaller files. Free, no signup, no watermark on the result.",
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
    seoDescription:
      "Convert JPG photos to AVIF for much smaller files on the web with similar visual quality. Free, no signup, no watermark.",
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
    seoDescription:
      "Convert PNG images to JPG for smaller files that upload and email easily. Free, no signup, no watermark on the result.",
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
    seoDescription:
      "Convert PNG images to WEBP to shrink file size and keep transparency for the web. Free, no signup, no watermark.",
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
    seoDescription:
      "Convert PNG images to AVIF for far smaller files on the web while keeping transparency. Free, no signup, no watermark.",
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
    seoDescription:
      "Convert WEBP images to JPG so they open in any photo viewer, editor, or document. Free, no signup, no watermark.",
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
    seoDescription:
      "Convert WEBP images to lossless PNG for editing and compatibility, keeping transparency. Free, no signup, no watermark.",
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
    seoDescription:
      "Convert WEBP images to AVIF for even smaller files with similar visual quality. Free, no signup, no watermark.",
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
    seoDescription:
      "Convert AVIF images to JPG so they open in any photo viewer, editor, or email client. Free, no signup, and no watermark on the result.",
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
    seoDescription:
      "Convert AVIF images to lossless PNG for apps that can't read AVIF, keeping every pixel and any transparency. Free, no signup.",
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
    seoDescription:
      "Convert AVIF images to WEBP for wider browser and app support at a similar small file size. Free, no signup, no watermark.",
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
    seoTitle: "Compress Image to an Exact File Size (KB) | ConvertBrio",
    seoDescription:
      "Compress a JPG, PNG, WEBP, HEIC, or AVIF to an exact KB target, like 100 KB for a visa or government form, or use a quality slider. Free, no signup.",
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
    seoTitle: "Resize Image to Exact Pixel Dimensions Free Online | ConvertBrio",
    seoDescription:
      "Resize a JPG, PNG, WEBP, or HEIC image to exact width and height in pixels for Instagram, a profile photo, or a form. Free, no signup, no watermark.",
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
    seoDescription:
      "Crop an image to an exact region by entering the left, top, width, and height in pixels. Free, no signup, no watermark.",
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
    seoDescription:
      "Rotate an image by 90, 180, or 270 degrees and download it in its original format. Free, no signup, no watermark.",
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
    seoTitle: "Merge PDF Files Free Online: No Signup | ConvertBrio",
    seoDescription:
      "Combine multiple PDFs into one document, in any order, free and without creating an account. Files are encrypted and deleted automatically after merging.",
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
    seoTitle: "Split PDF Online Free: Separate PDF Pages | ConvertBrio",
    seoDescription:
      "Split a PDF into individual pages online, free. Extract a single page or break a document into separate files, downloaded as a ZIP. No signup, no watermark.",
    accept: PDF_ACCEPT,
  },
  {
    slug: "compress-pdf",
    name: "Compress PDF",
    categories: ["compress", "pdf"],
    kind: "pdf",
    operation: "compress",
    icon: "shrink",
    description: "Reduce PDF file size (best-effort: image re-encoding and metadata cleanup).",
    seoTitle: "Compress PDF Online Free: Reduce PDF File Size | ConvertBrio",
    seoDescription:
      "Compress a PDF online for free to shrink it for email or upload. Re-encodes embedded images and strips metadata, keeping text sharp. No signup or watermark.",
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
    seoDescription:
      "Rotate every page of a PDF by 90, 180, or 270 degrees to fix a sideways scan. Free, no signup, and files are deleted automatically.",
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
    seoDescription:
      "Remove owner-password restrictions such as no printing or copying from a PDF you have the right to edit. Free, no signup.",
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
    seoDescription:
      "Add sequential page numbers to every page of a PDF, centered at the bottom. Free, no signup, no watermark; files are deleted automatically.",
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
    seoTitle: "PDF to JPG: Convert PDF Pages to Images Free | ConvertBrio",
    seoDescription:
      "Convert every page of a PDF to a JPG image online, free. One image per page, ready to share, post, or embed. No signup, no watermark.",
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
    seoDescription:
      "Export every page of a PDF as a sharp PNG image, or a ZIP of images for multi-page files. Free, no signup, no watermark.",
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
    seoTitle: "JPG to PDF: Combine Images Into One PDF Free | ConvertBrio",
    seoDescription:
      "Convert JPG and PNG images to a single PDF online, free. Combine multiple photos or scanned pages into one document, in order. No signup, no watermark.",
    accept: "image/jpeg,image/png",
    multiple: true,
  },
  {
    slug: "image-to-pdf",
    name: "Image to PDF",
    categories: ["convert", "image"],
    kind: "pdf",
    operation: "image-to-pdf",
    icon: "image",
    description: "Combine JPG, PNG, WEBP, HEIC, AVIF, or GIF images into a single PDF.",
    seoDescription:
      "Combine JPG, PNG, WEBP, HEIC, AVIF, or GIF images into a single PDF, one image per page, in the order you choose. Free, no signup.",
    accept: IMAGE_ACCEPT,
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
    seoTitle: "OCR PDF Free: Scanned Document to Editable Text & Word | ConvertBrio",
    seoDescription:
      "Run OCR on a scanned PDF to make it searchable and get the text into Word. Free online text recognition, no signup, then copy the text or convert to DOCX.",
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
    seoTitle: "Convert Word to PDF Free Online: No Signup | ConvertBrio",
    seoDescription:
      "Convert a Word (.docx) document to a print-ready PDF that preserves your formatting. Free, no account required, files deleted automatically after conversion.",
    accept: DOCX_ACCEPT,
  },
  {
    slug: "pdf-to-word",
    name: "PDF to Word",
    categories: ["convert", "pdf", "document"],
    kind: "office",
    operation: "pdf-to-word",
    icon: "pdf",
    description: "Convert a PDF into an editable Word document, preserving paragraphs, bold/italic, headings, simple tables, and images (complex multi-column layouts may not match exactly).",
    seoTitle: "Convert PDF to Word (Editable DOCX) Free | ConvertBrio",
    seoDescription:
      "Turn a PDF into an editable Word document with paragraphs, headings, bold and italic, simple tables, and images. Free, no signup; complex layouts may differ.",
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
    seoDescription:
      "Export each page of a Word (.docx) document as a JPG image, one image per page. Free, no signup, files deleted automatically.",
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
    seoDescription:
      "Export each page of a Word (.docx) document as a PNG image, one image per page. Free, no signup, files deleted automatically.",
    accept: DOCX_ACCEPT,
  },
  {
    slug: "excel-to-pdf",
    name: "Excel to PDF",
    categories: ["convert", "document"],
    kind: "office",
    operation: "excel-to-pdf",
    icon: "word",
    description: "Convert Excel spreadsheets to PDF.",
    seoDescription:
      "Convert an Excel spreadsheet to a print-ready PDF that keeps your sheets and formatting. Free, no signup, and files are deleted automatically.",
    accept: ".xls,.xlsx",
  },
  {
    slug: "pdf-to-excel",
    name: "PDF to Excel",
    categories: ["document"],
    kind: "office-soon",
    icon: "pdf",
    description: "How to get a table out of a PDF and into an Excel spreadsheet, free.",
    seoTitle: "PDF to Excel: How to Get a PDF Table Into a Spreadsheet Free | ConvertBrio",
    seoDescription:
      "Free ways to move a table from a PDF into Excel: convert the PDF to Word and copy the table, or OCR a scanned PDF first. Step-by-step, no signup.",
    accept: PDF_ACCEPT,
    comingSoonReason: "Excel/PowerPoint conversion isn't wired up yet: only Word ↔ PDF/JPG/PNG conversion is currently supported.",
  },
  {
    slug: "powerpoint-to-pdf",
    name: "PowerPoint to PDF",
    categories: ["convert", "document"],
    kind: "office",
    operation: "powerpoint-to-pdf",
    icon: "word",
    description: "Convert PowerPoint presentations to PDF.",
    seoTitle: "PowerPoint to PDF Free Online: Convert & Shrink PPTX | ConvertBrio",
    seoDescription:
      "Convert a PowerPoint (.pptx) to PDF online, free, one page per slide. Then compress the PDF to email a large deck. No signup, no watermark.",
    accept: ".ppt,.pptx",
  },
  {
    slug: "compress-word",
    name: "Compress Word",
    categories: ["compress"],
    kind: "office",
    operation: "compress-word",
    icon: "shrink",
    description: "Reduce a Word document's file size by re-encoding its embedded images.",
    seoTitle: "Compress Word Document Online Free: Reduce DOCX Size | ConvertBrio",
    seoDescription:
      "Compress a Word (.docx) document online, free. Re-encodes embedded images to shrink the file for email, keeping text and formatting. No signup or watermark.",
    accept: ".docx",
  },
  {
    slug: "compress-powerpoint",
    name: "Compress PowerPoint",
    categories: ["compress"],
    kind: "office",
    operation: "compress-powerpoint",
    icon: "shrink",
    description: "Reduce a PowerPoint presentation's file size by re-encoding its embedded images.",
    seoTitle: "Compress PowerPoint Online Free: Reduce PPTX Size | ConvertBrio",
    seoDescription:
      "Compress a PowerPoint (.pptx) online, free. Re-encodes embedded images to shrink the file for email while keeping slides editable. No signup or watermark.",
    accept: ".pptx",
  },
  {
    slug: "merge-documents",
    name: "Merge Documents",
    categories: ["document"],
    kind: "office",
    operation: "merge-documents",
    icon: "merge",
    description: "Combine Word, Excel, and PowerPoint files into one PDF.",
    seoDescription:
      "Combine Word, Excel, and PowerPoint files into one PDF in a single step, in the order you upload them. Free, no signup.",
    accept: OFFICE_ACCEPT,
    multiple: true,
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
    seoTitle: "Remove Background from Image Free: AI, No Signup | ConvertBrio",
    seoDescription:
      "Automatically remove a photo's background with AI and download a transparent PNG. Free, no account, no manual masking required.",
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
    operation: "enhance",
    icon: "sparkle",
    description: "Automatically balance color and sharpen a photo in one click.",
    seoDescription:
      "Balance color and sharpen a dull photo automatically with AI, in one click. Free, no signup, and no watermark on the result.",
    accept: IMAGE_ACCEPT,
  },
  {
    slug: "ai-upscaler",
    name: "AI Upscaler",
    categories: ["ai"],
    kind: "ai",
    operation: "upscale",
    icon: "sparkle",
    description: "Increase image resolution with AI upscaling.",
    seoTitle: "AI Image Upscaler Free Online: No Signup | ConvertBrio",
    seoDescription:
      "Increase an image's resolution with AI upscaling, free and without an account. Sharpen low-resolution photos before printing or resizing.",
    accept: IMAGE_ACCEPT,
  },
  {
    slug: "ai-object-remover",
    name: "AI Object Remover",
    categories: ["ai"],
    kind: "ai-soon",
    icon: "sparkle",
    description: "How to remove an unwanted object from a photo: free options that work today.",
    seoTitle: "Remove an Unwanted Object From a Photo: Free Options | ConvertBrio",
    seoDescription:
      "Free ways to remove an object from a photo: crop it out of frame, or cut out the subject with the AI background remover. A brush tool is in development.",
    accept: IMAGE_ACCEPT,
    comingSoonReason: "Needs a mask-drawing tool plus an inpainting model that isn't on the free tier: coming once that's in place.",
  },
  {
    slug: "ai-photo-restoration",
    name: "AI Photo Restoration",
    categories: ["ai"],
    kind: "ai-soon",
    icon: "sparkle",
    description: "How to restore an old or damaged photo: free steps that help today.",
    seoTitle: "Restore an Old or Damaged Photo: Free Steps | ConvertBrio",
    seoDescription:
      "Free ways to revive an old photo now: rebalance fading with AI Image Enhancer and recover sharpness with AI Upscaler. Scratch repair is in development.",
    accept: IMAGE_ACCEPT,
    comingSoonReason: "Scratch and damage repair needs a diffusion model that isn't available on the free tier yet.",
  },
  {
    slug: "compress-pdf-to-size",
    name: "Compress PDF to Exact Size",
    categories: ["compress", "pdf"],
    kind: "pdf",
    operation: "compress-target",
    icon: "shrink",
    description: "Shrink a PDF to fit under a maximum size in KB or MB, with the achieved size shown.",
    seoTitle: "Compress PDF to a Specific Size (KB or MB) | ConvertBrio",
    seoDescription:
      "Set a maximum size in KB or MB and ConvertBrio compresses your PDF step by step until it fits, then shows the size reached. Free, no signup.",
    accept: PDF_ACCEPT,
  },
  {
    slug: "photo-signature-resizer",
    name: "Photo & Signature Resizer",
    categories: ["image"],
    kind: "image",
    operation: "photo-resize",
    outputFormat: "jpeg",
    icon: "scale",
    description: "Resize a photo or signature to exact pixel dimensions and a maximum file size for forms and portals.",
    seoTitle: "Photo & Signature Resizer: Exact Pixels and KB Limit | ConvertBrio",
    seoDescription:
      "Resize a photo or signature to the exact pixels and maximum KB an application form asks for. Crop or pad to the right shape. Free, no signup, no watermark.",
    accept: IMAGE_ACCEPT,
  },
  {
    slug: "batch-image-compressor",
    name: "Batch Image Compressor",
    categories: ["compress", "image"],
    kind: "image",
    operation: "batch-compress",
    icon: "shrink",
    description: "Compress many images to the same target size at once, with a ZIP and individual downloads.",
    seoTitle: "Batch Compress Images to a Target Size in KB | ConvertBrio",
    seoDescription:
      "Compress many photos to one target size in KB at once. Each file is processed on its own, with per-file results, single downloads, and a ZIP.",
    accept: IMAGE_ACCEPT,
    multiple: true,
  },
  {
    slug: "image-to-text",
    name: "Image to Text",
    categories: ["document"],
    kind: "ocr",
    operation: "image-to-text",
    icon: "ocr",
    description: "Extract selectable text from a photo or screenshot with OCR.",
    seoTitle: "Image to Text Converter (OCR): Copy Text From a Photo | ConvertBrio",
    seoDescription:
      "Extract text from a JPG, PNG, or screenshot with OCR. Copy the text or download a .txt file. Free, no signup, with notes on handwriting and low-res scans.",
    accept: IMAGE_ACCEPT,
  },
  {
    slug: "scan-to-word",
    name: "Scan to Word",
    categories: ["document"],
    kind: "ocr",
    operation: "scan-to-word",
    icon: "word",
    description: "Turn a scanned page or PDF into an editable Word (DOCX) document with OCR.",
    seoTitle: "Scan to Word: Convert a Scanned Page to Editable DOCX | ConvertBrio",
    seoDescription:
      "Convert a scanned document, photo of a page, or scanned PDF into an editable Word file with OCR. Free, no signup. Best on clean scans of printed text.",
    accept: SCAN_ACCEPT,
  },
  {
    slug: "pdf-page-organizer",
    name: "PDF Page Organizer",
    categories: ["pdf"],
    kind: "pdf",
    operation: "organize",
    icon: "merge",
    description: "See every page as a thumbnail, then reorder, rotate, or delete pages.",
    seoTitle: "Reorder, Rotate & Delete PDF Pages Visually | ConvertBrio",
    seoDescription:
      "Preview each PDF page as a thumbnail, then move, rotate, or delete pages and save the result. Works with buttons as well as drag and drop. Free, no signup.",
    accept: PDF_ACCEPT,
  },
  {
    slug: "metadata-remover",
    name: "Metadata Remover",
    categories: ["image", "pdf", "document"],
    kind: "metadata",
    icon: "lock",
    description: "Strip hidden metadata such as GPS location, camera details, and author names from images, PDFs, and Office files.",
    seoTitle: "Remove Metadata from Photos, PDFs & Office Files | ConvertBrio",
    seoDescription:
      "Remove EXIF location, camera data, and author names from JPG, PNG, PDF, DOCX, XLSX, and PPTX files without changing the format. Free, no signup.",
    accept: METADATA_ACCEPT,
  },
  {
    slug: "internet-speed-test",
    name: "Internet Speed Test",
    categories: [],
    kind: "external",
    icon: "globe",
    description: "Test your download, upload, and ping speed.",
    externalUrl: "https://liveinternetspeed.com/",
  },
];

export function getTool(slug: string): Tool | undefined {
  return tools.find((tool) => tool.slug === slug);
}

export function toolsByCategory(categoryId: CategoryId): Tool[] {
  return tools.filter((tool) => tool.categories.includes(categoryId));
}

export function isComingSoon(tool: Tool): tool is ComingSoonTool {
  return tool.kind === "office-soon" || tool.kind === "ai-soon";
}

// Live tool count for marketing copy — computed so it can't drift out of
// sync with tools.ts as tools are added, removed, or marked coming-soon.
// Excludes external tools (e.g. internet-speed-test): they're a link to a
// companion property, not a ConvertBrio conversion tool, so counting them
// here would inflate the "N tools" claim beyond what it's meant to mean.
export const liveToolCount = tools.filter((tool) => !isComingSoon(tool) && tool.kind !== "external").length;
