/**
 * Build-time guard for blog images: every image in a post body must have a
 * real description. Markdown images (`![alt](src)`) and raw `<img>` tags
 * without alt text fail the build, so a missing description can't ship.
 * Images placed under src/ (e.g. ../../assets/blog/...) are optimized by
 * Astro: width/height are set and they load lazily.
 */
export function assertPostImages(id: string, body: string | undefined): void {
  if (!body) return;
  // Ignore HTML comments (the TODO screenshot markers).
  const text = body.replace(/<!--[\s\S]*?-->/g, "");
  for (const match of text.matchAll(/!\[([^\]]*)\]\(([^)]*)\)/g)) {
    if (match[1].trim().length < 5) {
      throw new Error(`Blog post "${id}": image ${match[2]} needs alt text (at least 5 characters describing what it shows).`);
    }
  }
  for (const match of text.matchAll(/<img\b[^>]*>/gi)) {
    const alt = match[0].match(/\balt\s*=\s*"([^"]*)"/i)?.[1] ?? "";
    if (alt.trim().length < 5) {
      throw new Error(`Blog post "${id}": <img> tag needs alt text (at least 5 characters): ${match[0]}`);
    }
  }
}
