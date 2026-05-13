import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPollByIdAPI, deletePollAPI, publishPollAPI } from "../services/poll.service";

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
        <div className="min-h-screen bg-zinc-950 text-white p-8 space-y-6">

            {/* HEADER */}
            <div>
                <h1 className="text-3xl font-bold">{poll.title}</h1>
                <p className="text-zinc-400">{poll.description}</p>
            </div>

            {/* STATUS */}
            <div className="flex gap-3 text-sm">
                <span className={`px-3 py-1 rounded ${poll.isPublished ? "bg-green-600" : "bg-yellow-600"
                    }`}>
                    {poll.isPublished ? "Published" : "Draft"}
                </span>

                <span className="px-3 py-1 bg-zinc-800 rounded">
                    {poll.responseMode}
                </span>
            </div>

            {/* SHARE LINK */}
            <div className="bg-zinc-900 p-4 rounded-xl space-y-2">
                <p className="text-sm text-zinc-400">Share Link</p>

                <div className="flex gap-2">
                    <input
                        value={shareLink}
                        readOnly
                        className="flex-1 bg-zinc-800 px-3 py-2 rounded"
                    />

                    <button
                        onClick={() =>
                            navigator.clipboard.writeText(shareLink)
                        }
                        className="bg-blue-600 px-4 py-2 rounded"
                    >
                        Copy
                    </button>
                </div>
            </div>

            {/* META INFO */}
            <div className="text-sm text-zinc-400 space-y-1">
                <p>Questions: {poll.questions.length}</p>
                <p>
                    Expires:{" "}
                    {new Date(poll.expiresAt).toLocaleString()}
                </p>
            </div>

            {/* ACTIONS */}
            <div className="flex gap-3 flex-wrap">

                {!poll.isPublished && (
                    <button
                        onClick={handlePublish}
                        className="bg-green-600 px-4 py-2 rounded"
                    >
                        Publish Poll
                    </button>
                )}

                <button
                    onClick={() =>
                        navigate(`/dashboard/poll/${poll._id}/analytics`)
                    }
                    className="bg-purple-600 px-4 py-2 rounded"
                >
                    View Analytics
                </button>

                <button
                    onClick={handleDelete}
                    className="bg-red-600 px-4 py-2 rounded"
                >
                    Delete Poll
                </button>

            </div>

            {/* QUESTIONS PREVIEW */}
            <div className="space-y-4 mt-8">

                <h2 className="text-xl font-semibold">
                    Questions
                </h2>

                {poll.questions.map((q: any, i: number) => (
                    <div
                        key={i}
                        className="bg-zinc-900 p-4 rounded-xl"
                    >
                        <p className="font-medium">
                            {q.question}
                        </p>

                        <div className="mt-2 text-sm text-zinc-400">
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
    );
};

export default PollDetails;