import { useNavigate } from "react-router-dom";
import { deletePollAPI, publishPollAPI } from "../services/poll.service";

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
        <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-3">

            
            <h3
                onClick={() =>
                    navigate(`/dashboard/poll/${poll._id}`)
                }
                className="text-xl font-semibold cursor-pointer"
            >
                {poll.title}
            </h3>

            <p className="text-sm text-zinc-400">
                {poll.description}
            </p>

            <div className="flex gap-2 text-xs">
                <span className={`px-2 py-1 rounded ${poll.isPublished
                        ? "bg-green-600"
                        : "bg-yellow-600"
                    }`}>
                    {poll.isPublished ? "Published" : "Draft"}
                </span>
            </div>

            <p className="text-xs text-zinc-500">
                Expires:{" "}
                {new Date(poll.expiresAt).toLocaleString()}
            </p>

            <div className="flex gap-3 flex-wrap">

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        navigator.clipboard.writeText(shareLink);
                    }}
                    className="px-3 py-1 bg-blue-600 rounded"
                >
                    Copy Link
                </button>

                {!poll.isPublished && (
                    <button
                        onClick={handlePublish}
                        className="px-3 py-1 bg-green-600 rounded"
                    >
                        Publish
                    </button>
                )}

                <button
                    onClick={handleDelete}
                    className="px-3 py-1 bg-red-600 rounded"
                >
                    Delete
                </button>

            </div>

        </div>
    );
};

export default PollCard;