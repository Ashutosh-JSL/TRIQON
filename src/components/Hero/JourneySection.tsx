
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  GraduationCap,
  Lightbulb,
  Rocket,
  Sparkles,
  Target,
  Wallet,
  Users,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Register & Begin",
    description:
      "Complete your registration and choose the learning track that matches your interests.",
    detail: "Registration fee: ₹499",
    icon: Wallet,
  },
  {
    number: "02",
    title: "Get Started",
    description:
      "Receive program guidance and batch information. Allocation is subject to availability and program terms.",
    detail: "Guided onboarding",
    icon: GraduationCap,
  },
  {
    number: "03",
    title: "Learn & Collaborate",
    description:
      "Build practical skills through learning resources, mentor guidance, assignments, and reviews.",
    detail: "Practical learning",
    icon: Users,
  },
  {
    number: "04",
    title: "Build & Demonstrate",
    description:
      "Work on your assigned project, complete tasks, and demonstrate your understanding through evaluation.",
    detail: "Project experience",
    icon: Code2,
  },
  {
    number: "05",
    title: "Show Your Progress",
    description:
      "Earn the applicable certificate after meeting the program criteria and strengthen your professional profile.",
    detail: "Showcase your skills",
    icon: Rocket,
  },
];

const opportunities = [
  {
    icon: Lightbulb,
    title: "Practical Skills",
    description: "Learn by working through real-world-inspired tasks.",
  },
  {
    icon: Code2,
    title: "Project Portfolio",
    description: "Build work you can discuss and showcase.",
  },
  {
    icon: BadgeCheck,
    title: "Certificates",
    description: "Receive the applicable certificate under program criteria.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Career Readiness",
    description: "Build experience that can support future applications.",
  },
];

export default function JourneySection() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="how-it-works"
      className="relative isolate overflow-hidden bg-[#07111F] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-24 -z-10 h-80 w-80 rounded-full bg-[#14B8A6]/10 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-[45%] -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[110px]"
      />

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#14B8A6]/25 bg-[#14B8A6]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#5EEAD4]">
            <Sparkles size={14} />
            Your Journey
          </span>

          <h2 className="mt-6 text-3xl font-black leading-tight tracking-[-0.045em] sm:text-4xl md:text-5xl">
            One starting point.
            <br />
            <span className="bg-gradient-to-r from-[#14B8A6] via-[#5EEAD4] to-cyan-300 bg-clip-text text-transparent">
              More room to grow.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#94A3B8] sm:text-base sm:leading-8">
            Start with registration, build practical skills, work on projects,
            and discover opportunities to take your next step.
          </p>
        </motion.div>

        {/* Registration starting point */}
        <motion.div
          initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.96, y: 18 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative mx-auto mb-14 max-w-3xl sm:mb-16"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-2 rounded-[30px] bg-gradient-to-r from-[#14B8A6]/15 via-cyan-400/10 to-[#14B8A6]/15 blur-xl"
          />

          <div className="relative overflow-hidden rounded-[24px] border border-[#14B8A6]/35 bg-gradient-to-br from-[#102638] via-[#0D1B2A] to-[#07111F] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)] sm:p-8">
            <div
              aria-hidden="true"
              className="absolute -right-12 -top-16 h-48 w-48 rounded-full border border-[#14B8A6]/10"
            />
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-8 h-32 w-32 rounded-full border border-[#14B8A6]/10"
            />

            <div className="relative flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        boxShadow: [
                          "0 0 0 rgba(20,184,166,0)",
                          "0 0 28px rgba(20,184,166,0.22)",
                          "0 0 0 rgba(20,184,166,0)",
                        ],
                      }
                }
                transition={{ duration: 2.8, repeat: Infinity }}
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#14B8A6]/30 bg-[#14B8A6]/10 text-[#5EEAD4]"
              >
                <Wallet size={29} />
              </motion.div>

              <div className="min-w-0 flex-1">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#5EEAD4]">
                  Your starting point
                </span>

                <h3 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
                  Get Started Today
                  <span className="text-[#5EEAD4]"></span>
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-6 text-[#94A3B8]">
                  Begin your structured learning and project journey with
                  access to the applicable program resources and activities.
                </p>
              </div>

              <div className="rounded-xl border border-[#243548] bg-[#07111F]/70 px-4 py-3 text-center">
                <span className="block text-xs font-semibold text-[#94A3B8]">
                  First step
                </span>
                <span className="mt-1 block text-sm font-extrabold text-white">
                  Start here
                </span>
              </div>
            </div>

            <div className="relative mt-6 border-t border-[#243548] pt-4">
              <p className="text-center text-xs leading-5 text-[#94A3B8] sm:text-left">
                Registration fee is governed by the published Terms &amp;
                Conditions. It does not guarantee selection, employment,
                salary, stipend, or a PPO.
              </p>
            </div>
          </div>

          {/* Connector to the journey */}
          <div className="absolute -bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center sm:-bottom-12">
            <div className="h-8 w-px bg-gradient-to-b from-[#14B8A6] to-[#14B8A6]/20 sm:h-10" />
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#14B8A6]/40 bg-[#07111F] text-[#5EEAD4] shadow-[0_0_20px_rgba(20,184,166,0.12)]">
              <ArrowDown size={15} />
            </div>
          </div>
        </motion.div>

        {/* Journey heading */}
        <div className="mb-7 flex items-center gap-3 sm:mb-8">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#243548]" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#94A3B8]">
            Your next five milestones
          </span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#243548]" />
        </div>

        {/* Animated journey timeline */}
        <div className="relative">
          {/* Desktop track */}
          <div
            aria-hidden="true"
            className="absolute left-[9%] right-[9%] top-[27px] hidden h-px bg-[#243548] lg:block"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: reduceMotion ? 0 : 1.8,
                ease: "easeInOut",
              }}
              style={{ transformOrigin: "left" }}
              className="h-full bg-gradient-to-r from-[#14B8A6] via-cyan-300 to-[#14B8A6]"
            />
          </div>

          {/* Mobile track */}
          <div
            aria-hidden="true"
            className="absolute bottom-10 left-[21px] top-7 w-px bg-[#243548] sm:left-[25px] lg:hidden"
          >
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: reduceMotion ? 0 : 1.8,
                ease: "easeInOut",
              }}
              style={{ transformOrigin: "top" }}
              className="h-full bg-gradient-to-b from-[#14B8A6] via-cyan-300 to-[#14B8A6]"
            />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-5 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  initial={{
                    opacity: 0,
                    y: reduceMotion ? 0 : 28,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: reduceMotion ? 0 : index * 0.12,
                    ease: "easeOut",
                  }}
                  whileHover={reduceMotion ? undefined : { y: -6 }}
                  className="group relative flex min-w-0 gap-4 lg:flex-col lg:gap-0"
                >
                  {/* Number node */}
                  <div className="relative z-10 flex shrink-0 flex-col items-center lg:mb-5 lg:items-start">
                    <motion.div
                      whileHover={
                        reduceMotion ? undefined : { scale: 1.08 }
                      }
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#14B8A6]/40 bg-[#0D1B2A] text-sm font-black text-[#5EEAD4] shadow-[0_0_18px_rgba(20,184,166,0.08)] transition-colors duration-300 group-hover:border-[#5EEAD4] group-hover:bg-[#14B8A6] group-hover:text-[#07111F] sm:h-[50px] sm:w-[50px]"
                    >
                      {step.number}
                    </motion.div>
                  </div>

                  {/* Card */}
                  <div className="relative flex-1 overflow-hidden rounded-2xl border border-[#243548] bg-[#0D1B2A] p-5 transition-all duration-300 group-hover:border-[#14B8A6]/50 group-hover:bg-[#102638] sm:p-6 lg:min-h-[295px] lg:p-5 xl:p-6">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-[#14B8A6] to-cyan-300 transition-transform duration-500 group-hover:scale-x-100"
                    />

                    <div className="flex items-start justify-between gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#243548] bg-[#07111F] text-[#5EEAD4] transition-colors duration-300 group-hover:border-[#14B8A6]/30 group-hover:bg-[#14B8A6]/10">
                        <Icon size={21} />
                      </div>

                      <span className="rounded-full border border-[#243548] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#64748B] transition-colors group-hover:border-[#14B8A6]/20 group-hover:text-[#5EEAD4]">
                        Step {index + 1}
                      </span>
                    </div>

                    <h3 className="mt-5 text-lg font-extrabold leading-snug text-white sm:text-xl">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#94A3B8]">
                      {step.description}
                    </p>

                    <div className="mt-5 flex items-center gap-2 border-t border-[#243548] pt-4">
                      <CheckCircle2
                        size={15}
                        className="shrink-0 text-[#14B8A6]"
                      />
                      <span className="text-xs font-semibold text-[#CBD5E1]">
                        {step.detail}
                      </span>
                    </div>

                    {index < steps.length - 1 && (
                      <div
                        aria-hidden="true"
                        className="absolute right-4 top-1/2 hidden -translate-y-1/2 text-[#14B8A6]/50 lg:block"
                      >
                        <ArrowRight size={15} />
                      </div>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Opportunities showcase */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="relative mt-16 overflow-hidden rounded-[28px] border border-[#14B8A6]/25 bg-gradient-to-br from-[#0D1B2A] via-[#0A1A29] to-[#07111F] p-6 sm:mt-20 sm:p-9 lg:p-10"
        >
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#14B8A6]/10 blur-[80px]"
          />

          <div className="relative grid gap-8 lg:grid-cols-[0.85fr_1.5fr] lg:items-center lg:gap-12">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#14B8A6]/25 bg-[#14B8A6]/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#5EEAD4]">
                <Sparkles size={13} />
                What You Can Build
              </span>

              <h3 className="mt-5 text-2xl font-black leading-tight tracking-tight sm:text-3xl">
                The fee is the beginning.
                <span className="mt-1 block bg-gradient-to-r from-[#14B8A6] to-cyan-300 bg-clip-text text-transparent">
                  Your effort shapes what follows.
                </span>
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#94A3B8]">
                Develop skills, create project work, receive applicable
                recognition, and prepare for future opportunities through
                consistent participation.
              </p>

              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#5EEAD4]">
                <Target size={17} />
                Learn. Apply. Demonstrate.
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {opportunities.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: reduceMotion ? 0 : 14,
                    }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.45,
                      delay: reduceMotion ? 0 : index * 0.1,
                    }}
                    whileHover={reduceMotion ? undefined : { y: -3 }}
                    className="group rounded-2xl border border-[#243548] bg-[#07111F]/70 p-5 transition-colors duration-300 hover:border-[#14B8A6]/40 hover:bg-[#102638]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#14B8A6]/10 text-[#5EEAD4] transition-colors group-hover:bg-[#14B8A6] group-hover:text-[#07111F]">
                      <Icon size={20} />
                    </div>

                    <h4 className="mt-4 font-bold text-white">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-xs leading-6 text-[#94A3B8]">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="relative mt-8 flex items-start gap-3 border-t border-[#243548] pt-5">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#64748B]/40 text-[#94A3B8]">
              <span className="text-xs font-bold">i</span>
            </span>

            <p className="text-xs leading-6 text-[#94A3B8]">
              Outcomes depend on participation, performance, eligibility, and
              applicable program terms. Certificates are subject to completion
              criteria. Employment, salary, stipend, placement, and PPO are not
              guaranteed; any such opportunity requires separate eligibility
              and selection.
            </p>
          </div>
        </motion.div>

        {/* Closing line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 flex flex-col items-center gap-3 text-center sm:mt-12"
        >
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#14B8A6]" />
            <span className="h-px w-10 bg-gradient-to-r from-[#14B8A6]/50 to-transparent" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#5EEAD4]">
              Your next chapter starts with action
            </span>
            <span className="h-px w-10 bg-gradient-to-l from-[#14B8A6]/50 to-transparent" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#14B8A6]" />
          </div>

          <p className="max-w-xl text-sm leading-6 text-[#94A3B8]">
            Make the most of the learning experience by showing up, building,
            and applying what you learn.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
