// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import path from 'path';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.magicroom.sk',

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  },

  integrations: [
    react(),
    sitemap({
      serialize(item) {
        // Homepage gets highest priority
        if (item.url === 'https://www.magicroom.sk/') {
          item.priority = 1.0;
        }
        // Key service pages
        if (item.url.includes('/sluzby') || item.url.includes('/kontakt')) {
          item.priority = 0.9;
        }
        if (item.url.includes('/prenajom-dekoracii')) {
          item.priority = 0.8;
        }
        if (item.url.includes('/o-nas')) {
          item.priority = 0.7;
        }
        if (item.url.includes('/komisny-predaj')) {
          item.priority = 0.6;
        }
        return item;
      },
    }),
  ],
});
