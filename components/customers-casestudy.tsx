"use client";

import Image from "next/image";

import Link from "next/link";
import CaseStudyCarousel from "@/components/case-study-carousel";

function ChevronIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-all duration-200 group-hover:opacity-0 group-hover:translate-x-1"
    >
      <path d="M3.5 1.5l4 3.5-4 3.5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="absolute opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
    >
      <path d="M0.5 5.5h7" />
      <path d="M5 1.5l4 4-4 4" />
    </svg>
  );
}

export default function CustomersCaseStudyGrid() {
  return (
    <section className="flex flex-col py-24 gap-16 w-full items-center mx-auto bg-bg-alt">
      <div className="flex flex-col gap-8 items-center px-8 w-full max-w-310">
        {/* Top Case Study Content */}
        <div className="flex flex-row items-start w-full gap-16">
          <h3 className="text-[28px] leading-10 md:text-[42px] md:leading-12 font-medium tracking-[-0.96px] text-[#17171c] text-pretty">
            Visa automated 56% more of their merchant onboarding with Subtext.
          </h3>

          <div className="flex flex-col gap-4 items-start justify-start w-full">
            <p className="font-neue-montreal text-[20px] leading-7-5 text-[#4F4F5E] w-full">
              When Visa Cross-Border Solutions integrated Subtext, their team
              saw immediate results: merchant onboarding automation jumped 56%,
              review times dropped to seconds
            </p>

            <Link
              href="#"
              className="group inline-flex items-center gap-1 text-amber-900 hover:text-amber-950 transition-colors"
            >
              Read the case study{" "}
              <span className="relative inline-flex items-center w-3 h-3">
                <ChevronIcon />
                <ArrowIcon />
              </span>
            </Link>
          </div>
        </div>

        {/* Top Case Study Image */}
        <div className="w-full rounded-lg overflow-hidden relative h-100 items-center justify-center">
          <Image
            alt="Visa Case Study"
            src="/images/bg for visa.avif"
            fill
            className="object-cover"
          />

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              alt=""
              src="/images/logos/visa_white.svg.svg"
              width={123.5}
              height={40}
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full max-w-294 bg-black/10 "></div>

      {/* Case study grid */}
      <div className="flex flex-row items-start gap-4 max-w-310 w-full px-8 overflow-hidden">
        <CaseStudyCarousel />
      </div>
    </section>
  );
}
