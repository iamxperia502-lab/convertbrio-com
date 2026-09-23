// Search results show roughly the first 600 px of a title (Arial, ~20 px).
// Characters vary a lot in width ("W" vs "i"), so a plain character count is a
// poor proxy. These are Helvetica/Arial advance widths per 1000 em for the
// printable ASCII range; anything else falls back to an average glyph.
const ASCII_WIDTHS = [
  278, 278, 355, 556, 556, 889, 667, 191, 333, 333, 389, 584, 278, 333, 278, 278, // space ! " # $ % & ' ( ) * + , - . /
  556, 556, 556, 556, 556, 556, 556, 556, 556, 556, // 0-9
  278, 278, 584, 584, 584, 556, 1015, // : ; < = > ? @
  667, 667, 722, 722, 667, 611, 778, 722, 278, 500, 667, 556, 833, 722, 778, 667, 778, 722, 667, 611, 722, 667, 944, 667, 667, 611, // A-Z
  278, 278, 278, 469, 556, 333, // [ \ ] ^ _ `
  556, 556, 500, 556, 556, 278, 556, 556, 222, 222, 500, 222, 833, 556, 556, 556, 556, 333, 500, 278, 556, 500, 722, 500, 500, 500, // a-z
  334, 260, 334, 584, // { | } ~
];

const TITLE_FONT_PX = 20;
export const TITLE_MAX_PX = 600;

export function titlePixelWidth(text: string): number {
  let units = 0;
  for (const ch of text) {
    const code = ch.codePointAt(0)!;
    units += code >= 32 && code <= 126 ? ASCII_WIDTHS[code - 32] : 560;
  }
  return (units / 1000) * TITLE_FONT_PX;
}

/**
 * Appends the brand to a title only when the result still fits in a search
 * result, so long titles keep their core query instead of being truncated
 * mid-phrase.
 */
export function withBrand(title: string, brand: string, separator = "·"): string {
  const branded = `${title} ${separator} ${brand}`;
  return titlePixelWidth(branded) <= TITLE_MAX_PX ? branded : title;
}
