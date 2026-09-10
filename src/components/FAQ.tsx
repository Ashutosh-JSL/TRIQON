"use client";

import { useState } from "react";
import Link from "next/link";
import { faqCategories, faqs } from "@/lib/data";

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<string>("Internship");
  const [openIndex, setOpenIndex] = useState<number>(0);

  const filtered = faqs.filter((f) => f.category === activeCategory);

  return (
    <section id="faq" className="border-b border-line">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-ink-soft">Got Questions? We&rsquo;ve Got Answers</p>

            <Link
              href="tel:+916372105534"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper"
            >
              Request Call Back
            </Link>

            <div className="mt-10 flex flex-wrap gap-2">
              {faqCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setActiveCategory(category);
                    setOpenIndex(0);
                  }}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "border-ink bg-ink text-paper"
                      : "border-line text-ink-soft hover:border-ink hover:text-ink"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="divide-y divide-line rounded-2xl border border-line bg-paper-raised">
            {filtered.map((item, index) => {
              const isOpen = index === openIndex;
              return (
                <div key={item.question}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-base font-semibold text-ink">
                      {item.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`shrink-0 font-mono-tag text-lg text-ink-soft transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <p className="px-6 pb-5 text-sm leading-relaxed text-ink-soft">
                      {item.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
