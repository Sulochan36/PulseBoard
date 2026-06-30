import { useNavigate } from "react-router-dom";
import { deletePollAPI, publishPollAPI } from "../services/poll.service";
import {
    Copy,
    Trash2,
    Rocket,
    Clock3,
    BarChart3,
    Link2,
} from "lucide-react";

interface Props {
    poll: any;
    onRefresh: () => void;
}

const PollCard = ({ poll, onRefresh }: Props) => {

    const navigate = useNavigate();

    const handleDelete = async (e: any) => {
        e.stopPropagation();
        await deletePollAPI(poll._id);
        onRefresh();
    };

    const handlePublish = async (e: any) => {
        e.stopPropagation();
        await publishPollAPI(poll._id);
        onRefresh();
    };

    const shareLink =
        `${window.location.origin}/poll/${poll.slug}`;

    return (

        <div
            onClick={() =>
                navigate(`/dashboard/poll/${poll._id}`)
            }
            className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/70 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-zinc-900 cursor-pointer"
        >

            {/* GLOW */}
            <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">

                <div className="absolute -top-24 right-0 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />

            </div>

            <div className="relative p-6 space-y-6">

                {/* TOP */}
                <div className="flex items-start justify-between gap-4">

                    <div className="space-y-4 flex-1">

                        {/* STATUS */}
                        <div>

                            <span
                                className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium
                                
                                ${poll.isPublished
                                        ? "border-cyan-500/20 bg-cyan-500/10 text-cyan-300"
                                        : "border-yellow-500/20 bg-yellow-500/10 text-yellow-300"
                                    }
                                
                                `}
                            >

                                <div
                                    className={`h-2 w-2 rounded-full
                                    
                                    ${poll.isPublished
                                            ? "bg-cyan-400"
                                            : "bg-yellow-400"
                                        }
                                    
                                    `}
                                />

                                {
                                    poll.isPublished
                                        ? "Published"
                                        : "Draft"
                                }

                            </span>

                        </div>

                        {/* TITLE */}
                        <div>

                            <h3 className="text-2xl font-semibold tracking-tight text-white transition group-hover:text-cyan-300">

                                {poll.title}

                            </h3>

                            <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-zinc-400">

                                {poll.description}

                            </p>

                        </div>

                    </div>

                    {/* ICON */}
                    <div className="hidden sm:flex h-14 w-14 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-950 text-cyan-400">

                        <BarChart3 size={24} />

                    </div>

                </div>

                {/* META */}
                <div className="flex flex-wrap items-center gap-3">

                    <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-xs text-zinc-400">

                        <Clock3 size={14} />

                        <span>

                            {new Date(
                                poll.expiresAt
                            ).toLocaleDateString()}

                        </span>

                    </div>

                    <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-xs text-zinc-400">

                        <Link2 size={14} />

                        <span className="max-w-35 truncate">

                            /{poll.slug}

                        </span>

                    </div>

                </div>

                {/* ACTIONS */}
                <div className="flex flex-wrap gap-3 pt-1">

                    {/* COPY */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();

                            navigator.clipboard.writeText(
                                shareLink
                            );
                        }}
                        className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-2 text-sm font-medium text-zinc-300 transition hover:border-cyan-500/30 hover:text-cyan-300"
                    >

                        <Copy size={16} />

                        Copy Link

                    </button>

                    {/* PUBLISH */}
                    {!poll.isPublished && (

                        <button
                            onClick={handlePublish}
                            className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2 text-sm font-medium text-black transition hover:bg-cyan-400"
                        >

                            <Rocket size={16} />

                            Publish

                        </button>

                    )}

                    {/* DELETE */}
                    <button
                        onClick={handleDelete}
                        className="inline-flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-300 transition hover:bg-red-500/20"
                    >

                        <Trash2 size={16} />

                        Delete

                    </button>

                </div>

            </div>

        </div>
    );
};

export default PollCard;