"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  GraduationCap,
  Users,
  Check,
  Zap,
  Sparkles,
} from "lucide-react";
import { fadeUp, stagger } from "./hero-data";
import { SectionLabel, PrimaryButton } from "./HeroUI";

const journey = [
  {
    number: "01",
    title: "Learn",
    description: "Understand project goals and requirements",
    icon: GraduationCap,
  },
  {
    number: "02",
    title: "Collaborate",
    description: "Work with mentors and team members",
    icon: Users,
  },
  {
    number: "03",
    title: "Contribute",
    description: "Complete tasks and deliver project outcomes",
    icon: Code2,
  },
];

const highlights = [
  "Industry-based projects",
  "Mentor guidance",
  "Collaborative learning",
];

export default function HeroBanner() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#04172D] text-white"
    >
      {/* Background effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-cyan-400/15 blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 -z-10 h-96 w-96 rounded-full bg-blue-500/20 blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(#72F7FF 0.8px, transparent 0.8px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-12 lg:py-24">
        {/* LEFT: Hero content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative z-10"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>
              Mentor-Guided Industry Projects
            </SectionLabel>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-7 text-xs font-bold tracking-[0.25em] text-cyan-300 sm:text-sm"
          >
            TriQolo INDIA
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-4 max-w-3xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl"
          >
            Learn with Mentors.
            <span className="block">Contribute to</span>
            <span className="mt-1 block bg-gradient-to-r from-cyan-300 via-[#72F7FF] to-white bg-clip-text pb-2 text-transparent">
              Real Projects.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8"
          >
            Gain practical experience through industry-based projects,
            mentor guidance, and collaborative learning. Learn by
            contributing to real project work.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <PrimaryButton href="#internships">
              Explore Programs
            </PrimaryButton>

            <a
              href="#how-it-works"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/5"
            >
              How It Works
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          {/* Key benefits */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap gap-x-5 gap-y-3"
          >
            {highlights.map((item) => (
              <span
                key={item}
                className="flex items-center gap-2 text-xs font-medium text-slate-300 sm:text-sm"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-300/10">
                  <Check
                    size={12}
                    className="text-cyan-300"
                  />
                </span>
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT: Project journey card */}
        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative overflow-hidden rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-[#0B2847] via-[#091E39] to-[#07162B] p-5 shadow-2xl shadow-black/30 sm:p-7">
            {/* Decorative rings */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-cyan-300/10"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full border border-cyan-300/10"
            />

            {/* Card heading */}
            <div className="relative flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                  Your project journey
                </p>

                <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
                  Guided Learning.
                  <span className="mt-1 block text-cyan-300">
                    Real Contribution.
                  </span>
                </h2>

                <p className="mt-3 max-w-xs text-sm leading-6 text-slate-400">
                  Learn from mentors while contributing to practical
                  industry-based projects.
                </p>
              </div>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                <Zap size={23} />
              </div>
            </div>

            {/* Registration fee */}
            <div className="relative mt-7 rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.06] p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm text-slate-400">
                    Program registration fee
                  </p>

                  <div className="mt-1 flex flex-wrap items-baseline gap-2">
                    <span className="text-4xl font-black tracking-tight sm:text-5xl">
                      ₹499
                    </span>

                    <span className="text-xs text-slate-400">
                      per program
                    </span>
                  </div>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
                  <Sparkles size={22} />
                </div>
              </div>

              <p className="mt-3 text-xs leading-5 text-slate-400">
                Review program details and applicable Terms &amp; Conditions
                before registering.
              </p>
            </div>

            {/* Journey stages */}
            <div className="mt-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                  How you contribute
                </p>

                <span className="text-[10px] font-bold text-cyan-300 sm:text-xs">
                  LEARN → COLLABORATE → CONTRIBUTE
                </span>
              </div>

              <div className="relative mt-5 space-y-3">
                {journey.map((stage, index) => {
                  const Icon = stage.icon;

                  return (
                    <motion.div
                      key={stage.number}
                      initial={{
                        opacity: 0,
                        x: reduceMotion ? 0 : 12,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.45,
                        delay: reduceMotion ? 0 : 0.35 + index * 0.15,
                      }}
                      className="group flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] p-3 transition hover:border-cyan-300/25 hover:bg-cyan-300/[0.04]"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-[#0B2847] text-cyan-300">
                        <Icon size={20} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm font-bold text-white">
                            {stage.title}
                          </h3>

                          <span className="text-[10px] font-bold text-cyan-300/70">
                            {stage.number}
                          </span>
                        </div>

                        <p className="mt-1 text-xs leading-5 text-slate-400">
                          {stage.description}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={17}
                        className="shrink-0 text-slate-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300"
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Closing message */}
            <div className="mt-5 flex items-center gap-3 rounded-xl border border-cyan-300/15 bg-gradient-to-r from-cyan-300/[0.08] to-blue-500/[0.06] p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
                <Code2 size={20} />
              </div>

              <div>
                <p className="text-sm font-bold">
                  Learn. Contribute. Grow.
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Develop practical skills with mentor-guided project work.
                </p>
              </div>
            </div>

            {/* Terms disclaimer */}
            <p className="mt-5 border-t border-white/10 pt-4 text-[10px] leading-5 text-slate-500">
              Program inclusions, eligibility, and certificates are subject
              to applicable criteria and Terms &amp; Conditions. Employment,
              salary, stipend, and PPO are not guaranteed.
            </p>
          </div>

          {/* Floating badge */}
          <motion.div
            animate={
              reduceMotion
                ? undefined
                : { y: [0, -5, 0] }
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-3 top-12 hidden rounded-xl border border-cyan-300/20 bg-[#0B2847] px-4 py-3 shadow-xl md:block md:-right-5"
          >
            <div className="flex items-center gap-2 text-sm font-bold">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              Mentor-guided learning
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
    </section>
  );
}