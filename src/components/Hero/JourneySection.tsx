
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
    description:
      "Develop skills through guided learning and collaboration.",
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
    description:
      "Potential consideration based on eligibility and performance.",
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

const progressItems = [
  { number: "01–02", label: "Get Started" },
  { number: "03–04", label: "Learn & Build" },
  { number: "05–06", label: "Move Forward" },
];

export default function JourneySection() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.45,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="journey"
      className="relative isolate overflow-hidden bg-[#050B18] px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-28"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_12%_15%,rgba(109,74,255,0.15),transparent_38%),radial-gradient(ellipse_at_88%_45%,rgba(34,227,214,0.10),transparent_40%)]" />

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.15) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "linear-gradient(to bottom, black, transparent 95%)",
          }}
        />

        <motion.div
          className="absolute -left-40 top-20 h-64 w-64 rounded-full bg-violet-600/15 blur-[100px] sm:h-80 sm:w-80"
          animate={
            reduceMotion
              ? {}
              : {
                  x: [0, 20, 0],
                  y: [0, 15, 0],
                }
          }
          transition={{ duration: 15, repeat: Infinity }}
        />

        <motion.div
          className="absolute -right-32 top-[35%] h-72 w-72 rounded-full bg-cyan-400/10 blur-[110px] sm:h-96 sm:w-96"
          animate={
            reduceMotion
              ? {}
              : {
                  x: [0, -20, 0],
                  y: [0, 20, 0],
                }
          }
          transition={{ duration: 17, repeat: Infinity }}
        />

        <div className="absolute -bottom-40 left-[35%] h-80 w-80 rounded-full bg-blue-500/[0.07] blur-[110px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl min-w-0">
        {/* Section heading */}
        <motion.div
          id="JourneySection"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-14 lg:mb-16"
        >
          <div className="inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-cyan-200 sm:px-4 sm:text-xs sm:tracking-[0.22em]">
            <Sparkles size={14} className="shrink-0" />
            Your Journey
          </div>

          <h2 className="mt-5 text-3xl font-black leading-[1.15] tracking-tight sm:mt-6 sm:text-4xl lg:text-5xl">
            Learn.
            <span className="text-cyan-300"> Build.</span>
            <span className="mt-1 block bg-gradient-to-r from-cyan-300 via-[#22E3D6] to-violet-400 bg-clip-text text-transparent">
              Grow With Purpose.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:mt-5 sm:text-base sm:leading-7">
            A clear path from getting started to building practical
            experience.
          </p>
        </motion.div>

        {/* Journey progress strip */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="relative mb-12 overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0A1425]/80 p-4 backdrop-blur-xl sm:mb-16 sm:rounded-3xl sm:p-6 lg:p-8"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/[0.07] via-transparent to-cyan-400/[0.07]" />

          <div className="relative flex min-w-0 flex-col gap-5 sm:gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex min-w-0 items-start gap-3 sm:items-center sm:gap-4">
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.07] sm:h-14 sm:w-14 sm:rounded-2xl">
                <Rocket size={23} className="text-cyan-300 sm:h-[25px] sm:w-[25px]" />
                <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-[#0A1425] bg-violet-400" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-cyan-300 sm:text-[10px] sm:tracking-[0.2em]">
                  Your next chapter
                </p>

                <h3 className="mt-1 break-words text-base font-extrabold leading-snug text-white sm:text-xl">
                  Turn Learning Into Experience.
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-400 sm:text-sm">
                  Learn skills. Build projects. Showcase your work.
                </p>
              </div>
            </div>

            <a
              href="#internships"
              className="group inline-flex min-h-11 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-300 to-[#8B9BFF] px-4 py-3 text-sm font-extrabold text-[#050B18] transition hover:shadow-lg hover:shadow-cyan-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 sm:w-auto sm:px-5 md:self-center"
            >
              Explore Programs
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Progress indicator */}
          <div className="relative mt-5 grid grid-cols-1 gap-3 border-t border-white/[0.07] pt-4 sm:mt-7 sm:grid-cols-3 sm:gap-4 sm:pt-6">
            {progressItems.map((item, index) => (
              <div
                key={item.number}
                className="flex min-w-0 items-center gap-3 sm:block"
              >
                <div className="flex shrink-0 items-center gap-2 sm:mb-2">
                  <span
                    className={`h-2 w-2 rounded-full ${
                      index === 1 ? "bg-violet-300" : "bg-cyan-300"
                    }`}
                  />
                  <span className="text-[10px] font-bold tracking-wider text-slate-500 sm:text-xs">
                    {item.number}
                  </span>
                </div>

                <p className="min-w-0 text-xs font-semibold text-slate-200 sm:text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Six-step journey */}
        <div className="relative">
          {/* Desktop connector */}
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
                  viewport={{ once: true, amount: 0.1 }}
                  variants={fadeUp}
                  transition={{
                    delay: reduceMotion ? 0 : (index % 3) * 0.06,
                  }}
                  className="group relative flex min-w-0 flex-col"
                >
                  {/* Step icon and number */}
                  <div className="relative z-10 mb-3 flex items-center justify-between px-1 sm:mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#0A1425] shadow-[0_0_30px_rgba(34,227,214,0.04)] transition duration-300 group-hover:border-cyan-300/30 sm:h-16 sm:w-16 sm:rounded-2xl">
                      <div
                        className={`flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${step.color} text-[#050B18] transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-11 sm:rounded-xl`}
                      >
                        <Icon size={20} strokeWidth={2.2} className="sm:hidden" />
                        <Icon
                          size={22}
                          strokeWidth={2.2}
                          className="hidden sm:block"
                        />
                      </div>
                    </div>

                    <span className="select-none text-3xl font-black tracking-tight text-white/[0.09] sm:text-4xl">
                      {step.number}
                    </span>
                  </div>

                  {/* Step card */}
                  <div className="relative flex min-w-0 flex-1 flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0A1425]/85 p-4 backdrop-blur-xl transition duration-300 group-hover:border-cyan-300/25 group-hover:bg-[#0D1B2D] sm:p-6 lg:min-h-[220px]">
                    <div
                      aria-hidden="true"
                      className={`pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br ${step.color} opacity-[0.07] blur-2xl transition-opacity duration-300 group-hover:opacity-20`}
                    />

                    <div className="relative min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-cyan-300 sm:text-[10px] sm:tracking-[0.2em]">
                          STEP {step.number}
                        </span>

                        {index === 3 && (
                          <span className="rounded-full border border-violet-300/20 bg-violet-300/[0.07] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-violet-200">
                            Build
                          </span>
                        )}
                      </div>

                      <h3 className="mt-2 break-words text-lg font-extrabold leading-snug text-white sm:mt-3 sm:text-xl">
                        {step.title}
                      </h3>

                      <p className="mt-2 break-words text-sm leading-6 text-slate-400">
                        {step.description}
                      </p>
                    </div>

                    <div className="relative mt-5 flex min-w-0 items-start gap-2.5 border-t border-white/[0.07] pt-4">
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-cyan-300"
                      />

                      <span className="min-w-0 break-words text-xs font-medium leading-5 text-slate-300">
                        {step.detail}
                      </span>
                    </div>

                    <div className="pointer-events-none absolute bottom-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-cyan-300/0 to-transparent transition-all duration-300 group-hover:via-cyan-300/50" />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Outcomes */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUp}
          className="mt-14 sm:mt-20 lg:mt-24"
        >
          <div className="mb-6 flex min-w-0 flex-col gap-3 sm:mb-8 md:flex-row md:items-end md:justify-between">
            <div className="min-w-0">
              <div className="inline-flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-300 sm:text-xs sm:tracking-[0.2em]">
                <Target size={15} className="shrink-0" />
                What You Work Toward
              </div>

              <h3 className="mt-3 break-words text-2xl font-black leading-tight text-white sm:text-3xl">
                Make Your Learning Count.
              </h3>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-400">
              Build skills and practical evidence of what you can do.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {outcomes.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={fadeUp}
                  transition={{
                    delay: reduceMotion ? 0 : index * 0.05,
                  }}
                  className="group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0A1425]/80 p-4 transition duration-300 hover:border-white/15 hover:bg-[#0D1B2D] sm:p-5"
                >
                  <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan-300/[0.04] blur-2xl" />

                  <div
                    className={`relative mb-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] ${item.accent} transition duration-300 ${item.glow} group-hover:text-[#050B18] sm:mb-5 sm:h-11 sm:w-11`}
                  >
                    <Icon size={21} />
                  </div>

                  <h4 className="relative break-words text-sm font-bold leading-snug text-white sm:text-base">
                    {item.title}
                  </h4>

                  <p className="relative mt-1.5 break-words text-xs leading-5 text-slate-400 sm:text-sm">
                    {item.subtitle}
                  </p>

                  <div className="relative mt-4 flex min-w-0 items-center justify-between gap-2 border-t border-white/[0.07] pt-3">
                    <span className="min-w-0 break-words text-[9px] font-semibold uppercase leading-4 tracking-wider text-slate-500 sm:text-[10px]">
                      GrowZeal Journey
                    </span>

                    <ChevronRight
                      size={15}
                      className="shrink-0 text-slate-500 transition-transform group-hover:translate-x-1 group-hover:text-cyan-300"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Certificate and PPO disclaimer */}
        <p className="mx-auto mt-7 max-w-3xl text-center text-[10px] leading-5 text-slate-500 sm:mt-8 sm:text-xs">
          Certificate issuance is subject to successful completion of
          applicable program requirements. PPO consideration, where offered,
          depends on eligibility, performance, and selection and is not
          guaranteed.
        </p>

        {/* Closing statement */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mt-10 text-center sm:mt-16"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm font-semibold sm:text-base">
            <span className="text-slate-400">
              Your next step starts here.
            </span>

            <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
              Build something meaningful.
            </span>

            <Sparkles size={16} className="shrink-0 text-cyan-300" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
