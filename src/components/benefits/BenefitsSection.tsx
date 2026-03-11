import { benefitsConfig } from "@/config/benefits";
import { BenefitsContent } from "./BenefitsContent";
import { BenefitsImage } from "./BenefitsImage";
import { ArrowButton } from "@/components/ui/ArrowButton";

export function BenefitsSection() {
  return (
    <section className="relative bg-brand-black px-6 pb-20 pt-16 md:px-10 lg:px-[160px] lg:pb-[120px] lg:pt-[155px]">
      {/* Decorative basketball circle - right side */}
      <div className="pointer-events-none absolute right-0 top-0 hidden h-[752px] w-[487px] opacity-20 lg:block">
        <svg
          viewBox="0 0 487 752"
          fill="none"
          className="h-full w-full"
        >
          <circle
            cx="400"
            cy="376"
            r="350"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="2"
          />
          <path
            d="M400 26 Q200 376 400 726"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M50 200 Q400 376 50 552"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* ===== Section Header ===== */}
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        {/* Title with metallic gradient */}
        <div className="flex flex-col justify-center" style={{ lineHeight: "0.84" }}>
          <p
            className="font-bebas text-[32px] uppercase sm:text-[48px] lg:text-[64px]"
            style={{
              backgroundImage: "var(--gradient-metallic)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {benefitsConfig.sectionTitleLine1}
          </p>
          <p
            className="font-bebas text-[48px] uppercase sm:text-[72px] lg:text-[105px]"
            style={{
              backgroundImage: "var(--gradient-metallic)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {benefitsConfig.sectionTitleLine2}
          </p>
        </div>

        {/* Label */}
        <p className="shrink-0 font-staatliches text-[28px] text-white sm:text-[32px] lg:text-[40px]">
          {benefitsConfig.sectionLabel}
        </p>
      </div>

      {/* ===== Benefits Content Row ===== */}
      <div className="mt-10 flex flex-col gap-10 lg:mt-[80px] lg:flex-row lg:items-end lg:gap-[40px]">
        {/* Column 1: Benefits List */}
        <BenefitsContent benefits={benefitsConfig.benefits} />

        {/* Column 2: Player Image */}
        <BenefitsImage
          src={benefitsConfig.playerImage}
          alt="Basketball player training"
        />

        {/* Column 3: Description + Arrows */}
        <div className="flex flex-col gap-10 lg:w-[356px] lg:gap-[155px]">
          <p className="font-inter text-[24px] leading-normal text-white sm:text-[28px] lg:text-[32px]">
            {benefitsConfig.description}
          </p>

          <div className="flex items-center gap-4 self-start lg:self-end">
            <ArrowButton direction="left" variant="default" />
            <ArrowButton direction="right" variant="active" />
          </div>
        </div>
      </div>
    </section>
  );
}
