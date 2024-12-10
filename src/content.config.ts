import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const docs = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()),
  }),
})

const notes = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
  }),
})

const persons = defineCollection({
  loader: async () => {
    const response = await fetch('https://swapi.dev/api/people')
    const data = (await response.json()) as { results: Array<{ name: string }> }
    return data.results.map((person) => ({
      id: person.name,
      ...person,
    }))
  },
  schema: z.object({
    name: z.string(),
  }),
})

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
})

export const collections = { docs, persons, notes, blog }
