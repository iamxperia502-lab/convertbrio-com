import type { FaqItem } from "./faq";
import { newToolContent } from "./toolContentNew";

export interface ToolContentTable {
  caption?: string;
  headers: string[];
  rows: string[][];
}

export interface ToolContentSection {
  heading: string;
  /** A single paragraph, or several. */
  body: string | string[];
  /** Optional bulleted list rendered after the body. */
  list?: string[];
  /** Optional comparison table rendered after the body and list. */
  table?: ToolContentTable;
}

export interface HowToStep {
  step: string;
  detail?: string;
}

export interface RelatedTool {
  label: string;
  href: string;
}

export interface ComingSoonGuide {
  /** Heading for the callout shown in place of the upload form. */
  title: string;
  /** One or more sentences explaining the working alternative. */
  intro: string | string[];
  /** Primary action link to the tool that does the job today. */
  cta: { label: string; href: string };
}

export interface ToolContentEntry {
  title: string;
  intro: string | string[];
  /** Optional numbered "how to use this tool" steps; also emitted as HowTo schema. */
  howTo?: HowToStep[];
  /**
   * For coming-soon tools only: a callout describing how to accomplish the
   * task with tools that already work. Its presence makes the page render
   * as an indexable guide rather than a bare "Coming soon" stub.
   */
  comingSoonGuide?: ComingSoonGuide;
  sections: ToolContentSection[];
  relatedTools?: RelatedTool[];
  faqDescription: string;
  faq: FaqItem[];
}

export const toolContent: Record<string, ToolContentEntry> = {
  "image-converter": {
    title: "Image Converter: Convert Between Any Image Format Online",
    intro: [
      "ConvertBrio's image converter moves a photo, graphic, or screenshot between JPG, PNG, WEBP, AVIF, HEIC, and GIF in a single step, right inside your browser. There's nothing to install and no account to create: upload a file, choose the format you need, and download the result in seconds. It's the tool to reach for whenever an image won't open where you need it to, or whenever a project calls for a different format than the one you were handed.",
      "The most common reason people convert an image is compatibility: an iPhone HEIC photo that a Windows PC won't preview, a WEBP saved from a website that a design app rejects, or an AVIF that an older email client can't display. The second reason is optimization: swapping a heavy PNG photo for a JPG or WEBP that loads faster on a web page. This converter handles both, and it keeps the original resolution and color intact so the only thing that changes is the container.",
    ],
    howTo: [
      {
        step: "Upload your image",
        detail:
          "Drag a JPG, PNG, WEBP, AVIF, HEIC, or GIF file into the box, or click to browse. Files up to 100 MB are accepted and nothing is sent anywhere until you start the conversion.",
      },
      {
        step: "Choose the output format",
        detail:
          "Pick JPG, PNG, WEBP, AVIF, or GIF from the dropdown. If you're unsure, JPG suits photos and PNG suits graphics with transparency or sharp text.",
      },
      {
        step: "Convert and download",
        detail:
          "Click Convert. ConvertBrio decodes the original and re-encodes it in the format you picked, then the file downloads automatically, usually within a few seconds.",
      },
    ],
    sections: [
      {
        heading: "Supported formats",
        body: "ConvertBrio reads JPG, PNG, WEBP, AVIF, HEIC, and GIF files and can export to JPG, PNG, WEBP, AVIF, or GIF. That covers the everyday formats used in photography and web design, the newer high-efficiency formats used by modern cameras and browsers, and Apple's default photo format, so you're not stuck when a file arrives in something your software doesn't recognize.",
        list: [
          "JPG (JPEG): universal support, small files, no transparency; best for photographs",
          "PNG: lossless, supports transparency; best for logos, icons, screenshots, and line art",
          "WEBP: Google's web format, roughly 25–35% smaller than JPG at matching quality, supports transparency and animation",
          "AVIF: AV1-based, often 50% smaller than JPG; the most efficient widely-supported format today",
          "HEIC (HEIF): Apple's default camera format; excellent compression but limited support outside Apple devices",
          "GIF: 256-colour palette, supports simple animation; largely superseded by WEBP for everything except legacy use",
        ],
      },
      {
        heading: "Choosing the right output format",
        body: "There's no single best image format: the right choice depends on where the file is going. The table below covers the decision for the most common situations.",
        table: {
          caption: "Which format to convert to, by use case",
          headers: ["You need to…", "Convert to", "Why"],
          rows: [
            ["Attach a photo to email or a form", "JPG", "Opens everywhere, small file size, no compatibility risk"],
            ["Keep a transparent background", "PNG or WEBP", "JPG and older GIF flatten transparency onto a solid colour"],
            ["Speed up images on your own website", "WEBP or AVIF", "Much smaller than JPG/PNG at the same visual quality"],
            ["Edit the image repeatedly in an editor", "PNG", "Lossless, so re-saving doesn't accumulate compression damage"],
            ["Open an iPhone photo on Windows", "JPG", "HEIC support on Windows is inconsistent; JPG is guaranteed"],
            ["Upload to a site that rejects WEBP or AVIF", "JPG or PNG", "The two formats every upload form accepts"],
          ],
        },
      },
      {
        heading: "How the conversion works",
        body: [
          "ConvertBrio decodes your original file into raw pixels on its servers, then re-encodes those pixels using the target format's compression. Resolution, aspect ratio, and colour are carried across unchanged: the converter never resizes or recompresses beyond what the destination format requires.",
          "Converting between two lossless formats (for example PNG to a lossless WEBP) preserves every pixel. Converting to a lossy format (JPG, or lossy WEBP/AVIF) applies compression once, at a sensible default quality where the difference is not visible at normal viewing size. If you need direct control over that trade-off, use the Compress Image tool instead, which exposes a quality slider and a target-file-size mode.",
        ],
      },
      {
        heading: "What happens to transparency and animation",
        body: "Transparency is preserved when both the source and target formats support an alpha channel (PNG, WEBP, AVIF). Converting a transparent image to JPG fills the see-through areas with white, because JPG has no alpha channel. Animated GIFs convert to a single still frame unless you export to animated WEBP; there is no frame-by-frame animation editing in this tool.",
      },
      {
        heading: "Privacy and file limits",
        body: "Every upload is encrypted in transit over HTTPS. Your original file is deleted right after it is read for conversion. The converted result is deleted by a daily cleanup, typically within about 24 hours. Files are processed on our hosting providers' servers (Vercel and Supabase), automatically, with no human review. Files up to 100 MB are supported, free, with no account and no watermark.",
      },
    ],
    relatedTools: [
      { label: "HEIC to JPG", href: "/tools/heic-to-jpg" },
      { label: "Compress Image", href: "/tools/compress-image" },
      { label: "Resize Image", href: "/tools/resize-image" },
      { label: "Image to PDF", href: "/tools/image-to-pdf" },
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
          "Converting between lossless formats like PNG keeps every pixel intact. Converting to a lossy format like JPG or WEBP applies compression once, but at the default quality the difference is rarely visible to the eye. Use the dedicated Compress Image tool if you want direct control over the quality trade-off.",
      },
      {
        question: "Does converting change the image's dimensions?",
        answer:
          "No. The converter keeps the exact pixel width and height of the original. If you also need to change the size, run the result through the Resize Image or Crop Image tool afterward.",
      },
      {
        question: "Can I convert several images at once?",
        answer:
          "This tool converts one image per upload. To combine multiple images into a single file, use Image to PDF, which accepts several images in one pass.",
      },
      {
        question: "Is there a file size limit?",
        answer:
          "Conversions support images up to 100 MB, free, with no account required.",
      },
      {
        question: "Do you add a watermark?",
        answer:
          "No. The converted file is clean, at full resolution, with no watermark, badge, or metadata added by ConvertBrio.",
      },
    ],
  },

  "heic-to-jpg": {
    title: "HEIC to JPG Converter: Open iPhone Photos Anywhere",
    intro: [
      "iPhones and iPads save photos as HEIC by default: a format that compresses beautifully but refuses to open in a lot of everyday software, from older Windows PCs to certain upload forms and photo editors. ConvertBrio's HEIC to JPG converter fixes that instantly: upload the photo, and it comes back as a standard JPG that opens in any browser, app, or device without a plugin or codec pack.",
      "You don't need to change any settings on your phone or install anything. The conversion runs on our hosting providers' servers, keeps the photo at its original resolution, and preserves the orientation so portrait photos don't come out sideways. The result is a plain JPG you can email, upload to a government or job portal, drop into a document, or open in any photo editor.",
    ],
    howTo: [
      {
        step: "Get the HEIC file onto your device",
        detail:
          "AirDrop, email, or cable-transfer the photo from your iPhone, or download it from iCloud. The file will end in .heic or .heif.",
      },
      {
        step: "Upload it to the converter",
        detail: "Drag the file into the upload box or browse for it. One photo per conversion, up to 100 MB.",
      },
      {
        step: "Click Convert",
        detail:
          "ConvertBrio decodes the HEIC image and re-encodes it as a JPG at full resolution, correcting rotation from the embedded orientation tag.",
      },
      {
        step: "Download the JPG",
        detail: "The converted file downloads automatically and opens in any browser, viewer, email client, or upload form.",
      },
    ],
    sections: [
      {
        heading: "Why HEIC files cause problems",
        body: [
          "HEIC (High Efficiency Image Container) stores a photo at roughly half the size of an equivalent JPG at the same quality, which is why Apple made it the iOS default in 2017. The trade-off is reach: HEIC depends on the HEVC codec, which many websites, older versions of Windows, Android devices, and third-party apps either can't decode or handle inconsistently.",
          "If you've uploaded an iPhone photo to a form and gotten a \"file type not supported\" error, seen a blank thumbnail, or had a colleague say the image won't open, HEIC is almost always the reason. Converting to JPG removes that dependency entirely.",
        ],
      },
      {
        heading: "HEIC vs JPG at a glance",
        body: "Both formats are lossy, but they were designed a quarter-century apart and differ in what they support.",
        table: {
          headers: ["", "HEIC", "JPG"],
          rows: [
            ["File size", "~50% smaller at matching quality", "Larger, but universally understood"],
            ["Compatibility", "Apple devices, newest browsers/OS only", "Every device, browser, app, and form"],
            ["Transparency", "Supported", "Not supported"],
            ["Multiple images / depth data", "Supported (Live Photos, portrait depth)", "Single flat image only"],
            ["Best for", "Storage on Apple devices", "Sharing, uploading, editing anywhere"],
          ],
        },
      },
      {
        heading: "Does converting lose quality?",
        body: "There is one round of re-compression, because HEIC and JPG use different maths, but at ConvertBrio's default JPG quality the difference is not visible at normal viewing size or in a print. The photo's resolution (megapixel count) is unchanged. If you plan to edit the photo heavily afterward, convert to PNG with the Image Converter instead to avoid stacking a second lossy pass later.",
      },
      {
        heading: "Converting several iPhone photos",
        body: "This tool converts one HEIC file per upload. For a batch, the quickest route is to change your iPhone camera to shoot JPG going forward (Settings → Camera → Formats → Most Compatible), and use this converter for the HEIC photos already in your library. To bundle multiple iPhone photos into one file after converting, Image to PDF accepts HEIC directly and combines several images into a single PDF.",
      },
      {
        heading: "Privacy",
        body: "The photo is encrypted in transit. Your original file is deleted right after it is read for conversion. The converted result is deleted by a daily cleanup, typically within about 24 hours. Files are processed on our hosting providers' servers (Vercel and Supabase), automatically, with no human review. Nothing is kept, indexed, or used for any purpose beyond the conversion.",
      },
    ],
    relatedTools: [
      { label: "Image Converter", href: "/tools/image-converter" },
      { label: "Image to PDF", href: "/tools/image-to-pdf" },
      { label: "Compress Image", href: "/tools/compress-image" },
      { label: "Resize Image", href: "/tools/resize-image" },
    ],
    faqDescription: "Common questions about converting iPhone HEIC photos to JPG.",
    faq: [
      {
        question: "Why won't my iPhone photo open on my computer?",
        answer:
          "It's probably saved as HEIC, Apple's default photo format since iOS 11. Many Windows PCs, Android phones, older apps, and websites don't support HEIC. Converting it to JPG with ConvertBrio makes it openable everywhere.",
      },
      {
        question: "Does converting HEIC to JPG lose quality?",
        answer:
          "There's a small amount of re-compression when re-encoding to JPG, since HEIC and JPG use different compression methods, but at ConvertBrio's default quality it's not visible to the eye in normal viewing, and the resolution is unchanged.",
      },
      {
        question: "Will my photo come out rotated or sideways?",
        answer:
          "No. ConvertBrio reads the orientation tag from the HEIC file and bakes the correct rotation into the JPG, so portrait and landscape photos come out the right way up.",
      },
      {
        question: "Can I convert HEIC to PNG instead of JPG?",
        answer:
          "Yes, use the general Image Converter tool and choose PNG as the output format if you need a lossless file, or if you plan to edit the image repeatedly and want to avoid a second lossy compression pass.",
      },
      {
        question: "How do I stop my iPhone from taking HEIC photos?",
        answer:
          "On your iPhone, open Settings → Camera → Formats and choose \"Most Compatible\". New photos will be saved as JPG. Photos already in your library stay HEIC and still need converting.",
      },
      {
        question: "Is HEIF the same as HEIC?",
        answer:
          "Effectively yes for this purpose. HEIF is the container standard; HEIC is Apple's implementation of it with HEVC compression. This tool accepts both .heic and .heif files.",
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
        body: "Convert to PNG whenever you need an alpha (transparency) channel, for example, cutting a logo out of its background, or whenever you're about to edit an image repeatedly and want to avoid the generation loss that comes from re-saving JPGs. PNG is also the safer choice for screenshots, diagrams, and anything with sharp text or hard edges, since JPG's compression can introduce blur and artifacts around fine detail.",
      },
      {
        heading: "How the Conversion Works",
        body: "Upload your JPG and ConvertBrio decodes it and re-encodes it as a PNG, preserving every pixel exactly. Because JPG doesn't store transparency to begin with, the output PNG will have an opaque background unless you remove it separately: the conversion itself is about format and quality, not automatic background removal.",
      },
      {
        heading: "File Size to Expect",
        body: "PNG files are typically larger than the JPG they came from, since PNG doesn't discard data the way JPG's lossy compression does. For photos with a lot of detail or texture, expect the PNG to be several times the size of the original JPG: that's the normal trade-off for lossless quality.",
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
          "PNG uses lossless compression, which preserves every pixel instead of discarding detail the way JPG does. That accuracy comes at the cost of a larger file: it's expected, not a sign of a problem.",
      },
      {
        question: "Is PNG better than JPG?",
        answer:
          "Neither is universally better: PNG is best for graphics, logos, and anything needing transparency or lossless detail, while JPG is better for photos where small file size matters more than pixel-perfect accuracy.",
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
        body: "If page load speed matters, for SEO, mobile users, or just a snappier site, WEBP is one of the easiest wins available. It supports the same quality range as JPG while producing noticeably smaller files, and modern browsers (Chrome, Firefox, Safari, Edge) all render it natively, so there's no compatibility trade-off for most audiences today.",
      },
      {
        heading: "How the Conversion Works",
        body: "Upload your JPG and ConvertBrio converts it to WEBP automatically, keeping the same resolution and applying WEBP's compression algorithm in place of JPG's. The download is ready within seconds and can be dropped directly into a website's image folder or content management system.",
      },
      {
        heading: "When JPG Might Still Be the Better Choice",
        body: "If your image needs to work in software or contexts that don't support WEBP, some older email clients, certain design tools, or print workflows, keep a JPG version on hand as well. For general web use, though, WEBP is the more efficient default.",
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
          "Yes, every major modern browser, including Chrome, Firefox, Safari, and Edge, renders WEBP natively. It's safe to use for general web publishing today.",
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
      "PNG files preserve every pixel, which is great for graphics but often overkill for photos: resulting in files far larger than they need to be. ConvertBrio's PNG to JPG converter compresses your image into a smaller, more shareable JPG, ideal for email attachments, web pages, and anywhere upload size limits matter.",
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
        body: "Converting to JPG discards transparency and applies lossy compression, so it's not the right choice for logos or graphics that need a transparent background. For ordinary photos, the compression is barely noticeable, and the file size reduction is usually substantial, often 50-80% smaller than the original PNG.",
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
          "Usually, yes, even in lossless mode, WEBP's compression is generally more efficient than PNG's, so most images shrink noticeably after conversion.",
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
        body: "PNG's lossless compression keeps files larger than necessary for many use cases. AVIF, built on modern video-codec compression technology, can shrink the same image dramatically, sometimes by 80% or more, while keeping transparency and visual quality intact, which is a major win for site performance.",
      },
      {
        heading: "How the Conversion Works",
        body: "Upload your PNG file and ConvertBrio outputs an AVIF version, preserving transparency and resolution. Conversion runs on our hosting providers' servers and completes in seconds for typical image sizes.",
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
      "WEBP images downloaded from websites don't always open cleanly in older photo viewers, some design tools, or apps that expect a standard format. ConvertBrio's WEBP to JPG converter turns any WEBP file into a JPG that opens everywhere: no compatibility guesswork required.",
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
          "Yes, JPG doesn't support transparency, so any transparent areas in the original WEBP will appear as a solid color in the converted file. Use WEBP to PNG instead if you need to keep transparency.",
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
      "When a WEBP image has a transparent background, a logo, icon, or exported graphic, converting it to JPG isn't an option. ConvertBrio's WEBP to PNG converter preserves that transparency and produces a lossless file that works in design tools, older software, and anywhere PNG is the expected format.",
    sections: [
      {
        heading: "When to Choose PNG Over JPG",
        body: "If your WEBP file has any transparent or semi-transparent pixels, converting to PNG is the right call: it's the only common format among the two that keeps an alpha channel intact. PNG is also the safer choice when you plan to edit the image further, since it won't introduce compression artifacts.",
      },
      {
        heading: "How the Conversion Works",
        body: "Upload the WEBP file and ConvertBrio converts it to a lossless PNG, keeping transparency and resolution exactly as they were. This works whether the WEBP was lossy or lossless to begin with: the output PNG always preserves full detail from the decoded image.",
      },
      {
        heading: "File Size Considerations",
        body: "PNG files are generally larger than WEBP, since WEBP's compression is more efficient. For graphics and icons the difference is usually small; for large photos the PNG can be noticeably bigger, a reasonable trade-off when transparency or lossless quality is the priority.",
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
          "No, PNG is a lossless format, so converting from WEBP to PNG doesn't discard any additional detail beyond what the original WEBP file already contained.",
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
        body: "If you're already using WEBP for web performance, AVIF is worth testing as the next step: it typically compresses better on the same source image, particularly for photos and complex graphics. The difference is most noticeable on larger, detail-heavy images.",
      },
      {
        heading: "How the Conversion Works",
        body: "Upload your WEBP file and ConvertBrio decodes it and re-encodes it as AVIF, preserving transparency if present. The result downloads automatically and can be used anywhere your platform accepts AVIF images.",
      },
      {
        heading: "Things to Check Before Switching",
        body: "AVIF is supported by all current major browsers, but confirm your content management system and any third-party tools in your workflow accept AVIF uploads before replacing WEBP site-wide. For personal projects and modern websites, the switch is usually seamless.",
      },
      {
        heading: "Limits and Privacy",
        body: "Uploads are capped at 100 MB, and conversion happens on the server, not in your browser. Your original file is deleted right after it is read for conversion. The converted result is deleted by a daily cleanup, typically within about 24 hours. Files are processed on our hosting providers' servers (Vercel and Supabase), automatically, with no human review.",
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
          "If your goal is the smallest possible file size and your platform supports AVIF, yes, AVIF often compresses better than WEBP on the same image, especially for photos.",
      },
      {
        question: "Does the conversion keep transparency?",
        answer:
          "Yes, AVIF supports transparency just like WEBP, so any alpha channel in your original file is preserved in the converted image.",
      },
      {
        question: "Can I convert back to WEBP if I need to?",
        answer:
          "Yes, use ConvertBrio's image converter to go from AVIF back to WEBP or any other supported format at any time.",
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
        body: "If an AVIF file won't open in your photo viewer, editing software, or a website's upload form, JPG is the safest fallback: it's supported virtually everywhere, from decades-old software to the newest devices. This is the most common reason people convert away from AVIF.",
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
          "Yes, use the AVIF to PNG converter if you need a lossless file or need to preserve transparency, which JPG can't hold.",
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
        body: "Because PNG doesn't compress as aggressively as AVIF, the converted file will typically be noticeably larger than the source, often several times the size. That trade-off is expected and comes with the benefit of lossless, widely-compatible output.",
      },
      {
        heading: "Limits and Privacy",
        body: "Uploads are capped at 100 MB, and conversion happens on the server, not in your browser. Your original file is deleted right after it is read for conversion. The converted result is deleted by a daily cleanup, typically within about 24 hours. Files are processed on our hosting providers' servers (Vercel and Supabase), automatically, with no human review.",
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
          "Yes, because PNG doesn't apply lossy compression, it's a safer intermediate format than JPG or AVIF when you plan to open a file in an editor and re-save it multiple times.",
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
        body: "If a platform, plugin, or piece of software rejects AVIF uploads but accepts WEBP, converting is the quickest fix: you keep most of AVIF's efficiency benefit while gaining wider compatibility. This is common when working with older content management systems or third-party integrations.",
      },
      {
        heading: "How the Conversion Works",
        body: "Upload your AVIF file and ConvertBrio decodes it and re-encodes it as WEBP, preserving transparency and resolution. The process completes in seconds and the file downloads automatically.",
      },
      {
        heading: "Compression Trade-Offs",
        body: "WEBP files are typically a bit larger than the equivalent AVIF at the same visual quality, since AVIF's compression is generally more advanced. The difference is usually small enough that the compatibility gain is worth it for most use cases.",
      },
      {
        heading: "Limits and Privacy",
        body: "Uploads are capped at 100 MB, and conversion happens on the server, not in your browser. Your original file is deleted right after it is read for conversion. The converted result is deleted by a daily cleanup, typically within about 24 hours. Files are processed on our hosting providers' servers (Vercel and Supabase), automatically, with no human review.",
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
          "Slightly, in most cases, WEBP's compression is a bit less efficient than AVIF's, so expect a modest size increase rather than a dramatic one.",
      },
      {
        question: "Does transparency carry over from AVIF to WEBP?",
        answer:
          "Yes, both formats support alpha channels, so any transparency in your original AVIF file is preserved in the converted WEBP.",
      },
    ],
  },

  "compress-image": {
    title: "Image Compressor: Shrink Images to a Size Limit, With Quality Tradeoffs Explained",
    intro: [
      "Whether you're hitting an upload limit, speeding up a website, or just tired of photos eating up storage, ConvertBrio's image compressor reduces file size at a quality cost you can see and control. Set a quality level, or give the tool a maximum size in kilobytes (1 KB = 1,024 bytes) and it searches for the best quality that lands at or below that ceiling.",
      "That target-size mode is the reason most people land here. Visa portals, job sites, university applications, and government forms routinely cap a photo or document scan at 100 KB, 200 KB, or 50 KB, and rejecting a 4 MB phone photo with no guidance on how to shrink it. Instead of exporting at guessed quality levels until one happens to fit, you type the limit once and download a file that's under it.",
    ],
    howTo: [
      {
        step: "Upload the image",
        detail: "Drag in a JPG, PNG, WEBP, HEIC, or AVIF file, up to 100 MB. HEIC photos from an iPhone are accepted directly.",
      },
      {
        step: "Set a target size, or a quality level",
        detail:
          "Enter the maximum file size you need in KB (for example 100). Leave it blank to use the quality slider instead, where lower values mean smaller files.",
      },
      {
        step: "Compress",
        detail:
          "ConvertBrio re-encodes the image, and in target mode it adjusts quality, then dimensions if quality alone isn't enough, until the file fits under your limit.",
      },
      {
        step: "Download the result",
        detail: "The compressed file downloads automatically. Check it looks acceptable; if it's too soft, raise the target or quality and run it again.",
      },
    ],
    sections: [
      {
        heading: "How image compression works",
        body: [
          "JPG, WEBP, and AVIF are lossy formats: they shrink a file by discarding image data the human eye is least likely to miss: subtle colour gradients, fine texture in busy areas, high-frequency detail. Lowering the quality setting tells the encoder to discard more, which produces a smaller file with progressively more visible softening and blocky artifacts.",
          "PNG is lossless and compresses differently: it can only pack the exact pixels more efficiently, so a photo saved as PNG barely shrinks. If you upload a PNG photo to the compressor and want a real size reduction, converting it to JPG or WEBP first (with the Image Converter) will do far more than any PNG compression can.",
        ],
      },
      {
        heading: "Reducing an image to a size limit (like 100 KB)",
        body: "Enter your limit in the target-size field and ConvertBrio works backward to it: it searches for the highest quality that fits (a binary search between 10% and 95% quality, re-checking the encoded size each time), and only if even 10% quality still overshoots does it reduce the pixel dimensions as well, cutting the width by 15% at a time, up to six times. The result is the best-looking version it found that fits at or under the ceiling, so a 100 KB limit may produce, say, a 99 KB file rather than exactly 100 KB. If even the lowest quality doesn't fit, you'll see the smallest size it reached.",
        list: [
          "Passport / visa photo uploads: often 100 KB or a 10 KB–240 KB range",
          "Government and tax portals: commonly 100 KB or 200 KB per document scan",
          "Job application sites: frequently 50 KB–500 KB for a CV photo or certificate",
          "Forum and marketplace avatars: often capped near 1–2 MB",
        ],
      },
      {
        heading: "How much can you compress before it shows?",
        body: "Most photographs can lose 40–60% of their file size with no difference visible at normal viewing size, because the first data an encoder discards is genuinely hard to see. Past that point, flat areas like skies start to band, and edges around text or fine detail get crunchy. The practical method is to start near the top of the quality range and step down while watching the image, rather than jumping straight to a low number.",
      },
      {
        heading: "Compressing vs resizing",
        body: "Compression keeps the same pixel dimensions and reduces how much data each pixel costs. Resizing reduces the pixel count itself. For a photo that's both physically huge (6000 px wide) and heavy, resizing to the dimensions you actually need, then compressing, gets you a much smaller file than compression alone, with less visible quality loss. Use the Resize Image tool for that first step.",
      },
      {
        heading: "Privacy and limits",
        body: "Every upload is encrypted in transit. Your original file is deleted right after it is read for conversion. The converted result is deleted by a daily cleanup, typically within about 24 hours. Files are processed on our hosting providers' servers (Vercel and Supabase), automatically, with no human review. This tool compresses one image per upload, up to 100 MB, free, with no account and no watermark.",
      },
    ],
    relatedTools: [
      { label: "Resize Image", href: "/tools/resize-image" },
      { label: "Compress PDF", href: "/tools/compress-pdf" },
      { label: "Image Converter", href: "/tools/image-converter" },
      { label: "Passport Photo Maker", href: "/tools/passport-photo-maker" },
    ],
    faqDescription: "Common questions about compressing and reducing image file size.",
    faq: [
      {
        question: "How do I reduce an image to under 100 KB?",
        answer:
          "Upload the image to ConvertBrio's compressor and set the target size to 100 KB. The tool lowers quality, and dimensions if needed, until the file fits that limit, which is ideal for forms and ID uploads with strict size caps.",
      },
      {
        question: "Will compressing my image make it look worse?",
        answer:
          "At moderate compression, most people can't tell the difference. Quality loss becomes noticeable only at aggressive settings, so it's worth checking the result rather than compressing to the smallest possible size by default. If a strict target forces heavy compression, resizing the image smaller first will help it look better at the same file size.",
      },
      {
        question: "My PNG barely got smaller, why?",
        answer:
          "PNG is lossless, so there's little room to compress a photograph stored in it. Convert the PNG to JPG or WEBP with the Image Converter first; that alone often cuts the size by 70% or more.",
      },
      {
        question: "Does the compressor keep the image's dimensions?",
        answer:
          "Yes, unless you use target-size mode and the file still won't fit after maximum quality reduction, in that case it also scales the dimensions down as a last resort to meet your limit.",
      },
      {
        question: "Can I compress multiple images at once?",
        answer:
          "Compressing one image per upload is free with no account required. This tool doesn't currently batch-process multiple images in a single pass.",
      },
      {
        question: "What formats can I compress?",
        answer:
          "JPG, PNG, WEBP, HEIC/HEIF, and AVIF. The output is returned in a web-friendly format suited to the smallest size at your chosen quality.",
      },
    ],
  },

  "resize-image": {
    title: "How do I reduce the pixel size of a photo?",
    intro: [
      "Enter the largest width and height you want, in pixels, and ConvertBrio scales the photo down to fit inside them. Pixel size is the number of pixels across and down an image (for example 4000 × 3000). Reducing it makes the picture smaller on screen and also cuts its file size, with no design software required.",
      "The tool keeps the photo's proportions, so it can't stretch or squash the picture, and it only makes images smaller: it will not enlarge a photo past its original size. If you need an exact width and height that differ from the photo's shape, or a maximum size in KB, use the Photo & Signature Resizer. To enlarge a small photo, use the AI Upscaler.",
    ],
    howTo: [
      {
        step: "Upload your image",
        detail: "JPG, PNG, WEBP, HEIC, AVIF, or GIF, up to 100 MB.",
      },
      {
        step: "Enter a width, a height, or both",
        detail:
          "Type the pixel size you want. You can fill in just one: leave the other blank and it is worked out from the photo's proportions. If you fill in both, the photo is scaled to fit inside that box.",
      },
      {
        step: "Resize and download",
        detail: "ConvertBrio scales the image down and the file downloads automatically.",
      },
      {
        step: "Check the result",
        detail:
          "Open the downloaded file and look at its dimensions (right-click > Properties on Windows, Get Info on Mac). Zoom to 100% to confirm it still looks sharp.",
      },
    ],
    sections: [
      {
        heading: "Common dimensions people resize for",
        body: "If you're not sure what size you need, these are the specifications people most often come here for.",
        table: {
          headers: ["Use", "Typical size (px)"],
          rows: [
            ["Instagram post (square)", "1080 × 1080"],
            ["Instagram story / reel", "1080 × 1920"],
            ["Facebook / LinkedIn shared image", "1200 × 630"],
            ["YouTube thumbnail", "1280 × 720"],
            ["LinkedIn profile photo", "400 × 400 (min)"],
            ["Passport photo (2 × 2 in at 300 DPI)", "600 × 600"],
          ],
        },
      },
      {
        heading: "Example: 4000 × 3000 down to 1200 × 900",
        body: "A typical phone photo is 4000 × 3000 pixels (a 4:3 shape). To get it to 1200 pixels wide, enter 1200 in the width box and leave height blank: the height is worked out as 900, giving 1200 × 900. If you enter 1200 × 1200 instead, the photo is scaled to fit inside that square, which gives 1200 × 900 again, not a stretched square. The new file has 9 times fewer pixels, so it is far smaller to store and send.",
      },
      {
        heading: "How do I resize an image without stretching it?",
        body: [
          "Stretching happens when a tool forces a photo into a box with a different shape, so a face or a circle ends up oval. This tool avoids it by keeping the original aspect ratio (the width-to-height proportion): the result fits within the width and height you enter and the leftover dimension is calculated for you.",
          "That means the output may be smaller than the box you typed in one direction. If a form demands an exact shape such as 600 × 600, crop the photo to a square first with the Crop Image tool, then resize it. Cropping removes the edges; resizing alone never does. For exact width and height in one step, with either cropping or white margins, use the Photo & Signature Resizer.",
        ],
        table: {
          headers: ["Starting from 4000 × 3000", "What you get", "Looks right?"],
          rows: [
            ["Width 1200, height blank", "1200 × 900", "Yes: proportions kept"],
            ["Width 1200, height 1200", "1200 × 900", "Yes: fits inside the box, not stretched"],
            ["Crop to a square, then resize to 1200 × 1200", "1200 × 1200", "Yes: edges cropped, nothing distorted"],
            ["Forcing 1200 × 1200 without cropping (other tools)", "1200 × 1200", "No: the picture is squashed"],
          ],
        },
      },
      {
        heading: "Is reducing pixels the same as reducing file size?",
        body: [
          "They are related but not the same. Pixel size is how many pixels the image has. File size is how many bytes it takes up, and it depends on the pixel count and on how strongly the image is compressed. Fewer pixels usually means a smaller file, but halving both dimensions does not exactly quarter the file, because compression and image content also matter.",
          "Choose by goal: to fit a size on a page or a platform's required dimensions, resize. To get under an upload limit in KB or MB, compress, or resize first and then run it through Compress Image for the final squeeze. Resizing first means the compressor doesn't have to work as hard, so quality holds up better. To hit an exact pixel size and a KB limit together, use the Photo & Signature Resizer.",
        ],
      },
      {
        heading: "Troubleshooting",
        list: [
          "The photo didn't get bigger: this tool only reduces size. Use the AI Upscaler to enlarge.",
          "The result isn't the exact size I typed: the photo was scaled to fit inside your box without changing its shape. Crop first, or use the Photo & Signature Resizer for exact dimensions.",
          "The file is still too large in KB: compress it after resizing, or set a target in the Photo & Signature Resizer.",
          "A HEIC photo came back as JPG: HEIC can't be saved by the tool, so it is returned as JPG. A photo from a camera or phone keeps its upright orientation.",
          "The photo looks soft: shrinking a photo a lot and then viewing it enlarged will look soft. Resize to the size you'll actually display it at.",
        ],
        body: "If the result isn't what you expected, check these first.",
      },
      {
        heading: "Privacy and limits",
        body: "Uploads are encrypted in transit. Your original file is deleted right after it is read for conversion. The converted result is deleted by a daily cleanup, typically within about 24 hours. Files are processed on our hosting providers' servers (Vercel and Supabase), automatically, with no human review. One image per upload, up to 100 MB, free, no account.",
      },
    ],
    relatedTools: [
      { label: "Crop Image", href: "/tools/crop-image" },
      { label: "Compress Image", href: "/tools/compress-image" },
      { label: "AI Upscaler", href: "/tools/ai-upscaler" },
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
          "Only if the new width and height don't match the original aspect ratio. To avoid stretching, keep the same width-to-height proportion as your source image, or crop the image to the shape you need first.",
      },
      {
        question: "Does resizing reduce file size too?",
        answer:
          "Yes, fewer pixels means less data to store, so downscaling usually shrinks the file substantially. For the smallest possible result, follow the resize with the Compress Image tool.",
      },
      {
        question: "Can I make a small image bigger without it looking blurry?",
        answer:
          "Not with a plain resize: enlarging spreads existing pixels and softens the image. Use the AI Upscaler instead, which reconstructs detail with a trained model and produces a much sharper enlargement.",
      },
      {
        question: "Will the file format change when I resize?",
        answer:
          "The tool returns the image in a standard web format. If you need a specific output format, run the resized file through the Image Converter afterward.",
      },
    ],
  },

  "crop-image": {
    title: "Image Cropper: Cut an Image Down to the Region You Need",
    intro:
      "Sometimes you don't need to shrink an entire image: you need to remove everything outside a specific area, whether that's cutting out a subject, removing unwanted background, or matching a platform's required aspect ratio. ConvertBrio's crop tool lets you specify an exact region by pixel coordinates and get back just that section.",
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
        body: "This usually happens when a camera or scanner doesn't embed the correct orientation metadata, or when that metadata gets stripped during upload or transfer. The image data itself is unaffected: it just displays in the wrong direction until it's rotated.",
      },
      {
        heading: "Rotating Scanned Documents",
        body: "Scanned pages fed into a scanner sideways or upside down are one of the most common cases for this tool. Rotating the image before further processing, such as converting it to PDF or running OCR, makes sure the final document reads correctly.",
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
          "This is typically caused by missing or incorrect orientation metadata from the camera or scanner that captured it: the image content is fine, it just needs to be rotated to display properly.",
      },
      {
        question: "Can I rotate a scanned document image before converting it to PDF?",
        answer:
          "Yes, rotate the image first with this tool, then use JPG to PDF to combine it into a correctly-oriented PDF document.",
      },
    ],
  },

  "merge-pdf": {
    title: "Merge PDF Online: Combine Multiple PDFs Into One File",
    intro: [
      "Joining scanned pages, invoices, reports, or chapters into a single document usually means opening desktop software or paying for a subscription. ConvertBrio's merge tool does it from your browser with no install: upload multiple PDFs, put them in the order you want, and download one combined file in seconds.",
      "Every page from every file is kept exactly as it is: no re-compression, no quality loss, no watermark. The only change is that separate files become one.",
    ],
    howTo: [
      {
        step: "Upload two or more PDFs",
        detail: "Drag them all into the box at once, or browse and multi-select. Each file can be up to 100 MB.",
      },
      {
        step: "Put them in order",
        detail:
          "The merged document follows the order the files are listed in, so arrange them the way you want the final PDF to read: cover page first, appendices last.",
      },
      {
        step: "Merge and download",
        detail: "Click Convert. ConvertBrio appends each file's pages in sequence and the combined PDF downloads automatically.",
      },
    ],
    sections: [
      {
        heading: "Common reasons to merge PDFs",
        body: "This is one of the most-used PDF operations, usually for one of these:",
        list: [
          "Combining separately-scanned pages into one document",
          "Assembling a multi-part report, contract, or proposal",
          "Bundling several invoices or receipts for a single expense submission",
          "Joining chapters of a manual, book, or course pack",
          "Merging front-and-back scans of double-sided pages into the right order",
          "Attaching a cover letter to a CV as a single file for a job application",
        ],
      },
      {
        heading: "Getting the page order right",
        body: "The merged file's sequence is set entirely by the order of the files you upload, so arrange the list before converting rather than after. If one of your source PDFs has its own pages in the wrong order, fix that first: split it into single pages with Split PDF, then merge everything, including those loose pages, in the sequence you need.",
      },
      {
        heading: "After merging",
        body: "A combined document is often the point where you'll want to add sequential page numbers across the whole thing (use Add Page Numbers on the merged file, not the parts) or bring the size down if the sources were image-heavy (Compress PDF). Doing these on the finished merge means the numbering and compression reflect the final document.",
      },
      {
        heading: "Privacy and limits",
        body: "Files are encrypted in transit. Your original file is deleted right after it is read for conversion. The converted result is deleted by a daily cleanup, typically within about 24 hours. Files are processed on our hosting providers' servers (Vercel and Supabase), automatically, with no human review. Multiple files per merge, each up to 100 MB, free, no account, no watermark.",
      },
    ],
    relatedTools: [
      { label: "Split PDF", href: "/tools/split-pdf" },
      { label: "Compress PDF", href: "/tools/compress-pdf" },
      { label: "Add Page Numbers", href: "/tools/add-page-numbers" },
      { label: "Image to PDF", href: "/tools/image-to-pdf" },
    ],
    faqDescription: "Common questions about merging multiple PDF files into one.",
    faq: [
      {
        question: "How do I merge PDF files online for free?",
        answer:
          "Open ConvertBrio's Merge PDF tool, upload two or more PDFs, arrange them in the order you want, and download the combined file: no account, no software install, no watermark.",
      },
      {
        question: "Can I control the order of pages in the merged PDF?",
        answer:
          "Yes, the files merge in the order they're listed, with each file's pages appearing in sequence. Arrange the files before converting.",
      },
      {
        question: "Does merging reduce the quality of my PDFs?",
        answer:
          "No. Pages are copied across as-is with no re-compression. The merged file is roughly the combined size of the originals.",
      },
      {
        question: "Can I merge images and PDFs together?",
        answer:
          "Convert the images to PDF first with Image to PDF, then merge that PDF with your others here. Or use Image to PDF alone if everything you're combining is an image.",
      },
      {
        question: "Is there a limit on how many PDFs I can combine?",
        answer:
          "You can merge multiple files in one pass, each up to 100 MB. Very large jobs are best done in a couple of stages.",
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
      {
        heading: "Download Format and Limits",
        body: "Because splitting produces one file per page, the result downloads as a single ZIP archive containing every page as its own PDF, ready to extract. Uploads are capped at 100 MB. Your original file is deleted right after it is read for conversion. The converted result is deleted by a daily cleanup, typically within about 24 hours. Files are processed on our hosting providers' servers (Vercel and Supabase), automatically, with no human review.",
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
          "Upload your PDF to ConvertBrio's Split PDF tool, and it separates every page into its own individual file, bundled together as one ZIP download.",
      },
      {
        question: "Can I extract just one page from a PDF?",
        answer:
          "Yes, splitting breaks the document into individual pages inside a ZIP file, so you can pull out the specific page you need and discard or ignore the rest.",
      },
      {
        question: "Can I put the split pages back together afterward?",
        answer:
          "Yes, use ConvertBrio's Merge PDF tool to recombine any of the resulting pages into a new document in whatever order you need.",
      },
    ],
  },

  "compress-pdf": {
    title: "Compress PDF Online: Reduce PDF File Size for Email and Upload",
    intro: [
      "Large PDFs, especially ones full of scanned pages or high-resolution photos, bounce off email attachment limits, stall on slow uploads, and get rejected by portals that cap document size. ConvertBrio's PDF compressor re-encodes the images embedded in your document at a more efficient quality and resolution, and strips metadata the file doesn't need, so the same pages come back in a smaller file.",
      "It's free, runs in your browser with no signup, and doesn't add a watermark. The compression is lossless for text and vector graphics, those stay perfectly sharp, and lossy only for embedded photos and scans, where a small, usually invisible quality reduction buys a large drop in file size.",
    ],
    howTo: [
      {
        step: "Upload the PDF",
        detail: "Drag your file into the box or browse for it. One PDF per run, up to 100 MB.",
      },
      {
        step: "Click Compress",
        detail:
          "ConvertBrio finds the embedded JPEG images, re-encodes them at a lower quality, downsizes any that are larger than they need to be, and removes unused metadata.",
      },
      {
        step: "Download and check the size",
        detail:
          "The compressed PDF downloads automatically. Open it to confirm the pages still look acceptable, if it's not small enough, see the tips below on scanned documents and splitting.",
      },
    ],
    sections: [
      {
        heading: "How PDF compression works",
        body: [
          "A PDF's size is almost always dominated by one thing: embedded raster images. Text, fonts, and vector drawings are tiny by comparison. So ConvertBrio's compressor focuses where the weight is: it locates the photographic images inside the file, re-encodes them with more efficient JPEG settings, and scales down any image whose resolution is far higher than a screen or printer could use.",
          "Everything that isn't a photo is left untouched: paragraph text stays selectable and razor-sharp, vector logos and charts keep their crisp edges, and the page layout doesn't move. Document metadata that serves no functional purpose is dropped to reclaim a little more space.",
        ],
      },
      {
        heading: "Which PDFs shrink the most",
        body: "The reduction you'll see depends entirely on what's making your file big in the first place.",
        table: {
          headers: ["PDF type", "Typical result"],
          rows: [
            ["Scanned document (photos of pages)", "Large reduction: often 40–70% smaller"],
            ["Report with embedded photos or screenshots", "Moderate reduction, varies with image count"],
            ["Slide deck exported to PDF", "Moderate reduction if slides carry photos"],
            ["Text-only PDF (contract, ebook, invoice)", "Little change: it's already compact"],
            ["PDF whose images are PNG or CMYK", "Limited: those image types are skipped to avoid colour damage"],
          ],
        },
      },
      {
        heading: "How much quality a compressed PDF loses",
        body: "For any PDF that's mostly text, compression is effectively lossless: you lose nothing visible. For scanned or image-heavy PDFs, the images are re-encoded, so there's a real but small quality trade-off. In practice a scanned page compressed with this tool still reads cleanly on screen and prints fine; the difference only shows if you zoom in hard on a photograph. If a document absolutely must keep original image fidelity, compress it and compare the result before deciding.",
      },
      {
        heading: "Getting a PDF under a specific size (100 KB, 500 KB, 2 MB)",
        body: [
          "This tool applies one efficient compression pass rather than iterating to an exact target, so it won't guarantee a precise kilobyte figure. But a few things move the needle when you have a hard limit:",
          "If your PDF is a scanned document, it will usually drop dramatically in one pass, try it first. If it's still over, split it into fewer pages with the Split PDF tool and compress each part, or export the pages you actually need. If the bloat comes from one or two enormous photos, compressing those images separately with Compress Image (which does have an exact-size target) before rebuilding the PDF gives you the tightest control.",
        ],
      },
      {
        heading: "Compress vs split",
        body: "Compression reduces the weight of each page. Splitting reduces the number of pages. If your 30 MB PDF is 300 text pages, compression won't help much: Split PDF into sections is the answer. If it's 10 scanned pages at 3 MB each, compression is exactly the right tool. They're complementary, and for a stubborn file it's normal to use both.",
      },
      {
        heading: "Privacy and limits",
        body: "Your PDF is encrypted in transit. Your original file is deleted right after it is read for conversion. The converted result is deleted by a daily cleanup, typically within about 24 hours. Files are processed on our hosting providers' servers (Vercel and Supabase), automatically, with no human review. One file per run, up to 100 MB, free, no account, no watermark.",
      },
    ],
    relatedTools: [
      { label: "Split PDF", href: "/tools/split-pdf" },
      { label: "Merge PDF", href: "/tools/merge-pdf" },
      { label: "Compress Image", href: "/tools/compress-image" },
      { label: "PDF to Word", href: "/tools/pdf-to-word" },
    ],
    faqDescription: "Common questions about compressing PDF file size online.",
    faq: [
      {
        question: "How do I compress a PDF online for free?",
        answer:
          "Upload your document to ConvertBrio's Compress PDF tool and click Compress. It re-encodes embedded images and removes unnecessary metadata to shrink the file, which downloads automatically: no account, no watermark, no email required.",
      },
      {
        question: "Does compressing a PDF reduce quality?",
        answer:
          "Text and vector content is never degraded: it stays perfectly sharp. Only embedded photos and scans are re-encoded, with a small quality reduction that is usually invisible at normal viewing size. Text-heavy PDFs have little to shrink, so expect only a small size reduction.",
      },
      {
        question: "How do I make a PDF smaller to email it?",
        answer:
          "Run it through this tool once. Most email limits are 20–25 MB; a compressed scanned document or photo-heavy report typically drops well under that. If it's still too large, split it into parts with Split PDF and send them separately.",
      },
      {
        question: "Can I compress a PDF to exactly 100 KB or 300 KB?",
        answer:
          "This tool doesn't target an exact size: it applies one efficient pass. For strict limits, compress a scanned PDF here first, then reduce page count with Split PDF if needed, or compress the largest embedded images separately with Compress Image, which does support an exact KB target.",
      },
      {
        question: "Why didn't my PDF get much smaller?",
        answer:
          "It's probably already compact: a PDF that's mostly text has very little to remove. Files with high-resolution scans or embedded photos see the biggest reductions. PDFs whose images use PNG or CMYK colour are also skipped, to avoid altering colours.",
      },
      {
        question: "Does compressing change the page layout or text?",
        answer:
          "No. Page dimensions, text position, fonts, and selectable text are all preserved exactly. Only the file size changes.",
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
        body: "Upload your PDF, choose a rotation angle, 90, 180, or 270 degrees, and ConvertBrio applies it to every page in the document. The result downloads as a corrected PDF with the same content, just properly oriented.",
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
        body: "This tool removes owner-password restrictions: the kind that lock down what you can do with a file you can already open. It does not attempt to bypass an open (user) password that prevents the PDF from being viewed at all; that requires the actual password from whoever created the file.",
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
          "Unlocking removes owner-level restrictions on printing, copying, or editing from a file you can already open. It doesn't bypass a password required just to view the document: that requires the actual password.",
      },
      {
        question: "Is it legal to unlock a PDF?",
        answer:
          "Removing restrictions from a document you own or have explicit permission to edit is fine. Only use this tool on files you have the legal right to modify.",
      },
      {
        question: "Will unlocking change the content of my PDF?",
        answer:
          "No, the tool only removes the permission restrictions. The text, images, and layout of the document remain exactly the same.",
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
      {
        heading: "Numbering Style and Limits",
        body: "Numbers are stamped bottom-center on every page in a plain sans-serif style, starting at 1: there's currently no option to change position, starting number, or format like \"Page X of Y\". Uploads are capped at 100 MB. Your original file is deleted right after it is read for conversion. The converted result is deleted by a daily cleanup, typically within about 24 hours. Files are processed on our hosting providers' servers (Vercel and Supabase), automatically, with no human review.",
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
        question: "Can I change the position or starting number?",
        answer:
          "Not currently, numbers are always placed bottom-center, starting at 1. If you need a different position, starting number, or a \"Page X of Y\" format, use PDF-editing software for full control.",
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
    intro: [
      "Sometimes you need a PDF page as an image rather than a document: to drop a slide into a deck, post a page to social media, attach it where PDFs aren't accepted, or pull one chart out of a long report. ConvertBrio's PDF to JPG converter renders every page of your file as a separate JPG.",
      "It's free, needs no signup, and adds no watermark. A one-page PDF returns a single JPG; a multi-page PDF returns a set of images, one per page, bundled for download.",
    ],
    howTo: [
      {
        step: "Upload your PDF",
        detail: "Drag it into the box or browse. One file per run, up to 100 MB.",
      },
      {
        step: "Convert",
        detail: "ConvertBrio renders each page to a high-resolution JPG. Longer documents take a little longer because every page is rendered individually.",
      },
      {
        step: "Download the images",
        detail: "A single page downloads as one JPG; multiple pages download together so you get the whole document as images.",
      },
    ],
    sections: [
      {
        heading: "Common uses",
        body: "",
        list: [
          "Embedding a PDF page in a PowerPoint or Google Slides deck",
          "Posting a single page or certificate to social media or a chat app",
          "Uploading document pages to a form that only accepts image files",
          "Pulling a diagram, chart, or figure out of a report to reuse",
          "Creating thumbnail previews of a document",
        ],
      },
      {
        heading: "JPG or PNG?",
        body: "Choose JPG for photographic pages and for the smallest file size: it's the right default for sharing and posting. Choose PDF to PNG instead when the page is mostly text, tables, or line art and you need it razor-sharp, or when you need a transparent background. PNG is lossless, so it avoids the slight softening JPG compression can add around small text.",
      },
      {
        heading: "Turning the images back into a PDF",
        body: "If you exported pages to edit or annotate them and now need a document again, JPG to PDF recombines images into a single PDF. To simply pull specific pages out of a PDF as PDFs (not images), use Split PDF.",
      },
      {
        heading: "Privacy and limits",
        body: "Your PDF is encrypted in transit. Your original file is deleted right after it is read for conversion. The converted result is deleted by a daily cleanup, typically within about 24 hours. Files are processed on our hosting providers' servers (Vercel and Supabase), automatically, with no human review. One file per run, up to 100 MB, free, no account.",
      },
    ],
    relatedTools: [
      { label: "PDF to PNG", href: "/tools/pdf-to-png" },
      { label: "JPG to PDF", href: "/tools/jpg-to-pdf" },
      { label: "Split PDF", href: "/tools/split-pdf" },
      { label: "Compress PDF", href: "/tools/compress-pdf" },
    ],
    faqDescription: "Common questions about converting PDF pages to JPG images.",
    faq: [
      {
        question: "Does PDF to JPG convert every page?",
        answer:
          "Yes, every page of your PDF is rendered as a separate JPG, so a multi-page document produces one image per page.",
      },
      {
        question: "Should I use JPG or PNG for a PDF page with text?",
        answer:
          "PNG keeps text and fine lines sharper because it's lossless; JPG produces a smaller file with slightly softer detail. Use PDF to PNG when crisp text matters most.",
      },
      {
        question: "How do I get just one page as an image?",
        answer:
          "Convert the whole PDF and keep the page you need, or split the PDF first with Split PDF and convert only that page.",
      },
      {
        question: "Can I convert the images back into a PDF later?",
        answer:
          "Yes, use ConvertBrio's JPG to PDF tool to recombine images into a single PDF whenever you need to.",
      },
      {
        question: "Will scanned pages come out readable?",
        answer:
          "Yes, at the resolution ConvertBrio renders. For a scanned document you also want to search or edit, run it through OCR PDF instead.",
      },
    ],
  },

  "pdf-to-png": {
    title: "PDF to PNG Converter: Export Pages With Lossless Detail",
    intro:
      "When you need a PDF page as an image without losing any sharpness, for diagrams, screenshots, or text-heavy pages, PNG is the better export format than JPG. ConvertBrio's PDF to PNG converter turns every page into a lossless image file.",
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
        body: "PNG exports are generally larger than the equivalent JPG, especially for pages with a lot of visual detail. If file size matters more than pixel-perfect sharpness, for example, sharing casually or posting online, PDF to JPG may be the more practical choice.",
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
          "Yes, every page in the PDF is rendered as its own PNG image, so a multi-page document produces one image per page.",
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
    intro: [
      "Whether you're submitting scanned pages, building a simple portfolio, or turning a stack of receipts into one shareable file, ConvertBrio's JPG to PDF tool combines one or more images into a single PDF, in the order you choose, with one image per page.",
      "It's the standard way to turn phone photos of paper documents into something you can actually submit. Most application portals want a PDF, not a folder of JPGs: this bridges that gap in one step, free and with no watermark.",
    ],
    howTo: [
      {
        step: "Photograph or gather your images",
        detail: "For document pages, shoot straight-on in good light so the text is legible. JPG and PNG are both accepted.",
      },
      {
        step: "Upload them all at once",
        detail: "Drag every image into the box or multi-select in the file picker. Combined size up to 100 MB.",
      },
      {
        step: "Set the page order",
        detail: "The PDF follows the order the images are listed in, so arrange them page 1, page 2, and so on.",
      },
      {
        step: "Convert and download",
        detail: "ConvertBrio places each image on its own page and the finished PDF downloads automatically.",
      },
    ],
    sections: [
      {
        heading: "Common uses",
        body: "",
        list: [
          "Submitting a scanned or photographed ID, passport, or certificate",
          "Combining several receipt or invoice photos for one expense claim",
          "Sending a signed, hand-annotated contract back as a single file",
          "Turning a set of screenshots into a shareable document",
          "Assembling a quick photo portfolio or mood board",
        ],
      },
      {
        heading: "Getting a clean document from phone photos",
        body: "For readable results, fill the frame with the page, keep the camera parallel to it to avoid a trapezoid shape, and use even lighting with no harsh shadow across the text. If a photo is rotated, fix it with the Rotate Image tool before converting. If the resulting PDF is too large for an upload limit, common with high-megapixel phone cameras, run it through Compress PDF afterward.",
      },
      {
        heading: "JPG to PDF vs Image to PDF vs Merge PDF",
        body: "JPG to PDF accepts JPG and PNG. If your images are HEIC (iPhone), WEBP, AVIF, or GIF, use Image to PDF instead: it takes all of those directly. If what you're combining is already PDFs rather than images, use Merge PDF.",
      },
      {
        heading: "Privacy and limits",
        body: "Images are encrypted in transit. Your original file is deleted right after it is read for conversion. The converted result is deleted by a daily cleanup, typically within about 24 hours. Files are processed on our hosting providers' servers (Vercel and Supabase), automatically, with no human review. Multiple images per run, 100 MB combined, free, no account, no watermark.",
      },
    ],
    relatedTools: [
      { label: "Image to PDF", href: "/tools/image-to-pdf" },
      { label: "PDF to JPG", href: "/tools/pdf-to-jpg" },
      { label: "Merge PDF", href: "/tools/merge-pdf" },
      { label: "Compress PDF", href: "/tools/compress-pdf" },
    ],
    faqDescription: "Common questions about converting JPG images to a PDF.",
    faq: [
      {
        question: "Can I combine multiple images into one PDF?",
        answer:
          "Yes, upload as many JPG or PNG images as you need in a single pass, and ConvertBrio combines them into one PDF with each image on its own page, in the order you arrange them.",
      },
      {
        question: "How do I convert a photo of a document to PDF?",
        answer:
          "Upload the photo to JPG to PDF and it becomes a one-page PDF you can submit, print, or share. Upload several photos to turn a multi-page document into one PDF.",
      },
      {
        question: "What image formats does this tool accept?",
        answer:
          "JPG and PNG. For HEIC, WEBP, AVIF, or GIF images, use Image to PDF, which accepts those formats directly.",
      },
      {
        question: "My PDF is too big to upload, what do I do?",
        answer:
          "Phone photos are high-resolution, so the PDF can be large. Run it through Compress PDF, which re-encodes the embedded images and usually cuts the size substantially.",
      },
      {
        question: "Can I reorder or rotate pages?",
        answer:
          "Order is set by the sequence you upload the images in. Rotate any sideways image with the Rotate Image tool before converting.",
      },
    ],
  },

  "image-to-pdf": {
    title: "Image to PDF Converter: Combine Photos Into One Document",
    intro:
      "Whether you're submitting scanned pages, building a photo portfolio, or turning receipts into one shareable file, ConvertBrio's Image to PDF tool combines one or more images, JPG, PNG, WEBP, HEIC, AVIF, or GIF, into a single PDF document, in the order you choose.",
    sections: [
      {
        heading: "How to Convert Images to PDF",
        body: "Upload one or more images in any common format, arrange them in the order you want them to appear, and ConvertBrio combines them into a single PDF with one image per page. The result downloads ready to share, print, or submit.",
      },
      {
        heading: "Common Uses",
        body: "This is the standard way to submit scanned ID documents, combine iPhone HEIC photos of receipts or contracts into one file for an application, or turn a set of images into a simple, shareable document without needing design or PDF-editing software.",
      },
      {
        heading: "Combining Many Images at Once",
        body: "You can upload multiple images in a single pass, free, with no account required.",
      },
    ],
    relatedTools: [
      { label: "JPG to PDF", href: "/tools/jpg-to-pdf" },
      { label: "PDF to JPG", href: "/tools/pdf-to-jpg" },
      { label: "Merge PDF", href: "/tools/merge-pdf" },
      { label: "Compress PDF", href: "/tools/compress-pdf" },
    ],
    faqDescription: "Common questions about converting images to PDF.",
    faq: [
      {
        question: "Can I combine multiple images into one PDF?",
        answer:
          "Yes, upload as many images as you need in a single pass, and ConvertBrio combines them into one PDF with each image placed on its own page in the order you arrange them.",
      },
      {
        question: "Does this work with iPhone HEIC photos?",
        answer:
          "Yes, Image to PDF accepts HEIC and HEIF photos directly, along with JPG, PNG, WEBP, AVIF, and GIF, so you don't need to convert your iPhone photos first.",
      },
      {
        question: "What image formats does this tool accept?",
        answer:
          "Image to PDF accepts JPG, PNG, WEBP, HEIC, HEIF, AVIF, and GIF images, all combined into a single PDF.",
      },
    ],
  },

  "ocr-pdf": {
    title: "OCR PDF: Make a Scanned Document Searchable and Editable",
    intro: [
      "A scanned page or a photo of a document is just an image to a computer: you can't search it, copy text from it, or get a scanned document into Word without retyping every line. Optical character recognition (OCR) fixes that: it reads the text inside the image and turns it into real, selectable characters. ConvertBrio's OCR PDF tool runs recognition on every page you upload and hands back a searchable PDF, with the recognised text ready to copy straight into Word, Google Docs, or an email.",
      "If your goal is an editable Word file, use the Scan to Word tool instead: it runs the same kind of recognition but returns a DOCX directly, in seven languages. Use OCR PDF when you want to keep the original look of the pages and add searchable, copyable text behind it. Note that OCR PDF recognises English text only.",
    ],
    howTo: [
      {
        step: "Scan or photograph your document as a PDF",
        detail:
          "Use a scanner, or a phone scanning app (which saves straight to PDF). Flat, well-lit, straight pages give the best recognition.",
      },
      {
        step: "Upload the PDF to OCR PDF",
        detail: "One file per run, up to 100 MB and 100 pages. Every page is processed.",
      },
      {
        step: "Run the recognition",
        detail:
          "ConvertBrio reads each page and builds a text layer behind the original image. Larger documents take longer because every page is recognised individually.",
      },
      {
        step: "Copy the text out, or use Scan to Word for a DOCX",
        detail:
          "Open the returned PDF, select the text you need, and paste it into Word. If you want a Word file built for you, upload the original scan to Scan to Word instead.",
      },
    ],
    sections: [
      {
        heading: "What OCR PDF gives you back",
        body: "A PDF that looks identical to the one you uploaded, same page images, same layout, but with a text layer added behind the image. That means you can search it with Ctrl+F, highlight and copy passages, and select the whole document to move its text somewhere editable. Nothing about the page's appearance changes.",
      },
      {
        heading: "Getting a scanned document into Word",
        body: [
          "There are two routes, depending on how much formatting you need to keep.",
          "The most direct route is the Scan to Word tool: upload the scan and download a DOCX of the recognised text as plain paragraphs. It does not reproduce tables, columns, fonts, or images, so expect to re-apply formatting by hand.",
          "If you would rather keep the page images and just make them searchable, OCR the PDF here, then open it and copy the text you need into a blank Word document. Fast, and works for letters, notes, and single-column pages.",
        ],
      },
      {
        heading: "Why this matters",
        body: "Individuals and businesses accumulate archives that are technically digital but functionally dead: folders of scanned PDFs nobody can search. Running them through OCR turns that pile into something you can actually query, and makes years-old paperwork usable again without re-keying it by hand.",
      },
      {
        heading: "Getting the best accuracy",
        body: "OCR quality follows scan quality. Clean, high-contrast pages scanned at 300 DPI or photographed straight-on and well-lit recognise near-perfectly. Accuracy drops with skew, shadows, low resolution, faint print, or unusual fonts. Handwriting is not reliably recognised. If a result has errors, re-scanning the page more carefully usually helps more than anything else.",
      },
      {
        heading: "Privacy and limits",
        body: "Your document is encrypted in transit. Your original file is deleted right after it is read for conversion. The converted result is deleted by a daily cleanup, typically within about 24 hours. Files are processed on our hosting providers' servers (Vercel and Supabase), automatically, with no human review. One PDF per run, up to 100 MB, free, no account.",
      },
    ],
    relatedTools: [
      { label: "Scan to Word", href: "/tools/scan-to-word" },
      { label: "Image to Text", href: "/tools/image-to-text" },
      { label: "PDF to Word", href: "/tools/pdf-to-word" },
      { label: "Compress PDF", href: "/tools/compress-pdf" },
      { label: "Image to PDF", href: "/tools/image-to-pdf" },
    ],
    faqDescription: "Common questions about running OCR on a PDF and getting scanned text into Word.",
    faq: [
      {
        question: "How do I get a scanned document into Word?",
        answer:
          "Upload the scan to ConvertBrio's Scan to Word tool for an editable DOCX of the recognised text. Alternatively, run the PDF through OCR PDF to add a text layer, then copy the text into a Word document.",
      },
      {
        question: "Can I scan a document into editable text for free?",
        answer:
          "Yes. OCR PDF is free with no account. It recognises the text on each scanned page so you can select, copy, and reuse it, which is the core of turning a scan into editable text.",
      },
      {
        question: "Does OCR change how my document looks?",
        answer:
          "No. The original page image is preserved exactly; the recognised text is added as an invisible layer on top, so visually nothing changes.",
      },
      {
        question: "Will it recognise handwriting?",
        answer:
          "Not reliably. OCR is built for printed and typed text. Handwritten notes may be partially recognised at best.",
      },
      {
        question: "My PDF already has selectable text, do I still need OCR?",
        answer:
          "No. If you can already highlight the text with your cursor, the PDF has a real text layer and you can go straight to PDF to Word, or copy the text out directly.",
      },
      {
        question: "How long does OCR take?",
        answer:
          "It depends on the page count. Each page runs through recognition on its own, so a long document takes proportionally longer.",
      },
      {
        question: "Which languages does OCR PDF recognise?",
        answer:
          "English only. For Portuguese, Spanish, French, German, Italian, or Indonesian text, use Scan to Word, which lets you choose the language.",
      },
      {
        question: "Is there a page limit?",
        answer: "Yes: up to 100 pages per PDF. Split a longer document first with the Split PDF tool.",
      },
    ],
  },

  "word-to-pdf": {
    title: "Word to PDF Converter: Lock In Your Formatting for Sharing",
    intro: [
      "A Word document can look different depending on the fonts, the Word version, or the operating system it's opened with: a real problem when a CV, contract, or report needs to look exactly the same for everyone who receives it. ConvertBrio's Word to PDF converter turns your DOCX into a print-ready PDF that displays identically everywhere and can't be accidentally edited.",
      "It's free, runs in the browser, needs no Microsoft Word installation, and adds no watermark. Upload the file, and the PDF comes back with your layout, fonts, headings, tables, and images intact.",
    ],
    howTo: [
      {
        step: "Save your document as .docx",
        detail: "In Word, use File → Save As and choose Word Document (.docx). Legacy .doc files aren't supported.",
      },
      {
        step: "Upload it",
        detail: "Drag the .docx into the box or browse for it. One file per run, up to 100 MB.",
      },
      {
        step: "Convert and download",
        detail:
          "ConvertBrio lays the document out and renders it to PDF. The file downloads automatically, ready to email, print, or upload.",
      },
    ],
    sections: [
      {
        heading: "Why convert to PDF before sending",
        body: "PDF is the standard for finished documents because a PDF looks the same on every device, with no dependency on the recipient having Word or the right fonts installed. A Word file, by contrast, can reflow paragraphs, shift page breaks, or substitute fonts on someone else's machine, which is exactly what you don't want when a hiring manager opens your CV or a client reads your proposal. Converting locks the layout before it leaves your hands.",
      },
      {
        heading: "What people use it for",
        body: "",
        list: [
          "Finalising a CV and cover letter before submitting to a job portal",
          "Turning a signed contract or agreement into a fixed, tamper-evident file",
          "Preparing a report, proposal, or invoice for print or official distribution",
          "Sending a document to someone who doesn't have Word",
          "Combining with Merge PDF to attach appendices to a main document",
        ],
      },
      {
        heading: "How formatting is handled",
        body: "Text, fonts, headings, lists, tables, inline images, and page size are preserved. Very Word-specific features, custom headers and footers, footnotes, tracked changes, comments, and unusual page setups, may render slightly differently because the document is laid out fresh rather than by Word itself. For a standard business or academic document, the PDF matches what you see in Word.",
      },
      {
        heading: "Privacy and limits",
        body: "Your document is encrypted in transit. Your original file is deleted right after it is read for conversion. The converted result is deleted by a daily cleanup, typically within about 24 hours. Files are processed on our hosting providers' servers (Vercel and Supabase), automatically, with no human review. One .docx per run, up to 100 MB, free, no account, no watermark.",
      },
    ],
    relatedTools: [
      { label: "PDF to Word", href: "/tools/pdf-to-word" },
      { label: "Merge PDF", href: "/tools/merge-pdf" },
      { label: "Add Page Numbers", href: "/tools/add-page-numbers" },
      { label: "Word to JPG", href: "/tools/word-to-jpg" },
    ],
    faqDescription: "Common questions about converting Word documents to PDF.",
    faq: [
      {
        question: "How do I convert a Word document to PDF for free?",
        answer:
          "Upload your .docx to ConvertBrio's Word to PDF tool and it generates a formatted PDF ready to download: no Microsoft Word installation, no account, no watermark.",
      },
      {
        question: "Will my formatting stay the same after converting?",
        answer:
          "Yes for standard documents, layout, fonts, headings, tables, and images are preserved, and unlike a Word file the PDF displays identically on any device. Very Word-specific features like footnotes or custom headers may shift slightly.",
      },
      {
        question: "Does it support .doc files?",
        answer:
          "Only the modern .docx format. Open a legacy .doc in Word and re-save it as .docx (File → Save As), then convert.",
      },
      {
        question: "Can I convert the PDF back to Word later?",
        answer:
          "Yes, use ConvertBrio's PDF to Word tool. Note that round-tripping a fixed-layout PDF back to editable text is approximate for complex layouts.",
      },
      {
        question: "Why convert instead of just sending the Word file?",
        answer:
          "A PDF can't be accidentally edited and looks the same everywhere. A Word document can render differently depending on the recipient's software and installed fonts.",
      },
    ],
  },

  "pdf-to-word": {
    title: "PDF to Word Converter: Turn a PDF Into an Editable Document",
    intro: [
      "Need to edit a PDF's text but don't have the original source file? ConvertBrio's PDF to Word converter rebuilds your PDF as an editable DOCX, paragraphs, bold and italic, headings, simple tables, and images included, that opens in Microsoft Word, Google Docs, or LibreOffice, so you can make changes without retyping the whole document.",
      "It's free, needs no signup, and adds no watermark. Straightforward documents convert cleanly; the more visually complex the original page, the more you'll tidy up afterward: that's inherent to turning a fixed layout back into flowing, editable text.",
    ],
    howTo: [
      {
        step: "Check whether your PDF has real text",
        detail:
          "Open it and try to highlight a sentence with your cursor. If you can, go straight to step 2. If the text is a scanned image, use Scan to Word instead.",
      },
      {
        step: "Upload the PDF",
        detail: "Drag it into the box or browse. One file per run, up to 100 MB.",
      },
      {
        step: "Convert to DOCX",
        detail:
          "ConvertBrio rebuilds the content as a Word document, text, headings, basic tables, and images, and it downloads automatically.",
      },
      {
        step: "Open and edit in Word",
        detail: "The DOCX opens in Word, Google Docs, or any compatible editor. Review the layout and adjust anything the conversion didn't place perfectly.",
      },
    ],
    sections: [
      {
        heading: "What carries over, and what needs cleanup",
        body: "Knowing this up front saves time.",
        table: {
          headers: ["Element", "Conversion result"],
          rows: [
            ["Body paragraphs, bold, italic", "Preserved reliably"],
            ["Headings and basic lists", "Preserved in most documents"],
            ["Simple tables", "Preserved; borders and spacing may need adjusting"],
            ["Inline and full-width images", "Preserved and placed in the flow"],
            ["Multi-column layouts", "Flattened to a single column: expect to re-lay-out"],
            ["Headers, footers, page numbers", "May move into the body or drop"],
            ["Complex nested tables, forms, heavy design", "Approximate at best"],
          ],
        },
      },
      {
        heading: "Converting a scanned document to Word",
        body: "If your PDF is a scan, a photo of each page rather than real text, this converter has no text to extract, so the Word file will contain the page pictures rather than editable words. Use ConvertBrio's Scan to Word tool instead: it reads the printed text with OCR and gives you a DOCX of the recognised text as plain paragraphs. It does not reproduce the original layout, tables, or fonts, so expect to proofread and re-format.",
      },
      {
        heading: "When this tool is the right fit",
        body: "PDF to Word is best when you need to change text in a document whose original source you've lost: revising an old contract or template, updating a report someone else wrote, or lifting several paragraphs out of a PDF into a new document. If you only need to fill in a PDF form or add a signature, a PDF annotator is a better fit; if you just need the page as a picture, use PDF to JPG.",
      },
      {
        heading: "Privacy and limits",
        body: "The PDF is encrypted in transit. Your original file is deleted right after it is read for conversion. The converted result is deleted by a daily cleanup, typically within about 24 hours. Files are processed on our hosting providers' servers (Vercel and Supabase), automatically, with no human review. One document per run, up to 100 MB, free, no account, no watermark.",
      },
    ],
    relatedTools: [
      { label: "Scan to Word", href: "/tools/scan-to-word" },
      { label: "Word to PDF", href: "/tools/word-to-pdf" },
      { label: "OCR PDF", href: "/tools/ocr-pdf" },
      { label: "PDF to JPG", href: "/tools/pdf-to-jpg" },
      { label: "Compress PDF", href: "/tools/compress-pdf" },
    ],
    faqDescription: "Common questions about converting PDF files to editable Word documents.",
    faq: [
      {
        question: "How do I convert a PDF to an editable Word document?",
        answer:
          "Upload your PDF to ConvertBrio's PDF to Word tool, and it rebuilds the content, text, headings, simple tables, and images, into a DOCX file you can open and edit in Microsoft Word or Google Docs.",
      },
      {
        question: "How do I convert a scanned document to Word?",
        answer:
          "Use ConvertBrio's Scan to Word tool, which runs OCR and returns an editable DOCX. A raw scan has no text for this PDF to Word tool to extract.",
      },
      {
        question: "Will complex layouts and images convert correctly?",
        answer:
          "Paragraphs, bold and italic text, headings, simple tables, and images are preserved. Multi-column layouts and heavily designed pages are flattened and will need re-laying-out, since a fixed-layout PDF doesn't map perfectly onto reflowing text.",
      },
      {
        question: "Is the converted file a real .docx?",
        answer:
          "Yes, a standard Word .docx that opens in Microsoft Word, Google Docs, LibreOffice, and Pages.",
      },
      {
        question: "Do you add a watermark?",
        answer:
          "No. The DOCX is clean, with no watermark, badge, or added metadata.",
      },
    ],
  },

  "word-to-jpg": {
    title: "Word to JPG Converter: Export Document Pages as Images",
    intro:
      "Sometimes you need a Word document's page as an image rather than an editable file: for a preview thumbnail, a social post, or embedding in a tool that doesn't handle documents. ConvertBrio's Word to JPG converter exports every page of your DOCX file as a JPG image.",
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
        body: "If the page you're exporting has small text or fine detail you want to keep perfectly crisp, use Word to PNG instead: PNG's lossless format avoids the slight softening that JPG's compression can introduce around text edges.",
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
          "Yes, every page in the document is exported as its own JPG image, so a multi-page file produces a full set of images.",
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
      "When a Word document page needs to become an image without losing any sharpness, for detailed diagrams, tables, or small print, PNG is the better export format than JPG. ConvertBrio's Word to PNG converter renders every page of your DOCX file as a lossless PNG image.",
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
        body: "If file size matters more than pixel-perfect sharpness, for quick sharing or casual previews, Word to JPG produces a smaller file with only a minor difference in visual quality for most documents.",
      },
      {
        heading: "Layout, Downloads, and Limits",
        body: "Your DOCX is first laid out on a standard A4 page, so complex Word-specific formatting like headers/footers, footnotes, or unusual page sizes may render slightly differently than in Word itself. A single-page document downloads as one PNG; multi-page documents download as a ZIP file containing one PNG per page. Uploads are capped at 100 MB. Your original file is deleted right after it is read for conversion. The converted result is deleted by a daily cleanup, typically within about 24 hours. Files are processed on our hosting providers' servers (Vercel and Supabase), automatically, with no human review.",
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
          "Yes, each page in your DOCX file is rendered as a separate PNG image. A single-page document downloads directly as a PNG; multiple pages download together as a ZIP file.",
      },
      {
        question: "Will my document's exact formatting be preserved?",
        answer:
          "Text, headings, lists, tables, and images carry over, but very complex Word-specific layouts (custom headers/footers, unusual page sizes) may render slightly differently since the page is rebuilt on a standard A4 layout rather than rendered by Word itself.",
      },
    ],
  },

  "excel-to-pdf": {
    title: "Excel to PDF Converter: Lock In Your Spreadsheet Layout for Sharing",
    intro:
      "A spreadsheet can look different depending on the column widths, fonts, or software version it's opened with, which is a problem when you need a financial report, invoice, or data table to look exactly the same everywhere. ConvertBrio's Excel to PDF converter turns your spreadsheet into a fixed, print-ready PDF that displays identically no matter what device or software opens it.",
    sections: [
      {
        heading: "How to Convert Excel to PDF",
        body: "Upload your .xls or .xlsx file and ConvertBrio renders each sheet as a page (or set of pages) in a PDF, preserving your data, cell formatting, and merged cells. The converted file downloads automatically and is ready to email, print, or archive.",
      },
      {
        heading: "Why Convert to PDF Before Sharing",
        body: "PDF is the standard format for finished documents because it displays identically across every device and operating system, unlike a spreadsheet, which can reflow or look different depending on what's installed. Converting locks in your layout before a report, invoice, or data table goes out the door, and means the recipient doesn't need Excel installed to view it.",
      },
      {
        heading: "Common Use Cases",
        body: "This tool is commonly used for sharing financial reports and invoices with people who don't have Excel, archiving a fixed snapshot of a spreadsheet before it changes further, and preparing data tables for print or official distribution.",
      },
    ],
    relatedTools: [
      { label: "Word to PDF", href: "/tools/word-to-pdf" },
      { label: "PowerPoint to PDF", href: "/tools/powerpoint-to-pdf" },
      { label: "Merge PDF", href: "/tools/merge-pdf" },
    ],
    faqDescription: "Common questions about converting Excel spreadsheets to PDF.",
    faq: [
      {
        question: "How do I convert an Excel file to PDF?",
        answer:
          "Upload your .xls or .xlsx file to ConvertBrio's Excel to PDF tool, and it generates a formatted PDF version ready to download, no Microsoft Excel installation required.",
      },
      {
        question: "Will my spreadsheet's formatting and formulas stay the same?",
        answer:
          "Cell formatting, merged cells, and layout are preserved. Formulas convert to their last-calculated value rather than staying live formulas, since a PDF is a fixed, static document rather than an editable spreadsheet.",
      },
      {
        question: "What if my spreadsheet has multiple sheets?",
        answer:
          "Each sheet in your workbook is converted and placed on its own page (or set of pages) in the resulting PDF, in the same order they appear in the original file.",
      },
    ],
  },

  "pdf-to-excel": {
    title: "How to Get a Table Out of a PDF and Into Excel (Free)",
    intro: [
      "Financial statements, bank exports, invoices, and reports arrive as PDFs, and the numbers inside them are locked: you can't sort, total, or chart a PDF. Getting that data into Excel or Google Sheets normally means retyping it cell by cell.",
      "A one-click PDF to Excel tool that rebuilds table structure automatically is still in development, because doing it reliably across every PDF layout is genuinely hard. But there are free ways to move the data now, and which one works best depends on whether your PDF has real text or is a scan.",
    ],
    comingSoonGuide: {
      title: "Move the data into a spreadsheet now",
      intro: [
        "If your PDF has selectable text (try highlighting a number with your cursor): open it, select the table, copy, and paste into Excel, then use Data → Text to Columns to split it into cells. For a cleaner structure, convert the PDF to Word first and copy the reconstructed table from there.",
        "If your PDF is a scan: run it through OCR PDF to recognise the text, then copy it out. Expect to fix a few misread digits.",
      ],
      cta: { label: "Convert the PDF to Word first", href: "/tools/pdf-to-word" },
    },
    howTo: [
      {
        step: "Check whether the PDF has real text",
        detail: "Try to highlight a number with your cursor. If you can, it has a text layer. If it's a flat image, it's a scan.",
      },
      {
        step: "Text PDF: convert to Word, then copy the table",
        detail:
          "Run it through PDF to Word. Open the DOCX, select the table it rebuilt, and paste straight into Excel: Word tables paste into cells cleanly.",
      },
      {
        step: "Scanned PDF: OCR it first",
        detail:
          "Run it through OCR PDF, open the result, copy the table text, paste into Excel, and use Data → Text to Columns to separate the values.",
      },
      {
        step: "Clean up in the spreadsheet",
        detail:
          "Fix any merged or misaligned cells, check numbers that OCR may have misread (0/O, 1/l, 5/S), and set column formats.",
      },
    ],
    sections: [
      {
        heading: "Why PDF tables are hard to extract",
        body: "A PDF doesn't store a table as rows and columns: it stores each number as text positioned at fixed coordinates on the page. A person sees a table; software sees scattered text fragments and has to guess where the cell boundaries are. Simple, ruled tables convert well; nested headers, merged cells, multi-line rows, and cells that wrap are where automated extraction breaks down.",
      },
      {
        heading: "Getting the cleanest result",
        body: [
          "Prefer the PDF to Word route over a raw copy-paste: Word does a real attempt at rebuilding the grid, so the paste into Excel lands in proper cells far more often.",
          "For a scanned PDF, scan quality is everything: a straight, high-contrast 300 DPI page OCRs with very few errors; a phone photo at an angle will need more correction.",
          "If the PDF came from a website or a system that can also export CSV or Excel directly, use that export instead: it will always beat extracting from the PDF.",
        ],
      },
      {
        heading: "The automatic tool",
        body: "A dedicated PDF to Excel tool, upload a PDF, get back an .xlsx with the tables reconstructed, is on ConvertBrio's roadmap. Until it ships, the PDF to Word and OCR PDF routes above are the free way to get the data moving.",
      },
    ],
    relatedTools: [
      { label: "PDF to Word", href: "/tools/pdf-to-word" },
      { label: "OCR PDF", href: "/tools/ocr-pdf" },
      { label: "PDF to JPG", href: "/tools/pdf-to-jpg" },
      { label: "Excel to PDF", href: "/tools/excel-to-pdf" },
    ],
    faqDescription: "Common questions about extracting PDF table data into Excel.",
    faq: [
      {
        question: "How do I convert a PDF table to Excel for free?",
        answer:
          "If the PDF has selectable text, convert it to Word with ConvertBrio's PDF to Word tool, then copy the reconstructed table and paste it into Excel. If it's a scan, run OCR PDF first, then copy the text and split it with Text to Columns.",
      },
      {
        question: "Is there a one-click PDF to Excel tool on ConvertBrio?",
        answer:
          "Not yet, automatic table reconstruction is in development. The PDF to Word and OCR PDF routes are the current free options for moving the data into a spreadsheet.",
      },
      {
        question: "Why does my pasted table land all in one column?",
        answer:
          "You pasted plain text rather than a table structure. Select the column, then use Excel's Data → Text to Columns (delimited by space, comma, or tab) to split the values into cells. Converting via PDF to Word first usually avoids this entirely.",
      },
      {
        question: "Can I extract a table from a scanned PDF?",
        answer:
          "Yes, but run it through OCR PDF first to turn the image into recognised text. Then copy it into Excel and double-check any digits the OCR may have misread.",
      },
    ],
  },

  "powerpoint-to-pdf": {
    title: "PowerPoint to PDF Converter: Share Slides Without PowerPoint",
    intro: [
      "Sharing a deck with someone who doesn't have PowerPoint, locking in a final version before review, or shrinking a huge presentation so it will actually email, all of these usually start with converting the .pptx to PDF. ConvertBrio's PowerPoint to PDF converter does it in the browser, free, with one page per slide and no watermark.",
      "A PDF opens on any device, can't be accidentally edited, and, for image-heavy decks, is often far smaller than the original .pptx once you also run it through Compress PDF.",
    ],
    howTo: [
      {
        step: "Save your presentation as .pptx",
        detail: "In PowerPoint, File → Save As → PowerPoint Presentation (.pptx). Legacy .ppt isn't supported.",
      },
      {
        step: "Upload the file",
        detail: "Drag it into the box or browse. One file per run, up to 100 MB.",
      },
      {
        step: "Convert to PDF",
        detail: "ConvertBrio renders each slide as a full page. The PDF downloads automatically.",
      },
      {
        step: "Optionally compress it",
        detail: "If the deck is image-heavy and the PDF is still large, run it through Compress PDF to re-encode the embedded images.",
      },
    ],
    sections: [
      {
        heading: "Why convert to PDF before sharing",
        body: "A .pptx needs PowerPoint or a compatible viewer, and can render differently depending on which fonts the recipient has installed: bullet points shift, text overflows its box, a custom font falls back to something generic. A PDF is fixed: what you send is exactly what they see, on a phone, a Mac, or a locked-down work laptop with no Office.",
      },
      {
        heading: "Making a PowerPoint smaller",
        body: [
          "A dedicated Compress PowerPoint tool that keeps the file editable is still in development. In the meantime, the most reliable way to get a presentation's size down for email is this two-step route:",
          "Convert the .pptx to PDF here, then run the PDF through Compress PDF. That re-encodes every embedded photo and screenshot at an efficient quality and downsizes oversized images, which is where nearly all of a heavy deck's weight lives. The result is a shareable, universally-viewable file, usually a fraction of the original size. The trade-off is that the output is a PDF, not an editable deck.",
        ],
      },
      {
        heading: "What carries over, and what doesn't",
        body: "Text, images, and slide layout convert cleanly. Animations and slide transitions don't exist in a static PDF, so they're dropped. Charts, SmartArt, and embedded tables are rendered as they appear on the slide but aren't interactive. If your deck leans heavily on builds and animation, review the PDF before sending so you know how it reads without motion.",
      },
      {
        heading: "Privacy and limits",
        body: "The file is encrypted in transit. Your original file is deleted right after it is read for conversion. The converted result is deleted by a daily cleanup, typically within about 24 hours. Files are processed on our hosting providers' servers (Vercel and Supabase), automatically, with no human review. One .pptx per run, up to 100 MB, free, no account, no watermark.",
      },
    ],
    relatedTools: [
      { label: "Compress PDF", href: "/tools/compress-pdf" },
      { label: "Word to PDF", href: "/tools/word-to-pdf" },
      { label: "Excel to PDF", href: "/tools/excel-to-pdf" },
      { label: "Merge PDF", href: "/tools/merge-pdf" },
    ],
    faqDescription: "Common questions about converting PowerPoint presentations to PDF.",
    faq: [
      {
        question: "How do I convert a PowerPoint file to PDF for free?",
        answer:
          "Upload your .pptx to ConvertBrio's PowerPoint to PDF tool and it generates a PDF with one page per slide, ready to download: no PowerPoint installation, no account, no watermark.",
      },
      {
        question: "How do I compress a PowerPoint to email it?",
        answer:
          "Convert the .pptx to PDF here, then run that PDF through Compress PDF. It re-encodes the embedded images, which is where most of a large deck's size comes from. The result is much smaller, though it's a PDF rather than an editable presentation.",
      },
      {
        question: "Will animations or transitions carry over?",
        answer:
          "No, a PDF is static, so animations and transitions are dropped. Text, images, charts, and slide layout are preserved as they appear on each slide.",
      },
      {
        question: "Does this work with legacy .ppt files?",
        answer:
          "Only the modern .pptx format. Open the file in PowerPoint and save it as .pptx (File → Save As), then convert.",
      },
      {
        question: "Can I put one PDF page per two slides, or handout layout?",
        answer:
          "Not currently, the converter renders one full slide per page. For handout-style layouts, export from PowerPoint directly.",
      },
    ],
  },

  "compress-word": {
    title: "Compress Word Document Online: Shrink a .docx for Email",
    intro: [
      "A Word document that won't email is almost always carrying full-resolution images. A single phone photo pasted into a report can be 5 MB on its own; a few of them and a .docx that's mostly text is suddenly 30 MB. ConvertBrio's Compress Word tool opens the document, re-encodes the images inside it at an efficient quality and resolution, and returns a smaller .docx that's still fully editable.",
      "It's free, runs in your browser with no signup, and adds no watermark. Text, headings, tables, styles, and layout are untouched: only the embedded photos and screenshots are re-encoded.",
    ],
    howTo: [
      {
        step: "Save the document as .docx",
        detail: "In Word, File → Save As → Word Document (.docx). Legacy .doc isn't supported.",
      },
      {
        step: "Upload it",
        detail: "Drag the .docx into the box or browse for it. One file per run, up to 100 MB.",
      },
      {
        step: "Compress",
        detail:
          "ConvertBrio finds every embedded image, downsizes any that are larger than a page can display, and re-encodes them. Text and vector content are left alone.",
      },
      {
        step: "Download the smaller .docx",
        detail: "Open it in Word to confirm it still looks right, then email or upload it.",
      },
    ],
    sections: [
      {
        heading: "Why Word files get so big",
        body: "Word embeds every image at the resolution it was added: a 24-megapixel photo stays 24 megapixels even when the page shows it two inches wide. Text, by contrast, is tiny. So compressing a Word document is really about re-encoding and downsizing the pictures inside it; nothing else meaningfully moves the number.",
      },
      {
        heading: "What the tool changes, and what it doesn't",
        body: "",
        list: [
          "Re-encoded: embedded JPEG and PNG images, downscaled if larger than ~1800px on the long side",
          "Untouched: all body text, headings, styles, lists, and tables",
          "Untouched: page layout, headers and footers, footnotes, and fields",
          "Untouched: EMF/WMF/SVG vector images and any format the tool doesn't recognise",
          "The file stays a normal, editable .docx",
        ],
      },
      {
        heading: "How much smaller will it get?",
        body: "It depends on how image-heavy the document is. A report full of full-resolution photos and screenshots often drops 40–70%. A mostly-text document with a logo and a couple of small images won't change much. If it's still too large, see the next section.",
      },
      {
        heading: "If it's still too large",
        body: [
          "For a finished document you're sending, Word to PDF followed by Compress PDF usually produces the smallest file, and it can't be accidentally edited.",
          "A document that's large despite few images may be carrying tracked changes and revision history (accept or reject all changes and turn Track Changes off), embedded fonts (File → Options → Save → untick \"Embed fonts in the file\"), or content pasted as full Excel or web objects (paste as picture or plain text instead).",
        ],
      },
      {
        heading: "Privacy and limits",
        body: "Your document is encrypted in transit. Your original file is deleted right after it is read for conversion. The converted result is deleted by a daily cleanup, typically within about 24 hours. Files are processed on our hosting providers' servers (Vercel and Supabase), automatically, with no human review. One .docx per run, up to 100 MB, free, no account, no watermark.",
      },
    ],
    relatedTools: [
      { label: "Word to PDF", href: "/tools/word-to-pdf" },
      { label: "Compress PDF", href: "/tools/compress-pdf" },
      { label: "Compress PowerPoint", href: "/tools/compress-powerpoint" },
      { label: "Compress Image", href: "/tools/compress-image" },
    ],
    faqDescription: "Common questions about reducing a Word document's file size.",
    faq: [
      {
        question: "How do I make a Word document smaller to email it?",
        answer:
          "Upload the .docx to ConvertBrio's Compress Word tool. It re-encodes the embedded images and returns a smaller, still-editable document: free, no signup, no watermark. For the smallest file, convert to PDF and compress that instead.",
      },
      {
        question: "Does the compressed file stay editable?",
        answer:
          "Yes. The output is a normal .docx you can open and edit in Word, Google Docs, or LibreOffice. Only the embedded images are re-encoded.",
      },
      {
        question: "Will compressing change my text or formatting?",
        answer:
          "No. Only the images are affected. Text, headings, tables, styles, and page layout are unchanged.",
      },
      {
        question: "My document is mostly text but still large, why?",
        answer:
          "Check for tracked changes and revision history, embedded fonts, or content pasted as full Excel/web objects. Each can add several megabytes independent of images, and the image compressor won't touch those.",
      },
      {
        question: "Does this work with old .doc files?",
        answer:
          "Only the modern .docx format. Open the .doc in Word and save it as .docx (File → Save As), then compress.",
      },
    ],
  },

  "compress-powerpoint": {
    title: "Compress PowerPoint Online: Shrink a .pptx for Email",
    intro: [
      "PowerPoint files balloon fast: a few phone photos, a couple of screenshots, an exported chart, and a .pptx is suddenly 40 MB and won't go through email. ConvertBrio's Compress PowerPoint tool opens the presentation, re-encodes the images inside it at an efficient quality and resolution, and hands back a smaller .pptx that's still fully editable.",
      "It's free, runs in your browser with no signup, and adds no watermark. Your slide text, layout, animations, charts, and speaker notes are untouched: only the embedded photos and screenshots are re-encoded.",
    ],
    howTo: [
      {
        step: "Save the presentation as .pptx",
        detail: "In PowerPoint, File → Save As → PowerPoint Presentation (.pptx). Legacy .ppt isn't supported.",
      },
      {
        step: "Upload it",
        detail: "Drag the .pptx into the box or browse for it. One file per run, up to 100 MB.",
      },
      {
        step: "Compress",
        detail:
          "ConvertBrio finds every embedded image, downsizes any that are larger than a slide can display, and re-encodes them. Text and vector content are left alone.",
      },
      {
        step: "Download the smaller .pptx",
        detail: "Open it in PowerPoint to confirm the slides still look right, then email or upload it.",
      },
    ],
    sections: [
      {
        heading: "Why PowerPoint files get so large",
        body: "Modern phones shoot 12–48 megapixel photos: several megabytes each. Paste four of those across your slides and the deck carries ~20 MB of image data before a single word of text. PowerPoint keeps each image at the full resolution it was inserted at, even though the slide only ever shows a small version, so the fix is to re-encode those images at a size that matches how they're actually displayed.",
      },
      {
        heading: "What the tool changes, and what it doesn't",
        body: "",
        list: [
          "Re-encoded: embedded JPEG and PNG images, downscaled if larger than ~1800px on the long side",
          "Untouched: all text, fonts, slide layout, animations, transitions, speaker notes",
          "Untouched: charts, tables, SmartArt, and vector shapes",
          "Untouched: EMF/WMF/SVG vector images and any format the tool doesn't recognise",
          "The file stays a normal, editable .pptx: nothing is flattened",
        ],
      },
      {
        heading: "How much smaller will it get?",
        body: "It depends entirely on how image-heavy the deck is. A presentation built around full-resolution photos and screenshots often drops 40–70%. A mostly-text deck with a logo and a couple of small images won't change much: there's little to remove. If the result isn't small enough, the sections below cover deeper options.",
      },
      {
        heading: "For an even smaller file: convert to PDF",
        body: "If the deck is finished and the recipient doesn't need to edit it, PowerPoint to PDF followed by Compress PDF usually produces the smallest file of all, and it opens on any device with no PowerPoint needed. The trade-off is that it's no longer an editable presentation.",
      },
      {
        heading: "Doing it inside PowerPoint instead",
        body: "PowerPoint has its own version of this: select an image → Picture Format → Compress Pictures → untick \"Apply only to this picture\" → choose 150 ppi → tick \"Delete cropped areas of pictures\" → OK, then File → Save As. Useful if you can't upload the file, though it's more clicks than this tool.",
      },
      {
        heading: "Privacy and limits",
        body: "Your presentation is encrypted in transit. Your original file is deleted right after it is read for conversion. The converted result is deleted by a daily cleanup, typically within about 24 hours. Files are processed on our hosting providers' servers (Vercel and Supabase), automatically, with no human review. One .pptx per run, up to 100 MB, free, no account, no watermark.",
      },
    ],
    relatedTools: [
      { label: "PowerPoint to PDF", href: "/tools/powerpoint-to-pdf" },
      { label: "Compress PDF", href: "/tools/compress-pdf" },
      { label: "Compress Word", href: "/tools/compress-word" },
      { label: "Compress Image", href: "/tools/compress-image" },
    ],
    faqDescription: "Common questions about reducing a PowerPoint presentation's file size.",
    faq: [
      {
        question: "How do I compress a PowerPoint to email it?",
        answer:
          "Upload the .pptx to ConvertBrio's Compress PowerPoint tool. It re-encodes the embedded images and returns a smaller, still-editable presentation: free, no signup, no watermark. For the smallest possible file, convert to PDF and compress that instead.",
      },
      {
        question: "Does the compressed file stay editable?",
        answer:
          "Yes. The output is a normal .pptx you can open and edit in PowerPoint. Only the embedded images are re-encoded; text, layout, animations, and notes are unchanged.",
      },
      {
        question: "Will compressing lower the quality of my slides?",
        answer:
          "Text and vector shapes stay perfectly sharp. Photos are re-encoded with a small, usually invisible quality reduction: the difference only shows if you zoom in hard on an image on a large screen.",
      },
      {
        question: "My deck barely got smaller, why?",
        answer:
          "It's probably already lean: a mostly-text presentation has little image data to remove. The biggest reductions come from decks full of full-resolution photos and screenshots.",
      },
      {
        question: "Does this work with .ppt files?",
        answer:
          "Only the modern .pptx format. Open a legacy .ppt in PowerPoint and save it as .pptx (File → Save As), then compress.",
      },
    ],
  },

  "merge-documents": {
    title: "Merge Documents: Combine Word, Excel & PowerPoint Into One PDF",
    intro:
      "Combining a mix of Word, Excel, and PowerPoint files into a single PDF usually means converting each one separately and merging them by hand. ConvertBrio's Merge Documents tool does the whole process in one step.",
    sections: [
      {
        heading: "How to Merge Documents",
        body: "Upload multiple files, any mix of Word, Excel, PowerPoint, and PDF, and ConvertBrio converts each one to PDF and combines them into a single ordered document. The merged PDF downloads automatically, ready to email, print, or archive.",
      },
      {
        heading: "Why Merge Into One PDF",
        body: "A single PDF is easier to share, review, and archive than a scattered set of files in different formats, and it guarantees the recipient sees everything in the intended order without needing Word, Excel, or PowerPoint installed.",
      },
      {
        heading: "Keeping Document Order",
        body: "Files are combined in the order you upload them, so arrange your selection before uploading if the final document needs a specific sequence: for example, a cover page, then a report, then supporting spreadsheet data.",
      },
      {
        heading: "Limits and Privacy",
        body: "You can combine up to 25 files with a combined size of 100 MB in one pass. Each file is converted on the server, not in your browser. Your original file is deleted right after it is read for conversion. The converted result is deleted by a daily cleanup, typically within about 24 hours. Files are processed on our hosting providers' servers (Vercel and Supabase), automatically, with no human review.",
      },
    ],
    relatedTools: [
      { label: "Word to PDF", href: "/tools/word-to-pdf" },
      { label: "Excel to PDF", href: "/tools/excel-to-pdf" },
      { label: "PowerPoint to PDF", href: "/tools/powerpoint-to-pdf" },
    ],
    faqDescription: "Common questions about merging Word, Excel, and PowerPoint files into one PDF.",
    faq: [
      {
        question: "What file types can I combine?",
        answer:
          "Any mix of Word (.docx), Excel (.xlsx, .xls), PowerPoint (.pptx), and PDF files in the same upload: each non-PDF file is converted to PDF first, then all of them are merged together.",
      },
      {
        question: "What order do my files merge in?",
        answer:
          "Files are combined in the order you upload them. Arrange your file selection beforehand if you need a specific sequence in the final document.",
      },
      {
        question: "Does this work with legacy .doc/.ppt/.xls files?",
        answer:
          "Legacy .doc and .ppt formats aren't supported: save those files as .docx or .pptx first. Legacy .xls spreadsheets do work, since ConvertBrio's Excel conversion reads that format natively.",
      },
    ],
  },

  "remove-background": {
    title: "AI Background Remover: Automatic Transparent Cutouts",
    intro: [
      "Cutting a subject out of its background usually means design software and careful manual masking around every strand of hair. ConvertBrio's AI background remover does it automatically: upload a photo, and get the subject back on a transparent background in seconds, as a PNG ready to drop onto any new backdrop.",
      "It's free, needs no account, and adds no watermark. The model is open-source software that runs inside our own processing, so your photo isn't sent to a third-party AI service.",
    ],
    howTo: [
      {
        step: "Upload a photo",
        detail: "JPG, PNG, WEBP, HEIC, or AVIF, up to 100 MB. A clear subject against a reasonably plain background works best.",
      },
      {
        step: "Let the model process it",
        detail: "The AI detects the main subject, a person, product, or object, and erases everything else.",
      },
      {
        step: "Download the transparent PNG",
        detail: "The cutout downloads as a PNG with a transparent background, which you can place on a website, a design, or a solid colour.",
      },
    ],
    sections: [
      {
        heading: "What you can do with the cutout",
        body: "",
        list: [
          "Put a product shot on a clean white or branded background for a store listing",
          "Drop a headshot into a team page, ID card, or slide",
          "Make a sticker, logo, or graphic with no boxy background",
          "Composite a subject into a different scene",
          "Create a passport-style photo, though the Passport Photo Maker does the sizing and white background for you in one step",
        ],
      },
      {
        heading: "Getting the cleanest edges",
        body: "Results are best when the subject stands out clearly from what's behind it: good lighting, a plain-ish background, and reasonable contrast at the edges. The model can struggle with fine flyaway hair, transparent or glassy objects, low-contrast boundaries (a grey coat against a grey wall), and photos with several overlapping people. If an edge comes out rough, a cleaner source photo usually fixes it; for small touch-ups, crop the result with the Crop Image tool.",
      },
      {
        heading: "Privacy",
        body: "The background-removal model is open-source and runs inside our own processing: your photo is never sent to an external AI API or seen by a person. Uploads are capped at 100 MB. Your original file is deleted right after it is read for conversion. The converted result is deleted by a daily cleanup, typically within about 24 hours. Files are processed on our hosting providers' servers (Vercel and Supabase), automatically, with no human review.",
      },
    ],
    relatedTools: [
      { label: "Passport Photo Maker", href: "/tools/passport-photo-maker" },
      { label: "Crop Image", href: "/tools/crop-image" },
      { label: "Image Converter", href: "/tools/image-converter" },
      { label: "Compress Image", href: "/tools/compress-image" },
    ],
    faqDescription: "Common questions about ConvertBrio's AI background remover.",
    faq: [
      {
        question: "Is the background remover free?",
        answer:
          "Yes, no account, no watermark, and no limit on the number of photos. Uploads can be up to 100 MB.",
      },
      {
        question: "What output format will I get?",
        answer:
          "A PNG with a transparent background: the standard lossless format for images without a solid backdrop. Open it in any editor to place it on a new background.",
      },
      {
        question: "Will it work on any type of photo?",
        answer:
          "It's designed for common subjects like people, products, and objects against a reasonably clear background. Cluttered scenes, glassy objects, fine hair, and low-contrast edges are harder and may need a cleaner source photo.",
      },
      {
        question: "Does it work on photos with multiple subjects?",
        answer:
          "It's optimised for one clear main subject. Several overlapping subjects may get less precise edges.",
      },
      {
        question: "Is my photo sent to another company's AI service?",
        answer:
          "No. The model is open-source software that runs inside our own processing, so your photo is never sent to a third-party AI service. The original is deleted right after it is read, and the result by a daily cleanup, typically within about 24 hours.",
      },
    ],
  },

  "passport-photo-maker": {
    title: "Passport Photo Maker: Free Online Passport Size Photo Tool",
    intro: [
      "A compliant passport photo needs a plain white background, the subject centred and correctly sized, and the right physical dimensions: normally a trip to a pharmacy or photo studio. ConvertBrio's passport photo maker does all three automatically: upload a selfie or any clear headshot, and get back a print-ready photo with a clean white background in seconds, in either 2×2 inch or 35×45 mm.",
      "It's free, with no account and no watermark, and every step, face detection and background removal, runs inside our own processing using open-source software, so your photo is never sent to a third-party AI service.",
    ],
    howTo: [
      {
        step: "Take a plain headshot",
        detail:
          "Front-facing, neutral expression, even lighting, head and shoulders in frame with space around them. A phone selfie against a light wall is fine.",
      },
      {
        step: "Upload it",
        detail: "One person per photo, up to 100 MB. Group shots and tightly-cropped close-ups won't process.",
      },
      {
        step: "Choose the photo size",
        detail:
          "Pick 2×2 inch (US-style) or 35×45 mm (the size many other countries use). Check which one your form or authority asks for.",
      },
      {
        step: "Let the tool build the photo",
        detail:
          "ConvertBrio finds your face, crops and centres it to passport proportions for the size you chose, removes the background, and fills it solid white.",
      },
      {
        step: "Download and print",
        detail:
          "2×2 inch gives a 1200×1200 pixel image at 600 DPI; 35×45 mm gives a 413×531 pixel image at 300 DPI. Print at the matching physical size.",
      },
    ],
    sections: [
      {
        heading: "How It Works",
        body: "Upload a photo, and ConvertBrio detects your face, crops and centers it to standard passport proportions, removes the original background, and replaces it with solid white, then outputs the size you chose: 2×2 inch at 600 DPI (1200×1200 pixels) or 35×45 mm at 300 DPI (413×531 pixels). The head is sized and positioned for each format separately, so the 35×45 mm photo is a proper portrait crop, not a trimmed square. There's nothing to position or adjust manually.",
      },
      {
        heading: "Which size to choose",
        body: "The tool offers two sizes. Passport and visa rules differ by country and even by document, so always check the issuing authority's current requirement before you pick one or submit.",
        table: {
          headers: ["Size", "Output", "Commonly used for"],
          rows: [
            ["2 × 2 in (51 × 51 mm)", "1200 × 1200 px at 600 DPI", "United States passports and visas"],
            ["35 × 45 mm", "413 × 531 px at 300 DPI", "UK, Schengen/EU and many other passports and ID documents"],
          ],
        },
      },
      {
        heading: "Getting the Best Result",
        body: "Use a well-lit, front-facing photo with your whole head and shoulders visible and some space around them: a phone selfie against a plain wall works well. Avoid photos where the head is cropped tight at the edges, since the tool needs room above the head and around the shoulders to compute a correctly-proportioned crop. One person per photo; group photos or heavily cropped close-ups won't process correctly.",
      },
      {
        heading: "What This Tool Doesn't Guarantee",
        body: "This produces a professional-looking, correctly-sized and centered photo with a genuine white background: not a certified compliance check. It doesn't verify lighting evenness, expression, glasses glare, or the other criteria an official ICAO or government photo review checks by hand. For a passport application with strict acceptance requirements, treat this as a strong starting point and confirm against your country's current photo requirements before submitting.",
      },
      {
        heading: "Privacy",
        body: "Face detection and background removal both run inside our own processing using open-source models: your photo is never sent to a third-party AI API or reviewed by a person. Your original file is deleted right after it is read for conversion. The converted result is deleted by a daily cleanup, typically within about 24 hours. Files are processed on our hosting providers' servers (Vercel and Supabase), automatically, with no human review.",
      },
    ],
    relatedTools: [
      { label: "Remove Background", href: "/tools/remove-background" },
      { label: "Crop Image", href: "/tools/crop-image" },
      { label: "Resize Image", href: "/tools/resize-image" },
    ],
    faqDescription: "Common questions about ConvertBrio's passport photo maker.",
    faq: [
      {
        question: "What size photo does this produce?",
        answer:
          "Your choice of two sizes: 2×2 inch (1200×1200 pixels at 600 DPI) or 35×45 mm (413×531 pixels at 300 DPI). Check which one your form or authority requires.",
      },
      {
        question: "Is this free?",
        answer:
          "Yes. Uploading a photo and generating a passport-size photo with a white background doesn't require an account or payment.",
      },
      {
        question: "Will this photo definitely be accepted for my passport application?",
        answer:
          "It produces a correctly-sized, centered photo with a genuine white background, which covers the most common rejection reasons. It doesn't run a full official compliance check (lighting, expression, glasses glare), so confirm against your country's current requirements before submitting an official application.",
      },
      {
        question: "What if it says no face was found, or more than one face?",
        answer:
          "Use a clear, front-facing, well-lit photo with exactly one person in frame. Group photos, side profiles, or very dark/blurry images can prevent face detection from working correctly.",
      },
      {
        question: "Why did it say there's not enough space around the face?",
        answer:
          "The tool needs visible margin above the head and around the shoulders in the original photo to compute a correctly-proportioned crop. If your photo is already tightly cropped to the face, take a new one from a bit further back.",
      },
    ],
  },

  "ai-image-enhancer": {
    title: "AI Image Enhancer",
    intro:
      "Flat, underexposed, or slightly soft photos often just need consistent auto-adjustment rather than manual editing. ConvertBrio's image enhancer automatically balances exposure and color and sharpens detail in one step, no sliders required.",
    sections: [
      {
        heading: "What This Tool Does",
        body: "Image Enhancer applies a fixed, automatic set of adjustments to your photo, stretching contrast to use the full tonal range, lifting saturation and brightness slightly, and sharpening detail, producing a consistently improved result without you tuning individual settings.",
      },
      {
        heading: "How It Works",
        body: "Upload an image and ConvertBrio runs it through an automatic image-processing pipeline (contrast normalization, color, and sharpening) on our hosting providers' servers: a deterministic algorithm rather than a generative AI model, which is why results are consistent and processing is fast.",
      },
      {
        heading: "What It Won't Fix",
        body: "This is an enhancement pass, not a resolution-increasing or restoration tool: it won't sharply recover detail from a very low-resolution image, fix motion blur or out-of-focus shots, or reconstruct missing detail. For increasing resolution with a trained super-resolution model, use AI Upscaler instead.",
      },
    ],
    relatedTools: [
      { label: "AI Upscaler", href: "/tools/ai-upscaler" },
      { label: "Compress Image", href: "/tools/compress-image" },
    ],
    faqDescription: "Common questions about ConvertBrio's image enhancer.",
    faq: [
      {
        question: "What kind of improvements does it make?",
        answer:
          "It automatically stretches contrast, lifts color and brightness slightly, and sharpens detail: a fixed, consistent adjustment pass rather than manual per-photo editing.",
      },
      {
        question: "How is this different from AI Upscaler?",
        answer:
          "Image Enhancer applies automatic adjustments at the same resolution using a fixed image-processing pipeline. AI Upscaler is a separate tool that uses a trained super-resolution model to increase an image's resolution and reconstruct detail.",
      },
      {
        question: "Is there a file size limit?",
        answer:
          "Uploads are capped at 100 MB. Your original file is deleted right after it is read for conversion. The converted result is deleted by a daily cleanup, typically within about 24 hours. Files are processed on our hosting providers' servers (Vercel and Supabase), automatically, with no human review.",
      },
    ],
  },

  "ai-upscaler": {
    title: "AI Image Upscaler: Increase Resolution Without the Blur",
    intro: [
      "Enlarging a small or low-resolution image with an ordinary resize just spreads the existing pixels over more area, leaving it soft and blocky. ConvertBrio's AI upscaler uses a trained super-resolution model to increase resolution roughly 4×, reconstructing plausible detail, edges, texture, fine structure, instead of stretching what's there.",
    ],
    howTo: [
      {
        step: "Upload the image you want enlarged",
        detail: "A real-world photo works best. JPG, PNG, WEBP, HEIC, or AVIF, up to 100 MB.",
      },
      {
        step: "Run the upscale",
        detail:
          "A bundled AI model reconstructs detail at about 4× the input's resolution, working in tiles to manage memory. This takes a few seconds longer than a plain conversion.",
      },
      {
        step: "Download the PNG",
        detail: "The result is always a PNG at 4× the (possibly downscaled) input resolution.",
      },
    ],
    sections: [
      {
        heading: "Upscaling vs resizing",
        body: "The Resize Image tool changes pixel dimensions with standard interpolation: perfect for making an image smaller, but it can't add detail that isn't in the file, so enlarging looks blurry. AI upscaling is the opposite approach: the model has learned what real photo detail looks like and paints in a convincing high-resolution version. Use resize to shrink, use the upscaler to enlarge.",
      },
      {
        heading: "When it helps most",
        body: "",
        list: [
          "Enlarging an old, small, or low-resolution photo for printing",
          "Preparing a web-sized image for a large display or a high-DPI screen",
          "Recovering usable size from a heavily cropped photo",
          "Sharpening a slightly soft image (though Image Enhancer is better for same-size cleanup)",
        ],
      },
      {
        heading: "What to expect",
        body: "Results are strongest on natural photographs: people, places, objects. The model can struggle with dense text, sharp line art, screenshots, and heavily stylised graphics, sometimes inventing texture that wasn't there. Very high-resolution source images are downscaled before upscaling to keep processing reasonable, so feeding in an already-large photo won't gain much. It's a reconstruction, not a recovery of the true original detail.",
      },
      {
        heading: "Privacy and limits",
        body: "The model is open-source software that runs inside our own processing, with no third-party AI service. Uploads are capped at 100 MB. Your original file is deleted right after it is read for conversion. The converted result is deleted by a daily cleanup, typically within about 24 hours. Files are processed on our hosting providers' servers (Vercel and Supabase), automatically, with no human review.",
      },
    ],
    relatedTools: [
      { label: "Resize Image", href: "/tools/resize-image" },
      { label: "AI Image Enhancer", href: "/tools/ai-image-enhancer" },
      { label: "Compress Image", href: "/tools/compress-image" },
    ],
    faqDescription: "Common questions about ConvertBrio's AI image upscaler.",
    faq: [
      {
        question: "How is AI upscaling different from just resizing an image larger?",
        answer:
          "Ordinary resizing stretches existing pixels, which blurs the result. AI upscaling reconstructs plausible detail with a trained model, producing a much sharper enlargement.",
      },
      {
        question: "How much bigger does it make the image?",
        answer:
          "About 4× the resolution of the input (which is first downscaled if it's very large). The output is a PNG.",
      },
      {
        question: "Will it work on text or screenshots?",
        answer:
          "It's tuned for photographs. Dense text, line art, and screenshots can come out with invented or smeared detail: a plain resize is often safer for those.",
      },
      {
        question: "Is there a file size limit?",
        answer:
          "Uploads are capped at 100 MB. Your original file is deleted right after it is read for conversion. The converted result is deleted by a daily cleanup, typically within about 24 hours. Files are processed on our hosting providers' servers (Vercel and Supabase), automatically, with no human review.",
      },
      {
        question: "Why did processing take a little while?",
        answer:
          "The model runs on our hosting providers' servers and processes large images in tiles to manage memory, so it takes a few seconds longer than a simple format conversion.",
      },
    ],
  },

  "ai-object-remover": {
    title: "How to Remove an Unwanted Object From a Photo (Free Options)",
    intro: [
      "A stray passerby in a holiday photo, a power line across a skyline, a bin in the corner of a listing shot: one distracting object can spoil an otherwise good picture. Erasing it cleanly means removing the object and rebuilding whatever was behind it so there's no visible patch.",
      "A one-click AI object remover with a brush tool is on ConvertBrio's roadmap and needs an inpainting model that isn't on the free tier yet. Until it's live, there are a few free ways to deal with an unwanted object depending on where it sits in the frame.",
    ],
    comingSoonGuide: {
      title: "Remove an object now",
      intro: [
        "If the object is near an edge, the fastest fix is to crop it out of frame entirely: no reconstruction needed, and the result is genuinely clean.",
        "If it's a distracting background rather than a specific object, and you only need the subject, the AI background remover cuts the subject out so you can place it on a new, clean background.",
      ],
      cta: { label: "Crop the object out of frame", href: "/tools/crop-image" },
    },
    howTo: [
      {
        step: "Look at where the object is",
        detail: "Near an edge or corner → crop. In the middle of the shot, or overlapping the subject → you'll need a dedicated editor for now.",
      },
      {
        step: "Edge object: crop it out",
        detail:
          "Open Crop Image, enter a region that excludes the object, and download. Check the new aspect ratio still works for where you'll use the photo.",
      },
      {
        step: "Distracting background: cut out the subject",
        detail:
          "Run the photo through Remove Background to get the subject on transparency, then place it on a plain colour or a cleaner background in any editor.",
      },
      {
        step: "Object over the subject: use a desktop tool for now",
        detail:
          "A content-aware fill / healing brush in a photo editor is the reliable option until ConvertBrio's AI object remover ships.",
      },
    ],
    sections: [
      {
        heading: "Why removing a mid-frame object is hard",
        body: "Cropping just discards pixels: easy and lossless. Removing an object from the middle of a photo means inventing what was behind it: the right continuation of a wall, a lawn, a sky, a crowd. Doing that convincingly needs a model trained to inpaint plausible detail that matches the surrounding texture, lighting, and perspective. Simple, uniform backgrounds (blank wall, clear sky) are easy; busy or structured scenes are where results get patchy.",
      },
      {
        heading: "What ConvertBrio's tool will do",
        body: "The planned AI Object Remover will let you paint over the unwanted object and have a model remove it and fill the gap, aiming for a result with no visible seam. It's part of the same AI toolset as background removal and upscaling and is gated on model availability on the free tier.",
      },
      {
        heading: "Privacy",
        body: "The tools that work today, Crop Image and Remove Background, process on our hosting providers' servers with no human review. The original is deleted right after it is read, and the result by a daily cleanup, typically within about 24 hours.",
      },
    ],
    relatedTools: [
      { label: "Crop Image", href: "/tools/crop-image" },
      { label: "Remove Background", href: "/tools/remove-background" },
      { label: "AI Image Enhancer", href: "/tools/ai-image-enhancer" },
      { label: "Resize Image", href: "/tools/resize-image" },
    ],
    faqDescription: "Common questions about removing unwanted objects from a photo.",
    faq: [
      {
        question: "Can I remove an object from a photo free on ConvertBrio?",
        answer:
          "If the object is near an edge, yes, the Crop Image tool removes it by cutting it out of frame. A brush-based AI object remover for mid-frame objects is in development and depends on an inpainting model not yet on the free tier.",
      },
      {
        question: "How do I remove a person from the background of a photo?",
        answer:
          "If they're near the edge, crop them out. If you only need your subject, run the photo through Remove Background and place the subject on a clean backdrop. For a person standing mid-scene, use a desktop editor's content-aware fill for now.",
      },
      {
        question: "When will the AI object remover launch?",
        answer:
          "It's on the roadmap, gated on an inpainting model becoming available on ConvertBrio's free tier. No firm date yet.",
      },
      {
        question: "Does cropping reduce my photo's quality?",
        answer:
          "No, cropping keeps every remaining pixel exactly as it was. It only changes the framing and the overall dimensions.",
      },
    ],
  },

  "ai-photo-restoration": {
    title: "How to Restore an Old or Damaged Photo (Free Options)",
    intro: [
      "Old family photos fade, yellow, pick up scratches and creases, and lose sharpness. Full restoration means repairing physical damage, correcting colour, and recovering detail, and the hardest part, repairing scratches and missing patches, needs a model trained specifically for it.",
      "A one-click AI Photo Restoration tool is on ConvertBrio's roadmap and depends on a restoration model that isn't on the free tier yet. But several steps that make a real difference to an old scan are available now, for free.",
    ],
    comingSoonGuide: {
      title: "Improve an old photo now",
      intro: [
        "Scan or photograph the print as sharply as you can, then run it through AI Image Enhancer to rebalance faded contrast and colour, and AI Upscaler to bring back size and sharpness lost to age and low-resolution scanning.",
        "This won't repair scratches or torn areas, that's what the dedicated restoration tool will add, but it noticeably revives most faded, soft, undamaged photos.",
      ],
      cta: { label: "Start with AI Image Enhancer", href: "/tools/ai-image-enhancer" },
    },
    howTo: [
      {
        step: "Get the best possible scan",
        detail:
          "Use a flatbed scanner at 600 DPI if you can, or photograph the print flat in bright, even, indirect light with no glare. Everything downstream depends on this.",
      },
      {
        step: "Rebalance tone and colour",
        detail:
          "Run the scan through AI Image Enhancer. It stretches faded contrast back to the full range and lifts washed-out colour automatically.",
      },
      {
        step: "Recover size and sharpness",
        detail:
          "Run the result through AI Upscaler (about 4×) to rebuild resolution lost to a small print or a low-res scan, so it holds up when printed or viewed large.",
      },
      {
        step: "For scratches and tears",
        detail:
          "Use a desktop editor's healing/clone tools for now, or wait for ConvertBrio's dedicated AI Photo Restoration tool.",
      },
    ],
    sections: [
      {
        heading: "What each problem needs",
        body: "",
        list: [
          "Fading and low contrast: fixed well today by AI Image Enhancer",
          "Yellow or colour-shifted tone: improved by AI Image Enhancer's auto colour balance",
          "Softness / small size: improved by AI Upscaler",
          "Scratches, creases, torn corners, missing areas: needs the dedicated restoration model (in development) or manual retouching",
          "Black-and-white photo you want colourised: needs a colourisation model (not yet on ConvertBrio)",
        ],
      },
      {
        heading: "Why scratch repair is the hard part",
        body: "Correcting colour and contrast is maths applied evenly across the image. Repairing a scratch means recognising that a white line isn't part of the photo, then reconstructing the face, fabric, or background it runs across: different content in every case. That's a trained inpainting task, which is exactly the capability ConvertBrio's AI Photo Restoration tool will add.",
      },
      {
        heading: "Privacy",
        body: "AI Image Enhancer and AI Upscaler run on our hosting providers' servers with no human review. The original is deleted right after it is read, and the result by a daily cleanup, typically within about 24 hours. Family photos never go to a third-party service.",
      },
    ],
    relatedTools: [
      { label: "AI Image Enhancer", href: "/tools/ai-image-enhancer" },
      { label: "AI Upscaler", href: "/tools/ai-upscaler" },
      { label: "Image Converter", href: "/tools/image-converter" },
      { label: "Crop Image", href: "/tools/crop-image" },
    ],
    faqDescription: "Common questions about restoring old and damaged photos.",
    faq: [
      {
        question: "Can I restore an old photo free on ConvertBrio?",
        answer:
          "You can meaningfully improve one now: AI Image Enhancer fixes fading and colour, and AI Upscaler restores sharpness and size. A dedicated tool for repairing scratches and tears is in development.",
      },
      {
        question: "Will this remove scratches and creases?",
        answer:
          "Not yet, the current tools handle fading, colour, softness, and size. Physical damage repair needs the AI Photo Restoration model that's still being added.",
      },
      {
        question: "How should I scan an old print for the best result?",
        answer:
          "A flatbed scanner at 600 DPI is ideal. If you're using a phone, shoot the print flat in bright, even, indirect light with no glare or shadow across it. Scan quality sets the ceiling for everything after.",
      },
      {
        question: "Can it colourise a black-and-white photo?",
        answer:
          "Not currently, colourisation needs a separate model that isn't on ConvertBrio yet. The enhancer and upscaler work on black-and-white photos to improve contrast and sharpness.",
      },
    ],
  },

  ...newToolContent,
};
