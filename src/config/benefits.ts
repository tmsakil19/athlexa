import type { BenefitsConfig } from "@/interfaces/benefit.interface";

export const benefitsConfig: BenefitsConfig = {
  sectionTitleLine1: "What You'll Gain From",
  sectionTitleLine2: "Our Coaching",
  sectionLabel: "— Benefits",
  description: "Learn correct techniques with structured training plans.",
  playerImage: "/images/player-2.png",
  benefits: [
    { label: "Stronger Fitness & Stamina", isHighlighted: false },
    { label: "Faster Skill Improvement", isHighlighted: true },
    { label: "Injury-Safe Training", isHighlighted: false },
    { label: "Confidence Under Pressure", isHighlighted: false },
  ],
};
