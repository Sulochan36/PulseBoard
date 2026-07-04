import type { LucideIcon } from "lucide-react";

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

/* -------------------------------- */
/* API Response Types */
/* -------------------------------- */

export interface PollOption {
    _id: string;
    text: string;
}

export interface PollQuestion {
    _id: string;
    question: string;
    required: boolean;
    options: PollOption[];
}

export interface Poll {
    _id: string;
    title: string;
    description?: string;
    creator: string;
    slug: string;
    responseMode: ResponseMode;
    expiresAt: string;
    isExpired: boolean;
    isPublished: boolean;
    totalResponses: number;
    questions: PollQuestion[];
    createdAt: string;
    updatedAt: string;
}

export interface UrgentAction {
    icon: LucideIcon;
    color: string;
    title: string;
    subtitle: string;
    action: string;
}

export interface EngagementCard {
    label: string;
    value: number | string;
    icon: LucideIcon;
    color: string;
}