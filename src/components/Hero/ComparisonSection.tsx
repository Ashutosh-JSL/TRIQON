
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import { comparisons } from "./hero-data";
import { SectionLabel } from "./HeroUI";

const freeFeatureIndexes = [0, 2, 5, 7, 9];

export default function ComparisonSection() {
  const shouldReduceMotion = useReducedMotion();

  const hasPPO = comparisons.some((item) =>
    item.title.toLowerCase().includes("ppo")
  );

  const features = hasPPO
    ? comparisons
    : [
        ...comparisons,
        {
          title: "PPO Opportunity",
          description: "Subject to eligibility and selection.",
        },
      ];

  return (
    <section
      id="comparison"
      className="relative overflow-hidden bg-[#071326] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mx-auto mb-10 max-w-2xl text-center sm:mb-12"
        >
          <SectionLabel>THE DIFFERENCE</SectionLabel>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            More Than Just an{" "}
            <span className="text-cyan-400">Internship</span>
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">
            Compare your options and choose what fits your goals.
          </p>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
        >
          {/* Desktop comparison table */}
          <div className="hidden md:block">
            <div className="grid grid-cols-[1.2fr_1fr_1fr] border-b border-white/10 bg-white/[0.04]">
              <div className="p-6">
                <h3 className="text-lg font-bold">Compare Features</h3>
                <p className="mt-1 text-sm text-slate-400">
                  What matters for your growth
                </p>
              </div>

              <div className="border-l border-white/10 p-6 text-center">
                <h3 className="text-lg font-bold text-slate-200">
                  Free Programs
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  ₹0 program fee
                </p>
              </div>

              <div className="border-l border-cyan-400/20 bg-cyan-400/[0.06] p-6 text-center">
                <h3 className="text-lg font-bold text-cyan-300">
                  GrowZeal
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Fee varies by program
                </p>
              </div>
            </div>

            {features.map((feature, index) => (
              <div
                key={`${feature.title}-${index}`}
                className="grid grid-cols-[1.2fr_1fr_1fr] border-b border-white/[0.07] last:border-b-0"
              >
                <div className="p-5">
                  <p className="font-semibold text-slate-100">
                    {feature.title}
                  </p>
                  {feature.description && (
                    <p className="mt-1 text-sm text-slate-400">
                      {feature.description}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-center border-l border-white/10 p-5">
                  {freeFeatureIndexes.includes(index) ? (
                    <Check className="h-5 w-5 text-emerald-400" />
                  ) : (
                    <X className="h-5 w-5 text-slate-500" />
                  )}
                </div>

                <div className="flex items-center justify-center border-l border-cyan-400/10 bg-cyan-400/[0.03] p-5">
                  <Check className="h-5 w-5 text-cyan-300" />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile comparison table */}
          <div className="md:hidden">
            <div className="grid grid-cols-2 border-b border-white/10">
              <div className="p-4">
                <h3 className="font-bold text-slate-200">
                  Free Programs
                </h3>
                <p className="mt-1 text-xs text-slate-400">
                  ₹0 fee
                </p>
              </div>

              <div className="border-l border-cyan-400/20 bg-cyan-400/[0.06] p-4">
                <h3 className="font-bold text-cyan-300">
                  GrowZeal
                </h3>
                <p className="mt-1 text-xs text-slate-300">
                  Fee varies by program
                </p>
              </div>
            </div>

            {features.map((feature, index) => (
              <div
                key={`${feature.title}-${index}`}
                className="border-b border-white/[0.07] p-4 last:border-b-0"
              >
                <p className="mb-3 text-sm font-semibold text-slate-100">
                  {feature.title}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    {freeFeatureIndexes.includes(index) ? (
                      <Check className="h-4 w-4 shrink-0 text-emerald-400" />
                    ) : (
                      <X className="h-4 w-4 shrink-0 text-slate-500" />
                    )}
                    Free Programs
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <Check className="h-4 w-4 shrink-0 text-cyan-300" />
                    GrowZeal
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-8 text-center">
          <a
            href="/#internships"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 text-sm font-bold text-[#071326] transition hover:bg-cyan-300"
          >
            Explore Programs
            <ArrowRight className="h-4 w-4" />
          </a>

          <p className="mx-auto mt-4 max-w-3xl text-xs leading-5 text-slate-500">
            Check the selected program page for the exact fee,
            inclusions, and refund policy before registering.
            Certificates depend on completion requirements.
            PPO consideration is subject to eligibility and selection
            and is not guaranteed.
          </p>
        </div>
      </div>
    </section>
  );
}
