import { defineCollection, z } from "astro:content"

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    createdAt: z.date(),
  }),
})

export const collections = {
  posts,
}
