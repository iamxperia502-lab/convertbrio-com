import { readFileSync } from "node:fs";
import { join } from "node:path";
import satori from "satori";
import sharp from "sharp";

/**
 * Build-time social share image (1200 x 630 PNG): ConvertBrio logo, the page
 * title, a short description and the domain. Rendered with Satori (HTML/CSS
 * subset to SVG) and rasterised with sharp; fonts and logo are read once.
 *
 * Paths use process.cwd() (project root) for the same bundling reason as the
 * face-detection model: import.meta.url points into dist/ after the build.
 */
export const OG_WIDTH = 1200;
export const OG_HEIGHT = 630;

let cache: { fonts: { name: string; data: Buffer; weight: 400 | 600 | 700; style: "normal" }[]; logo: string } | undefined;

function assets() {
  if (cache) return cache;
  const fontDir = join(process.cwd(), "node_modules/@fontsource/inter/files");
  cache = {
    fonts: [
      { name: "Inter", data: readFileSync(join(fontDir, "inter-latin-400-normal.woff")), weight: 400, style: "normal" },
      { name: "Inter", data: readFileSync(join(fontDir, "inter-latin-700-normal.woff")), weight: 700, style: "normal" },
    ],
    logo: `data:image/png;base64,${readFileSync(join(process.cwd(), "public/logo.png")).toString("base64")}`,
  };
  return cache;
}

/** Trim to a whole-word excerpt so long descriptions never overflow the card. */
export function excerpt(text: string, max: number): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max);
  return `${cut.slice(0, Math.max(cut.lastIndexOf(" "), max - 20)).replace(/[,.;:\s]+$/, "")}…`;
}

export async function renderOgImage({ title, description }: { title: string; description?: string }): Promise<Buffer> {
  const { fonts, logo } = assets();
  // Shrink long titles so two lines always fit.
  const titleSize = title.length > 48 ? 56 : title.length > 28 ? 68 : 80;

  const node = {
    type: "div",
    props: {
      style: {
        width: OG_WIDTH,
        height: OG_HEIGHT,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "56px 72px",
        background: "#f4f0e7",
        fontFamily: "Inter",
        color: "#191913",
        position: "relative",
        boxSizing: "border-box",
      },
      children: [
        { type: "div", props: { style: { position: "absolute", top: 0, left: 0, width: OG_WIDTH, height: 14, background: "#c7f23a" } } },
        { type: "img", props: { src: logo, width: 280, height: 64, style: { width: 280, height: 64 } } },
        {
          type: "div",
          props: {
            style: { display: "flex", flexDirection: "column", gap: 24, width: 1056 },
            children: [
              { type: "div", props: { style: { fontSize: titleSize, fontWeight: 700, lineHeight: 1.1, letterSpacing: -1.5 }, children: title } },
              ...(description
                ? [{ type: "div", props: { style: { fontSize: 30, fontWeight: 400, lineHeight: 1.35, color: "#5a574c" }, children: excerpt(description, 120) } }]
                : []),
            ],
          },
        },
        { type: "div", props: { style: { fontSize: 26, fontWeight: 700, color: "#5a574c" }, children: "convertbrio.com" } },
      ],
    },
  };

  const svg = await satori(node as never, { width: OG_WIDTH, height: OG_HEIGHT, fonts });
  return sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
}
