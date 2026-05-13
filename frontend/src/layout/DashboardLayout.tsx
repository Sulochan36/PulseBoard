import { NavLink, Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const DashboardLayout = () => {
    return (
        <div>

           
            <Navbar />

            
            <nav className="flex gap-4 border-b px-6 py-4 bg-white">

                <NavLink to="/dashboard">
                    Dashboard
                </NavLink>

                <NavLink to="/dashboard/pollbuilder">
                    Create Poll
                </NavLink>

                <NavLink to="/dashboard/analytics">
                    Analytics
                </NavLink>

            </nav>

            
            <main className="p-6">
                <Outlet />
            </main>

        </div>
    )
}

export default DashboardLayout