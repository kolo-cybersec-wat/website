// https://docs.astro.build/en/guides/content-collections/

import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      tags: z.array(z.string()),
      image: image(),
      imageClassName: z.string().optional(),
    }),
});

const meetingsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.coerce.date(),
    location: z.string(),
  }),
});

export const collections = {
  posts: postsCollection,
  meetings: meetingsCollection,
};
