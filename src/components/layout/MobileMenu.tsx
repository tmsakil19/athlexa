"use client";

import { navigationConfig } from "@/config/navigation";
import { X, ArrowUpLeft } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col bg-brand-black transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
        }`}
    >
      <div className="flex items-center justify-between px-6 py-8">
        <span className="font-bebas text-[40px] leading-none text-white">
          {navigationConfig.logo}
        </span>
        <button
          onClick={onClose}
          className="text-white"
          aria-label="Close menu"
        >
          <X size={28} />
        </button>
      </div>

      <ul className="flex flex-col items-center gap-8 pt-12 font-poppins text-[20px] text-white">
        {navigationConfig.links.map((link) => (
          <li key={link.label}>
            <a href={link.href} onClick={onClose}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex justify-center pt-12">
        <a
          href={navigationConfig.ctaHref}
          onClick={onClose}
          className="flex items-center gap-[16px] rounded-full bg-brand-dark py-[4px] pl-[4px] pr-[24px]"
        >
          <span className="flex size-[48px] items-center justify-center rounded-[24px] bg-white">
            <ArrowUpLeft className="size-[24px] rotate-90 text-brand-black" />
          </span>
          <span className="font-manrope text-[18px] font-semibold leading-[27px] text-white">
            {navigationConfig.ctaLabel}
          </span>
        </a>
      </div>
    </div>
  );
}
