"use client";

import Image from "next/image";

export default function CustomerHero() {
  return (
    <section className="flex flex-col gap-20 items-center pt-42 pb-24 w-full min-h-184">
      {/* Title group */}
      <div className="flex flex-col gap-16 items-center max-w-310 px-8 w-full">
        <div className="flex flex-col gap-5 items-center max-w-190 min-h-76 w-full">
          <h1 className="font-neue-montreal font-medium text-[48px] leading-15 tracking-[-0.96px] text-[#17171C] w-full text-center">
            The companies rethinking how merchant risk gets assessed.
          </h1>

          <p className="flex-1 font-neue-montreal text-[20px] leading-7-5 text-[#4F4F5E] text-center w-full text-balance">
            From global payment networks to growing fintechs, compliance teams
            use Subtext to screen merchants faster, reduce manual review, and
            catch risk that traditional verification misses.
          </p>
        </div>
      </div>

      {/* Logo Bar */}
      <div className="flex flex-row md:flex items-center justify-center w-full rounded-xl max-w-310 px-8">
        <div className="flex-row md:flex items-center justify-center w-full border border-black/10 rounded-xl min-h-22">
          <div className="flex w-full items-center justify-center">
            <Image
              src="/images/logos/visa.svg"
              alt="Customer Logos"
              width={56}
              height={18}
              className="h-auto object-contain"
            />
          </div>

          <div className="flex w-full items-center justify-center">
            <Image
              src="/images/logos/mastercard.svg"
              alt="Customer Logos"
              width={142}
              height={18}
              className="h-auto object-contain"
            />
          </div>

          <div className="flex w-full items-center justify-center">
            <Image
              src="/images/logos/mercury.svg"
              alt="Customer Logos"
              width={129}
              height={24}
              className="h-auto object-contain"
            />
          </div>

          <div className="flex w-full items-center justify-center">
            <Image
              src="/images/logos/lightspeed.svg"
              alt="Customer Logos"
              width={108}
              height={26}
              className="h-auto object-contain"
            />
          </div>

          <div className="flex w-full items-center justify-center">
            <Image
              src="/images/logos/unit.svg"
              alt="Customer Logos"
              width={44}
              height={24}
              className="h-auto object-contain"
            />
          </div>

          <div className="flex w-full items-center justify-center">
            <Image
              src="/images/logos/moody's.svg"
              alt="Customer Logos"
              width={102}
              height={20}
              className="h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
