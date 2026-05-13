import {
    Navigate,
    Outlet,
    useLocation,
} from "react-router-dom"

import { useAuth } from "@clerk/react"

const ProtectedRoute = () => {
    const { isLoaded, isSignedIn } = useAuth()

    const location = useLocation()

    if (!isLoaded) {
        return <div>Loading...</div>
    }

    if (!isSignedIn) {
        return (
            <Navigate
                to="/"
                state={{ from: location }}
                replace
            />
        )
    }

    return <Outlet />
}

export default ProtectedRoute

