
import { NavLink } from "react-router-dom";
import Container from "../components/layout/Container";
import { useUser } from "@clerk/react";


const EmptyDashboard = () => {

    const { user } = useUser();

    return (
        <main>
            <Container>
                <section className='flex flex-col items-center justify-center gap-6 px-4 sm:px-6 lg:px-8'>

                    <div className='flex flex-col items-center justify-between mb-10'>

                        <div className="flex items-center gap-3 mb-3 rounded-xl shadow-[3px_3px_110px_30px_rgba(8,112,184,0.2)] shadow-cyan-500/20">
                            <img width="400" height="300" src="./emptyDashImage.png" alt="Pollvibes" />
                        </div>

                        <div className="flex flex-col items-center justify-center gap-6 px-4 sm:px-6 lg:px-8">

                            <h1 className="text-5xl md:text-4xl font-bold tracking-tight mt-15 text-center">
                                Welcome to PollVibes, {user?.firstName || user?.fullName || "User"}! 👋
                            </h1>

                            <p className="mt-1 max-w-md mx-auto text-zinc-400 md:text-xl sm:text-base text-center font-semibold">
                                Your polling engine is warmed up and ready. Let's create your first interactive experience to start gathering insights. 🚀
                            </p>
                        </div>

                        <div className='my-10'>
                            <button
                                className="w-full rounded-xl bg-linear-to-b from-cyan-500 to-blue-600 py-2 px-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/40 cursor-pointer"
                            >
                                <NavLink to="/dashboard/pollbuilder">
                                + Create Your First Poll
                                </NavLink>
                            </button>
                        </div>
                    </div>

                </section>
            </Container>
        </main>
    )
}

export default EmptyDashboard