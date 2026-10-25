
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  Code2,
  FolderCheck,
  GraduationCap,
  Lightbulb,
  Rocket,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";

import { SectionLabel, PrimaryButton } from "./HeroUI";

const benefits = [
  {
    title: "Industry Projects",
    description: "Build practical solutions.",
    icon: BriefcaseBusiness,
    color: "text-cyan-300",
    glow: "bg-cyan-300/10",
  },
  {
    title: "Mentor Guidance",
    description: "Learn with expert support.",
    icon: GraduationCap,
    color: "text-violet-300",
    glow: "bg-violet-300/10",
  },
  {
    title: "Collaborative Learning",
    description: "Create and solve together.",
    icon: Users,
    color: "text-emerald-300",
    glow: "bg-emerald-300/10",
  },
  {
    title: "Practical Skills",
    description: "Apply what you learn.",
    icon: Code2,
    color: "text-sky-300",
    glow: "bg-sky-300/10",
  },
  {
    title: "Hands-On Assignments",
    description: "Turn concepts into practice.",
    icon: Workflow,
    color: "text-cyan-300",
    glow: "bg-cyan-300/10",
  },
  {
    title: "Project Deliverables",
    description: "Build work you can showcase.",
    icon: FolderCheck,
    color: "text-violet-300",
    glow: "bg-violet-300/10",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut" as const,
    },
  },
};

export default function WhyTriqoloSection() {
  const reduceMotion = useReducedMotion();

  const sectionReveal = {
    ...reveal,
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 22,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.55,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="why-Triqon"
      className="relative isolate overflow-hidden bg-[#050B18] px-5 py-20 text-white sm:px-8 sm:py-24 lg:py-28"
    >
      {/* SHARED TRI QOLO BACKGROUND */}

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
          className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-violet-600/15 blur-[110px]"
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
          "left-[10%] top-[18%]",
          "left-[38%] top-[10%]",
          "right-[12%] top-[25%]",
          "left-[20%] bottom-[14%]",
          "right-[30%] bottom-[12%]",
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

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* LEFT: INTRODUCTION */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
        >
          <SectionLabel>Why TriQolo</SectionLabel>

          <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Learn.
            <span className="text-cyan-300"> Build.</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-400 bg-clip-text text-transparent">
              Move Forward.
            </span>
          </h2>

          <p className="mt-5 max-w-md text-sm leading-7 text-slate-300 sm:text-base">
            Practical learning, real projects, and guidance designed
            to help you take your next career step.
          </p>

          {/* LEARNING JOURNEY */}

          <div className="mt-7 flex flex-wrap items-center gap-2">
            {[
              { label: "Learn", color: "text-cyan-300" },
              { label: "Build", color: "text-violet-300" },
              { label: "Showcase", color: "text-emerald-300" },
            ].map((item, index) => (
              <div key={item.label} className="flex items-center gap-2">
                <span
                  className={`rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-bold ${item.color}`}
                >
                  {item.label}
                </span>

                {index < 2 && (
                  <ArrowRight
                    size={13}
                    className="text-slate-600"
                  />
                )}
              </div>
            ))}
          </div>

          {/* CERTIFICATE AND PPO */}

          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-3 rounded-2xl border border-violet-300/15 bg-violet-300/[0.04] p-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-300/10 text-violet-300">
                <Award size={21} />
              </div>

              <div>
                <p className="text-sm font-bold text-white">
                  Internship Certificate
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Subject to completion requirements
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.04] p-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
                <Rocket size={21} />
              </div>

              <div>
                <p className="text-sm font-bold text-white">
                  PPO Opportunity
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Based on eligibility and selection
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <PrimaryButton href="#internships">
              Explore Project Tracks
            </PrimaryButton>
          </div>
        </motion.div>

        {/* RIGHT: BENEFIT ECOSYSTEM */}

        <div className="relative">
          {/* ORBIT DECORATION */}

          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-[38%] border border-cyan-300/[0.08]"
            animate={
              reduceMotion ? {} : { rotate: [0, 4, 0] }
            }
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[95%] w-[95%] -translate-x-1/2 -translate-y-1/2 rotate-6 rounded-[35%] border border-dashed border-violet-300/10"
          />

          {/* AMBIENT CORE */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.07] blur-[70px] sm:h-80 sm:w-80"
          />

          {/* BENEFIT CARDS */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: reduceMotion ? 0 : 0.09,
                },
              },
            }}
            className="relative z-10 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4"
          >
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  variants={sectionReveal}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -5,
                          transition: { duration: 0.2 },
                        }
                  }
                  className="group relative isolate flex min-h-[112px] items-center gap-3 overflow-hidden rounded-2xl border border-white/[0.09] bg-[#09182D]/85 p-4 shadow-lg shadow-black/10 backdrop-blur-xl transition-colors duration-300 hover:border-cyan-300/30 hover:bg-[#0B1E35]/95 sm:p-5"
                >
                  {/* CARD GLOW */}

                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute -right-8 -top-8 -z-10 h-24 w-24 rounded-full ${benefit.glow} blur-2xl opacity-50 transition-opacity group-hover:opacity-100`}
                  />

                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] ${benefit.glow} ${benefit.color}`}
                  >
                    <Icon size={21} strokeWidth={1.8} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-bold leading-5 text-slate-100">
                      {benefit.title}
                    </h3>

                    <p className="mt-1.5 text-xs leading-5 text-slate-400">
                      {benefit.description}
                    </p>
                  </div>

                  <Check
                    size={15}
                    className="shrink-0 text-cyan-300/70 transition-transform group-hover:scale-110 group-hover:text-cyan-200"
                  />

                  {/* BOTTOM ACCENT */}

                  <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </motion.div>
              );
            })}
          </motion.div>

          {/* FEATURED CAREER OPPORTUNITY */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={sectionReveal}
            whileHover={reduceMotion ? undefined : { y: -4 }}
            className="group relative mt-4 overflow-hidden rounded-2xl border border-cyan-300/25 bg-gradient-to-br from-[#0C2942]/95 via-[#0B2039]/95 to-[#171532]/95 p-5 shadow-[0_15px_50px_-30px_rgba(34,211,238,0.25)] sm:p-6"
          >
            <div className="pointer-events-none absolute -right-10 -top-14 h-40 w-40 rounded-full bg-violet-400/10 blur-3xl transition-colors group-hover:bg-violet-400/20" />

            <div className="relative flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                <BriefcaseBusiness size={23} />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-extrabold text-white sm:text-lg">
                    Build Your Career Advantage
                  </h3>

                  <span className="rounded-full border border-violet-300/20 bg-violet-300/[0.08] px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-violet-200">
                    Grow
                  </span>
                </div>

                <p className="mt-2 text-xs leading-6 text-slate-400 sm:text-sm">
                  Develop practical skills and create work you can
                  showcase to future employers.
                </p>
              </div>

              <Sparkles
                size={18}
                className="hidden shrink-0 text-violet-300 sm:block"
              />
            </div>

            <div className="relative mt-5 flex flex-wrap gap-2">
              {[
                "Project Experience",
                "Skill Development",
                "Career Growth",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-white/[0.08] bg-white/[0.035] px-2.5 py-1.5 text-[10px] font-semibold text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="relative mt-4 text-[10px] leading-5 text-slate-500">
              Certificate eligibility and PPO consideration depend on
              applicable requirements and selection. Neither outcome is
              guaranteed.
            </p>
          </motion.div>

          {/* BOTTOM BRAND SIGNATURE */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10 mt-6 flex items-center justify-center gap-3 text-center"
          >
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-300/20" />

            <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-slate-500 sm:text-[10px]">
              <Lightbulb size={13} className="text-cyan-300" />
              Learn With Purpose · Build With Confidence
            </div>

            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-300/20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
