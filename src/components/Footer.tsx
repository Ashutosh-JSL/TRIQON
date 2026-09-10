"use client";


import Link from "next/link";
import { footerColumns, socials } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-paper/10 bg-paper/[0.04] p-8 sm:flex-row sm:items-center">
          <div>
            <h3 className="font-display text-xl font-bold">
              Sign up to get internship updates &amp; batch announcements
            </h3>
          </div>
          <form className="flex w-full max-w-sm gap-2" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              required
              placeholder="you@email.com"
              className="w-full rounded-full border border-paper/15 bg-transparent px-4 py-2.5 text-sm text-paper placeholder:text-paper/40 focus:border-amber focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-amber px-5 py-2.5 text-sm font-semibold text-ink"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-paper font-display text-base font-bold text-ink">
                3S
              </span>
              <span className="font-display text-lg font-bold">3Skill</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/60">
              India&rsquo;s leading EdTech platform for live-mentored internships, courses,
              workshops, and hackathons.
            </p>
            <div className="mt-5 space-y-1 text-sm text-paper/60">
              <p>
                <a href="mailto:support@3skill.in" className="hover:text-paper">
                  support@3skill.in
                </a>
              </p>
              <p>
                <a href="tel:+916372105534" className="hover:text-paper">
                  +91 63721 05534
                </a>
              </p>
              <p>Koel Campus Patia, Bhubaneswar, Khorda, Odisha, India, 751031.</p>
            </div>
            <div className="mt-5 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/15 text-xs font-semibold text-paper/70 hover:border-paper/40 hover:text-paper"
                >
                  {social.label.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.heading}>
              <h4 className="font-mono-tag text-xs uppercase tracking-wide text-paper/40">
                {column.heading}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-paper/70 hover:text-paper">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-paper/10 pt-6 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} 3Skill. All Rights Reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/terms-and-conditions" className="hover:text-paper">
              Terms of Service
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-paper">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-paper">
              Refund Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-paper">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
