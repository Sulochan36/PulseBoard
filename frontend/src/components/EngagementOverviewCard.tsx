import { RadioTower, Sparkles } from "lucide-react";

const EngagementOverviewCard = () => {
    return (
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 backdrop-blur-xl p-6">
            <div className="flex items-center gap-3 mb-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                    <RadioTower size={22} />
                </div>

                <div>
                    <h3 className="text-lg font-semibold">
                        Live Engagement
                    </h3>

                    <p className="text-sm text-zinc-500">
                        Coming soon
                    </p>
                </div>
            </div>

            <div className="rounded-2xl border border-dashed border-cyan-500/20 bg-zinc-950 p-8 text-center">
                <Sparkles
                    size={42}
                    className="mx-auto mb-4 text-cyan-400"
                />

                <h4 className="text-lg font-semibold">
                    Real-time Activity
                </h4>

                <p className="mt-2 text-sm leading-6 text-zinc-500">
                    Monitor live visitors, users currently answering polls,
                    and engagement across all published polls in one place.
                </p>

                <div className="mt-6 rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                    Planned Feature
                </div>
            </div>
        </div>
    );
};

export default EngagementOverviewCard;