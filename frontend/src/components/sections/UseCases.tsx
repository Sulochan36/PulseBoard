import {
    Users,
    GraduationCap,
    Briefcase,
    Video,
} from "lucide-react";

import Container from "../layout/Container";

const cards = [
    {
        icon: Video,
        title: "Creators",
        description:
            "Run live polls during streams, videos and community events to keep your audience engaged.",
        preview: (
            <div className="space-y-2">
                <div className="flex justify-between text-xs text-zinc-400">
                    <span>Live Stream</span>
                    <span>84%</span>
                </div>
                <div className="h-2 rounded-full bg-zinc-800">
                    <div className="h-full w-[84%] rounded-full bg-cyan-400" />
                </div>
            </div>
        ),
    },
    {
        icon: Briefcase,
        title: "Teams",
        description:
            "Collect instant feedback during standups, sprint reviews and company meetings.",
        preview: (
            <div className="space-y-2">
                <div className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs">
                    ✓ Sprint approved
                </div>
            </div>
        ),
    },
    {
        icon: GraduationCap,
        title: "Education",
        description:
            "Measure understanding with quizzes and realtime classroom polling.",
        preview: (
            <div className="flex gap-2">
                <div className="h-8 w-8 rounded-lg bg-cyan-500/20" />
                <div className="h-8 flex-1 rounded-lg bg-zinc-800" />
            </div>
        ),
    },
    {
        icon: Users,
        title: "Communities",
        description:
            "Let members vote on decisions, events and ideas with transparent participation.",
        preview: (
            <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-zinc-400">
                    184 members voting
                </span>
            </div>
        ),
    },
];

const UseCases = () => {
    return (
        <section className="relative py-32">

            <Container>

                <div className="mx-auto max-w-3xl text-center">

                    <div className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                        Use Cases
                    </div>

                    <h2 className="mt-6 text-5xl font-bold tracking-tight">
                        Built for every conversation.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-zinc-400">
                        Whether you're engaging thousands of viewers,
                        collecting classroom feedback or making team
                        decisions, PollBuilder adapts to your workflow.
                    </p>

                </div>

                <div className="mt-20 grid gap-7 md:grid-cols-2 xl:grid-cols-4">

                    {cards.map((card) => {

                        const Icon = card.icon;

                        return (

                            <div
                                key={card.title}
                                className="group rounded-[28px] border border-zinc-800 bg-zinc-900/70 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/20"
                            >

                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 text-cyan-300">

                                    <Icon size={30} />

                                </div>

                                <h3 className="mt-8 text-2xl font-semibold">
                                    {card.title}
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-zinc-400">
                                    {card.description}
                                </p>

                                <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
                                    {card.preview}
                                </div>

                            </div>

                        );

                    })}

                </div>

            </Container>

        </section>
    );
};

export default UseCases;