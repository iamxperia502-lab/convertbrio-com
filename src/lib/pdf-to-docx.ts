import { createCanvas } from "canvas";
import { ensureDomMatrixPolyfill, standardFontDataUrl } from "./pdfjs-node-polyfills";

// A run of text that shares the same style (from one or more adjacent
// pdf.js text items with identical bold/italic/size).
interface StyledRun {
  text: string;
  bold: boolean;
  italic: boolean;
  sizePt: number;
}

// One raw pdf.js text item, kept around (in addition to the merged
// `runs` on a Line) because table-column detection needs each item's
// individual x-position, not the merged line text.
interface RawItem {
  str: string;
  x: number;
  width: number;
  bold: boolean;
  italic: boolean;
  sizePt: number;
}

interface Line {
  y: number;
  xStart: number;
  xEnd: number;
  runs: StyledRun[];
  items: RawItem[];
}

interface ImageBlock {
  y: number;
  x: number;
  width: number;
  height: number;
  imgId: string;
}

type PageBlock = { kind: "line"; line: Line } | { kind: "image"; image: ImageBlock };

// 2D affine matrices as pdf.js/canvas represent them: [a, b, c, d, e, f]
// mapping (x, y) -> (a*x + c*y + e, b*x + d*y + f).
type Matrix = [number, number, number, number, number, number];
const IDENTITY: Matrix = [1, 0, 0, 1, 0, 0];

function multiply(m1: Matrix, m2: Matrix): Matrix {
  const [a1, b1, c1, d1, e1, f1] = m1;
  const [a2, b2, c2, d2, e2, f2] = m2;
  return [a1 * a2 + c1 * b2, b1 * a2 + d1 * b2, a1 * c2 + c1 * d2, b1 * c2 + d1 * d2, a1 * e2 + c1 * f2 + e1, b1 * e2 + d1 * f2 + f1];
}

function apply(m: Matrix, x: number, y: number): [number, number] {
  return [m[0] * x + m[2] * y + m[4], m[1] * x + m[3] * y + m[5]];
}

// Font size in page units, derived the same way pdf.js's own text layer
// does: the length of the transformed unit vector along the baseline.
function sizeOfTransform(transform: number[]): number {
  return Math.hypot(transform[0], transform[1]);
}

// PDF font names conventionally encode style directly (e.g. "Arial-BoldMT",
// "ABCDEF+Calibri-Bold", "TimesNewRomanPS-ItalicMT"); subsetted fonts get a
// 6-uppercase-letter tag prefix ("ABCDEF+") that isn't part of the name.
function classifyFontName(name: string | undefined): { bold: boolean; italic: boolean } {
  const clean = (name ?? "").replace(/^[A-Z]{6}\+/, "").toLowerCase();
  return {
    bold: /bold|black|heavy|semibold|extrabold/.test(clean),
    italic: /italic|oblique/.test(clean),
  };
}

async function extractLines(page: any): Promise<Line[]> {
  const content = await page.getTextContent();
  const rows: { y: number; items: RawItem[] }[] = [];

  for (const item of content.items as any[]) {
    if (!item.str.trim()) continue;
    const sizePt = sizeOfTransform(item.transform);
    let bold = false;
    let italic = false;
    try {
      // Populated by page.getOperatorList(), which must run before this.
      // pdf.js's own .bold/.italic flags on this object are only set when it
      // falls back to substituting a system font (missing embedded font
      // data); for normally-loaded fonts (the common case) they're always
      // false regardless of the actual font. `.name` - the font's real
      // PostScript/BaseFont name - is populated reliably either way, so
      // style is derived from it directly, the same way most PDF text
      // extractors (pdftotext, PDFBox, etc.) do.
      const fontObj = page.commonObjs.get(item.fontName);
      ({ bold, italic } = classifyFontName(fontObj?.name));
    } catch {
      // Font object not available (rare); fall back to unstyled text.
    }

    const x = item.transform[4];
    const y = item.transform[5];
    let row = rows.find((r) => Math.abs(r.y - y) < 3);
    if (!row) {
      row = { y, items: [] };
      rows.push(row);
    }
    row.items.push({ str: item.str, x, width: item.width, bold, italic, sizePt });
  }

  return rows
    .sort((a, b) => b.y - a.y)
    .map((row) => {
      const items = row.items.sort((a, b) => a.x - b.x);
      const runs = itemsToRuns(items);
      return {
        y: row.y,
        xStart: items[0].x,
        xEnd: items[items.length - 1].x + items[items.length - 1].width,
        runs,
        items,
      };
    });
}

// Merges adjacent same-styled items into runs, inserting a space where the
// horizontal gap between items implies a word boundary the PDF didn't
// encode as a literal space glyph (common with justified/kerned text).
function itemsToRuns(items: RawItem[]): StyledRun[] {
  const runs: StyledRun[] = [];
  let prev: RawItem | null = null;

  for (const item of items) {
    let text = item.str;
    if (prev) {
      const gap = item.x - (prev.x + prev.width);
      if (gap > item.sizePt * 0.15 && !text.startsWith(" ") && !prev.str.endsWith(" ")) {
        text = " " + text;
      }
    }
    const last = runs[runs.length - 1];
    if (last && last.bold === item.bold && last.italic === item.italic && Math.abs(last.sizePt - item.sizePt) < 0.5) {
      last.text += text;
    } else {
      runs.push({ text, bold: item.bold, italic: item.italic, sizePt: item.sizePt });
    }
    prev = item;
  }

  return runs;
}

const IMAGE_OPS = new Set(["paintImageXObject", "paintImageXObjectRepeat", "paintJpegXObject"]);

async function extractImages(opList: any, OPS: Record<string, number>): Promise<ImageBlock[]> {
  const opNameByCode = new Map<number, string>();
  for (const [name, code] of Object.entries(OPS)) {
    if (IMAGE_OPS.has(name) || name === "save" || name === "restore" || name === "transform") {
      opNameByCode.set(code, name);
    }
  }

  const images: ImageBlock[] = [];
  const stack: Matrix[] = [];
  let ctm: Matrix = IDENTITY;

  for (let i = 0; i < opList.fnArray.length; i++) {
    const name = opNameByCode.get(opList.fnArray[i]);
    if (!name) continue;
    const args = opList.argsArray[i];

    if (name === "save") {
      stack.push(ctm);
    } else if (name === "restore") {
      ctm = stack.pop() ?? IDENTITY;
    } else if (name === "transform") {
      ctm = multiply(ctm, args as Matrix);
    } else {
      // Image ops paint into the unit square [0,1]x[0,1]; the CTM maps
      // that into page space.
      const corners = [apply(ctm, 0, 0), apply(ctm, 1, 0), apply(ctm, 0, 1), apply(ctm, 1, 1)];
      const xs = corners.map((c) => c[0]);
      const ys = corners.map((c) => c[1]);
      images.push({
        x: Math.min(...xs),
        y: Math.max(...ys),
        width: Math.max(...xs) - Math.min(...xs),
        height: Math.max(...ys) - Math.min(...ys),
        imgId: args[0],
      });
    }
  }

  return images;
}

async function imageToPng(page: any, imgId: string): Promise<Buffer | null> {
  try {
    const img: any = await new Promise((resolve, reject) => {
      try {
        page.objs.get(imgId, resolve);
      } catch (e) {
        reject(e);
      }
    });
    if (!img?.width || !img?.height || !img?.data) return null;

    const canvas = createCanvas(img.width, img.height);
    const ctx = canvas.getContext("2d");
    const imageData = ctx.createImageData(img.width, img.height);

    // ImageKind: 1 = grayscale 1bpp (unsupported here), 2 = RGB 24bpp, 3 = RGBA 32bpp.
    if (img.kind === 3) {
      imageData.data.set(img.data);
    } else if (img.kind === 2) {
      for (let i = 0, j = 0; i < img.data.length; i += 3, j += 4) {
        imageData.data[j] = img.data[i];
        imageData.data[j + 1] = img.data[i + 1];
        imageData.data[j + 2] = img.data[i + 2];
        imageData.data[j + 3] = 255;
      }
    } else {
      return null;
    }

    ctx.putImageData(imageData, 0, 0);
    return canvas.toBuffer("image/png");
  } catch {
    return null;
  }
}

// Groups a run of consecutive multi-item lines into table columns if their
// item x-positions consistently cluster into >= 2 columns. Heuristic and
// best-effort: real multi-column body text rarely lines up this precisely
// across several rows, but this can still misfire on unusual layouts.
function detectTable(lines: Line[], bodySizePt: number): string[][] | null {
  if (lines.length < 2) return null;

  const tolerance = Math.max(bodySizePt * 1.5, 12);
  const xs = lines
    .flatMap((l) => l.items.map((it) => it.x))
    .sort((a, b) => a - b);

  const columns: number[] = [];
  for (const x of xs) {
    if (columns.length === 0 || x - columns[columns.length - 1] > tolerance) {
      columns.push(x);
    }
  }
  if (columns.length < 2 || columns.length > 8) return null;

  const rows: string[][] = lines.map((line) => {
    const cells = columns.map(() => [] as string[]);
    for (const item of line.items) {
      let col = 0;
      let best = Infinity;
      for (let c = 0; c < columns.length; c++) {
        const d = Math.abs(item.x - columns[c]);
        if (d < best) {
          best = d;
          col = c;
        }
      }
      cells[col].push(item.str);
    }
    return cells.map((parts) => parts.join(" "));
  });

  const multiColRows = rows.filter((r) => r.filter((c) => c.trim()).length >= 2).length;
  if (multiColRows < 2) return null;

  return rows;
}

interface Paragraph {
  runs: StyledRun[];
  headingLevel: 1 | 2 | 3 | null;
  centered: boolean;
}

// Reconstructs paragraphs from a page's lines: wrapped lines (small vertical
// gap, matching font size) are merged into one continuous paragraph instead
// of becoming separate one-line paragraphs, which is what made prior output
// look flattened. A short line ending well before the page's common right
// margin is treated as a paragraph's last line even if the gap to the next
// line is small.
function buildParagraphs(lines: Line[], bodySizePt: number, pageWidth: number): Paragraph[] {
  if (lines.length === 0) return [];

  const rightMargin = Math.max(...lines.map((l) => l.xEnd));
  const leftMargin = Math.min(...lines.map((l) => l.xStart));
  const paragraphs: Paragraph[] = [];
  let current: Line[] = [];

  const flush = () => {
    if (current.length === 0) return;
    const allRuns = current.flatMap((l, i) => {
      if (i === 0) return l.runs;
      const prevLine = current[i - 1];
      const prevText = prevLine.runs[prevLine.runs.length - 1]?.text ?? "";
      const hyphenBreak = /[a-zA-Z]-$/.test(prevText);
      if (hyphenBreak) {
        prevLine.runs[prevLine.runs.length - 1].text = prevText.slice(0, -1);
        return l.runs;
      }
      const joined = [...l.runs];
      joined[0] = { ...joined[0], text: " " + joined[0].text };
      return joined;
    });

    const dominantSize = current[0].runs.reduce((max, r) => Math.max(max, r.sizePt), 0) || bodySizePt;
    const ratio = dominantSize / bodySizePt;
    const headingLevel = ratio >= 1.8 ? 1 : ratio >= 1.4 ? 2 : ratio >= 1.15 ? 3 : null;

    const single = current.length === 1;
    const center = (current[0].xStart + current[0].xEnd) / 2;
    const pageCenter = pageWidth / 2;
    const centered = single && Math.abs(center - pageCenter) < pageWidth * 0.08 && current[0].xStart > leftMargin + 10;

    paragraphs.push({ runs: allRuns, headingLevel, centered });
    current = [];
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (current.length === 0) {
      current.push(line);
      continue;
    }
    const prev = current[current.length - 1];
    const prevSize = prev.runs.reduce((max, r) => Math.max(max, r.sizePt), 0);
    const curSize = line.runs.reduce((max, r) => Math.max(max, r.sizePt), 0);
    const gap = prev.y - line.y;
    const typicalLineHeight = Math.max(prevSize, curSize) * 1.5;
    const sameSize = Math.abs(prevSize - curSize) < Math.max(prevSize, curSize) * 0.1;
    const prevLineWasShort = prev.xEnd < rightMargin - Math.max(prevSize, curSize) * 3;

    if (gap <= typicalLineHeight && sameSize && !prevLineWasShort) {
      current.push(line);
    } else {
      flush();
      current.push(line);
    }
  }
  flush();

  return paragraphs;
}

export async function pdfToDocx(pdfBytes: Uint8Array): Promise<Buffer> {
  // Text-only extraction never renders a canvas, but pdfjs-dist still runs
  // `new DOMMatrix()` at import time; see ensureDomMatrixPolyfill.
  await ensureDomMatrixPolyfill();
  const { getDocument, OPS } = await import("pdfjs-dist/legacy/build/pdf.mjs");
  const { Document, Packer, Paragraph: DocxParagraph, TextRun, HeadingLevel, AlignmentType, Table, TableRow, TableCell, ImageRun, PageBreak, WidthType } =
    await import("docx");

  const pdf = await getDocument({ data: pdfBytes, standardFontDataUrl }).promise;

  const pages: { lines: Line[]; images: ImageBlock[]; width: number }[] = [];
  const allSizes: number[] = [];

  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    // Registers fonts in commonObjs and gives us the image operator stream;
    // must run before getTextContent's fontName lookups resolve to anything.
    const opList = await page.getOperatorList();
    const lines = await extractLines(page);
    const images = await extractImages(opList, OPS as Record<string, number>);
    const [x0, , x1] = page.view;
    pages.push({ lines, images, width: x1 - x0 });
    for (const line of lines) {
      for (const item of line.items) allSizes.push(item.sizePt);
    }
  }

  allSizes.sort((a, b) => a - b);
  const bodySizePt = allSizes.length ? allSizes[Math.floor(allSizes.length / 2)] : 12;

  const children: InstanceType<typeof DocxParagraph | typeof Table>[] = [];

  for (let pageIndex = 0; pageIndex < pages.length; pageIndex++) {
    const { lines, images, width } = pages[pageIndex];

    const blocks: PageBlock[] = [
      ...lines.map((line): PageBlock => ({ kind: "line", line })),
      ...images.map((image): PageBlock => ({ kind: "image", image })),
    ].sort((a, b) => {
      const ay = a.kind === "line" ? a.line.y : a.image.y;
      const by = b.kind === "line" ? b.line.y : b.image.y;
      return by - ay;
    });

    // Walk blocks, buffering consecutive multi-item lines as table
    // candidates and everything else as plain paragraph lines.
    let tableCandidate: Line[] = [];
    let paragraphLines: Line[] = [];

    const flushParagraphs = () => {
      for (const p of buildParagraphs(paragraphLines, bodySizePt, width)) {
        const runs = p.runs.map(
          (r) =>
            new TextRun({
              text: r.text,
              bold: r.bold || (p.headingLevel !== null && p.headingLevel <= 2),
              italics: r.italic,
              size: Math.round(r.sizePt * 2),
            }),
        );
        children.push(
          new DocxParagraph({
            children: runs,
            heading:
              p.headingLevel === 1
                ? HeadingLevel.HEADING_1
                : p.headingLevel === 2
                  ? HeadingLevel.HEADING_2
                  : p.headingLevel === 3
                    ? HeadingLevel.HEADING_3
                    : undefined,
            alignment: p.centered ? AlignmentType.CENTER : undefined,
          }),
        );
      }
      paragraphLines = [];
    };

    const flushTableCandidate = () => {
      const table = detectTable(tableCandidate, bodySizePt);
      if (table) {
        children.push(
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: table.map(
              (row, rowIndex) =>
                new TableRow({
                  children: row.map(
                    (cellText) =>
                      new TableCell({
                        children: [
                          new DocxParagraph({
                            children: [new TextRun({ text: cellText, bold: rowIndex === 0 })],
                          }),
                        ],
                      }),
                  ),
                }),
            ),
          }),
        );
      } else {
        paragraphLines.push(...tableCandidate);
      }
      tableCandidate = [];
    };

    for (const block of blocks) {
      if (block.kind === "line" && block.line.items.length >= 2) {
        // Entering table mode: flush any plain paragraph lines buffered
        // so far first, so table content lands at the right point in the
        // document instead of jumping ahead of earlier page content.
        if (tableCandidate.length === 0) flushParagraphs();
        tableCandidate.push(block.line);
        continue;
      }
      if (tableCandidate.length > 0) flushTableCandidate();

      if (block.kind === "line") {
        paragraphLines.push(block.line);
      } else {
        flushParagraphs();
        const png = await imageToPng(await pdf.getPage(pageIndex + 1), block.image.imgId);
        if (png) {
          const POINTS_TO_PX = 96 / 72;
          children.push(
            new DocxParagraph({
              children: [
                new ImageRun({
                  type: "png",
                  data: png,
                  transformation: {
                    width: Math.max(1, Math.round(block.image.width * POINTS_TO_PX)),
                    height: Math.max(1, Math.round(block.image.height * POINTS_TO_PX)),
                  },
                }),
              ],
            }),
          );
        }
      }
    }
    if (tableCandidate.length > 0) flushTableCandidate();
    flushParagraphs();

    if (children.length === 0) children.push(new DocxParagraph({ text: "" }));
    if (pageIndex < pages.length - 1) {
      children.push(new DocxParagraph({ children: [new PageBreak()] }));
    }
  }

  const doc = new Document({ sections: [{ children }] });
  return Buffer.from(await Packer.toBuffer(doc));
}
