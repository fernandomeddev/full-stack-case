import { z } from 'zod';

export const validationSchema = z.object({
  name: z.string(),
  description: z.string(),
})

export type INewProject  = z.infer<typeof validationSchema>;