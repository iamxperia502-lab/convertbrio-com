import type { Locale } from "./i18n";

// ─────────────────────────────────────────────────────────────────────────
// CONTENT ONLY SUBHAM CAN SUPPLY. Fill these in once; they apply to the About
// page in every language. Each section appears on the live page only once its
// value is set, so no placeholder text ever shows to visitors. In `astro dev`
// a banner on the English About page lists what is still missing.
// ─────────────────────────────────────────────────────────────────────────

export const founderName = "Subham Sharma";

// TODO: photo — put a square image (at least 400×400 px) in /public/about/
// and set the path here, e.g. "/about/subham-sharma.jpg".
export const founderPhoto: string | null = null;

// TODO: 2–3 sentences about your developer background, one string per
// paragraph. Do not include a city or country of residence. Add English first;
// a language without an entry simply shows no bio paragraph (so a page never
// mixes languages). Ask for the other languages to be translated once the
// English text is final, e.g. { en: ["…", "…"] }.
export const founderBio: Partial<Record<Locale, string[]>> = {};

// TODO: registration details, e.g.
// [{ label: { en: "Business name", pt: "Razão social" }, value: "…" }].
// Only list what is true and what you are happy to publish. Provide a label for
// every language you want the section shown in (English is the fallback).
export const businessDetails: { label: Partial<Record<Locale, string>>; value: string }[] = [];

// TODO: personal LinkedIn URL, e.g. "https://www.linkedin.com/in/…".
export const personalLinkedIn: string | null = null;
