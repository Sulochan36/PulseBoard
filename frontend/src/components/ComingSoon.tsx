import { Construction, ArrowLeft } from "lucide-react";
import { NavLink } from "react-router-dom";

interface Props {
    title?: string;
    description?: string;
}

const ComingSoon = ({
    title = "Coming Soon",
    description = "This section is currently under development. It'll be available in a future update.",
}: Props) => {
    return (
        <main className="relative flex min-h-[calc(100vh-180px)] items-center justify-center px-6">

            {/* Background Glow */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
            </div>

            <div className="w-full max-w-2xl">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">

                    <Construction size={36} />

                </div>

                <h1 className="mt-8 text-center text-4xl font-bold">
                    {title}
                </h1>

                <p className="mx-auto mt-4 max-w-xl text-center text-zinc-400 leading-7">
                    {description}
                </p>

                <h3 className="mt-6 text-center text-3xl font-bold bg-linear-to-r from-cyan-500 to-blue-400 w-fit mx-auto px-4 py-2 rounded-lg text-transparent bg-clip-text">
                    Coming Soon
                </h3>

                <div className="mx-auto mt-8 inline-flex w-full justify-center">

                    <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                        🚧 Under Active Development
                    </span>

                </div>

                <div className="mt-10 flex justify-center">

                    <NavLink
                        to="/dashboard"
                        className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-950 px-5 py-3 transition hover:border-cyan-500/40 hover:text-cyan-300"
                    >
                        <ArrowLeft size={18} />
                        Back to Dashboard
                    </NavLink>

                </div>

            </div>

        </main>
    );
};

export default ComingSoon;