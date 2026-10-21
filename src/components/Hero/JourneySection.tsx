
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
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Register",
    description: "Register and begin your journey.",
    detail: "Registration & onboarding",
    icon: Wallet,
    color: "from-cyan-400 to-teal-400",
  },
  {
    number: "02",
    title: "Get Started",
    description: "Understand your program and goals.",
    detail: "Program orientation",
    icon: GraduationCap,
    color: "from-blue-400 to-cyan-400",
  },
  {
    number: "03",
    title: "Learn Together",
    description: "Strengthen skills and collaborate.",
    detail: "Guided learning",
    icon: Users,
    color: "from-teal-300 to-emerald-400",
  },
  {
    number: "04",
    title: "Build Projects",
    description: "Apply your skills to practical work.",
    detail: "Hands-on deliverables",
    icon: Code2,
    color: "from-sky-400 to-blue-500",
  },
  {
    number: "05",
    title: "Get Certified",
    description: "Complete the program requirements.",
    detail: "Internship certificate*",
    icon: BadgeCheck,
    color: "from-emerald-300 to-teal-400",
  },
  {
    number: "06",
    title: "Explore PPO",
    description: "Potential consideration based on performance.",
    detail: "Subject to eligibility & selection",
    icon: BriefcaseBusiness,
    color: "from-cyan-300 to-blue-400",
  },
];

const outcomes = [
  {
    icon: Lightbulb,
    title: "Practical Skills",
    subtitle: "Learn by doing",
  },
  {
    icon: FolderGit2,
    title: "Project Portfolio",
    subtitle: "Show what you build",
  },
  {
    icon: Award,
    title: "Certificate",
    subtitle: "Upon completion requirements",
  },
  {
    icon: TrendingUp,
    title: "Career Readiness",
    subtitle: "Prepare for opportunities",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export default function JourneySection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="journey"
      className="relative isolate overflow-hidden bg-[#07111F] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-teal-400/10 blur-[110px]" />
        <div className="absolute -right-40 top-[30%] h-96 w-96 rounded-full bg-cyan-400/10 blur-[130px]" />
        <div className="absolute bottom-[-12rem] left-[35%] h-96 w-96 rounded-full bg-blue-500/[0.08] blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(94,234,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(94,234,212,0.3) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-300/25 bg-teal-300/[0.08] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-teal-200 sm:text-sm">
            <Sparkles size={15} />
            Your Journey
          </span>

          <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Learn.{" "}
            <span className="text-teal-300">Build.</span>{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Grow.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            Six steps from registration to practical experience and career
            opportunities.
          </p>
        </motion.div>

        {/* Registration strip */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-14 flex flex-col gap-4 rounded-2xl border border-teal-300/20 bg-gradient-to-r from-[#0D2332] via-[#0D1B2A] to-[#0C2033] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-teal-300/25 bg-teal-300/10 text-teal-200">
              <Rocket size={23} />
            </div>

            <div>
              <h3 className="font-bold text-white sm:text-lg">
                Ready to get started?
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                Register, explore your program, and start building.
              </p>
            </div>
          </div>

          <a
            href="/programs"
            className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-teal-300 px-5 py-3 text-sm font-bold text-[#07111F] transition hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-200"
          >
            Explore Programs
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </motion.div>

        {/* Journey timeline */}
        <div className="relative">
          {/* Connecting line for desktop */}
          <div
            aria-hidden="true"
            className="absolute left-[16.66%] right-[16.66%] top-[47px] hidden h-px bg-gradient-to-r from-transparent via-teal-300/50 to-cyan-300/50 lg:block"
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-9">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.07,
                  }}
                  className="group relative min-w-0"
                >
                  {/* Number and icon */}
                  <div className="relative z-10 mb-4 flex items-center justify-between">
                    <div className="flex h-[58px] w-[58px] items-center justify-center rounded-2xl border border-teal-300/25 bg-[#0D1B2A] shadow-[0_0_25px_rgba(20,184,166,0.08)] transition duration-300 group-hover:border-teal-200/60 group-hover:shadow-[0_0_30px_rgba(20,184,166,0.15)]">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${step.color} text-[#06131F] transition-transform duration-300 group-hover:scale-110`}
                      >
                        <Icon size={21} strokeWidth={2.2} />
                      </div>
                    </div>

                    <span className="text-4xl font-black tracking-tight text-white/[0.08] transition-colors duration-300 group-hover:text-teal-200/25">
                      {step.number}
                    </span>
                  </div>

                  {/* Step card */}
                  <div className="relative flex h-full min-h-[190px] flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0D1B2A]/90 p-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-teal-300/35 group-hover:bg-[#102638] sm:p-6">
                    <div
                      aria-hidden="true"
                      className={`absolute right-0 top-0 h-24 w-24 rounded-full bg-gradient-to-br ${step.color} opacity-[0.06] blur-2xl transition-opacity group-hover:opacity-20`}
                    />

                    <div className="relative">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-200">
                        STEP {step.number}
                      </p>

                      <h3 className="mt-2 text-xl font-extrabold text-white">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {step.description}
                      </p>
                    </div>

                    <div className="mt-auto flex items-center gap-2 border-t border-white/[0.07] pt-4 mt-5">
                      <CheckCircle2
                        size={16}
                        className="shrink-0 text-teal-300"
                      />
                      <span className="text-xs font-medium leading-5 text-slate-300">
                        {step.detail}
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Outcome section */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-20 sm:mt-24"
        >
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-200">
                The Outcomes
              </p>
              <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                Make Your Learning Count.
              </h3>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-400">
              Focus on skills, practical work, and evidence of what you can do.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {outcomes.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0D1B2A]/80 p-4 transition duration-300 hover:-translate-y-1 hover:border-teal-300/30 hover:bg-[#102638] sm:p-5"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-teal-300/20 bg-teal-300/[0.08] text-teal-200 transition duration-300 group-hover:bg-teal-300 group-hover:text-[#07111F]">
                    <Icon size={21} />
                  </div>

                  <h4 className="text-sm font-bold text-white sm:text-base">
                    {item.title}
                  </h4>

                  <p className="mt-1.5 text-xs leading-5 text-slate-400 sm:text-sm">
                    {item.subtitle}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* PPO note */}
        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-slate-500">
          * Internship certificate is subject to successful completion of
          applicable program requirements. PPO consideration, where offered,
          is subject to eligibility, performance, and selection; it is not
          guaranteed.
        </p>

        {/* Closing statement */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center sm:mt-16"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-2 text-sm font-semibold sm:text-base">
            <span className="text-slate-400">Your next step starts here.</span>
            <span className="text-teal-200">Build something meaningful.</span>
            <Target size={17} className="text-cyan-300" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
