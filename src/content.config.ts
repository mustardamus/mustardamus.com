import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/posts" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    excerpt: z.string().optional(),
  }),
});

const albums = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/albums" }),
  schema: ({ image }) =>
    z.object({
      slug: z.string(),
      title: z.string(),
      year: z.string(),
      thumb1: image(),
      thumb2: image(),
      thumb3: image(),
      thumb4: image(),
    }),
});

export const collections = { posts, albums };
