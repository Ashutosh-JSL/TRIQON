
"use client";

import { Menu, X, ArrowUpRight, Check } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Internships", href: "/#internships" },
  { label: "Why Triqon", href: "/#why-triqon" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [pressedLink, setPressedLink] = useState("");
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/contact") return pathname === "/contact";
    if (pathname !== "/") return false;

    const section = href.split("#")[1];
    if (!section) return false;

    return (
      typeof window !== "undefined" &&
      window.location.hash === `#${section}`
    );
  };

  const closeMenu = () => {
    setIsOpen(false);
    setPressedLink("");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#243548] bg-[#07111F]/95 text-white shadow-lg shadow-black/10 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 md:h-20 md:px-8 lg:px-10"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="/#home"
          onClick={closeMenu}
          className="group relative text-2xl font-black tracking-[-0.05em] text-white transition-transform duration-200 active:scale-95"
          aria-label="TRIQON home"
        >
          TRIQON
          <span className="text-[#14B8A6]">.</span>
          <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-[#14B8A6] transition-all duration-300 group-hover:w-full" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 md:flex lg:gap-3">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative inline-flex min-h-11 items-center rounded-full px-3.5 text-sm font-semibold transition-all duration-200 lg:px-4 lg:text-[15px] ${
                  active
                    ? "bg-[#14B8A6]/10 text-[#14B8A6]"
                    : "text-[#94A3B8] hover:bg-[#102638] hover:text-white"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#14B8A6]" />
                )}
              </a>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <a
          href="/contact"
          className="hidden min-h-11 items-center justify-center gap-2 rounded-full bg-[#14B8A6] px-5 py-2.5 text-sm font-extrabold text-[#07111F] shadow-[0_0_20px_rgba(20,184,166,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2DD4BF] hover:shadow-[0_0_26px_rgba(20,184,166,0.25)] active:translate-y-0 active:scale-95 md:inline-flex"
        >
          Apply Now
          <ArrowUpRight size={16} />
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className={`relative flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-200 active:scale-90 md:hidden ${
            isOpen
              ? "border-[#14B8A6]/50 bg-[#14B8A6]/15 text-[#14B8A6] shadow-[0_0_18px_rgba(20,184,166,0.12)]"
              : "border-[#243548] bg-[#0D1B2A] text-white hover:border-[#14B8A6]/50 hover:bg-[#102638]"
          }`}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <span
            className={`absolute inset-0 rounded-xl ring-2 ring-[#14B8A6]/0 transition-all duration-200 ${
              isOpen ? "ring-[#14B8A6]/20" : ""
            }`}
          />
          {isOpen ? (
            <X className="h-5 w-5 transition-transform duration-200" />
          ) : (
            <Menu className="h-5 w-5 transition-transform duration-200" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        aria-hidden={!isOpen}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out md:hidden ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="border-t border-[#243548] bg-gradient-to-b from-[#0A1928] to-[#07111F] px-4 pb-5 pt-4 sm:px-6">
            <p className="mb-3 px-3 text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#64748B]">
              Explore Triqon
            </p>

            <div className="space-y-1.5">
              {navLinks.map((link) => {
                const active =
                  isActive(link.href) || pressedLink === link.href;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => {
                      setPressedLink(link.href);
                      setIsOpen(false);
                    }}
                    className={`group relative flex min-h-[52px] items-center justify-between overflow-hidden rounded-xl border px-4 py-3 transition-all duration-200 active:scale-[0.98] ${
                      active
                        ? "border-[#14B8A6]/30 bg-[#14B8A6]/10 text-[#5EEAD4] shadow-[inset_0_0_18px_rgba(20,184,166,0.04)]"
                        : "border-transparent text-[#CBD5E1] hover:border-[#243548] hover:bg-[#102638] hover:text-white"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`h-5 w-1 rounded-full transition-all duration-200 ${
                          active
                            ? "bg-[#14B8A6] shadow-[0_0_10px_rgba(20,184,166,0.65)]"
                            : "bg-transparent group-hover:bg-[#14B8A6]/40"
                        }`}
                      />
                      <span className="text-[15px] font-semibold">
                        {link.label}
                      </span>
                    </span>

                    {active ? (
                      <Check
                        size={17}
                        className="text-[#14B8A6]"
                      />
                    ) : (
                      <ArrowUpRight
                        size={16}
                        className="text-[#64748B] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#14B8A6]"
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Mobile CTA */}
            <a
              href="/contact"
              onClick={closeMenu}
              className="mt-4 flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#14B8A6] to-[#2DD4BF] px-5 py-3 font-extrabold text-[#07111F] shadow-[0_6px_22px_rgba(20,184,166,0.15)] transition-all duration-200 hover:shadow-[0_8px_28px_rgba(20,184,166,0.25)] active:scale-[0.98]"
            >
              Apply Now
              <ArrowUpRight size={17} />
            </a>

            <p className="mt-4 text-center text-[10px] font-medium tracking-wide text-[#64748B]">
              BUILD SKILLS. CREATE OPPORTUNITIES.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
