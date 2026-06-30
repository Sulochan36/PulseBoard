import { NavLink, Outlet } from "react-router-dom"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import Container from "../components/layout/Container"

const DashboardLayout = () => {
    return (
        <div className='bg-zinc-950 text-white flex flex-col gap-10'>
            <Navbar />

            <Container className='mt-10 border-x-2 border-neutral-700/60 w-full'>
                <nav className="mt-7  text-white flex justify-end items-center gap-5 px-4 sm:px-6 lg:px-8 py-4 border-b border-zinc-800">

                <NavLink className='navlink' to="/dashboard">
                    Dashboard
                </NavLink>
                
                <NavLink className='navlink' to="/dashboard/pollscreated">
                        My Polls
                </NavLink>

                <NavLink className='navlink' to="/dashboard/pollbuilder">
                    Create Poll
                </NavLink>

                <NavLink className='navlink' to="/dashboard/responses">
                    Responses
                </NavLink>

            </nav>

            
            <main className="grow min-h-screen">
                <Outlet />
            </main>

        </Container>
            <Footer/>

        </div>
    )
}

export default DashboardLayout