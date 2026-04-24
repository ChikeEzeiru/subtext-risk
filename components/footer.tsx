import Image from "next/image";

type FooterProps = {
  showCTA?: boolean;
};

export default function Footer({ showCTA = true }: FooterProps) {
  return (
    <footer className="bg-[#17171C] flex flex-col gap-24 items-center py-24 w-full">
      {/* CTA Section — hidden on interior pages */}
      {showCTA && (
        <div className="flex flex-col items-center max-w-310 px-4 md:px-8 w-full">
          <div className="flex flex-col gap-10 items-center">
            <div className="flex flex-col gap-5 items-center text-center">
              <h2 className="font-neue-montreal font-medium text-[32px] leading-10 md:text-[48px] md:leading-15 tracking-[-0.96px] text-[#F4F4F5]">
                See what Subtext finds
                <br />
                on your merchants.
              </h2>
              <p className="font-neue-montreal text-[20px] leading-7-5 text-[#9E9EAD]">
                Book a 15-minute demo and we&apos;ll run your merchants through
                Subtext live.
              </p>
            </div>

            <div className="flex gap-4 items-center">
              {/* Primary CTA */}
              <div className="p-0.5 rounded-sm [background:linear-gradient(to_bottom,rgba(205,137,48),rgba(117,64,18))] w-fit shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)">
                <button
                  className="
                    flex items-center gap-1 rounded-sm
                    font-neue-montreal font-medium text-[17px] leading-6 text-white
                    px-4.5 py-3
                    [background:linear-gradient(32.5deg,#894717,#CA7D15)]
                    shadow-inset_0px_0px_0px_1px_rgba(0,0,0,0.18),inset_0px_-2px_0px_0px_rgba(0,0,0,0.05)]
                    hover:opacity-90 transition-opacity
                "
                >
                  Book a Demo
                </button>
              </div>

              {/* Secondary CTA */}
              <button className="flex items-center gap-1 font-neue-montreal font-medium text-[17px] leading-6 text-[#94A3B8] px-4.5 py-3 rounded-lg hover:text-white transition-colors">
                View API Docs
                <svg
                  className="w-5 h-5"
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
        </div>
      )}

      {/* Inner Footer Row */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-0 max-w-310 px-4 md:px-8 w-full">
        {/* Left — Logo + Copyright */}
        <div className="flex flex-col gap-5 items-start">
          <div className="flex gap-2.5 items-center">
            <Image
              src="/images/Subtext-full-logo-white.svg"
              alt="Subtext"
              className="h-12 w-auto"
              height={48}
              width={139.47}
            />
          </div>
          <p className="font-neue-montreal text-[20px] leading-7-5 text-[#9E9EAD]">
            © 2026 Subtext, Inc.
          </p>
        </div>

        {/* Center — Legal Links */}
        <div className="flex gap-2 items-center">
          {["Privacy Policy", "Terms of Service", "Security"].map((link) => (
            <a
              key={link}
              href="#"
              className="font-neue-montreal text-[14px] leading-5 text-[#9E9EAD] hover:text-white transition-colors px-3 py-2 min-h-12 flex items-center"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right — Backed by */}
        <div className="flex flex-col gap-5 items-start p-2">
          <p className="font-neue-montreal text-[14px] leading-5 text-[#9E9EAD]">
            Backed by Leading Investors:
          </p>
          <div className="flex gap-6 items-center">
            <Image
              src="/images/logos/y_combinator.svg"
              alt="Y Combinator"
              className="h-9 w-auto"
              height={35}
              width={36}
            />
            <Image
              src="/images/logos/flourish_ventures.svg"
              alt="Flourish Ventures"
              className="h-9 w-auto"
              height={38}
              width={36}
            />
            <Image
              src="/images/logos/fintech_fund.svg"
              alt="The Fintech Fund"
              className="h-9 w-auto"
              height={36}
              width={36}
            />
            <Image
              src="/images/logos/homebrew.svg"
              alt="Homebrew"
              className="h-9 w-auto"
              height={36}
              width={36}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
