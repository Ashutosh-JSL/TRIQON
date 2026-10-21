
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Wallet,
  GraduationCap,
  Users,
  Code2,
  BadgeCheck,
  BriefcaseBusiness,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  FolderGit2,
  Award,
  TrendingUp,
  Sparkles,
  Rocket,
  Target,
  ChevronRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Register",
    description: "Start your journey with registration and onboarding.",
    detail: "Registration & onboarding",
    icon: Wallet,
    color: "from-cyan-300 to-teal-400",
  },
  {
    number: "02",
    title: "Get Started",
    description: "Understand your program, roadmap, and goals.",
    detail: "Program orientation",
    icon: GraduationCap,
    color: "from-violet-400 to-indigo-400",
  },
  {
    number: "03",
    title: "Learn Together",
    description: "Develop skills through guided learning and collaboration.",
    detail: "Guided learning",
    icon: Users,
    color: "from-teal-300 to-emerald-400",
  },
  {
    number: "04",
    title: "Build Projects",
    description: "Turn your knowledge into practical project work.",
    detail: "Hands-on deliverables",
    icon: Code2,
    color: "from-sky-300 to-cyan-400",
  },
  {
    number: "05",
    title: "Get Certified",
    description: "Complete the applicable program requirements.",
    detail: "Certificate eligibility",
    icon: BadgeCheck,
    color: "from-emerald-300 to-teal-400",
  },
  {
    number: "06",
    title: "Explore PPO",
    description: "Potential consideration based on eligibility and performance.",
    detail: "Subject to selection",
    icon: BriefcaseBusiness,
    color: "from-violet-300 to-cyan-300",
  },
];

const outcomes = [
  {
    icon: Lightbulb,
    title: "Practical Skills",
    subtitle: "Learn by doing",
    accent: "text-cyan-300",
    glow: "group-hover:bg-cyan-300",
  },
  {
    icon: FolderGit2,
    title: "Project Portfolio",
    subtitle: "Show what you build",
    accent: "text-violet-300",
    glow: "group-hover:bg-violet-300",
  },
  {
    icon: Award,
    title: "Certificate",
    subtitle: "Subject to requirements",
    accent: "text-emerald-300",
    glow: "group-hover:bg-emerald-300",
  },
  {
    icon: TrendingUp,
    title: "Career Readiness",
    subtitle: "Prepare for opportunities",
    accent: "text-sky-300",
    glow: "group-hover:bg-sky-300",
  },
];

export default function JourneySection() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 22,
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

  return (
    <section
      id="journey"
      className="relative isolate overflow-hidden bg-[#050B18] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* BACKGROUND ATMOSPHERE */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_12%_15%,rgba(109,74,255,0.15),transparent_38%),radial-gradient(ellipse_at_88%_45%,rgba(34,227,214,0.10),transparent_40%)]" />

        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.15) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 95%)",
          }}
        />

        <motion.div
          className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-violet-600/15 blur-[120px]"
          animate={
            reduceMotion
              ? {}
              : {
                  x: [0, 25, 0],
                  y: [0, 20, 0],
                }
          }
          transition={{ duration: 15, repeat: Infinity }}
        />

        <motion.div
          className="absolute -right-40 top-[35%] h-96 w-96 rounded-full bg-cyan-400/10 blur-[130px]"
          animate={
            reduceMotion
              ? {}
              : {
                  x: [0, -25, 0],
                  y: [0, 25, 0],
                }
          }
          transition={{ duration: 17, repeat: Infinity }}
        />

        <div className="absolute -bottom-40 left-[35%] h-96 w-96 rounded-full bg-blue-500/[0.07] blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* SECTION HEADING */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-200 sm:text-xs">
            <Sparkles size={14} />
            Your Journey
          </div>

          <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Learn.
            <span className="text-cyan-300"> Build.</span>
            <span className="block bg-gradient-to-r from-cyan-300 via-[#22E3D6] to-violet-400 bg-clip-text text-transparent">
              Grow With Purpose.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            A clear path from getting started to building practical
            experience.
          </p>
        </motion.div>

        {/* JOURNEY PROGRESS STRIP */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="relative mb-14 overflow-hidden rounded-3xl border border-white/[0.09] bg-[#0A1425]/80 p-5 backdrop-blur-xl sm:mb-16 sm:p-7 lg:p-8"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/[0.07] via-transparent to-cyan-400/[0.07]" />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.07]">
                <Rocket size={25} className="text-cyan-300" />
                <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-[#0A1425] bg-violet-400" />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                  Your next chapter
                </p>

                <h3 className="mt-1 text-lg font-extrabold text-white sm:text-xl">
                  Turn Learning Into Experience.
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-400 sm:text-sm">
                  Learn skills. Build projects. Showcase your work.
                </p>
              </div>
            </div>

            <a
              href="#internships"
              className="group inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-300 to-[#8B9BFF] px-5 py-3 text-sm font-extrabold text-[#050B18] transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
            >
              Explore Programs
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* MINI PROGRESS INDICATOR */}

          <div className="relative mt-7 grid grid-cols-3 gap-2 border-t border-white/[0.07] pt-5 sm:mt-8 sm:gap-4 sm:pt-6">
            {[
              { number: "01–02", label: "Get Started" },
              { number: "03–04", label: "Learn & Build" },
              { number: "05–06", label: "Move Forward" },
            ].map((item, index) => (
              <div key={item.number} className="relative">
                <div className="mb-2 flex items-center gap-2">
                  <span
                    className={`h-2 w-2 rounded-full ${
                      index === 1
                        ? "bg-violet-300"
                        : "bg-cyan-300"
                    }`}
                  />
                  <span className="text-[10px] font-bold tracking-wider text-slate-500 sm:text-xs">
                    {item.number}
                  </span>
                </div>

                <p className="text-xs font-semibold text-slate-200 sm:text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* SIX-STEP JOURNEY */}

        <div className="relative">
          {/* DESKTOP CONNECTOR */}

          <div
            aria-hidden="true"
            className="absolute left-[16.66%] right-[16.66%] top-8 hidden h-px bg-gradient-to-r from-cyan-300/5 via-cyan-300/40 to-violet-300/10 lg:block"
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.12 }}
                  variants={fadeUp}
                  transition={{
                    delay: reduceMotion ? 0 : (index % 3) * 0.08,
                  }}
                  className="group relative min-w-0"
                >
                  {/* ICON + STEP NUMBER */}

                  <div className="relative z-10 mb-4 flex items-center justify-between px-1">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-[#0A1425] shadow-[0_0_30px_rgba(34,227,214,0.04)] transition duration-300 group-hover:border-cyan-300/30 group-hover:shadow-[0_0_32px_rgba(34,227,214,0.09)]">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${step.color} text-[#050B18] transition-transform duration-300 group-hover:scale-110`}
                      >
                        <Icon size={22} strokeWidth={2.2} />
                      </div>
                    </div>

                    <span className="text-4xl font-black tracking-tight text-white/[0.07] transition-colors duration-300 group-hover:text-cyan-200/20">
                      {step.number}
                    </span>
                  </div>

                  {/* STEP CARD */}

                  <div className="relative flex h-full min-h-[205px] flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0A1425]/85 p-5 backdrop-blur-xl transition duration-300 group-hover:-translate-y-1 group-hover:border-cyan-300/25 group-hover:bg-[#0D1B2D] sm:p-6">
                    <div
                      aria-hidden="true"
                      className={`absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br ${step.color} opacity-[0.07] blur-2xl transition-opacity duration-300 group-hover:opacity-20`}
                    />

                    <div className="relative">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                          STEP {step.number}
                        </span>

                        {index === 3 && (
                          <span className="rounded-full border border-violet-300/20 bg-violet-300/[0.07] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-violet-200">
                            Build
                          </span>
                        )}
                      </div>

                      <h3 className="mt-3 text-xl font-extrabold text-white">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {step.description}
                      </p>
                    </div>

                    <div className="relative mt-auto flex items-start gap-2.5 border-t border-white/[0.07] pt-4 mt-5">
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-cyan-300"
                      />

                      <span className="text-xs font-medium leading-5 text-slate-300">
                        {step.detail}
                      </span>
                    </div>

                    {/* BOTTOM ACCENT */}

                    <div className="absolute bottom-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-cyan-300/0 to-transparent transition-all duration-300 group-hover:via-cyan-300/50" />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* OUTCOMES */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="mt-20 sm:mt-24"
        >
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                <Target size={15} />
                What You Work Toward
              </div>

              <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                Make Your Learning Count.
              </h3>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-400">
              Build skills and practical evidence of what you can do.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {outcomes.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={fadeUp}
                  transition={{
                    delay: reduceMotion ? 0 : index * 0.07,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0A1425]/80 p-4 transition duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-[#0D1B2D] sm:p-5"
                >
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan-300/[0.04] blur-2xl transition-opacity group-hover:opacity-100" />

                  <div
                    className={`relative mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] ${item.accent} transition duration-300 ${item.glow} group-hover:text-[#050B18]`}
                  >
                    <Icon size={21} />
                  </div>

                  <h4 className="relative text-sm font-bold text-white sm:text-base">
                    {item.title}
                  </h4>

                  <p className="relative mt-1.5 text-xs leading-5 text-slate-400 sm:text-sm">
                    {item.subtitle}
                  </p>

                  <div className="mt-4 flex items-center justify-between border-t border-white/[0.07] pt-3">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                      TriQolo Journey
                    </span>

                    <ChevronRight
                      size={15}
                      className="text-slate-500 transition-transform group-hover:translate-x-1 group-hover:text-cyan-300"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CERTIFICATE & PPO DISCLAIMER */}

        <p className="mx-auto mt-8 max-w-3xl text-center text-[10px] leading-5 text-slate-500 sm:text-xs">
          Certificate issuance is subject to successful completion of
          applicable program requirements. PPO consideration, where offered,
          depends on eligibility, performance, and selection and is not
          guaranteed.
        </p>

        {/* CLOSING STATEMENT */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mt-12 text-center sm:mt-16"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-2 text-sm font-semibold sm:text-base">
            <span className="text-slate-400">
              Your next step starts here.
            </span>

            <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
              Build something meaningful.
            </span>

            <Sparkles size={16} className="text-cyan-300" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
