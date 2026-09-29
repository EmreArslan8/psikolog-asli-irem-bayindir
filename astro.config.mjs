// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://asliirembayindir.com', // TODO: src/data/site.ts ile aynı tutun
  adapter: vercel(),
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
});
