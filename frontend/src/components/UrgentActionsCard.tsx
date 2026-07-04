import {
    Clock3,
    Rocket,
    ArrowRight,
} from "lucide-react";
import type { Poll, UrgentAction } from "../types/polltypes";

interface Props {
    polls: Poll[];
}

const UrgentActionsCard = ({ polls }: Props) => {
    const actions: UrgentAction[] = [];

    const drafts = polls.filter((p) => !p.isPublished);

    drafts.slice(0, 2).forEach((poll) => {
        actions.push({
            icon: Rocket,
            color: "text-cyan-400",
            title: "Publish Draft",
            subtitle: poll.title,
            action: "Publish",
        });
    });

    const expiring = polls
        .filter((p) => {
            const hours =
                (new Date(p.expiresAt).getTime() - Date.now()) /
                (1000 * 60 * 60);

            return hours > 0 && hours < 24;
        })
        .slice(0, 2);

    expiring.forEach((poll) => {
        actions.push({
            icon: Clock3,
            color: "text-orange-400",
            title: "Expiring Soon",
            subtitle: poll.title,
            action: "View",
        });
    });

    return (
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 backdrop-blur-xl p-6">

            <h3 className="text-lg font-semibold mb-5">
                Urgent Actions
            </h3>

            <div className="space-y-4">

                {actions.length === 0 ? (
                    <div className="rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-green-300 text-sm">
                        🎉 Everything looks good.
                    </div>
                ) : (
                    actions.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4"
                            >
                                <div className="flex justify-between">

                                    <div className="flex gap-3">

                                        <div
                                            className={`h-10 w-10 rounded-xl bg-zinc-900 flex items-center justify-center ${item.color}`}
                                        >
                                            <Icon size={18} />
                                        </div>

                                        <div>

                                            <h4 className="font-medium">
                                                {item.title}
                                            </h4>

                                            <p className="text-sm text-zinc-500">
                                                {item.subtitle}
                                            </p>

                                        </div>

                                    </div>

                                    <button className="text-cyan-400 hover:text-cyan-300">
                                        <ArrowRight size={18} />
                                    </button>

                                </div>
                            </div>
                        );
                    })
                )}

            </div>
        </div>
    );
};

export default UrgentActionsCard;