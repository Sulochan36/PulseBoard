import { Show, SignInButton, SignUpButton, UserButton, useUser } from "@clerk/react"


const AuthButtons = () => {
    const { user } = useUser()

    return (
        <header>
            <Show when="signed-out">
                <SignInButton mode='modal' />
                <SignUpButton />
            </Show>
            <Show when="signed-in">
                <UserButton />
                <h2>Welcome {user?.fullName}</h2>
            </Show>
        </header>
    )
}

export default AuthButtons