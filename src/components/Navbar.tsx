
"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Internships", href: "#internships" },
  { label: "Why Triqon", href: "#why-triqon" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#243548] bg-[#07111F]/95 text-white shadow-lg shadow-black/10 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 md:h-20 md:px-8 lg:px-10"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#home"
          className="text-[20px] font-black tracking-[-0.04em] text-white min-[375px]:text-2xl"
          aria-label="Triqon home"
        >
          TRIQON<span className="text-[#14B8A6]">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 md:flex lg:gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex min-h-[44px] items-center text-sm font-medium text-[#94A3B8] transition-colors hover:text-[#14B8A6] lg:text-[15px]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden min-h-[44px] items-center justify-center rounded-full bg-[#14B8A6] px-6 py-2.5 text-sm font-bold text-[#07111F] transition hover:bg-[#0D9488] md:inline-flex"
        >
          Apply Now
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full text-white transition hover:bg-[#102638] md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-[#243548] bg-[#07111F] transition-all duration-300 md:hidden ${
          isOpen
            ? "max-h-[600px] opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex min-h-[50px] items-center border-b border-[#243548] text-base font-medium text-[#CBD5E1] transition-colors hover:text-[#14B8A6]"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 flex min-h-[50px] items-center justify-center rounded-full bg-[#14B8A6] px-6 py-3 font-bold text-[#07111F] transition hover:bg-[#0D9488]"
          >
            Apply Now
          </a>
        </div>
      </div>
    </header>
  );
}
