
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

const labelClass = "mb-2 block text-sm font-semibold text-[#CBD5E1]";

const inputClass =
  "w-full rounded-xl border border-[#243548] bg-[#07111F] px-4 py-3 text-sm text-white placeholder:text-[#64748B] outline-none transition focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");

 
async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  setIsSubmitting(true);
  setSubmitMessage("");
  setSubmitError("");

  const form = event.currentTarget;
  const data = new FormData(form);

  const registration = {
    full_name: String(data.get("name") || "").trim(),
    email: String(data.get("email") || "").trim(),
    mobile: String(data.get("mobile") || "").trim(),
    college: String(data.get("college") || "").trim(),
    branch: String(data.get("branch") || "").trim(),
    year_of_study: String(data.get("year") || ""),
    area_of_interest: String(data.get("interest") || ""),
    remarks: String(data.get("remarks") || "").trim(),
    status: "New",
  };

  try {
    const supabase = createClient();

    const { error } = await supabase
      .from("student_registrations")
      .insert([registration]);

    if (error) {
      console.error("Supabase insert error:", error);
      throw error;
    }

    setSubmitMessage(
      "Thank you for contacting TriQolo! Your details have been submitted successfully."
    );

    form.reset();
  } catch (error) {
    console.error("Contact form error:", error);

    setSubmitError(
      error instanceof Error
        ? `Submission failed: ${error.message}`
        : "We could not submit your details. Please try again later."
    );
  } finally {
    setIsSubmitting(false);
  }
}


  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07111F] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-[#14B8A6]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#0D9488]/10 blur-3xl"
      />

      {/* Header */}
      <header className="relative z-10 border-b border-[#243548] bg-[#07111F]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <Link href="/" className="text-2xl font-black tracking-tight">
            TriQolo<span className="text-[#14B8A6]">.</span>
          </Link>

          <Link
            href="/"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#243548] bg-[#0D1B2A] px-4 py-2 text-sm font-semibold text-[#CBD5E1] transition hover:border-[#14B8A6] hover:text-[#5EEAD4]"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Contact content */}
      <section className="relative z-10">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-24">
          {/* Introduction */}
          <div className="flex flex-col justify-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#14B8A6]">
              Contact TriQolo
            </p>

            <h1 className="mt-5 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Ready to Start Your Internship Journey?
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#94A3B8] sm:text-lg">
              Have questions about internships, projects, refunds, or career
              opportunities? Share your details and connect with the TriQolo
              team.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4 rounded-2xl border border-[#243548] bg-[#0D1B2A]/80 p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#14B8A6]/10 text-[#14B8A6]">
                  <Mail size={20} />
                </span>
                <div>
                  <p className="font-bold">Email Support</p>
                  <p className="mt-1 break-all text-sm text-[#94A3B8]">
                    careers@your-TriQolo-domain.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-[#243548] bg-[#0D1B2A]/80 p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#14B8A6]/10 text-[#14B8A6]">
                  <Phone size={20} />
                </span>
                <div>
                  <p className="font-bold">Internship Assistance</p>
                  <p className="mt-1 text-sm text-[#94A3B8]">
                    TriQolo Internship Support Team
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-[#243548] bg-[#0D1B2A]/80 p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#14B8A6]/10 text-[#14B8A6]">
                  <MapPin size={20} />
                </span>
                <div>
                  <p className="font-bold">Our Program</p>
                  <p className="mt-1 text-sm text-[#94A3B8]">
                    TriQolo Internship Program
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-[#243548] bg-[#0D1B2A] p-6 shadow-2xl shadow-black/20 sm:p-8 lg:p-9">
            <div className="mb-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#14B8A6]/10 text-[#14B8A6]">
                <Send size={22} />
              </div>

              <h2 className="mt-5 text-2xl font-black sm:text-3xl">
                Apply / Contact Us
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#94A3B8]">
                Fill in your details and our team will get back to you.
                Required fields are marked with *.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className={labelClass}>
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  maxLength={100}
                  required
                  placeholder="Enter your full name"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  maxLength={254}
                  required
                  placeholder="Enter your email address"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="mobile" className={labelClass}>
                  Mobile Number *
                </label>
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  autoComplete="tel"
                  maxLength={20}
                  required
                  placeholder="Enter your mobile number"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="college" className={labelClass}>
                  College / University *
                </label>
                <input
                  id="college"
                  name="college"
                  type="text"
                  maxLength={200}
                  required
                  placeholder="Enter your college name"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="branch" className={labelClass}>
                  Branch / Specialization
                </label>
                <input
                  id="branch"
                  name="branch"
                  type="text"
                  maxLength={100}
                  placeholder="e.g. CSE, ECE, MBA"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="year" className={labelClass}>
                  Year of Study *
                </label>
                <select
                  id="year"
                  name="year"
                  required
                  defaultValue=""
                  className={inputClass}
                >
                  <option value="" disabled>Select your year</option>
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="4th Year">4th Year</option>
                  <option value="Postgraduate">Postgraduate</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="interest" className={labelClass}>
                  Area of Interest
                </label>
                <select
                  id="interest"
                  name="interest"
                  defaultValue=""
                  className={inputClass}
                >
                  <option value="">Select an area</option>
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

              <div>
                <label htmlFor="remarks" className={labelClass}>
                  Remarks / Message
                </label>
                <textarea
                  id="remarks"
                  name="remarks"
                  rows={4}
                  maxLength={2000}
                  placeholder="Tell us what you would like to know..."
                  className={`${inputClass} resize-y`}
                />
              </div>

              {submitError && (
                <div
                  role="alert"
                  className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300"
                >
                  {submitError}
                </div>
              )}

              {submitMessage && (
                <div
                  role="status"
                  className="flex items-start gap-2 rounded-xl border border-[#14B8A6]/20 bg-[#14B8A6]/10 px-4 py-3 text-sm text-[#5EEAD4]"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                  <span>{submitMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-[#14B8A6] px-6 py-3 text-sm font-bold text-[#07111F] transition hover:bg-[#0D9488] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application
                    <Send size={16} />
                  </>
                )}
              </button>

              <p className="text-center text-xs leading-5 text-[#64748B]">
                By submitting this form, you agree to the applicable{" "}
                <Link
                  href="/terms-and-conditions"
                  className="font-semibold text-[#14B8A6] underline underline-offset-4 hover:text-[#5EEAD4]"
                >
                  Terms &amp; Conditions
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#243548] bg-[#07111F]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-center sm:flex-row sm:px-8 sm:text-left lg:px-10">
          <Link href="/" className="text-sm font-black">
            TriQolo<span className="text-[#14B8A6]">.</span>
          </Link>
          <p className="text-xs text-[#64748B]">
            © {new Date().getFullYear()} TriQolo INDIA. All rights reserved.
          </p>
          <Link
            href="/terms-and-conditions"
            className="text-sm text-[#94A3B8] hover:text-[#14B8A6]"
          >
            Terms &amp; Conditions
          </Link>
        </div>
      </footer>
    </main>
  );
}
