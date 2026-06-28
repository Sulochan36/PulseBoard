import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPublicPollAPI } from "../services/poll.service";
import { submitResponseAPI } from "../services/response.service";
import { socket } from "../lib/socket";
import { useUser } from "@clerk/react";
import { CheckCircle2, Send, Vote } from "lucide-react";

const PollPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    const { user } = useUser();

    const [poll, setPoll] = useState<any>(null);
    const [answers, setAnswers] = useState<any>({});
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        const fetchPoll = async () => {
            const data = await getPublicPollAPI(slug!); 
            setPoll(data.poll);
        };

        fetchPoll();
    }, [slug]);


    useEffect(() => {

        if (!poll?._id) return;

        socket.emit("poll:userResponding", {
            pollId: poll._id,
            username: user?.fullName || "Anonymous",
            isAnonymous: !user,
        });

    }, [poll, user]);

    const handleSelect = (
        questionId: string,
        optionId: string
    ) => {
        setAnswers({
            ...answers,
            [questionId]: optionId,
        });
    };


    const handleSubmit = async () => {

        try {
            setSubmitting(true);

            const formattedAnswers = Object.entries(answers).map(
                ([questionId, selectedOptionId]) => ({
                    questionId,
                    selectedOptionId,
                })
            );

            await submitResponseAPI({
                pollId: poll._id,
                answers: formattedAnswers,
            });

            socket.emit("poll:responseSubmitted", {
                pollId: poll._id,
                username: user?.fullName || "Anonymous",
                isAnonymous: !user,
            });

            navigate(`/poll/${slug}/success`);

        } catch (err) {
            console.log(err);
        } finally {
            setSubmitting(false);
        }
    };

    if (!poll) {
        return (
            <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
                <div className="animate-pulse text-zinc-400">
                    Loading poll...
                </div>
            </div>
        );
    }


    return (
        <div className="min-h-screen bg-zinc-950 text-white px-4 py-10">

           
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-1/2 -translate-x-1/2 h-[300px] w-[300px] bg-cyan-500/10 blur-3xl rounded-full" />
            </div>

            <div className="max-w-3xl mx-auto space-y-8">

                
                <div className="text-center space-y-2">

                    <div className="inline-flex items-center gap-2 text-sm text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1 rounded-full">
                        <Vote size={14} />
                        Live Poll
                    </div>

                    <h1 className="text-4xl font-bold">
                        {poll.title}
                    </h1>

                    <p className="text-zinc-400">
                        {poll.description}
                    </p>

                </div>

                
                <div className="space-y-6">

                    {poll.questions.map((q: any) => {

                        const selected = answers[q._id];

                        return (
                            <div
                                key={q._id}
                                className="bg-zinc-900/60 border border-white/10 rounded-3xl p-6 space-y-5 hover:border-white/20 transition"
                            >

                                
                                <h3 className="text-lg font-semibold">
                                    {q.question}
                                </h3>

                                
                                <div className="space-y-3">

                                    {q.options.map((opt: any) => {

                                        const isSelected = selected === opt._id;

                                        return (
                                            <label
                                                key={opt._id}
                                                className={`
                                                    flex items-center gap-3 p-3 rounded-2xl cursor-pointer transition
                                                    border
                                                    ${isSelected
                                                        ? "border-cyan-500 bg-cyan-500/10"
                                                        : "border-white/10 hover:border-white/20 bg-zinc-950/40"
                                                    }
                                                `}
                                            >

                                                <input
                                                    type="radio"
                                                    name={q._id}
                                                    className="hidden"
                                                    onChange={() =>
                                                        handleSelect(q._id, opt._id)
                                                    }
                                                />

                                                <div
                                                    className={`
                                                        w-4 h-4 rounded-full border
                                                        ${isSelected
                                                            ? "bg-cyan-500 border-cyan-500"
                                                            : "border-zinc-500"
                                                        }
                                                    `}
                                                />

                                                <span className="flex-1 text-sm">
                                                    {opt.text}
                                                </span>

                                                {isSelected && (
                                                    <CheckCircle2
                                                        size={16}
                                                        className="text-cyan-400"
                                                    />
                                                )}

                                            </label>
                                        );
                                    })}

                                </div>

                            </div>
                        );
                    })}

                </div>

                
                <div className="pt-4">

                    <button
                        onClick={handleSubmit}
                        disabled={submitting}
                        className={`
                            w-full flex items-center justify-center gap-2
                            px-5 py-4 rounded-2xl font-semibold transition
                            ${submitting
                                ? "bg-zinc-700 cursor-not-allowed"
                                : "bg-cyan-600 hover:bg-cyan-500"
                            }
                        `}
                    >
                        <Send size={16} />
                        {submitting ? "Submitting..." : "Submit Response"}
                    </button>

                </div>

            </div>
        </div>
    );
};

export default PollPage;