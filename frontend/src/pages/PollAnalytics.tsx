import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { socket } from "../lib/socket";
import { getPollAnalyticsAPI } from "../services/response.service";

import AnalyticsSummaryCards from "../components/analytics/AnalyticsSummaryCards";
import QuestionBarChart from "../components/analytics/QuestionBarChart";
import QuestionPieChart from "../components/analytics/QuestionPieChart";
import LiveActivityFeed from "../components/analytics/LiveActivityFeed";

interface OptionAnalytics {
    optionId: string;
    text: string;
    count: number;
    percentage: number;
}

interface QuestionAnalytics {
    questionId: string;
    question: string;
    totalAnswers: number;
    options: OptionAnalytics[];
}

interface AnalyticsData {
    poll: {
        title: string;
        description?: string;
    };

    summary: {
        totalResponses: number;
        completionRate: number;
    };

    questions: QuestionAnalytics[];
}

interface ActivityItem {
    type: string;
    message: string;
}

const PollAnalytics = () => {

    const { pollId } = useParams();

    const [data, setData] =
        useState<AnalyticsData | null>(null);

    const [loading, setLoading] =
        useState(true);

    const [activities, setActivities] =
        useState<ActivityItem[]>([]);

    // =========================
    // INITIAL FETCH
    // =========================
    useEffect(() => {

        if (!pollId) return;

        console.log("🟡 JOIN ROOM:", pollId);

        socket.emit(
            "joinPollRoom",
            pollId
        );

        const fetchAnalytics = async () => {

            try {

                console.log("📡 FETCH START");

                const res =
                    await getPollAnalyticsAPI(
                        pollId
                    );

                console.log(
                    "📦 RAW RESPONSE:",
                    res
                );

                // SAFE NORMALIZATION
                const payload =
                    res?.data?.data ??
                    res?.data ??
                    res;

                console.log(
                    "🧠 NORMALIZED PAYLOAD:",
                    payload
                );

                setData(payload);

                console.log(
                    "✅ STATE SET SUCCESS"
                );

            } catch (err) {

                console.error(
                    "❌ FETCH ERROR:",
                    err
                );

            } finally {

                setLoading(false);

            }
        };

        fetchAnalytics();

        return () => {

            console.log(
                "🔴 LEAVE ROOM:",
                pollId
            );

            socket.emit(
                "leavePollRoom",
                pollId
            );
        };

    }, [pollId]);

    // =========================
    // SOCKET LISTENERS
    // =========================
    useEffect(() => {

        // REALTIME ANALYTICS
        const analyticsHandler = (
            updated: AnalyticsData
        ) => {

            console.log(
                "⚡ ANALYTICS UPDATE:",
                updated
            );

            if (!updated) return;

            setData(updated);
        };

        // LIVE ACTIVITY FEED
        const activityHandler = (
            activity: ActivityItem
        ) => {

            console.log(
                "🔥 LIVE ACTIVITY:",
                activity
            );

            setActivities((prev) => [

                activity,

                ...prev.slice(0, 9),

            ]);
        };

        socket.on(
            "poll:analyticsUpdated",
            analyticsHandler
        );

        socket.on(
            "poll:activity",
            activityHandler
        );

        return () => {

            socket.off(
                "poll:analyticsUpdated",
                analyticsHandler
            );

            socket.off(
                "poll:activity",
                activityHandler
            );
        };

    }, []);

    // =========================
    // LOADING STATE
    // =========================
    if (loading) {

        return (
            <div className="text-white p-6">
                Loading analytics...
            </div>
        );
    }

    // =========================
    // EMPTY STATE
    // =========================
    if (!data) {

        console.warn(
            "⚠️ DATA IS NULL"
        );

        return (
            <div className="text-white p-6">
                No analytics found
            </div>
        );
    }

    console.log(
        "🎯 FINAL RENDER DATA:",
        data
    );

    return (

        <div className="min-h-screen bg-black text-white p-6 space-y-10">

            {/* HEADER */}
            <div className="space-y-2">

                <h1 className="text-4xl font-bold">
                    {data.poll?.title}
                </h1>

                <p className="text-zinc-400">
                    {data.poll?.description}
                </p>

            </div>



            <AnalyticsSummaryCards 
                totalResponses={data.summary?.totalResponses || 0}
                completionRate={data.summary?.completionRate || 0}
            />

            
            <LiveActivityFeed activities={activities}/>

            {/* QUESTIONS */}
            <div className="space-y-10">
                    {data.questions?.map((q) => (

                    <div
                        key={q.questionId}
                        className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-8"
                    >

                        {/* QUESTION HEADER */}
                        <div>

                            <h2 className="text-xl font-semibold">
                                {q.question}
                            </h2>

                            <p className="text-sm text-zinc-500 mt-1">
                                {q.totalAnswers} responses
                            </p>

                        </div>

                        

                        {/* HORIZONTAL OPTION BARS */}
                        <div className="space-y-4">

                            {q.options?.map((opt) => (

                                <div
                                    key={opt.optionId}
                                    className="space-y-2"
                                >

                                    <div className="flex justify-between text-sm">

                                        <span>
                                            {opt.text}
                                        </span>

                                        <span>
                                            {opt.count} votes ({opt.percentage}%)
                                        </span>

                                    </div>

                                    <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">

                                        <div
                                            className="h-full bg-green-500 rounded-full transition-all duration-500"
                                            style={{
                                                width: `${opt.percentage || 0}%`,
                                            }}
                                        />

                                    </div>

                                </div>

                            ))}

                        </div>

                        

                        {/* CHARTS */}
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

                            <div className="bg-zinc-950 rounded-2xl p-4">
                                <QuestionBarChart
                                    options={q.options}
                                />
                            </div>

                            <div className="bg-zinc-950 rounded-2xl p-4">
                                <QuestionPieChart
                                    options={q.options}
                                />
                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
};

export default PollAnalytics;