
import Container from '../layout/Container'

const Hero = () => {
    return (
        <section className="relative py-24 sm:py-32">

            <Container>
                <div className="grid items-center gap-14 lg:grid-cols-2">

                    {/* LEFT */}
                    <div>
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                            ⚡ Realtime Polling Platform
                        </div>

                        <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
                            Create realtime polls that feel alive.
                        </h1>

                        <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
                            Build interactive polls, collect live responses,
                            and visualize audience insights instantly.
                        </p>

                        <div className="mt-10 flex flex-wrap items-center gap-4">

                            <button className="rounded-2xl bg-cyan-500 px-6 py-3 font-medium text-black hover:bg-cyan-400 transition">
                                Start Creating
                            </button>

                            <button className="rounded-2xl border border-zinc-700 bg-zinc-900 px-6 py-3 font-medium hover:border-zinc-500 transition">
                                Watch Demo
                            </button>
                        </div>
                    </div>

                    {/* RIGHT MOCKUP */}
                    <div className="relative">

                        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-2xl backdrop-blur-xl">
                            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                                <div>
                                    <h3 className="font-semibold">
                                        Favorite Frontend Framework?
                                    </h3>

                                    <p className="text-sm text-zinc-500">
                                        128 live responses
                                    </p>
                                </div>

                                <div className="flex items-center gap-2 text-sm text-cyan-300">
                                    <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                                    Live
                                </div>
                            </div>

                            <div className="mt-6 space-y-4">

                                <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-4">
                                    <div className="flex items-center justify-between">
                                        <span>React</span>
                                        <span>64%</span>
                                    </div>
                                </div>

                                <div className="rounded-2xl border border-zinc-700 bg-zinc-800 p-4">
                                    <div className="flex items-center justify-between">
                                        <span>Vue</span>
                                        <span>18%</span>
                                    </div>
                                </div>

                                <div className="rounded-2xl border border-zinc-700 bg-zinc-800 p-4">
                                    <div className="flex items-center justify-between">
                                        <span>Angular</span>
                                        <span>10%</span>
                                    </div>
                                </div>

                                <div className="rounded-2xl border border-zinc-700 bg-zinc-800 p-4">
                                    <div className="flex items-center justify-between">
                                        <span>Svelte</span>
                                        <span>8%</span>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div >
                </div >
            </Container >
        </section >
    );
}

export default Hero