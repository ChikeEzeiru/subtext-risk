"use client";

import BackgroundBeamsDemo from "./background-beams";
import Image from "next/image";
import Link from "next/link";

// ── Icons ──────────────────────────────────────────────────────
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

export default function BlogHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden items-center justify-center flex flex-col gap-16 pt-42 pb-24">
      {/* Background */}
      <BackgroundBeamsDemo />

      <div className="relative z-10 flex flex-col gap-16 max-w-310 px-8 w-full">
        {/* Hero Title and caption */}
        <div className="flex flex-col gap-2 items-start">
          <div className="flex items-center px-2 py-1 border border-border rounded-lg bg-bg-primary">
            <p className="text-body-xs font-medium">Subtext Blog</p>
          </div>

          <h1 className="font-neue-montreal font-medium text-[48px] leading-15 tracking-[-0.96px] text-[#17171C] max-w-200 text-balance">
            {" "}
            Insights on merchant risk, compliance, and building trust in
            payments.
          </h1>
        </div>

        {/* Most recent or pinned blog card */}
        <div className="flex flex-row gap-12 w-full md:h-101 bg-white border border-border rounded-xl p-7">
          {/* Left section */}
          <div className="flex flex-col gap-3 w-full">
            <div className="flex flex-col gap-5 items-start">
              <p className="font-mono font-semibold text-body-xs tracking-[-0.48px text-accent">
                Industry
              </p>
              <h3 className="text-[30px] leading-8 font-medium tracking-[-0.48px] text-[#17171C] text-balance">
                Why registry data alone can&apos;t tell you if a merchant is
                legitimate
              </h3>
            </div>

            <p className="text-body-lg text-balance font-neue-montreal text-body">
              Government registries confirm that a business exists. They
              don&apos;t confirm what it does, whether it&apos;s actively
              operating, or whether its web presence matches its registration.
              For compliance teams, that gap is where risk lives.
            </p>

            {/* Author and other data sections */}
            <div className="flex flex-row items-center mt-7 gap-7">
              {/* Author section */}
              <div className="flex flex-row gap-2 items-center">
                <Image
                  src={"/images/sarah-chen.png"}
                  alt="Author Placeholder"
                  width={40}
                  height={40}
                  className="rounded-full"
                />

                {/* article author section */}
                <div className="flex flex-col">
                  <p className="text-body-sm font-medium text-bg-dark text-balance font-neue-montreal">
                    Sarah Chen
                  </p>
                  <p className="text-body-sm text-balance font-neue-montreal text-body">
                    Head, Product
                  </p>
                </div>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <Image
                  src={"/images/drew-donald.png"}
                  alt="Author Placeholder"
                  width={40}
                  height={40}
                  className="rounded-full"
                />

                {/* article author section */}
                <div className="flex flex-col">
                  <p className="text-body-sm font-medium text-bg-dark text-balance font-neue-montreal">
                    Drew Donald
                  </p>
                  <p className="text-body-sm text-balance font-neue-montreal text-body">
                    Head, Compliance
                  </p>
                </div>
              </div>
            </div>

            {/* Blog Link */}
            <Link href={"#"} className="group mt-8">
              <div className="inline-flex items-center gap-1 text-[15px] text-amber-900 group-hover:text-amber-950 transition-colors">
                Read more
                <span className="relative inline-flex items-center w-3 h-3">
                  <ChevronIcon />
                  <ArrowIcon />
                </span>
              </div>
            </Link>
          </div>

          {/* Right or "image" section */}
          <div className="relative w-full h-64 md:h-full overflow-hidden rounded-xl min-w-70 min-h-52.5 md:min-w-0 md:max-w-100">
            <Image
              src={"/images/Featured blog img.avif"}
              alt="Blog Post Placeholder"
              fill
              className="object-cover object-left"
              sizes="(max-width: 768px) 280px, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
