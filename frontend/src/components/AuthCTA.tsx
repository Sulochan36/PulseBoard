import {
    SignInButton,
    useAuth,
} from "@clerk/react";

import { useNavigate } from "react-router-dom";

interface AuthCTAProps {
    children: React.ReactNode;
    className?: string;
    to?: string;
}

const AuthCTA = ({
    children,
    className,
    to = "/dashboard",
}: AuthCTAProps) => {
    const { isSignedIn } = useAuth();
    const navigate = useNavigate();

    if (isSignedIn) {
        return (
            <button
                onClick={() => navigate(to)}
                className={className}
            >
                {children}
            </button>
        );
    }

    return (
        <SignInButton
            mode="modal"
            fallbackRedirectUrl={to}
        >
            <button className={className}>
                {children}
            </button>
        </SignInButton>
    );
};

export default AuthCTA;