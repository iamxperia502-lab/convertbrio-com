import { withPage } from "./chromium";
import { wrapHtmlDocument } from "./office-convert";

const EXCEL_CSS = `
  h2 { font-size: 11pt; margin: 0 0 8px; }
  table { font-size: 9pt; }
  td, th { word-break: break-word; }
`;

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => {
    switch (char) {
      case "&": return "&amp;";
      case "<": return "&lt;";
      case ">": return "&gt;";
      case "\"": return "&quot;";
      default: return "&#39;";
    }
  });
}

export async function excelToPdf(xlsxBuffer: Buffer): Promise<Buffer> {
  const XLSX = await import("xlsx");
  const workbook = XLSX.read(xlsxBuffer, { type: "buffer", cellStyles: true });

  if (workbook.SheetNames.length === 0) {
    throw new Error("This spreadsheet has no sheets to convert.");
  }

  const sheetsHtml = workbook.SheetNames.map((name, index) => {
    const sheet = workbook.Sheets[name];
    const tableHtml = XLSX.utils.sheet_to_html(sheet, { header: "", footer: "" });
    const pageBreak = index < workbook.SheetNames.length - 1 ? "page-break-after: always;" : "";
    return `<section style="${pageBreak}"><h2>${escapeHtml(name)}</h2>${tableHtml}</section>`;
  }).join("\n");

  const document = wrapHtmlDocument(sheetsHtml, EXCEL_CSS);

  const pdfBytes = await withPage(async (page) => {
    await page.setContent(document, { waitUntil: "networkidle0" });
    return page.pdf({
      format: "A4",
      landscape: true,
      printBackground: true,
      margin: { top: "10mm", bottom: "10mm", left: "10mm", right: "10mm" },
    });
  });

  return Buffer.from(pdfBytes);
}
