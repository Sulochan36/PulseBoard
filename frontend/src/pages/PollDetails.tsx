import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPollByIdAPI, deletePollAPI, publishPollAPI } from "../services/poll.service";
import {
    Copy,
    Trash2,
    BarChart3,
    Rocket,
    Clock,
    Shield,
    FileText,
} from "lucide-react";

const PollDetails = () => {

    const { pollId } = useParams();
    const navigate = useNavigate();

    const [poll, setPoll] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    const fetchPoll = async () => {
        try {
            const res = await getPollByIdAPI(pollId!);
            setPoll(res.poll);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPoll();
    }, []);

    if (loading) return <div className="text-white">Loading...</div>;

    if (!poll) return <div className="text-white">Poll not found</div>;

    const shareLink = `${window.location.origin}/poll/${poll.slug}`;

    const handleDelete = async () => {
        await deletePollAPI(poll._id);
        navigate("/dashboard");
    };

    const handlePublish = async () => {
        await publishPollAPI(poll._id);
        fetchPoll();
    };

    return (
        <div className="min-h-screen bg-zinc-950 text-white px-4 py-10 md:px-10">

            {/* BACKGROUND GLOW */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-10 left-1/2 h-75 w-75 -translate-x-1/2 bg-cyan-500/10 blur-3xl rounded-full" />
                <div className="absolute bottom-0 right-0 h-75 w-75 bg-blue-500/10 blur-3xl rounded-full" />
            </div>

            <div className="max-w-5xl mx-auto space-y-10">

                {/* HEADER */}
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 text-sm text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1 rounded-full">
                        <FileText size={14} />
                        Poll Details
                    </div>

                    <h1 className="text-4xl font-bold">{poll.title}</h1>
                    <p className="text-zinc-400 max-w-2xl">
                        {poll.description}
                    </p>
                </div>

                {/* STATUS CARDS */}
                <div className="grid md:grid-cols-3 gap-4">

                    <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-4">
                        <div className="flex items-center gap-2 text-zinc-400 text-sm">
                            <Shield size={16} />
                            Status
                        </div>
                        <p className={`mt-2 text-sm font-medium ${poll.isPublished ? "text-green-400" : "text-yellow-400"
                            }`}>
                            {poll.isPublished ? "Published" : "Draft"}
                        </p>
                    </div>

                    <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-4">
                        <div className="flex items-center gap-2 text-zinc-400 text-sm">
                            <BarChart3 size={16} />
                            Response Mode
                        </div>
                        <p className="mt-2 text-sm text-white">
                            {poll.responseMode}
                        </p>
                    </div>

                    <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-4">
                        <div className="flex items-center gap-2 text-zinc-400 text-sm">
                            <Clock size={16} />
                            Expires
                        </div>
                        <p className="mt-2 text-sm text-white">
                            {new Date(poll.expiresAt).toLocaleString()}
                        </p>
                    </div>

                </div>

                {/* SHARE CARD */}
                <div className="bg-zinc-900/60 border border-white/10 rounded-3xl p-6 space-y-4">

                    <h2 className="text-lg font-semibold">
                        Share Poll
                    </h2>

                    <div className="flex flex-col md:flex-row gap-3">

                        <input
                            value={shareLink}
                            readOnly
                            className="flex-1 rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3"
                        />

                        <button
                            onClick={() => navigator.clipboard.writeText(shareLink)}
                            className="flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 transition px-5 py-3 rounded-2xl"
                        >
                            <Copy size={16} />
                            Copy
                        </button>

                    </div>
                </div>

                {/* ACTIONS */}
                <div className="flex flex-wrap gap-3">

                    {!poll.isPublished && (
                        <button
                            onClick={handlePublish}
                            className="flex items-center gap-2 bg-green-600 hover:bg-green-500 px-5 py-3 rounded-2xl"
                        >
                            <Rocket size={16} />
                            Publish Poll
                        </button>
                    )}

                    <button
                        onClick={() =>
                            navigate(`/dashboard/poll/${poll._id}/analytics`)
                        }
                        className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 px-5 py-3 rounded-2xl"
                    >
                        <BarChart3 size={16} />
                        Analytics
                    </button>

                    <button
                        onClick={handleDelete}
                        className="flex items-center gap-2 bg-red-600 hover:bg-red-500 px-5 py-3 rounded-2xl"
                    >
                        <Trash2 size={16} />
                        Delete
                    </button>

                </div>

                
                <div className="space-y-4">

                    <h2 className="text-xl font-semibold">
                        Questions
                    </h2>

                    <div className="grid gap-4">
                        {poll.questions.map((q: any, i: number) => (
                            <div
                                key={i}
                                className="bg-zinc-900/60 border border-white/10 rounded-3xl p-5 space-y-3"
                            >

                                <p className="font-medium text-white">
                                    {q.question}
                                </p>

                                <div className="space-y-1 text-sm text-zinc-400">
                                    {q.options.map((opt: any, j: number) => (
                                        <p key={j}>
                                            • {opt.text}
                                        </p>
                                    ))}
                                </div>

                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </div>
    );
};

export default PollDetails;