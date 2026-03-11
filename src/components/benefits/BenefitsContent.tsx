import type { BenefitItem } from "@/interfaces/benefit.interface";

interface BenefitsContentProps {
  benefits: BenefitItem[];
}

export function BenefitsContent({ benefits }: BenefitsContentProps) {
  return (
    <div className="flex w-full flex-col gap-[16px] lg:w-[326px]">
      {benefits.map((benefit) =>
        benefit.isHighlighted ? (
          <div
            key={benefit.label}
            className="flex items-center gap-[8px]"
          >
            <div className="size-[10px] shrink-0 rounded-full bg-brand-primary" />
            <p className="font-bebas text-[28px] leading-none text-brand-primary sm:text-[32px] lg:text-[36px]">
              {benefit.label}
            </p>
          </div>
        ) : (
          <p
            key={benefit.label}
            className="font-bebas text-[20px] leading-[26px] text-white sm:text-[22px] lg:text-[24px]"
          >
            {benefit.label}
          </p>
        )
      )}
    </div>
  );
}
