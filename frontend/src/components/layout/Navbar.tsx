import { Link } from "react-router-dom";
import AuthButtons from "../AuthButtons";
import Container from "./Container";

const Navbar = () => {
    return (
        <header className="fixed top-0 z-100 border-b border-zinc-700/60 bg-transparent backdrop-blur-xl w-full">

            <Container>

                <div className="h-16 flex items-center justify-between">

                    {/* LOGO */}
                    <div className="flex items-center gap-3">

                        <div className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />

                        <h1 className="text-xl font-semibold tracking-tight text-white">
                            <Link to="/">Pollvibes</Link>
                        </h1>

                    </div>

                    {/* NAV MENU */}
                    <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400">

                        <a
                            href="#features"
                            className="hover:text-white transition"
                        >
                            Features
                        </a>

                        <a
                            href="#analytics"
                            className="hover:text-white transition"
                        >
                            Analytics
                        </a>

                        <a
                            href="#faq"
                            className="hover:text-white transition"
                        >
                            FAQ
                        </a>

                    </nav>

                    {/* AUTH */}
                    <AuthButtons />

                </div>

            </Container>

        </header>
    );
};

export default Navbar;