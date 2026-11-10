---
title: "How to Turn a Scanned Document Into an Editable Word File"
description: "Scanned PDFs and photos of pages are just images. Here's how to get a scanned document into Word from a scanner or a phone photo, using free OCR."
pubDate: 2026-07-29
updatedDate: 2026-09-05
tags: ["pdf", "ocr", "how-to"]
relatedTools: ["scan-to-word", "image-to-text", "ocr-pdf", "pdf-to-word", "word-to-pdf"]
draft: false
---

Open a scanned PDF and try to select a word of text. Nothing happens: because as far as the computer is concerned, there is no text. A scanned document is a photograph of a page, not a document with characters in it. That's why you can't edit it, search it, or copy a sentence out of it directly. OCR is what bridges that gap, and it's free.

<!-- TODO: screenshot of a scanned PDF in a viewer where dragging the cursor over the text selects nothing, then the same file after OCR with text highlighted. Side by side, labelled. Save as src/assets/blog/ocr-scanned-pdf-to-word/scan-vs-ocr-selection.png (PNG, at least 1200 px wide, no personal data visible) and insert with ![A scanned PDF with no selectable text next to the same file after OCR](../../assets/blog/ocr-scanned-pdf-to-word/scan-vs-ocr-selection.png) -->

## Can I scan a document straight into Word?

Not in one step. A scanner (or a phone scanning app) produces an **image**: usually a PDF, sometimes a JPG. Word can display that image but it can't turn it into editable text on its own. You need an OCR step in between: it reads the picture of the page and reconstructs the actual letters and words. After that, getting it into Word is straightforward.

## Why a scanned PDF behaves differently from a normal one

A PDF created from a Word document, a webpage, or any digital source stores actual text, letters, positions, fonts, as data. A PDF created by scanning or photographing a page stores a picture instead. It looks identical when you view it, but under the hood it's closer to a JPG than a document.

This is why, with a scan:

- You can't select or highlight any text
- Ctrl+F / Cmd+F search finds nothing
- Copy and paste doesn't work
- Screen readers can't read it aloud
- It can't reflow to fit a different screen

## The steps

1. **Save the scan as a PDF.** A desktop scanner or a phone scanning app (Notes on iPhone, Google Drive on Android, or any dedicated scan app) will do this. Flat, straight, well-lit pages give the best results.
2. **Run OCR on it.** An [OCR tool for PDFs](/tools/ocr-pdf) processes each page and adds a real text layer underneath the original image, so the document keeps its appearance but gains searchable, selectable text.
3. **Get the text into Word.** For plain text, open the OCR'd PDF, select all, and paste into a blank Word document. To keep headings, paragraphs, and simple tables, run the OCR'd PDF through a [PDF to Word tool](/tools/pdf-to-word) instead, which rebuilds it as a `.docx`.
4. **Proofread.** OCR accuracy depends on scan quality. Skim for misread characters, especially digits (0/O, 1/l, 5/S), unusual fonts, and anything handwritten, before relying on the document.

<!-- TODO: screenshot of the OCR PDF tool with a scanned PDF chosen and the language setting visible. Save as src/assets/blog/ocr-scanned-pdf-to-word/ocr-pdf-tool.png (PNG, at least 1200 px wide, no personal data visible) and insert with ![The OCR PDF tool with a scanned document selected](../../assets/blog/ocr-scanned-pdf-to-word/ocr-pdf-tool.png) -->

## From a phone photo instead of a scanner

The process is the same, but the input quality matters more. If you're photographing a page:

- Fill the frame with the page and keep the camera parallel to it, so the page is a rectangle, not a trapezoid.
- Use bright, even light with no shadow or glare across the text.
- If you have several pages, combine the photos into one PDF first (an [Image to PDF tool](/tools/image-to-pdf) accepts multiple images), then OCR the whole thing at once.

<!-- TODO: screenshot of two phone photos of the same printed page: one flat, parallel and evenly lit, one at an angle with shadow. Label them Good and Poor. Save as src/assets/blog/ocr-scanned-pdf-to-word/good-vs-poor-photo.png (PNG, at least 1200 px wide, no personal data visible) and insert with ![A well-framed photo of a page compared with an angled, shadowed one](../../assets/blog/ocr-scanned-pdf-to-word/good-vs-poor-photo.png) -->

## Plain text or formatted document?

Decide what you actually need:

- **Just the words**, to reuse a few paragraphs, or retype something without retyping, OCR the PDF and copy the text straight out. Fast, and it works for any single-column page.
- **A document that looks like the original**, headings, paragraph breaks, simple tables preserved, send the OCR'd PDF through [PDF to Word](/tools/pdf-to-word). Complex multi-column or heavily designed layouts won't map perfectly; that's inherent to turning a fixed page back into flowing text.

## When you don't need OCR at all

If a PDF already lets you select and search text, it's text-based: running OCR on it is unnecessary and can occasionally make things worse. Try selecting a word: if it highlights normally, skip straight to [PDF to Word](/tools/pdf-to-word). OCR is only for documents that are fundamentally images: scans, photographed pages, and PDFs exported from a phone scanner app.
