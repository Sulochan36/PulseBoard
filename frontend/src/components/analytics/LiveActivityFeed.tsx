interface Activity {
    type: string;
    message: string;
}

interface Props {
    activities: Activity[];
}

const LiveActivityFeed = ({activities}: Props) => {

    return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-4">

            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">
                    Live Activity
                </h2>

                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
            </div>

            <div className="space-y-3 max-h-80 overflow-y-auto">

                {activities.length === 0 ? (
                    <p className="text-zinc-500 text-sm">
                        No live activity yet
                    </p>
                ) : (
                    activities.map((activity, index) => (

                        <div
                            key={index}
                            className="bg-zinc-800 rounded-xl p-3 text-sm"
                        >
                            {activity.type === "responding" ? "🟡" : "🟢"}{" "}

                            {activity.message}
                        </div>

                    ))
                )}

            </div>

        </div>
    );
};

export default LiveActivityFeed;