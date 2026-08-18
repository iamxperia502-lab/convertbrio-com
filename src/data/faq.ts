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
    question: "How do I convert files online for free?",
    answer:
      "Open any tool on ConvertBrio's homepage, upload your file, choose an output format, and click convert — no account or payment required. Your file is sent over an encrypted connection to ConvertBrio's servers, converted there in seconds, and the result comes back to you, ready to download.",
  },
  {
    question: "Is ConvertBrio free to use?",
    answer:
      "Yes. ConvertBrio's core tools are free, including image conversion, PDF conversion, compression, and document conversion, with no sign-up required. Paid plans are optional and built for people who need larger file-size limits or batch processing of many files at once; everyday conversions never require payment.",
    link: { href: "/pricing", label: "See pricing" },
  },
  {
    question: "Can I convert files on my phone?",
    answer:
      "Yes. Open ConvertBrio in your phone or tablet's browser and every tool works the same as on desktop, with no app to install. The upload box works with your device's camera roll and file picker, and every tool is built for small touchscreens as well as desktops.",
  },
  {
    question: "How do I convert AVIF to JPG?",
    answer:
      "Open the AVIF to JPG converter, upload your AVIF image, and ConvertBrio decodes and re-encodes it as a JPG you can download instantly. JPG opens in virtually every browser, photo viewer, and editing app, making it the safest choice when an AVIF file won't open on older software.",
    link: { href: "/tools/avif-to-jpg", label: "Convert AVIF to JPG" },
  },
  {
    question: "How do I convert AVIF to PNG?",
    answer:
      "Use the AVIF to PNG converter to upload your AVIF file and download a lossless PNG version in seconds. PNG keeps transparency and sharp edges intact, which makes it a better pick than JPG for logos, screenshots, and graphics originally saved in the newer AVIF format.",
    link: { href: "/tools/avif-to-png", label: "Convert AVIF to PNG" },
  },
  {
    question: "How do I convert JPG to PNG?",
    answer:
      "Upload your JPG to the JPG to PNG converter, and ConvertBrio produces a PNG copy that supports transparency and lossless detail. This is useful for logos, icons, and images you plan to edit further, since PNG avoids the recompression artifacts repeated JPG saving can introduce.",
    link: { href: "/tools/jpg-to-png", label: "Convert JPG to PNG" },
  },
  {
    question: "How do I convert PNG to JPG?",
    answer:
      "Upload a PNG to the PNG to JPG converter to get a smaller, widely compatible JPG file. This conversion suits photos and flat images headed to the web or email, where PNG's larger file size isn't necessary and JPG's compression keeps quality visually identical.",
    link: { href: "/tools/png-to-jpg", label: "Convert PNG to JPG" },
  },
  {
    question: "How do I convert WEBP to JPG?",
    answer:
      "Drop your WEBP file into the WEBP to JPG converter and download a JPG that opens in any app, browser, or device, including ones that don't support WEBP. It's the quickest fix when an image saved from a website won't open after sharing or downloading it elsewhere.",
    link: { href: "/tools/webp-to-jpg", label: "Convert WEBP to JPG" },
  },
  {
    question: "How do I convert WEBP to PNG?",
    answer:
      "Upload your WEBP image to the WEBP to PNG converter to get a lossless PNG file with transparency preserved. It's the better option compared to WEBP to JPG whenever the original image has a transparent background, such as a logo, icon, or exported graphic.",
    link: { href: "/tools/webp-to-png", label: "Convert WEBP to PNG" },
  },
  {
    question: "How do I convert HEIC to JPG?",
    answer:
      "Upload your iPhone photo to the HEIC to JPG converter, and ConvertBrio outputs a standard JPG that opens on Windows, Android, and any app that doesn't support Apple's HEIC format. It's the fastest way to share or upload iPhone photos to sites that reject HEIC files.",
    link: { href: "/tools/heic-to-jpg", label: "Convert HEIC to JPG" },
  },
  {
    question: "How can I reduce an image below 100 KB?",
    answer:
      "Upload your image to the ConvertBrio target-size image compressor, choose 100 KB as the maximum output size, and start compression. The tool can adjust image quality and dimensions when necessary to produce a file at or below the selected size.",
    link: { href: "/tools/compress-image", label: "Reduce an image to 100 KB" },
  },
  {
    question: "How can I compress an image without losing quality?",
    answer:
      "ConvertBrio's image compressor uses adjustable quality settings that shrink file size while keeping images visually sharp. Start near the highest quality setting and lower it gradually while checking the preview — most photos can lose 40–60% of their size before any difference becomes noticeable to the eye.",
    link: { href: "/tools/compress-image", label: "Compress an image online" },
  },
  {
    question: "Can I convert multiple images at once?",
    answer:
      "Yes. Tools like Image to PDF and Merge PDF accept several files in a single upload today, letting you combine multiple images or documents in one pass. Converting many separate images at once across every image tool, known as batch processing, is available on paid plans for higher-volume needs.",
    link: { href: "/tools/jpg-to-pdf", label: "Combine images into a PDF" },
  },
  {
    question: "How do I convert PDF to Word?",
    answer:
      "Open the PDF to Word converter, upload your PDF, and ConvertBrio extracts the text into an editable DOCX file you can open in Microsoft Word or Google Docs. This conversion focuses on text content, so complex layouts, columns, and embedded images may not carry over exactly.",
    link: { href: "/tools/pdf-to-word", label: "Convert PDF to Word" },
  },
  {
    question: "How do I convert Word to PDF?",
    answer:
      "Upload your DOCX file to the Word to PDF converter, and ConvertBrio generates a print-ready PDF that preserves your document's formatting. This is the standard way to lock a resume, contract, or report into a fixed layout before emailing it or submitting it online.",
    link: { href: "/tools/word-to-pdf", label: "Convert Word to PDF" },
  },
  {
    question: "How do I merge PDF files online?",
    answer:
      "Open the Merge PDF tool, upload two or more PDF files, arrange them in the order you want, and download the combined document. It's a fast way to merge PDF files online — for example, joining scanned pages, invoices, or chapters into a single file with no desktop software.",
    link: { href: "/tools/merge-pdf", label: "Merge PDF online" },
  },
  {
    question: "How do I compress a PDF online?",
    answer:
      "Upload your document to the Compress PDF tool, and ConvertBrio re-encodes embedded images and strips unnecessary metadata to shrink the file. This reduces PDF file size for easier emailing and uploading, though results vary depending on how many images the original PDF contains.",
    link: { href: "/tools/compress-pdf", label: "Compress PDF online" },
  },
  {
    question: "Can ConvertBrio extract text from images or scanned PDFs?",
    answer:
      "Yes. ConvertBrio's OCR PDF tool scans every page, recognizes the text, and hands back a searchable, copyable PDF. It currently recognizes English text; support for other languages isn't available yet.",
    link: { href: "/tools/ocr-pdf", label: "Try OCR PDF" },
  },
  {
    question: "Are uploaded files secure?",
    answer:
      "Every file you upload to ConvertBrio travels over an encrypted (HTTPS) connection and is stored encrypted at rest. Conversion is fully automated — no one manually opens or reviews your file as part of processing — and each conversion runs in its own isolated server process.",
  },
  {
    question: "When are uploaded files deleted?",
    answer:
      "ConvertBrio automatically deletes both your original upload and the converted output from our servers within 24 hours of processing. Files aren't kept, archived, or used for any purpose beyond completing your conversion, so nothing lingers on our servers after your download is ready.",
  },
  {
    question: "Do I need to install any software?",
    answer:
      "No. You use ConvertBrio entirely from your web browser on desktop or mobile — there's nothing to download or install. Upload your file, and ConvertBrio's servers do the actual conversion; you just wait a few seconds and download the result.",
  },
  {
    question: "Which file formats does ConvertBrio support?",
    answer:
      "ConvertBrio supports common image formats — JPG, PNG, WEBP, AVIF, HEIC, and GIF — along with PDF and Word (DOCX) documents. Supported operations include format conversion, compression, resizing, cropping, rotating, merging, splitting, and unlocking PDFs. Visit the tools page for the complete, up-to-date list of formats.",
    link: { href: "/all-tools", label: "View all supported tools" },
  },
];
