import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FullReportCard from "@/components/full-report-card";

export default function MerchantHero() {
  return (
    <section
      className="flex flex-col items-center w-full"
      style={{ minHeight: "calc(100vh - 88px)" }}
    >
      <section className="flex flex-col md:flex-row w-full min-h-screen bg-[#Fafafa]">
        {/* Left half — hidden on mobile */}
        <div className="hidden md:flex flex-1 relative overflow-hidden items-center justify-center py-40 px-8 bg-bg-alt">
          <div className="absolute -rotate-[15.24deg]">
            <FullReportCard />
          </div>
        </div>

        {/* Right half */}
        <div className="flex-1 flex items-center justify-start py-24 md:py-40">
          <div className="flex flex-col gap-8 md:gap-10 max-w-155 px-4 md:px-8">
            {/* Heading */}
            <h1 className="font-neue-montreal font-medium text-[32px] leading-10 md:text-[48px] md:leading-15 tracking-[-0.96px] text-[#17171C]">
              Every merchant tells a story online. Subtext reads it in 30
              seconds.
            </h1>

            {/* Body */}
            <p className="font-neue-montreal text-[18px] leading-7 md:text-[20px] md:leading-7-5 text-[#4F4F5E]">
              Merchant Screening analyzes a business&apos;s entire web presence
              — website, social profiles, reviews, directories, and 2,000+
              sources — and delivers a structured risk decision before your team
              opens a browser tab.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3 md:gap-4">
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
        </div>
      </section>
    </section>
  );
}
