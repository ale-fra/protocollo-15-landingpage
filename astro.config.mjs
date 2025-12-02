// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: '/offerta-protocollo-15/',
  vite: {
    plugins: [tailwindcss()]
  }
});