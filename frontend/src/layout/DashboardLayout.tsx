import { NavLink, Outlet } from "react-router-dom"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import Container from "../components/layout/Container"

const DashboardLayout = () => {
    return (
        <div className='bg-zinc-950 text-white flex flex-col gap-10'>
            <Navbar />

            <Container className='mt-10 border-x-2 border-neutral-700 w-full'>
            <nav className="border-2 w-full mt-10 text-white flex justify-between items-center gap-10 py-6 px-3">

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

            
            <main className="grow">
                <Outlet />
            </main>

        </Container>
            <Footer/>

        </div>
    )
}

export default DashboardLayout