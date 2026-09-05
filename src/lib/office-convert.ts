import { withPage } from "./chromium";

export function wrapHtmlDocument(bodyHtml: string, extraCss = ""): string {
  return `<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<style>
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; font-size: 12pt; line-height: 1.5; color: #171717; }
  img { max-width: 100%; }
  table { border-collapse: collapse; width: 100%; }
  td, th { border: 1px solid #ccc; padding: 4px 8px; }
  ${extraCss}
</style>
</head>
<body>${bodyHtml}</body>
</html>`;
}

export async function wordToPdf(docxBuffer: Buffer): Promise<Buffer> {
  const mammoth = await import("mammoth");
  const { value: html } = await mammoth.convertToHtml({ buffer: docxBuffer });
  const document = wrapHtmlDocument(html);

  const pdfBytes = await withPage(async (page) => {
    await page.setContent(document, { waitUntil: "networkidle0" });
    return page.pdf({
      format: "A4",
      printBackground: true,
      margin: { top: "15mm", bottom: "15mm", left: "12mm", right: "12mm" },
    });
  });

  return Buffer.from(pdfBytes);
}

export { pdfToDocx } from "./pdf-to-docx";
export { excelToPdf } from "./excel-to-pdf";
export { powerpointToPdf } from "./pptx-to-pdf";
export { mergePdfBuffers } from "./merge-pdf-buffers";
export { compressOfficeMedia } from "./compress-office";
