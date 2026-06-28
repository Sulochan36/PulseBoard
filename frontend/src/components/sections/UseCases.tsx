import Container from "../layout/Container";

const cards = [
    "Creators",
    "Communities",
    "Teams",
    "Education",
];

const UseCases = () => {
    return (
        <section className="py-24">
            <Container>

                <div className="max-w-2xl">
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        Designed for modern communities.
                    </h2>
                </div>

                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                    {cards.map((card) => (
                        <div
                            key={card}
                            className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 text-center"
                        >
                            <div className="mx-auto h-20 w-20 rounded-2xl bg-zinc-800" />

                            <h3 className="mt-6 text-xl font-semibold">
                                {card}
                            </h3>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default UseCases;