import { useEffect, useState } from "react";
import { getMyPollsAPI } from "../services/poll.service";
import Container from "../components/layout/Container";
import EmptyDashboard from "./EmptyDashboard";
import FilledDashboard from "./FilledDashboard";

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
                {loading ? (

                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                        {[1, 2, 3, 4, 5, 6].map((item) => (

                            <div
                                key={item}
                                className="h-56 rounded-3xl border border-zinc-800 bg-zinc-900/50 animate-pulse"
                            />

                        ))}

                    </div>

                ) : polls.length === 0 ? (

                    <div className="flex flex-col items-center justify-center border border-dashed border-zinc-800 rounded-3xl bg-zinc-900/40 py-24 px-6 text-center">

                        <EmptyDashboard/>

                    </div>

                ) : (
                    <div className="flex not-first:text-center">

                        <FilledDashboard/>

                    </div>

                )}

            </section>
        </Container>

        </main>
    );
};

export default Dashboard;