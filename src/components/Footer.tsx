
"use client";

import { createClient } from "@/lib/supabase/client";
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
