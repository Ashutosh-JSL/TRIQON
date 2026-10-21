
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Code2,
  FileText,
  GraduationCap,
  Layers3,
  Sparkles,
  Users,
  Zap,
  ChartNoAxesColumnIncreasing,
} from "lucide-react";
import { SectionLabel, PrimaryButton } from "./HeroUI";

const benefits = [
  {
    title: "Industry Projects",
    description: "Work on real industry problems.",
    icon: FileText,
  },
  {
    title: "Mentor Guidance",
    description: "Learn with experienced mentors.",
    icon: GraduationCap,
  },
  {
    title: "Team Collaboration",
    description: "Build, contribute and grow together.",
    icon: Users,
  },
];

const tasks = [
  { title: "Requirement Analysis", status: "Completed", progress: 100 },
  { title: "Development", status: "In Progress", progress: 65 },
  { title: "Final Submission", status: "Upcoming", progress: 15 },
];

export default function HeroBanner() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#04172D] text-white"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/15 blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-32 -z-10 h-80 w-80 rounded-full bg-blue-500/15 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.055]"
        style={{
          backgroundImage:
            "radial-gradient(#72F7FF 0.8px, transparent 0.8px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="mx-auto max-w-7xl px-5 pb-14 pt-9 sm:px-8 sm:pb-20 sm:pt-14 lg:px-12 lg:pt-16">

        {/* INTRO */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <SectionLabel>
              <span className="inline-flex items-center justify-center gap-2">
                <Sparkles size={16} />
                Mentor-Guided Industry Projects
              </span>
            </SectionLabel>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mt-8 text-xs font-extrabold tracking-[0.3em] text-cyan-300 sm:text-sm"
          >
            TRIQOLO 
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="mx-auto mt-5 max-w-4xl text-4xl font-black leading-[1.08] tracking-[-0.045em] sm:text-6xl lg:text-7xl"
          >
            Learn with Mentors.
            <br />
            Contribute to
            <span className="block bg-gradient-to-r from-cyan-300 via-[#72F7FF] to-white bg-clip-text pb-2 text-transparent">
              Real Projects.
            </span>
          </motion.h1>
        </div>

        {/* CENTRAL GRAPHICAL DASHBOARD */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2 }}
          className="relative mx-auto mt-10 w-full max-w-5xl sm:mt-14"
        >
          {/* Ambient glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-[10%] top-[20%] -z-10 h-2/3 rounded-full bg-cyan-400/10 blur-[80px]"
          />

          {/* Floating journey chart */}
          <motion.div
            animate={
              reduceMotion ? undefined : { y: [0, -6, 0] }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-1 top-2 z-20 hidden w-48 rounded-2xl border border-cyan-300/30 bg-[#08223D]/95 p-4 shadow-xl shadow-cyan-950/30 sm:block md:right-0 md:top-5 md:w-56"
          >
            <p className="text-xs font-bold text-slate-200">
              Your Learning Journey
            </p>

            <div className="mt-4 flex h-20 items-end gap-2">
              {[28, 43, 38, 58, 70, 88].map((height, index) => (
                <motion.div
                  key={index}
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{
                    duration: 0.7,
                    delay: reduceMotion ? 0 : 0.3 + index * 0.08,
                  }}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-cyan-600 to-cyan-300"
                />
              ))}
            </div>

            <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-cyan-300">
              <ChartNoAxesColumnIncreasing size={14} />
              Learn · Build · Grow
            </div>
          </motion.div>

          {/* Floating benefit card */}
          <div className="absolute -left-1 top-[27%] z-20 hidden w-44 rounded-2xl border border-cyan-300/25 bg-[#08223D]/95 p-3 shadow-xl md:block">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
                <FileText size={21} />
              </span>
              <div>
                <p className="text-xs font-bold">Real Projects</p>
                <p className="mt-1 text-[10px] text-slate-400">
                  Hands-on practice
                </p>
              </div>
            </div>
          </div>

          {/* Main dashboard */}
          <div className="relative mx-auto w-full max-w-3xl rounded-[1.6rem] border border-cyan-300/25 bg-gradient-to-br from-[#0B2847] via-[#081E39] to-[#06162B] p-3 shadow-2xl shadow-black/40 sm:rounded-[2rem] sm:p-5 md:w-[83%]">

            {/* Browser header */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 sm:pb-4">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-rose-400" />
                <span className="h-2 w-2 rounded-full bg-amber-300" />
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                <span className="text-[9px] font-semibold text-slate-300 sm:text-xs">
                  Project Workspace
                </span>
              </div>

              <Layers3 size={17} className="text-cyan-300" />
            </div>

            {/* Dashboard content */}
            <div className="grid grid-cols-[40px_minmax(0,1fr)] gap-3 pt-4 sm:grid-cols-[54px_minmax(0,1fr)] sm:gap-5 sm:pt-5">

              {/* Sidebar */}
              <div className="flex flex-col items-center gap-4 rounded-xl border border-white/[0.06] bg-[#04172D]/70 py-4 sm:gap-5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-300/15 text-cyan-300">
                  <Code2 size={17} />
                </div>

                <Layers3 size={17} className="text-slate-500" />
                <Users size={17} className="text-slate-500" />
                <FileText size={17} className="text-slate-500" />
              </div>

              {/* Main workspace */}
              <div className="min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-300 sm:text-xs">
                      Project Dashboard
                    </p>

                    <h2 className="mt-1 text-lg font-black sm:text-2xl">
                      Build Something Real.
                    </h2>

                    <p className="mt-1 text-[10px] text-slate-400 sm:text-sm">
                      Turn ideas into practical experience.
                    </p>
                  </div>

                  <span className="hidden items-center gap-1.5 rounded-full border border-emerald-300/20 bg-emerald-300/[0.07] px-3 py-1.5 text-[10px] font-semibold text-emerald-300 sm:inline-flex">
                    <Check size={12} />
                    Learning in progress
                  </span>
                </div>

                {/* Project preview */}
                <div className="mt-4 grid grid-cols-[0.8fr_1.2fr] gap-3 sm:mt-5 sm:gap-4">
                  <div className="relative flex min-h-28 items-center justify-center overflow-hidden rounded-xl border border-cyan-300/15 bg-gradient-to-br from-[#10486A] to-[#071B32] sm:min-h-36">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage:
                          "linear-gradient(135deg, transparent 48%, #72F7FF 49%, transparent 50%)",
                        backgroundSize: "24px 24px",
                      }}
                    />

                    <motion.div
                      animate={
                        reduceMotion
                          ? undefined
                          : { y: [0, -4, 0], rotate: [0, 2, 0] }
                      }
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/40 bg-cyan-300/10 text-cyan-300 shadow-lg shadow-cyan-500/10 sm:h-20 sm:w-20"
                    >
                      <Code2 size={34} strokeWidth={1.5} />
                    </motion.div>
                  </div>

                  <div className="flex flex-col justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] p-3 sm:p-4">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-[10px] font-bold sm:text-sm">
                        Project Progress
                      </p>
                      <Zap size={15} className="text-cyan-300" />
                    </div>

                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/[0.08]">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "65%" }}
                        transition={{
                          duration: reduceMotion ? 0 : 1.1,
                          delay: 0.5,
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-[#72F7FF]"
                      />
                    </div>

                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-[9px] text-slate-400 sm:text-xs">
                        Skills in action
                      </span>
                      <span className="text-[10px] font-bold text-cyan-300 sm:text-xs">
                        65%
                      </span>
                    </div>

                    <div className="mt-4 flex gap-1.5">
                      {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                        <span
                          key={item}
                          className={`h-1.5 flex-1 rounded-full ${
                            item < 6 ? "bg-cyan-300/70" : "bg-white/10"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project task list */}
                <div className="mt-4 rounded-xl border border-white/[0.07] bg-[#04172D]/45 p-3 sm:mt-5 sm:p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-xs font-extrabold sm:text-sm">
                      Project Tasks
                    </h3>
                    <span className="text-[9px] font-semibold text-slate-500 sm:text-xs">
                      YOUR JOURNEY
                    </span>
                  </div>

                  <div className="space-y-2">
                    {tasks.map((task, index) => (
                      <div
                        key={task.title}
                        className="flex items-center gap-2.5 rounded-lg border border-white/[0.05] bg-white/[0.025] px-2.5 py-2 sm:gap-3 sm:px-3"
                      >
                        <span
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                            index === 0
                              ? "border-emerald-300/40 bg-emerald-300/15 text-emerald-300"
                              : index === 1
                                ? "border-cyan-300/50 text-cyan-300"
                                : "border-slate-500/50 text-slate-500"
                          }`}
                        >
                          {index === 0 ? (
                            <Check size={11} />
                          ) : (
                            <span className="h-1.5 w-1.5 rounded-full bg-current" />
                          )}
                        </span>

                        <span className="min-w-0 flex-1 truncate text-[10px] font-medium text-slate-200 sm:text-xs">
                          {task.title}
                        </span>

                        <span
                          className={`shrink-0 rounded-full px-2 py-1 text-[8px] font-bold sm:text-[10px] ${
                            index === 0
                              ? "bg-emerald-300/10 text-emerald-300"
                              : index === 1
                                ? "bg-cyan-300/10 text-cyan-200"
                                : "bg-white/[0.05] text-slate-400"
                          }`}
                        >
                          {task.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom dashboard strip */}
            <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/[0.08] pt-3 sm:mt-5 sm:pt-4">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-300">
                  <Sparkles size={16} />
                </span>

                <div>
                  <p className="text-[10px] font-bold sm:text-xs">
                    Keep Moving Forward
                  </p>
                  <p className="text-[9px] text-slate-500 sm:text-[10px]">
                    Learn · Apply · Improve
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 text-[10px] font-bold text-cyan-300 sm:text-xs">
                Explore
                <ArrowRight size={13} />
              </div>
            </div>
          </div>

          {/* Floating mobile-friendly decorative accent */}
          <div className="absolute -bottom-3 left-4 z-10 flex items-center gap-2 rounded-xl border border-cyan-300/25 bg-[#08223D] px-3 py-2 shadow-xl sm:bottom-5 sm:left-0">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-300">
              <Code2 size={15} />
            </span>
            <span className="text-[10px] font-bold text-slate-200 sm:text-xs">
              Learn by Building
            </span>
          </div>
        </motion.div>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-12 max-w-3xl text-center text-base leading-7 text-slate-300 sm:mt-14 sm:text-lg sm:leading-8"
        >
          Build practical skills through guided, industry-based projects,
          mentor support, and collaborative learning.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-7 flex max-w-3xl flex-col gap-3 sm:mt-8 sm:flex-row"
        >
          <div className="flex-1 [&_a]:!flex [&_a]:!min-h-[58px] [&_a]:!w-full [&_a]:!items-center [&_a]:!justify-center [&_a]:!rounded-2xl [&_a]:!text-base [&_a]:!font-extrabold">
            <PrimaryButton href="#internships">
              <span className="inline-flex items-center justify-center gap-3">
                Explore Programs
                <ArrowRight size={21} />
              </span>
            </PrimaryButton>
          </div>

          <a
            href="#how-it-works"
            className="group flex min-h-[58px] flex-1 items-center justify-center gap-3 rounded-2xl border border-cyan-300/30 bg-white/[0.015] px-6 py-4 text-base font-bold text-white transition duration-300 hover:border-cyan-300/70 hover:bg-cyan-300/[0.06]"
          >
            How It Works
            <ArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </motion.div>

        {/* BENEFIT CARDS */}
        <div className="mt-12 grid grid-cols-1 gap-3 sm:mt-14 sm:grid-cols-3 sm:gap-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 12,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: reduceMotion ? 0 : index * 0.1,
                }}
                whileHover={
                  reduceMotion ? undefined : { y: -4 }
                }
                className="group rounded-2xl border border-cyan-300/15 bg-white/[0.025] p-4 transition-colors hover:border-cyan-300/35 hover:bg-cyan-300/[0.035] sm:p-5"
              >
                <div className="flex items-start gap-3 sm:flex-col sm:gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-300/25 bg-cyan-300/[0.08] text-cyan-300 transition-colors group-hover:bg-cyan-300/15">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3 className="text-sm font-extrabold sm:text-base">
                      {benefit.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-slate-400 sm:text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
    </section>
  );
}
