
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Layers3,
  Rocket,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";

const outcomes = [
  {
    title: "Industrial Project Experience",
    description: "Work on practical development challenges",
    icon: Code2,
    color: "text-cyan-300",
    glow: "bg-cyan-400/10",
    position: "left-0 top-[12%]",
    delay: 0.1,
  },
  {
    title: "Internship Certificate",
    description: "Recognition of program completion",
    icon: BadgeCheck,
    color: "text-violet-300",
    glow: "bg-violet-400/10",
    position: "right-0 top-[12%]",
    delay: 0.3,
  },
  {
    title: "Mentor Guidance",
    description: "Learn with structured expert support",
    icon: Users,
    color: "text-emerald-300",
    glow: "bg-emerald-400/10",
    position: "left-0 bottom-[14%]",
    delay: 0.5,
  },
  {
    title: "Portfolio-Ready Projects",
    description: "Build work you can showcase",
    icon: Layers3,
    color: "text-sky-300",
    glow: "bg-sky-400/10",
    position: "right-0 bottom-[14%]",
    delay: 0.7,
  },
];

const floatingTags = [
  { label: "Industry-Ready Skills", icon: Rocket },
  { label: "Real-World Projects", icon: Workflow },
  { label: "Mentorship-Driven Learning", icon: GraduationCap },
  { label: "Industry Experience Certificate", icon: BadgeCheck },
  { label: "PPO Opportunity", icon: BriefcaseBusiness },
  
];

export default function HeroBanner() {
  const shouldReduceMotion = useReducedMotion();

  const floatAnimation = shouldReduceMotion
    ? {}
    : {
        y: [0, -7, 0],
      };

  const floatTransition = {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut" as const,
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#050B18] text-white">
      {/* Dynamic background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(109,74,255,0.16),transparent_40%),radial-gradient(ellipse_at_85%_55%,rgba(34,211,238,0.12),transparent_40%)]" />

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
          className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-violet-600/15 blur-[100px]"
          animate={
            shouldReduceMotion
              ? {}
              : { x: [0, 35, 0], y: [0, 20, 0] }
          }
          transition={{ duration: 12, repeat: Infinity }}
        />

        <motion.div
          className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-[110px]"
          animate={
            shouldReduceMotion
              ? {}
              : { x: [0, -25, 0], y: [0, -30, 0] }
          }
          transition={{ duration: 14, repeat: Infinity }}
        />

        {/* Ambient particles */}
        {[
          "left-[12%] top-[22%]",
          "left-[38%] top-[12%]",
          "right-[15%] top-[25%]",
          "left-[28%] bottom-[18%]",
          "right-[32%] bottom-[12%]",
          "right-[8%] bottom-[32%]",
        ].map((position, index) => (
          <motion.span
            key={position}
            className={`absolute ${position} h-1 w-1 rounded-full bg-cyan-200/70`}
            animate={
              shouldReduceMotion
                ? {}
                : { opacity: [0.2, 0.9, 0.2], scale: [1, 1.7, 1] }
            }
            transition={{
              duration: 3 + index * 0.5,
              repeat: Infinity,
              delay: index * 0.35,
            }}
          />
        ))}
      </div>

      <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:px-12 lg:py-20">
        {/* LEFT: Hero content */}
        <div className="relative z-10 max-w-2xl">
          <motion.div
            initial={
              shouldReduceMotion ? false : { opacity: 0, y: 12 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-400/[0.08] px-4 py-2 text-xs font-semibold tracking-wide text-violet-200 sm:text-sm"
          >
            <Sparkles size={15} className="text-cyan-300" />
            LEARN WITH PURPOSE. BUILD WITH IMPACT.
          </motion.div>

          <motion.h1
            initial={
              shouldReduceMotion ? false : { opacity: 0, y: 20 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-black leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl xl:text-[68px]"
          >
            Learn with Mentors.
            <br />
            Contribute to
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-400 bg-clip-text text-transparent">
              Real Projects.
            </span>
          </motion.h1>

          <motion.p
            initial={
              shouldReduceMotion ? false : { opacity: 0, y: 15 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg"
          >
            Turn what you learn into what you can build. Develop practical
            skills, work on meaningful projects, and take the next step
            toward your career with TriQolo.
          </motion.p>

          {/* Primary actions */}
          <motion.div
            initial={
              shouldReduceMotion ? false : { opacity: 0, y: 12 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="#internships"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-violet-600/20 transition hover:-translate-y-0.5 hover:shadow-violet-500/30"
            >
              Explore Programs
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="#how-it-works"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/[0.08]"
            >
              Discover How It Works
              <ArrowUpRight size={17} />
            </Link>
          </motion.div>

          {/* Career outcomes */}
          <motion.div
            initial={
              shouldReduceMotion ? false : { opacity: 0, y: 12 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-2.5"
          >
            {floatingTags.map((tag) => {
              const Icon = tag.icon;

              return (
                <div
                  key={tag.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-[11px] font-medium text-slate-300 sm:text-xs"
                >
                  <Icon size={14} className="text-cyan-300" />
                  {tag.label}
                </div>
              );
            })}
          </motion.div>

          <p className="mt-5 max-w-xl text-[11px] leading-5 text-slate-500">
            Certificate issuance is subject to applicable program
            requirements. PPO opportunities, where applicable, depend on
            eligibility and selection and are not guaranteed.
          </p>
        </div>

        {/* RIGHT: Custom Innovation Orbit */}
        <div className="relative mx-auto flex min-h-[480px] w-full max-w-[590px] items-center justify-center sm:min-h-[540px]">
          {/* Orbit glow */}
          <div className="absolute h-72 w-72 rounded-full bg-cyan-400/[0.07] blur-3xl sm:h-96 sm:w-96" />

          {/* Outer orbit */}
          <div className="absolute h-[320px] w-[320px] rounded-full border border-white/[0.07] sm:h-[440px] sm:w-[440px]" />

          {/* Rotating dashed orbit */}
          <motion.div
            className="absolute h-[285px] w-[285px] rounded-full border border-dashed border-cyan-300/25 sm:h-[390px] sm:w-[390px]"
            animate={shouldReduceMotion ? {} : { rotate: 360 }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <span className="absolute -top-1 left-1/2 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
            <span className="absolute bottom-12 right-2 h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_18px_rgba(167,139,250,0.9)]" />
          </motion.div>

          {/* Inner orbit */}
          <motion.div
            className="absolute h-[205px] w-[205px] rounded-full border border-violet-300/20 sm:h-[275px] sm:w-[275px]"
            animate={shouldReduceMotion ? {} : { rotate: -360 }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <span className="absolute left-5 top-8 h-1.5 w-1.5 rounded-full bg-violet-300" />
            <span className="absolute bottom-7 right-9 h-1.5 w-1.5 rounded-full bg-cyan-200" />
          </motion.div>

          {/* Central brand core */}
          <motion.div
            animate={floatAnimation}
            transition={floatTransition}
            className="relative z-10 flex h-44 w-44 flex-col items-center justify-center rounded-full border border-cyan-200/20 bg-[#09182D]/95 shadow-[0_0_70px_rgba(34,211,238,0.13)] sm:h-52 sm:w-52"
          >
            <div className="absolute inset-2 rounded-full border border-dashed border-white/[0.08]" />

            <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/25 bg-gradient-to-br from-cyan-300/15 to-violet-400/15">
              <Sparkles size={27} className="text-cyan-300" />
            </div>

            <p className="text-2xl font-black tracking-tight sm:text-3xl">
              Tri<span className="text-cyan-300">Q</span>olo
            </p>

            <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-400">
              Build Your Advantage
            </p>

            <div className="mt-3 flex items-center gap-2 text-[9px] font-bold tracking-wider">
              <span className="text-cyan-300">LEARN</span>
              <span className="text-slate-600">/</span>
              <span className="text-violet-300">BUILD</span>
              <span className="text-slate-600">/</span>
              <span className="text-emerald-300">GROW</span>
            </div>
          </motion.div>

          {/* Outcome cards */}
          {outcomes.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, scale: 0.9, y: 12 }
                }
                animate={{
                  opacity: 1,
                  scale: 1,
                  ...floatAnimation,
                }}
                transition={{
                  opacity: {
                    duration: 0.6,
                    delay: item.delay,
                  },
                  scale: {
                    duration: 0.6,
                    delay: item.delay,
                  },
                  y: {
                    ...floatTransition,
                    delay: item.delay,
                  },
                }}
                className={`absolute ${item.position} z-20 w-[158px] rounded-2xl border border-white/10 bg-[#0A172A]/95 p-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:w-[205px] sm:p-4`}
              >
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div
                    className={`shrink-0 rounded-xl ${item.glow} p-2.5 ${item.color}`}
                  >
                    <Icon size={19} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-[10px] font-bold leading-snug text-white sm:text-xs">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 text-[9px] leading-relaxed text-slate-400 sm:text-[10px]">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-3 h-0.5 overflow-hidden rounded-full bg-white/[0.06]">
                  <motion.div
                    className={`h-full w-2/3 rounded-full ${
                      item.color.includes("cyan")
                        ? "bg-cyan-300/70"
                        : item.color.includes("violet")
                          ? "bg-violet-300/70"
                          : item.color.includes("emerald")
                            ? "bg-emerald-300/70"
                            : "bg-sky-300/70"
                    }`}
                    animate={
                      shouldReduceMotion
                        ? {}
                        : { width: ["35%", "75%", "50%"] }
                    }
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: item.delay,
                    }}
                  />
                </div>
              </motion.div>
            );
          })}

          {/* PPO signal */}
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : { opacity: [0.75, 1, 0.75], y: [0, -3, 0] }
            }
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute left-1/2 top-[1%] z-20 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-violet-300/20 bg-[#11142B]/95 px-3 py-2 text-[9px] font-bold uppercase tracking-wider text-violet-200 sm:text-[10px]"
          >
            <BriefcaseBusiness size={13} className="text-violet-300" />
            PPO Opportunity
          </motion.div>

          {/* Bottom signal */}
          <div className="absolute bottom-[1%] left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-cyan-300/20 bg-[#09182D]/95 px-3 py-2 text-[9px] font-bold uppercase tracking-wider text-cyan-100 sm:text-[10px]">
            <Rocket size={13} className="text-cyan-300" />
            From Learning to Building
          </div>
        </div>
      </div>
    </section>
  );
}
