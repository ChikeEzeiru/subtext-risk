import Navbar from "@/components/Navbar";
import Hero from "@/components/hero";
import MarqueeRow from "@/components/marquee-row";
import ProblemSection from "@/components/problem-section";
import HowItWorks from "@/components/how-it-works";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-col flex-1">
        <Hero />
        <MarqueeRow />
        <ProblemSection />
        <HowItWorks />
      </main>
    </div>
  );
}
