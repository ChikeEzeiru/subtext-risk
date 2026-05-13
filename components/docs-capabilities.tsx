"use client";

import Image from "next/image";

export default function ApiCapabilities() {
  const cards = [
    {
      id: 1,
      title: "Batch Processing.",
      description:
        "Submit hundreds of merchants in a single request. Results are delivered as each screening completes — no need to wait for the entire batch.",
    },
    {
      id: 2,
      title: "Configurable Rules.",
      description:
        "Define your own risk thresholds, industry allowlists, and auto-decision criteria. Subtext applies your rules to every report so the output matches your compliance policy.",
    },
    {
      id: 3,
      title: "Webhook Events.",
      description:
        "Subscribe to screening events and receive alerts when reports are ready, when risk levels change, or when a merchant's profile is updated during monitoring.",
    },
    {
      id: 4,
      title: "Portal Access.",
      description:
        "Not everything needs to go through the API. The Subtext portal gives analysts a visual interface for running ad‑hoc screenings and reviewing reports.",
    },
  ];

  return (
    <section className="flex flex-col gap-16 items-center justify-center py-24 w-full bg-bg-alt">
      {/* Section Header and Description */}
      <div className="flex flex-col gap-5 items-start px-8 w-full max-w-310">
        <h2 className="text-[32px] leading-10 md:text-[48px] md:leading-15 font-medium tracking-[-0.96px] text-[#17171c] text-center text-balance">
          Built for how compliance teams actually work.
        </h2>
      </div>

      <div className="flex flex-col gap-5 items-start px-8 w-full max-w-310">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
          {/* Card 1 – spans 3 columns */}
          <div className="col-span-1 md:col-span-4 rounded-xl border border-border bg-bg-primary p-6 transition-colors md:min-h-51">
            <div className="flex items-center justify-center w-8 h-8 rounded-4xl mb-3">
              <Image
                src="/icons/batch processing.svg"
                alt="Webhook Events"
                width={20}
                height={20}
              />
            </div>

            <p className="text-body-xl text-pretty font-neue-montreal">
              <span className="font-medium text-bg-dark">{cards[0].title}</span>{" "}
              {cards[0].description}
            </p>
          </div>

          {/* Card 2 */}
          <div className="col-span-1 md:col-span-3 rounded-xl border border-border bg-bg-primary p-6 transition-colors md:min-h-51 ">
            <div className="flex items-center justify-center w-8 h-8 rounded-4xl mb-3">
              <Image
                src="/icons/Configurable rules.svg"
                alt="Webhook Events"
                width={20}
                height={20}
              />
            </div>

            <p className="text-body-xl text-pretty font-neue-montreal">
              <span className="font-medium text-bg-dark">{cards[1].title}</span>{" "}
              {cards[1].description}
            </p>
          </div>

          {/* Card 3 */}
          <div className="col-span-1 md:col-span-3 rounded-xl border border-border bg-bg-primary p-6 transition-colors md:min-h-51">
            <div className="flex items-center justify-center w-8 h-8 rounded-4xl mb-3">
              <Image
                src="/images/logos/Webhook.svg"
                alt="Webhook Events"
                width={20}
                height={20}
              />
            </div>

            <p className="text-body-xl text-pretty font-neue-montreal">
              <span className="font-medium text-bg-dark">{cards[2].title}</span>{" "}
              {cards[2].description}
            </p>
          </div>

          {/* Card 4 – spans 2 columns */}
          <div className="col-span-1 md:col-span-4 rounded-xl border border-border bg-bg-primary p-6 transition-colors md:min-h-51">
            <div className="flex items-center justify-center w-8 h-8 rounded-4xl mb-3">
              <Image
                src="/images/logos/portal.svg"
                alt="Webhook Events"
                width={20}
                height={20}
              />
            </div>

            <p className="text-body-xl text-pretty font-neue-montreal">
              <span className="font-medium text-bg-dark">{cards[3].title}</span>{" "}
              {cards[3].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
