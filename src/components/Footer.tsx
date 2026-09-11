"use client";

import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#6D4AFF] text-white">

      {/* Contact Section */}
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:px-8 lg:grid-cols-2 lg:px-10 lg:py-24">

        {/* Left */}
        <div className="max-w-xl">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C4B5FD]">
            Contact Triqon
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Ready to Start Your Internship Journey?
          </h2>

          <p className="mt-5 text-base leading-7 text-white/70 sm:text-lg">
            Have questions about the internship, selection process, projects,
            refund or career opportunities? Talk to the Triqon team.
          </p>

          <div className="mt-8 space-y-4">

            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-[#C4B5FD]" />
              <span className="text-sm text-white/80">
                careers@your-triqon-domain.com
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-[#C4B5FD]" />
              <span className="text-sm text-white/80">
                Internship Support Team
              </span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-[#C4B5FD]" />
              <span className="text-sm text-white/80">
                Triqon Internship Program
              </span>
            </div>

          </div>
        </div>

        {/* Form */}
        <div className="rounded-3xl bg-white p-6 text-gray-950 shadow-xl sm:p-8">

          <h3 className="text-2xl font-black">
            Apply / Contact Us
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Fill in your details and our team will get back to you.
          </p>

          <form
            className="mt-6 space-y-4"
            onSubmit={(event) => {
              event.preventDefault();
              alert("Thank you! Your application has been submitted.");
            }}
          >

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-semibold"
              >
                Full Name *
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Enter your full name"
                className="min-h-[46px] w-full rounded-xl border border-gray-200 px-4 text-sm outline-none transition focus:border-[#6D4AFF] focus:ring-2 focus:ring-[#EDE9FE]"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-semibold"
              >
                Email Address *
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="min-h-[46px] w-full rounded-xl border border-gray-200 px-4 text-sm outline-none transition focus:border-[#6D4AFF] focus:ring-2 focus:ring-[#EDE9FE]"
              />
            </div>

            {/* Mobile */}
            <div>
              <label
                htmlFor="mobile"
                className="mb-1.5 block text-sm font-semibold"
              >
                Mobile Number *
              </label>

              <input
                id="mobile"
                name="mobile"
                type="tel"
                required
                placeholder="Enter mobile number"
                className="min-h-[46px] w-full rounded-xl border border-gray-200 px-4 text-sm outline-none transition focus:border-[#6D4AFF] focus:ring-2 focus:ring-[#EDE9FE]"
              />
            </div>

            {/* College */}
            <div>
              <label
                htmlFor="college"
                className="mb-1.5 block text-sm font-semibold"
              >
                College / University *
              </label>

              <input
                id="college"
                name="college"
                type="text"
                required
                placeholder="Enter your college"
                className="min-h-[46px] w-full rounded-xl border border-gray-200 px-4 text-sm outline-none transition focus:border-[#6D4AFF] focus:ring-2 focus:ring-[#EDE9FE]"
              />
            </div>

            {/* Branch */}
            <div>
              <label
                htmlFor="branch"
                className="mb-1.5 block text-sm font-semibold"
              >
                Branch / Specialization
              </label>

              <input
                id="branch"
                name="branch"
                type="text"
                placeholder="e.g. CSE, ECE, MBA"
                className="min-h-[46px] w-full rounded-xl border border-gray-200 px-4 text-sm outline-none transition focus:border-[#6D4AFF] focus:ring-2 focus:ring-[#EDE9FE]"
              />
            </div>

            {/* Year */}
            <div>
              <label
                htmlFor="year"
                className="mb-1.5 block text-sm font-semibold"
              >
                Year of Study *
              </label>

              <select
                id="year"
                name="year"
                required
                defaultValue=""
                className="min-h-[46px] w-full rounded-xl border border-gray-200 bg-white px-4 text-sm outline-none focus:border-[#6D4AFF] focus:ring-2 focus:ring-[#EDE9FE]"
              >
                <option value="" disabled>
                  Select your year
                </option>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
                <option value="pg">Postgraduate</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Interest */}
            <div>
              <label
                htmlFor="interest"
                className="mb-1.5 block text-sm font-semibold"
              >
                Area of Interest
              </label>

              <select
                id="interest"
                name="interest"
                defaultValue=""
                className="min-h-[46px] w-full rounded-xl border border-gray-200 bg-white px-4 text-sm outline-none focus:border-[#6D4AFF] focus:ring-2 focus:ring-[#EDE9FE]"
              >
                <option value="" disabled>
                  Select an area
                </option>
                <option>Technology & Development</option>
                <option>Data & AI</option>
                <option>Design & Creative</option>
                <option>Business & Management</option>
                <option>Other</option>
              </select>
            </div>

            {/* Remarks */}
            <div>
              <label
                htmlFor="remarks"
                className="mb-1.5 block text-sm font-semibold"
              >
                Remarks / Message
              </label>

              <textarea
                id="remarks"
                name="remarks"
                rows={4}
                placeholder="Tell us what you would like to know..."
                className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#6D4AFF] focus:ring-2 focus:ring-[#EDE9FE]"
              />
            </div>

            <button
              type="submit"
              className="min-h-[50px] w-full rounded-full bg-[#6D4AFF] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#4C2FBF]"
            >
              Submit Application
            </button>

          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 sm:px-6 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">

          <div>
            <div className="text-2xl font-black tracking-tight">
              TRIQON<span className="text-[#C4B5FD]">.</span>
            </div>

            <p className="mt-1 text-xs text-white/50">
              Real Projects. Paid Internships. Real Careers.
            </p>
          </div>

          <div className="flex flex-wrap gap-5 text-xs text-white/60">
            <a href="#home" className="hover:text-white">
              Home
            </a>

            <a href="#how-it-works" className="hover:text-white">
              How It Works
            </a>

            <a href="#faq" className="hover:text-white">
              FAQ
            </a>

            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>

            <a href="#" className="hover:text-white">
              Refund Policy
            </a>
          </div>

          <p className="text-xs text-white/40">
            © 2026 Triqon. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}