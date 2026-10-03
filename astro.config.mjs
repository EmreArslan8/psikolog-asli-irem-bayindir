// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import { site } from './src/data/site.ts';

export default defineConfig({
  site: site.url,
  trailingSlash: 'never',
  adapter: vercel(),
});
