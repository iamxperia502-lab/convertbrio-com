import type { FaqItem } from "./faq";

export interface ToolContentSection {
  heading: string;
  body: string;
}

export interface RelatedTool {
  label: string;
  href: string;
}

export interface ToolContentEntry {
  title: string;
  intro: string;
  sections: ToolContentSection[];
  relatedTools?: RelatedTool[];
  faqDescription: string;
  faq: FaqItem[];
}

export const toolContent: Record<string, ToolContentEntry> = {
  "image-converter": {
    title: "Image Converter: Convert Between Any Image Format Online",
    intro:
      "ConvertBrio's image converter moves a photo, graphic, or screenshot between JPG, PNG, WEBP, AVIF, HEIC, and GIF in a single step, right inside your browser. There's nothing to install and no account to create — upload a file, choose the format you need, and download the result in seconds. It's the tool to reach for whenever an image won't open where you need it to, or whenever a project calls for a different format than the one you were handed.",
    sections: [
      {
        heading: "Supported Formats",
        body: "ConvertBrio reads JPG, PNG, WEBP, AVIF, HEIC, and GIF files and can export to any of the actively supported output formats. That covers the everyday formats used in photography and web design (JPG, PNG, WEBP), the newer high-efficiency format used by modern cameras and browsers (AVIF), and Apple's default photo format (HEIC), so you're not stuck if a file arrives in a format your software doesn't recognize.",
      },
      {
        heading: "How the Conversion Works",
        body: "Upload your image, pick an output format from the dropdown, and click Convert. ConvertBrio decodes the original file and re-encodes it in the target format, preserving resolution and color as closely as the destination format allows. Most conversions finish in a few seconds, and the result downloads automatically once it's ready — there's no waiting on an email link or a processing queue.",
      },
      {
        heading: "Choosing the Right Output Format",
        body: "Pick JPG for photos headed to the web or email, where small file size matters more than perfect transparency. Pick PNG when you need a transparent background or lossless detail, such as for logos, icons, and screenshots. WEBP and AVIF give the best compression-to-quality ratio for modern websites, while GIF remains the standard for simple animations. If you're not sure, JPG and PNG cover the vast majority of everyday needs.",
      },
      {
        heading: "Privacy and File Limits",
        body: "Every upload is encrypted in transit and processed automatically — no one reviews your files. Both the original and the converted image are deleted from ConvertBrio's servers within 24 hours. Free conversions support files up to 25 MB; paid plans raise that limit and add batch conversion for people who need to process many images at once.",
      },
    ],
    relatedTools: [
      { label: "HEIC to JPG", href: "/tools/heic-to-jpg" },
      { label: "Compress Image", href: "/tools/compress-image" },
      { label: "Resize Image", href: "/tools/resize-image" },
    ],
    faqDescription: "Common questions about ConvertBrio's general-purpose image converter.",
    faq: [
      {
        question: "Which image formats can I convert between?",
        answer:
          "ConvertBrio's image converter reads JPG, PNG, WEBP, AVIF, HEIC, and GIF, and can export to JPG, PNG, WEBP, AVIF, or GIF. That covers essentially every format you'll encounter from cameras, phones, screenshots, and design tools.",
      },
      {
        question: "Will converting reduce my image quality?",
        answer:
          "Converting between lossless formats like PNG keeps every pixel intact. Converting to a lossy format like JPG or WEBP applies compression, but at default settings the difference is rarely visible to the eye. Use the dedicated Compress Image tool if you want direct control over the quality trade-off.",
      },
      {
        question: "Is there a file size limit?",
        answer:
          "Free conversions support images up to 25 MB. If you regularly work with larger files or need to convert many images at once, ConvertBrio's paid plans raise the size limit and add batch processing.",
      },
    ],
  },

  "heic-to-jpg": {
    title: "HEIC to JPG Converter: Open iPhone Photos Anywhere",
    intro:
      "iPhones save photos as HEIC by default — a format that compresses beautifully but refuses to open in a lot of everyday software, from older Windows PCs to certain upload forms and photo editors. ConvertBrio's HEIC to JPG converter fixes that instantly: upload the photo, and it comes back as a standard JPG that opens in any browser, app, or device without a plugin or codec pack.",
    sections: [
      {
        heading: "Why HEIC Files Cause Problems",
        body: "HEIC (High Efficiency Image Container) stores photos at roughly half the file size of an equivalent JPG, which is why Apple made it the default in iOS. The trade-off is compatibility: many websites, older operating systems, and third-party apps either can't open HEIC at all or handle it inconsistently. If you've ever tried to upload an iPhone photo somewhere and gotten a rejected or blank result, HEIC was likely the cause.",
      },
      {
        heading: "Converting HEIC to JPG",
        body: "Drop your HEIC file into the upload box — no need to change your phone's camera settings first. ConvertBrio decodes the HEIC image and re-encodes it as a JPG at full resolution. The converted file downloads automatically and works immediately in every browser, photo viewer, email client, and upload form you're likely to encounter.",
      },
      {
        heading: "Converting Multiple iPhone Photos",
        body: "You can convert one HEIC file at a time for free. If you regularly export batches of iPhone photos and need to convert many at once, ConvertBrio's paid plans support batch processing so you're not uploading files one by one.",
      },
    ],
    relatedTools: [
      { label: "Image Converter", href: "/tools/image-converter" },
      { label: "JPG to PDF", href: "/tools/jpg-to-pdf" },
      { label: "Compress Image", href: "/tools/compress-image" },
    ],
    faqDescription: "Common questions about converting iPhone HEIC photos to JPG.",
    faq: [
      {
        question: "Why won't my iPhone photo open on my computer?",
        answer:
          "It's probably saved as HEIC, Apple's default photo format since iOS 11. Many Windows PCs, older apps, and websites don't support HEIC. Converting it to JPG with ConvertBrio makes it openable everywhere.",
      },
      {
        question: "Does converting HEIC to JPG lose quality?",
        answer:
          "There's a small amount of compression when re-encoding to JPG, since HEIC and JPG use different compression methods, but at ConvertBrio's default quality it's not visible to the eye in normal viewing.",
      },
      {
        question: "Can I convert HEIC to PNG instead of JPG?",
        answer:
          "Yes — use the general Image Converter tool and choose PNG as the output format if you need a lossless file or transparency, which HEIC to JPG doesn't preserve.",
      },
    ],
  },

  "jpg-to-png": {
    title: "JPG to PNG Converter: Add Transparency and Lossless Detail",
    intro:
      "JPG is great for small, shareable photos, but it can't hold transparency and loses a little quality every time it's re-saved. ConvertBrio's JPG to PNG converter turns your JPG into a lossless PNG in seconds, which is the format you want before editing an image further, placing it on a colored background, or using it as a logo or icon.",
    sections: [
      {
        heading: "When to Convert JPG to PNG",
        body: "Convert to PNG whenever you need an alpha (transparency) channel — for example, cutting a logo out of its background — or whenever you're about to edit an image repeatedly and want to avoid the generation loss that comes from re-saving JPGs. PNG is also the safer choice for screenshots, diagrams, and anything with sharp text or hard edges, since JPG's compression can introduce blur and artifacts around fine detail.",
      },
      {
        heading: "How the Conversion Works",
        body: "Upload your JPG and ConvertBrio decodes it and re-encodes it as a PNG, preserving every pixel exactly. Because JPG doesn't store transparency to begin with, the output PNG will have an opaque background unless you remove it separately — the conversion itself is about format and quality, not automatic background removal.",
      },
      {
        heading: "File Size to Expect",
        body: "PNG files are typically larger than the JPG they came from, since PNG doesn't discard data the way JPG's lossy compression does. For photos with a lot of detail or texture, expect the PNG to be several times the size of the original JPG — that's the normal trade-off for lossless quality.",
      },
    ],
    relatedTools: [
      { label: "PNG to JPG", href: "/tools/png-to-jpg" },
      { label: "Image Converter", href: "/tools/image-converter" },
      { label: "Crop Image", href: "/tools/crop-image" },
    ],
    faqDescription: "Common questions about converting JPG images to PNG.",
    faq: [
      {
        question: "Does JPG to PNG add transparency automatically?",
        answer:
          "No. JPG files don't store transparency, so converting to PNG produces an opaque image with the same appearance. PNG simply gives you a lossless format to build on, such as before editing or adding transparency in an image editor.",
      },
      {
        question: "Why is my PNG so much bigger than the original JPG?",
        answer:
          "PNG uses lossless compression, which preserves every pixel instead of discarding detail the way JPG does. That accuracy comes at the cost of a larger file — it's expected, not a sign of a problem.",
      },
      {
        question: "Is PNG better than JPG?",
        answer:
          "Neither is universally better — PNG is best for graphics, logos, and anything needing transparency or lossless detail, while JPG is better for photos where small file size matters more than pixel-perfect accuracy.",
      },
    ],
  },

  "jpg-to-webp": {
    title: "JPG to WEBP Converter: Smaller Files for Faster Websites",
    intro:
      "WEBP was built by Google specifically to load web pages faster, typically producing files 25-35% smaller than an equivalent JPG at the same visual quality. ConvertBrio's JPG to WEBP converter re-encodes your photo in seconds, making it a quick win for anyone optimizing images for a website, email newsletter, or app.",
    sections: [
      {
        heading: "Why Convert to WEBP",
        body: "If page load speed matters — for SEO, mobile users, or just a snappier site — WEBP is one of the easiest wins available. It supports the same quality range as JPG while producing noticeably smaller files, and modern browsers (Chrome, Firefox, Safari, Edge) all render it natively, so there's no compatibility trade-off for most audiences today.",
      },
      {
        heading: "How the Conversion Works",
        body: "Upload your JPG and ConvertBrio converts it to WEBP automatically, keeping the same resolution and applying WEBP's compression algorithm in place of JPG's. The download is ready within seconds and can be dropped directly into a website's image folder or content management system.",
      },
      {
        heading: "When JPG Might Still Be the Better Choice",
        body: "If your image needs to work in software or contexts that don't support WEBP — some older email clients, certain design tools, or print workflows — keep a JPG version on hand as well. For general web use, though, WEBP is the more efficient default.",
      },
    ],
    relatedTools: [
      { label: "PNG to WEBP", href: "/tools/png-to-webp" },
      { label: "WEBP to JPG", href: "/tools/webp-to-jpg" },
      { label: "Compress Image", href: "/tools/compress-image" },
    ],
    faqDescription: "Common questions about converting JPG images to WEBP.",
    faq: [
      {
        question: "How much smaller is WEBP than JPG?",
        answer:
          "WEBP files are typically 25-35% smaller than a visually equivalent JPG, which is why it's become a standard choice for website images where load speed matters.",
      },
      {
        question: "Do all browsers support WEBP?",
        answer:
          "Yes — every major modern browser, including Chrome, Firefox, Safari, and Edge, renders WEBP natively. It's safe to use for general web publishing today.",
      },
      {
        question: "Will my image look different after converting to WEBP?",
        answer:
          "At ConvertBrio's default settings, the visual difference is negligible for most photos. WEBP's compression is more efficient than JPG's, so it can match the same quality at a smaller file size.",
      },
    ],
  },

  "jpg-to-avif": {
    title: "JPG to AVIF Converter: Next-Generation Image Compression",
    intro:
      "AVIF is the most efficient widely-supported image format available today, often shrinking a JPG by 50% or more at the same visual quality. ConvertBrio's JPG to AVIF converter handles the encoding for you, giving website owners and developers an easy way to adopt the format without command-line tools or build pipelines.",
    sections: [
      {
        heading: "What Makes AVIF Different",
        body: "AVIF is based on the AV1 video codec's image compression technology, which is significantly more advanced than the compression JPG uses. In practical terms, that means AVIF files can be dramatically smaller than JPG while looking just as good, which is valuable for any site trying to cut page weight and improve load times.",
      },
      {
        heading: "How to Convert JPG to AVIF",
        body: "Upload your JPG file and ConvertBrio outputs an AVIF version at the same resolution. The conversion runs entirely in the browser, with no software to install, and the result downloads automatically once processing finishes.",
      },
      {
        heading: "Browser and Software Support",
        body: "All major modern browsers support AVIF for display, but some older software, image editors, and social platforms don't yet accept it for upload. If you're publishing to your own website, AVIF is generally safe; if you're uploading somewhere with unknown compatibility, keep a JPG or WEBP fallback on hand.",
      },
    ],
    relatedTools: [
      { label: "PNG to AVIF", href: "/tools/png-to-avif" },
      { label: "AVIF to JPG", href: "/tools/avif-to-jpg" },
      { label: "Image Converter", href: "/tools/image-converter" },
    ],
    faqDescription: "Common questions about converting JPG images to AVIF.",
    faq: [
      {
        question: "Is AVIF better than WEBP?",
        answer:
          "AVIF generally compresses more efficiently than WEBP, often producing smaller files at the same quality. WEBP has slightly broader legacy support, but for modern browsers AVIF is usually the better choice for file size.",
      },
      {
        question: "Can every website use AVIF images?",
        answer:
          "Every major modern browser supports displaying AVIF, but some content management systems, ad networks, and older tools don't yet accept AVIF uploads. Check your platform's requirements if you run into upload issues.",
      },
      {
        question: "How much smaller will my file be?",
        answer:
          "Results vary by image, but AVIF commonly cuts file size by 50% or more compared to a same-quality JPG, making it one of the most effective formats for reducing page weight.",
      },
    ],
  },

  "png-to-jpg": {
    title: "PNG to JPG Converter: Shrink Images for Web and Email",
    intro:
      "PNG files preserve every pixel, which is great for graphics but often overkill for photos — resulting in files far larger than they need to be. ConvertBrio's PNG to JPG converter compresses your image into a smaller, more shareable JPG, ideal for email attachments, web pages, and anywhere upload size limits matter.",
    sections: [
      {
        heading: "When to Convert PNG to JPG",
        body: "If your PNG is a photo (rather than a graphic with transparency or hard-edged text), converting to JPG almost always shrinks the file significantly with no visible quality loss. This is especially useful for email attachments with size limits, web pages where load speed matters, or any upload form that rejects large files.",
      },
      {
        heading: "How the Conversion Works",
        body: "Upload the PNG and ConvertBrio re-encodes it as a JPG at default quality, which balances a small file size against visual fidelity. Since JPG doesn't support transparency, any transparent areas in the original PNG will be filled with a solid background in the output.",
      },
      {
        heading: "What You'll Lose (and What You Won't)",
        body: "Converting to JPG discards transparency and applies lossy compression, so it's not the right choice for logos or graphics that need a transparent background. For ordinary photos, the compression is barely noticeable, and the file size reduction is usually substantial — often 50-80% smaller than the original PNG.",
      },
    ],
    relatedTools: [
      { label: "JPG to PNG", href: "/tools/jpg-to-png" },
      { label: "Compress Image", href: "/tools/compress-image" },
      { label: "Resize Image", href: "/tools/resize-image" },
    ],
    faqDescription: "Common questions about converting PNG images to JPG.",
    faq: [
      {
        question: "Why is my PNG file so large?",
        answer:
          "PNG uses lossless compression, meaning it stores every pixel exactly rather than discarding detail the way JPG does. That makes PNG ideal for graphics but often much larger than necessary for ordinary photos.",
      },
      {
        question: "What happens to transparent areas when converting to JPG?",
        answer:
          "JPG doesn't support transparency, so any transparent parts of your PNG will be filled in with a solid color (usually white) in the converted file.",
      },
      {
        question: "How much smaller will the JPG be?",
        answer:
          "It depends on the image, but photos typically shrink by 50-80% when converted from PNG to JPG at default quality, since JPG's compression is specifically tuned for photographic content.",
      },
    ],
  },

  "png-to-webp": {
    title: "PNG to WEBP Converter: Lossless-Friendly Compression for the Web",
    intro:
      "WEBP supports both lossy and lossless compression, so it can replace PNG for graphics that need transparency while still cutting file size significantly. ConvertBrio's PNG to WEBP converter re-encodes your image in seconds, keeping transparency intact where the original PNG had it.",
    sections: [
      {
        heading: "Why WEBP Beats PNG for File Size",
        body: "Even in lossless mode, WEBP typically compresses more efficiently than PNG, producing smaller files from the same source image. For graphics, icons, and screenshots headed to a website, that translates directly into faster page loads without giving up transparency or exact detail.",
      },
      {
        heading: "How the Conversion Works",
        body: "Upload your PNG and ConvertBrio converts it to WEBP automatically. Transparent areas in the original file are preserved in the WEBP output, so logos and icons with alpha channels convert cleanly without any manual re-editing.",
      },
      {
        heading: "Where to Use the Result",
        body: "WEBP is supported natively by every major modern browser, making it a safe default for website images, favicons, and UI graphics. If you need the file for print, older software, or a platform with unclear WEBP support, keep the original PNG as a backup.",
      },
    ],
    relatedTools: [
      { label: "JPG to WEBP", href: "/tools/jpg-to-webp" },
      { label: "WEBP to PNG", href: "/tools/webp-to-png" },
      { label: "PNG to AVIF", href: "/tools/png-to-avif" },
    ],
    faqDescription: "Common questions about converting PNG images to WEBP.",
    faq: [
      {
        question: "Does converting PNG to WEBP keep transparency?",
        answer:
          "Yes. WEBP supports an alpha channel just like PNG, so any transparent background in your original file carries over to the converted WEBP image.",
      },
      {
        question: "Is WEBP always smaller than PNG?",
        answer:
          "Usually, yes — even in lossless mode, WEBP's compression is generally more efficient than PNG's, so most images shrink noticeably after conversion.",
      },
      {
        question: "Can I convert the WEBP back to PNG later?",
        answer:
          "Yes, use ConvertBrio's WEBP to PNG converter any time you need the file back in PNG format for software that doesn't support WEBP.",
      },
    ],
  },

  "png-to-avif": {
    title: "PNG to AVIF Converter: Maximum Compression for Graphics",
    intro:
      "AVIF can compress graphics and photos far more aggressively than PNG while still supporting transparency, making it one of the most space-efficient formats available for web images today. ConvertBrio's PNG to AVIF converter handles the conversion instantly, no encoding software required.",
    sections: [
      {
        heading: "Why Choose AVIF Over PNG",
        body: "PNG's lossless compression keeps files larger than necessary for many use cases. AVIF, built on modern video-codec compression technology, can shrink the same image dramatically — sometimes by 80% or more — while keeping transparency and visual quality intact, which is a major win for site performance.",
      },
      {
        heading: "How the Conversion Works",
        body: "Upload your PNG file and ConvertBrio outputs an AVIF version, preserving transparency and resolution. The process runs entirely in your browser and completes in seconds for typical image sizes.",
      },
      {
        heading: "Compatibility Notes",
        body: "AVIF displays correctly in all current versions of Chrome, Firefox, Safari, and Edge. Some older tools, email clients, and design software may not yet support it, so it's best suited for direct website use rather than files you'll hand off to third-party systems with unknown compatibility.",
      },
    ],
    relatedTools: [
      { label: "PNG to WEBP", href: "/tools/png-to-webp" },
      { label: "AVIF to PNG", href: "/tools/avif-to-png" },
      { label: "Compress Image", href: "/tools/compress-image" },
    ],
    faqDescription: "Common questions about converting PNG images to AVIF.",
    faq: [
      {
        question: "Does AVIF support transparent backgrounds?",
        answer:
          "Yes, AVIF supports an alpha channel, so transparency in your original PNG carries over correctly to the converted AVIF file.",
      },
      {
        question: "How much smaller will my AVIF file be?",
        answer:
          "Results vary by image content, but AVIF frequently shrinks PNG files by 70-80% or more, making it one of the most efficient formats currently available for the web.",
      },
      {
        question: "Should I use AVIF or WEBP for my website?",
        answer:
          "AVIF usually compresses better, so it's worth using where your platform supports it. WEBP remains a solid, slightly more broadly compatible alternative if you run into upload restrictions with AVIF.",
      },
    ],
  },

  "webp-to-jpg": {
    title: "WEBP to JPG Converter: Open WEBP Images Anywhere",
    intro:
      "WEBP images downloaded from websites don't always open cleanly in older photo viewers, some design tools, or apps that expect a standard format. ConvertBrio's WEBP to JPG converter turns any WEBP file into a JPG that opens everywhere — no compatibility guesswork required.",
    sections: [
      {
        heading: "Why WEBP Files Sometimes Won't Open",
        body: "WEBP is a relatively modern format, and while browsers support it universally, some desktop photo viewers, older versions of image editors, and certain apps still don't recognize it. If you've saved an image from a website and it won't open where you expect, converting it to JPG is the fastest fix.",
      },
      {
        heading: "How the Conversion Works",
        body: "Upload your WEBP file and ConvertBrio decodes it and re-encodes it as a JPG. The output opens in every browser, photo viewer, and editing tool, making it the safest format to share broadly or attach to an email.",
      },
      {
        heading: "What to Expect",
        body: "If the original WEBP had a transparent background, that transparency will be filled with a solid color in the JPG output, since JPG doesn't support alpha channels. For ordinary photos and web images without transparency, the conversion is visually seamless.",
      },
    ],
    relatedTools: [
      { label: "WEBP to PNG", href: "/tools/webp-to-png" },
      { label: "JPG to WEBP", href: "/tools/jpg-to-webp" },
      { label: "Image Converter", href: "/tools/image-converter" },
    ],
    faqDescription: "Common questions about converting WEBP images to JPG.",
    faq: [
      {
        question: "Why can't I open a WEBP file on my computer?",
        answer:
          "Some older photo viewers, image editors, and operating system versions don't support WEBP natively, even though every modern browser does. Converting to JPG resolves the issue immediately.",
      },
      {
        question: "Will I lose transparency converting WEBP to JPG?",
        answer:
          "Yes — JPG doesn't support transparency, so any transparent areas in the original WEBP will appear as a solid color in the converted file. Use WEBP to PNG instead if you need to keep transparency.",
      },
      {
        question: "Is the converted JPG safe to share or upload?",
        answer:
          "Yes, JPG is the most universally compatible image format, so the converted file will open correctly in virtually any app, device, or upload form.",
      },
    ],
  },

  "webp-to-png": {
    title: "WEBP to PNG Converter: Preserve Transparency and Quality",
    intro:
      "When a WEBP image has a transparent background — a logo, icon, or exported graphic — converting it to JPG isn't an option. ConvertBrio's WEBP to PNG converter preserves that transparency and produces a lossless file that works in design tools, older software, and anywhere PNG is the expected format.",
    sections: [
      {
        heading: "When to Choose PNG Over JPG",
        body: "If your WEBP file has any transparent or semi-transparent pixels, converting to PNG is the right call — it's the only common format among the two that keeps an alpha channel intact. PNG is also the safer choice when you plan to edit the image further, since it won't introduce compression artifacts.",
      },
      {
        heading: "How the Conversion Works",
        body: "Upload the WEBP file and ConvertBrio converts it to a lossless PNG, keeping transparency and resolution exactly as they were. This works whether the WEBP was lossy or lossless to begin with — the output PNG always preserves full detail from the decoded image.",
      },
      {
        heading: "File Size Considerations",
        body: "PNG files are generally larger than WEBP, since WEBP's compression is more efficient. For graphics and icons the difference is usually small; for large photos the PNG can be noticeably bigger — a reasonable trade-off when transparency or lossless quality is the priority.",
      },
    ],
    relatedTools: [
      { label: "WEBP to JPG", href: "/tools/webp-to-jpg" },
      { label: "PNG to WEBP", href: "/tools/png-to-webp" },
      { label: "Crop Image", href: "/tools/crop-image" },
    ],
    faqDescription: "Common questions about converting WEBP images to PNG.",
    faq: [
      {
        question: "Does WEBP to PNG keep the transparent background?",
        answer:
          "Yes. If your WEBP file has transparency, ConvertBrio preserves it exactly in the converted PNG, since both formats support alpha channels.",
      },
      {
        question: "Should I use PNG or JPG for my WEBP file?",
        answer:
          "Choose PNG if the image has transparency or you plan to edit it further. Choose JPG if it's a plain photo and you want the smallest possible file for sharing.",
      },
      {
        question: "Will the image quality change?",
        answer:
          "No — PNG is a lossless format, so converting from WEBP to PNG doesn't discard any additional detail beyond what the original WEBP file already contained.",
      },
    ],
  },

  "webp-to-avif": {
    title: "WEBP to AVIF Converter: Squeeze Out Even More Compression",
    intro:
      "AVIF frequently outperforms WEBP on compression efficiency, so re-encoding an existing WEBP image as AVIF can shrink it further without a visible quality trade-off. ConvertBrio's WEBP to AVIF converter makes that switch in one step.",
    sections: [
      {
        heading: "Why Re-Encode WEBP as AVIF",
        body: "If you're already using WEBP for web performance, AVIF is worth testing as the next step — it typically compresses better on the same source image, particularly for photos and complex graphics. The difference is most noticeable on larger, detail-heavy images.",
      },
      {
        heading: "How the Conversion Works",
        body: "Upload your WEBP file and ConvertBrio decodes it and re-encodes it as AVIF, preserving transparency if present. The result downloads automatically and can be used anywhere your platform accepts AVIF images.",
      },
      {
        heading: "Things to Check Before Switching",
        body: "AVIF is supported by all current major browsers, but confirm your content management system and any third-party tools in your workflow accept AVIF uploads before replacing WEBP site-wide. For personal projects and modern websites, the switch is usually seamless.",
      },
    ],
    relatedTools: [
      { label: "JPG to AVIF", href: "/tools/jpg-to-avif" },
      { label: "AVIF to WEBP", href: "/tools/avif-to-webp" },
      { label: "Compress Image", href: "/tools/compress-image" },
    ],
    faqDescription: "Common questions about converting WEBP images to AVIF.",
    faq: [
      {
        question: "Is it worth converting WEBP to AVIF?",
        answer:
          "If your goal is the smallest possible file size and your platform supports AVIF, yes — AVIF often compresses better than WEBP on the same image, especially for photos.",
      },
      {
        question: "Does the conversion keep transparency?",
        answer:
          "Yes, AVIF supports transparency just like WEBP, so any alpha channel in your original file is preserved in the converted image.",
      },
      {
        question: "Can I convert back to WEBP if I need to?",
        answer:
          "Yes — use ConvertBrio's image converter to go from AVIF back to WEBP or any other supported format at any time.",
      },
    ],
  },

  "avif-to-jpg": {
    title: "AVIF to JPG Converter: Make AVIF Images Open Everywhere",
    intro:
      "AVIF's efficient compression makes it great for modern websites, but plenty of apps, older devices, and photo tools still can't open it. ConvertBrio's AVIF to JPG converter decodes the image and re-saves it as a JPG that works in essentially any software you'll come across.",
    sections: [
      {
        heading: "Why Convert AVIF to JPG",
        body: "If an AVIF file won't open in your photo viewer, editing software, or a website's upload form, JPG is the safest fallback — it's supported virtually everywhere, from decades-old software to the newest devices. This is the most common reason people convert away from AVIF.",
      },
      {
        heading: "How the Conversion Works",
        body: "Upload the AVIF file and ConvertBrio decodes it, then re-encodes the image as a JPG at full resolution. The download is ready within seconds and opens immediately in any browser, viewer, or editing app.",
      },
      {
        heading: "What Changes in the Conversion",
        body: "JPG doesn't support transparency, so if the AVIF file had a transparent background, it will be filled with a solid color in the output. For standard photos without transparency, the visual result is essentially identical to the source.",
      },
    ],
    relatedTools: [
      { label: "AVIF to PNG", href: "/tools/avif-to-png" },
      { label: "AVIF to WEBP", href: "/tools/avif-to-webp" },
      { label: "Image Converter", href: "/tools/image-converter" },
    ],
    faqDescription: "Common questions about converting AVIF images to JPG.",
    faq: [
      {
        question: "Why won't my AVIF file open?",
        answer:
          "AVIF is a newer format, and while modern browsers support it, many older apps, photo viewers, and some editing tools don't yet. Converting to JPG makes the file openable everywhere immediately.",
      },
      {
        question: "Does converting to JPG lose image quality?",
        answer:
          "There's a small amount of re-compression involved since AVIF and JPG use different algorithms, but at ConvertBrio's default quality it's not visible in normal use.",
      },
      {
        question: "Can I convert AVIF to PNG instead?",
        answer:
          "Yes — use the AVIF to PNG converter if you need a lossless file or need to preserve transparency, which JPG can't hold.",
      },
    ],
  },

  "avif-to-png": {
    title: "AVIF to PNG Converter: Lossless Output With Transparency Preserved",
    intro:
      "When an AVIF image has a transparent background or you need pixel-perfect accuracy for further editing, PNG is the right target format. ConvertBrio's AVIF to PNG converter decodes your file and produces a lossless PNG in seconds, keeping any transparency fully intact.",
    sections: [
      {
        heading: "When PNG Is the Better Choice",
        body: "Choose PNG over JPG whenever the source AVIF has transparency, sharp text, or fine detail you don't want softened by lossy compression. It's also the safer intermediate format if you plan to open the image in a design tool for further editing.",
      },
      {
        heading: "How the Conversion Works",
        body: "Upload your AVIF file and ConvertBrio decodes it and re-encodes it as a lossless PNG, preserving resolution, color, and transparency exactly as they appeared in the original file.",
      },
      {
        heading: "Expected File Size",
        body: "Because PNG doesn't compress as aggressively as AVIF, the converted file will typically be noticeably larger than the source — often several times the size. That trade-off is expected and comes with the benefit of lossless, widely-compatible output.",
      },
    ],
    relatedTools: [
      { label: "AVIF to JPG", href: "/tools/avif-to-jpg" },
      { label: "PNG to AVIF", href: "/tools/png-to-avif" },
      { label: "Resize Image", href: "/tools/resize-image" },
    ],
    faqDescription: "Common questions about converting AVIF images to PNG.",
    faq: [
      {
        question: "Does AVIF to PNG preserve transparency?",
        answer:
          "Yes. If your AVIF file has an alpha channel, ConvertBrio carries that transparency over exactly into the converted PNG.",
      },
      {
        question: "Why is my PNG file much larger than the AVIF?",
        answer:
          "PNG is a lossless format and doesn't compress as efficiently as AVIF, so a size increase after conversion is normal and expected.",
      },
      {
        question: "Is PNG a good format for editing images further?",
        answer:
          "Yes — because PNG doesn't apply lossy compression, it's a safer intermediate format than JPG or AVIF when you plan to open a file in an editor and re-save it multiple times.",
      },
    ],
  },

  "avif-to-webp": {
    title: "AVIF to WEBP Converter: Broaden Compatibility Without Losing Efficiency",
    intro:
      "WEBP has slightly broader support than AVIF across older tools and platforms while still offering strong compression, making it a practical middle ground when AVIF isn't fully supported. ConvertBrio's AVIF to WEBP converter handles the switch instantly.",
    sections: [
      {
        heading: "Why Convert AVIF to WEBP",
        body: "If a platform, plugin, or piece of software rejects AVIF uploads but accepts WEBP, converting is the quickest fix — you keep most of AVIF's efficiency benefit while gaining wider compatibility. This is common when working with older content management systems or third-party integrations.",
      },
      {
        heading: "How the Conversion Works",
        body: "Upload your AVIF file and ConvertBrio decodes it and re-encodes it as WEBP, preserving transparency and resolution. The process completes in seconds and the file downloads automatically.",
      },
      {
        heading: "Compression Trade-Offs",
        body: "WEBP files are typically a bit larger than the equivalent AVIF at the same visual quality, since AVIF's compression is generally more advanced. The difference is usually small enough that the compatibility gain is worth it for most use cases.",
      },
    ],
    relatedTools: [
      { label: "WEBP to AVIF", href: "/tools/webp-to-avif" },
      { label: "AVIF to JPG", href: "/tools/avif-to-jpg" },
      { label: "Image Converter", href: "/tools/image-converter" },
    ],
    faqDescription: "Common questions about converting AVIF images to WEBP.",
    faq: [
      {
        question: "Why would I convert AVIF to WEBP instead of keeping AVIF?",
        answer:
          "Some platforms and older tools accept WEBP but not AVIF. Converting gives you broader compatibility while keeping most of the file-size benefit AVIF started with.",
      },
      {
        question: "Will the file size increase after converting?",
        answer:
          "Slightly, in most cases — WEBP's compression is a bit less efficient than AVIF's, so expect a modest size increase rather than a dramatic one.",
      },
      {
        question: "Does transparency carry over from AVIF to WEBP?",
        answer:
          "Yes, both formats support alpha channels, so any transparency in your original AVIF file is preserved in the converted WEBP.",
      },
    ],
  },

  "compress-image": {
    title: "Image Compressor: Shrink File Size Without Losing Quality",
    intro:
      "Whether you're hitting an upload limit, speeding up a website, or just tired of photos eating up storage, ConvertBrio's image compressor reduces file size while keeping images visually sharp. You control the quality level directly, so you can find the exact balance between file size and clarity for your use case — including a target-size mode for forms that demand an exact maximum.",
    sections: [
      {
        heading: "How Image Compression Works",
        body: "Upload your image and adjust the quality slider — lower values produce smaller files with more visible compression, higher values keep more detail at a larger size. ConvertBrio re-encodes the image at your chosen setting and shows you the result immediately, so you can compare before downloading.",
      },
      {
        heading: "Reducing an Image to a Specific Size (Like 100 KB)",
        body: "Many government forms, job applications, and ID upload systems cap file size at a specific limit, often 100 KB. ConvertBrio's compressor can target that exact ceiling, adjusting quality and, if necessary, dimensions until the output fits — sparing you the trial-and-error of manually guessing a quality percentage.",
      },
      {
        heading: "How Much Can You Compress Without Noticing?",
        body: "Most photos can lose 40-60% of their file size before the difference becomes visible to the naked eye, since JPG and WEBP compression is tuned to discard detail the eye is least sensitive to first. Start near the top of the quality range and lower it gradually while checking the preview, rather than guessing a low number up front.",
      },
      {
        heading: "Privacy and Batch Compression",
        body: "Every upload is encrypted in transit and automatically deleted from ConvertBrio's servers within 24 hours. Free use covers one image at a time up to 25 MB; paid plans add batch compression for anyone processing large photo libraries or galleries at once.",
      },
    ],
    relatedTools: [
      { label: "Resize Image", href: "/tools/resize-image" },
      { label: "Compress PDF", href: "/tools/compress-pdf" },
      { label: "Image Converter", href: "/tools/image-converter" },
    ],
    faqDescription: "Common questions about compressing and reducing image file size.",
    faq: [
      {
        question: "How do I reduce an image to under 100 KB?",
        answer:
          "Upload the image to ConvertBrio's compressor and set your target size to 100 KB. The tool adjusts quality — and dimensions if needed — until the file fits that limit, which is ideal for forms and ID uploads with strict size caps.",
      },
      {
        question: "Will compressing my image make it look worse?",
        answer:
          "At moderate compression levels, most people can't tell the difference. Quality loss becomes noticeable only at more aggressive settings, so it's worth checking the preview as you adjust the slider rather than compressing to the smallest possible size by default.",
      },
      {
        question: "Can I compress multiple images at once?",
        answer:
          "Compressing one image at a time is free with no account required. Batch compression for many images in a single pass is available on ConvertBrio's paid plans.",
      },
    ],
  },

  "resize-image": {
    title: "Image Resizer: Fit Exact Pixel Dimensions Online",
    intro:
      "Whether a website demands a specific banner size, a form requires an exact photo dimension, or you just need to shrink an oversized image, ConvertBrio's resize tool lets you set exact width and height in pixels and get a correctly-sized file back in seconds — no design software required.",
    sections: [
      {
        heading: "How to Resize an Image",
        body: "Upload your image, enter the width and height you need in pixels, and ConvertBrio scales the image to match. This is the fastest route when you know the exact dimensions a platform requires, such as a profile picture, banner ad, or product photo specification.",
      },
      {
        heading: "Resizing Without Distorting Your Image",
        body: "Entering dimensions that don't match your image's original aspect ratio will stretch or squash it, so if you want to avoid distortion, calculate a width and height that preserve the same proportions as the source image before resizing. If you instead need to remove part of the image rather than scale the whole thing, ConvertBrio's Crop Image tool is the better fit.",
      },
      {
        heading: "Resizing and File Size",
        body: "Reducing an image's pixel dimensions also reduces its file size, often substantially, since there's simply less image data to store. If your goal is a smaller file rather than specific dimensions, pairing a resize with ConvertBrio's Compress Image tool gets you the smallest practical result.",
      },
    ],
    relatedTools: [
      { label: "Crop Image", href: "/tools/crop-image" },
      { label: "Compress Image", href: "/tools/compress-image" },
      { label: "Rotate Image", href: "/tools/rotate-image" },
    ],
    faqDescription: "Common questions about resizing images to exact dimensions.",
    faq: [
      {
        question: "How do I resize an image to exact pixel dimensions?",
        answer:
          "Upload your image to ConvertBrio's resize tool, enter the width and height you need in pixels, and download the resized file. It works for any image format the tool accepts.",
      },
      {
        question: "Will resizing distort my image?",
        answer:
          "It will if the new width and height don't match the original aspect ratio. To avoid stretching, keep the same width-to-height proportion as your source image when entering dimensions.",
      },
      {
        question: "Does resizing reduce file size too?",
        answer:
          "Yes, smaller pixel dimensions generally mean a smaller file, since there's less image data to encode. For maximum size reduction, combine resizing with ConvertBrio's Compress Image tool.",
      },
    ],
  },

  "crop-image": {
    title: "Image Cropper: Cut an Image Down to the Region You Need",
    intro:
      "Sometimes you don't need to shrink an entire image — you need to remove everything outside a specific area, whether that's cutting out a subject, removing unwanted background, or matching a platform's required aspect ratio. ConvertBrio's crop tool lets you specify an exact region by pixel coordinates and get back just that section.",
    sections: [
      {
        heading: "How to Crop an Image",
        body: "Upload your image and enter the left and top coordinates for where the crop should start, along with the width and height of the region you want to keep. ConvertBrio cuts the image down to exactly that rectangle and discards everything outside it.",
      },
      {
        heading: "Finding the Right Coordinates",
        body: "Coordinates are measured in pixels from the top-left corner of the image, so an image editor or preview tool that shows pixel position can help you identify the exact region before uploading. If you just want to scale the whole image rather than cut out a section, use Resize Image instead.",
      },
      {
        heading: "Common Uses for Cropping",
        body: "Cropping is useful for removing unwanted background from a photo, isolating a subject, matching a required aspect ratio for a profile picture or banner, or cutting a scanned document down to just the content area. It's a precise alternative to resizing when the goal is subtraction rather than scaling.",
      },
    ],
    relatedTools: [
      { label: "Resize Image", href: "/tools/resize-image" },
      { label: "Rotate Image", href: "/tools/rotate-image" },
      { label: "Compress Image", href: "/tools/compress-image" },
    ],
    faqDescription: "Common questions about cropping images to a specific region.",
    faq: [
      {
        question: "How do I crop an image to a specific region?",
        answer:
          "Upload your image to ConvertBrio's crop tool and enter the left and top starting coordinates plus the width and height of the area you want to keep, measured in pixels from the top-left corner.",
      },
      {
        question: "What's the difference between cropping and resizing?",
        answer:
          "Resizing scales the entire image to new dimensions, while cropping cuts out and keeps only a specific rectangular region, discarding everything else. Use cropping when you want to remove part of the image rather than shrink the whole thing.",
      },
      {
        question: "How do I know the right pixel coordinates to enter?",
        answer:
          "Open the image in a preview tool or editor that displays pixel position as you hover over it, which will help you identify the coordinates of the region you want to keep before entering them into ConvertBrio.",
      },
    ],
  },

  "rotate-image": {
    title: "Image Rotator: Fix Sideways or Upside-Down Photos",
    intro:
      "Photos taken on a phone or scanned from a printer sometimes end up rotated the wrong way. ConvertBrio's rotate tool turns an image 90, 180, or 270 degrees in one click, fixing orientation issues without needing to open a full photo editor.",
    sections: [
      {
        heading: "How to Rotate an Image",
        body: "Upload the image, choose 90, 180, or 270 degrees from the dropdown, and ConvertBrio applies the rotation and returns the corrected file. A 90-degree rotation fixes a sideways image, while 180 degrees flips an upside-down one right-side up.",
      },
      {
        heading: "Why Photos End Up Rotated Incorrectly",
        body: "This usually happens when a camera or scanner doesn't embed the correct orientation metadata, or when that metadata gets stripped during upload or transfer. The image data itself is unaffected — it just displays in the wrong direction until it's rotated.",
      },
      {
        heading: "Rotating Scanned Documents",
        body: "Scanned pages fed into a scanner sideways or upside down are one of the most common cases for this tool. Rotating the image before further processing — such as converting it to PDF or running OCR — makes sure the final document reads correctly.",
      },
    ],
    relatedTools: [
      { label: "Crop Image", href: "/tools/crop-image" },
      { label: "Rotate PDF", href: "/tools/rotate-pdf" },
      { label: "JPG to PDF", href: "/tools/jpg-to-pdf" },
    ],
    faqDescription: "Common questions about rotating images online.",
    faq: [
      {
        question: "How do I rotate a sideways photo?",
        answer:
          "Upload the image to ConvertBrio's rotate tool and choose 90 or 270 degrees, depending on which direction it needs to turn to display correctly.",
      },
      {
        question: "Why is my photo upside down or sideways in the first place?",
        answer:
          "This is typically caused by missing or incorrect orientation metadata from the camera or scanner that captured it — the image content is fine, it just needs to be rotated to display properly.",
      },
      {
        question: "Can I rotate a scanned document image before converting it to PDF?",
        answer:
          "Yes — rotate the image first with this tool, then use JPG to PDF to combine it into a correctly-oriented PDF document.",
      },
    ],
  },

  "merge-pdf": {
    title: "Merge PDF Online: Combine Multiple PDFs Into One File",
    intro:
      "Joining scanned pages, invoices, reports, or chapters into a single document usually means opening desktop software or paying for a subscription. ConvertBrio's merge tool does it directly in your browser — upload multiple PDFs, arrange them in order, and download one combined file in seconds.",
    sections: [
      {
        heading: "How to Merge PDF Files",
        body: "Upload two or more PDF files at once, arrange them in the order you want them to appear in the final document, and click Convert. ConvertBrio combines every page from each file, in sequence, into a single downloadable PDF.",
      },
      {
        heading: "Common Reasons to Merge PDFs",
        body: "People merge PDFs to combine scanned pages into one document, assemble a multi-part report or contract, bundle invoices for a single submission, or join chapters of a book or manual. It's also useful for combining separately-scanned double-sided pages into a properly ordered document.",
      },
      {
        heading: "File Order and Limits",
        body: "The order you upload or arrange files in determines the order they appear in the merged PDF, so double-check the sequence before converting. Free merges work with files up to 25 MB each; paid plans raise that limit for larger documents.",
      },
    ],
    relatedTools: [
      { label: "Split PDF", href: "/tools/split-pdf" },
      { label: "Compress PDF", href: "/tools/compress-pdf" },
      { label: "Add Page Numbers", href: "/tools/add-page-numbers" },
    ],
    faqDescription: "Common questions about merging multiple PDF files into one.",
    faq: [
      {
        question: "How do I merge PDF files online for free?",
        answer:
          "Open ConvertBrio's Merge PDF tool, upload two or more PDFs, arrange them in the order you want, and download the combined file — no account or software installation required.",
      },
      {
        question: "Can I control the order of pages in the merged PDF?",
        answer:
          "Yes — the files merge in the order you upload or arrange them, with each file's pages appearing in sequence in the final document.",
      },
      {
        question: "Is there a limit to how many PDFs I can merge?",
        answer:
          "You can combine multiple files in a single upload, each up to 25 MB on the free tier. If you regularly merge larger or more numerous files, ConvertBrio's paid plans raise those limits.",
      },
    ],
  },

  "split-pdf": {
    title: "Split PDF Online: Break One Document Into Individual Pages",
    intro:
      "Need to pull one page out of a larger PDF, or break a multi-page document into individual files? ConvertBrio's split tool separates every page of your PDF into its own file, ready to download and use independently.",
    sections: [
      {
        heading: "How to Split a PDF",
        body: "Upload your PDF and ConvertBrio breaks it into individual single-page files, one per page in the original document. This is useful when you need to extract a specific page, distribute pages separately, or reorganize content that was originally bundled into one file.",
      },
      {
        heading: "When Splitting Makes Sense",
        body: "Common cases include pulling a signature page out of a contract, separating chapters of a scanned book, isolating an invoice from a multi-invoice batch, or breaking a large report into smaller sections for easier sharing.",
      },
      {
        heading: "Rejoining Pages Later",
        body: "If you split a PDF and later need to recombine some or all of the resulting pages into a new document, ConvertBrio's Merge PDF tool can put them back together in whatever order you choose.",
      },
    ],
    relatedTools: [
      { label: "Merge PDF", href: "/tools/merge-pdf" },
      { label: "PDF to JPG", href: "/tools/pdf-to-jpg" },
      { label: "Compress PDF", href: "/tools/compress-pdf" },
    ],
    faqDescription: "Common questions about splitting a PDF into individual pages.",
    faq: [
      {
        question: "How do I split a PDF into separate pages?",
        answer:
          "Upload your PDF to ConvertBrio's Split PDF tool, and it separates every page into its own individual file, which you can then download and use independently.",
      },
      {
        question: "Can I extract just one page from a PDF?",
        answer:
          "Yes — splitting breaks the document into individual pages, so you can take the specific page you need and discard or ignore the rest.",
      },
      {
        question: "Can I put the split pages back together afterward?",
        answer:
          "Yes, use ConvertBrio's Merge PDF tool to recombine any of the resulting pages into a new document in whatever order you need.",
      },
    ],
  },

  "compress-pdf": {
    title: "Compress PDF Online: Shrink File Size for Email and Upload",
    intro:
      "Large PDFs — especially ones full of scanned pages or high-resolution images — often bounce off email attachment limits or take too long to upload. ConvertBrio's PDF compressor re-encodes embedded images and strips unnecessary metadata to reduce file size, making the document easier to send and store.",
    sections: [
      {
        heading: "How PDF Compression Works",
        body: "Upload your PDF and ConvertBrio re-encodes the images embedded inside it at a more efficient quality level, and removes metadata that isn't needed for the document to function. This is a best-effort process — the amount of reduction depends heavily on how much of the file's size comes from images versus text.",
      },
      {
        heading: "What Kind of PDFs Compress Best",
        body: "Documents with many high-resolution scanned pages or embedded photos typically see the biggest size reduction, since images are usually the largest contributor to file size. Text-only PDFs, which are already compact, will see comparatively little change.",
      },
      {
        heading: "When to Compress vs. Split",
        body: "If a PDF is too large primarily because it has too many pages rather than large images, splitting it into smaller files with ConvertBrio's Split PDF tool may be more effective than compression alone. The two tools solve different problems and can be used together.",
      },
    ],
    relatedTools: [
      { label: "Merge PDF", href: "/tools/merge-pdf" },
      { label: "Split PDF", href: "/tools/split-pdf" },
      { label: "Compress Image", href: "/tools/compress-image" },
    ],
    faqDescription: "Common questions about compressing PDF file size.",
    faq: [
      {
        question: "How do I compress a PDF online?",
        answer:
          "Upload your document to ConvertBrio's Compress PDF tool. It re-encodes embedded images and removes unnecessary metadata to shrink the file, which downloads automatically once processing finishes.",
      },
      {
        question: "Why didn't my PDF get much smaller?",
        answer:
          "Compression results depend on the file's contents — PDFs with mostly text and little embedded imagery are already compact and won't shrink as dramatically as image-heavy or scanned documents.",
      },
      {
        question: "Is PDF compression lossy?",
        answer:
          "Compression affects embedded images the way image compression generally does, trading some quality for smaller size, while text and vector content remain sharp and unaffected.",
      },
    ],
  },

  "rotate-pdf": {
    title: "Rotate PDF Online: Fix Sideways Pages in Any Document",
    intro:
      "Scanned documents fed into a scanner the wrong way often come out sideways or upside down. ConvertBrio's Rotate PDF tool turns every page of a document 90, 180, or 270 degrees in one pass, fixing the orientation across the whole file at once.",
    sections: [
      {
        heading: "How to Rotate a PDF",
        body: "Upload your PDF, choose a rotation angle — 90, 180, or 270 degrees — and ConvertBrio applies it to every page in the document. The result downloads as a corrected PDF with the same content, just properly oriented.",
      },
      {
        heading: "Why This Happens With Scanned Documents",
        body: "Sideways or upside-down pages are a common side effect of scanning paper documents, especially when pages are fed into a scanner in a different orientation than intended. Rotating the finished PDF is faster than re-scanning the original pages.",
      },
      {
        heading: "Rotating Only Some Pages",
        body: "ConvertBrio's rotate tool applies the same rotation to every page in the file. If only some pages need correcting, split the PDF first with Split PDF, rotate the affected pages individually, then merge everything back together with Merge PDF.",
      },
    ],
    relatedTools: [
      { label: "Split PDF", href: "/tools/split-pdf" },
      { label: "Merge PDF", href: "/tools/merge-pdf" },
      { label: "Rotate Image", href: "/tools/rotate-image" },
    ],
    faqDescription: "Common questions about rotating PDF pages online.",
    faq: [
      {
        question: "How do I rotate all the pages in a PDF?",
        answer:
          "Upload your document to ConvertBrio's Rotate PDF tool, choose a rotation angle, and every page in the file is rotated the same amount in the downloaded result.",
      },
      {
        question: "Can I rotate just one page instead of the whole document?",
        answer:
          "Not directly with this tool, since it rotates every page uniformly. To rotate only specific pages, split the PDF first, rotate the individual pages you need, then merge the file back together.",
      },
      {
        question: "Why do my scanned pages come out sideways?",
        answer:
          "This usually happens when pages are fed into a scanner in a different orientation than intended. Rotating the resulting PDF is quicker than re-scanning the original document.",
      },
    ],
  },

  "unlock-pdf": {
    title: "Unlock PDF: Remove Owner-Password Restrictions",
    intro:
      "Some PDFs are locked with an owner password that restricts printing, copying, or editing, even when you have every right to modify the document. ConvertBrio's Unlock PDF tool removes those restrictions from files you're authorized to edit, giving you full control back.",
    sections: [
      {
        heading: "How to Unlock a PDF",
        body: "Upload the restricted PDF and ConvertBrio removes the owner-level restrictions that block printing, copying, and editing. The unlocked file downloads with the same content, minus the permission restrictions.",
      },
      {
        heading: "Owner Passwords vs. Open Passwords",
        body: "This tool removes owner-password restrictions — the kind that lock down what you can do with a file you can already open. It does not attempt to bypass an open (user) password that prevents the PDF from being viewed at all; that requires the actual password from whoever created the file.",
      },
      {
        heading: "When to Use This Tool",
        body: "Unlocking is useful for documents you created or have explicit rights to modify but that were exported with restrictions enabled by default, such as reports from certain software or forms that locked editing unintentionally. Only unlock files you have the legal right to modify.",
      },
    ],
    relatedTools: [
      { label: "Compress PDF", href: "/tools/compress-pdf" },
      { label: "Merge PDF", href: "/tools/merge-pdf" },
      { label: "PDF to Word", href: "/tools/pdf-to-word" },
    ],
    faqDescription: "Common questions about removing PDF password restrictions.",
    faq: [
      {
        question: "What's the difference between unlocking and decrypting a PDF?",
        answer:
          "Unlocking removes owner-level restrictions on printing, copying, or editing from a file you can already open. It doesn't bypass a password required just to view the document — that requires the actual password.",
      },
      {
        question: "Is it legal to unlock a PDF?",
        answer:
          "Removing restrictions from a document you own or have explicit permission to edit is fine. Only use this tool on files you have the legal right to modify.",
      },
      {
        question: "Will unlocking change the content of my PDF?",
        answer:
          "No — the tool only removes the permission restrictions. The text, images, and layout of the document remain exactly the same.",
      },
    ],
  },

  "add-page-numbers": {
    title: "Add Page Numbers to a PDF Online",
    intro:
      "Reports, manuals, and contracts often need sequential page numbers for reference and navigation. ConvertBrio's Add Page Numbers tool stamps them onto every page of your PDF automatically, without requiring desktop publishing software.",
    sections: [
      {
        heading: "How to Add Page Numbers",
        body: "Upload your PDF and ConvertBrio stamps a sequential number onto every page, starting from the first page of the document. The numbered file downloads ready to print, share, or submit.",
      },
      {
        heading: "Why Page Numbers Matter",
        body: "Numbered pages make it far easier for readers to reference specific sections, especially in long contracts, academic papers, or manuals where people need to cite ‘page 14’ or navigate directly to a particular part of the document.",
      },
      {
        heading: "Combining With Other PDF Tools",
        body: "If you're assembling a document from multiple sources, merge the files first with Merge PDF, then add page numbers to the combined result so the numbering reflects the final document structure rather than each individual piece.",
      },
    ],
    relatedTools: [
      { label: "Merge PDF", href: "/tools/merge-pdf" },
      { label: "Compress PDF", href: "/tools/compress-pdf" },
      { label: "Word to PDF", href: "/tools/word-to-pdf" },
    ],
    faqDescription: "Common questions about adding page numbers to a PDF.",
    faq: [
      {
        question: "How do I add page numbers to a PDF?",
        answer:
          "Upload your document to ConvertBrio's Add Page Numbers tool, and it stamps a sequential number onto every page automatically before you download the result.",
      },
      {
        question: "Can I number pages after merging multiple PDFs?",
        answer:
          "Yes — merge your files first with Merge PDF, then run the combined document through Add Page Numbers so the numbering matches the final assembled document.",
      },
      {
        question: "Does this tool renumber pages that already have numbers?",
        answer:
          "It stamps a new sequential number onto each page. If your document already has numbers printed in the content itself, both will appear, so it works best on documents without existing page numbers.",
      },
    ],
  },

  "pdf-to-jpg": {
    title: "PDF to JPG Converter: Export Every Page as an Image",
    intro:
      "Sometimes you need a PDF page as an image — for a presentation slide, a social media post, or a document viewer that doesn't handle PDFs well. ConvertBrio's PDF to JPG converter exports every page of your document as a separate JPG image.",
    sections: [
      {
        heading: "How to Convert PDF to JPG",
        body: "Upload your PDF and ConvertBrio renders each page as a high-quality JPG image, ready to download. Multi-page documents produce one JPG per page, so you get the full document as a set of images.",
      },
      {
        heading: "Common Uses for PDF to JPG",
        body: "This conversion is useful for pulling a diagram or chart out of a report to share as an image, turning a scanned document into shareable pictures, or embedding a PDF page directly into a slide deck or webpage where PDFs aren't well supported.",
      },
      {
        heading: "PNG Instead of JPG",
        body: "If your PDF page contains text you want to keep perfectly sharp, or you need a transparent background, use PDF to PNG instead — JPG's compression can slightly soften fine text and line art compared to PNG's lossless output.",
      },
    ],
    relatedTools: [
      { label: "PDF to PNG", href: "/tools/pdf-to-png" },
      { label: "JPG to PDF", href: "/tools/jpg-to-pdf" },
      { label: "Split PDF", href: "/tools/split-pdf" },
    ],
    faqDescription: "Common questions about converting PDF pages to JPG images.",
    faq: [
      {
        question: "Does PDF to JPG convert every page?",
        answer:
          "Yes — ConvertBrio renders each page of your PDF as a separate JPG image, so a multi-page document produces one image per page.",
      },
      {
        question: "Should I use JPG or PNG for a PDF page with text?",
        answer:
          "PNG generally keeps text and fine lines sharper since it's lossless, while JPG produces a smaller file with slightly softer detail. Use PDF to PNG if crisp text matters most.",
      },
      {
        question: "Can I convert the images back into a PDF later?",
        answer:
          "Yes, use ConvertBrio's JPG to PDF tool to recombine images into a single PDF document whenever you need to.",
      },
    ],
  },

  "pdf-to-png": {
    title: "PDF to PNG Converter: Export Pages With Lossless Detail",
    intro:
      "When you need a PDF page as an image without losing any sharpness — for diagrams, screenshots, or text-heavy pages — PNG is the better export format than JPG. ConvertBrio's PDF to PNG converter turns every page into a lossless image file.",
    sections: [
      {
        heading: "How to Convert PDF to PNG",
        body: "Upload your PDF and ConvertBrio renders each page as a PNG image at full quality. Multi-page PDFs produce one PNG per page, downloaded together as the finished set.",
      },
      {
        heading: "Why Choose PNG Over JPG",
        body: "PNG's lossless compression keeps fine text, line art, and sharp edges free of the softening that JPG's compression can introduce. This matters most for pages with small text, technical diagrams, or content you plan to zoom into or edit further.",
      },
      {
        heading: "File Size Considerations",
        body: "PNG exports are generally larger than the equivalent JPG, especially for pages with a lot of visual detail. If file size matters more than pixel-perfect sharpness — for example, sharing casually or posting online — PDF to JPG may be the more practical choice.",
      },
    ],
    relatedTools: [
      { label: "PDF to JPG", href: "/tools/pdf-to-jpg" },
      { label: "JPG to PDF", href: "/tools/jpg-to-pdf" },
      { label: "OCR PDF", href: "/tools/ocr-pdf" },
    ],
    faqDescription: "Common questions about converting PDF pages to PNG images.",
    faq: [
      {
        question: "Why would I use PNG instead of JPG for a PDF page?",
        answer:
          "PNG is lossless, so it keeps text and fine detail sharper than JPG, which applies compression that can slightly soften small text and line art. Use PNG when clarity matters more than file size.",
      },
      {
        question: "Does PDF to PNG convert multi-page documents?",
        answer:
          "Yes — every page in the PDF is rendered as its own PNG image, so a multi-page document produces one image per page.",
      },
      {
        question: "Will the PNG files be larger than JPG exports?",
        answer:
          "Generally yes, since PNG doesn't discard detail the way JPG's lossy compression does. For casual sharing where size matters more, PDF to JPG may be the better option.",
      },
    ],
  },

  "jpg-to-pdf": {
    title: "JPG to PDF Converter: Combine Images Into One Document",
    intro:
      "Whether you're submitting scanned pages, building a photo portfolio, or turning receipts into one shareable file, ConvertBrio's JPG to PDF tool combines one or more images into a single PDF document, in the order you choose.",
    sections: [
      {
        heading: "How to Convert Images to PDF",
        body: "Upload one or more JPG or PNG images, arrange them in the order you want them to appear, and ConvertBrio combines them into a single PDF with one image per page. The result downloads ready to share, print, or submit.",
      },
      {
        heading: "Common Uses",
        body: "This is the standard way to submit scanned ID documents, combine multiple photos of receipts or contracts into one file for an application, or turn a set of images into a simple, shareable document without needing design or PDF-editing software.",
      },
      {
        heading: "Combining Many Images at Once",
        body: "You can upload multiple images in a single pass for free. For high-volume needs — like converting dozens of scanned pages regularly — ConvertBrio's paid plans add batch processing for faster, larger workflows.",
      },
    ],
    relatedTools: [
      { label: "PDF to JPG", href: "/tools/pdf-to-jpg" },
      { label: "Merge PDF", href: "/tools/merge-pdf" },
      { label: "Compress PDF", href: "/tools/compress-pdf" },
    ],
    faqDescription: "Common questions about converting images to PDF.",
    faq: [
      {
        question: "Can I combine multiple images into one PDF?",
        answer:
          "Yes — upload as many JPG or PNG images as you need in a single pass, and ConvertBrio combines them into one PDF with each image placed on its own page in the order you arrange them.",
      },
      {
        question: "How do I convert a scanned document photo to PDF?",
        answer:
          "Upload the photo of your scanned page to the JPG to PDF tool, and it converts directly into a PDF you can submit, print, or share, no scanner software required.",
      },
      {
        question: "What image formats does this tool accept?",
        answer:
          "JPG to PDF accepts JPG and PNG images. If your file is in another format, convert it with ConvertBrio's Image Converter first, then combine it into a PDF.",
      },
    ],
  },

  "ocr-pdf": {
    title: "OCR PDF: Make Scanned Documents Searchable and Editable",
    intro:
      "A scanned page or photographed document is just an image to a computer — you can't search it, copy text from it, or edit a single word without retyping the whole thing. Optical character recognition (OCR) fixes that by recognizing the text inside the image and turning it into real, selectable characters. ConvertBrio's OCR PDF tool is in active development and will bring this capability to every scanned PDF you upload.",
    sections: [
      {
        heading: "What OCR PDF Will Do",
        body: "Once live, OCR PDF will scan every page of your document, recognize printed text, and layer it back onto the file as searchable, selectable, and copyable text — without changing how the page looks. That means a scanned contract, textbook chapter, or old report becomes something you can search with Ctrl+F, copy quotes from, or run through a text editor.",
      },
      {
        heading: "Why This Matters",
        body: "Businesses and individuals frequently end up with document archives that are technically digital but functionally unusable — filing cabinets of PDFs that can't be searched or referenced without opening and reading each one manually. OCR turns that archive into something you can actually query, dramatically cutting the time spent hunting for information buried in scanned paperwork.",
      },
      {
        heading: "What You Can Do Right Now",
        body: "While OCR PDF is being built, ConvertBrio's PDF to JPG and PDF to PNG tools let you export scanned pages as images for viewing or sharing, and PDF to Word can extract text from PDFs that already contain a text layer (as opposed to a pure scanned image). Check back as this feature nears launch, or explore the rest of ConvertBrio's PDF tools in the meantime.",
      },
    ],
    relatedTools: [
      { label: "PDF to Word", href: "/tools/pdf-to-word" },
      { label: "PDF to JPG", href: "/tools/pdf-to-jpg" },
      { label: "Compress PDF", href: "/tools/compress-pdf" },
    ],
    faqDescription: "Common questions about ConvertBrio's upcoming OCR PDF tool.",
    faq: [
      {
        question: "Is OCR PDF available yet?",
        answer:
          "Not yet — OCR PDF needs a dedicated text-recognition engine that ConvertBrio is currently building. It's coming in a later update.",
      },
      {
        question: "What will OCR PDF let me do once it launches?",
        answer:
          "It will recognize printed text inside scanned PDF pages and make it searchable, selectable, and copyable, without changing how the page looks visually.",
      },
      {
        question: "Can I extract text from a PDF today?",
        answer:
          "If your PDF already contains a text layer (rather than being a pure scanned image), ConvertBrio's PDF to Word tool can extract that text now. Purely scanned, image-only PDFs will need OCR once it's available.",
      },
    ],
  },

  "word-to-pdf": {
    title: "Word to PDF Converter: Lock In Your Formatting for Sharing",
    intro:
      "A Word document can look different depending on the fonts, software version, or operating system it's opened with — which is a problem when you need a resume, contract, or report to look exactly the same everywhere. ConvertBrio's Word to PDF converter turns your DOCX file into a print-ready PDF that preserves formatting no matter where it's opened.",
    sections: [
      {
        heading: "How to Convert Word to PDF",
        body: "Upload your DOCX file and ConvertBrio generates a PDF version that mirrors the original document's layout, fonts, and formatting. The converted file downloads automatically and is ready to email, print, or upload wherever a PDF is required.",
      },
      {
        heading: "Why Convert to PDF Before Sharing",
        body: "PDF is the standard format for finished documents because it displays identically across every device and operating system — unlike Word documents, which can reflow or substitute fonts depending on what's installed. Converting locks in your formatting before a resume, contract, or invoice goes out the door.",
      },
      {
        heading: "Common Use Cases",
        body: "This tool is commonly used for finalizing resumes and cover letters before submitting them to job applications, converting signed contracts and agreements into a fixed, unmodifiable format, and preparing reports or proposals for print or official distribution.",
      },
    ],
    relatedTools: [
      { label: "PDF to Word", href: "/tools/pdf-to-word" },
      { label: "Merge PDF", href: "/tools/merge-pdf" },
      { label: "Add Page Numbers", href: "/tools/add-page-numbers" },
    ],
    faqDescription: "Common questions about converting Word documents to PDF.",
    faq: [
      {
        question: "How do I convert a Word document to PDF?",
        answer:
          "Upload your DOCX file to ConvertBrio's Word to PDF tool, and it generates a formatted PDF version ready to download, no Microsoft Word installation required.",
      },
      {
        question: "Will my formatting stay the same after converting?",
        answer:
          "Yes — the PDF preserves the layout, fonts, and formatting of your original document, and unlike a Word file, it will display identically on any device that opens it.",
      },
      {
        question: "Why convert to PDF instead of just sending the Word file?",
        answer:
          "PDF displays consistently everywhere, while Word documents can look different depending on the software and fonts installed on the recipient's computer. Converting avoids that risk entirely.",
      },
    ],
  },

  "pdf-to-word": {
    title: "PDF to Word Converter: Turn a PDF Into an Editable Document",
    intro:
      "Need to edit a PDF's text but don't have the original source file? ConvertBrio's PDF to Word converter extracts the text content from your PDF into an editable DOCX file that opens in Microsoft Word or Google Docs, so you can make changes without retyping the whole document.",
    sections: [
      {
        heading: "How to Convert PDF to Word",
        body: "Upload your PDF and ConvertBrio extracts its text content into a DOCX file, which downloads automatically and opens directly in Word, Google Docs, or any compatible word processor.",
      },
      {
        heading: "What Carries Over (and What Might Not)",
        body: "This conversion focuses on text content, so straightforward documents like letters, reports, and contracts convert cleanly. Complex layouts — multi-column pages, intricate tables, or documents with heavy embedded imagery — may not carry over exactly, since converting a fixed-layout PDF back into flexible, editable text has inherent limitations.",
      },
      {
        heading: "When This Tool Is the Right Fit",
        body: "PDF to Word works best when you need to edit or update text in a document you no longer have the original source for — for example, revising an old contract template, updating a report someone else authored, or repurposing content from a PDF into a new document.",
      },
    ],
    relatedTools: [
      { label: "Word to PDF", href: "/tools/word-to-pdf" },
      { label: "PDF to JPG", href: "/tools/pdf-to-jpg" },
      { label: "OCR PDF", href: "/tools/ocr-pdf" },
    ],
    faqDescription: "Common questions about converting PDF files to editable Word documents.",
    faq: [
      {
        question: "How do I convert a PDF to an editable Word document?",
        answer:
          "Upload your PDF to ConvertBrio's PDF to Word tool, and it extracts the text into a DOCX file you can open and edit in Microsoft Word or Google Docs.",
      },
      {
        question: "Will complex layouts and images convert correctly?",
        answer:
          "This conversion is text-focused, so complex layouts, multi-column designs, and embedded images may not carry over exactly. Simple text documents convert most reliably.",
      },
      {
        question: "Can I convert a scanned PDF to Word?",
        answer:
          "If the PDF is a pure scanned image without a text layer, this tool won't be able to extract text from it. ConvertBrio's upcoming OCR PDF tool will add support for recognizing text in scanned documents.",
      },
    ],
  },

  "word-to-jpg": {
    title: "Word to JPG Converter: Export Document Pages as Images",
    intro:
      "Sometimes you need a Word document's page as an image rather than an editable file — for a preview thumbnail, a social post, or embedding in a tool that doesn't handle documents. ConvertBrio's Word to JPG converter exports every page of your DOCX file as a JPG image.",
    sections: [
      {
        heading: "How to Convert Word to JPG",
        body: "Upload your DOCX file and ConvertBrio renders each page as a JPG image, preserving the document's layout and formatting as it would appear when printed. Multi-page documents produce one image per page.",
      },
      {
        heading: "Common Uses",
        body: "This is useful for creating a quick visual preview of a document, sharing a single page as an image on social media or in a chat app, or embedding a document page into a website or presentation where a live file isn't practical.",
      },
      {
        heading: "PNG for Sharper Text",
        body: "If the page you're exporting has small text or fine detail you want to keep perfectly crisp, use Word to PNG instead — PNG's lossless format avoids the slight softening that JPG's compression can introduce around text edges.",
      },
    ],
    relatedTools: [
      { label: "Word to PNG", href: "/tools/word-to-png" },
      { label: "Word to PDF", href: "/tools/word-to-pdf" },
      { label: "PDF to JPG", href: "/tools/pdf-to-jpg" },
    ],
    faqDescription: "Common questions about converting Word documents to JPG images.",
    faq: [
      {
        question: "How do I turn a Word document page into an image?",
        answer:
          "Upload your DOCX file to ConvertBrio's Word to JPG tool, and it renders each page of the document as a JPG image you can download.",
      },
      {
        question: "Does this work for multi-page documents?",
        answer:
          "Yes — every page in the document is exported as its own JPG image, so a multi-page file produces a full set of images.",
      },
      {
        question: "Should I use JPG or PNG for a document with small text?",
        answer:
          "PNG keeps small text and fine detail sharper since it's lossless. Use Word to PNG if crisp text is more important than the smaller file size JPG offers.",
      },
    ],
  },

  "word-to-png": {
    title: "Word to PNG Converter: Export Pages With Lossless Clarity",
    intro:
      "When a Word document page needs to become an image without losing any sharpness — for detailed diagrams, tables, or small print — PNG is the better export format than JPG. ConvertBrio's Word to PNG converter renders every page of your DOCX file as a lossless PNG image.",
    sections: [
      {
        heading: "How to Convert Word to PNG",
        body: "Upload your DOCX file and ConvertBrio renders each page as a PNG image at full quality, preserving fine detail and text sharpness. Multi-page documents produce one PNG per page.",
      },
      {
        heading: "Why PNG for Documents With Detail",
        body: "PNG's lossless compression avoids the softening around text and fine lines that JPG's compression can introduce, which matters most for pages containing tables, diagrams, small print, or content you plan to zoom into.",
      },
      {
        heading: "When JPG Might Be Better",
        body: "If file size matters more than pixel-perfect sharpness — for quick sharing or casual previews — Word to JPG produces a smaller file with only a minor difference in visual quality for most documents.",
      },
    ],
    relatedTools: [
      { label: "Word to JPG", href: "/tools/word-to-jpg" },
      { label: "Word to PDF", href: "/tools/word-to-pdf" },
      { label: "PDF to PNG", href: "/tools/pdf-to-png" },
    ],
    faqDescription: "Common questions about converting Word documents to PNG images.",
    faq: [
      {
        question: "Why choose PNG instead of JPG for a document page?",
        answer:
          "PNG is lossless, so it keeps text, tables, and diagrams sharper than JPG, which applies compression that can slightly soften fine detail. Choose PNG when clarity matters most.",
      },
      {
        question: "Does Word to PNG support multi-page documents?",
        answer:
          "Yes — each page in your DOCX file is rendered as a separate PNG image, giving you the full document as a set of images.",
      },
      {
        question: "Will the PNG files be larger than JPG exports?",
        answer:
          "Generally yes, since PNG doesn't discard detail the way JPG does. If file size matters more than sharpness, Word to JPG may be the more practical option.",
      },
    ],
  },

  "excel-to-pdf": {
    title: "Excel to PDF Converter: Coming Soon to ConvertBrio",
    intro:
      "Turning a spreadsheet into a fixed, shareable PDF is one of the most requested document conversions, and ConvertBrio is building support for it now. Once live, Excel to PDF will let you convert .xls and .xlsx spreadsheets into print-ready PDF documents directly in your browser, with no Excel installation required on the receiving end.",
    sections: [
      {
        heading: "What This Tool Will Do",
        body: "Excel to PDF will take your spreadsheet — formulas, formatting, and all — and render it as a fixed-layout PDF that looks the same no matter what device or software opens it. That makes it easy to share financial reports, invoices, and data tables with people who don't have Excel installed, or to lock in a snapshot of a spreadsheet before it changes further.",
      },
      {
        heading: "Why It's Not Live Yet",
        body: "Excel and PowerPoint conversion require a different rendering pipeline than the Word ↔ PDF/JPG/PNG conversions ConvertBrio currently supports, since spreadsheets and slide decks have fundamentally different layout logic than word processing documents. That pipeline is in active development.",
      },
      {
        heading: "What's Available Right Now",
        body: "While Excel to PDF is being built, ConvertBrio's Word to PDF, PDF to Word, Word to JPG, and Word to PNG tools are all fully functional today for document-based conversions. Check ConvertBrio's tools page periodically for updates as spreadsheet support rolls out.",
      },
    ],
    relatedTools: [
      { label: "Word to PDF", href: "/tools/word-to-pdf" },
      { label: "PDF to Excel", href: "/tools/pdf-to-excel" },
      { label: "Merge PDF", href: "/tools/merge-pdf" },
    ],
    faqDescription: "Common questions about ConvertBrio's upcoming Excel to PDF tool.",
    faq: [
      {
        question: "Is Excel to PDF available yet?",
        answer:
          "Not yet — Excel and PowerPoint conversion require a rendering pipeline ConvertBrio is still building. Currently only Word ↔ PDF/JPG/PNG conversion is supported.",
      },
      {
        question: "What formats will this tool support?",
        answer:
          "Once available, it will convert .xls and .xlsx spreadsheet files into print-ready PDF documents.",
      },
      {
        question: "Can I convert other document types today?",
        answer:
          "Yes — Word to PDF, PDF to Word, Word to JPG, and Word to PNG are all live now and cover common document conversion needs while spreadsheet support is being built.",
      },
    ],
  },

  "pdf-to-excel": {
    title: "PDF to Excel Converter: Coming Soon to ConvertBrio",
    intro:
      "Pulling tabular data out of a PDF and into an editable spreadsheet usually means manually retyping numbers — a slow, error-prone process. ConvertBrio is building a PDF to Excel tool that will detect tables inside a PDF and convert them directly into an editable spreadsheet.",
    sections: [
      {
        heading: "What This Tool Will Do",
        body: "PDF to Excel will scan your document for tabular data — rows and columns of numbers, invoice line items, financial statements — and reconstruct it as an .xlsx file you can open, filter, and recalculate directly in Excel or Google Sheets.",
      },
      {
        heading: "Why It's Not Live Yet",
        body: "Reliably detecting and reconstructing table structure from a PDF is technically demanding, especially across the wide variety of layouts PDFs can contain. This is part of the same Excel/PowerPoint conversion pipeline ConvertBrio is currently developing, alongside Excel to PDF and PowerPoint to PDF.",
      },
      {
        heading: "What's Available Right Now",
        body: "In the meantime, ConvertBrio's PDF to Word tool can extract general text content from PDFs with a text layer, and PDF to JPG or PDF to PNG can export table pages as images for reference. Full spreadsheet reconstruction is coming with this tool's launch.",
      },
    ],
    relatedTools: [
      { label: "PDF to Word", href: "/tools/pdf-to-word" },
      { label: "Excel to PDF", href: "/tools/excel-to-pdf" },
      { label: "PDF to JPG", href: "/tools/pdf-to-jpg" },
    ],
    faqDescription: "Common questions about ConvertBrio's upcoming PDF to Excel tool.",
    faq: [
      {
        question: "Is PDF to Excel available yet?",
        answer:
          "Not yet — this tool needs a dedicated table-detection pipeline that ConvertBrio is currently building as part of its Excel/PowerPoint conversion support.",
      },
      {
        question: "What kind of PDFs will this tool work best with?",
        answer:
          "Once live, it will be aimed at PDFs containing tabular data, such as financial statements, invoices, and reports with rows and columns of numbers.",
      },
      {
        question: "Can I extract text from a PDF today?",
        answer:
          "Yes — ConvertBrio's PDF to Word tool extracts general text content from PDFs that already contain a text layer, which works today while dedicated table extraction is being built.",
      },
    ],
  },

  "powerpoint-to-pdf": {
    title: "PowerPoint to PDF Converter: Coming Soon to ConvertBrio",
    intro:
      "Sharing a presentation with someone who doesn't have PowerPoint, or locking in a final version before it goes out for review, usually means converting it to PDF first. ConvertBrio is building PowerPoint to PDF support so you'll be able to do that conversion directly in your browser.",
    sections: [
      {
        heading: "What This Tool Will Do",
        body: "PowerPoint to PDF will convert .ppt and .pptx presentations into a fixed-layout PDF that preserves slide design, fonts, and images, so recipients can view it exactly as designed without needing PowerPoint installed.",
      },
      {
        heading: "Why It's Not Live Yet",
        body: "Presentation files have their own layout and rendering logic, distinct from the Word document pipeline ConvertBrio currently supports. Building reliable PowerPoint rendering is part of the broader Excel/PowerPoint conversion work currently underway.",
      },
      {
        heading: "What's Available Right Now",
        body: "While this tool is being built, ConvertBrio's Word to PDF and PDF to Word tools handle document-based conversions today. Check back as presentation support becomes available.",
      },
    ],
    relatedTools: [
      { label: "Word to PDF", href: "/tools/word-to-pdf" },
      { label: "Merge PDF", href: "/tools/merge-pdf" },
      { label: "Compress PDF", href: "/tools/compress-pdf" },
    ],
    faqDescription: "Common questions about ConvertBrio's upcoming PowerPoint to PDF tool.",
    faq: [
      {
        question: "Is PowerPoint to PDF available yet?",
        answer:
          "Not yet — presentation conversion needs its own rendering pipeline, which is part of the Excel/PowerPoint support ConvertBrio is currently building. Only Word ↔ PDF/JPG/PNG conversion is available today.",
      },
      {
        question: "Will slide design and formatting be preserved?",
        answer:
          "That's the goal — the converted PDF is intended to preserve slide layout, fonts, and images so the presentation looks the same as it does in PowerPoint.",
      },
      {
        question: "What can I convert today instead?",
        answer:
          "Word to PDF and PDF to Word are live now for document conversions while presentation support is being developed.",
      },
    ],
  },

  "compress-word": {
    title: "Compress Word Document: Coming Soon to ConvertBrio",
    intro:
      "Word documents packed with high-resolution images or embedded media can balloon in file size, making them slow to email or upload. ConvertBrio is building a Compress Word tool that will shrink a DOCX file's size by optimizing its embedded content.",
    sections: [
      {
        heading: "What This Tool Will Do",
        body: "Compress Word will re-encode images and other embedded media inside a .doc or .docx file to reduce overall file size, while leaving the document's text and formatting untouched.",
      },
      {
        heading: "Why It's Not Live Yet",
        body: "This feature is part of ConvertBrio's broader Excel/PowerPoint and Office-document tooling that's currently in development, since it shares infrastructure with the other document tools still being built.",
      },
      {
        heading: "What You Can Do Right Now",
        body: "In the meantime, if your large Word document is destined for PDF, converting it with Word to PDF and then running the result through Compress PDF can meaningfully shrink the final file size today.",
      },
    ],
    relatedTools: [
      { label: "Word to PDF", href: "/tools/word-to-pdf" },
      { label: "Compress PDF", href: "/tools/compress-pdf" },
      { label: "Compress Image", href: "/tools/compress-image" },
    ],
    faqDescription: "Common questions about ConvertBrio's upcoming Compress Word tool.",
    faq: [
      {
        question: "Is Compress Word available yet?",
        answer:
          "Not yet — it's part of the Office-document tooling ConvertBrio is currently building, alongside Excel and PowerPoint conversion.",
      },
      {
        question: "What will this tool do once it launches?",
        answer:
          "It will reduce the file size of a Word document by optimizing embedded images and media, while keeping the text and formatting unchanged.",
      },
      {
        question: "How can I shrink a large Word document today?",
        answer:
          "Convert it to PDF with Word to PDF, then compress the resulting file with Compress PDF — a practical workaround while Compress Word is being built.",
      },
    ],
  },

  "compress-powerpoint": {
    title: "Compress PowerPoint: Coming Soon to ConvertBrio",
    intro:
      "Presentations full of high-resolution images, embedded video thumbnails, or large graphics can quickly become too large to email. ConvertBrio is building a Compress PowerPoint tool that will reduce a presentation's file size without altering its slide content.",
    sections: [
      {
        heading: "What This Tool Will Do",
        body: "Compress PowerPoint will optimize the images and embedded media inside a .ppt or .pptx file to shrink overall file size, while keeping slide layout, text, and design intact.",
      },
      {
        heading: "Why It's Not Live Yet",
        body: "Like Excel and PowerPoint conversion, this feature depends on presentation-file tooling that ConvertBrio is currently developing as part of its broader Office-document support.",
      },
      {
        heading: "What You Can Do Right Now",
        body: "Until this tool launches, converting your presentation to PDF (once PowerPoint to PDF is available) and compressing the resulting file with Compress PDF will offer a similar reduction in shareable file size.",
      },
    ],
    relatedTools: [
      { label: "PowerPoint to PDF", href: "/tools/powerpoint-to-pdf" },
      { label: "Compress PDF", href: "/tools/compress-pdf" },
      { label: "Compress Image", href: "/tools/compress-image" },
    ],
    faqDescription: "Common questions about ConvertBrio's upcoming Compress PowerPoint tool.",
    faq: [
      {
        question: "Is Compress PowerPoint available yet?",
        answer:
          "Not yet — it's part of the Excel/PowerPoint tooling ConvertBrio is currently building.",
      },
      {
        question: "What will this tool do once it's live?",
        answer:
          "It will reduce a PowerPoint presentation's file size by optimizing embedded images and media, without changing the slide design or content.",
      },
      {
        question: "Is there a way to shrink a presentation today?",
        answer:
          "Once PowerPoint to PDF is available, converting to PDF and compressing the result with Compress PDF will offer a similar reduction in file size in the meantime.",
      },
    ],
  },

  "merge-documents": {
    title: "Merge Documents: Coming Soon to ConvertBrio",
    intro:
      "Combining a mix of Word, Excel, and PowerPoint files into a single PDF today usually means converting each one separately and merging them by hand. ConvertBrio is building a Merge Documents tool that will do the whole process in one step.",
    sections: [
      {
        heading: "What This Tool Will Do",
        body: "Merge Documents will accept multiple files across Word, Excel, and PowerPoint formats, convert each into PDF, and combine them into a single ordered document — useful for assembling a report, proposal, or presentation packet made up of pieces created in different Office applications.",
      },
      {
        heading: "Why It's Not Live Yet",
        body: "This tool depends on Excel and PowerPoint conversion support, which ConvertBrio is currently building. Since Merge Documents needs all three document types working reliably, it launches after that underlying support is in place.",
      },
      {
        heading: "What You Can Do Right Now",
        body: "Today, you can convert a Word document to PDF with Word to PDF, then combine multiple PDFs — including ones you already have — using ConvertBrio's Merge PDF tool. Full mixed-format merging arrives once Excel and PowerPoint support ships.",
      },
    ],
    relatedTools: [
      { label: "Merge PDF", href: "/tools/merge-pdf" },
      { label: "Word to PDF", href: "/tools/word-to-pdf" },
      { label: "Excel to PDF", href: "/tools/excel-to-pdf" },
    ],
    faqDescription: "Common questions about ConvertBrio's upcoming Merge Documents tool.",
    faq: [
      {
        question: "Is Merge Documents available yet?",
        answer:
          "Not yet — it depends on Excel and PowerPoint conversion, which ConvertBrio is currently building. Only Word ↔ PDF/JPG/PNG conversion is supported today.",
      },
      {
        question: "What file types will it combine?",
        answer:
          "Once live, it will accept Word, Excel, and PowerPoint files together and combine them into a single ordered PDF document.",
      },
      {
        question: "How can I combine documents today?",
        answer:
          "Convert Word files to PDF individually with Word to PDF, then combine the resulting PDFs using ConvertBrio's Merge PDF tool.",
      },
    ],
  },

  "remove-background": {
    title: "AI Background Remover: Coming Soon to ConvertBrio",
    intro:
      "Cutting a subject out of its background usually requires design software and a fair amount of manual masking. ConvertBrio is building an AI-powered background remover that will do it automatically — upload a photo, and get back the subject on a transparent background in seconds.",
    sections: [
      {
        heading: "What This Tool Will Do",
        body: "Remove Background will use an AI model to detect the main subject of a photo — a person, product, or object — and automatically erase everything else, leaving a clean transparent background ready to drop onto a new backdrop, a website, or a design project.",
      },
      {
        heading: "Why It's Not Live Yet",
        body: "AI image tools like this one require connecting to an external model provider capable of running background segmentation reliably at scale, which ConvertBrio is currently setting up. This is different infrastructure from the deterministic image and PDF tools already live on the site.",
      },
      {
        heading: "What You Can Do Right Now",
        body: "While this launches, ConvertBrio's Crop Image tool can manually remove unwanted areas around a subject, and Image Converter can export the result as a PNG to preserve any transparency you add yourself in an external editor.",
      },
    ],
    relatedTools: [
      { label: "Crop Image", href: "/tools/crop-image" },
      { label: "AI Photo Restoration", href: "/tools/ai-photo-restoration" },
      { label: "Image Converter", href: "/tools/image-converter" },
    ],
    faqDescription: "Common questions about ConvertBrio's upcoming AI background remover.",
    faq: [
      {
        question: "Is the background remover available yet?",
        answer:
          "Not yet — AI tools like this need an external model provider that ConvertBrio hasn't connected yet. It's in development.",
      },
      {
        question: "Will it work on any type of photo?",
        answer:
          "Once live, it's designed to detect common subjects like people, products, and objects. Results for unusual or highly complex images may vary, as with any AI-based segmentation tool.",
      },
      {
        question: "What output format will I get?",
        answer:
          "The result will be a PNG with a transparent background, which is the standard lossless format for images without a solid backdrop.",
      },
    ],
  },

  "ai-image-enhancer": {
    title: "AI Image Enhancer: Coming Soon to ConvertBrio",
    intro:
      "Blurry, low-quality, or poorly-lit photos often can't be fixed with basic editing tools. ConvertBrio is building an AI image enhancer that will automatically sharpen detail, correct clarity, and improve overall photo quality with a single upload.",
    sections: [
      {
        heading: "What This Tool Will Do",
        body: "AI Image Enhancer will use a machine learning model trained to improve photo quality — sharpening soft detail, reducing noise, and boosting overall clarity — without requiring manual adjustment of individual settings.",
      },
      {
        heading: "Why It's Not Live Yet",
        body: "This tool needs an external AI model provider connected and running reliably, which ConvertBrio is currently setting up as part of its broader AI toolset, alongside upscaling, object removal, and photo restoration.",
      },
      {
        heading: "What You Can Do Right Now",
        body: "In the meantime, ConvertBrio's Resize Image and Compress Image tools let you adjust dimensions and file size manually, and Crop Image can help isolate the best part of a photo while AI enhancement is being built.",
      },
    ],
    relatedTools: [
      { label: "AI Upscaler", href: "/tools/ai-upscaler" },
      { label: "AI Photo Restoration", href: "/tools/ai-photo-restoration" },
      { label: "Compress Image", href: "/tools/compress-image" },
    ],
    faqDescription: "Common questions about ConvertBrio's upcoming AI image enhancer.",
    faq: [
      {
        question: "Is the AI image enhancer available yet?",
        answer:
          "Not yet — it needs an external AI model provider that ConvertBrio is currently connecting. It's part of a broader set of AI tools in development.",
      },
      {
        question: "What kind of improvements will it make?",
        answer:
          "Once live, it will focus on sharpening soft detail, reducing noise, and improving overall clarity automatically, without manual adjustment.",
      },
      {
        question: "How is this different from AI Upscaler?",
        answer:
          "AI Image Enhancer focuses on improving quality and clarity at the same resolution, while AI Upscaler is designed specifically to increase an image's resolution.",
      },
    ],
  },

  "ai-upscaler": {
    title: "AI Upscaler: Coming Soon to ConvertBrio",
    intro:
      "Enlarging a small or low-resolution image with ordinary resizing tools usually leaves it blurry and pixelated. ConvertBrio is building an AI upscaler that will use machine learning to intelligently increase image resolution, reconstructing detail rather than just stretching pixels.",
    sections: [
      {
        heading: "What This Tool Will Do",
        body: "AI Upscaler will take a lower-resolution image and generate a larger version with reconstructed detail, producing noticeably sharper results than simple pixel stretching for use cases like printing, enlarging old photos, or preparing images for high-resolution displays.",
      },
      {
        heading: "Why It's Not Live Yet",
        body: "Like ConvertBrio's other AI tools, upscaling requires an external model provider capable of running resolution-enhancement reliably, which is currently being connected as part of the site's broader AI toolset.",
      },
      {
        heading: "What You Can Do Right Now",
        body: "For now, ConvertBrio's Resize Image tool can scale an image to a specific pixel size, though without the intelligent detail reconstruction an AI-based upscaler provides. That capability arrives with this tool's launch.",
      },
    ],
    relatedTools: [
      { label: "Resize Image", href: "/tools/resize-image" },
      { label: "AI Image Enhancer", href: "/tools/ai-image-enhancer" },
      { label: "AI Photo Restoration", href: "/tools/ai-photo-restoration" },
    ],
    faqDescription: "Common questions about ConvertBrio's upcoming AI upscaler.",
    faq: [
      {
        question: "Is the AI upscaler available yet?",
        answer:
          "Not yet — it requires an external AI model provider that ConvertBrio is currently connecting, as part of its broader AI toolset in development.",
      },
      {
        question: "How is AI upscaling different from just resizing an image larger?",
        answer:
          "Ordinary resizing stretches existing pixels, which blurs the result. AI upscaling reconstructs plausible detail using a trained model, typically producing much sharper results at larger sizes.",
      },
      {
        question: "What can I use for resizing images today?",
        answer:
          "ConvertBrio's Resize Image tool lets you scale an image to specific pixel dimensions now, while AI-based upscaling is being developed.",
      },
    ],
  },

  "ai-object-remover": {
    title: "AI Object Remover: Coming Soon to ConvertBrio",
    intro:
      "Removing an unwanted object from a photo — a stray passerby, a power line, a distracting item in the background — normally requires careful manual editing. ConvertBrio is building an AI object remover that will erase unwanted elements automatically and fill in the space naturally.",
    sections: [
      {
        heading: "What This Tool Will Do",
        body: "AI Object Remover will let you mark an unwanted object in a photo, and an AI model will remove it while intelligently reconstructing the background behind it, avoiding the obvious patchwork look manual editing can leave behind.",
      },
      {
        heading: "Why It's Not Live Yet",
        body: "This capability requires an external AI model provider that ConvertBrio is currently connecting, as part of the same AI toolset that includes background removal, upscaling, and photo restoration.",
      },
      {
        heading: "What You Can Do Right Now",
        body: "While this tool is being built, ConvertBrio's Crop Image tool can remove unwanted elements near the edge of a photo by cutting them out of frame entirely, which works for some but not all situations.",
      },
    ],
    relatedTools: [
      { label: "Crop Image", href: "/tools/crop-image" },
      { label: "Remove Background", href: "/tools/remove-background" },
      { label: "AI Photo Restoration", href: "/tools/ai-photo-restoration" },
    ],
    faqDescription: "Common questions about ConvertBrio's upcoming AI object remover.",
    faq: [
      {
        question: "Is the AI object remover available yet?",
        answer:
          "Not yet — it needs an external AI model provider that ConvertBrio is currently connecting as part of its broader AI toolset.",
      },
      {
        question: "Will it work for any object in a photo?",
        answer:
          "Results depend on the complexity of the surrounding background — simpler backgrounds are typically easier for an AI model to reconstruct convincingly than busy or highly detailed ones.",
      },
      {
        question: "Is there a workaround until this tool launches?",
        answer:
          "If the unwanted object is near the edge of the photo, ConvertBrio's Crop Image tool can cut it out of frame entirely as a partial workaround.",
      },
    ],
  },

  "ai-photo-restoration": {
    title: "AI Photo Restoration: Coming Soon to ConvertBrio",
    intro:
      "Old, damaged, or faded photographs often carry scratches, discoloration, and lost detail that ordinary editing can't fully repair. ConvertBrio is building an AI photo restoration tool that will use machine learning to repair and revive old photos automatically.",
    sections: [
      {
        heading: "What This Tool Will Do",
        body: "AI Photo Restoration will analyze a damaged or faded photo and repair scratches, discoloration, and lost detail using a model trained specifically for photo restoration, giving old family photos and archival images a second life without manual retouching.",
      },
      {
        heading: "Why It's Not Live Yet",
        body: "This tool requires an external AI model provider capable of running restoration reliably, which ConvertBrio is currently connecting as part of its broader AI toolset alongside upscaling, enhancement, and background removal.",
      },
      {
        heading: "What You Can Do Right Now",
        body: "In the meantime, ConvertBrio's Image Converter and Compress Image tools can help prepare scanned photos for storage or sharing, even though automated restoration isn't available yet.",
      },
    ],
    relatedTools: [
      { label: "AI Image Enhancer", href: "/tools/ai-image-enhancer" },
      { label: "AI Upscaler", href: "/tools/ai-upscaler" },
      { label: "Image Converter", href: "/tools/image-converter" },
    ],
    faqDescription: "Common questions about ConvertBrio's upcoming AI photo restoration tool.",
    faq: [
      {
        question: "Is AI photo restoration available yet?",
        answer:
          "Not yet — it needs an external AI model provider that ConvertBrio is currently connecting, as part of its broader AI toolset in development.",
      },
      {
        question: "What kind of damage will it be able to fix?",
        answer:
          "Once live, it's intended to address common issues in old photographs, including scratches, discoloration, fading, and general loss of detail.",
      },
      {
        question: "Can I prepare scanned photos today while I wait?",
        answer:
          "Yes — ConvertBrio's Image Converter and Compress Image tools can help you get scanned photos into a usable format and size now, ahead of automated restoration launching.",
      },
    ],
  },
};
