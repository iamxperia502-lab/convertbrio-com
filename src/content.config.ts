import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // Shorter title for search results when the page heading is too long.
      seoTitle: z.string().optional(),
      description: z.string(),
      // Real publish date. Never backdate or fake it.
      pubDate: z.coerce.date(),
      // Set only when the post is genuinely revised; shown as "Updated <date>"
      // on the post and blog index and emitted as dateModified in the Article schema.
      updatedDate: z.coerce.date().optional(),
      author: z.string().default("Subham Sharma"),
      tags: z.array(z.string()).default([]),
      relatedTools: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
      // Optional header image, also used as the social preview image. Put the
      // file under src/assets/blog/ and reference it relatively. `alt` is
      // required (an empty string fails the build) so every image is accessible.
      heroImage: z.object({ src: image(), alt: z.string().min(5, "heroImage.alt must describe the image") }).optional(),
    }),
  });

export const collections = { blog };
