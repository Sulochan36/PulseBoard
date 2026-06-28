import FeatureCard from "../FeatureCards";
import Container from "../layout/Container";

const Features = () => {
    return (
        <section id="features" className="py-24">
            <Container>

                <div className="max-w-2xl">
                    <p className="text-sm font-medium uppercase tracking-widest text-cyan-300">
                        Features
                    </p>

                    <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                        Built for live interaction.
                    </h2>
                </div>

                <div className="mt-16 grid gap-6 lg:grid-cols-2">

                    <FeatureCard
                        title="Realtime Responses"
                        description="Watch audience participation happen instantly with live updates powered by sockets."
                    />

                    <FeatureCard
                        title="Live Analytics"
                        description="Visualize responses using beautiful charts and realtime activity feeds."
                    />

                    <FeatureCard
                        title="Anonymous & Auth Modes"
                        description="Choose whether users can respond anonymously or with authentication."
                    />

                    <FeatureCard
                        title="Instant Sharing"
                        description="Generate public links and share polls across communities instantly."
                    />
                </div>
            </Container>
        </section>
    );
};

export default Features;