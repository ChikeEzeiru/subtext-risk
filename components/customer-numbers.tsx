"use client";

import RadialBurst from "./radial-burst";

export default function CustomerNumbers() {
  return (
    <section className="flex flex-col gap-16 items-center pt-24 pb-10 w-full">
      <div className="flex flex-col gap-5 items-center px-8 w-full max-w-310">
        <div className="max-w-180">
          <h2 className="text-[32px] leading-10 md:text-[48px] md:leading-15 font-medium tracking-[-0.96px] text-[#17171c] text-center text-balance">
            What changes when merchant screening takes 30 seconds{" "}
            <span className="text-accent">instead of 20 minutes.</span>
          </h2>
        </div>
      </div>

      <div className="flex flex-row gap-5 items-center px-8 w-full max-w-310">
        <div className="flex flex-col gap-4 items-center justify-center py-7-5 w-full">
          <h3 className="text-[28px] leading-10 md:text-[42px] md:leading-12 font-medium tracking-[-0.96px] text-[#17171c] text-center">
            56%
          </h3>

          <p className="text-body-md  max-w-55 text-center">
            average increase in onboarding automation
          </p>
        </div>

        <div className="flex flex-col gap-3 items-center justify-center py-7-5  w-full">
          <h3 className="text-[28px] leading-10 md:text-[42px] md:leading-12 font-medium tracking-[-0.96px] text-[#17171c] text-center">
            17s
          </h3>

          <p className="text-body-md  max-w-55 text-center">
            average screening time (down from 15–20 minutes)
          </p>
        </div>

        <div className="flex flex-col gap-4 items-center justify-center py-7-5  w-full">
          <h3 className="text-[28px] leading-10 md:text-[42px] md:leading-12 font-medium tracking-[-0.96px] text-[#17171c] text-center">
            50%
          </h3>

          <p className="text-body-md max-w-55 text-center">
            reduction in merchant underwriting time
          </p>
        </div>
      </div>

      <div className="max-w-310 w-full h-120 -m-10 items-start justify-baseline relative overflow-hidden my-gradient">
        <RadialBurst />
      </div>
    </section>
  );
}
