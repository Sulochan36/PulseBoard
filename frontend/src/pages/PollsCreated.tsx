import { useEffect, useState } from 'react'
import Container from '../components/layout/Container'
import PollCard from '../components/PollCard'
import { getMyPollsAPI } from '../services/poll.service';

const PollsCreated = () => {
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
        <Container>
            <div className='flex flex-col gap-6 '>

                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">

                    Your Polls

                </h1>


            {/* POLLS */}

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
            </div>
        </Container>
    )
}

export default PollsCreated