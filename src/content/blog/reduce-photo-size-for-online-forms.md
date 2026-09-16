---
title: "How to Reduce a Photo's File Size for an Online Form"
description: "Visa, passport, exam, and job portals cap uploads at an exact size like 100 KB. Here's how to get a photo under the limit while keeping it clear enough to be accepted."
pubDate: 2026-09-05
tags: ["images", "compression", "how-to"]
relatedTools: ["compress-image", "resize-image", "passport-photo-maker"]
draft: false
---

Government portals, visa applications, exam registrations, and job sites almost always cap a photo upload at a specific size: often 100 KB, sometimes a 10 KB–240 KB window, occasionally 50 KB. A photo straight off a phone is 3–8 MB, so it gets rejected instantly. This is how to get one under the limit without making it too blurry to be accepted.

## Why your photo is so big

Two things drive image file size: **pixel dimensions** and **compression level**. A phone camera produces images that are huge on both counts: 12 megapixels or more, saved at high quality. A form that wants a 600 × 600 pixel headshot under 100 KB is asking for something roughly 100 times smaller than what your camera made.

Because there are two levers, there are two things to adjust, and doing them in the right order matters.

## The right order: resize first, then compress

1. **Resize to the dimensions the form actually needs.** If the instructions say 600 × 600 pixels, or 413 × 531, use [Resize Image](/tools/resize-image) to set exactly that. If no dimensions are given, 600–1000 pixels on the longest side is plenty for any ID photo. Cutting the pixel count is the single biggest size reduction available, and it's lossless-looking.
2. **Compress to the target file size.** Now run it through [Compress Image](/tools/compress-image) and enter the maximum size in KB. The tool lowers quality in steps until the file fits under your limit, so you don't guess quality percentages and re-export five times.

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

## For passport and visa photos specifically

If you're preparing an actual passport or visa photo, white background, face centred and correctly sized, [Passport Photo Maker](/tools/passport-photo-maker) does the cropping, background, and sizing in one step and outputs a standard 2 × 2 inch photo. Run that through Compress Image afterwards if the portal also has a KB cap.
