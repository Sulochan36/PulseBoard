import {
    ArrowRight,
    Activity,
    Users,
    BarChart3,
    Sparkles,
    Circle,
} from "lucide-react";

import Container from "../layout/Container";

const Hero = () => {
    return (
        <section className="relative overflow-hidden py-28 lg:py-36">

            {/* Background */}
            <div className="absolute inset-0 -z-10">

                <div className="absolute left-1/2 top-0 h-175 w-175 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

                <div className="absolute right-0 top-48 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

                <div className="absolute left-0 bottom-0 h-80 w-80 rounded-full bg-cyan-400/5 blur-[120px]" />

            </div>

            <Container>

                <div className="grid items-center gap-20 lg:grid-cols-[1fr_1.15fr]">

                    {/* LEFT */}

                    <div>

                        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">

                            <Sparkles size={16} />

                            Realtime Polling Platform

                        </div>

                        <h1 className="mt-8 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">

                            Engage every audience with{" "}

                            <span className="bg-linear-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">

                                realtime polls

                            </span>

                            {" "}and live insights.

                        </h1>

                        <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">

                            PollVibes helps educators, teams, communities and
                            event organizers create interactive polls, collect
                            live responses and make decisions instantly.

                        </p>

                        {/* CTA */}

                        <div className="mt-10 flex flex-wrap gap-4">

                            <button className="group flex items-center gap-2 rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 px-7 py-4 font-semibold text-black transition hover:scale-[1.03] hover:shadow-2xl hover:shadow-cyan-500/30">

                                Start Creating

                                <ArrowRight
                                    size={18}
                                    className="transition group-hover:translate-x-1"
                                />

                            </button>

                            <button className="rounded-2xl border border-zinc-700 bg-zinc-900/80 px-7 py-4 font-medium transition hover:border-cyan-500/30 hover:bg-zinc-800">

                                Live Demo

                            </button>

                        </div>

                        {/* Social Proof */}

                        <div className="mt-14 flex flex-wrap items-center gap-8 text-sm text-zinc-500">

                            <span>Hackathons</span>

                            <span>Education</span>

                            <span>Communities</span>

                            <span>Product Teams</span>

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div className="relative">

                        {/* Floating Card */}

                        <div className="absolute -left-10 top-20 hidden rounded-2xl border border-zinc-800 bg-zinc-900/90 px-5 py-4 shadow-xl backdrop-blur-xl lg:block">

                            <div className="flex items-center gap-3">

                                <div className="rounded-xl bg-cyan-500/10 p-3">

                                    <Users
                                        size={20}
                                        className="text-cyan-400"
                                    />

                                </div>

                                <div>

                                    <p className="text-xs text-zinc-500">

                                        Online Users

                                    </p>

                                    <h3 className="text-xl font-bold">

                                        128

                                    </h3>

                                </div>

                            </div>

                        </div>

                        <div className="absolute -right-10 bottom-10 hidden rounded-2xl border border-zinc-800 bg-zinc-900/90 px-5 py-4 shadow-xl backdrop-blur-xl lg:block">

                            <div className="flex items-center gap-3">

                                <div className="rounded-xl bg-green-500/10 p-3">

                                    <Activity
                                        size={20}
                                        className="text-green-400"
                                    />

                                </div>

                                <div>

                                    <p className="text-xs text-zinc-500">

                                        Completion

                                    </p>

                                    <h3 className="text-xl font-bold">

                                        94%

                                    </h3>

                                </div>

                            </div>

                        </div>

                        {/* Dashboard */}

                        <div className="rounded-4xl border border-zinc-800 bg-zinc-900/70 p-7 shadow-2xl backdrop-blur-xl">

                            {/* Top */}

                            <div className="flex items-center justify-between">

                                <div>

                                    <p className="text-sm text-zinc-500">

                                        Live Dashboard

                                    </p>

                                    <h3 className="mt-1 text-2xl font-bold">

                                        Frontend Survey

                                    </h3>

                                </div>

                                <div className="flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-2 text-sm text-cyan-300">

                                    <Circle
                                        size={8}
                                        fill="currentColor"
                                    />

                                    Live

                                </div>

                            </div>

                            {/* Stats */}

                            <div className="mt-8 grid grid-cols-3 gap-4">

                                {[
                                    {
                                        label: "Responses",
                                        value: "1,284",
                                    },
                                    {
                                        label: "Completion",
                                        value: "94%",
                                    },
                                    {
                                        label: "Visitors",
                                        value: "18",
                                    },
                                ].map((item) => (

                                    <div
                                        key={item.label}
                                        className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4"
                                    >

                                        <p className="text-xs text-zinc-500">

                                            {item.label}

                                        </p>

                                        <h4 className="mt-2 text-2xl font-bold">

                                            {item.value}

                                        </h4>

                                    </div>

                                ))}

                            </div>

                            {/* Poll Results */}

                            <div className="mt-8 space-y-5">

                                {[
                                    ["React", 64],
                                    ["Vue", 18],
                                    ["Angular", 10],
                                    ["Svelte", 8],
                                ].map(([label, value]) => (

                                    <div key={label}>

                                        <div className="mb-2 flex justify-between text-sm">

                                            <span>{label}</span>

                                            <span>{value}%</span>

                                        </div>

                                        <div className="h-3 overflow-hidden rounded-full bg-zinc-800">

                                            <div
                                                className="h-full rounded-full bg-linear-to-r from-cyan-400 to-blue-500"
                                                style={{
                                                    width: `${value}%`,
                                                }}
                                            />

                                        </div>

                                    </div>

                                ))}

                            </div>

                            {/* Bottom */}

                            <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-950 p-5">

                                <div className="flex items-center gap-3">

                                    <BarChart3
                                        className="text-cyan-400"
                                        size={20}
                                    />

                                    <div>

                                        <p className="text-sm font-medium">

                                            Live Analytics

                                        </p>

                                        <p className="text-xs text-zinc-500">

                                            Responses updating in realtime...

                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </Container>

        </section>
    );
};

export default Hero;