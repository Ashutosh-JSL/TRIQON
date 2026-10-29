
"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#07111F] text-white">
      {/* Footer Bottom */}
      <div className="border-t border-[#243548]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          {/* Brand */}
          <Link
            href="/#home"
            aria-label="TRIQUON home"
            className="inline-block"
          >
            <div className="text-2xl font-black tracking-tight">
              GrowZeal<span className="text-[#14B8A6]">.</span>
            </div>

            <p className="mt-1 text-xs text-[#94A3B8]">
              Learn. Build. Showcase. Get Hired.
            </p>
          </Link>

          {/* Footer Links */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-[#94A3B8]"
          >
            <Link
              href="/#home"
              className="transition-colors hover:text-[#14B8A6]"
            >
              Home
            </Link>

            <Link
              href="#JourneySection"
              className="transition-colors hover:text-[#14B8A6]"
            >
              How It Works
            </Link>

            <Link
              href="#internships"
              className="transition-colors hover:text-[#14B8A6]"
            >
              Internships
            </Link>

            <Link
              href="/about"
              className="transition-colors hover:text-[#14B8A6]"
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className="transition-colors hover:text-[#14B8A6]"
            >
              Contact
            </Link>

            <Link
              href="/terms-and-conditions"
              className="transition-colors hover:text-[#14B8A6]"
            >
              Terms &amp; Conditions
            </Link>
          </nav>

          {/* Copyright */}
          <p className="text-xs leading-5 text-[#64748B]">
            © {new Date().getFullYear()} GrowZeal . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
