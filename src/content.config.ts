// https://docs.astro.build/en/guides/content-collections/

import {z, defineCollection, reference} from "astro:content";

const authorsCollection = defineCollection({
    type: "content",
    schema: z.object({
        name: z.string(),
    }),
});

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

const cyberChaseCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        author: reference('authors'),
        date: z.coerce.date(),
        tags: z.array(z.string()),
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
  authors: authorsCollection,
  posts: postsCollection,
  cyberChase: cyberChaseCollection,
  meetings: meetingsCollection,
};
