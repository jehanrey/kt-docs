// @ts-check
import preact from '@astrojs/preact'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

import { remarkReadingTime } from './src/lib/markdown/remark-reading-time.mjs'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact()],
  markdown: {
    shikiConfig: {
      theme: 'houston',
    },
    remarkPlugins: [remarkReadingTime],
  },
})
