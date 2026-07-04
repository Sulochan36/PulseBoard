import { Outlet } from "react-router-dom"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import ScrollToTop from "./ScrollToTop"

const Layout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <ScrollToTop/>
            <Navbar />

            <main className="grow mt-10 ">
                <Outlet />
            </main>

            <Footer/>

        </div>
    )
}

export default Layout