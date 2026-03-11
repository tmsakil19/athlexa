"use client";

import { useState } from "react";
import { navigationConfig } from "@/config/navigation";
import { MobileMenu } from "./MobileMenu";
import { ArrowUpLeft, Menu } from "lucide-react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 flex items-center justify-between px-6 py-8 lg:px-[160px] lg:py-[38px]">
      {/* Nav Links - Desktop */}
      <ul className="hidden gap-[34px] font-poppins text-[16px] text-white md:flex">
        {navigationConfig.links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="transition-opacity hover:opacity-80"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="text-white md:hidden"
        onClick={() => setIsMobileMenuOpen(true)}
        aria-label="Open menu"
      >
        <Menu size={28} />
      </button>

      {/* Logo */}
      <span className="font-bebas text-[40px] leading-none text-white">
        {navigationConfig.logo}
      </span>

      {/* CTA Button - Desktop */}
      <a
        href={navigationConfig.ctaHref}
        className="hidden items-center gap-[16px] rounded-full bg-brand-dark py-[4px] pl-[4px] pr-[24px] md:flex"
      >
        <span className="flex size-[48px] items-center justify-center rounded-[24px] bg-white">
          <ArrowUpLeft className="size-[24px] rotate-90 text-brand-black" />
        </span>
        <span className="font-manrope text-[18px] font-semibold leading-[27px] text-white">
          {navigationConfig.ctaLabel}
        </span>
      </a>

      {/* Mobile placeholder for spacing */}
      <div className="size-[28px] md:hidden" />

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </nav>
  );
}
