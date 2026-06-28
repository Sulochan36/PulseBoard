import Container from "../layout/Container";

const CTASection = () => {
    return (
        <section className="py-24">
            <Container>

                <div className="overflow-hidden rounded-[32px] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-10 sm:p-16">

                    <div className="max-w-3xl">
                        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                            Start your first realtime poll today.
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-zinc-300">
                            Build engaging polls, collect live responses,
                            and track analytics instantly.
                        </p>

                        <button className="mt-10 rounded-2xl bg-cyan-500 px-6 py-3 font-medium text-black hover:bg-cyan-400 transition">
                            Create Poll
                        </button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default CTASection;