"use client";

import Image from "next/image";
import ApiStep1 from "./api-step-1";

export default function DocsHowTo() {
  return (
    <section className="flex flex-col gap-16 items-center py-24 w-full bg-bg-alt">
      <div className="flex flex-col gap-5 items-center px-8 w-full max-w-310">
        <div className="max-w-180">
          <h2 className="text-[32px] leading-10 md:text-[48px] md:leading-15 font-medium tracking-[-0.96px] text-[#17171c] text-center text-balance">
            From API key to first report in five minutes.
          </h2>
        </div>
      </div>

      <div className="flex flex-row gap-4 items-center px-8 w-full max-w-310">
        <div className="w-full flex flex-col p-3 gap-4">
          <ApiStep1 />

          <p className="text-body-xl text-balance font-neue-montreal">
            <span className="font-medium text-bg-dark">Get your API key.</span>{" "}
            Sign up for a Subtext account. Your API key is on the dashboard. No
            approval process, no sales call required for sandbox access.
          </p>
        </div>
        <div className="w-full flex flex-col p-3">
          <p className="text-body-xl text-balance font-neue-montreal">
            <span className="font-medium text-bg-dark">
              Make your first request:
            </span>{" "}
            Pass a merchant URL & your preferred rule set. Subtext handles the
            rest, pulling from multiple sources in a single call.
          </p>
        </div>
        <div className="w-full flex flex-col p-3">
          <p className="text-body-xl text-balance font-neue-montreal">
            <span className="font-medium text-bg-dark">Read the response:</span>{" "}
            A structured JSON report with business verification, industry
            classification, risk level, & recommendation in under 30 seconds.
          </p>
        </div>
      </div>
    </section>
  );
}
