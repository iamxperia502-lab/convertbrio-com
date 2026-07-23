import { withPage } from "./chromium";

function wrapHtmlDocument(bodyHtml: string): string {
  return `<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<style>
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; font-size: 12pt; line-height: 1.5; color: #171717; }
  img { max-width: 100%; }
  table { border-collapse: collapse; width: 100%; }
  td, th { border: 1px solid #ccc; padding: 4px 8px; }
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

interface TextItem {
  str: string;
  transform: number[];
}

// Groups pdf.js text items into lines by their baseline y-position — pdf.js
// gives per-glyph-run positions, not paragraphs, so nearby y-values (within
// half a line height) are treated as the same line.
function groupItemsIntoLines(items: TextItem[]): string[] {
  const rows: { y: number; parts: TextItem[] }[] = [];

  for (const item of items) {
    if (!item.str.trim()) continue;
    const y = item.transform[5];
    let row = rows.find((r) => Math.abs(r.y - y) < 3);
    if (!row) {
      row = { y, parts: [] };
      rows.push(row);
    }
    row.parts.push(item);
  }

  return rows
    .sort((a, b) => b.y - a.y)
    .map((row) => row.parts.sort((a, b) => a.transform[4] - b.transform[4]).map((p) => p.str).join(" "));
}

export async function pdfToDocx(pdfBytes: Uint8Array): Promise<Buffer> {
  const { getDocument } = await import("pdfjs-dist/legacy/build/pdf.mjs");
  const { Document, Packer, Paragraph, PageBreak } = await import("docx");

  const pdf = await getDocument({ data: pdfBytes }).promise;
  const children: InstanceType<typeof Paragraph>[] = [];

  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const content = await page.getTextContent();
    const lines = groupItemsIntoLines(content.items as TextItem[]);

    for (const line of lines) {
      children.push(new Paragraph({ text: line }));
    }
    if (lines.length === 0) {
      children.push(new Paragraph({ text: "" }));
    }
    if (pageNum < pdf.numPages) {
      children.push(new Paragraph({ children: [new PageBreak()] }));
    }
  }

  const doc = new Document({ sections: [{ children }] });
  return Buffer.from(await Packer.toBuffer(doc));
}
