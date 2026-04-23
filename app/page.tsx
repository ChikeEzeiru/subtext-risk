import Navbar from "@/components/Navbar";
import Hero from "@/components/hero";
import MarqueeRow from "@/components/marquee-row";
import ProblemSection from "@/components/problem-section";
import HowItWorks from "@/components/how-it-works";
import Solutions from "@/components/solutions";
import CaseStudies from "@/components/case-studies";
import ApiSection from "@/components/api-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-col flex-1">
        <Hero />
        <MarqueeRow />
        <ProblemSection />
        <HowItWorks />
        <Solutions />
        <CaseStudies />
        <ApiSection />
        <Footer />
      </main>
    </div>
  );
}
