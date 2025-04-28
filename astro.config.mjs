import { defineConfig } from 'astro/config';
import { remarkGfm } from 'remark-gfm';

// https://astro.build/config
export default defineConfig({
  site: 'https://xlilacy.github.io',
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
    assets: 'assets'
  },
  experimental: {
    viewTransitions: true
  }
}); 