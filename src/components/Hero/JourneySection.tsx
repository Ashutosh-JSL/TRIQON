"use client";

import { motion } from "framer-motion";
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
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Register & Begin",
    description:
      "Complete your registration and take the first step toward your industrial project internship.",
    detail: "Registration & onboarding",
    icon: Wallet,
  },
  {
    number: "02",
    title: "Get Started",
    description:
      "Understand the program structure, project expectations, and the skills you will develop.",
    detail: "Program orientation",
    icon: GraduationCap,
  },
  {
    number: "03",
    title: "Learn & Collaborate",
    description:
      "Learn with guidance, strengthen your technical foundation, and collaborate with your peers.",
    detail: "Guided learning experience",
    icon: Users,
  },
  {
    number: "04",
    title: "Build & Demonstrate",
    description:
      "Apply your learning to practical project work and demonstrate your understanding through deliverables.",
    detail: "Hands-on project work",
    icon: Code2,
  },
  {
    number: "05",
    title: "Earn Your Internship Certificate",
    description:
      "Complete the program requirements and receive recognition for your internship journey.",
    detail: "2-Month Industrial Project Internship Certificate",
    icon: BadgeCheck,
  },
  {
    number: "06",
    title: "PPO Opportunity",
    description:
      "Eligible participants may be considered for a Pre-Placement Offer based on performance and selection criteria.",
    detail: "Subject to eligibility & selection",
    icon: BriefcaseBusiness,
  },
];

const opportunities = [
  {
    icon: Lightbulb,
    title: "Practical Skills",
    description:
      "Develop relevant skills through structured learning and practical project activities.",
  },
  {
    icon: FolderGit2,
    title: "Project Portfolio",
    description:
      "Build project experience that you can discuss and demonstrate in future interviews.",
  },
  {
    icon: Award,
    title: "Certificates",
    description:
      "Receive an internship certificate upon successful completion of the applicable program requirements.",
  },
  {
    icon: TrendingUp,
    title: "Career Readiness",
    description:
      "Improve your confidence, problem-solving approach, and readiness for professional opportunities.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function JourneySection() {
  return (
    <section
      id="journey"
      className="relative overflow-hidden bg-[#07111F] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#14B8A6]/10 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-[35%] h-96 w-96 rounded-full bg-[#14B8A6]/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#14B8A6]/30 bg-[#14B8A6]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#5EEAD4] sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-[#14B8A6]" />
            Your Journey
          </span>

          <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            From Learning to{" "}
            <span className="text-[#5EEAD4]">
              Career Opportunities
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Follow a structured journey designed to help you learn, work on
            practical projects, demonstrate your skills, and prepare for
            professional opportunities.
          </p>
        </motion.div>

        {/* Registration information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col gap-5 rounded-2xl border border-[#14B8A6]/25 bg-[#0D1B2A]/90 p-5 sm:mb-14 sm:flex-row sm:items-center sm:justify-between sm:p-7"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#14B8A6]/30 bg-[#14B8A6]/10">
              <Wallet className="h-6 w-6 text-[#5EEAD4]" />
            </div>

            <div>
              <h3 className="text-lg font-bold text-white sm:text-xl">
                Start Your Journey
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                Complete registration and follow the program instructions to
                begin your two-month industrial project internship journey.
                Please review the program terms and conditions before
                registering.
              </p>
            </div>
          </div>

          <ArrowRight className="hidden h-6 w-6 shrink-0 text-[#5EEAD4] sm:block" />
        </motion.div>

        {/* Journey timeline */}
        <div className="relative">
          {/* Desktop timeline */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[25px] hidden h-px bg-gradient-to-r from-transparent via-[#14B8A6]/50 to-transparent xl:block"
          />

          {/* Mobile and tablet timeline */}
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-[21px] top-8 w-px bg-gradient-to-b from-[#14B8A6]/50 via-[#14B8A6]/20 to-transparent xl:hidden"
          />

          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-6 xl:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.07,
                  }}
                  className="relative flex min-w-0 flex-col"
                >
                  {/* Step number: consistent styling for all six steps */}
                  <div className="relative z-10 mb-4 flex h-[50px] w-[50px] items-center justify-center rounded-xl border border-[#14B8A6]/40 bg-[#0D1B2A] text-sm font-black text-[#5EEAD4] shadow-[0_0_18px_rgba(20,184,166,0.08)] transition-all duration-300 hover:border-[#5EEAD4] hover:bg-[#14B8A6] hover:text-[#07111F]">
                    {step.number}
                  </div>

                  {/* Step card: consistent styling for all six steps */}
                  <div className="relative flex min-w-0 flex-1 flex-col overflow-hidden rounded-2xl border border-[#14B8A6]/20 bg-[#0D1B2A] p-5 transition-all duration-300 hover:border-[#14B8A6]/50 hover:bg-[#102638] sm:p-6 xl:min-h-[330px] xl:p-4 2xl:p-5">
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-[#14B8A6]/25 bg-[#14B8A6]/10">
                      <Icon className="h-5 w-5 text-[#5EEAD4]" />
                    </div>

                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#5EEAD4]">
                      STEP {step.number}
                    </p>

                    <h3 className="text-base font-extrabold leading-snug text-white sm:text-lg xl:text-base 2xl:text-lg">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {step.description}
                    </p>

                    <div className="mt-auto pt-5">
                      <div className="flex items-start gap-2 rounded-xl border border-[#14B8A6]/15 bg-[#07111F]/70 p-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#5EEAD4]" />

                        <p className="text-xs font-semibold leading-5 text-slate-300">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Opportunities section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-20 sm:mt-24"
        >
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#5EEAD4]">
              What You Can Gain
            </p>

            <h3 className="mt-4 text-2xl font-black tracking-tight text-white sm:text-3xl">
              More Than Just an Internship
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              Focus on building practical knowledge, project experience, and
              skills that can support your professional growth.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {opportunities.map((item, index) => {
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
                  className="rounded-2xl border border-white/10 bg-[#0D1B2A]/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#14B8A6]/40 hover:bg-[#102638] sm:p-6"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[#14B8A6]/25 bg-[#14B8A6]/10">
                    <Icon className="h-5 w-5 text-[#5EEAD4]" />
                  </div>

                  <h4 className="text-base font-bold text-white">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Closing message */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center sm:mt-16"
        >
          <p className="text-sm leading-7 text-slate-400 sm:text-base">
            Your journey starts with learning.{" "}
            <span className="font-semibold text-[#5EEAD4]">
              Your growth comes from what you build.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}