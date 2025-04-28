import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.date(),
    updated: z.date().optional(),
    draft: z.boolean().default(false),
    author: z.string().default('xlilacy'),
    categories: z.array(z.string()),
    tags: z.array(z.string()).optional(),
    stats: z.object({
      number: z.number().optional(),
      wordCount: z.number(),
      readingTime: z.number()
    }).optional(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
      resized: z.boolean().optional()
    }).optional(),
    imageGrid: z.object({
      images: z.array(z.object({
        src: z.string(),
        alt: z.string(),
        caption: z.string().optional(),
        resized: z.boolean().optional()
      })),
      columns: z.number().default(2)
    }).optional()
  })
});

export const collections = { posts }; 