
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  Code2,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { fadeUp, stagger } from "./hero-data";
import { SectionLabel, PrimaryButton } from "./HeroUI";

const learningStages = [
  {
    number: "01",
    title: "Learn Industry Skills",
    subtitle: "Build your foundation",
    icon: GraduationCap,
  },
  {
    number: "02",
    title: "Work on Real Projects",
    subtitle: "Apply what you learn",
    icon: Code2,
  },
  {
    number: "03",
    title: "Showcase Your Work",
    subtitle: "Prepare for career opportunities",
    icon: BriefcaseBusiness,
  },
];

const programBenefits = [
  "Industry-inspired projects",
  "Mentor guidance",
  "Practical assignments",
  "Career preparation",
];

export default function HeroBanner() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-gradient-to-br from-[#032B3E] via-[#042B57] to-[#02152B] text-white"
    >
      {/* Animated background */}
      <motion.div
        aria-hidden="true"
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, 22, 0],
                y: [0, -18, 0],
                scale: [1, 1.08, 1],
              }
        }
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-32 -top-32 -z-10 h-[440px] w-[440px] rounded-full bg-[#22E3D6]/10 blur-[100px]"
      />

      <motion.div
        aria-hidden="true"
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, -20, 0],
                y: [0, 20, 0],
              }
        }
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -bottom-40 left-0 -z-10 h-[420px] w-[420px] rounded-full bg-blue-500/15 blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(#72F7FF 0.7px, transparent 0.7px)",
          backgroundSize: "25px 25px",
        }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-12 lg:py-24">
        {/* LEFT: Main hero content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative z-10"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55 }}
          >
            <SectionLabel>
              Industry Projects • Practical Learning
            </SectionLabel>
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            className="mt-8 text-sm font-bold tracking-[0.24em] text-[#A1B5D8]"
          >
            TRIQON INDIA
          </motion.p>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-4 max-w-3xl text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-7xl"
          >
            Learn the Skills.
            <span className="block">Build Real Projects.</span>
            <span className="mt-1 block bg-gradient-to-r from-[#22E3D6] via-[#72F7FF] to-white bg-clip-text pb-2 text-transparent">
              Get Ready for Industry.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-6 max-w-xl text-base leading-8 text-[#D4E3FF] sm:text-lg"
          >
            Bridge the gap between classroom learning and industry
            expectations through practical projects, mentor guidance,
            and career-focused learning designed to help you demonstrate
            your skills.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <PrimaryButton href="#internships">
              Explore Programs
            </PrimaryButton>

            <a
              href="#how-it-works"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-[#D4E3FF] transition-all duration-300 hover:border-[#22E3D6]/40 hover:bg-[#22E3D6]/[0.07] hover:text-[#72F7FF] active:scale-[0.98]"
            >
              See How It Works
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          {/* Key benefits */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-9 flex flex-wrap gap-x-5 gap-y-3 text-xs font-semibold text-[#A1B5D8] sm:gap-x-6"
          >
            {programBenefits.map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#22E3D6]/10">
                  <Check size={11} className="text-[#22E3D6]" />
                </span>
                {item}
              </span>
            ))}
          </motion.div>

          {/* Supporting trust message */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-8 flex items-start gap-3 border-l-2 border-[#22E3D6]/40 pl-4"
          >
            <ShieldCheck
              size={19}
              className="mt-0.5 shrink-0 text-[#22E3D6]"
            />
            <p className="max-w-lg text-xs leading-6 text-[#A1B5D8]">
              Structured learning, practical milestones, and program
              eligibility explained through the applicable terms.
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT: Animated internship journey card */}
        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 25,
            scale: reduceMotion ? 1 : 0.96,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="relative mx-auto w-full max-w-md lg:mt-3"
        >
          {/* Card glow */}
          <motion.div
            aria-hidden="true"
            animate={
              reduceMotion
                ? undefined
                : {
                    opacity: [0.4, 0.75, 0.4],
                    scale: [0.98, 1.02, 0.98],
                  }
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-[#22E3D6]/40 via-blue-500/15 to-cyan-300/30 blur-xl"
          />

          <div className="relative overflow-hidden rounded-[2rem] border border-[#22E3D6]/25 bg-[rgba(9,24,55,0.93)] p-5 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:p-7">
            {/* Decorative circles */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-[#22E3D6]/10"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full border border-[#22E3D6]/10"
            />

            {/* Card heading */}
            <div className="relative flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A1B5D8]">
                  Your industry journey
                </p>

                <h2 className="mt-2 text-xl font-extrabold sm:text-2xl">
                  From Learning to{" "}
                  <span className="text-[#72F7FF]">Doing.</span>
                </h2>

                <p className="mt-2 text-xs leading-5 text-[#A1B5D8]">
                  Turn knowledge into demonstrable practical experience.
                </p>
              </div>

              <motion.div
                animate={
                  reduceMotion ? undefined : { rotate: [0, 8, -8, 0] }
                }
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#22E3D6]/25 bg-[#22E3D6]/10 text-[#22E3D6]"
              >
                <Zap size={24} />
              </motion.div>
            </div>

            {/* Registration fee */}
            <div className="relative mt-7 overflow-hidden rounded-2xl border border-[#22E3D6]/20 bg-gradient-to-br from-[#22E3D6]/10 via-[#22E3D6]/[0.04] to-blue-500/[0.06] p-5 sm:p-6">
              <motion.div
                aria-hidden="true"
                animate={
                  reduceMotion ? undefined : { x: ["-120%", "220%"] }
                }
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatDelay: 1.5,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute inset-y-0 w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
              />

              <div className="relative flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-[#A1B5D8]">
                    Registration fee
                  </p>

                  <div className="mt-1 flex flex-wrap items-baseline gap-x-2">
                    <span className="text-5xl font-black tracking-tight text-white sm:text-6xl">
                      ₹499
                    </span>

                    <span className="text-xs text-[#A1B5D8]">
                      per program
                    </span>
                  </div>
                </div>

                <motion.div
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          boxShadow: [
                            "0 0 0 rgba(34,227,214,0)",
                            "0 0 22px rgba(34,227,214,0.2)",
                            "0 0 0 rgba(34,227,214,0)",
                          ],
                        }
                  }
                  transition={{ duration: 2.8, repeat: Infinity }}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#22E3D6]/25 bg-[#22E3D6]/10 text-[#72F7FF]"
                >
                  <Sparkles size={22} />
                </motion.div>
              </div>

              <div className="relative mt-4 inline-flex items-center gap-2 rounded-full bg-[#22E3D6]/10 px-3 py-1.5 text-xs font-bold text-[#22E3D6]">
                <span className="relative flex h-2 w-2">
                  <motion.span
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            scale: [1, 1.8, 1],
                            opacity: [1, 0, 1],
                          }
                    }
                    transition={{ duration: 1.8, repeat: Infinity }}
                    className="absolute inset-0 rounded-full bg-[#22E3D6]"
                  />

                  <span className="relative m-auto h-1.5 w-1.5 rounded-full bg-[#22E3D6]" />
                </span>

                Your journey starts here
              </div>
            </div>

            {/* Connected learning stages */}
            <div className="mt-7">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#A1B5D8]">
                  Your path to practice
                </p>

                <span className="text-[10px] font-semibold text-[#72F7FF]">
                  LEARN → BUILD → GROW
                </span>
              </div>

              <div className="relative mt-5">
                <div
                  aria-hidden="true"
                  className="absolute bottom-5 left-[21px] top-5 w-px bg-[#22E3D6]/15"
                />

                <motion.div
                  aria-hidden="true"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{
                    duration: reduceMotion ? 0 : 1.6,
                    delay: 0.6,
                    ease: "easeInOut",
                  }}
                  style={{ transformOrigin: "top" }}
                  className="absolute bottom-5 left-[21px] top-5 w-px bg-gradient-to-b from-[#22E3D6] via-cyan-300/70 to-[#22E3D6]/20"
                />

                <div className="space-y-3">
                  {learningStages.map((stage, index) => {
                    const Icon = stage.icon;

                    return (
                      <motion.div
                        key={stage.number}
                        initial={{
                          opacity: 0,
                          x: reduceMotion ? 0 : 14,
                        }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: reduceMotion ? 0 : 0.5 + index * 0.18,
                        }}
                        className="group relative flex items-center gap-3 rounded-xl border border-white/[0.04] bg-white/[0.025] p-3 transition-colors duration-300 hover:border-[#22E3D6]/20 hover:bg-[#22E3D6]/[0.04]"
                      >
                        <motion.div
                          animate={
                            reduceMotion
                              ? undefined
                              : {
                                  boxShadow: [
                                    "0 0 0 rgba(34,227,214,0)",
                                    "0 0 16px rgba(34,227,214,0.15)",
                                    "0 0 0 rgba(34,227,214,0)",
                                  ],
                                }
                          }
                          transition={{
                            duration: 3,
                            delay: index * 0.4,
                            repeat: Infinity,
                          }}
                          className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#22E3D6]/20 bg-[#0A2140] text-[#72F7FF] transition-colors group-hover:bg-[#22E3D6]/10"
                        >
                          <Icon size={20} />
                        </motion.div>

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-sm font-bold text-white">
                              {stage.title}
                            </h3>

                            <span className="text-[10px] font-bold text-[#22E3D6]/70">
                              {stage.number}
                            </span>
                          </div>

                          <p className="mt-1 text-xs leading-5 text-[#A1B5D8]">
                            {stage.subtitle}
                          </p>
                        </div>

                        <ArrowUpRight
                          size={16}
                          className="shrink-0 text-[#54718F] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#72F7FF]"
                        />
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Final value proposition */}
            <motion.div
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 12,
              }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="relative mt-5 overflow-hidden rounded-xl border border-[#22E3D6]/20 bg-gradient-to-r from-[#22E3D6]/10 to-blue-500/[0.06] p-4"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#22E3D6]/10 text-[#72F7FF]">
                  <Target size={19} />
                </div>

                <div>
                  <p className="text-sm font-bold text-white">
                    Make your skills visible
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#A1B5D8]">
                    Build project experience you can showcase while preparing
                    for future career opportunities.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Terms disclaimer */}
            <div className="mt-5 border-t border-white/10 pt-4 text-[11px] leading-5 text-[#A1B5D8]">
              Program inclusions, eligibility, and certificates are subject
              to applicable criteria and Terms &amp; Conditions. Employment,
              salary, stipend, and PPO are not guaranteed.
            </div>
          </div>

          {/* Floating badge: top right */}
          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-2 top-16 hidden rounded-xl border border-[#22E3D6]/20 bg-[#0A2140] px-4 py-3 shadow-xl shadow-black/20 sm:block md:-right-7"
          >
            <div className="flex items-center gap-2 text-sm font-bold">
              <span className="h-2 w-2 rounded-full bg-[#22E3D6]" />
              Learn by doing
            </div>
          </motion.div>

          {/* Floating badge: bottom left */}
          <motion.div
            animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
            className="absolute -bottom-5 -left-2 hidden rounded-xl border border-[#22E3D6]/20 bg-[#0A2140] px-4 py-3 shadow-xl shadow-black/20 sm:block md:-left-7"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#22E3D6]/10 text-[#72F7FF]">
                <BadgeCheck size={19} />
              </div>

              <div>
                <p className="text-xs font-bold text-white">
                  Practical experience
                </p>

                <p className="mt-0.5 text-[10px] text-[#A1B5D8]">
                  Learn. Build. Demonstrate.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#22E3D6]/40 to-transparent" />
    </section>
  );
}
