import Container from "../layout/Container";

const AnalyticsPreview = () => {
    return (
        <section id="analytics" className="py-24">
            <Container>

                <div className="grid items-center gap-14 lg:grid-cols-2">

                    <div>
                        <p className="text-sm font-medium uppercase tracking-widest text-cyan-300">
                            Realtime Insights
                        </p>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                            Track audience behavior live.
                        </h2>

                        <p className="mt-6 leading-8 text-zinc-400">
                            Monitor responses, engagement, and participation using live analytics dashboards.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 min-h-[400px]" />
                </div>
            </Container>
        </section>
    );
};

export default AnalyticsPreview;