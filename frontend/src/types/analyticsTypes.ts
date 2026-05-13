export interface AnalyticsOption {
    optionId: string;
    text: string;
    count: number;
    percentage: number;
}

export interface AnalyticsQuestion {
    questionId: string;
    question: string;

    options: AnalyticsOption[];
}

export interface PollAnalyticsData {
    poll: {
        _id: string;
        title: string;
        description?: string;
    };

    totalResponses: number;
    analytics: AnalyticsQuestion[];
}