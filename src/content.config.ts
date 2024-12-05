import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const docs = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/docs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()),
  }),
})

export const collections = { docs }
