import { useState } from "react";
import { createPollAPI } from "../services/poll.service";
import {
    Plus,
    Trash2,
    CheckCircle2,
    FileText,
    Clock,
    Shield,
} from "lucide-react";

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


    // const toggleRequired = (questionIndex: number) => {
    //     const updatedQuestions = [...formData.questions];

    //     updatedQuestions[questionIndex].required =
    //         !updatedQuestions[questionIndex].required;

    //     setFormData({
    //         ...formData,
    //         questions: updatedQuestions,
    //     });
    // };


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
        <div className="relative min-h-screen bg-zinc-950 text-white px-4 py-10 md:px-8 overflow-hidden">

            {/* background glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/2 h-100 w-100 -translate-x-1/2 bg-cyan-500/10 blur-3xl rounded-full" />
                <div className="absolute bottom-0 right-0 h-75 w-75 bg-blue-500/10 blur-3xl rounded-full" />
            </div>

            <div className="max-w-5xl mx-auto space-y-10">

                {/* HEADER */}
                <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1 text-sm text-cyan-300">
                        <FileText size={16} />
                        Poll Builder
                    </div>

                    <h1 className="text-4xl font-bold">
                        Create Interactive Polls
                    </h1>

                    <p className="text-zinc-400 max-w-2xl">
                        Build real-time polls with multiple questions, analytics, and shareable links.
                    </p>
                </div>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="space-y-10">

                    {/* TITLE */}
                    <div className="flex flex-col justify-center items-start space-y-3">
                        <label className="text-md font-medium text-white/60">Poll Title</label>

                        <input
                            name="title"
                            value={formData.title}
                            onChange={handleBasicChange}
                            className="w-full rounded-xl border border-white/10 bg-zinc-900/70 px-4 py-3 outline-none focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/10"
                            placeholder="e.g. Best Frontend Framework"
                        />
                    </div>

                    {/* DESCRIPTION */}
                    <div className="flex flex-col justify-center items-start space-y-3">
                        <label className="text-md font-medium text-white/60">Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleBasicChange}
                            rows={4}
                            className="w-full rounded-xl border border-white/10 bg-zinc-900/70 px-4 py-3 outline-none focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/10"
                            placeholder="Describe your poll..."
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">

                        <div className="space-y-2">
                            <label className="text-md font-medium text-white/60 flex items-center gap-2">
                                <Shield size={16} /> Response Mode
                            </label>

                            <select
                                name="responseMode"
                                value={formData.responseMode}
                                onChange={handleBasicChange}
                                className="w-full rounded-xl border border-white/10 bg-zinc-900/70 px-4 py-3"
                            >
                                <option value="anonymous">Anonymous</option>
                                <option value="authenticated">Authenticated</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-md font-medium text-white/60 flex items-center gap-2">
                                <Clock size={16} /> Expiry
                            </label>

                            <input
                                type="datetime-local"
                                name="expiresAt"
                                value={formData.expiresAt}
                                onChange={handleBasicChange}
                                className="w-full rounded-xl border border-white/10 bg-zinc-900/70 px-4 py-3"
                            />
                        </div>
                    </div>

                    <div className="space-y-6">
                        {formData.questions.map((q, qi) => (
                            <div
                                key={qi}
                                className="rounded-3xl border border-white/10 bg-zinc-900/60 p-6 space-y-6"
                            >

                                {/* HEADER */}
                                <div className="flex items-center justify-between">

                                    <div className="flex items-center gap-3">
                                        <div className="h-9 w-9 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold">
                                            {qi + 1}
                                        </div>

                                        <div>
                                            <h2 className="font-semibold">
                                                Question {qi + 1}
                                            </h2>

                                            <p className="text-xs text-zinc-500">
                                                Configure options
                                            </p>
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => removeQuestion(qi)}
                                        className="flex items-center gap-2 text-sm text-red-400 border border-red-500/20 bg-red-500/10 px-3 py-2 rounded-xl"
                                    >
                                        <Trash2 size={16} />
                                        Remove
                                    </button>
                                </div>

                        
                                <input
                                    value={q.question}
                                    onChange={(e) =>
                                        handleQuestionChange(qi, e.target.value)
                                    }
                                    className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3"
                                    placeholder="Enter question"
                                />

                                
                                <div className="space-y-3">
                                    {q.options.map((opt, oi) => (
                                        <div key={oi} className="flex gap-3">

                                            <input
                                                value={opt.text}
                                                onChange={(e) =>
                                                    handleOptionChange(
                                                        qi,
                                                        oi,
                                                        e.target.value
                                                    )
                                                }
                                                className="flex-1 rounded-xl border border-white/10 bg-zinc-950 px-4 py-3"
                                                placeholder={`Option ${oi + 1}`}
                                            />

                                            <button
                                                type="button"
                                                onClick={() => removeOption(qi, oi)}
                                                className="px-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400"
                                            >
                                                <Trash2 size={16} />
                                            </button>

                                        </div>
                                    ))}
                                </div>

                                
                                <button
                                    type="button"
                                    className="text-cyan-300 text-sm flex items-center gap-2 cursor-pointer hover:text-cyan-500"
                                    onClick={() => addOption(qi)}
                                >
                                    <Plus size={16} />
                                    Add Option
                                </button>

                            </div>
                        ))}
                    </div>

                    
                    <button
                        type="button"
                        onClick={addQuestion}
                        className="w-full rounded-2xl border border-dashed border-cyan-500/30 bg-cyan-500/5 py-6 text-cyan-300 hover:bg-cyan-500/10 cursor-pointer"
                    >
                        <div className="flex items-center justify-center gap-2">
                            <Plus />
                            Add Question
                        </div>
                    </button>

                    
                    <button
                        type="submit"
                        className="w-full rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 py-4 font-semibold hover:scale-[1.01] transition cursor-pointer"
                    >
                        {loading ? "Creating Poll..." : "Create Poll"}
                    </button>

                    
                    {createdPollLink && (
                        <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-6 space-y-4">

                            <div className="flex items-center gap-2 text-green-400">
                                <CheckCircle2 />
                                Poll Created Successfully
                            </div>

                            <input
                                value={createdPollLink}
                                readOnly
                                className="w-full rounded-2xl border border-white/10 bg-zinc-900 px-4 py-3"
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    navigator.clipboard.writeText(createdPollLink)
                                }
                                className="bg-green-500 text-black px-4 py-2 rounded-xl font-medium"
                            >
                                Copy Link
                            </button>

                        </div>
                    )}

                </form>
            </div>
        </div>
    );
}