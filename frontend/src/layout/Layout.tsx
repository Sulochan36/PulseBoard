import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const Layout = () => {
    return (
        <div>

            <Navbar />

            <main className="p-6">
                <Outlet />
            </main>

        </div>
    )
}

export default Layout