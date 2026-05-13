import { z } from "zod";

export const submitResponseSchema = z.object({
    pollId: z.string(),
    answers: z.array(
        z.object({
            questionId: z.string(),
            selectedOptionId: z.string(),
        })
    ).min(1, "At least one answer is required"),
});