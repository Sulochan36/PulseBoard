import {
    Activity,
    Users,
    TrendingUp,
    PieChart,
} from "lucide-react";

import Container from "../layout/Container";

const AnalyticsPreview = () => {
    return (
        <section
            id="analytics"
            className="relative py-32 overflow-hidden"
        >
            {/* background glow */}

            <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

            <Container>

                <div className="grid items-center gap-20 lg:grid-cols-2">

                    {/* LEFT */}

                    <div>

                        <div className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                            Live Analytics
                        </div>

                        <h2 className="mt-6 text-5xl font-bold tracking-tight">
                            Watch your audience
                            respond in realtime.
                        </h2>

                        <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
                            Every vote updates instantly.
                            Monitor participation, identify trends,
                            and understand audience preferences
                            through beautiful realtime analytics.
                        </p>

                        <div className="mt-10 space-y-5">

                            {[
                                "Realtime response updates",
                                "Interactive charts & visualizations",
                                "Completion rate monitoring",
                                "Live audience activity feed",
                            ].map((item) => (

                                <div
                                    key={item}
                                    className="flex items-center gap-3"
                                >
                                    <div className="h-2.5 w-2.5 rounded-full bg-cyan-400" />

                                    <span className="text-zinc-300">
                                        {item}
                                    </span>

                                </div>

                            ))}

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div className="relative">

                        {/* floating glow */}

                        <div className="absolute inset-0 rounded-[40px] bg-cyan-500/10 blur-3xl" />

                        <div className="relative rounded-[32px] border border-zinc-800 bg-zinc-900/80 p-7 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,.45)]">

                            {/* top */}

                            <div className="flex items-center justify-between">

                                <div>

                                    <p className="text-zinc-500 text-sm">
                                        Poll Analytics
                                    </p>

                                    <h3 className="mt-1 text-2xl font-semibold">
                                        Favorite Frontend Framework
                                    </h3>

                                </div>

                                <div className="flex items-center gap-2 rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">

                                    <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />

                                    Live

                                </div>

                            </div>

                            {/* stat cards */}

                            <div className="mt-8 grid grid-cols-3 gap-4">

                                <div className="rounded-2xl bg-zinc-950 p-4">

                                    <Users className="mb-3 text-cyan-400" />

                                    <p className="text-zinc-500 text-xs">
                                        Responses
                                    </p>

                                    <h4 className="mt-2 text-2xl font-bold">
                                        1,284
                                    </h4>

                                </div>

                                <div className="rounded-2xl bg-zinc-950 p-4">

                                    <TrendingUp className="mb-3 text-green-400" />

                                    <p className="text-zinc-500 text-xs">
                                        Completion
                                    </p>

                                    <h4 className="mt-2 text-2xl font-bold">
                                        96%
                                    </h4>

                                </div>

                                <div className="rounded-2xl bg-zinc-950 p-4">

                                    <Activity className="mb-3 text-orange-400" />

                                    <p className="text-zinc-500 text-xs">
                                        Live Users
                                    </p>

                                    <h4 className="mt-2 text-2xl font-bold">
                                        42
                                    </h4>

                                </div>

                            </div>

                            {/* charts */}

                            <div className="mt-8 grid grid-cols-[2fr_1fr] gap-5">

                                {/* bar chart */}

                                <div className="rounded-2xl bg-zinc-950 p-5">

                                    <p className="mb-5 text-sm text-zinc-500">
                                        Votes
                                    </p>

                                    <div className="space-y-4">

                                        {[84, 62, 35, 18].map((v, i) => (

                                            <div key={i}>

                                                <div className="mb-2 flex justify-between text-sm">

                                                    <span>
                                                        Option {i + 1}
                                                    </span>

                                                    <span>
                                                        {v}%
                                                    </span>

                                                </div>

                                                <div className="h-3 rounded-full bg-zinc-800">

                                                    <div
                                                        className="h-full rounded-full bg-cyan-400"
                                                        style={{
                                                            width: `${v}%`,
                                                        }}
                                                    />

                                                </div>

                                            </div>

                                        ))}

                                    </div>

                                </div>

                                {/* pie mock */}

                                <div className="flex flex-col items-center justify-center rounded-2xl bg-zinc-950">

                                    <div className="flex h-24 w-24 items-center justify-center rounded-full border-[10px] border-cyan-400 border-r-zinc-700 border-b-zinc-700">

                                        <PieChart
                                            size={26}
                                            className="text-cyan-300"
                                        />

                                    </div>

                                    <p className="mt-4 text-sm text-zinc-400">
                                        Distribution
                                    </p>

                                </div>

                            </div>

                            {/* activity */}

                            <div className="mt-8 rounded-2xl bg-zinc-950 p-5">

                                <p className="mb-4 text-sm text-zinc-500">
                                    Live Activity
                                </p>

                                <div className="space-y-3">

                                    {[
                                        "Rahul submitted a response",
                                        "Anonymous user joined",
                                        "3 new votes received",
                                    ].map((item) => (

                                        <div
                                            key={item}
                                            className="flex items-center gap-3 text-sm"
                                        >

                                            <div className="h-2 w-2 rounded-full bg-green-400" />

                                            <span className="text-zinc-300">
                                                {item}
                                            </span>

                                        </div>

                                    ))}

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </Container>

        </section>
    );
};

export default AnalyticsPreview;