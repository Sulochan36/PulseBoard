import Container from "../layout/Container";

const stats = [
    {
        title: "Realtime Analytics",
        value: "Live",
    },
    {
        title: "Responses Collected",
        value: "10K+",
    },
    {
        title: "Public Poll Sharing",
        value: "Instant",
    },
    {
        title: "Response Modes",
        value: "2 Types",
    },
];

const StatsStrip = () => {
    return (
        <section className="pb-20">
            <Container>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                    {stats.map((stat) => (
                        <div
                            key={stat.title}
                            className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6"
                        >
                            <p className="text-sm text-zinc-500">
                                {stat.title}
                            </p>

                            <h3 className="mt-3 text-2xl font-bold text-cyan-300">
                                {stat.value}
                            </h3>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default StatsStrip;