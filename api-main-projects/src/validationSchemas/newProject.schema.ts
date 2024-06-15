import { z } from 'zod';

export const validationSchema = z.object({
  name: z.string().min(5).max(50),
  description: z.string().min(5).max(255),
})

export type INewProject  = z.infer<typeof validationSchema>;