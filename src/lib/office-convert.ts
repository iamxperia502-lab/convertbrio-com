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
