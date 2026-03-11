"use client";

import { useState } from "react";
import { navigationConfig } from "@/config/navigation";
import { MobileMenu } from "./MobileMenu";
import { Menu, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-6 md:px-10 lg:px-[160px] lg:py-[38px]">
      {/* Nav Links - Desktop */}
      <ul className="hidden items-center gap-[34px] font-poppins text-[16px] text-white lg:flex">
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
        className="text-white lg:hidden"
        onClick={() => setIsMobileMenuOpen(true)}
        aria-label="Open menu"
      >
        <Menu size={28} />
      </button>

      {/* Logo */}
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bebas text-[32px] leading-none text-white md:text-[40px]">
        {navigationConfig.logo}
      </span>

      {/* CTA Button */}
      <a
        href={navigationConfig.ctaHref}
        className="flex items-center gap-4 rounded-full bg-brand-dark py-1 pl-1 pr-1 pl-5"
      >

        <span className="hidden font-manrope text-[18px] font-semibold leading-[27px] text-white md:block">
          {navigationConfig.ctaLabel}
        </span>
        <span className="flex size-12 items-center justify-center rounded-full bg-white">
          <ArrowUpRight className="size-6 text-brand-black" />
        </span>
      </a>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </nav>
  );
}
