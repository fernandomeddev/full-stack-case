import { z } from 'zod';

export const validationSchema = z.object({
    title: z.string(),
    description: z.string(),
});

export type INewTask = z.infer<typeof validationSchema>;