import { CheckCircle2, Sparkles, Share2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PollSuccess = () => {

    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-4">

            {/* BACKGROUND GLOW */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-87.5 w-87.5 bg-green-500/10 blur-3xl rounded-full" />
            </div>

            <div className="max-w-md w-full text-center space-y-6">

                <div className="flex justify-center">
                    <div className="p-5 rounded-full bg-green-500/10 border border-green-500/20">
                        <CheckCircle2 size={42} className="text-green-400" />
                    </div>
                </div>

                
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
                        Thanks for voting
                        <Sparkles size={20} className="text-yellow-400" />
                    </h1>

                    <p className="text-zinc-400">
                        Your response has been recorded successfully.
                    </p>
                </div>

        
                
                <div className="space-y-3">

                    <button
                        onClick={() => navigate("/dashboard")}
                        className="w-full bg-green-500 hover:bg-green-400 text-black font-semibold py-3 rounded-2xl transition"
                    >
                        Back to Dashboard
                    </button>

                    <button
                        onClick={() => navigator.share?.({ title: "Poll", text: "Check this poll" })}
                        className="w-full flex items-center justify-center gap-2 bg-zinc-900 border border-white/10 hover:border-white/20 py-3 rounded-2xl transition"
                    >
                        <Share2 size={16} />
                        Share App
                    </button>

                </div>

                
                <p className="text-xs text-zinc-600">
                    Powered by your Poll system
                </p>

            </div>
        </div>
    );
};

export default PollSuccess;