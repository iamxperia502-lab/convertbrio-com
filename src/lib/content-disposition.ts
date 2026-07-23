// Header values must be Latin-1 (ByteString) — `new Response(...)` throws if
// filename contains e.g. accented letters, emoji, or the narrow no-break
// space macOS puts in screenshot filenames ("Screenshot ... at 3.04.12 PM.png").
// The filename* param carries the real UTF-8 name; filename is an ASCII fallback.
export function contentDisposition(filename: string): string {
  const asciiFallback = filename.replace(/[^\x20-\x7E]/g, "_").replace(/"/g, "'") || "download";
  return `attachment; filename="${asciiFallback}"; filename*=UTF-8''${encodeURIComponent(filename)}`;
}
