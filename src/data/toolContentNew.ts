import type { ToolContentEntry } from "./toolContent";

// Content for the tools added after the initial launch. Each entry targets a
// distinct search intent and only makes claims the tool actually delivers.
export const newToolContent: Record<string, ToolContentEntry> = {
  "compress-pdf-to-size": {
    title: "Compress a PDF to a Specific Size in KB or MB",
    intro: [
      "Upload portals, job applications, and email systems often reject a PDF over a hard limit: 200 KB, 500 KB, 2 MB. This tool takes that limit as an input. Enter the maximum size, and ConvertBrio compresses your PDF in steps, measuring the real file size after each one, until it fits.",
      "Unlike a general compressor that just shrinks a file as much as it can, this tool works toward your number and tells you the truth about the result. It shows the size it reached, and if your limit is too small to hit without wrecking the pages, it says so instead of pretending.",
    ],
    howTo: [
      { step: "Upload your PDF", detail: "One file per run, up to 100 MB." },
      { step: "Enter the maximum size", detail: "Type the number from the form, then choose KB or MB." },
      { step: "Compress", detail: "We try progressively stronger settings and stop at the first result that fits under your limit." },
      { step: "Check the achieved size", detail: "The result message shows the size reached. Download the file, or try a larger limit if the target wasn't met." },
    ],
    sections: [
      {
        heading: "How the exact-size search works",
        body: "A single pass rarely lands on a specific number, so the tool runs a ladder of settings. Each step re-encodes the embedded photos from your original file at a lower resolution and quality than the last, starting gentle and getting stronger. After every step the actual output is measured. The first result at or under your limit is the one you get, which means you keep as much quality as your target allows.",
      },
      {
        heading: "When a target can't be reached",
        body: "Some PDFs simply don't shrink much: files made of vector graphics or plain text are already small, and a 20 KB limit on a 40-page scan is unrealistic. If even the strongest setting leaves the file above your limit, the tool never reports success. It returns the smallest version it could make, shows that size, and suggests options such as a larger limit or splitting the PDF into parts.",
      },
      {
        heading: "What gets changed",
        body: "Embedded JPEG images are re-compressed and, if very large, scaled down, and document properties such as title and author are cleared. Text, fonts, and page layout are left alone. Scanned PDFs made of photos benefit the most, while very small target sizes will make images visibly softer.",
      },
      {
        heading: "Privacy and limits",
        body: "Files are encrypted in transit. Your original file is deleted right after it is read for conversion. The converted result is deleted by a daily cleanup, typically within about 24 hours. Files are processed on our hosting providers' servers (Vercel and Supabase), automatically, with no human review. Password-protected PDFs can't be processed.",
      },
    ],
    relatedTools: [
      { label: "Compress PDF", href: "/tools/compress-pdf" },
      { label: "Split PDF", href: "/tools/split-pdf" },
      { label: "PDF Page Organizer", href: "/tools/pdf-page-organizer" },
      { label: "Compress Image", href: "/tools/compress-image" },
    ],
    faqDescription: "Common questions about compressing a PDF to a maximum size in KB or MB.",
    faq: [
      { question: "How do I compress a PDF to under 200 KB?", answer: "Upload the PDF, enter 200 and choose KB, then compress. The tool tries stronger settings until the file fits, or tells you the smallest size it could reach if 200 KB isn't realistic for that document." },
      { question: "Will it always hit my exact size?", answer: "No. It gets the file at or under your limit when that's possible without unacceptable quality loss. When it isn't, you'll see the smallest size reached instead of a false success." },
      { question: "Does the result end up exactly at my limit?", answer: "It ends up at or below the limit, usually somewhat under it, because settings change in steps rather than continuously." },
      { question: "Why did my PDF barely shrink?", answer: "PDFs made mostly of text and vector shapes are already compact. The biggest savings come from PDFs that contain photos or scanned pages." },
      { question: "Is there a quality difference from the regular Compress PDF tool?", answer: "Compress PDF applies one fixed level. This tool starts at the same level and only gets stronger if your limit requires it." },
      { question: "Is my document kept?", answer: "No. Your original file is deleted right after it is read, the result is deleted by a daily cleanup (typically within about 24 hours), and nothing is reviewed by a person." },
    ],
  },

  "photo-signature-resizer": {
    title: "Photo and Signature Resizer: Exact Pixels and a Maximum File Size",
    intro: [
      "Application forms rarely accept a photo as it comes off your phone. They ask for a specific width and height in pixels and a file no larger than a certain number of KB. This resizer produces exactly that: enter the dimensions and the size limit from your form and download a JPG that meets both.",
      "It handles both photos and signatures. Pick an aspect ratio or a preset to fill in the dimensions, choose whether to crop or add white margins when your picture has a different shape, and set the maximum KB. The dimensions you enter are never changed to meet the file size: only the JPEG quality is lowered.",
    ],
    howTo: [
      { step: "Upload your photo or signature", detail: "JPG, PNG, WEBP, HEIC, AVIF, or GIF." },
      { step: "Set the size", detail: "Choose a preset or enter width and height in pixels. Pick an aspect ratio if your form specifies one." },
      { step: "Add the file size limit", detail: "Enter the maximum KB, or leave it blank to keep high quality." },
      { step: "Choose crop or margins", detail: "Crop fills the exact size; white margins keep the whole picture inside it, which suits signatures." },
      { step: "Resize and check the result", detail: "The result message confirms the exact pixels and the final KB." },
    ],
    sections: [
      {
        heading: "Exact dimensions, then the file size",
        body: "The picture is first resized to exactly the width and height you asked for. Then the tool searches for the highest JPEG quality that keeps the file under your limit, so the dimensions stay fixed. If the limit is too small even at the lowest quality, the tool says so and shows the size it reached rather than claiming success. In that case try slightly smaller dimensions.",
      },
      {
        heading: "Presets and custom values",
        body: "Presets cover pixel sizes that can be reproduced accurately, such as a 35 × 45 mm passport photo at 300 DPI (413 × 531 px) or a 2 × 2 inch photo at 300 DPI (600 × 600 px). Portals differ, so always compare against your form's own instructions and use the custom fields if they disagree with a preset.",
      },
      {
        heading: "Crop or pad",
        body: "When your picture isn't the same shape as the target, cropping fills the frame and trims the edges, focusing on the most prominent part of the image. Padding keeps everything and fills the leftover space with white. Choose padding for signatures on paper so no ink is cut off.",
      },
      {
        heading: "Signatures",
        body: "Photograph or scan your signature on plain white paper in good light, upload it, and use the 3:1 signature preset or your own size. Black ink on white compresses to very small files.",
      },
    ],
    relatedTools: [
      { label: "Compress Image", href: "/tools/compress-image" },
      { label: "Resize Image", href: "/tools/resize-image" },
      { label: "Passport Photo Maker", href: "/tools/passport-photo-maker" },
      { label: "Batch Image Compressor", href: "/tools/batch-image-compressor" },
    ],
    faqDescription: "Common questions about resizing a photo or signature for an online form.",
    faq: [
      { question: "How do I resize a photo to 200 × 230 pixels under 20 KB?", answer: "Upload the photo, enter 200 for width, 230 for height, and 20 for the maximum KB, then resize. The result message confirms the exact size." },
      { question: "Does it change the dimensions to reach the KB limit?", answer: "No. Dimensions stay exactly as entered and only the JPEG quality is lowered." },
      { question: "What if the limit can't be reached?", answer: "You'll see a message with the smallest size achieved. Try smaller dimensions or a higher limit." },
      { question: "Is the output always a JPG?", answer: "Yes, since most forms require JPG. The file is named with its dimensions so you can find it easily." },
      { question: "Can I keep my photo's original shape?", answer: "Yes. Choose the white margins option and the whole picture fits inside the target size." },
      { question: "Does this meet my exam or visa portal's rules?", answer: "It produces exactly the pixels and maximum size you enter. Requirements vary by portal and can change, so confirm the numbers on the portal itself." },
    ],
  },

  "batch-image-compressor": {
    title: "Batch Image Compressor: Compress Many Photos to One Target Size",
    intro: [
      "Compressing photos one at a time is slow when a form, a listing, or a website needs twenty of them under the same limit. Upload the whole set, enter a single target size in KB, and ConvertBrio compresses every image to fit.",
      "Each file is handled on its own, so one problem file never blocks the rest. You get a per-file report, individual downloads for every image, and a ZIP of the whole batch.",
    ],
    howTo: [
      { step: "Select your images", detail: "Drop up to 50 images at once, up to 100 MB in total." },
      { step: "Enter the target size", detail: "One limit in KB applies to every image." },
      { step: "Compress", detail: "Each image is processed independently: quality is lowered first, and dimensions shrink only if needed." },
      { step: "Download", detail: "Save individual files from the list, or download everything as a ZIP." },
    ],
    sections: [
      {
        heading: "Per-file results, not all-or-nothing",
        body: "The results list shows each file, the size it reached, and whether it stayed within the target. If an image can't get under the limit without extreme quality loss, it's flagged as above target instead of silently passing. A file that can't be read at all is reported as failed, while the others complete normally.",
      },
      {
        heading: "How each image is compressed",
        body: "For every image, the tool searches for the highest quality that fits your target in the same format (JPG stays JPG, WEBP stays WEBP). If even the lowest quality is too large, it reduces the dimensions in small steps. HEIC photos from iPhones are converted to JPG because HEIC isn't a supported output format. Animated GIFs keep only their first frame.",
      },
      {
        heading: "When to use batch vs. single",
        body: "Use the single Compress Image tool for one file. Use batch when many images share the same limit, for example uploading a product set, a set of documents to a portal, or photos for an email.",
      },
    ],
    relatedTools: [
      { label: "Compress Image", href: "/tools/compress-image" },
      { label: "Photo & Signature Resizer", href: "/tools/photo-signature-resizer" },
      { label: "Image to PDF", href: "/tools/image-to-pdf" },
      { label: "Image Converter", href: "/tools/image-converter" },
    ],
    faqDescription: "Common questions about compressing several images to the same size.",
    faq: [
      { question: "How many images can I compress at once?", answer: "Up to 50 images, as long as the total is under 100 MB." },
      { question: "Are all images guaranteed to hit the target?", answer: "No. Each result is measured, and any image that stays above the target is flagged so you know which ones need attention." },
      { question: "Can I download files one by one?", answer: "Yes. Every successful image has its own download link, and the ZIP is available too." },
      { question: "What happens if one file is corrupt?", answer: "It's reported as failed while the others are processed normally." },
      { question: "Does it change the format of my images?", answer: "No, except HEIC photos, which become JPG." },
      { question: "Are my images stored?", answer: "Your original is deleted right after it is read, results are deleted by a daily cleanup (typically within about 24 hours), and nothing is reviewed by a person." },
    ],
  },

  "image-to-text": {
    title: "Image to Text: Extract Text From a Photo or Screenshot",
    intro: [
      "Photos of documents, screenshots, whiteboards, and signs all hold text you can't select. Image to Text uses optical character recognition (OCR) to read that text and give it back as characters you can copy, search, and edit.",
      "Upload an image, choose the language of the text, and the recognized text appears on the page ready to copy. A plain .txt file downloads at the same time.",
    ],
    howTo: [
      { step: "Upload an image", detail: "JPG, PNG, WEBP, HEIC, AVIF, or GIF. A sharp, straight photo works best." },
      { step: "Choose the language", detail: "Pick the language the text is written in for the best accuracy." },
      { step: "Extract the text", detail: "Recognition runs on our hosting providers' servers." },
      { step: "Copy or download", detail: "Select the text on the page, use Copy text, or open the downloaded .txt file." },
    ],
    sections: [
      {
        heading: "What you get",
        body: "The recognized text as plain characters, in reading order, with line breaks kept. It's plain text, so fonts, colors, and layout are not preserved. If you want an editable document with paragraphs, use Scan to Word instead.",
      },
      {
        heading: "Getting accurate results",
        body: "Recognition quality follows image quality. Use a sharp, well-lit, straight-on photo of printed text, at a resolution where letters are clearly readable. Crop out borders and background, and pick the correct language.",
      },
      {
        heading: "Limitations to expect",
        body: "Handwriting is not reliably recognized. Low-resolution images, blur, glare, skew, and decorative fonts reduce accuracy. Tables and multi-column layouts may come out in a jumbled order because OCR reads line by line. Always proofread the output before relying on it.",
      },
      {
        heading: "Privacy",
        body: "Images are encrypted in transit. Your original file is deleted right after it is read for conversion. The converted result is deleted by a daily cleanup, typically within about 24 hours. Files are processed on our hosting providers' servers (Vercel and Supabase), automatically, with no human review. The recognized text is shown only to you.",
      },
    ],
    relatedTools: [
      { label: "Scan to Word", href: "/tools/scan-to-word" },
      { label: "OCR PDF", href: "/tools/ocr-pdf" },
      { label: "PDF to Word", href: "/tools/pdf-to-word" },
      { label: "Image Converter", href: "/tools/image-converter" },
    ],
    faqDescription: "Common questions about extracting text from images with OCR.",
    faq: [
      { question: "How do I copy text from an image?", answer: "Upload the image, run the extraction, and use Copy text on the result. The same text also downloads as a .txt file." },
      { question: "Does it work on screenshots?", answer: "Yes. Screenshots of printed or on-screen text usually recognize very accurately." },
      { question: "Can it read handwriting?", answer: "Not reliably. OCR is designed for printed and typed text." },
      { question: "Which languages are supported?", answer: "English, Portuguese, Spanish, French, German, Italian, and Indonesian." },
      { question: "Why is my text jumbled?", answer: "Tables and multi-column pages can be read in the wrong order. Crop the image to one column at a time." },
      { question: "What about a PDF?", answer: "Use Scan to Word for a scanned PDF, or OCR PDF to make it searchable." },
    ],
  },

  "scan-to-word": {
    title: "How do I convert a scanned document to an editable Word file?",
    intro: [
      "Use optical character recognition (OCR). A scan or a photo of a page is a picture, so Word has no text to edit until OCR reads the letters in the image. Scan to Word does that and builds a real Word document (DOCX) containing the recognized text, which you can then edit, format, and save.",
      "Upload a photo of a page or a scanned PDF, choose the language of the text, and download the DOCX. It's meant for getting the words out of paper documents such as letters, contracts, and printed forms. It gives you the text, not a copy of the page's design, so plan to proofread and re-apply any formatting you need.",
    ],
    howTo: [
      { step: "Scan or photograph the page", detail: "Flat, evenly lit, and straight-on gives the best result. A phone scanning app that saves a PDF or JPG works fine." },
      { step: "Upload the image or PDF", detail: "JPG, PNG, WEBP, HEIC, AVIF, GIF, or a PDF. Files up to 100 MB; PDFs up to 50 pages." },
      { step: "Choose the language", detail: "English, Portuguese, Spanish, French, German, Italian, or Indonesian. The right choice helps accents and special characters come out correctly." },
      { step: "Download the DOCX", detail: "Open it in Word, Google Docs, or LibreOffice, then proofread against the original and fix any misread words." },
    ],
    sections: [
      {
        heading: "Can I scan directly into Word?",
        body: [
          "Not in one step on this site, and not in Word itself either: ConvertBrio doesn't connect to a scanner, so you first create the scan with your scanner or a phone app, then upload the file here.",
          "It helps to separate two different things. Inserting a scan into Word (Insert > Pictures) places the page in the document as an image: it looks right, but you can't edit the words. Converting the scan with OCR, as this tool does, reads the characters and gives you editable text. Choose insertion if you only need the page to appear in a document; choose conversion if you need to change, copy, or search the words.",
        ],
      },
      {
        heading: "Before and after: what to expect",
        body: "An example of the transformation, using a scanned letter:",
        table: {
          headers: ["", "Your scan (before)", "The Word file (after)"],
          rows: [
            ["What it is", "A picture of a printed letter", "A DOCX containing the letter's text"],
            ["Selecting a sentence", "Not possible", "Works like any Word text"],
            ["Search with Ctrl+F / Cmd+F", "Finds nothing", "Finds every match"],
            ["Layout", "Exactly as printed", "Plain paragraphs; one page of the scan follows another, with a page break between them"],
            ["Letterhead logo, stamps, photos", "Visible", "Not included"],
          ],
        },
      },
      {
        heading: "How to check and correct the output",
        body: "OCR is accurate on clean printed text but never perfect, so proofread before you rely on the file. Open the DOCX beside the original scan and read both.",
        list: [
          "Check numbers, dates, amounts, and names first: digits are the most commonly misread characters (0 and O, 1 and l, 5 and S).",
          "Look for words split or joined in the wrong place, and for stray symbols where a smudge or fold crossed the text.",
          "Run Word's spell checker: a nonsense word often marks a misread one.",
          "Re-apply headings, bold, tables, and columns by hand where you need them.",
        ],
      },
      {
        heading: "What the Word file contains",
        body: "The recognized text, split into paragraphs, with one page of the scan following another. It's an editable text document, not a copy of the page's look. Fonts, columns, images, and tables from the original are not reproduced.",
      },
      {
        heading: "Why does formatting change after conversion?",
        body: "Because the tool reads letters, not layout. It reconstructs paragraphs from the lines it finds and does not rebuild the page's design. That is why you'll see these differences:",
        list: [
          "Tables come out as lines of text, not cells. Re-create the table in Word and copy the values across.",
          "Columns are read line by line, so text from two columns can interleave. Crop or scan one column at a time if the order matters.",
          "Fonts, sizes, colors, and spacing are replaced by Word's defaults. Select the text and restyle it.",
          "Images, logos, and signatures are not carried over. Add them back from the original file.",
          "A scan that is crooked, shadowed, or low resolution produces more errors. Re-scan it flat at about 300 DPI instead of trying to repair a poor result.",
          "A sideways or upside-down page reads poorly. Photos are straightened using the orientation your camera saved, but a scan without that data should be rotated before uploading.",
        ],
      },
      {
        heading: "If you get an error or an empty result",
        body: "If the tool finds no readable text it says so instead of returning an empty file. In that case, try a sharper and higher-resolution image of printed text, straighten the page, and make sure the language matches the document. PDFs longer than 50 pages are rejected; split them into parts with the Split PDF tool first.",
      },
      {
        heading: "Scan to Word vs. PDF to Word",
        body: "PDF to Word is for PDFs that already contain real text, and it tries to keep formatting. Scan to Word is for pictures of text, where there is no text to convert until OCR reads it. If you can select words in your PDF, use PDF to Word instead.",
      },
      {
        heading: "Limitations",
        body: "Accuracy depends on the scan. Handwriting, low-resolution or skewed scans, faint print, and complex layouts such as tables and columns are often recognized poorly. Expect to proofread every document. If the tool finds no readable text, it tells you instead of returning an empty file.",
      },
      {
        heading: "Privacy",
        body: "Uploads are encrypted in transit. Your original file is deleted right after it is read for conversion. The converted result is deleted by a daily cleanup, typically within about 24 hours. Files are processed on our hosting providers' servers (Vercel and Supabase), automatically, with no human review.",
      },
    ],
    relatedTools: [
      { label: "Image to Text", href: "/tools/image-to-text" },
      { label: "OCR PDF", href: "/tools/ocr-pdf" },
      { label: "PDF to Word", href: "/tools/pdf-to-word" },
      { label: "Image to PDF", href: "/tools/image-to-pdf" },
      { label: "Split PDF", href: "/tools/split-pdf" },
    ],
    faqDescription: "Common questions about converting scans to editable Word documents.",
    faq: [
      { question: "How do I convert a scanned document to Word?", answer: "Upload the scan as an image or PDF, choose the language, and download the DOCX that the tool creates. Proofread it against the original, since OCR can misread characters." },
      { question: "Can I scan a document straight into Word?", answer: "Not directly. Scan the page with a scanner or phone app first, then upload the file here. Inserting a scan into Word as a picture keeps it uneditable; converting it with OCR gives you editable text." },
      { question: "How do I convert several photos of pages into one Word file?", answer: "Combine the photos into one PDF with Image to PDF, then upload that PDF here. Each page's text follows the previous one, up to 50 pages." },
      { question: "Why is my table or column layout gone?", answer: "The tool outputs recognized text as plain paragraphs, so tables and columns are not rebuilt. Re-create them in Word from the text." },
      { question: "Will the Word file look like my scan?", answer: "No. You get the recognized text as editable paragraphs. Layout, fonts, and images are not reproduced." },
      { question: "Can it handle multi-page PDFs?", answer: "Yes, up to 50 pages. Each page's text follows the previous one." },
      { question: "Does it read handwriting?", answer: "Not reliably. It's built for printed text." },
      { question: "Should I use this or PDF to Word?", answer: "Use Scan to Word when the PDF is a scan or photo. Use PDF to Word when you can already select the text." },
      { question: "Is it free?", answer: "Yes, with no account required." },
    ],
  },

  "pdf-page-organizer": {
    title: "PDF Page Organizer: Reorder, Rotate and Delete Pages Visually",
    intro: [
      "Rearranging a PDF is easier when you can see the pages. Upload a file and every page appears as a thumbnail. Move pages into a new order, turn the ones scanned sideways, remove the ones you don't need, and save the result as a new PDF.",
      "Everything works with buttons as well as drag and drop, so you can organize pages from a keyboard or a phone.",
    ],
    howTo: [
      { step: "Upload your PDF", detail: "Thumbnails of every page appear on the page." },
      { step: "Reorder", detail: "Drag a page to a new spot, or use the arrow buttons under it." },
      { step: "Rotate or remove", detail: "Use the rotate button to turn a page clockwise. Use the remove button to drop it; you can restore it before saving." },
      { step: "Create the new PDF", detail: "If you removed pages you'll be asked to confirm. Your original file is never changed." },
    ],
    sections: [
      {
        heading: "Preview before you commit",
        body: "Thumbnails are drawn in your browser, so you see exactly which page is which before anything is uploaded for processing. Removed pages stay on screen, dimmed, and can be restored until you create the file.",
      },
      {
        heading: "Accessible controls",
        body: "Every action has a labeled button: move earlier, move later, rotate, and remove or restore. Drag and drop is an extra, not a requirement, so the tool works with a keyboard and screen reader.",
      },
      {
        heading: "Deleting pages safely",
        body: "Before a PDF is created with pages removed, the tool asks you to confirm how many pages will be dropped. The new file is separate from your original, which stays untouched on your device.",
      },
      {
        heading: "Limits",
        body: "Files up to 100 MB. Password-protected PDFs can't be opened. Very long PDFs take longer to preview because each thumbnail is rendered in turn.",
      },
    ],
    relatedTools: [
      { label: "Merge PDF", href: "/tools/merge-pdf" },
      { label: "Split PDF", href: "/tools/split-pdf" },
      { label: "Rotate PDF", href: "/tools/rotate-pdf" },
      { label: "Compress PDF to a Size Limit", href: "/tools/compress-pdf-to-size" },
    ],
    faqDescription: "Common questions about reordering, rotating, and deleting PDF pages.",
    faq: [
      { question: "How do I reorder pages in a PDF?", answer: "Upload it, then drag thumbnails into a new order or use the earlier and later buttons, and create the new PDF." },
      { question: "Can I do this without a mouse?", answer: "Yes. Every action has a button you can reach and press with the keyboard." },
      { question: "Can I undo a deleted page?", answer: "Yes. Removed pages stay visible with a Restore button until you create the file." },
      { question: "Does it change my original file?", answer: "No. You get a new PDF, and the original stays as it was." },
      { question: "Can I rotate just one page?", answer: "Yes. Rotation applies to the individual page you choose, 90 degrees per click." },
      { question: "Why won't my PDF load?", answer: "Password-protected and damaged PDFs can't be previewed. Remove the password first." },
    ],
  },

  "metadata-remover": {
    title: "Metadata Remover: Strip Hidden Data From Photos, PDFs and Office Files",
    intro: [
      "Files carry information you don't see. A phone photo can record where and when it was taken and on which device. A PDF or Word document can store the author's name, the company, and the software used. Metadata Remover clears that hidden data before you share the file.",
      "It works on photos, PDFs, and Word, Excel, and PowerPoint files, and never changes the file's format: a JPG stays a JPG, a DOCX stays a DOCX.",
    ],
    howTo: [
      { step: "Upload a file", detail: "JPG, PNG, WEBP, AVIF, TIFF, PDF, DOCX, XLSX, or PPTX." },
      { step: "Review what will be removed", detail: "The categories for each file type are listed on the page." },
      { step: "Clean the file", detail: "Metadata is removed and the result message summarizes what was cleared." },
      { step: "Download the clean copy", detail: "It keeps your file name with -clean added." },
    ],
    sections: [
      {
        heading: "What is removed",
        body: "For photos: EXIF details such as camera and phone model, capture date, and GPS location, plus XMP and IPTC data. For PDFs: title, author, subject, keywords, creator, producer, dates, and XMP metadata. For Word, Excel, and PowerPoint: author, last modified by, title, company, dates, and application details.",
      },
      {
        heading: "What stays",
        body: "The visible content is untouched: the picture, the pages, the text. Some structural data is needed to keep a file valid and remains. Content you can see or that lives inside the document body, such as comments, tracked changes, hidden sheets, or a name written on a page, is not metadata and is not removed. Review those separately.",
      },
      {
        heading: "Photos keep their orientation and colour",
        body: "Photos are rotated to their correct orientation before the orientation tag is removed, so they don't turn sideways. The colour profile is kept so colours don't shift.",
      },
      {
        heading: "Privacy",
        body: "Files are encrypted in transit. Your original file is deleted right after it is read for conversion. The converted result is deleted by a daily cleanup, typically within about 24 hours. Files are processed on our hosting providers' servers (Vercel and Supabase), automatically, with no human review.",
      },
    ],
    relatedTools: [
      { label: "Compress Image", href: "/tools/compress-image" },
      { label: "Compress PDF", href: "/tools/compress-pdf" },
      { label: "Image Converter", href: "/tools/image-converter" },
      { label: "Compress Word", href: "/tools/compress-word" },
    ],
    faqDescription: "Common questions about removing hidden metadata from files.",
    faq: [
      { question: "How do I remove GPS location from a photo?", answer: "Upload the photo. The tool strips EXIF data, including GPS coordinates, and returns a clean copy in the same format." },
      { question: "Does removing metadata reduce quality?", answer: "The image is re-encoded in its own format, so a JPG can change by a very small amount. It isn't resized or converted." },
      { question: "Can it remove the author from a Word document?", answer: "Yes. It clears the author, last modified by, company, and title stored in the document properties." },
      { question: "Is anything left behind?", answer: "Structural data needed for a valid file remains, and so does visible content and things like comments or tracked changes inside a document." },
      { question: "Which formats are supported?", answer: "JPG, PNG, WEBP, AVIF, TIFF, PDF, DOCX, XLSX, and PPTX." },
      { question: "Does it change my original file?", answer: "No. You download a separate clean copy." },
    ],
  },
};
