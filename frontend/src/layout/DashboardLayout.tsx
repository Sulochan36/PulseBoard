import { NavLink, Outlet } from "react-router-dom"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import Container from "../components/layout/Container"

const DashboardLayout = () => {
    return (
        <div className='bg-zinc-950 text-white flex flex-col gap-10'>
            <Navbar />

            <Container>
            <nav className="border-2 w-full mt-30 border-green-300 text-white flex justify-between items-center gap-10 py-6 px-3">

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
        </Container>

            
            <main className="p-6">
                <Outlet />
            </main>

            <Footer/>

        </div>
    )
}

export default DashboardLayout