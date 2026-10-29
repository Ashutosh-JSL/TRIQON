
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Check, Sparkles } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/#home", section: "home" },
  {
    label: "How It Works",
    href: "#JourneySection",
    section: "how-it-works",
  },
  {
    label: "Internships",
    href: "/#internships",
    section: "internships",
  },
  {
    label: "Why GrowZeal",
    href: "/#why-Triqon",
    section: "why-Triqon",
  },
  { label: "Contact", href: "/contact", section: "" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const updateActiveSection = () => {
      if (pathname !== "/") {
        setActiveSection("");
        return;
      }

      setActiveSection(window.location.hash.replace("#", ""));
    };

    updateActiveSection();

    window.addEventListener("hashchange", updateActiveSection);
    window.addEventListener("popstate", updateActiveSection);

    return () => {
      window.removeEventListener("hashchange", updateActiveSection);
      window.removeEventListener("popstate", updateActiveSection);
    };
  }, [pathname]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const isActive = (link: (typeof navLinks)[number]) => {
    if (link.href === "/contact") {
      return pathname === "/contact";
    }

    return pathname === "/" && activeSection === link.section;
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 text-white">
        {/* NAVBAR BACKGROUND */}
        <div className="absolute inset-0 border-b border-white/[0.08] bg-[#050B18]/90 shadow-lg shadow-black/10 backdrop-blur-2xl" />

        {/* TOP ACCENT LINE */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />

        <nav
          className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 md:h-20 md:px-8 lg:px-10"
          aria-label="Main navigation"
        >
          {/* GROWZEAL BRAND */}
          <a
            href="/#home"
            onClick={closeMenu}
            className="group relative flex shrink-0 items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            aria-label="GrowZeal home"
          >
            {/* GZ LOGO MARK */}
            <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-cyan-300/20 bg-gradient-to-br from-cyan-300/[0.13] to-violet-400/[0.13] shadow-[0_0_22px_rgba(34,227,214,0.04)] transition duration-300 group-hover:border-cyan-300/40 group-hover:shadow-[0_0_24px_rgba(34,227,214,0.12)]">
              <span className="absolute inset-0 bg-gradient-to-br from-cyan-300/[0.08] to-transparent" />

              <span className="relative text-[15px] font-black tracking-[-0.12em] text-white">
                G<span className="text-cyan-300">Z</span>
              </span>

              <span className="absolute bottom-1 right-1 h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(34,227,214,0.7)]" />
            </span>

            {/* BRAND NAME */}
            <span className="flex flex-col">
              <span className="text-[21px] font-black leading-none tracking-[-0.055em] text-white sm:text-2xl">
                Grow<span className="text-cyan-300">Zeal</span>
              </span>

              <span className="mt-1.5 text-[8px] font-bold uppercase tracking-[0.23em] text-slate-500 sm:text-[9px]">
                Learn · Build · Grow
              </span>
            </span>
          </a>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-1 md:flex lg:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link);

              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative inline-flex min-h-11 items-center rounded-xl px-3 text-[13px] font-semibold transition-all duration-200 lg:px-4 lg:text-sm ${
                    active
                      ? "bg-cyan-300/[0.08] text-cyan-200"
                      : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  {link.label}

                  <span
                    className={`absolute bottom-1.5 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-300 to-violet-300 transition-all duration-300 ${
                      active ? "w-5" : "w-0 group-hover:w-4"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* DESKTOP CTA */}
          <a
            href="/#internships"
            className="group hidden min-h-11 items-center justify-center gap-2 rounded-xl border border-cyan-200/20 bg-gradient-to-r from-cyan-300 to-[#91A7FF] px-4 py-2.5 text-sm font-extrabold text-[#050B18] shadow-[0_0_20px_rgba(34,227,214,0.07)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(34,227,214,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 active:translate-y-0 md:inline-flex lg:px-5"
          >
            <Sparkles
              size={15}
              className="transition-transform duration-300 group-hover:rotate-12"
            />
            Explore Programs
            <ArrowUpRight
              size={16}
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            className={`relative flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 active:scale-95 md:hidden ${
              isOpen
                ? "border-cyan-300/30 bg-cyan-300/10 text-cyan-200"
                : "border-white/10 bg-white/[0.035] text-slate-200 hover:border-cyan-300/30 hover:bg-cyan-300/[0.06]"
            }`}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </nav>

        {/* MOBILE MENU */}
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
            <div className="border-t border-white/[0.07] bg-[#050B18]/[0.98] px-4 pb-5 pt-4 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:px-6">
              {/* MOBILE MENU BRAND */}
              <div className="mb-4 flex items-center justify-between px-1">
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-cyan-300">
                    Navigation
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Explore your next step
                  </p>
                </div>

                <span className="text-lg font-black tracking-tight text-white">
                  Grow<span className="text-cyan-300">Zeal</span>
                </span>
              </div>

              {/* MOBILE NAV LINKS */}
              <div className="space-y-1.5">
                {navLinks.map((link) => {
                  const active = isActive(link);

                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      aria-current={active ? "page" : undefined}
                      tabIndex={isOpen ? 0 : -1}
                      className={`group relative flex min-h-[50px] items-center justify-between overflow-hidden rounded-xl border px-4 py-3 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 active:scale-[0.99] ${
                        active
                          ? "border-cyan-300/20 bg-gradient-to-r from-cyan-300/[0.09] to-violet-300/[0.04] text-cyan-200"
                          : "border-transparent text-slate-300 hover:border-white/[0.08] hover:bg-white/[0.035] hover:text-white"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={`h-5 w-1 rounded-full transition-colors ${
                            active
                              ? "bg-cyan-300 shadow-[0_0_10px_rgba(34,227,214,0.6)]"
                              : "bg-transparent group-hover:bg-violet-300/50"
                          }`}
                        />

                        <span className="text-sm font-semibold">
                          {link.label}
                        </span>
                      </span>

                      {active ? (
                        <Check size={17} className="text-cyan-300" />
                      ) : (
                        <ArrowUpRight
                          size={16}
                          className="text-slate-500 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300"
                        />
                      )}
                    </a>
                  );
                })}
              </div>

              {/* MOBILE CTA */}
              <a
                href="/#internships"
                onClick={closeMenu}
                tabIndex={isOpen ? 0 : -1}
                className="group mt-4 flex min-h-[50px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-300 to-[#91A7FF] px-5 py-3 text-sm font-extrabold text-[#050B18] shadow-[0_5px_24px_rgba(34,227,214,0.08)] transition duration-300 hover:shadow-[0_5px_28px_rgba(34,227,214,0.17)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 active:scale-[0.99]"
              >
                <Sparkles size={16} />
                Explore Programs
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              {/* FOOTER SIGNATURE */}
              <div className="mt-5 flex items-center justify-center gap-2 border-t border-white/[0.06] pt-4">
                <span className="h-px w-6 bg-gradient-to-r from-transparent to-cyan-300/50" />

                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  Build Skills. Create Opportunities.
                </p>

                <span className="h-px w-6 bg-gradient-to-l from-transparent to-violet-300/50" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* NAVBAR SPACER */}
      <div aria-hidden="true" className="h-16 md:h-20" />
    </>
  );
}
