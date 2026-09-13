"use client";

import { supabase } from "../lib/supabase";
import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone, Loader2, CheckCircle2 } from "lucide-react";

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

    // Get values from the form
    const fullName = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const mobile = formData.get("mobile")?.toString().trim();
    const college = formData.get("college")?.toString().trim();
    const branch = formData.get("branch")?.toString().trim();
    const yearOfStudy = formData.get("year")?.toString().trim();
    const areaOfInterest = formData
      .get("interest")
      ?.toString()
      .trim();
    const remarks = formData.get("remarks")?.toString().trim();

    // Basic validation
    if (!fullName || !email || !mobile || !college || !yearOfStudy) {
      setSubmitError("Please fill all required fields.");
      setIsSubmitting(false);
      return;
    }

    try {
      // Save data to Supabase
      const { error } = await supabase
        .from("student_registrations")
        .insert({
          full_name: fullName,
          email: email,
          mobile: mobile,
          college: college,
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
        setIsSubmitting(false);
        return;
      }

      // Success
      setSubmitMessage(
        "Thank you! Your application has been submitted successfully."
      );

      // Clear the form
      form.reset();
    } catch (error) {
      console.error("Unexpected error:", error);

      setSubmitError(
        "Something went wrong. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="bg-[#6D4AFF] text-white">

      {/* Contact Section */}
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:px-8 lg:grid-cols-2 lg:px-10 lg:py-24">

        {/* LEFT SIDE */}
        <div className="max-w-xl">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C4B5FD]">
            Contact Triqon
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Ready to Start Your Internship Journey?
          </h2>

          <p className="mt-5 text-base leading-7 text-white/70 sm:text-lg">
            Have questions about the internship, selection process,
            projects, refund or career opportunities? Talk to the
            Triqon team.
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

        {/* FORM */}
        <div className="rounded-3xl bg-white p-6 text-gray-950 shadow-xl sm:p-8">

          <h3 className="text-2xl font-black">
            Apply / Contact Us
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Fill in your details and our team will get back to you.
          </p>

          <form
            className="mt-6 space-y-4"
            onSubmit={handleSubmit}
          >

            {/* Full Name */}
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

                <option value="1st Year">
                  1st Year
                </option>

                <option value="2nd Year">
                  2nd Year
                </option>

                <option value="3rd Year">
                  3rd Year
                </option>

                <option value="4th Year">
                  4th Year
                </option>

                <option value="Postgraduate">
                  Postgraduate
                </option>

                <option value="Other">
                  Other
                </option>
              </select>
            </div>

            {/* Area of Interest */}
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

                <option value="Technology & Development">
                  Technology & Development
                </option>

                <option value="Data & AI">
                  Data & AI
                </option>

                <option value="Design & Creative">
                  Design & Creative
                </option>

                <option value="Business & Management">
                  Business & Management
                </option>

                <option value="Other">
                  Other
                </option>
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

            {/* Error Message */}
            {submitError && (
              <div className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                {submitError}
              </div>
            )}

            {/* Success Message */}
            {submitMessage && (
              <div className="flex items-start gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />

                <span>{submitMessage}</span>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex min-h-[50px] w-full items-center justify-center gap-2 rounded-full bg-[#6D4AFF] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#4C2FBF] disabled:cursor-not-allowed disabled:opacity-60"
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
      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 sm:px-6 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">

          <div>
            <div className="text-2xl font-black tracking-tight">
              TRIQON
              <span className="text-[#C4B5FD]">.</span>
            </div>

            <p className="mt-1 text-xs text-white/50">
              Real Projects. Paid Internships. Real Careers.
            </p>
          </div>

          <div className="flex flex-wrap gap-5 text-xs text-white/60">

            <a
              href="#home"
              className="hover:text-white"
            >
              Home
            </a>

            <a
              href="#how-it-works"
              className="hover:text-white"
            >
              How It Works
            </a>

            <a
              href="#faq"
              className="hover:text-white"
            >
              FAQ
            </a>

            <a
              href="#"
              className="hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-white"
            >
              Terms & Conditions
            </a>

            <a
              href="#"
              className="hover:text-white"
            >
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