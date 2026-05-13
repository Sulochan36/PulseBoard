import { useEffect, useState } from "react";
import { getMyPollsAPI } from "../services/poll.service";
import PollCard from "../components/PollCard";
import { useAuth } from "@clerk/react";

const Dashboard = () => {

    const [polls, setPolls] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const { getToken } = useAuth();

    
    const fetchPolls = async () => {
        try {
            const token = await getToken();
            const res = await getMyPollsAPI(token);
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
        <div className="min-h-screen bg-zinc-950 text-white p-6">

            <h2 className="text-3xl font-bold mb-6">
                Your Polls
            </h2>

            {loading ? (
                <p>Loading...</p>
            ) : polls.length === 0 ? (
                <p>No polls created yet.</p>
            ) : (
                <div className="grid gap-4 md:grid-cols-2">
                    {polls.map((poll) => (
                        <PollCard
                            key={poll._id}
                            poll={poll}
                            onRefresh={fetchPolls}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dashboard;