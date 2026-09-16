export interface FaqItem {
  question: string;
  answer: string;
  link?: { href: string; label: string };
}

export const homepageFaq: FaqItem[] = [
  {
    question: "What is an online file converter?",
    answer:
      "An online file converter is a browser-based tool that changes a file from one format to another without requiring software installation. ConvertBrio can be used for image, PDF, document, OCR, compression, and other supported file-processing tasks.",
    link: { href: "/all-tools", label: "Browse all ConvertBrio tools" },
  },
  {
    question: "Is ConvertBrio free to use?",
    answer:
      "Yes. Every ConvertBrio tool, image conversion, PDF conversion, compression, document conversion, and more, is completely free to use, with no sign-up, no usage limits, and no paid plan. Files up to 100 MB per conversion are supported at no cost.",
    link: { href: "/all-tools", label: "Browse all ConvertBrio tools" },
  },
  {
    question: "Can I convert files on my phone?",
    answer:
      "Yes. Open ConvertBrio in your phone or tablet's browser and every tool works the same as on desktop, with no app to install. The upload box works with your device's camera roll and file picker, and every tool is built for small touchscreens as well as desktops.",
  },
  {
    question: "Can I convert multiple images at once?",
    answer:
      "Yes, on tools built for it. Image to PDF, Merge PDF, and Merge Documents accept several files in a single upload today, letting you combine multiple images or documents in one pass, free, no account required. Most single-format conversion tools currently process one file at a time.",
    link: { href: "/tools/jpg-to-pdf", label: "Combine images into a PDF" },
  },
  {
    question: "Are uploaded files secure?",
    answer:
      "Every file you upload to ConvertBrio travels over an encrypted (HTTPS) connection and is stored encrypted at rest. Conversion is fully automated: no one manually opens or reviews your file as part of processing, and each conversion runs in its own isolated server process.",
  },
  {
    question: "When are uploaded files deleted?",
    answer:
      "ConvertBrio automatically deletes both your original upload and the converted output from our servers within 24 hours of processing. Files aren't kept, archived, or used for any purpose beyond completing your conversion, so nothing lingers on our servers after your download is ready.",
  },
  {
    question: "Which file formats does ConvertBrio support?",
    answer:
      "ConvertBrio supports common image formats: JPG, PNG, WEBP, AVIF, HEIC, and GIF, along with PDF and Word (DOCX) documents. Supported operations include format conversion, compression, resizing, cropping, rotating, merging, splitting, and unlocking PDFs. Visit the tools page for the complete, up-to-date list of formats.",
    link: { href: "/all-tools", label: "View all supported tools" },
  },
];
