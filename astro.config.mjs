// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import path from 'path';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.magicroom.sk',
  output: 'static',
  adapter: vercel(),

  image: {
    service: { entrypoint: 'astro/assets/services/sharp' }
  },

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  },

  integrations: [
    sitemap({
      serialize(item) {
        if (item.url === 'https://www.magicroom.sk/') {
          item.priority = 1.0;
        }
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
