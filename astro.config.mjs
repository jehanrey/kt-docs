// @ts-check
import mdx from '@astrojs/mdx'
import preact from '@astrojs/preact'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import rehypeExternalLinks from 'rehype-external-links'

import { remarkModifiedTime } from './src/lib/markdown/remark-modified-time.mjs'
import { remarkReadingTime } from './src/lib/markdown/remark-reading-time.mjs'

// https://astro.build/config
export default defineConfig({
  site: 'https://jehanrey.github.io',
  base: 'kt-docs',
  integrations: [tailwind(), preact(), mdx()],
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
