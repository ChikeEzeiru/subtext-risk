"use client";

import Image from "next/image";

export default function MerchantDifference() {
  return (
    <section className="flex flex-col gap-16 items-center py-24 w-full bg-bg-alt">
      {/* Inner group */}
      <div className="flex flex-col md:flex-col gap-24 items-center max-w-310 px-8 w-full">
        {/* Title group */}
        <div className="flex flex-col gap-5 items-center w-full md:w-184">
          <div className="flex items-center px-2 py-1 border border-border rounded-lg bg-bg-primary">
            <p className="text-body-xs font-medium">How it&apos;s different</p>
          </div>
          {/* Title */}
          <div className="flex flex-col gap-5 shrink-0 items-center justify-center">
            <h2 className="font-neue-montreal font-medium text-[48px] leading-15 tracking-[-0.96px] text-[#17171C] w-full md:w-184 text-center">
              Traditional KYB checks a database. Subtext reads the internet.
            </h2>
          </div>
        </div>
        {/* difference sections */}
        <div className="flex flex-col md:flex-row gap-4 items-start w-full">
          {/* left section */}
          <div className="flex flex-col items-start justify-start bg-bg-primary border border-border rounded-lg w-full">
            <div className="flex flex-col gap-6 p-7">
              <div className="flex flex-row items-center gap-2">
                <Image
                  src="/images/logos/Placeholder Logo dark.svg"
                  alt=""
                  height={28}
                  width={23}
                />

                <h4 className="font-neue-montreal text-2xl font-medium">
                  Traditional KYB
                </h4>
              </div>

              <p className="font-neue-montreal text-xl leading-7-5">
                Pulls data from government registries and credit bureaus. Checks
                if the business is registered and who the directors are.
                Verifies documents like articles of incorporation and
                certificates of good standing. Screens against sanctions lists
                and PEP databases.
              </p>
            </div>

            <div className="flex flex-col gap-4 bg-bg-alt p-7 rounded-b-lg">
              <p className="font-neue-montreal text-xl leading-7-5">
                <span className="font-medium text-bg-dark">The gap:</span>{" "}
                Registry data tells you a business exists. It doesn&apos;t tell
                you what the business does, whether it&apos;s actually
                operating, or doing what it claims.
              </p>
            </div>
          </div>

          {/* right section */}
          <div className="flex flex-col items-start justify-start bg-bg-primary border border-border rounded-lg w-full">
            <div className="flex flex-col gap-6 p-7">
              <div className="flex flex-row items-center gap-2">
                <Image src="/images/logo.svg" alt="" height={28} width={23} />

                <h4 className="font-neue-montreal text-2xl font-medium">
                  Subtext
                </h4>
              </div>

              <p className="font-neue-montreal text-xl leading-7-5">
                Reads the merchant&apos;s entire web presence: every page,
                profile, & review. Understands the business model from actual
                content, not self-reported categories. Detects inconsistencies
                between merchant claims & what the internet says about them.
              </p>
            </div>

            <div className="flex flex-col gap-4 bg-bg-alt p-7 rounded-b-lg">
              <p className="font-neue-montreal text-xl leading-7-5">
                <span className="font-medium text-bg-dark">
                  The difference:
                </span>{" "}
                Subtext fills the gap between &quot;this business is
                registered&quot; & &quot;this business is legitimate&quot;,
                answering questions that documents can&apos;t.
              </p>
            </div>
          </div>
        </div>

        {/* summary section */}
        <div>
          <p className="font-neue-montreal text-xl leading-7-5 text-[#4F4F5E]">
            <span className="font-medium text-bg-dark">
              Subtext doesn&apos;t replace your existing KYB stack.
            </span>{" "}
            It adds a layer that traditional verification can&apos;t provide.
            Most customers run Subtext alongside their registry checks and
            document verification — not instead of them
          </p>
        </div>
      </div>
    </section>
  );
}
