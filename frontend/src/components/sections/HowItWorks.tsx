import {
    FileText,
    Link2,
    BarChart3,
    ArrowRight,
} from "lucide-react";

import Container from "../layout/Container";

const steps = [
    {
        icon: FileText,
        title: "Create your poll",
        description:
            "Build polls with multiple questions, custom options and flexible response modes in minutes.",
        preview: (
            <div className="space-y-3">
                <div className="h-3 w-32 rounded bg-zinc-700" />
                <div className="h-10 rounded-xl border border-zinc-700 bg-zinc-900" />
                <div className="h-10 rounded-xl border border-zinc-700 bg-zinc-900" />
            </div>
        ),
    },
    {
        icon: Link2,
        title: "Publish & share",
        description:
            "Generate a public link instantly and share it anywhere with your audience.",
        preview: (
            <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-3 text-sm text-cyan-300">
                pollbuilder.app/p/...
            </div>
        ),
    },
    {
        icon: BarChart3,
        title: "Watch insights live",
        description:
            "Monitor live responses with realtime charts, percentages and activity feeds.",
        preview: (
            <div className="space-y-3">
                {[75, 48, 28].map((v) => (
                    <div
                        key={v}
                        className="space-y-2"
                    >
                        <div className="h-2 rounded-full bg-zinc-800">
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
        ),
    },
];

const HowItWorks = () => {
    return (
        <section className="relative py-32">

            <Container>

                {/* Heading */}

                <div className="mx-auto max-w-3xl text-center">

                    <div className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                        Simple Workflow
                    </div>

                    <h2 className="mt-6 text-5xl font-bold tracking-tight">
                        From creation to insights in minutes.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-zinc-400">
                        PollBuilder removes the complexity of audience
                        engagement. Create, publish and start collecting
                        responses immediately.
                    </p>

                </div>

                {/* Timeline */}

                <div className="relative mt-24">

                    {/* connecting line */}

                    <div className="absolute left-0 right-0 top-7 hidden h-px bg-linear-to-r from-transparent via-zinc-700 to-transparent lg:block" />

                    <div className="grid gap-10 lg:grid-cols-3">

                        {steps.map((step, index) => {

                            const Icon = step.icon;

                            return (

                                <div
                                    key={step.title}
                                    className="relative rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-500/20"
                                >

                                    {/* Number */}

                                    <div className="absolute -top-5 left-8 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/20 bg-zinc-950 font-semibold text-cyan-300">
                                        {index + 1}
                                    </div>

                                    <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">

                                        <Icon size={28} />

                                    </div>

                                    <h3 className="mt-8 text-2xl font-semibold">
                                        {step.title}
                                    </h3>

                                    <p className="mt-4 leading-7 text-zinc-400">
                                        {step.description}
                                    </p>

                                    <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
                                        {step.preview}
                                    </div>

                                    {index !== 2 && (
                                        <ArrowRight
                                            size={22}
                                            className="absolute -right-5 top-1/2 hidden -translate-y-1/2 text-zinc-700 lg:block"
                                        />
                                    )}

                                </div>

                            );
                        })}

                    </div>

                </div>

            </Container>

        </section>
    );
};

export default HowItWorks;