
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Code2,
  GraduationCap,
  BadgeCheck,
  BriefcaseBusiness,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { PrimaryButton } from "./HeroUI";

const highlights = [
  {
    label: "Real-World Projects",
    icon: Code2,
  },
  {
    label: "Mentorship-Driven Learning",
    icon: GraduationCap,
  },
  {
    label: "Industry Experience Certificate",
    icon: BadgeCheck,
  },
  {
    label: "PPO Opportunity",
    icon: BriefcaseBusiness,
  },
];

export default function FinalCTASection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="final-cta"
      className="relative isolate overflow-hidden bg-[#050B18] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* BACKGROUND ATMOSPHERE */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_50%,rgba(109,74,255,0.12),transparent_40%),radial-gradient(ellipse_at_85%_40%,rgba(34,227,214,0.10),transparent_42%)]" />

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.16) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          }}
        />

        <motion.div
          className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-violet-500/15 blur-[120px]"
          animate={
            reduceMotion
              ? {}
              : {
                  x: [0, 25, 0],
                  y: [0, 20, 0],
                }
          }
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-[130px]"
          animate={
            reduceMotion
              ? {}
              : {
                  x: [0, -20, 0],
                  y: [0, -20, 0],
                }
          }
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: reduceMotion ? 0 : 0.6,
          ease: "easeOut",
        }}
        className="relative mx-auto max-w-6xl"
      >
        {/* MAIN CTA CARD */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.10] bg-[#091426]/90 shadow-2xl shadow-black/20 backdrop-blur-xl">
          {/* CARD GLOW */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/[0.09] via-transparent to-cyan-400/[0.09]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-cyan-300/[0.09] blur-[100px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-violet-500/[0.10] blur-[100px]"
          />

          {/* TOP ACCENT */}
          <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent sm:inset-x-24" />

          <div className="relative grid items-center gap-10 px-5 py-10 sm:px-10 sm:py-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:px-14 lg:py-16">
            {/* LEFT CONTENT */}
            <div>
              {/* EYEBROW */}
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-3.5 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-cyan-200 sm:text-xs">
                <Sparkles size={14} />
                Your Next Chapter Starts Here
              </div>

              {/* HEADLINE */}
              <h2 className="mt-6 text-3xl font-black leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
                Don&apos;t Just Learn.
                <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-[#22E3D6] to-violet-300 bg-clip-text text-transparent">
                  Build Your Future.
                </span>
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                Turn your knowledge into practical experience through
                real-world projects, guided mentorship, and
                career-focused learning.
              </p>

              {/* ACTIONS */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <PrimaryButton href="#internships">
                  Explore Programs
                </PrimaryButton>

                <Link
                  href="#comparison"
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-5 py-3 text-sm font-bold text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-cyan-300/[0.05] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                >
                  Compare Benefits
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </div>

              {/* TRUST NOTE */}
              <div className="mt-6 flex items-start gap-2 text-xs leading-5 text-slate-500">
                <BadgeCheck
                  size={15}
                  className="mt-0.5 shrink-0 text-cyan-300/80"
                />

                <p>
                  Explore program details, fees, eligibility, and
                  applicable terms before registering.
                </p>
              </div>
            </div>

            {/* RIGHT VISUAL */}
            <div className="relative mx-auto w-full max-w-md">
              {/* ORBIT RINGS */}
              <div className="relative mx-auto flex aspect-square w-full max-w-[340px] items-center justify-center">
                <motion.div
                  aria-hidden="true"
                  className="absolute inset-[8%] rounded-full border border-cyan-300/10"
                  animate={reduceMotion ? {} : { rotate: 360 }}
                  transition={{
                    duration: 45,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <motion.div
                  aria-hidden="true"
                  className="absolute inset-[19%] rounded-full border border-dashed border-violet-300/20"
                  animate={reduceMotion ? {} : { rotate: -360 }}
                  transition={{
                    duration: 55,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <div className="absolute h-[70%] w-[70%] rounded-full bg-gradient-to-br from-cyan-300/[0.08] to-violet-400/[0.08] blur-2xl" />

                {/* CENTRAL GROWZEAL BRAND MARK */}
                <motion.div
                  animate={reduceMotion ? {} : { y: [0, -7, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10 flex h-28 w-28 flex-col items-center justify-center rounded-[2rem] border border-cyan-300/25 bg-gradient-to-br from-[#10283A] via-[#101A30] to-[#191532] shadow-[0_0_60px_rgba(34,227,214,0.10)] sm:h-32 sm:w-32"
                >
                  <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-300/[0.08] to-transparent" />

                  <span className="relative text-4xl font-black tracking-[-0.12em] text-white sm:text-5xl">
                    G<span className="text-cyan-300">Z</span>
                  </span>

                  <span className="relative mt-1 text-[9px] font-extrabold uppercase tracking-[0.18em] text-slate-400">
                    GrowZeal
                  </span>

                  <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-[#091426] bg-cyan-300 text-[#050B18]">
                    <Sparkles size={12} />
                  </span>
                </motion.div>

                {/* ORBITING DECORATIVE DOTS */}
                <motion.span
                  aria-hidden="true"
                  className="absolute left-[15%] top-[25%] h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(34,227,214,0.65)]"
                  animate={
                    reduceMotion
                      ? {}
                      : { y: [0, -9, 0], opacity: [0.5, 1, 0.5] }
                  }
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />

                <motion.span
                  aria-hidden="true"
                  className="absolute bottom-[20%] right-[16%] h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_16px_rgba(167,139,250,0.65)]"
                  animate={
                    reduceMotion
                      ? {}
                      : { y: [0, 8, 0], opacity: [0.4, 1, 0.4] }
                  }
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                  }}
                />

                {/* FLOATING FEATURE: PROJECTS */}
                <motion.div
                  animate={reduceMotion ? {} : { y: [0, -5, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-0 top-[18%] z-20 rounded-xl border border-white/10 bg-[#0B1729]/95 p-3 shadow-xl backdrop-blur-xl sm:-left-2"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-300">
                      <Code2 size={17} />
                    </span>

                    <div>
                      <p className="text-[10px] font-bold text-white sm:text-xs">
                        Real-World Projects
                      </p>
                      <p className="mt-1 text-[9px] text-slate-400">
                        Learn by building
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* FLOATING FEATURE: MENTORSHIP */}
                <motion.div
                  animate={reduceMotion ? {} : { y: [0, 6, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute right-0 top-[35%] z-20 rounded-xl border border-violet-300/15 bg-[#0B1729]/95 p-3 shadow-xl backdrop-blur-xl sm:-right-2"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-300/10 text-violet-300">
                      <GraduationCap size={17} />
                    </span>

                    <div>
                      <p className="text-[10px] font-bold text-white sm:text-xs">
                        Guided Mentorship
                      </p>
                      <p className="mt-1 text-[9px] text-slate-400">
                        Learn with direction
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* FLOATING FEATURE: CAREER */}
                <motion.div
                  animate={reduceMotion ? {} : { y: [0, -5, 0] }}
                  transition={{
                    duration: 4.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-[13%] left-1/2 z-20 -translate-x-1/2 rounded-xl border border-cyan-300/15 bg-[#0B1729]/95 p-3 shadow-xl backdrop-blur-xl"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-300/10 text-emerald-300">
                      <TrendingUp size={17} />
                    </span>

                    <div>
                      <p className="text-[10px] font-bold text-white sm:text-xs">
                        Career Development
                      </p>
                      <p className="mt-1 text-[9px] text-slate-400">
                        Build your next step
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* VISUAL CAPTION */}
              <p className="mx-auto -mt-1 max-w-xs text-center text-[10px] leading-5 text-slate-500 sm:text-xs">
                Learn with purpose. Build with confidence.
              </p>
            </div>
          </div>

          {/* FEATURE STRIP */}
          <div className="relative border-t border-white/[0.08] bg-black/[0.12] px-5 py-5 sm:px-10 sm:py-6 lg:px-14">
            <div className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.4,
                      delay: reduceMotion ? 0 : index * 0.06,
                    }}
                    className="flex min-w-0 items-center gap-2.5 sm:gap-3"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-300/10 bg-cyan-300/[0.05] text-cyan-300">
                      <Icon size={17} />
                    </span>

                    <span className="text-[11px] font-semibold leading-5 text-slate-300 sm:text-xs">
                      {item.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* FINAL DISCLAIMER */}
        <p className="mx-auto mt-5 max-w-4xl text-center text-[10px] leading-5 text-slate-500 sm:text-xs">
          Certificate issuance is subject to applicable program completion
          requirements. PPO consideration, where offered, depends on
          eligibility, performance, and selection and is not guaranteed.
          Review current program details and terms before registering.
        </p>
      </motion.div>
    </section>
  );
}
