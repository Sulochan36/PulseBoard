export type ResponseMode =
    | "anonymous"
    | "authenticated";

export interface CreatePollInput {
    title: string;
    description?: string | undefined;
    responseMode: ResponseMode;
    expiresAt: string;
    questions: {
        question: string;

        required: boolean;

        options: {
            text: string;
        }[];
    }[];
}