---
title: "How to Compress a PowerPoint That's Too Big to Email"
description: "Why .pptx files balloon to 40 MB and four free ways to shrink one for email: a one-click compressor, PowerPoint's own settings, or routing it through PDF."
pubDate: 2026-09-05
tags: ["powerpoint", "compression", "how-to"]
relatedTools: ["compress-powerpoint", "powerpoint-to-pdf", "compress-pdf"]
draft: false
---

You finish a deck, hit send, and the email bounces: "attachment exceeds the maximum size." A presentation that felt like a dozen slides is somehow 45 MB. Here's why, and four free ways to fix it depending on whether you still need to edit the file.

## Why PowerPoint files get so large

It's the images, almost every time. A modern phone shoots photos at 12 to 48 megapixels: several megabytes each. Drop four of those across your slides, add a couple of exported charts and a screenshot or two, and the deck is carrying 20–30 MB of image data before a single word of text.

The catch is that PowerPoint keeps each image at its **original full resolution** even though the slide only ever displays it a few inches wide. A 6000-pixel photo shown at 400 pixels is storing roughly 200 times more data than the slide can show. Compressing a presentation is really about fixing that mismatch.

## Option 1: Use ConvertBrio's Compress PowerPoint tool (keeps it editable)

The fastest route. Upload the .pptx to [Compress PowerPoint](/tools/compress-powerpoint) and it re-encodes every embedded image at an efficient quality and resolution, then hands back a smaller `.pptx` with your slides, text, animations, and notes all intact. Free, no signup, no watermark. Image-heavy decks typically drop 40–70%.

<!-- TODO: screenshot of the Compress PowerPoint tool with a .pptx selected, plus the before and after file sizes (from a file manager) in one image. Save as src/assets/blog/compress-powerpoint-for-email/compress-powerpoint-tool.png (PNG, at least 1200 px wide, no personal data visible) and insert with ![The Compress PowerPoint tool and the file sizes before and after](../../assets/blog/compress-powerpoint-for-email/compress-powerpoint-tool.png) -->

## Option 2: Compress the images inside PowerPoint

Useful if you can't upload the file, or want manual control.

1. Click any image, then open the **Picture Format** tab.
2. Click **Compress Pictures**.
3. **Untick "Apply only to this picture"** so it processes the whole deck.
4. Choose a resolution. **150 ppi ("Web")** is plenty for on-screen viewing; 220 ppi if it might be printed.
5. Tick **"Delete cropped areas of pictures"**: cropped-out parts are still stored otherwise.
6. Click OK, then **File → Save As** and check the new size.

<!-- TODO: screenshot of PowerPoint's Compress Pictures dialog with 'Apply only to this picture' unticked, 150 ppi (Web) selected and 'Delete cropped areas of pictures' ticked. Note the PowerPoint version and operating system in the caption. Save as src/assets/blog/compress-powerpoint-for-email/powerpoint-compress-pictures.png (PNG, at least 1200 px wide, no personal data visible) and insert with ![The Compress Pictures dialog in PowerPoint with the recommended settings](../../assets/blog/compress-powerpoint-for-email/powerpoint-compress-pictures.png) -->

This often halves a photo-heavy deck. If it's still large, one or two images are probably enormous: replace them with smaller versions (next option).

## Option 3: Shrink images before you place them

If you're still building the deck, resize each photo *before* inserting it. Run every image through [Compress Image](/tools/compress-image), either to a target size or a lower quality, and insert the smaller version. A photo shown at half-slide width almost never needs to be more than about 1500 pixels wide.

## Option 4: Convert to PDF and compress that (smallest file)

If the deck is finished and you're sending it out for review or to a client, this gives the smallest, most portable file:

1. Run the .pptx through [PowerPoint to PDF](/tools/powerpoint-to-pdf): one slide per page.
2. Run that PDF through [Compress PDF](/tools/compress-pdf), which re-encodes every embedded image at an efficient quality.

The result opens on any device with no PowerPoint needed and can't be accidentally edited. The trade-off: it's a PDF, so animations and transitions are gone and the recipient can't modify the slides. For most "here's the deck" emails, that's exactly what you want.

## Which one should you use?

| Situation | Best option |
| --- | --- |
| Just need it smaller, still editable | [Compress PowerPoint](/tools/compress-powerpoint) |
| Can't upload the file | Compress Pictures inside PowerPoint |
| Building the deck now | Shrink each image before inserting |
| Sending a final version, smallest file | Convert to PDF, then compress the PDF |

For most people the first row is the answer: upload, download, done: no PowerPoint settings to hunt through, and the file stays editable.
