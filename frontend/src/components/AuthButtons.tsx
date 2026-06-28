import {
    Show,
    SignInButton,
    SignUpButton,
    UserButton,
    useUser,
} from "@clerk/react";

import { NavLink } from "react-router-dom";

const AuthButtons = () => {

    const { user } = useUser();

    return (

        <div className="flex items-center gap-3">

            {/* SIGNED OUT */}
            <Show when="signed-out">

                <SignInButton
                    mode="modal"
                    fallbackRedirectUrl="/dashboard"
                >
                    <button className="hidden sm:block rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-white">

                        Login

                    </button>
                </SignInButton>

                <SignUpButton
                    mode="modal"
                    fallbackRedirectUrl="/dashboard"
                >
                    <button className="rounded-xl bg-cyan-500 px-4 py-2 text-sm font-medium text-black transition hover:bg-cyan-400">

                        Get Started

                    </button>
                </SignUpButton>

            </Show>

            {/* SIGNED IN */}
            <Show when="signed-in">

                <NavLink to="/dashboard">

                    <button className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-500/20">

                        Dashboard

                    </button>

                </NavLink>

                <div className="hidden md:flex items-center gap-3 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5">

                    <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />

                    <p className="text-sm text-zinc-300">
                        {user?.firstName}
                    </p>

                </div>

                <UserButton />

            </Show>

        </div>
    );
};

export default AuthButtons;