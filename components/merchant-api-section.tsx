"use client";

import Image from "next/image";

// Download these from Figma and save locally before URLs expire
const GLASS_BG = "/images/API section Image.avif"; // imgGlassAbstractions042
const ICON_GIT_BRANCH = "/images/logos/git-branch-02.svg"; // imgIcon13
const ICON_CODE_BROWSER = "/images/logos/portal.svg"; // imgIcon14
const ICON_SERVER = "/images/logos/Webhook.svg"; // imgIcon15

export default function ApiSection() {
  return (
    <section className="bg-[rgba(137,71,23,0.16)] flex flex-col gap-16 items-center py-24 w-full">
      {/* Title group */}
      <div className="flex flex-col md:flex-row gap-16 items-start max-w-310 px-8 w-full">
        <div className="flex flex-col gap-5 items-start shrink-0">
          <h2 className="font-neue-montreal font-medium text-[48px] leading-15 tracking-[-0.96px] text-[#17171C] w-full md:w-120">
            Live in your onboarding flow by end of week.
          </h2>
          {/* CTA Button */}
          <div className="p-0.5 rounded-md [background:linear-gradient(to_bottom,rgba(255,255,255,0.12),rgba(255,255,255,0))] w-fit">
            <button className="flex items-center gap-1 font-neue-montreal font-medium text-[14px] leading-5 text-white px-3.5 py-2.5 rounded-[calc(0.375rem-2px)] [background:linear-gradient(32.5deg,#17171C,#525252)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05),inset_0px_0px_0px_1px_rgba(0,0,0,0.18),inset_0px_-2px_0px_0px_rgba(0,0,0,0.05)] hover:opacity-90 transition-opacity">
              View API Documentation
              <svg
                className="w-5 h-5 opacity-60"
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
        </div>
        <p className="flex-1 font-neue-montreal text-[20px] leading-7-5 text-[#4F4F5E]">
          Subtext is a single REST API endpoint. Send a URL, get a structured
          report. No SDKs to install, no web hooks to configure for basic usage,
          no migration from your current stack. Most teams integrate in under a
          day and start running live merchants the same week.
        </p>
      </div>

      {/* Product UI frame */}
      <div className="w-full max-w-310 rounded-xl">
        <Image
          src={GLASS_BG}
          alt=""
          height={400}
          width={1240} /* maintain aspect ratio of original image */
        />
      </div>

      {/* Integration method cards */}
      <div className="flex flex-col items-start max-w-310 px-8 w-full">
        <div className="flex flex-col md:flex-row gap-4 items-start w-full">
          {[
            {
              icon: ICON_GIT_BRANCH,
              label: "API.",
              body: "Send a POST request with a merchant URL. Receive a JSON response in under 30 seconds. Batch processing available for bulk onboards.",
            },
            {
              icon: ICON_CODE_BROWSER,
              label: "Portal.",
              body: "Paste a URL into the Subtext dashboard and get a visual report. Designed for analysts who need to run ad-hoc checks without touching code.",
            },
            {
              icon: ICON_SERVER,
              label: "Webhook.",
              body: "Subscribe & receive alerts when a screening report is ready. Useful for async workflows where you queue merchants & process results in bulk.",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="border border-border flex flex-1 flex-col gap-5 items-start min-w-0 overflow-clip p-3 rounded-xl"
            >
              <div className="bg-[#FAFAFA] border border-[#D3D3D9] overflow-clip relative rounded-3xl shrink-0 size-12 flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt=""
                  className="size-6"
                  height={18}
                  width={18}
                />
              </div>
              <p className="font-neue-montreal text-[20px] leading-7-5 text-[#17171C] min-w-full">
                <span className="font-medium">{item.label}</span>{" "}
                <span className="text-[#4F4F5E]">{item.body}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
