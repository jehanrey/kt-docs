// @ts-check
import mdx from '@astrojs/mdx'
import preact from '@astrojs/preact'
import { defineConfig } from 'astro/config'
import rehypeExternalLinks from 'rehype-external-links'
import tailwindcss from '@tailwindcss/vite'

import { remarkModifiedTime } from './src/lib/markdown/remark-modified-time.mjs'
import { remarkReadingTime } from './src/lib/markdown/remark-reading-time.mjs'

// https://astro.build/config
export default defineConfig({
  site: 'https://jehanrey.github.io',
  base: 'kt-docs',
  integrations: [preact(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: 'houston',
    },
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          content: { type: 'text', value: ' 🔗' },
        },
      ],
    ],
    remarkPlugins: [remarkReadingTime, remarkModifiedTime],
  },
})
