import {ArrowUpRight} from "lucide-react";

import Container from "../layout/Container";

const Footer = () => {
    return (
        <footer className="relative mt-32 overflow-hidden border-t border-zinc-800 bg-linear-to-b from-black via-zinc-950 via-zinc-800 to-zinc-600 ">

            {/* Glow */}

            <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

            <Container>

                <div className="relative pt-15 pb-3">

                    {/* Top */}

                    <div className="grid gap-16 lg:grid-cols-[1.5fr_repeat(4,1fr)]">

                        {/* Brand */}

                        <div>

                            <h2 className="text-3xl font-bold tracking-tight">
                                PollVibes
                            </h2>

                            <p className="mt-5 max-w-sm leading-7 text-zinc-400">
                                Build beautiful realtime polls,
                                collect audience responses instantly,
                                and visualize live analytics with
                                a modern collaborative experience.
                            </p>

                        </div>

                        {/* Product */}

                        <div>

                            <h4 className="font-semibold mb-5">
                                Product
                            </h4>

                            <ul className="space-y-3 text-zinc-500">

                                <li><a href="#features" className="hover:text-cyan-500">Features</a></li>

                                <li><a href="#how-it-works" className="hover:text-cyan-500">How it Works</a></li>

                                <li><a href="#analytics" className="hover:text-cyan-500">Analytics</a></li>

                                <li><a href="#use-cases" className="hover:text-cyan-500">Use Cases</a></li>

                            </ul>

                        </div>

                        {/* Resources */}

                        <div>

                            <h4 className="font-semibold mb-5">
                                Resources
                            </h4>

                            <ul className="space-y-3 text-zinc-500">

                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-cyan-500"
                                    >
                                        Documentation
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-cyan-500"
                                    >
                                        GitHub
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-cyan-500"
                                    >
                                        Live Demo
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-cyan-500"
                                    >
                                        Roadmap
                                    </a>
                                </li>

                            </ul>

                        </div>

                        {/* Company */}

                        <div>

                            <h4 className="font-semibold mb-5">
                                Company
                            </h4>

                            <ul className="space-y-3 text-zinc-500">

                                <li><a href="#" className="hover:text-cyan-500">About</a></li>

                                <li><a href="#" className="hover:text-cyan-500">Contact</a></li>

                                <li><a href="#" className="hover:text-cyan-500">Privacy</a></li>

                                <li><a href="#" className="hover:text-cyan-500">Terms</a></li>

                            </ul>

                        </div>

                    </div>

                    {/* Divider */}

                    <div className="my-10 border-t border-zinc-800" />

                    {/* Bottom */}

                    <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">

                        <div className="text-sm text-zinc-500">

                            © {new Date().getFullYear()} PollVibes.
                            Crafted for realtime audience engagement.

                        </div>

                        <a
                            href="#"
                            className="group inline-flex items-center gap-2 text-sm text-cyan-400"
                        >

                            Back to top

                            <ArrowUpRight
                                size={16}
                                className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
                            />

                        </a>

                    </div>

                </div>

            </Container>

            {/* HUGE BRAND */}

            <div className="pointer-events-none overflow-hidden">

                <h1 className="select-none text-center text-[18vw] font-bold uppercase leading-none tracking-tighter text-zinc-500 opacity-25 text-shadow-lg/50 text-shadow-black">

                    PollVibes

                </h1>

            </div>

        </footer>
    );
};

export default Footer;