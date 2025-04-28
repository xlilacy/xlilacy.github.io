import { defineConfig } from 'astro/config';
import { remarkGfm } from 'remark-gfm';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://xlilacy.github.io',
  base: '/',
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap()],
  markdown: {
    remarkPlugins: [remarkGfm],
    shikiConfig: {
      theme: 'github-dark',
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
  },
  build: {
    format: 'directory'
  },
  experimental: {
    viewTransitions: true
  }
}); 