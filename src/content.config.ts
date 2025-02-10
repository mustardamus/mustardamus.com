import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/posts" }),
  schema: z.object({
    title: z.string(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
  }),
});

export const collections = { posts };
