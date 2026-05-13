"use client";

import Image from "next/image";

export default function ApiSdkSection() {
  return (
    <section className="flex flex-col gap-16 items-center justify-center py-24 w-full bg-bg-primary">
      {/* Section header and description */}
      <div className="flex flex-col gap-10 items-start px-8 w-full max-w-310">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2 items-start">
            <div className="flex items-center px-2 py-1 border border-border rounded-lg bg-bg-primary">
              <p className="text-body-xs font-medium">SDKs and Integrations</p>
            </div>

            <h2 className="text-[32px] leading-10 md:text-[48px] md:leading-15 font-medium tracking-[-0.96px] text-[#17171c] text-balance">
              Works with your stack. Not instead of it.
            </h2>
          </div>

          <p className="text-body-xl text-balance font-neue-montreal">
            Subtext integrates with your existing onboarding flow, risk engine,
            or case management system. The API returns standard JSON — build
            your own integration, or use one of our client libraries.
          </p>
        </div>

        {/* SDK badge row */}
        <div className="flex flex-row gap-2.5 w-full items-center">
          <div className="flex items-center gap-3 px-2 py-1  rounded-lg">
            <Image
              src="/images/logos/python.svg"
              alt="Python SDK"
              className="w-6 h-6 object-contain"
              height={24}
              width={24}
            />
            <span className="text-body-sm text-[#17171c]">Python</span>
          </div>

          {/* Placeholder dot (divider) */}
          <div className="w-1 h-1 rounded-full bg-amber-600 mx-2"></div>

          <div className="flex items-center gap-3 px-2 py-1  rounded-lg">
            <Image
              src="/images/logos/node_js.svg"
              alt="Node JS SDK"
              className="w-6 h-6 object-contain"
              height={24}
              width={24}
            />
            <span className="text-body-sm text-[#17171c]">Node JS</span>
          </div>

          {/* Placeholder dot (divider) */}
          <div className="w-1 h-1 rounded-full bg-amber-600 mx-2"></div>

          <div className="flex items-center gap-3 px-2 py-1  rounded-lg">
            <Image
              src="/images/logos/js.svg"
              alt="Javascript SDK"
              className="w-6 h-6 object-contain"
              height={24}
              width={24}
            />
            <span className="text-body-sm text-[#17171c]">Javascript</span>
          </div>

          {/* Placeholder dot (divider) */}
          <div className="w-1 h-1 rounded-full bg-amber-600 mx-2"></div>

          <div className="flex items-center gap-3 px-2 py-1  rounded-lg">
            <Image
              src="/images/logos/ruby.svg"
              alt="Ruby SDK"
              className="w-6 h-6 object-contain"
              height={24}
              width={24}
            />
            <span className="text-body-sm text-[#17171c]">Ruby</span>
          </div>

          {/* Placeholder dot (divider) */}
          <div className="w-1 h-1 rounded-full bg-amber-600 mx-2"></div>

          <div className="flex items-center gap-3 px-2 py-1  rounded-lg">
            <span className="text-body-sm text-[#17171c]">cURL</span>
          </div>
        </div>
      </div>
    </section>
  );
}
