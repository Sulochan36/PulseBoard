import {
    Show,
    SignInButton,
    SignUpButton,
    UserButton,
    useUser,
} from "@clerk/react"

import { NavLink } from "react-router-dom"

const AuthButtons = () => {
    const { user } = useUser()

    return (
        <header className="flex items-center gap-4">

            {/* Signed Out */}
            <Show when="signed-out">

                <SignInButton
                    mode="modal"
                    fallbackRedirectUrl="/dashboard"
                >
                    <button className="px-4 py-2 bg-black text-white rounded">
                        Login
                    </button>
                </SignInButton>

                <SignUpButton
                    mode="modal"
                    fallbackRedirectUrl="/dashboard"
                >
                    <button className="px-4 py-2 border rounded">
                        Signup
                    </button>
                </SignUpButton>

            </Show>

            {/* Signed In */}
            <Show when="signed-in">

                <NavLink to="/dashboard">
                    <button className="px-4 py-2 bg-black text-white rounded">
                        Dashboard
                    </button>
                </NavLink>

                <h2 className="font-medium">
                    Welcome {user?.firstName}
                </h2>

                <UserButton />

            </Show>

        </header>
    )
}

export default AuthButtons