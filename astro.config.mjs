import { defineConfig } from 'astro/config';
import remarkGfm from 'remark-gfm';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://xlilacy.github.io',
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap()],
  markdown: {
    remarkPlugins: [remarkGfm],
    shikiConfig: {
      theme: 'github-dark',
      langs: [],
    },
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
    css: {
      preprocessorOptions: {
        css: {
          additionalData: `@import "./src/styles/global.css";`,
        },
      },
    },
  },
  build: {
    format: 'directory'
  }
}); 