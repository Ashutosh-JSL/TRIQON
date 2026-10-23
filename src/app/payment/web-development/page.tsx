
"use client";

import { useState, type ChangeEvent } from "react";
import Link from "next/link";
import Script from "next/script";
import {
  ArrowLeft,
  UserRound,
  Mail,
  Phone,
  GraduationCap,
  CreditCard,
  ShieldCheck,
  Code2,
  Loader2,
  CheckCircle2,
  FileCheck2,
  ReceiptText,
  ClipboardCheck,
} from "lucide-react";

declare global {
  interface Window {
    Cashfree?: (options: {
      mode: "sandbox" | "production";
    }) => {
      checkout: (options: {
        paymentSessionId: string;
        redirectTarget?: "_self" | "_blank" | "_top" | "_modal";
      }) => Promise<unknown>;
    };
  }
}

interface StudentDetails {
  name: string;
  email: string;
  phone: string;
  college: string;
}

export default function WebDevelopmentPaymentPage() {
  const [details, setDetails] = useState<StudentDetails>({
    name: "",
    email: "",
    phone: "",
    college: "",
  });

  const [loading, setLoading] = useState(false);
  const [sdkLoaded, setSdkLoaded] = useState(false);
  const [error, setError] = useState("");
  const [paymentStarted, setPaymentStarted] = useState(false);

  // All three confirmations are mandatory.
  const [policiesAccepted, setPoliciesAccepted] = useState(false);
  const [feePolicyAccepted, setFeePolicyAccepted] = useState(false);
  const [programPolicyAccepted, setProgramPolicyAccepted] = useState(false);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setDetails((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  }

  async function handlePayment() {
    setError("");

    // Validate policy acceptance first.
    if (
      !policiesAccepted ||
      !feePolicyAccepted ||
      !programPolicyAccepted
    ) {
      setError(
        "Please accept all three program policy confirmations before proceeding to payment."
      );
      return;
    }

    // Validate student details.
    if (
      !details.name.trim() ||
      !details.email.trim() ||
      !details.phone.trim() ||
      !details.college.trim()
    ) {
      setError("Please fill in all your student details.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(details.phone.trim())) {
      setError("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    if (!window.Cashfree || !sdkLoaded) {
      setError(
        "The payment gateway is still loading. Please wait a moment and try again."
      );
      return;
    }

    setLoading(true);

    try {
      // Create the payment order securely on the server.
      const response = await fetch("/api/cashfree/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: details.name.trim(),
          email: details.email.trim(),
          phone: details.phone.trim(),
          college: details.college.trim(),
        }),
      });

      const responseText = await response.text();

      let result: {
        error?: string;
        paymentSessionId?: string;
        orderId?: string;
      };

      try {
        result = JSON.parse(responseText);
      } catch {
        console.error("Invalid payment API response:", {
          status: response.status,
          response: responseText.slice(0, 500),
        });

        throw new Error(
          `Payment API returned an invalid response (HTTP ${response.status}). Please check your API route and server logs.`
        );
      }

      if (!response.ok) {
        throw new Error(
          result.error || "Unable to create your payment order."
        );
      }

      if (!result.paymentSessionId) {
        throw new Error(
          "Cashfree did not return a payment session. Please try again."
        );
      }

      // Use sandbox during testing. Switch to production only
      // after the production credentials and configuration are ready.
      const cashfree = window.Cashfree({
        mode: "sandbox",
      });

      setPaymentStarted(true);

      // Open Cashfree checkout once.
      await cashfree.checkout({
        paymentSessionId: result.paymentSessionId,
        redirectTarget: "_self",
      });
    } catch (err) {
      setPaymentStarted(false);

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  const allPoliciesAccepted =
    policiesAccepted &&
    feePolicyAccepted &&
    programPolicyAccepted;

  return (
    <>
      <Script
        src="https://sdk.cashfree.com/js/v3/cashfree.js"
        strategy="afterInteractive"
        onLoad={() => setSdkLoaded(true)}
        onError={() => {
          setSdkLoaded(false);
          setError(
            "Unable to load the payment gateway. Please refresh the page."
          );
        }}
      />

      <main className="min-h-screen overflow-hidden bg-[#07111f] px-4 py-8 text-white sm:px-6 sm:py-12">
        {/* Background effects */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-cyan-500/[0.08] blur-[120px]" />
          <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-500/[0.10] blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-5xl">
          {/* Back navigation */}
          <Link
            href="/apply/web-development"
            className="mb-8 inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-cyan-300"
          >
            <ArrowLeft size={17} />
            Back to application
          </Link>

          {/* Header */}
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
              TriQolo
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Complete Your Application
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
              Confirm your details, review the program policies, and
              proceed to secure checkout for the Web Development program.
            </p>
          </div>

          <div className="grid items-start gap-6 md:grid-cols-[1.15fr_0.85fr] md:gap-8">
            {/* Student details */}
            <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/10 sm:p-8">
              <div className="mb-7 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-300">
                  <UserRound size={24} />
                </div>

                <div>
                  <h2 className="text-xl font-bold">Student Details</h2>
                  <p className="mt-1 text-sm text-slate-400">
                    Enter your correct information.
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {/* Full name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Full Name *
                  </label>

                  <div className="relative">
                    <UserRound
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                    />

                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={details.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      disabled={loading || paymentStarted}
                      className="w-full rounded-xl border border-white/10 bg-[#0b1728] py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400 disabled:opacity-60"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Email Address *
                  </label>

                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                    />

                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={details.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      disabled={loading || paymentStarted}
                      className="w-full rounded-xl border border-white/10 bg-[#0b1728] py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400 disabled:opacity-60"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Mobile Number *
                  </label>

                  <div className="relative">
                    <Phone
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                    />

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel"
                      maxLength={10}
                      required
                      value={details.phone}
                      onChange={(event) => {
                        const value = event.target.value
                          .replace(/\D/g, "")
                          .slice(0, 10);

                        setDetails((previous) => ({
                          ...previous,
                          phone: value,
                        }));

                        setError("");
                      }}
                      placeholder="10-digit mobile number"
                      disabled={loading || paymentStarted}
                      className="w-full rounded-xl border border-white/10 bg-[#0b1728] py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400 disabled:opacity-60"
                    />
                  </div>
                </div>

                {/* College */}
                <div>
                  <label
                    htmlFor="college"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    College / University *
                  </label>

                  <div className="relative">
                    <GraduationCap
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                    />

                    <input
                      id="college"
                      name="college"
                      type="text"
                      autoComplete="organization"
                      required
                      value={details.college}
                      onChange={handleChange}
                      placeholder="Enter your college name"
                      disabled={loading || paymentStarted}
                      className="w-full rounded-xl border border-white/10 bg-[#0b1728] py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400 disabled:opacity-60"
                    />
                  </div>
                </div>
              </div>

              <p className="mt-5 text-xs leading-5 text-slate-500">
                * Required fields. Please ensure your email and mobile
                number are correct so you can receive program updates.
              </p>
            </section>

            {/* Payment summary */}
            <section className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.08] to-blue-500/[0.04] p-5 sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                  <CreditCard size={22} />
                </div>

                <div>
                  <h2 className="text-xl font-bold">Payment Summary</h2>
                  <p className="mt-1 text-sm text-slate-400">
                    Review before proceeding.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#07111f]/70 p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold">Web Development</h3>

                    <p className="mt-2 text-sm leading-5 text-slate-400">
                      Practical learning and project-based experience
                    </p>

                    <span className="mt-3 inline-flex rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                      2-Month Program
                    </span>
                  </div>

                  <Code2 size={26} className="shrink-0 text-cyan-300" />
                </div>

                <div className="my-5 border-t border-white/10" />

                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between gap-3 text-slate-300">
                    <span>Program fee</span>
                    <span>₹499.00</span>
                  </div>

                  <div className="flex items-center justify-between gap-3 text-slate-400">
                    <span>Applicable taxes</span>
                    <span>Included, if applicable</span>
                  </div>
                </div>

                <div className="my-5 border-t border-white/10" />

                <div className="flex items-center justify-between gap-3">
                  <span className="font-semibold">Total payable</span>
                  <span className="text-3xl font-bold tracking-tight text-cyan-300">
                    ₹499
                  </span>
                </div>
              </div>

              {/* Mandatory policy acceptance */}
              <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-[#07111f]/70 p-4 sm:p-5">
                <div className="mb-4 flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                    <ShieldCheck size={21} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">
                      Review & Accept Program Policies
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      Please review the following before continuing.
                      All three confirmations are required.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Terms and conditions */}
                  <label className="flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      checked={policiesAccepted}
                      onChange={(event) => {
                        setPoliciesAccepted(event.target.checked);
                        setError("");
                      }}
                      disabled={loading || paymentStarted}
                      className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-cyan-400"
                    />

                    <span className="text-sm leading-6 text-slate-300">
                      I have read and agree to the{" "}
                      <Link
                        href="/terms-and-conditions"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-cyan-300 underline underline-offset-4 hover:text-cyan-200"
                      >
                        Terms & Conditions
                      </Link>
                      , including the program rules, eligibility requirements,
                      duration, and applicable participation conditions.
                    </span>
                  </label>

                  {/* Fee and refund policy */}
                  <label className="flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      checked={feePolicyAccepted}
                      onChange={(event) => {
                        setFeePolicyAccepted(event.target.checked);
                        setError("");
                      }}
                      disabled={loading || paymentStarted}
                      className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-cyan-400"
                    />

                    <span className="text-sm leading-6 text-slate-300">
                      I understand the program fee is{" "}
                      <strong className="text-white">₹499</strong> and have
                      reviewed the applicable refund and cancellation policy,
                      including its deadline and any payment gateway charges.
                    </span>
                  </label>

                  {/* Program expectations */}
                  <label className="flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      checked={programPolicyAccepted}
                      onChange={(event) => {
                        setProgramPolicyAccepted(event.target.checked);
                        setError("");
                      }}
                      disabled={loading || paymentStarted}
                      className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-cyan-400"
                    />

                    <span className="text-sm leading-6 text-slate-300">
                      I confirm that my submitted details are accurate and
                      understand that certificate issuance is subject to
                      program requirements. Any PPO consideration is subject
                      to eligibility and selection and is not guaranteed.
                    </span>
                  </label>
                </div>

                <p className="mt-4 border-t border-white/10 pt-3 text-xs leading-5 text-slate-500">
                  All three confirmations are mandatory to proceed. Please
                  contact TriQolo if you need clarification before making
                  payment.
                </p>

                {allPoliciesAccepted && (
                  <div className="mt-3 flex items-center gap-2 text-xs font-medium text-emerald-300">
                    <CheckCircle2 size={15} />
                    All required policy confirmations completed
                  </div>
                )}
              </div>

              {/* Error message */}
              {error && (
                <div
                  role="alert"
                  aria-live="polite"
                  className="mt-5 rounded-xl border border-red-400/20 bg-red-500/10 p-4 text-sm leading-5 text-red-300"
                >
                  {error}
                </div>
              )}

              {/* Payment button */}
              <button
                type="button"
                onClick={handlePayment}
                disabled={loading || paymentStarted}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-4 font-bold text-[#07111f] transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 size={19} className="animate-spin" />
                    Creating Payment...
                  </>
                ) : paymentStarted ? (
                  <>
                    <Loader2 size={19} className="animate-spin" />
                    Opening Checkout...
                  </>
                ) : (
                  <>
                    <CreditCard size={19} />
                    Proceed to Payment
                  </>
                )}
              </button>

              {!allPoliciesAccepted && (
                <p className="mt-3 text-center text-xs text-slate-500">
                  Accept all three policy confirmations to continue.
                </p>
              )}

              <p className="mt-3 text-center text-xs text-slate-500">
                {sdkLoaded
                  ? "Payment gateway ready"
                  : "Loading payment gateway..."}
              </p>

              {/* Security note */}
              <div className="mt-5 flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <ShieldCheck
                  size={20}
                  className="shrink-0 text-emerald-400"
                />

                <p className="text-xs leading-5 text-slate-400">
                  Payments are processed through Cashfree Checkout. Your
                  payment status should be verified on the server before
                  your application is marked as paid.
                </p>
              </div>

              <Link
                href="/terms-and-conditions"
                className="mt-5 block text-center text-sm text-cyan-300 underline underline-offset-4 transition hover:text-cyan-200"
              >
                Read Terms &amp; Conditions
              </Link>

              <div className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-500">
                <CheckCircle2 size={14} />
                <span>Secure checkout experience</span>
              </div>
            </section>
          </div>

          <p className="mt-8 text-center text-xs text-slate-600">
            © {new Date().getFullYear()} TriQolo. All rights reserved.
          </p>
        </div>
      </main>
    </>
  );
}
