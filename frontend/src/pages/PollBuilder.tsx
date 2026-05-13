import { useState } from "react";
import { createPollAPI } from "../services/poll.service";

type Option = {
    text: string;
};

type Question = {
    question: string;
    required: boolean;
    options: Option[];
};

type PollFormData = {
    title: string;
    description: string;
    responseMode: "anonymous" | "authenticated";
    expiresAt: string;
    questions: Question[];
};

const initialQuestion: Question = {
    question: "",
    required: true,
    options: [{ text: "" }, { text: "" }],
};

export default function PollBuilder() {
    const [formData, setFormData] = useState<PollFormData>({
        title: "",
        description: "",
        responseMode: "anonymous",
        expiresAt: "",
        questions: [initialQuestion],
    });

    const [loading, setLoading] = useState(false);
    const [createdPollLink, setCreatedPollLink] = useState("");



    const handleBasicChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };



    const addQuestion = () => {
        setFormData({
            ...formData,
            questions: [
                ...formData.questions,
                {
                    question: "",
                    required: true,
                    options: [{ text: "" }, { text: "" }],
                },
            ],
        });
    };


    const removeQuestion = (questionIndex: number) => {
        const updatedQuestions = [...formData.questions];

        updatedQuestions.splice(questionIndex, 1);

        setFormData({
            ...formData,
            questions: updatedQuestions,
        });
    };


    const handleQuestionChange = (questionIndex: number,value: string) => {
        const updatedQuestions = [...formData.questions];

        updatedQuestions[questionIndex].question = value;

        setFormData({
            ...formData,
            questions: updatedQuestions,
        });
    };


    const toggleRequired = (questionIndex: number) => {
        const updatedQuestions = [...formData.questions];

        updatedQuestions[questionIndex].required =
            !updatedQuestions[questionIndex].required;

        setFormData({
            ...formData,
            questions: updatedQuestions,
        });
    };


    const addOption = (questionIndex: number) => {
        const updatedQuestions = [...formData.questions];

        updatedQuestions[questionIndex].options.push({
            text: "",
        });

        setFormData({
            ...formData,
            questions: updatedQuestions,
        });
    };



    const removeOption = (questionIndex: number,optionIndex: number) => {
        const updatedQuestions = [...formData.questions];

        updatedQuestions[questionIndex].options.splice(optionIndex, 1);

        setFormData({
            ...formData,
            questions: updatedQuestions,
        });
    };



    const handleOptionChange = (questionIndex: number,optionIndex: number,value: string) => {
        const updatedQuestions = [...formData.questions];

        updatedQuestions[questionIndex].options[optionIndex].text =
            value;

        setFormData({
            ...formData,
            questions: updatedQuestions,
        });
    };

    

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setLoading(true);

            const response = await createPollAPI(formData);
            console.log(response);

            const slug = response.poll.slug;

            const shareableLink =`${window.location.origin}/poll/${slug}`;

            setCreatedPollLink(shareableLink);

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
    }
    };

    return (
        <div className="min-h-screen bg-zinc-950 text-white px-4 py-10">
            <div className="max-w-4xl mx-auto">
                <form onSubmit={handleSubmit} className="space-y-8">
                    

                    <div className="space-y-2">
                        <label className="text-sm text-zinc-400">
                            Poll Title
                        </label>

                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleBasicChange}
                            placeholder="Favorite Frontend Framework"
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 outline-none"
                        />
                    </div>

                    {/* DESCRIPTION */}

                    <div className="space-y-2">
                        <label className="text-sm text-zinc-400">
                            Description
                        </label>

                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleBasicChange}
                            rows={4}
                            placeholder="Tell users about this poll..."
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 outline-none resize-none"
                        />
                    </div>

                    {/* RESPONSE MODE */}

                    <div className="space-y-3">
                        <label className="text-sm text-zinc-400">
                            Response Mode
                        </label>

                        <div className="flex gap-6">
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="responseMode"
                                    value="anonymous"
                                    checked={
                                        formData.responseMode === "anonymous"
                                    }
                                    onChange={handleBasicChange}
                                />

                                Anonymous
                            </label>

                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="responseMode"
                                    value="authenticated"
                                    checked={
                                        formData.responseMode ===
                                        "authenticated"
                                    }
                                    onChange={handleBasicChange}
                                />

                                Authenticated
                            </label>
                        </div>
                    </div>

                    {/* EXPIRY */}

                    <div className="space-y-2">
                        <label className="text-sm text-zinc-400">
                            Expiry Date & Time
                        </label>

                        <input
                            type="datetime-local"
                            name="expiresAt"
                            value={formData.expiresAt}
                            onChange={handleBasicChange}
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 outline-none"
                        />
                    </div>

                    {/* QUESTIONS */}

                    <div className="space-y-6">
                        {formData.questions.map(
                            (question, questionIndex) => (
                                <div
                                    key={questionIndex}
                                    className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-6"
                                >
                                    {/* QUESTION HEADER */}

                                    <div className="flex items-center justify-between">
                                        <h2 className="text-lg font-semibold">
                                            Question {questionIndex + 1}
                                        </h2>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                removeQuestion(questionIndex)
                                            }
                                            className="text-red-400 text-sm"
                                        >
                                            Remove Question
                                        </button>
                                    </div>

                                    {/* QUESTION INPUT */}

                                    <input
                                        type="text"
                                        value={question.question}
                                        onChange={(e) =>
                                            handleQuestionChange(
                                                questionIndex,
                                                e.target.value
                                            )
                                        }
                                        placeholder="Enter your question"
                                        className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 outline-none"
                                    />

                                    {/* REQUIRED */}

                                    <label className="flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            checked={question.required}
                                            onChange={() =>
                                                toggleRequired(questionIndex)
                                            }
                                        />

                                        Required Question
                                    </label>

                                    {/* OPTIONS */}

                                    <div className="space-y-4">
                                        {question.options.map(
                                            (option, optionIndex) => (
                                                <div
                                                    key={optionIndex}
                                                    className="flex gap-3"
                                                >
                                                    <input
                                                        type="text"
                                                        value={option.text}
                                                        onChange={(e) =>
                                                            handleOptionChange(
                                                                questionIndex,
                                                                optionIndex,
                                                                e.target.value
                                                            )
                                                        }
                                                        placeholder={`Option ${optionIndex + 1
                                                            }`}
                                                        className="flex-1 bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 outline-none"
                                                    />

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            removeOption(
                                                                questionIndex,
                                                                optionIndex
                                                            )
                                                        }
                                                        className="text-red-400"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            )
                                        )}
                                    </div>

                                    {/* ADD OPTION */}

                                    <button
                                        type="button"
                                        onClick={() =>
                                            addOption(questionIndex)
                                        }
                                        className="bg-zinc-800 hover:bg-zinc-700 transition px-4 py-2 rounded-xl"
                                    >
                                        + Add Option
                                    </button>
                                </div>
                            )
                        )}
                    </div>

                    {/* ADD QUESTION */}

                    <button
                        type="button"
                        onClick={addQuestion}
                        className="w-full border border-dashed border-zinc-700 py-4 rounded-2xl hover:border-zinc-500 transition"
                    >
                        + Add Question
                    </button>

                    {/* SUBMIT */}

                    <button
                        type="submit"
                        className="w-full bg-white text-black py-4 rounded-2xl font-semibold hover:opacity-90 transition"
                    >
                        {loading ? "Creating Poll..." : "Create Poll"}
                    </button>

                    {
                        createdPollLink && (

                            <div className="bg-green-950 border border-green-800 rounded-2xl p-5 space-y-3">

                                <h3 className="font-semibold text-green-400">
                                    Poll Created Successfully
                                </h3>

                                <input
                                    value={createdPollLink}
                                    readOnly
                                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3"
                                />

                                <button
                                    type="button"
                                    onClick={() => {
                                        navigator.clipboard.writeText(
                                            createdPollLink
                                        );
                                    }}
                                    className="bg-green-500 text-black px-4 py-2 rounded-xl font-medium"
                                >
                                    Copy Link
                                </button>

                            </div>
                        )
                    }
                </form>
            </div>
        </div>
    );
}