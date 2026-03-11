export interface NavigationItem {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  links: NavigationItem[];
  ctaLabel: string;
  ctaHref: string;
}
