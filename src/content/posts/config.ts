import { z, defineCollection } from "astro:content";

const postCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      thumb: z.string().optional(),
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      link: z.string(),
      gallery: z.array(z.string()).optional(),
    }),
});

export const collections = {
  posts: postCollection,
};
