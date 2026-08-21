import path from "node:path";
import { XMLParser } from "fast-xml-parser";
import { renderPdfPages } from "./chromium";
import { mergePdfBuffers } from "./merge-pdf-buffers";

// 914400 EMU per inch, 96 CSS px per inch.
const EMU_PER_PX = 9525;
const DEFAULT_SLIDE_WIDTH_EMU = 12192000;
const DEFAULT_SLIDE_HEIGHT_EMU = 6858000;
const MAX_SLIDES = 60;

const IMAGE_EXT_MIME: Record<string, string> = {
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  gif: "image/gif",
  bmp: "image/bmp",
  emf: "image/emf",
  wmf: "image/wmf",
};

const xmlParser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  parseTagValue: false,
  parseAttributeValue: false,
});

function asArray<T>(value: T | T[] | undefined | null): T[] {
  if (value === undefined || value === null) return [];
  return Array.isArray(value) ? value : [value];
}

function emuToPx(emu: string | number | undefined): number {
  const value = typeof emu === "string" ? Number(emu) : emu;
  return Number.isFinite(value) ? (value as number) / EMU_PER_PX : 0;
}

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

interface RectShape {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface TextShape extends RectShape {
  kind: "text";
  html: string;
}

interface ImageShape extends RectShape {
  kind: "image";
  dataUri: string;
}

type SlideShape = TextShape | ImageShape;

function readXfrm(spPr: Record<string, unknown> | undefined): RectShape | null {
  const xfrm = spPr?.["a:xfrm"] as Record<string, unknown> | undefined;
  const off = xfrm?.["a:off"] as Record<string, string> | undefined;
  const ext = xfrm?.["a:ext"] as Record<string, string> | undefined;
  if (!off || !ext) return null;
  return {
    x: emuToPx(off["@_x"]),
    y: emuToPx(off["@_y"]),
    w: emuToPx(ext["@_cx"]),
    h: emuToPx(ext["@_cy"]),
  };
}

function parseTextShape(sp: Record<string, unknown>): TextShape | null {
  const rect = readXfrm(sp["p:spPr"] as Record<string, unknown> | undefined);
  if (!rect) return null;

  const paragraphs = asArray(sp["p:txBody"] && (sp["p:txBody"] as Record<string, unknown>)["a:p"]);
  if (paragraphs.length === 0) return null;

  const paragraphsHtml = paragraphs.map((p) => {
    const runs = asArray((p as Record<string, unknown>)["a:r"]);
    const runsHtml = runs.map((run) => {
      const r = run as Record<string, unknown>;
      const rawText = r["a:t"];
      const text = typeof rawText === "string" ? rawText : "";
      if (!text) return "";

      const rPr = (r["a:rPr"] ?? {}) as Record<string, unknown>;
      const bold = rPr["@_b"] === "1";
      const italic = rPr["@_i"] === "1";
      const sizeAttr = rPr["@_sz"] as string | undefined;
      const sizePt = sizeAttr ? Number(sizeAttr) / 100 : 18;
      const solidFill = rPr["a:solidFill"] as Record<string, unknown> | undefined;
      const srgbClr = solidFill?.["a:srgbClr"] as Record<string, string> | undefined;
      const color = srgbClr?.["@_val"];

      const style = [
        bold ? "font-weight:bold" : "",
        italic ? "font-style:italic" : "",
        Number.isFinite(sizePt) ? `font-size:${sizePt}pt` : "",
        color ? `color:#${color}` : "",
      ].filter(Boolean).join(";");

      return `<span style="${style}">${escapeHtml(text)}</span>`;
    }).join("");
    return `<p style="margin:0">${runsHtml}</p>`;
  }).join("");

  const hasVisibleText = paragraphsHtml.replace(/<[^>]+>/g, "").trim().length > 0;
  if (!hasVisibleText) return null;

  return { kind: "text", ...rect, html: paragraphsHtml };
}

async function parsePicShape(
  pic: Record<string, unknown>,
  zip: import("jszip"),
  slideRels: Map<string, string>,
  slideDir: string,
): Promise<ImageShape | null> {
  const rect = readXfrm(pic["p:spPr"] as Record<string, unknown> | undefined);
  if (!rect) return null;

  const blipFill = pic["p:blipFill"] as Record<string, unknown> | undefined;
  const blip = blipFill?.["a:blip"] as Record<string, string> | undefined;
  const embedId = blip?.["@_r:embed"];
  if (!embedId) return null;

  const target = slideRels.get(embedId);
  if (!target) return null;

  const mediaPath = path.posix.normalize(path.posix.join(slideDir, target));
  const entry = zip.file(mediaPath);
  if (!entry) return null;

  const ext = mediaPath.split(".").pop()?.toLowerCase() ?? "";
  const mime = IMAGE_EXT_MIME[ext];
  if (!mime) return null; // e.g. legacy .emf/.wmf we can't display in an <img>

  const bytes = await entry.async("nodebuffer");
  const dataUri = `data:${mime};base64,${bytes.toString("base64")}`;

  return { kind: "image", ...rect, dataUri };
}

function parseRelationships(relsXml: string | null): Map<string, string> {
  const map = new Map<string, string>();
  if (!relsXml) return map;
  const parsed = xmlParser.parse(relsXml) as Record<string, unknown>;
  const relationships = parsed["Relationships"] as Record<string, unknown> | undefined;
  for (const rel of asArray(relationships?.["Relationship"])) {
    const r = rel as Record<string, string>;
    if (r["@_Id"] && r["@_Target"]) map.set(r["@_Id"], r["@_Target"]);
  }
  return map;
}

function shapeToHtml(shape: SlideShape): string {
  const rectStyle = `position:absolute;left:${shape.x}px;top:${shape.y}px;width:${shape.w}px;height:${shape.h}px;overflow:hidden;`;
  if (shape.kind === "image") {
    return `<div style="${rectStyle}"><img src="${shape.dataUri}" style="width:100%;height:100%;object-fit:contain;" /></div>`;
  }
  return `<div style="${rectStyle}">${shape.html}</div>`;
}

export async function powerpointToPdf(pptxBuffer: Buffer): Promise<Buffer> {
  const JSZip = (await import("jszip")).default;
  let zip: import("jszip");
  try {
    zip = await JSZip.loadAsync(pptxBuffer);
  } catch {
    throw new Error("Legacy .ppt files aren't supported yet — please save as .pptx and try again.");
  }

  const presentationEntry = zip.file("ppt/presentation.xml");
  if (!presentationEntry) {
    throw new Error("This file doesn't look like a valid PowerPoint presentation.");
  }
  const presentationXml = await presentationEntry.async("string");
  const presentation = xmlParser.parse(presentationXml)["p:presentation"] as Record<string, unknown>;

  const sldSz = presentation["p:sldSz"] as Record<string, string> | undefined;
  const slideWidthEmu = sldSz?.["@_cx"] ? Number(sldSz["@_cx"]) : DEFAULT_SLIDE_WIDTH_EMU;
  const slideHeightEmu = sldSz?.["@_cy"] ? Number(sldSz["@_cy"]) : DEFAULT_SLIDE_HEIGHT_EMU;
  const slideWidthPx = emuToPx(slideWidthEmu);
  const slideHeightPx = emuToPx(slideHeightEmu);

  const sldIdLst = presentation["p:sldIdLst"] as Record<string, unknown> | undefined;
  const sldIds = asArray(sldIdLst?.["p:sldId"]).map((s) => (s as Record<string, string>)["@_r:id"]).filter(Boolean);

  if (sldIds.length === 0) {
    throw new Error("This presentation has no slides to convert.");
  }
  if (sldIds.length > MAX_SLIDES) {
    throw new Error(`This presentation has too many slides to convert (max ${MAX_SLIDES}).`);
  }

  const presRelsEntry = zip.file("ppt/_rels/presentation.xml.rels");
  const presRelsXml = presRelsEntry ? await presRelsEntry.async("string") : null;
  const presRels = parseRelationships(presRelsXml);

  const htmlPages: string[] = [];

  for (const rId of sldIds) {
    const target = presRels.get(rId);
    if (!target) continue;

    const slidePath = path.posix.normalize(path.posix.join("ppt", target));
    const slideEntry = zip.file(slidePath);
    if (!slideEntry) continue;

    const slideDir = path.posix.dirname(slidePath);
    const slideFilename = path.posix.basename(slidePath);
    const slideRelsEntry = zip.file(path.posix.join(slideDir, "_rels", `${slideFilename}.rels`));
    const slideRelsXml = slideRelsEntry ? await slideRelsEntry.async("string") : null;
    const slideRels = parseRelationships(slideRelsXml);

    const slideXml = await slideEntry.async("string");
    const slide = xmlParser.parse(slideXml)["p:sld"] as Record<string, unknown>;
    const spTree = (slide?.["p:cSld"] as Record<string, unknown> | undefined)?.["p:spTree"] as Record<string, unknown> | undefined;
    if (!spTree) continue;

    const shapes: SlideShape[] = [];

    // Images render first (background layer), text shapes render on top —
    // a reasonable default since original z-order across different element
    // types isn't preserved by the XML parser's grouped-by-tag-name output.
    for (const pic of asArray(spTree["p:pic"])) {
      const shape = await parsePicShape(pic as Record<string, unknown>, zip, slideRels, slideDir);
      if (shape) shapes.push(shape);
    }
    for (const sp of asArray(spTree["p:sp"])) {
      const shape = parseTextShape(sp as Record<string, unknown>);
      if (shape) shapes.push(shape);
    }
    // <p:graphicFrame> (charts/SmartArt/tables), <p:grpSp> (grouped shapes),
    // and <p:cxnSp> (connectors) are intentionally skipped — out of scope
    // for this lightweight renderer.

    const shapesHtml = shapes.map(shapeToHtml).join("\n");
    htmlPages.push(`<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<style>
  * { box-sizing: border-box; }
  body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; }
  .slide { position: relative; width: ${slideWidthPx}px; height: ${slideHeightPx}px; overflow: hidden; background: #ffffff; }
</style>
</head>
<body>
<div class="slide">${shapesHtml}</div>
</body>
</html>`);
  }

  if (htmlPages.length === 0) {
    throw new Error("Couldn't read any slides from this presentation.");
  }

  const slidePdfBuffers = await renderPdfPages(htmlPages, () => ({
    width: `${slideWidthPx}px`,
    height: `${slideHeightPx}px`,
    printBackground: true,
    margin: { top: 0, bottom: 0, left: 0, right: 0 },
  }));

  return mergePdfBuffers(slidePdfBuffers);
}
