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

const photos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/photos" }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
  }),
});

export const collections = { posts, photos };
