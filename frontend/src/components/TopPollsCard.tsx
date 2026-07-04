import {
    Trophy,
    ChevronRight,
} from "lucide-react";

const polls = [
    {
        id: 1,
        title: "Frontend Framework Survey",
        responses: 428,
        completion: 92,
    },
    {
        id: 2,
        title: "AI Tools 2026",
        responses: 351,
        completion: 86,
    },
    {
        id: 3,
        title: "Hackathon Feedback",
        responses: 184,
        completion: 71,
    },
];

const TopPollsCard = () => {
    return (
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-5">
                <h3 className="text-xl font-semibold">
                    Top Performing Polls
                </h3>

                <Trophy className="text-yellow-400" size={20} />
            </div>

            <div className="space-y-5 p-6">
                {polls.map((poll, index) => (
                    <div
                        key={poll.id}
                        className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4 transition hover:border-cyan-500/30"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-xs text-cyan-400">
                                    #{index + 1}
                                </span>

                                <h4 className="mt-1 font-semibold">
                                    {poll.title}
                                </h4>
                            </div>

                            <span className="text-sm text-zinc-400">
                                {poll.responses} responses
                            </span>
                        </div>

                        <div className="mt-4">
                            <div className="mb-2 flex justify-between text-xs text-zinc-500">
                                <span>Completion</span>

                                <span>{poll.completion}%</span>
                            </div>

                            <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
                                <div
                                    className="h-full rounded-full bg-linear-to-r from-cyan-500 to-blue-500"
                                    style={{
                                        width: `${poll.completion}%`,
                                    }}
                                />
                            </div>
                        </div>

                        <button className="mt-4 flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300">
                            View Analytics

                            <ChevronRight size={16} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopPollsCard;