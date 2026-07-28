// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.convertbrio.com',
  output: 'server',

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: vercel({
    // Headless-Chromium-backed Word conversions (see src/lib/chromium.ts) need
    // more than the default function timeout, especially on a cold start.
    maxDuration: 60,
  })
});