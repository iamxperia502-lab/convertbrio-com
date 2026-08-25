import { get, del } from "@vercel/blob";
import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";

// Vercel Functions have a hard, non-configurable 4.5 MB request body limit
// (platform-level, not something MAX_BYTES in the convert routes can work
// around). Uploads instead go straight from the browser to a private Vercel
// Blob store (see uploadFilesToBlob in upload-client.ts), and the browser
// then POSTs a small JSON body of blob references here instead of raw file
// bytes. This module is the server-side other half of that flow.

const DEFAULT_MAX_BYTES = 100 * 1024 * 1024;

// Astro's dev server loads .env files into import.meta.env but doesn't
// mirror them onto raw process.env, which is what @vercel/blob's SDK reads
// by default - so BLOB_READ_WRITE_TOKEN has to be passed explicitly rather
// than relying on the SDK's own process.env.BLOB_READ_WRITE_TOKEN fallback.
const blobToken = import.meta.env.BLOB_READ_WRITE_TOKEN;

interface ConversionFileRef {
  pathname: string;
  name: string;
  type: string;
}

interface ConversionRequestBody {
  fields: Record<string, string>;
  files: ConversionFileRef[];
}

// POST handler for the client's upload() calls (see uploadFilesToBlob in
// upload-client.ts) - generates a short-lived, size-capped token so the
// browser can upload directly to Blob storage without ever routing the file
// through one of our Functions.
export async function issueBlobUploadToken(request: Request): Promise<Response> {
  const body = (await request.json()) as HandleUploadBody;

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      token: blobToken,
      onBeforeGenerateToken: async (_pathname, clientPayload) => {
        let maxBytes = DEFAULT_MAX_BYTES;
        if (clientPayload) {
          try {
            const parsed = JSON.parse(clientPayload) as { maxBytes?: number };
            if (typeof parsed.maxBytes === "number" && parsed.maxBytes > 0) {
              maxBytes = parsed.maxBytes;
            }
          } catch {
            // Malformed payload - fall back to the default cap.
          }
        }
        return {
          access: "private",
          addRandomSuffix: true,
          maximumSizeInBytes: maxBytes,
        };
      },
      onUploadCompleted: async () => {
        // No server-side bookkeeping needed: the browser gets the blob
        // pathname directly from upload()'s resolved promise and calls the
        // conversion endpoint itself right after. (This callback also never
        // fires on localhost, so nothing here can depend on it.)
      },
    });

    return new Response(JSON.stringify(jsonResponse), { status: 200 });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Upload token request failed.";
    return new Response(JSON.stringify({ error: message }), { status: 400 });
  }
}

// Reconstructs a real FormData (with real File entries) from the JSON body a
// conversion request now arrives as. This is the one seam every convert route
// swaps in place of `await request.formData()`, so every existing
// form.get(...)/form.getAll("file") call downstream keeps working unmodified.
export async function resolveConversionForm(request: Request): Promise<FormData> {
  const body = (await request.json()) as ConversionRequestBody;
  const form = new FormData();

  for (const [key, value] of Object.entries(body.fields ?? {})) {
    form.append(key, value);
  }

  // Fetched (and deleted) in parallel, but appended in original order -
  // multi-file tools like merge-pdf treat upload order as page order.
  const files = await Promise.all(
    (body.files ?? []).map(async (fileRef) => {
      const result = await get(fileRef.pathname, { access: "private", token: blobToken });
      if (!result || result.statusCode !== 200 || !result.stream) {
        throw new Error("Upload expired — please try again.");
      }
      const bytes = await new Response(result.stream).arrayBuffer();

      // Best-effort: the blob has served its purpose the moment we have its
      // bytes in memory, so it's deleted immediately rather than waiting for
      // the daily cleanup cron - never lets a cleanup failure block the
      // actual conversion.
      try {
        await del(fileRef.pathname, { token: blobToken });
      } catch (err) {
        console.warn("resolveConversionForm: failed to delete blob", fileRef.pathname, err);
      }

      return new File([bytes], fileRef.name, { type: fileRef.type });
    }),
  );

  for (const file of files) form.append("file", file);

  return form;
}
