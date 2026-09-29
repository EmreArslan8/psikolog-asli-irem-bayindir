// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import { site } from './src/data/site.ts';

export default defineConfig({
  site: site.url,
  trailingSlash: 'never',
  adapter: vercel(),
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
});
