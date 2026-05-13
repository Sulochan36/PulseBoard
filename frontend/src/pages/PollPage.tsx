import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPublicPollAPI } from "../services/poll.service";
import { submitResponseAPI } from "../services/response.service";
import { socket } from "../lib/socket";
import { useUser } from "@clerk/react";

const PollPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    const { user } = useUser();

    const [poll, setPoll] = useState<any>(null);
    const [answers, setAnswers] = useState<any>({});

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
    };

    if (!poll) return <div>Loading...</div>;

    return (
        <div className="bg-zinc-800 p-6 text-white">
            <h1 className="text-3xl font-bold">{poll.title}</h1>
            <p className="text-gray-400">{poll.description}</p>

            <div className="mt-6 space-y-6">
                {poll.questions.map((q: any) => (
                    <div key={q._id}>
                        <h3 className="font-semibold">
                            {q.question}
                        </h3>

                        <div className="mt-2 space-y-2">
                            {q.options.map((opt: any, idx: number) => (
                                <label
                                    key={idx}
                                    className="block"
                                >
                                    <input
                                        type="radio"
                                        name={q._id}
                                        onChange={() =>
                                            handleSelect(
                                                q._id,
                                                opt._id
                                            )
                                        }
                                    />
                                    <span className="ml-2">
                                        {opt.text}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={handleSubmit}
                className="mt-6 bg-white text-black px-4 py-2 rounded"
            >
                Submit
            </button>
        </div>
    );
};

export default PollPage;