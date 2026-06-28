
import Hero from "../components/sections/Hero";
import StatsStrip from "../components/sections/StatsStrip";
import Features from "../components/sections/Features";
import HowItWorks from "../components/sections/HowItWorks";
import AnalyticsPreview from "../components/sections/AnalyticsPreview";
import UseCases from "../components/sections/UseCases";
import CTASection from "../components/sections/CTASection";



const Home = () => {
    return (
        <div className="w-full bg-zinc-950 text-white overflow-hidden">

            {/* BACKGROUND GLOW */}
            {/* <div className="pointer-events-none fixed inset-0 -z-10">
                <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />
            </div> */}

            

            <main>
                <Hero />
                <StatsStrip />
                <Features />
                <HowItWorks />
                <AnalyticsPreview />
                <UseCases/>
                <CTASection />
            </main>

            
        </div>
    );
};

export default Home;