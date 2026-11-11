---
title: "How to Reduce a Photo's File Size for an Online Form"
description: "Visa, exam, and job portals cap photo uploads at sizes like 100 KB. Here's how to get a photo under the limit while keeping it clear enough to be accepted."
pubDate: 2026-09-05
tags: ["images", "compression", "how-to"]
relatedTools: ["photo-signature-resizer", "compress-image", "resize-image", "passport-photo-maker"]
draft: false
---

Government portals, visa applications, exam registrations, and job sites almost always cap a photo upload at a specific size: often 100 KB, sometimes a 10 KB–240 KB window, occasionally 50 KB. A photo straight off a phone is 3–8 MB, so it gets rejected instantly. This is how to get one under the limit without making it too blurry to be accepted.

## Why your photo is so big

Two things drive image file size: **pixel dimensions** and **compression level**. A phone camera produces images that are huge on both counts: 12 megapixels or more, saved at high quality. A form that wants a 600 × 600 pixel headshot under 100 KB is asking for something roughly 100 times smaller than what your camera made.

Because there are two levers, there are two things to adjust, and doing them in the right order matters.

## The right order: resize first, then compress

1. **Resize to the dimensions the form actually needs.** If the instructions say 600 × 600 pixels, or 413 × 531, use [Resize Image](/tools/resize-image) to set exactly that. If no dimensions are given, 600–1000 pixels on the longest side is plenty for any ID photo. Cutting the pixel count is the single biggest size reduction available, and it's lossless-looking.
2. **Compress to the target file size.** Now run it through [Compress Image](/tools/compress-image) and enter the maximum size in KB. The tool searches for the highest quality that fits under your limit (a binary search between 10% and 95% quality, checking the real file size each time), and only shrinks the pixel dimensions, by 15% at a time, if even 10% quality is still too big. So you don't guess quality percentages and re-export five times.

<!-- TODO: screenshot of the Resize Image tool with 600 and 600 typed into the width and height fields and a photo selected. Save as src/assets/blog/reduce-photo-size-for-online-forms/resize-600.png (PNG, at least 1200 px wide, no personal data visible) and insert with ![The Resize Image tool set to 600 by 600 pixels](../../assets/blog/reduce-photo-size-for-online-forms/resize-600.png) -->

<!-- TODO: screenshot of the Compress Image tool with 95 typed into the target KB field and the result showing the size actually reached. Save as src/assets/blog/reduce-photo-size-for-online-forms/compress-95kb.png (PNG, at least 1200 px wide, no personal data visible) and insert with ![Compress Image with a 95 KB target and the resulting file size](../../assets/blog/reduce-photo-size-for-online-forms/compress-95kb.png) -->

Doing it in this order means the compressor isn't fighting a 12-megapixel image: it's working on one that's already the right size, so it can hit your target with far less visible quality loss.

## Common form limits

| Requirement | What usually works |
| --- | --- |
| Under 100 KB | Resize to ~600 px, then compress with a 95 KB target |
| 20 KB–50 KB | Resize to ~400–500 px, then compress to the low end of the range |
| Under 240 KB | Resize to ~800 px, compress with a 230 KB target |
| Under 1–2 MB | A single compress pass, or a light resize, is usually enough |

## If it comes out too blurry

A photo crushed hard enough to hit 20 KB can look rough. If the result is unusable:

- **Resize smaller before compressing**, not more aggressively after. A 400 px image at decent quality beats an 800 px image at terrible quality for the same file size.
- **Switch to greyscale** if the form allows it: a black-and-white photo compresses to roughly half the size of colour.
- **Check whether the form really means it.** Some portals state a limit but accept slightly over; others hard-reject. If you have room, aim a little under the cap rather than exactly at it.

<!-- TODO: screenshot of the same face crop at 100% zoom saved at about 100 KB and at about 20 KB, side by side with the sizes labelled, so readers can judge the blur trade-off. Save as src/assets/blog/reduce-photo-size-for-online-forms/blur-tradeoff.png (PNG, at least 1200 px wide, no personal data visible) and insert with ![The same photo at 100 KB and at 20 KB to show the loss of detail](../../assets/blog/reduce-photo-size-for-online-forms/blur-tradeoff.png) -->

## For passport and visa photos specifically

If you're preparing an actual passport or visa photo, white background, face centred and correctly sized, [Passport Photo Maker](/tools/passport-photo-maker) does the cropping, background, and sizing in one step. You choose between a 2 × 2 inch photo (1200 × 1200 px, the US format) and a 35 × 45 mm photo (413 × 531 px, used for UK, Schengen and many other passports), so check which size your authority asks for first. Run the result through Compress Image afterwards if the portal also has a KB cap.
