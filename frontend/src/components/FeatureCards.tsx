interface FeatureCardProps {
    title: string;
    description: string;
}

const FeatureCard = ({
    title,
    description,
}: FeatureCardProps) => {
    return (
        <div className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition duration-300 hover:border-cyan-500/30">

            <div className="absolute inset-0 bg-linear-to-br from-cyan-500/0 to-cyan-500/5 opacity-0 transition group-hover:opacity-100" />

            <div className="relative z-10">
                <div className="mb-8 h-48 rounded-2xl border border-zinc-800 bg-zinc-950" />

                <h3 className="text-2xl font-semibold tracking-tight">
                    {title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default FeatureCard;