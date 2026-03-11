import type { NavigationConfig } from "@/interfaces/navigation.interface";

export const navigationConfig: NavigationConfig = {
  logo: "Athlexa",
  links: [
    { label: "Programs", href: "#programs" },
    { label: "Coaches", href: "#coaches" },
    { label: "Pricing", href: "#pricing" },
    { label: "Reviews", href: "#reviews" },
  ],
  ctaLabel: "Contact",
  ctaHref: "#contact",
};
