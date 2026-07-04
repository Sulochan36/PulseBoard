import {
    Activity,
    BarChart3,
    Globe,
    ShieldCheck,
    ArrowRight,
} from "lucide-react";

import Container from "../layout/Container";

const Features = () => {
    return (
        <section
            id="features"
            className="relative py-32"
        >
            <Container>

                {/* HEADER */}

                <div className="mx-auto max-w-3xl text-center">

                    <div className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                        Platform Features
                    </div>

                    <h2 className="mt-6 text-5xl font-bold tracking-tight">
                        Everything required for modern polling.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-zinc-400">
                        From creating polls to collecting responses and
                        visualizing analytics in realtime, PollBuilder
                        provides every tool needed for engaging audience
                        interaction.
                    </p>

                </div>


                {/* FEATURE 1 */}

                <div className="mt-24 grid items-center gap-16 lg:grid-cols-2">

                    <div>

                        <div className="mb-5 inline-flex rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">
                            Live Responses
                        </div>

                        <h3 className="text-4xl font-bold">
                            Watch responses arrive instantly.
                        </h3>

                        <p className="mt-6 text-lg leading-8 text-zinc-400">
                            Every vote appears in realtime without refreshing
                            the page. Perfect for classrooms, events,
                            communities and live presentations.
                        </p>

                        <ul className="mt-10 space-y-5">

                            <li className="flex gap-4">
                                <Activity className="text-cyan-400" />
                                <span>
                                    Socket powered live updates
                                </span>
                            </li>

                            <li className="flex gap-4">
                                <Activity className="text-cyan-400" />
                                <span>
                                    Multiple users simultaneously
                                </span>
                            </li>

                            <li className="flex gap-4">
                                <Activity className="text-cyan-400" />
                                <span>
                                    Instant audience participation
                                </span>
                            </li>

                        </ul>

                    </div>


                    {/* MOCKUP */}

                    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-8">

                        <div className="flex items-center justify-between">

                            <h4 className="font-semibold">
                                Live Responses
                            </h4>

                            <div className="flex items-center gap-2 text-cyan-400">

                                <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />

                                Live

                            </div>

                        </div>

                        <div className="mt-8 space-y-4">

                            {[
                                "React",
                                "Vue",
                                "Angular",
                                "Svelte",
                            ].map((item, i) => (

                                <div
                                    key={item}
                                    className="rounded-xl border border-zinc-800 bg-zinc-950 p-4"
                                >

                                    <div className="flex justify-between">

                                        <span>{item}</span>

                                        <span>{72 - i * 15}%</span>

                                    </div>

                                    <div className="mt-3 h-2 rounded-full bg-zinc-800">

                                        <div
                                            className="h-full rounded-full bg-cyan-400"
                                            style={{
                                                width: `${72 - i * 15}%`,
                                            }}
                                        />

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>



                {/* FEATURE 2 */}

                <div className="mt-32 grid items-center gap-16 lg:grid-cols-2">

                    <div className="order-2 lg:order-1 rounded-3xl border border-zinc-800 bg-zinc-900/80 p-8">

                        <div className="flex items-center justify-between">

                            <h4 className="font-semibold">
                                Analytics Dashboard
                            </h4>

                            <BarChart3 className="text-cyan-400" />

                        </div>

                        <div className="mt-10 space-y-6">

                            {[82, 64, 47].map((v) => (

                                <div key={v}>

                                    <div className="mb-2 flex justify-between text-sm">

                                        <span>Question</span>

                                        <span>{v}%</span>

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


                    <div className="order-1 lg:order-2">

                        <div className="mb-5 inline-flex rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">
                            Analytics
                        </div>

                        <h3 className="text-4xl font-bold">
                            Beautiful insights without extra tools.
                        </h3>

                        <p className="mt-6 text-lg leading-8 text-zinc-400">
                            Understand participation through realtime charts,
                            percentages, response distribution and poll
                            performance metrics.
                        </p>

                    </div>

                </div>



                {/* SMALL FEATURES */}

                <div className="mt-28 grid gap-6 md:grid-cols-2">

                    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8">

                        <ShieldCheck
                            size={34}
                            className="text-cyan-400"
                        />

                        <h3 className="mt-6 text-2xl font-semibold">
                            Flexible Response Modes
                        </h3>

                        <p className="mt-4 text-zinc-400 leading-7">
                            Switch between anonymous participation and
                            authenticated voting depending on your audience.
                        </p>

                    </div>

                    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8">

                        <Globe
                            size={34}
                            className="text-cyan-400"
                        />

                        <h3 className="mt-6 text-2xl font-semibold">
                            Share Anywhere
                        </h3>

                        <p className="mt-4 text-zinc-400 leading-7">
                            Publish polls with a single click and distribute
                            them instantly using shareable public links.
                        </p>

                    </div>

                </div>



                {/* CTA */}

                <div className="mt-24 flex justify-center">

                    <button className="group flex items-center gap-3 rounded-2xl bg-cyan-500 px-7 py-4 font-semibold text-black transition hover:bg-cyan-400">

                        Explore Platform

                        <ArrowRight
                            size={18}
                            className="transition group-hover:translate-x-1"
                        />

                    </button>

                </div>

            </Container>
        </section>
    );
};

export default Features;