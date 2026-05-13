import type { Types } from "mongoose";

export interface SubmitAnswerInput {
    questionId: string;
    selectedOptionId: string;
}

export interface SubmitResponseInput {
    pollId: string;
    answers: SubmitAnswerInput[];
}