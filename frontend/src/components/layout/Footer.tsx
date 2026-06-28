import Container from "../layout/Container";



const Footer = () => {
    return (
        <footer className="w-full border-t border-zinc-800 py-10 bg-zinc-900">
            <Container>
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                    <div>
                        <h3 className="text-lg font-semibold">
                            PollVibes
                        </h3>

                        <p className="mt-2 text-sm text-zinc-500">
                            Realtime polling platform.
                        </p>
                    </div>

                    <div className="flex items-center gap-6 text-sm text-zinc-400">
                        <a href="#">Features</a>
                        <a href="#">Privacy</a>
                        <a href="#">Github</a>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;