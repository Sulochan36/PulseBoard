import { PollModel } from "../polls/poll.model.js";
import { buildAnalyticsResponse } from "./analytics.mapper.js";
import { getOptionStats } from "./analytics.options.js";
import { getTotalResponses } from "./analytics.total.js";
import { getTrends } from "./analytics.trends.js";

export const getPollAnalyticsService = async (pollId: string) => {

    const poll = await PollModel.findById(pollId);

    if (!poll) {
        console.log("Poll not found in DB");
        throw new Error("Poll not found");
    }

    const totalResponses = await getTotalResponses(pollId);

    const optionStats = await getOptionStats(pollId);

    const trends = await getTrends(pollId);

    const result = buildAnalyticsResponse({
        poll,
        totalResponses,
        optionStats,
        trends,
    });

    return result;
};