import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const sso = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/docs/sso' }),
  schema: z.object({
    author: z.string(),
  }),
})

const general = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/docs/general' }),
  schema: z.object({
    title: z.string(),
  }),
})

export const collections = { sso, general }
