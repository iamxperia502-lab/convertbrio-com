// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://convertbrio.com',
  output: 'server',

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: cloudflare({
    // Astro's default Cloudflare image service uses the Images binding, which
    // this project isn't provisioning (see src/lib/image-pipeline.ts for why:
    // avoids extra Cloudflare product billing). No <Image>/astro:assets usage
    // exists in this codebase, so this is a no-op safety default.
    imageService: 'passthrough',
  })
});