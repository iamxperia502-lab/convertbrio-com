import type { APIRoute } from "astro";
import { issueBlobUploadToken } from "../../lib/blob-input";

// Called by the browser's upload() (see uploadFilesToBlob in
// lib/upload-client.ts) before it uploads a file straight to Vercel Blob.
export const POST: APIRoute = async ({ request }) => issueBlobUploadToken(request);
