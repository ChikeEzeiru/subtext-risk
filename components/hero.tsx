import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ReportCard from "@/components/report-card";

export default function Hero() {
  return (
    <section className="flex flex-col items-center w-full" style={{ minHeight: "calc(100vh - 88px)" }}>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-stretch max-w-310 w-full flex-1 min-h-px px-4 md:px-8">
        {/* Left: headline + body + CTAs */}
        <div className="flex-1 flex flex-col gap-8 lg:gap-10 items-start justify-center min-w-0 pt-28 pb-12 lg:py-24">
          <div className="flex flex-col gap-4 lg:gap-5 items-start w-full">
            <h1 className="font-medium text-[40px] leading-[48px] md:text-[52px] md:leading-[60px] lg:text-[60px] lg:leading-18 tracking-[-1.5px] text-[#0f172a]">
              Know who you&apos;re onboarding before they cost you.
            </h1>
            <p className="text-[18px] leading-7 lg:text-[21px] lg:leading-7-5 text-[#475569]">
              Subtext analyzes a merchant&apos;s entire web presence in 30
              seconds, so your team stops Googling and starts deciding.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 lg:gap-4">
            <Link
              href="#"
              className="relative overflow-clip flex items-center justify-center gap-1.5 px-4.5 py-3 rounded-sm border-2 border-[rgba(255,255,255,0.12)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] [background:linear-gradient(32.5deg,#17171c,#525252)] font-medium text-[17px] leading-6 text-white whitespace-nowrap transition-opacity hover:opacity-90"
            >
              Book a Demo
              <span className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(0,0,0,0.18),inset_0px_-2px_0px_0px_rgba(0,0,0,0.05)]" />
            </Link>
            <Link
              href="#"
              className="flex items-center gap-1.5 px-4.5 py-3 rounded-lg font-medium text-[17px] leading-6 text-[#334155] whitespace-nowrap transition-colors hover:text-[#0f172a]"
            >
              See a Sample Report
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>

        {/* Right: report card — hidden on mobile */}
        <div className="hidden lg:flex flex-1 bg-bg-alt items-center justify-center min-w-0 overflow-clip py-24">
          <ReportCard />
        </div>
      </div>
    </section>
  );
}
