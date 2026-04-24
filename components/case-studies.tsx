"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type CaseStudy = {
  id: string;
  company: string;
  logoSrc: string;
  heading: string;
  bodyText: string;
  quote: string;
  attribution: string;
  width?: number;
  height?: number;
};

const caseStudies: CaseStudy[] = [
  {
    id: "visa",
    company: "Visa",
    logoSrc: "/images/logos/visa.svg",
    heading:
      "Visa automated 56% more of their merchant onboarding with Subtext.",
    bodyText:
      "When Visa Cross-Border Solutions integrated Subtext, their team saw immediate results: merchant onboarding automation jumped 56%, review times dropped from minutes to seconds, and legitimate merchants got activated faster.",
    quote:
      '"Checks and verifications that were previously taking our analysts more than 30 minutes now take an average of 17 seconds. Cant beat that kind of efficiency."',
    attribution: "— Visa Cross-Border Solutions",
    width: 56,
    height: 18,
  },
  {
    id: "moodys",
    company: "Moody's",
    logoSrc: "/images/logos/moody's.svg",
    heading:
      "Moody's cut merchant underwriting time in half after integrating Subtext.",
    bodyText:
      "Moody's combined Subtext's real-time web presence analysis with their existing data and decision solutions. The result: a joint workflow that reduced the time it takes to underwrite a merchant by 50% — without sacrificing security or introducing new risk.",
    quote:
      '"Subtext is a vital tool for financial institutions verifying business entities. By reducing high-friction processes, we significantly improve user experiences for legitimate merchants."',
    attribution: "— Moody's Corporation",
    width: 102,
    height: 20,
  },
  {
    id: "mastercard",
    company: "Mastercard",
    logoSrc: "/images/logos/mastercard.svg",
    heading:
      "Mastercard selected Subtext for its Start Path security innovation program.",
    bodyText:
      "Start Path is Mastercard's global program for scaling emerging technology companies. Subtext was selected for the Security Solutions track — allowing their team  to accelerate how payment providers assess merchant risk at onboarding.",
    quote:
      '"Start Path partners are chosen because they solve real problems for the payments ecosystem. Subtext addresses a critical gap in how businesses are verified."',
    attribution: "— Mastercard Start Path",
    width: 142,
    height: 18,
  },
  {
    id: "globalbank",
    company: "Global Bank",
    logoSrc: "/images/logos/globalbank.svg",
    heading: "GlobalBank reduced manual merchant reviews by 73% in 90 days.",
    bodyText:
      "GlobalBank, (12,000+ merchant applications per quarter) was losing legitimate merchants to slow review cycles. With Subtext, they cut manual reviews from 8,400 per quarter to 2,200 & reduced average onboarding time from 6 days to 18 hours.",
    quote:
      '"We went from a team of analysts Googling every applicant to only touching the cases that actually need human judgment, freeing up our resources to focus on higher-risk cases and strategic initiatives."',
    attribution: "— Head of Compliance, GlobalBank",
    width: 167,
    height: 32,
  },
];

const AUTO_ADVANCE_INTERVAL = 8000; // 8 seconds

export default function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = caseStudies[activeIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % caseStudies.length);
    }, AUTO_ADVANCE_INTERVAL);

    return () => clearInterval(timer);
  }, []);

  const handleLogoClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="flex flex-col gap-16 items-center py-24 w-full">
      {/* Title Group */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start max-w-310 overflow-hidden px-4 md:px-8 w-full">
        <div className="flex items-center justify-center md:shrink-0">
          <h2 className="font-neue-montreal font-medium text-[32px] leading-10 md:text-[48px] md:leading-15 tracking-[-0.96px] text-[#17171C] w-full md:w-180">
            {current.heading}
          </h2>
        </div>
        <p className="flex-1 font-neue-montreal text-[18px] leading-7 md:text-[20px] md:leading-7-5 text-[#17171C] max-w-180">
          {current.bodyText}
        </p>
      </div>

      {/* Quote & CTA Section */}
      <div className="flex flex-col gap-8 items-start max-w-310 overflow-hidden px-4 md:px-8 w-full">
        {/* Quote */}
        <div className="flex flex-col gap-10.5 items-center w-full px-6 py-16">
          <div className="flex flex-col gap-5 items-center justify-center max-w-180 text-center">
            <p className="font-neue-montreal font-medium text-[20px] leading-8 md:text-[30px] md:leading-9.5 text-[#4F4F5E]">
              {current.quote}
            </p>
            <p className="font-neue-montreal text-[20px] leading-7-5 text-[#4F4F5E]">
              {current.attribution}
            </p>
          </div>

          {/* CTA Button */}
          <button className="flex gap-1.5 items-center justify-center px-4.5 py-3 rounded-lg bg-transparent hover:bg-gray-50 transition-colors">
            <span className="font-neue-montreal font-medium text-[17px] leading-6 text-[#CA7D15]">
              Read the Full Case Study
            </span>
            <svg
              className="w-5 h-5 text-[#CA7D15]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>

        {/* Logo Bar - Clickable Buttons */}
        <div className="grid grid-cols-2 md:flex items-start w-full border border-black/10 rounded-xl overflow-hidden">
          {caseStudies.map((study, index) => (
            <button
              key={study.id}
              onClick={() => handleLogoClick(index)}
              className={`flex-1 flex flex-col items-center justify-center min-h-18 px-6 py-6 transition-all ${
                index % 2 === 0 ? "border-r border-black/10" : ""
              } ${
                index < 2 ? "border-b md:border-b-0 border-black/10" : ""
              } md:border-r-0 ${
                index !== caseStudies.length - 1 ? "md:border-r border-black/10" : ""
              } hover:bg-gray-50`}
              aria-pressed={activeIndex === index}
              style={{ cursor: "pointer" }}
            >
              <div
                className="relative h-8 w-full flex items-center justify-center"
                style={{
                  filter:
                    activeIndex === index
                      ? "none"
                      : "grayscale(100%) opacity(40%)",
                }}
              >
                <Image
                  src={study.logoSrc}
                  alt={study.company}
                  className="object-contain"
                  height={study.height}
                  width={study.width}
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
