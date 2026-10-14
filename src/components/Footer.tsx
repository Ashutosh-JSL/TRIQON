
"use client";

import { supabase } from "../lib/supabase";
import { FormEvent, useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Loader2,
  CheckCircle2,
} from "lucide-react";

export default function Footer() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    setSubmitMessage("");
    setSubmitError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const fullName = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const mobile = formData.get("mobile")?.toString().trim();
    const college = formData.get("college")?.toString().trim();
    const branch = formData.get("branch")?.toString().trim();
    const yearOfStudy = formData.get("year")?.toString().trim();
    const areaOfInterest = formData.get("interest")?.toString().trim();
    const remarks = formData.get("remarks")?.toString().trim();

    if (!fullName || !email || !mobile || !college || !yearOfStudy) {
      setSubmitError("Please fill all required fields.");
      setIsSubmitting(false);
      return;
    }

    try {
      const { error } = await supabase
        .from("student_registrations")
        .insert({
          full_name: fullName,
          email,
          mobile,
          college,
          branch: branch || null,
          year_of_study: yearOfStudy,
          area_of_interest: areaOfInterest || null,
          remarks: remarks || null,
          status: "New",
        });

      if (error) {
        console.error("Supabase error:", error);
        setSubmitError(
          "Unable to submit your application. Please try again."
        );
        return;
      }

      setSubmitMessage(
        "Thank you! Your application has been submitted successfully."
      );

      form.reset();
    } catch (error) {
      console.error("Unexpected error:", error);
      setSubmitError("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "min-h-[46px] w-full rounded-xl border border-[#243548] bg-[#07111F] px-4 text-sm text-white placeholder:text-[#64748B] outline-none transition focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20";

  const labelClass =
    "mb-1.5 block text-sm font-semibold text-[#CBD5E1]";

  return (
    <footer id="contact" className="bg-[#07111F] text-white">
      {/* Contact Section */}
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:px-8 lg:grid-cols-2 lg:px-10 lg:py-24">
        {/* Left Side */}
        <div className="max-w-xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#14B8A6]">
            Contact TRIQUON
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Ready to Start Your Internship Journey?
          </h2>

          <p className="mt-5 text-base leading-7 text-[#94A3B8] sm:text-lg">
            Have questions about the internship, selection process,
            projects, refunds, or career opportunities? Talk to the
            TRIQUON team.
          </p>

          <div className="mt-8 space-y-5">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-[#14B8A6]" />
              <span className="text-sm text-[#CBD5E1]">
                careers@your-triqon-domain.com
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-[#14B8A6]" />
              <span className="text-sm text-[#CBD5E1]">
                Internship Support Team
              </span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-[#14B8A6]" />
              <span className="text-sm text-[#CBD5E1]">
                TRIQUON Internship Program
              </span>
            </div>
          </div>
        </div>

        {/* Apply / Contact Form */}
        <div className="rounded-3xl border border-[#243548] bg-[#0D1B2A] p-6 shadow-2xl shadow-black/20 sm:p-8">
          <h3 className="text-2xl font-black text-white">
            Apply / Contact Us
          </h3>

          <p className="mt-2 text-sm text-[#94A3B8]">
            Fill in your details and our team will get back to you.
          </p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div>
              <label htmlFor="name" className={labelClass}>
                Full Name *
              </label>

              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Enter your full name"
                className={inputClass}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className={labelClass}>
                Email Address *
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Enter your email"
                className={inputClass}
              />
            </div>

            {/* Mobile */}
            <div>
              <label htmlFor="mobile" className={labelClass}>
                Mobile Number *
              </label>

              <input
                id="mobile"
                name="mobile"
                type="tel"
                autoComplete="tel"
                required
                placeholder="Enter mobile number"
                className={inputClass}
              />
            </div>

            {/* College */}
            <div>
              <label htmlFor="college" className={labelClass}>
                College / University *
              </label>

              <input
                id="college"
                name="college"
                type="text"
                required
                placeholder="Enter your college"
                className={inputClass}
              />
            </div>

            {/* Branch */}
            <div>
              <label htmlFor="branch" className={labelClass}>
                Branch / Specialization
              </label>

              <input
                id="branch"
                name="branch"
                type="text"
                placeholder="e.g. CSE, ECE, MBA"
                className={inputClass}
              />
            </div>

            {/* Year of Study */}
            <div>
              <label htmlFor="year" className={labelClass}>
                Year of Study *
              </label>

              <select
                id="year"
                name="year"
                required
                defaultValue=""
                className={`${inputClass} bg-[#07111F]`}
              >
                <option value="" disabled>
                  Select your year
                </option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
                <option value="Postgraduate">Postgraduate</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Area of Interest */}
            <div>
              <label htmlFor="interest" className={labelClass}>
                Area of Interest
              </label>

              <select
                id="interest"
                name="interest"
                defaultValue=""
                className={`${inputClass} bg-[#07111F]`}
              >
                <option value="" disabled>
                  Select an area
                </option>
                <option value="Technology & Development">
                  Technology &amp; Development
                </option>
                <option value="Data & AI">Data &amp; AI</option>
                <option value="Design & Creative">
                  Design &amp; Creative
                </option>
                <option value="Business & Management">
                  Business &amp; Management
                </option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Remarks */}
            <div>
              <label htmlFor="remarks" className={labelClass}>
                Remarks / Message
              </label>

              <textarea
                id="remarks"
                name="remarks"
                rows={4}
                placeholder="Tell us what you would like to know..."
                className={`${inputClass} resize-none py-3`}
              />
            </div>

            {/* Error Message */}
            {submitError && (
              <div
                role="alert"
                className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-300"
              >
                {submitError}
              </div>
            )}

            {/* Success Message */}
            {submitMessage && (
              <div
                role="status"
                className="flex items-start gap-2 rounded-xl border border-[#14B8A6]/20 bg-[#14B8A6]/10 px-4 py-3 text-sm font-medium text-[#5EEAD4]"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{submitMessage}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex min-h-[50px] w-full items-center justify-center gap-2 rounded-full bg-[#14B8A6] px-6 py-3 text-sm font-bold text-[#07111F] transition hover:bg-[#0D9488] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Application"
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-[#243548]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 sm:px-6 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          {/* Brand */}
          <div>
            <div className="text-2xl font-black tracking-tight">
              TRIQON<span className="text-[#14B8A6]">.</span>
            </div>

            <p className="mt-1 text-xs text-[#94A3B8]">
              Learn. Build. Showcase. Get Hired.
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap gap-5 text-xs text-[#94A3B8]">
            <a
              href="#home"
              className="transition hover:text-[#14B8A6]"
            >
              Home
            </a>

            <a
              href="#how-it-works"
              className="transition hover:text-[#14B8A6]"
            >
              How It Works
            </a>

            <a
              href="#faq"
              className="transition hover:text-[#14B8A6]"
            >
              FAQ
            </a>

            <a
              href="/terms-and-conditions"
              className="transition hover:text-[#14B8A6]"
            >
              Terms &amp; Conditions
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-[#64748B]">
            © {new Date().getFullYear()} TRIQUON. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
