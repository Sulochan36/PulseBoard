import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom"

import Layout from "./layout/Layout"
import DashboardLayout from "./layout/DashboardLayout"


import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import PollBuilder from "./pages/PollBuilder"
import PollAnalytics from "./pages/PollAnalytics"
import ProtectedRoute from "./ProtectedRoutes"
import PollDetails from "./pages/PollDetails"
import PollPage from "./pages/PollPage"
import PollSuccess from "./pages/PollSuccess"

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            {/* PUBLIC */}
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/poll/:slug" element={<PollPage />} />
                <Route path="/poll/:slug/success" element={<PollSuccess />} />
            </Route>

            {/* PROTECTED */}
            <Route element={<ProtectedRoute />}>
                <Route element={<DashboardLayout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/dashboard/pollbuilder" element={<PollBuilder />} />
                    <Route path="/dashboard/poll/:pollId" element={<PollDetails />} />
                    <Route path="/dashboard/poll/:pollId/analytics" element={<PollAnalytics />} />
                </Route>
            </Route>
        </>
    )
)