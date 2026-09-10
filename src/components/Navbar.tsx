"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  {
    label: "Internship",
    href: "#internship",
  },
  {
    label: "Project Internship",
    href: "#project-internship",
  },
  {
    label: "Verification",
    href: "#verification",
  },
  {
    label: "About",
    href: "#about",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 md:h-20 md:px-8 lg:px-10"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#home"
          className="text-[19px] font-black tracking-tight text-[#0F4C3A] min-[375px]:text-xl md:text-2xl"
        >
          3SKILL
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 md:flex lg:gap-9">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="min-h-[44px] inline-flex items-center text-sm font-medium text-gray-800 transition hover:text-[#0F4C3A] hover:underline hover:underline-offset-4 lg:text-base"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Login */}
        <a
          href="#login"
          className="hidden min-h-[44px] items-center justify-center rounded-full bg-[#0F4C3A] px-6 py-2.5 text-sm font-bold text-white transition hover:bg-[#0a3b2d] focus:outline-none focus:ring-2 focus:ring-[#0F4C3A] focus:ring-offset-2 md:inline-flex"
        >
          Login
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-gray-900 hover:bg-gray-100 md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 md:hidden ${
          isOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="flex min-h-[52px] items-center border-b border-gray-100 text-base font-medium text-gray-800 hover:text-[#0F4C3A]"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#login"
            onClick={closeMenu}
            className="mt-4 flex min-h-[48px] items-center justify-center rounded-full bg-[#0F4C3A] px-6 py-3 font-bold text-white"
          >
            Login
          </a>
        </div>
      </div>
    </header>
  );
}