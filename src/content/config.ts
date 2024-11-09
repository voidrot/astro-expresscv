import { defineCollection, z } from "astro:content"

const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    repo: z.optional(z.string().url()),
    demo: z.optional(z.string().url()),
    status: z.string(),
    tags: z.array(z.string())
  })
})
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().date(),
    slug: z.optional(z.string()),
    draft:z.boolean(),
    tags: z.array(z.string())
  })
})
const skillCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    level: z.optional(z.string()),
    category: z.optional(z.string())
  })
})
const experienceCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    company: z.string(),
    startDate: z.string().date(),
    endDate: z.string().date() || z.string(),
    description: z.string()
  })
})

export const collections = {
  'project': projectCollection,
  'blog': blogCollection,
  'skill': skillCollection,
  'experience': experienceCollection
}
