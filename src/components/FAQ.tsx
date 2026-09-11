"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is Triqon?",
    answer:
      "Triqon is a career-focused platform that helps college students gain practical experience through structured preparation, real-world projects and paid internship opportunities.",
  },
  {
    question: "Who can apply?",
    answer:
      "College students who want to gain practical experience, develop their skills and work on real-world projects can apply.",
  },
  {
    question: "What is the registration amount?",
    answer:
      "The Triqon program registration amount is ₹499.",
  },
  {
    question: "Is the ₹499 amount refundable?",
    answer:
      "Yes. The ₹499 amount is 100% refundable subject to the applicable program terms, conditions and eligibility requirements.",
  },
  {
    question: "Is the internship paid?",
    answer:
      "Yes. Candidates who successfully enter the internship program will participate in a paid internship.",
  },
  {
    question: "Is there an interview?",
    answer:
      "Yes. After completing the required internship preparation course, candidates go through an interview round as part of the selection process.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes. Candidates who successfully complete the internship will receive a Triqon internship certificate.",
  },
  {
    question: "Can I get a PPO?",
    answer:
      "Exceptional performers may become eligible for a Pre-Placement Offer based on their internship performance and applicable selection criteria.",
  },
  {
    question: "Do I need prior work experience?",
    answer:
      "No professional work experience is required. Candidates should have an interest in learning and applying their skills to real-world projects.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="bg-white px-4 py-16 sm:px-6 md:px-8 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-4xl">

        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6D4AFF]">
            FAQ
          </p>

          <h2 className="mt-3 text-3xl font-black text-gray-950 sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-gray-50"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex min-h-[60px] w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-bold text-gray-900 sm:text-base">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[#6D4AFF] transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-sm leading-6 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}