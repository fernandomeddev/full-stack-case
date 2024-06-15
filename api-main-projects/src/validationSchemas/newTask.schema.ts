import { z } from 'zod';

export const validationSchema = z.object({
    title: z.string(),
    description: z.string(),
    status: z.string().optional()
});

export type INewTask = z.infer<typeof validationSchema>;