import Container from "../layout/Container";

const steps = [
    "Create your poll",
    "Share the public link",
    "Watch live responses arrive",
];

const HowItWorks = () => {
    return (
        <section className="py-24">
            <Container>

                <div className="text-center">
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        How it works
                    </h2>
                </div>

                <div className="mt-16 grid gap-6 md:grid-cols-3">

                    {steps.map((step, index) => (
                        <div
                            key={step}
                            className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                                {index + 1}
                            </div>

                            <h3 className="mt-6 text-xl font-semibold">
                                {step}
                            </h3>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default HowItWorks;