import {
    Rocket,
    FilePlus2,
    Clock3,
    Pencil,
} from "lucide-react";

type ActivityType =
    | "published"
    | "created"
    | "edited"
    | "expires";

interface Activity {
    id: number;
    type: ActivityType;
    title: string;
    description: string;
    time: string;
}

const activities: Activity[] = [
    {
        id: 1,
        type: "published",
        title: "Frontend Framework Survey",
        description: "Your poll is now live and accepting responses.",
        time: "2 min ago",
    },
    {
        id: 2,
        type: "created",
        title: "Hackathon Feedback",
        description: "A new draft poll was created.",
        time: "1 hour ago",
    },
    {
        id: 3,
        type: "edited",
        title: "Remote Work Survey",
        description: "Questions were updated.",
        time: "Yesterday",
    },
    {
        id: 4,
        type: "expires",
        title: "JavaScript Trends",
        description: "Poll expires in 12 hours.",
        time: "Today",
    },
];

const iconMap = {
    published: {
        icon: Rocket,
        color: "text-cyan-400 bg-cyan-500/10",
        label: "Published",
    },
    created: {
        icon: FilePlus2,
        color: "text-blue-400 bg-blue-500/10",
        label: "Created",
    },
    edited: {
        icon: Pencil,
        color: "text-purple-400 bg-purple-500/10",
        label: "Edited",
    },
    expires: {
        icon: Clock3,
        color: "text-orange-400 bg-orange-500/10",
        label: "Expires Soon",
    },
};

const RecentActivityCard = () => {
    return (
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-5">
                <h3 className="text-xl font-semibold">
                    Recent Activity
                </h3>

                <button className="text-sm text-cyan-400 hover:text-cyan-300">
                    View All
                </button>
            </div>

            <div className="divide-y divide-zinc-800">
                {activities.map((activity) => {
                    const Item = iconMap[activity.type];

                    return (
                        <div
                            key={activity.id}
                            className="flex gap-4 p-5 transition hover:bg-zinc-800/40"
                        >
                            <div
                                className={`flex h-11 w-11 items-center justify-center rounded-2xl ${Item.color}`}
                            >
                                <Item.icon size={18} />
                            </div>

                            <div className="flex-1">
                                <div className="flex items-center justify-between">
                                    <span className="font-medium">
                                        {Item.label}
                                    </span>

                                    <span className="text-xs text-zinc-500">
                                        {activity.time}
                                    </span>
                                </div>

                                <p className="mt-1 font-semibold">
                                    {activity.title}
                                </p>

                                <p className="mt-1 text-sm text-zinc-400">
                                    {activity.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RecentActivityCard;