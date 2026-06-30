import { useEffect, useState } from "react";
import { getMyPollsAPI } from "../services/poll.service";
import PollCard from "../components/PollCard";
import Container from "../components/layout/Container";

const Dashboard = () => {

    const [polls, setPolls] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    
    const fetchPolls = async () => {
        try {
            const res = await getMyPollsAPI();
            setPolls(res.polls);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPolls();
    }, []);

    return (

        <main>

            {/* TOP GRADIENT */}
            <div className="absolute inset-0 -z-10 overflow-hidden">

                <div className="absolute top-0 left-1/2 h-125 w-125 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

                <div className="absolute top-40 right-0 h-75 w-75 rounded-full bg-blue-500/10 blur-3xl" />

            </div>


            <Container>
                <section className="px-4 sm:px-6 lg:px-8 py-8">

                {/* HEADER */}
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between mb-10">

                    <div>

                        <div className="flex items-center gap-3 mb-3">

                            <div className="h-3 w-3 rounded-full bg-cyan-400 animate-pulse" />

                            <span className="text-sm uppercase tracking-[0.2em] text-cyan-400">
                                Dashboard
                            </span>

                        </div>

                        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">

                            Your Polls

                        </h1>

                        <p className="mt-3 max-w-2xl text-zinc-400 text-sm sm:text-base">

                            Create, manage, and monitor realtime audience engagement
                            with live analytics and response tracking.

                        </p>

                    </div>

                    {/* QUICK STATS */}
                    <div className="grid grid-cols-2 gap-4 w-full sm:w-auto">

                        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 backdrop-blur-xl px-6 py-5 min-w-35">

                            <p className="text-zinc-500 text-sm mb-2">
                                Total Polls
                            </p>

                            <h3 className="text-3xl font-bold">
                                {polls.length}
                            </h3>

                        </div>

                        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 backdrop-blur-xl px-6 py-5 min-w-[140px]">

                            <p className="text-zinc-500 text-sm mb-2">
                                Active
                            </p>

                            <h3 className="text-3xl font-bold text-cyan-400">

                                {
                                    polls.filter((p) => !p.isClosed).length
                                }

                            </h3>

                        </div>

                    </div>

                </div>

                {/* CONTENT */}
                {loading ? (

                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                        {[1, 2, 3, 4].map((item) => (

                            <div
                                key={item}
                                className="h-56 rounded-3xl border border-zinc-800 bg-zinc-900/50 animate-pulse"
                            />

                        ))}

                    </div>

                ) : polls.length === 0 ? (

                    <div className="flex flex-col items-center justify-center border border-dashed border-zinc-800 rounded-3xl bg-zinc-900/40 py-24 px-6 text-center">

                        <div className="mb-6 h-20 w-20 rounded-full bg-cyan-500/10 flex items-center justify-center">

                            <div className="h-8 w-8 rounded-full bg-cyan-400" />

                        </div>

                        <h2 className="text-2xl font-semibold mb-3">

                            No polls yet

                        </h2>

                        <p className="max-w-md text-zinc-400">

                            Start creating realtime polls, collect responses,
                            and visualize audience insights instantly.

                        </p>

                    </div>

                ) : (

                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                        {polls.map((poll) => (

                            <div
                                key={poll._id}
                                className="group"
                            >

                                <div className="transition duration-300 group-hover:-translate-y-1 group-hover:scale-[1.01]">

                                    <PollCard
                                        poll={poll}
                                        onRefresh={fetchPolls}
                                    />

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </section>
        </Container>

        </main>
    );
};

export default Dashboard;