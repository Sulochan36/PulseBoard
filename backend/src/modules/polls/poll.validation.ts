import { z } from "zod";

export const createPollSchema = z.object({
    title: z.string().min(3, "Title must be at least 3 characters"),
    description: z.string().optional(),
    responseMode: z.enum(["anonymous","authenticated",]),
    expiresAt: z.string(),

    questions: z.array(z.object({question: z.string().min(1, "Question is required"),
    required: z.boolean(),
    options: z.array(z.object({text: z.string().min(1, "Option text required"),})).min(2, "Minimum 2 options required"),}))
    .min(1, "At least one question required"),
});