// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import path from 'path';
import fs from 'fs';

// Validate environment variables
const isProd = process.env.NODE_ENV === 'production';
if (isProd) {
  const requiredEnv = ['RESEND_API_KEY'];
  const missing = requiredEnv.filter(key => !process.env[key]);
  if (missing.length > 0) {
    console.warn(`\x1b[33mWarning: Missing production environment variables: ${missing.join(', ')}\x1b[0m`);
    console.warn('\x1b[33mEnsure these are set in Vercel settings.\x1b[0m');
  }
}

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
