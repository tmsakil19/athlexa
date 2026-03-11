import { benefitsConfig } from "@/config/benefits";
import { BenefitsContent } from "./BenefitsContent";
import { BenefitsImage } from "./BenefitsImage";
import { ArrowButton } from "@/components/ui/ArrowButton";

export function BenefitsSection() {
  return (
    <section className="relative bg-brand-black px-6 py-16 lg:px-[160px] lg:py-[80px]">
      {/* Section Header */}
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="flex flex-col justify-center leading-[0.84]">
          <p
            className="mb-0 font-bebas text-[36px] sm:text-[48px] lg:text-[64px]"
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
            className="font-bebas text-[56px] sm:text-[72px] lg:text-[105px]"
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
        <p className="font-staatliches text-[28px] whitespace-nowrap text-white sm:text-[32px] lg:text-[40px]">
          {benefitsConfig.sectionLabel}
        </p>
      </div>

      {/* Benefits Content */}
      <div className="mt-12 flex flex-col items-end gap-[40px] lg:mt-[80px] lg:flex-row">
        {/* Benefit Items */}
        <BenefitsContent benefits={benefitsConfig.benefits} />

        {/* Player Image */}
        <BenefitsImage
          src={benefitsConfig.playerImage}
          alt="Basketball player"
        />

        {/* Description + Arrows */}
        <div className="flex w-full flex-col items-end gap-[40px] sm:gap-[80px] lg:w-[356px] lg:gap-[155px]">
          <p className="w-full font-[system-ui] text-[24px] leading-normal text-white sm:text-[28px] lg:text-[32px]">
            {benefitsConfig.description}
          </p>
          <div className="flex items-center gap-[16px] self-end">
            <ArrowButton direction="left" variant="default" />
            <ArrowButton direction="right" variant="active" />
          </div>
        </div>
      </div>
    </section>
  );
}
