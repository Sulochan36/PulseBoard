import Container from "../layout/Container";
import {
    Activity,
    Users,
    BarChart3,
    Globe2,
} from "lucide-react";

const stats = [
    {
        icon: Activity,
        value: "Live",
        title: "Realtime Analytics",
        description:
            "Watch responses update instantly as users vote.",
    },
    {
        icon: Users,
        value: "10K+",
        title: "Responses Collected",
        description:
            "Designed to handle audience engagement at scale.",
    },
    {
        icon: Globe2,
        value: "Instant",
        title: "Public Sharing",
        description:
            "Share polls anywhere with a single secure link.",
    },
    {
        icon: BarChart3,
        value: "2 Modes",
        title: "Response Privacy",
        description:
            "Support anonymous and authenticated voting.",
    },
];

const StatsStrip = () => {
    return (
        <section className="relative py-2">

            <Container>

                {/* Section Header */}

                <div className="mx-auto mb-16 max-w-2xl text-center">

                    <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                        Built for modern audience engagement
                    </span>

                    <h2 className="mt-6 text-4xl font-bold tracking-tight">
                        Everything updates in realtime.
                    </h2>

                    <p className="mt-5 text-zinc-400 leading-7">
                        From collecting votes to visualizing analytics,
                        PollVibes keeps creators connected with their audience
                        through fast, interactive experiences.
                    </p>

                </div>

                {/* Cards */}

                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

                    {stats.map((item) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={item.title}
                                className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl p-7 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/30 hover:bg-zinc-900"
                            >

                                {/* Glow */}

                                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                                <div className="relative">

                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-300">

                                        <Icon size={22} />

                                    </div>

                                    <h3 className="mt-8 text-4xl font-bold tracking-tight">

                                        {item.value}

                                    </h3>

                                    <p className="mt-3 font-medium text-white">

                                        {item.title}

                                    </p>

                                    <p className="mt-2 text-sm leading-6 text-zinc-500">

                                        {item.description}

                                    </p>

                                </div>

                            </div>

                        );
                    })}

                </div>

            </Container>

        </section>
    );
};

export default StatsStrip;