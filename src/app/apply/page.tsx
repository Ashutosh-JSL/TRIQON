
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, CreditCard, LoaderCircle } from "lucide-react";

export default function ApplyPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    branch: "",
    year: "",
    interest: "Web Development",
    terms: false,
  });

  const [error, setError] = useState("");

  function update(
    field: keyof typeof form,
    value: string | boolean
  ) {
    setForm((previous) => ({ ...previous, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(
      "Payment setup is not connected yet. Please try again after the secure Sandbox payment backend is configured."
    );
  }

  return (
    <main className="min-h-screen bg-[#070A17] px-4 py-10 text-white sm:px-6">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white"
        >
          <ArrowLeft size={16} /> Back to TriQolo
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <section>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              TriQolo · Registration
            </p>
            <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Start your learning journey.
            </h1>
            <p className="mt-3 leading-7 text-slate-400">
              Enter your details to register for the Web Development program.
              Review the program terms before proceeding.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name">
                  <input
                    required
                    autoComplete="name"
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className={inputClass}
                    placeholder="Your full name"
                  />
                </Field>
                <Field label="Email address">
                  <input
                    required
                    type="email"
                    autoComplete="email"
                    maxLength={254}
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={inputClass}
                    placeholder="you@example.com"
                  />
                </Field>
                <Field label="Mobile number">
                  <input
                    required
                    type="tel"
                    autoComplete="tel"
                    inputMode="numeric"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className={inputClass}
                    placeholder="10-digit mobile number"
                  />
                </Field>
                <Field label="College / institution">
                  <input
                    required
                    maxLength={150}
                    value={form.college}
                    onChange={(e) => update("college", e.target.value)}
                    className={inputClass}
                    placeholder="College name"
                  />
                </Field>
                <Field label="Branch / specialization">
                  <input
                    required
                    maxLength={100}
                    value={form.branch}
                    onChange={(e) => update("branch", e.target.value)}
                    className={inputClass}
                    placeholder="e.g. Computer Science"
                  />
                </Field>
                <Field label="Year of study">
                  <select
                    required
                    value={form.year}
                    onChange={(e) => update("year", e.target.value)}
                    className={inputClass}
                  >
                    <option value="">Select year</option>
                    <option value="1">First year</option>
                    <option value="2">Second year</option>
                    <option value="3">Third year</option>
                    <option value="4">Fourth year</option>
                    <option value="5">Other / postgraduate</option>
                  </select>
                </Field>
              </div>

              <Field label="Program">
                <input
                  readOnly
                  value={form.interest}
                  className={`${inputClass} opacity-80`}
                />
              </Field>

              <label className="flex items-start gap-3 text-sm leading-6 text-slate-400">
                <input
                  required
                  type="checkbox"
                  checked={form.terms}
                  onChange={(e) => update("terms", e.target.checked)}
                  className="mt-1 accent-cyan-400"
                />
                <span>
                  I have read and agree to the{" "}
                  <Link
                    href="/terms-and-conditions"
                    className="text-cyan-300 underline underline-offset-4"
                  >
                    Terms & Conditions
                  </Link>{" "}
                  and applicable privacy policy.
                </span>
              </label>

              {error && (
                <p role="alert" className="rounded-xl border border-amber-400/20 bg-amber-400/10 p-3 text-sm text-amber-200">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled
                className="flex min-h-12 w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-slate-700 px-5 py-3 font-semibold text-slate-300"
              >
                <LoaderCircle size={18} />
                Payment setup in progress
              </button>
            </form>
          </section>

          <aside className="h-fit rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-[#101A30] to-[#0B1020] p-6 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
              <CreditCard size={24} />
            </div>
            <h2 className="mt-5 text-xl font-bold">Registration summary</h2>
            <p className="mt-2 text-sm text-slate-400">
              Web Development
            </p>

            <div className="my-6 border-t border-white/10" />

            <div className="flex items-center justify-between gap-3">
              <span className="text-sm text-slate-400">Program fee</span>
              <span className="text-3xl font-extrabold">₹499</span>
            </div>
            <p className="mt-2 text-xs leading-5 text-slate-500">
              Inclusive of applicable taxes, as stated in the program terms.
            </p>

            <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 shrink-0 text-cyan-300" size={20} />
                <div>
                  <p className="text-sm font-semibold">Secure checkout</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    Payments will be handled by Cashfree after Sandbox
                    integration and server-side verification are configured.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

const inputClass =
  "min-h-12 w-full rounded-xl border border-white/10 bg-[#0B1020] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block space-y-2 text-sm font-medium text-slate-300">
      {label}
      {children}
    </label>
  );
}
