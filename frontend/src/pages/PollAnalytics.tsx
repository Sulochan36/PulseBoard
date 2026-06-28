import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { socket } from "../lib/socket";
import { getPollAnalyticsAPI } from "../services/response.service";

import AnalyticsSummaryCards from "../components/analytics/AnalyticsSummaryCards";
import QuestionBarChart from "../components/analytics/QuestionBarChart";
import QuestionPieChart from "../components/analytics/QuestionPieChart";
import LiveActivityFeed from "../components/analytics/LiveActivityFeed";

import {
    Activity,
    BarChart3,
    Users,
} from "lucide-react";

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

                const res = await getPollAnalyticsAPI(pollId);

                
                const payload =
                    res?.data?.data ??
                    res?.data ??
                    res;
                setData(payload);
                } 
                catch (err) {
                    console.error("FETCH ERROR:",err);
                } finally {

                setLoading(false);

            }
        };

        fetchAnalytics();

        return () => {
            socket.emit("leavePollRoom",pollId);
        };

    }, [pollId]);

    useEffect(() => {


        const analyticsHandler = (updated: AnalyticsData) => {
        if (!updated) return;
        setData(updated);
        };

        
        const activityHandler = ( activity: ActivityItem) => {
            setActivities((prev) => [activity,...prev.slice(0, 9),]);
        };
        socket.on("poll:analyticsUpdated",analyticsHandler);

        socket.on("poll:activity",activityHandler);

        return () => {
            socket.off("poll:analyticsUpdated", analyticsHandler);
            socket.off("poll:activity",activityHandler);
        };

    }, []);


    if (loading) {
        return (
            <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
                <div className="animate-pulse text-zinc-400">
                    Loading analytics...
                </div>
            </div>
        );
    }

    if (!data) {
        return (
            <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
                No analytics found
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-zinc-950 text-white px-4 py-10 md:px-10">

            
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/3 h-75 w-75 bg-cyan-500/10 blur-3xl rounded-full" />
                <div className="absolute bottom-0 right-0 h-75 w-75 bg-blue-500/10 blur-3xl rounded-full" />
            </div>

            <div className="max-w-6xl mx-auto space-y-10">

                
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-cyan-300 text-sm bg-cyan-500/10 border border-cyan-500/20 px-4 py-1 rounded-full w-fit">
                        <BarChart3 size={14} />
                        Live Analytics Dashboard
                    </div>

                    <h1 className="text-4xl font-bold">
                        {data.poll?.title}
                    </h1>

                    <p className="text-zinc-400 max-w-2xl">
                        {data.poll?.description}
                    </p>
                </div>

                {/* SUMMARY */}
                <AnalyticsSummaryCards
                    totalResponses={data.summary?.totalResponses || 0}
                    completionRate={data.summary?.completionRate || 0}
                />

                
                <div className="grid lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-3 space-y-8">
                        <div className="space-y-6">

                            {data.questions?.map((q: any) => (
                                <div
                                    key={q.questionId}
                                    className="bg-zinc-900/60 border border-white/10 rounded-3xl p-6 space-y-6 hover:border-white/20 transition"
                                >

                                    
                                    <div>
                                        <h2 className="text-xl font-semibold">
                                            {q.question}
                                        </h2>

                                        <p className="text-sm text-zinc-500 mt-1 flex items-center gap-2">
                                            <Users size={14} />
                                            {q.totalAnswers} responses
                                        </p>
                                    </div>

                                    
                                    <div className="space-y-4">
                                        {q.options?.map((opt: any) => (
                                            <div key={opt.optionId} className="space-y-2">

                                                <div className="flex justify-between text-sm text-zinc-300">
                                                    <span>{opt.text}</span>
                                                    <span className="text-cyan-400">
                                                        {opt.count} ({opt.percentage}%)
                                                    </span>
                                                </div>

                                                <div className="h-3 bg-zinc-800 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-linear-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500"
                                                        style={{ width: `${opt.percentage || 0}%` }}
                                                    />
                                                </div>

                                            </div>
                                        ))}
                                    </div>

                                 
                                    <div className="grid md:grid-cols-2 gap-4">

                                        <div className="bg-zinc-950/50 border border-white/5 rounded-2xl p-4">
                                            <QuestionBarChart options={q.options} />
                                        </div>

                                        <div className="bg-zinc-950/50 border border-white/5 rounded-2xl p-4">
                                            <QuestionPieChart options={q.options} />
                                        </div>

                                    </div>

                                </div>
                            ))}

                        </div>
                    </div>

                    
                    <div className="lg:col-span-1">
                        <div className="sticky top-6">
                            <div className="bg-zinc-900/60 border border-white/10 rounded-3xl p-4">
                                <div className="flex items-center gap-2 text-sm text-cyan-300 mb-4">
                                    <Activity size={14} />
                                    Live Activity
                                </div>

                                <LiveActivityFeed activities={activities} />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default PollAnalytics;