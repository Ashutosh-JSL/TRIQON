
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Check,
  X,
  Sparkles,
  GraduationCap,
  BriefcaseBusiness,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import { comparisons } from "./hero-data";
import { SectionLabel } from "./HeroUI";

const freeFeatureIndexes = [0, 2, 5, 7, 9];

const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function ComparisonSection() {
  const reduceMotion = useReducedMotion();

  const sectionReveal = {
    ...reveal,
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const allComparisons = comparisons.some(
    (item) => item.title === "PPO Opportunity"
  )
    ? comparisons
    : [
        ...comparisons,
        {
          title: "PPO Opportunity",
          description:
            "Eligible participants may be considered for a Pre-Placement Offer based on performance, eligibility, and selection criteria.",
          icon: BriefcaseBusiness,
        },
      ];

  const getFreeDescription = (title: string, index: number) => {
    if (title === "PPO Opportunity") {
      return "Depends on the provider and its selection process.";
    }

    if (freeFeatureIndexes.includes(index)) {
      return "May be available, depending on the provider.";
    }

    return "Varies by program and provider.";
  };

  return (
    <section
      id="comparison"
      className="relative isolate overflow-hidden bg-[#050B18] px-4 py-20 text-white sm:px-6 sm:py-24 lg:py-28"
    >
      {/* SHARED TRIQOLO BACKGROUND */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_20%,rgba(109,74,255,0.15),transparent_40%),radial-gradient(ellipse_at_85%_55%,rgba(34,211,238,0.11),transparent_42%)]" />

        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.16) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 95%)",
          }}
        />

        <motion.div
          className="absolute -left-32 top-32 h-80 w-80 rounded-full bg-violet-600/15 blur-[110px]"
          animate={
            reduceMotion
              ? {}
              : { x: [0, 30, 0], y: [0, 20, 0] }
          }
          transition={{ duration: 14, repeat: Infinity }}
        />

        <motion.div
          className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-cyan-400/10 blur-[110px]"
          animate={
            reduceMotion
              ? {}
              : { x: [0, -25, 0], y: [0, -25, 0] }
          }
          transition={{ duration: 16, repeat: Infinity }}
        />

        {[
          "left-[10%] top-[15%]",
          "left-[35%] top-[8%]",
          "right-[12%] top-[20%]",
          "left-[18%] bottom-[12%]",
          "right-[30%] bottom-[15%]",
        ].map((position, index) => (
          <motion.span
            key={position}
            className={`absolute ${position} h-1 w-1 rounded-full bg-cyan-200/70`}
            animate={
              reduceMotion
                ? {}
                : {
                    opacity: [0.2, 0.9, 0.2],
                    scale: [1, 1.7, 1],
                  }
            }
            transition={{
              duration: 3 + index,
              repeat: Infinity,
              delay: index * 0.3,
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-6xl">
        {/* SECTION INTRO */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          className="mx-auto max-w-3xl text-center"
        >
          <SectionLabel>Compare Your Options</SectionLabel>

          <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Not Just an Internship.
            <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-[#22E3D6] to-violet-400 bg-clip-text text-transparent">
              A Structured Learning Journey.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
            Compare the structure, support, and opportunities before
            choosing your path.
          </p>
        </motion.div>

        {/* MOBILE COMPARISON HEADER */}

        <div className="sticky top-0 z-30 mt-10 grid grid-cols-2 gap-3 border-b border-white/[0.08] bg-[#050B18]/95 py-3 backdrop-blur-xl lg:hidden">
          <div className="rounded-2xl border border-white/10 bg-[#0A1425]/90 p-4">
            <p className="text-xs font-bold text-slate-200">
              Free Internships
            </p>

            <p className="mt-2 text-lg font-black text-white">
              No Program Fee
            </p>

            <p className="mt-1 text-[10px] leading-4 text-slate-400">
              Benefits vary by provider
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-cyan-300/30 bg-gradient-to-br from-[#0C2942] to-[#171532] p-4">
            <div className="absolute -right-5 -top-5 h-20 w-20 rounded-full bg-cyan-300/10 blur-2xl" />

            <div className="relative flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider text-cyan-300">
              <Sparkles size={12} />
              Structured Program
            </div>

            <p className="relative mt-2 text-sm font-bold text-white">
              TriQolo
            </p>

            <p className="relative mt-1 text-lg font-black text-cyan-300">
              Program Fee Applies
            </p>

            <p className="relative mt-1 text-[10px] leading-4 text-slate-300">
              See current program details
            </p>
          </div>
        </div>

        {/* MOBILE COMPARISON CARDS */}

        <div className="mt-5 space-y-3 lg:hidden">
          {allComparisons.map((item, index) => {
            const Icon = item.icon;
            const isPPO = item.title === "PPO Opportunity";

            return (
              <motion.article
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.08 }}
                variants={sectionReveal}
                transition={{
                  duration: reduceMotion ? 0 : 0.4,
                  delay: reduceMotion ? 0 : (index % 3) * 0.04,
                }}
                className={`relative overflow-hidden rounded-2xl border bg-[#09182D]/85 backdrop-blur-xl ${
                  isPPO
                    ? "border-cyan-300/30 shadow-lg shadow-cyan-400/[0.05]"
                    : "border-white/[0.08]"
                }`}
              >
                {isPPO && (
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
                )}

                <div className="flex items-center gap-3 border-b border-white/[0.07] p-4">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                      isPPO
                        ? "bg-violet-300/10 text-violet-300"
                        : "bg-cyan-300/[0.08] text-cyan-300"
                    }`}
                  >
                    <Icon size={19} />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-white">
                      {item.title}
                    </h3>

                    {isPPO && (
                      <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-cyan-300">
                        Career Opportunity
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2">
                  {/* FREE INTERNSHIPS */}

                  <div className="p-4">
                    <div className="mb-2 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      <Check size={13} className="text-emerald-300" />
                      Free Programs
                    </div>

                    <p className="text-xs leading-5 text-slate-400">
                      {getFreeDescription(item.title, index)}
                    </p>
                  </div>

                  {/* TRIQOLO */}

                  <div className="border-l border-cyan-300/15 bg-cyan-300/[0.04] p-4">
                    <div className="mb-2 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-cyan-300">
                      <Check size={13} />
                      TriQolo
                    </div>

                    <p className="text-xs font-medium leading-5 text-slate-200">
                      {item.description}
                    </p>

                    {isPPO && (
                      <p className="mt-3 rounded-lg border border-violet-300/15 bg-violet-300/[0.05] px-2.5 py-2 text-[10px] leading-4 text-violet-200">
                        Subject to eligibility and selection
                      </p>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* DESKTOP COMPARISON TABLE */}

        <div className="mt-10 hidden overflow-hidden rounded-3xl border border-white/10 bg-[#09182D]/85 shadow-2xl shadow-black/20 backdrop-blur-xl lg:block">
          {/* TABLE HEADER */}

          <div className="grid grid-cols-[1.1fr_1fr_1fr] border-b border-white/10 bg-[#081426]/90">
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-200">
                <ShieldCheck size={17} className="text-cyan-300" />
                Compare Features
              </div>

              <p className="mt-2 text-xs text-slate-400">
                Find the right learning experience
              </p>
            </div>

            <div className="border-l border-white/[0.07] p-6">
              <h3 className="text-lg font-extrabold text-white">
                Free Internships
              </h3>

              <p className="mt-2 text-lg font-black text-white">
                No Program Fee
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Benefits vary by provider
              </p>
            </div>

            <div className="relative overflow-hidden border-x border-cyan-300/20 bg-gradient-to-br from-[#0C2942] to-[#171532] p-6">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-300/10 blur-3xl" />

              <div className="relative flex items-center gap-2">
                <Sparkles size={17} className="text-cyan-300" />

                <h3 className="text-lg font-extrabold text-white">
                  TriQolo
                </h3>
              </div>

              <p className="relative mt-2 text-lg font-black text-cyan-300">
                Structured Program
              </p>

              <p className="relative mt-1 text-xs text-slate-300">
                Program fee applies
              </p>
            </div>
          </div>

          {/* COMPARISON ROWS */}

          {allComparisons.map((item, index) => {
            const Icon = item.icon;
            const isPPO = item.title === "PPO Opportunity";

            return (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.08 }}
                variants={sectionReveal}
                className={`grid grid-cols-[1.1fr_1fr_1fr] transition-colors duration-200 hover:bg-white/[0.015] ${
                  isPPO
                    ? "border-y border-cyan-300/20 bg-cyan-300/[0.025]"
                    : index !== allComparisons.length - 1
                      ? "border-b border-white/[0.06]"
                      : ""
                }`}
              >
                {/* FEATURE */}

                <div className="flex items-center gap-3 p-5">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                      isPPO
                        ? "bg-violet-300/10 text-violet-300"
                        : "bg-cyan-300/[0.06] text-cyan-300"
                    }`}
                  >
                    <Icon size={19} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-200">
                      {item.title}
                    </p>

                    {isPPO && (
                      <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-cyan-300">
                        Career Opportunity
                      </p>
                    )}
                  </div>
                </div>

                {/* FREE INTERNSHIPS */}

                <div className="flex items-center border-l border-white/[0.06] p-5">
                  <div className="flex items-start gap-2.5">
                    <Check
                      size={16}
                      className="mt-1 shrink-0 text-emerald-300"
                    />

                    <p className="text-sm leading-6 text-slate-400">
                      {getFreeDescription(item.title, index)}
                    </p>
                  </div>
                </div>

                {/* TRIQOLO */}

                <div className="flex items-center border-x border-cyan-300/10 bg-cyan-300/[0.025] p-5">
                  <div className="flex items-start gap-2.5">
                    <Check
                      size={16}
                      className="mt-1 shrink-0 text-cyan-300"
                    />

                    <div>
                      <p className="text-sm font-medium leading-6 text-slate-200">
                        {item.description}
                      </p>

                      {isPPO && (
                        <div className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-violet-300/15 bg-violet-300/[0.05] px-3 py-2 text-[10px] font-semibold text-violet-200">
                          <BriefcaseBusiness size={13} />
                          Subject to eligibility and selection
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CAREER CTA */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={sectionReveal}
          className="relative mt-8 overflow-hidden rounded-2xl border border-cyan-300/15 bg-gradient-to-r from-[#0B2039]/90 via-[#0B2039]/70 to-[#171532]/80 p-5 sm:p-6"
        >
          <div className="pointer-events-none absolute -right-12 -top-16 h-40 w-40 rounded-full bg-violet-400/[0.08] blur-3xl" />

          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.07] text-cyan-300">
                <GraduationCap size={21} />
              </div>

              <div>
                <h3 className="text-sm font-extrabold text-white sm:text-base">
                  Choose With Clarity.
                  <span className="text-cyan-300">
                    {" "}Build With Purpose.
                  </span>
                </h3>

                <p className="mt-1.5 max-w-xl text-xs leading-5 text-slate-400 sm:text-sm">
                  Review the program details and requirements before
                  making your decision.
                </p>
              </div>
            </div>

            <a
              href="#internships"
              className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-300 to-violet-300 px-5 py-3 text-xs font-extrabold text-[#050B18] transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 sm:text-sm"
            >
              Explore Programs
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>

        {/* DISCLAIMER */}

        <p className="mx-auto mt-5 max-w-5xl text-[10px] leading-5 text-slate-500 sm:text-xs">
          Free internship offerings vary by provider, and free programs
          may offer similar features. Program fees, benefits, and eligibility
          are subject to the current published program details and applicable
          terms. Certification depends on completion requirements. PPO
          consideration, where applicable, depends on eligibility and
          selection and is not guaranteed.
        </p>
      </div>
    </section>
  );
}
