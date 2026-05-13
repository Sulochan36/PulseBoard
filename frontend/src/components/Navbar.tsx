import AuthButtons from "./AuthButtons"

const Navbar = () => {
    return (
        <nav className="border-b-2 border-neutral-400 py-5 mb-8 px-6 flex justify-between items-center">

            <h1 className="text-2xl font-bold">
                Poll App
            </h1>

            <AuthButtons />

        </nav>
    )
}

export default Navbar