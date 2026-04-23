const logos = [
  { src: "/images/logos/visa.svg", alt: "Visa", width: 56, height: 18 },
  {
    src: "/images/logos/mastercard.svg",
    alt: "Mastercard",
    width: 142,
    height: 18,
  },
  { src: "/images/logos/mercury.svg", alt: "Mercury", width: 129, height: 24 },
  {
    src: "/images/logos/lightspeed.svg",
    alt: "Lightspeed",
    width: 108,
    height: 26,
  },
  { src: "/images/logos/unit.svg", alt: "Unit", width: 44, height: 24 },
  { src: "/images/logos/moody's.svg", alt: "Moody's", width: 102, height: 20 },
];

export default function MarqueeRow() {
  return (
    <div className="w-full h-[88px] flex items-center">
      <div className="flex items-center gap-20 max-w-[1240px] w-full mx-auto px-8 h-full">
        {/* Label */}
        <span className="font-mono text-[15px] leading-5 tracking-[-0.15px] text-[#475569] whitespace-nowrap shrink-0">
          POWERING RISK AT
        </span>

        {/* Scrolling logos with edge fades */}
        <div
          className="flex-1 overflow-hidden relative h-full"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          <div className="flex items-center h-full animate-marquee gap-20 w-max">
            {[...logos, ...logos].map(({ src, alt, width, height }, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={`${alt}-${i}`}
                src={src}
                alt={alt}
                width={width}
                height={height}
                style={{ width: width, height: height, display: "block" }}
                className="shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
