export interface BenefitItem {
  label: string;
  isHighlighted: boolean;
}

export interface BenefitsConfig {
  sectionTitleLine1: string;
  sectionTitleLine2: string;
  sectionLabel: string;
  description: string;
  playerImage: string;
  benefits: BenefitItem[];
}
