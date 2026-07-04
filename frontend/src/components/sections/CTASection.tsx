import {
    ArrowRight,
    CheckCircle2,
    Sparkles,
    Activity,
    Users,
} from "lucide-react";

import Container from "../layout/Container";

const CTASection = () => {
    return (
        <section className="relative overflow-hidden py-32">

            {/* Background Glow */}

            <div className="absolute left-1/2 top-1/2 h-137.5 w-137.5-translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

            <Container>

                <div className="relative overflow-hidden rounded-[40px] border border-cyan-500/20 bg-linear-to-br from-zinc-900 via-zinc-900 to-cyan-950/40 px-10 py-20 shadow-[0_40px_100px_rgba(0,0,0,.45)]">

                    {/* Floating Cards */}

                    <div className="absolute left-10 top-10 hidden xl:block">

                        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/90 p-5 backdrop-blur-xl">

                            <Activity
                                className="mb-3 text-cyan-400"
                                size={26}
                            />

                            <p className="text-sm text-zinc-500">
                                Live Responses
                            </p>

                            <h3 className="mt-2 text-3xl font-bold">
                                +247
                            </h3>

                        </div>

                    </div>

                    <div className="absolute right-10 bottom-10 hidden xl:block">

                        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/90 p-5 backdrop-blur-xl">

                            <Users
                                className="mb-3 text-cyan-400"
                                size={26}
                            />

                            <p className="text-sm text-zinc-500">
                                Active Users
                            </p>

                            <h3 className="mt-2 text-3xl font-bold">
                                1.2K
                            </h3>

                        </div>

                    </div>

                    {/* Center */}

                    <div className="mx-auto max-w-3xl text-center">

                        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">

                            <Sparkles size={16} />

                            Ready to launch?

                        </div>

                        <h2 className="mt-8 text-5xl font-bold tracking-tight sm:text-6xl">

                            Create polls your audience
                            actually enjoys.

                        </h2>

                        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">

                            Launch interactive polls in seconds,
                            collect responses instantly,
                            and uncover insights through beautiful
                            realtime analytics.

                        </p>

                        {/* Benefits */}

                        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm">

                            {[
                                "Free to start",
                                "Realtime analytics",
                                "Share instantly",
                            ].map((item) => (

                                <div
                                    key={item}
                                    className="flex items-center gap-2"
                                >

                                    <CheckCircle2
                                        size={18}
                                        className="text-cyan-400"
                                    />

                                    <span>{item}</span>

                                </div>

                            ))}

                        </div>

                        {/* Buttons */}

                        <div className="mt-12 flex flex-wrap justify-center gap-5">

                            <button className="group flex items-center gap-3 rounded-2xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-cyan-400">

                                Start Creating

                                <ArrowRight
                                    size={18}
                                    className="transition group-hover:translate-x-1"
                                />

                            </button>

                            <button className="rounded-2xl border border-zinc-700 bg-zinc-900 px-8 py-4 font-semibold transition hover:border-cyan-500">

                                View Demo

                            </button>

                        </div>

                    </div>

                </div>

            </Container>

        </section>
    );
};

export default CTASection;