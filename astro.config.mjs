import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';
import { ALL_SEO_REDIRECTS } from './src/config/all-redirects.mjs';

export default defineConfig({
  site: 'https://cheatwardogs.net',
  trailingSlash: 'always',
  server: {
    host: true,
    port: 4322,
  },
  redirects: ALL_SEO_REDIRECTS,
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    /** Warm route HTML on pointer down — feels faster than hover-only. */
    defaultStrategy: 'tap',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/go/'),
      serialize: sitemapSerialize,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
      target: 'es2022',
      modulePreload: { polyfill: false },
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
