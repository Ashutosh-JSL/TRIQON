
"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Mail,
  MapPin,
  Send,
  Loader2,
  CheckCircle2,
  Sparkles,
  GraduationCap,
  ShieldCheck,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

import { createClient } from "@/lib/supabase/client";

const labelClass =
  "mb-2 block text-xs font-bold tracking-wide text-slate-300 sm:text-sm";

const inputClass =
  "w-full rounded-xl border border-white/[0.09] bg-[#07101F]/90 px-4 py-3.5 text-sm text-white placeholder:text-slate-600 outline-none transition duration-200 hover:border-white/[0.15] focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/10 disabled:cursor-not-allowed disabled:opacity-60";

const interestOptions = [
  "Web Development",
  "Software Development",
  "Data Analytics",
  "Artificial Intelligence",
  "Machine Learning",
  "UI/UX Design",
  "Business & Management",
  "Other",
];

// Email syntax validation + common email-domain typo protection.
// This does not prove that a mailbox exists.
function isValidEmail(email: string): boolean {
  const value = email.trim().toLowerCase();

  if (!value || value.length > 254 || /\s/.test(value)) {
    return false;
  }

  const parts = value.split("@");

  if (parts.length !== 2) {
    return false;
  }

  const [local, domain] = parts;

  if (
    !local ||
    local.length > 64 ||
    local.startsWith(".") ||
    local.endsWith(".") ||
    local.includes("..") ||
    !/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+$/.test(local)
  ) {
    return false;
  }

  if (
    !domain ||
    domain.length > 253 ||
    !domain.includes(".") ||
    domain.startsWith(".") ||
    domain.endsWith(".") ||
    domain.includes("..")
  ) {
    return false;
  }

  const labels = domain.split(".");

  if (
    labels.some(
      (label) =>
        !label ||
        label.length > 63 ||
        !/^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(label)
    )
  ) {
    return false;
  }

  const tld = labels[labels.length - 1];

  if (!/^[a-z]{2,}$/.test(tld)) {
    return false;
  }

  // Known common misspellings of popular providers.
  const blockedDomains = [
    "gml.com",
    "gmial.com",
    "gmai.com",
    "gamil.com",
    "gmail.co",
    "gmail.con",
    "gmaill.com",
    "g-mail.com",
    "yaho.com",
    "yahooo.com",
    "yahho.com",
    "hotnail.com",
    "hotmai.com",
    "outlok.com",
    "outllok.com",
    "icloud.con",
    "iclould.com",
  ];

  if (blockedDomains.includes(domain)) {
    return false;
  }

  // Popular providers. Other syntactically valid domains,
  // including college and company domains, remain permitted.
  const popularDomains = [
    "gmail.com",
    "googlemail.com",
    "outlook.com",
    "hotmail.com",
    "live.com",
    "msn.com",
    "yahoo.com",
    "yahoo.co.in",
    "icloud.com",
    "me.com",
    "mac.com",
    "proton.me",
    "protonmail.com",
    "aol.com",
    "zoho.com",
    "rediffmail.com",
    "rediff.com",
    "fastmail.com",
  ];

  if (popularDomains.includes(domain)) {
    return true;
  }

  return true;
}

// Accept Indian mobile numbers with or without the +91 prefix.
function normalizeIndianMobile(value: string): string | null {
  const cleaned = value.replace(/[\s()-]/g, "");
  let digits: string;

  if (cleaned.startsWith("+91")) {
    digits = cleaned.slice(3);
  } else if (/^91[6-9]\d{9}$/.test(cleaned)) {
    digits = cleaned.slice(2);
  } else {
    digits = cleaned;
  }

  return /^[6-9]\d{9}$/.test(digits) ? digits : null;
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [mobile, setMobile] = useState("");

  function handleMobileChange(event: ChangeEvent<HTMLInputElement>) {
    const cleaned = event.target.value
      .replace(/[^\d+]/g, "")
      .replace(/(?!^)\+/g, "")
      .slice(0, 13);

    setMobile(cleaned);
    setSubmitError("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) return;

    setSubmitMessage("");
    setSubmitError("");

    const form = event.currentTarget;
    const data = new FormData(form);

    const fullName = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const normalizedMobile = normalizeIndianMobile(mobile);
    const college = String(data.get("college") || "").trim();
    const branch = String(data.get("branch") || "").trim();
    const year = String(data.get("year") || "").trim();
    const interest = String(data.get("interest") || "").trim();
    const remarks = String(data.get("remarks") || "").trim();

    if (!fullName) {
      setSubmitError("Please enter your full name.");
      return;
    }

    if (!isValidEmail(email)) {
      setSubmitError(
        "Please enter a valid email address. Check the spelling of your email and domain."
      );
      return;
    }

    if (!normalizedMobile) {
      setSubmitError(
        "Enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9. You may also include the +91 country code."
      );
      return;
    }

    if (!college) {
      setSubmitError("Please enter your college or university.");
      return;
    }

    if (!year) {
      setSubmitError("Please select your year of study.");
      return;
    }

    const registration = {
      full_name: fullName,
      email: email.toLowerCase(),
      mobile: normalizedMobile,
      college,
      branch: branch || null,
      year_of_study: year || null,
      area_of_interest: interest || null,
      remarks: remarks || null,
      status: "New",
    };

    setIsSubmitting(true);

    try {
      const supabase = createClient();

      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession();

      const role = session ? "authenticated" : "anon";

      console.info("Contact form authentication:", {
        role,
        hasSession: Boolean(session),
        sessionError: sessionError?.message ?? null,
      });

      const { error } = await supabase
        .from("student_registrations")
        .insert(registration);

      if (error) {
        console.error("Supabase insert failed:", {
          code: error.code,
          message: error.message,
          details: error.details,
          hint: error.hint,
          role,
        });

        if (error.code === "42501") {
          setSubmitError(
            "We couldn't save your details because the database rejected the submission. Please try again later or contact triqolo.our@gmail.com."
          );
        } else {
          setSubmitError(
            "We couldn't save your details right now. Please try again later or contact triqolo.our@gmail.com."
          );
        }

        return;
      }

      setSubmitMessage(
        "Thank you for contacting TriQolo! Your details have been submitted successfully."
      );

      form.reset();
      setMobile("");
    } catch (error: unknown) {
      console.error("Contact form submission failed:", error);

      setSubmitError(
        "We couldn't submit your details right now. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050B18] text-white">
      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_15%,rgba(109,74,255,0.14),transparent_38%),radial-gradient(ellipse_at_90%_30%,rgba(34,227,214,0.10),transparent_40%)]" />

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.15) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="absolute -left-40 top-64 h-96 w-96 rounded-full bg-violet-500/[0.09] blur-[130px]" />
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-cyan-400/[0.08] blur-[130px]" />
        <div className="absolute bottom-0 left-[40%] h-80 w-80 rounded-full bg-blue-500/[0.06] blur-[120px]" />
      </div>

      {/* HEADER */}
      <header className="relative z-20 border-b border-white/[0.08] bg-[#050B18]/85 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
          <Link
            href="/#home"
            aria-label="TriQolo home"
            className="group flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            <span className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/20 bg-gradient-to-br from-cyan-300/[0.12] to-violet-400/[0.12]">
              <span className="text-[15px] font-black tracking-[-0.12em]">
                T<span className="text-cyan-300">Q</span>
              </span>
              <span className="absolute bottom-1 right-1 h-1.5 w-1.5 rounded-full bg-cyan-300" />
            </span>

            <span>
              <span className="block text-xl font-black tracking-[-0.05em]">
                Tri<span className="text-cyan-300">Q</span>olo
              </span>
              <span className="mt-1 block text-[8px] font-bold uppercase tracking-[0.2em] text-slate-500">
                Learn · Build · Grow
              </span>
            </span>
          </Link>

          <Link
            href="/#home"
            className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-semibold text-slate-300 transition hover:border-cyan-300/25 hover:text-cyan-200 sm:px-4 sm:text-sm"
          >
            <ArrowLeft size={15} />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />
      </header>

      {/* MAIN CONTENT */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 xl:gap-20">
            {/* LEFT: INTRODUCTION */}
            <div className="lg:sticky lg:top-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-3.5 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-cyan-200 sm:text-xs">
                <Sparkles size={14} />
                Let&apos;s Connect
              </div>

              <h1 className="mt-6 text-3xl font-black leading-[1.13] tracking-tight sm:text-4xl lg:text-5xl xl:text-[3.5rem]">
                Your Next Chapter
                <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-[#22E3D6] to-violet-300 bg-clip-text text-transparent">
                  Starts With a Conversation.
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                Have questions about programs, project-based learning,
                eligibility, or registration? Tell us what you&apos;re
                looking for.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "Practical Learning",
                  "Guided Mentorship",
                  "Career Development",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-[10px] font-semibold text-slate-300 sm:text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* SUPPORT CARDS */}
              <div className="mt-9 space-y-3">
                <a
                  href="mailto:triqolo.our@gmail.com"
                  className="group flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-[#0A1425]/80 p-4 transition duration-300 hover:border-cyan-300/20 hover:bg-[#0D192B]/90 sm:p-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.07] text-cyan-300">
                    <Mail size={20} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-white">Email Support</p>
                    <p className="mt-1 text-xs leading-5 text-slate-400 sm:text-sm">
                      Questions about registration or programs?
                    </p>
                    <p className="mt-2 break-all text-xs font-semibold text-cyan-200 sm:text-sm">
                      triqolo.our@gmail.com
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="mt-1 shrink-0 text-slate-600 transition group-hover:text-cyan-300"
                  />
                </a>

                <div className="group flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-[#0A1425]/80 p-4 transition duration-300 hover:border-violet-300/20 hover:bg-[#0D192B]/90 sm:p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-300/15 bg-violet-300/[0.07] text-violet-300">
                    <GraduationCap size={21} />
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-white">Program Guidance</p>
                    <p className="mt-1 text-xs leading-5 text-slate-400 sm:text-sm">
                      Explore learning paths, projects, and program requirements.
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-[#0A1425]/80 p-4 transition duration-300 hover:border-cyan-300/20 hover:bg-[#0D192B]/90 sm:p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-300/15 bg-emerald-300/[0.06] text-emerald-300">
                    <MessageCircle size={20} />
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-white">Student Inquiries</p>
                    <p className="mt-1 text-xs leading-5 text-slate-400 sm:text-sm">
                      Share your interests and the information you need.
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Hinjewadi%2C%20Pune%2C%20Maharashtra%2C%20India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-[#0A1425]/80 p-4 transition duration-300 hover:border-cyan-300/20 hover:bg-[#0D192B]/90 sm:p-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.07] text-cyan-300">
                    <MapPin size={20} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-white">Location</p>
                    <p className="mt-1 text-xs leading-5 text-slate-400 sm:text-sm">
                      Hinjewadi, Pune, Maharashtra, India
                    </p>
                    <p className="mt-2 text-xs font-semibold text-cyan-200">
                      View on Google Maps
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="mt-1 shrink-0 text-slate-600 transition group-hover:text-cyan-300"
                  />
                </a>
              </div>

              <div className="mt-6 flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                <ShieldCheck
                  size={18}
                  className="mt-0.5 shrink-0 text-cyan-300"
                />
                <p className="text-xs leading-5 text-slate-500">
                  Please provide accurate contact details so your inquiry can
                  be reviewed. Your information is submitted through our
                  registration system.
                </p>
              </div>
            </div>

            {/* RIGHT: CONTACT FORM */}
            <div className="relative">
              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-cyan-300/10 via-transparent to-violet-400/10 blur-xl" />

              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.10] bg-[#091426]/95 shadow-2xl shadow-black/20 backdrop-blur-xl sm:rounded-[2rem]">
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />

                <div className="border-b border-white/[0.07] p-5 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-gradient-to-br from-cyan-300/[0.12] to-violet-300/[0.08] text-cyan-300">
                      <Send size={21} />
                    </div>
                    <div>
                      <div className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-cyan-300">
                        Contact Form
                      </div>
                      <h2 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">
                        Let&apos;s Get Started.
                      </h2>
                      <p className="mt-2 text-xs leading-6 text-slate-400 sm:text-sm">
                        Share a few details so we can understand your interests.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-2 text-[10px] font-medium text-slate-500 sm:text-xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    Fields marked with * are required
                  </div>
                </div>

                <form className="space-y-5 p-5 sm:p-8" onSubmit={handleSubmit}>
                  <div className="grid gap-5 sm:grid-cols-2">
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
                        disabled={isSubmitting}
                        placeholder="Your full name"
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
                        inputMode="tel"
                        autoComplete="tel"
                        value={mobile}
                        onChange={handleMobileChange}
                        maxLength={13}
                        required
                        disabled={isSubmitting}
                        placeholder="9876543210 or +919876543210"
                        aria-describedby="mobile-help"
                        className={inputClass}
                      />
                      <p
                        id="mobile-help"
                        className="mt-2 text-[10px] leading-4 text-slate-500 sm:text-xs"
                      >
                        Enter 10 digits starting with 6–9. You may include the +91 country code.
                      </p>
                    </div>
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
                      disabled={isSubmitting}
                      placeholder="you@example.com"
                      title="Enter a valid email address."
                      className={inputClass}
                    />
                    <p className="mt-2 text-[10px] leading-4 text-slate-500 sm:text-xs">
                      Check your email spelling before submitting. College and business email domains are also accepted.
                    </p>
                  </div>

                  <div>
                    <label htmlFor="college" className={labelClass}>
                      College / University *
                    </label>
                    <input
                      id="college"
                      name="college"
                      type="text"
                      autoComplete="organization"
                      maxLength={200}
                      required
                      disabled={isSubmitting}
                      placeholder="Enter your institution"
                      className={inputClass}
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="branch" className={labelClass}>
                        Branch / Specialization
                      </label>
                      <input
                        id="branch"
                        name="branch"
                        type="text"
                        maxLength={100}
                        disabled={isSubmitting}
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
                        disabled={isSubmitting}
                        className={`${inputClass} appearance-none`}
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
                  </div>

                  <div>
                    <label htmlFor="interest" className={labelClass}>
                      Area of Interest
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      defaultValue=""
                      disabled={isSubmitting}
                      className={`${inputClass} appearance-none`}
                    >
                      <option value="">Select your preferred area</option>
                      {interestOptions.map((item) => (
                        <option key={item} value={item}>{item}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="remarks" className={labelClass}>
                      Message / Remarks
                    </label>
                    <textarea
                      id="remarks"
                      name="remarks"
                      rows={4}
                      maxLength={2000}
                      disabled={isSubmitting}
                      placeholder="Tell us about your interests or questions..."
                      className={`${inputClass} resize-y`}
                    />
                    <p className="mt-2 text-right text-[10px] text-slate-600">Optional</p>
                  </div>

                  {submitError && (
                    <div
                      role="alert"
                      className="flex items-start gap-3 rounded-xl border border-red-400/20 bg-red-400/[0.06] px-4 py-3.5 text-sm leading-6 text-red-300"
                    >
                      <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  {submitMessage && (
                    <div
                      role="status"
                      aria-live="polite"
                      className="flex items-start gap-3 rounded-xl border border-emerald-300/20 bg-emerald-300/[0.06] px-4 py-3.5 text-sm leading-6 text-emerald-200"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                      <span>{submitMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-300 to-[#91A7FF] px-6 py-3.5 text-sm font-extrabold text-[#050B18] shadow-[0_5px_25px_rgba(34,227,214,0.08)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(34,227,214,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Submitting Details...
                      </>
                    ) : (
                      <>
                        Submit Your Details
                        <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[10px] leading-5 text-slate-500 sm:text-xs">
                    By submitting this form, you agree to the applicable{" "}
                    <Link
                      href="/terms-and-conditions"
                      className="font-semibold text-cyan-300 underline decoration-cyan-300/30 underline-offset-4 transition hover:text-cyan-200"
                    >
                      Terms &amp; Conditions
                    </Link>
                    .
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/[0.07] bg-[#050B18]/90">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-10">
          <Link href="/#home" className="text-lg font-black tracking-tight">
            Tri<span className="text-cyan-300">Q</span>olo
          </Link>

          <p className="text-center text-[10px] text-slate-500 sm:text-xs">
            © {new Date().getFullYear()} TriQolo. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="/terms-and-conditions"
              className="text-xs font-medium text-slate-400 transition hover:text-cyan-300"
            >
              Terms &amp; Conditions
            </Link>
            <Link
              href="/#home"
              aria-label="Return to home"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] text-slate-400 transition hover:border-cyan-300/20 hover:text-cyan-300"
            >
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
