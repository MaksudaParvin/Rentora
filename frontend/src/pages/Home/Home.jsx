import Hero from "../../components/common/Hero";
import Stats from "../../components/common/Stats";
import Features from "../../components/common/Features";
import WhyChoose from "../../components/common/WhyChoose";
import CTA from "../../components/common/CTA";
import Footer from "../../components/common/Footer";

function Home() {
    return (
        <>
            <Hero />
            <Stats />
            <Features />
            <WhyChoose />
            <CTA />
            <Footer />
        </>
    );
}

export default Home;