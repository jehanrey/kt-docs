import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

import { categories } from '@/wiki/authentication/constants'

const authentication = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/wiki/authentication' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(categories),
    order: z.number(),
  }),
})

export const collections = { authentication }
