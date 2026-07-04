import { useEffect, useState } from "react";
import { getMyPollsAPI } from "../services/poll.service";
import Container from "../components/layout/Container";
import { useUser } from "@clerk/react";
import { NavLink } from "react-router-dom";
import RecentActivityCard from "../components/RecentActivityCard";
import TopPollsCard from "../components/TopPollsCard";
import UrgentActionsCard from "../components/UrgentActionsCard";
import EngagementOverviewCard from "../components/EngagementOverviewCard";

const FilledDashboard = () => {
    const [polls, setPolls] = useState<any[]>([]);

    const { user } = useUser();


    const fetchPolls = async () => {
        try {
            const res = await getMyPollsAPI();
            setPolls(res.polls);
        } catch (err) {
            console.log(err);
        } 
    };

    useEffect(() => {
        fetchPolls();
    }, []);


    return (
        <main className="w-full">

            {/* TOP GRADIENT */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-0 left-1/2 h-125 w-125 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
                <div className="absolute top-40 right-0 h-75 w-75 rounded-full bg-blue-500/10 blur-3xl" />
            </div>


            <Container>

                <section className="px-2 sm:px-2 lg:px-4 py-3 ">

                    {/* HEADER */}

                    <div className="flex flex-col gap-6 mb-10">
                        <div className='flex items-center justify-between mb-10'>
                            <div className='flex flex-col gap-3'>
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="h-3 w-3 rounded-full bg-cyan-400 animate-pulse" />
                                    <span className="text-sm uppercase tracking-[0.2em] text-cyan-400">
                                        Dashboard
                                    </span>
                                </div>

                                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                                    Welcome, {user?.firstName || user?.fullName || "User"}!
                                </h1>

                                <p className="mt-3 max-w-md mx-auto text-zinc-400 text-sm sm:text-base">
                                    Create, manage, and monitor realtime audience engagement
                                    with live analytics and response tracking.
                                </p>
                            </div>

                            <div>
                                <button className="w-full rounded-xl bg-linear-to-b from-cyan-500 to-blue-600 py-2 px-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/40 cursor-pointer">
                                <NavLink to="/dashboard/pollbuilder">
                                        + Create New Poll
                                </NavLink>
                                </button>
                            </div>
                        </div>

                        {/* QUICK STATS */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full sm:w-auto">

                            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 backdrop-blur-xl px-6 py-5 min-w-35">
                                <p className="text-zinc-500 text-sm mb-2">
                                    Total Polls
                                </p>

                                <h3 className="text-3xl font-bold">
                                    {polls.length}
                                </h3>
                            </div>

                            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 backdrop-blur-xl px-6 py-5 min-w-35">
                                <p className="text-zinc-500 text-sm mb-2">
                                    Active
                                </p>

                                <h3 className="text-3xl font-bold">
                                    {
                                        polls.filter((p) => !p.isClosed).length
                                    }

                                </h3>
                            </div>

                            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 backdrop-blur-xl px-6 py-5 min-w-35">
                                <p className="text-zinc-500 text-sm mb-2">
                                    Published
                                </p>

                                <h3 className="text-3xl font-bold">
                                    {
                                        polls.filter((p) => p.isPublished).length
                                    }

                                </h3>
                            </div>

                            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 backdrop-blur-xl px-6 py-5 min-w-35">
                                <p className="text-zinc-500 text-sm mb-2">
                                    Drafts
                                </p>

                                <h3 className="text-3xl font-bold">
                                    {
                                        polls.filter((p) => !p.isPublished).length
                                    }

                                </h3>
                            </div>

                        </div>

                    </div>



                    {/* CONTENT */}
                    <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-3">

                        <div className='space-y-6 xl:col-span-2'>

                            <div>
                                <div>
                                    <RecentActivityCard/>
                                </div>   

                            </div>

                            <div>

                                <div>
                                    <TopPollsCard />
                                </div>
                            </div>
                        </div >

                        <div className='space-y-6 xl:sticky xl:top-24'>
                            <div>
                                <UrgentActionsCard polls={polls} />
                            </div>

                            <div>
                                <EngagementOverviewCard />
                            </div>
                        </div>
                    </div>
                    

                </section>
            </Container>

        </main>
    )
}

export default FilledDashboard