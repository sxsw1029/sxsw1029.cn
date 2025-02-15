import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    post: defineCollection({
      source: "posts/*.md",
      type: "page",

      schema: z.object({
        createdAt: z.date(),
        updatedAt: z.date(),
      }),
    }),
  },
});
