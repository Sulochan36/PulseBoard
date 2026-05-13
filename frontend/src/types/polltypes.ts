export type ResponseMode =  "anonymous" | "authenticated";

export interface OptionInput {
    text: string;
}

export interface QuestionInput {
    question: string;
    required: boolean;
    options: OptionInput[];
}

export interface CreatePollInput {
    title: string;
    description?: string;
    responseMode: ResponseMode;
    expiresAt: string;
    questions: QuestionInput[];
}