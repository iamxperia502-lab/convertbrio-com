import type { APIRoute } from "astro";
import sharp from "sharp";
import JSZip from "jszip";
import { PDFDocument, PDFName, PDFDict } from "pdf-lib";
import { getTool } from "../../../data/tools";
import { recordConversionAttempt, finalizeConversionJob, failConversionJob } from "../../../lib/conversion-jobs";
import { contentDisposition } from "../../../lib/content-disposition";
import { resolveConversionForm } from "../../../lib/blob-input";

const MAX_BYTES = 100 * 1024 * 1024;

function baseAndExt(filename: string): [string, string] {
  const dot = filename.lastIndexOf(".");
  return dot > 0 ? [filename.slice(0, dot), filename.slice(dot)] : [filename, ""];
}

const OFFICE_TYPES: Record<string, string> = {
  ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ".pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
};

const EMPTY_CORE =
  '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
  '<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" ' +
  'xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" ' +
  'xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"/>';
const EMPTY_APP =
  '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
  '<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" ' +
  'xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"/>';

export const POST: APIRoute = async ({ request, locals }) => {
  let form: FormData;
  try {
    form = await resolveConversionForm(request);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Upload failed.";
    return new Response(JSON.stringify({ error: message }), { status: 400 });
  }
  const file = form.get("file");
  const slug = String(form.get("slug") ?? "");
  if (!(file instanceof File)) {
    return new Response(JSON.stringify({ error: "No file provided." }), { status: 400 });
  }
  if (file.size > MAX_BYTES) {
    return new Response(JSON.stringify({ error: "File exceeds the 100 MB limit." }), { status: 413 });
  }
  const tool = getTool(slug);
  if (!tool || tool.kind !== "metadata") {
    return new Response(JSON.stringify({ error: "Unknown tool." }), { status: 400 });
  }

  const jobId = await recordConversionAttempt(slug, locals.user?.id ?? null);

  try {
    const bytes = Buffer.from(await file.arrayBuffer());
    const [base, ext] = baseAndExt(file.name);
    const lowerExt = ext.toLowerCase();
    let outputBuffer: Buffer;
    let contentType: string;
    let note: string;

    if (bytes.subarray(0, 5).toString("latin1") === "%PDF-") {
      // updateMetadata:false stops pdf-lib stamping its own Producer/dates.
      const doc = await PDFDocument.load(bytes, { updateMetadata: false });
      const infoRef = doc.context.trailerInfo.Info;
      const info = infoRef ? doc.context.lookupMaybe(infoRef, PDFDict) : undefined;
      info?.keys().forEach((key) => info.delete(key));
      doc.catalog.delete(PDFName.of("Metadata"));
      outputBuffer = Buffer.from(await doc.save({ useObjectStreams: true }));
      contentType = "application/pdf";
      note = "Removed the PDF's document properties (title, author, subject, keywords, creator, producer, dates) and its XMP metadata. Page content is unchanged.";
    } else if (lowerExt in OFFICE_TYPES) {
      const zip = await JSZip.loadAsync(bytes);
      if (!zip.file("[Content_Types].xml")) throw new Error("This doesn't look like a valid Office file.");
      if (zip.file("docProps/core.xml")) zip.file("docProps/core.xml", EMPTY_CORE);
      if (zip.file("docProps/app.xml")) zip.file("docProps/app.xml", EMPTY_APP);
      outputBuffer = await zip.generateAsync({ type: "nodebuffer", compression: "DEFLATE" });
      contentType = OFFICE_TYPES[lowerExt];
      note = "Cleared the author, last-modified-by, title, company, dates, and application details stored in the file's document properties. Text, comments, and tracked changes inside the document are not touched.";
    } else {
      const meta = await sharp(bytes, { failOn: "none" }).metadata();
      const format = meta.format;
      if (!format || !["jpeg", "png", "webp", "avif", "tiff"].includes(format)) {
        throw new Error("This image format isn't supported. Use JPG, PNG, WEBP, AVIF, or TIFF.");
      }
      // .rotate() bakes the EXIF orientation into the pixels first, so the
      // picture doesn't turn sideways once that tag is gone. sharp drops
      // EXIF, XMP, and IPTC (including GPS) by default; keepIccProfile keeps
      // the colour profile so colours don't shift.
      outputBuffer = await sharp(bytes, { failOn: "none" }).rotate().keepIccProfile().toFormat(format).toBuffer();
      contentType = `image/${format}`;
      note = "Removed EXIF (camera, date, and GPS location), XMP, and IPTC data. The picture and format are unchanged; the colour profile is kept so colours don't shift.";
    }

    await finalizeConversionJob(jobId, outputBuffer, contentType);
    return new Response(new Uint8Array(outputBuffer), {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": contentDisposition(`${base}-clean${ext}`),
        "X-Result-Note": encodeURIComponent(note),
      },
    });
  } catch (err) {
    await failConversionJob(jobId);
    const message = err instanceof Error ? err.message : "Couldn't remove metadata from this file.";
    return new Response(JSON.stringify({ error: message }), { status: 422 });
  }
};
