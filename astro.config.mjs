// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import critters from 'astro-critters';
import compress from '@playform/compress';
import partytown from '@astrojs/partytown';
import path, { join } from 'path';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.magicroom.sk',
  output: 'static',
  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  },

  integrations: [
    react({ include: ['**/ui/LanguageSwitcher.astro'] }),  // Only hydrate minimal components
    partytown({
      dest: join(process.cwd(), 'dist', '_partytown'),
      forward: ['dataLayer.push', 'gtag'],
    }),
    critters(),
    compress({
      HTML: true,
      CSS: true,
      JS: true,
      Image: false,
    }),
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
