
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Workflow,
  Rocket,
  Clock3,
  Users,
  FileCheck2,
  Target,
  Sparkles,
  Code2,
  BarChart3,
  Bot,
  Check,
  Lightbulb,
  Cpu,
  Database,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const REGISTER_URL =
  "/contact?interest=AI%20%26%20Emerging%20Technology";

const benefits = [
  { icon: Clock3, title: "32+ Hours", text: "Practical learning" },
  { icon: Users, title: "Weekly", text: "Live sessions" },
  { icon: Target, title: "2 Months", text: "Project internship" },
  { icon: FileCheck2, title: "Certificate", text: "Subject to criteria" },
];

const learning = [
  {
    icon: BrainCircuit,
    title: "AI Application Development",
    text: "Explore how AI capabilities can be used to build practical applications.",
  },
  {
    icon: Workflow,
    title: "Industry-Based Projects",
    text: "Work on industry-inspired problem statements and develop solution-oriented projects.",
  },
  {
    icon: Rocket,
    title: "Implementation & Testing",
    text: "Apply your learning, test project functionality, and improve your solutions.",
  },
];

const projects = [
  {
    icon: Bot,
    title: "AI-Powered Applications",
    text: "Explore applications that use AI to support practical tasks.",
    color: "text-cyan-300",
    glow: "from-cyan-500/20",
  },
  {
    icon: BarChart3,
    title: "Intelligent Data Analysis",
    text: "Explore how AI can help interpret information and generate useful insights.",
    color: "text-violet-300",
    glow: "from-violet-500/20",
  },
  {
    icon: Workflow,
    title: "AI Workflow Solutions",
    text: "Investigate AI-driven workflows for everyday business challenges.",
    color: "text-emerald-300",
    glow: "from-emerald-500/20",
  },
];

export default function AIEmergingTechnologyPage() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen overflow-hidden bg-[#070A17] text-white selection:bg-violet-500/30">
      <Navbar />

      {/* HERO */}
      <section className="relative px-4 pb-12 pt-12 sm:px-6 sm:pb-16 sm:pt-16 lg:px-8">
        <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-violet-600/20 blur-[110px]" />
        <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="mb-7 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
            >
              <ArrowRight className="rotate-180" size={15} />
              Back to home
            </Link>

            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-400/[0.08] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-violet-200">
              <Sparkles size={14} />
              TRIQUON INDIA · AI Project Internship
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Build AI Projects.
              <br />
              <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                Solve Real Problems.
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-7 text-slate-300 sm:text-base">
              Work on industry-inspired AI projects, explore practical AI
              applications, and turn innovative ideas into working solutions
              through guided, project-based learning.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "AI Applications",
                "Industry-Based Projects",
                "Practical Implementation",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={REGISTER_URL}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3 text-sm font-bold shadow-lg shadow-violet-900/30 transition hover:-translate-y-0.5"
              >
                Apply Now
                <ArrowRight size={17} />
              </Link>

              <a
                href="#projects"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/[0.05]"
              >
                Explore Projects
              </a>
            </div>

            <p className="mt-4 text-xs leading-5 text-slate-500">
              Program fee: ₹499, inclusive of applicable taxes. Please review
              the official Terms & Conditions before registering.
            </p>
          </motion.div>

          {/* AI VISUAL */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="absolute inset-10 rounded-full bg-violet-600/20 blur-[80px]" />

            <div className="relative overflow-hidden rounded-[2rem] border border-violet-400/20 bg-[#0D1126]/90 p-4 shadow-[0_0_70px_rgba(139,92,246,0.12)] sm:p-6">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400">
                    <BrainCircuit size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">AI Project Lab</p>
                    <p className="text-xs text-slate-500">
                      Explore · Build · Improve
                    </p>
                  </div>
                </div>
                <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1.5 text-[10px] text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  PROJECT MODE
                </span>
              </div>

              <div className="relative my-5 flex min-h-60 items-center justify-center overflow-hidden rounded-2xl border border-violet-400/15 bg-gradient-to-br from-violet-600/15 via-[#10142C] to-cyan-500/10">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.10)_1px,transparent_1px)] bg-[size:25px_25px]" />

                <motion.div
                  animate={reduceMotion ? undefined : { rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute h-44 w-44 rounded-full border border-dashed border-violet-400/40 sm:h-52 sm:w-52"
                />

                <div className="relative flex h-24 w-24 items-center justify-center rounded-[2rem] border border-violet-300/40 bg-gradient-to-br from-violet-500/30 to-cyan-500/20 shadow-[0_0_50px_rgba(139,92,246,0.25)]">
                  <BrainCircuit size={48} className="text-violet-100" />
                </div>

                <div className="absolute left-3 top-5 flex items-center gap-2 rounded-lg border border-cyan-400/20 bg-[#0B1020]/90 px-3 py-2 text-xs text-cyan-200 sm:left-6">
                  <Cpu size={14} />
                  AI Models
                </div>

                <div className="absolute right-3 top-8 flex items-center gap-2 rounded-lg border border-violet-400/20 bg-[#0B1020]/90 px-3 py-2 text-xs text-violet-200 sm:right-6">
                  <Database size={14} />
                  Data
                </div>

                <div className="absolute bottom-5 left-4 flex items-center gap-2 rounded-lg border border-emerald-400/20 bg-[#0B1020]/90 px-3 py-2 text-xs text-emerald-200 sm:left-8">
                  <Workflow size={14} />
                  Solutions
                </div>

                <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-lg border border-pink-400/20 bg-[#0B1020]/90 px-3 py-2 text-xs text-pink-200 sm:right-8">
                  <Rocket size={14} />
                  Projects
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {[
                  { icon: BrainCircuit, label: "Explore AI" },
                  { icon: Code2, label: "Build Projects" },
                  { icon: Rocket, label: "Create Solutions" },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="rounded-xl border border-white/[0.08] bg-white/[0.025] px-2 py-3 text-center"
                    >
                      <Icon size={20} className="mx-auto text-violet-300" />
                      <p className="mt-2 text-[10px] font-medium text-slate-300 sm:text-xs">
                        {item.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* KEY BENEFITS */}
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-3 sm:mt-16 sm:grid-cols-4 sm:gap-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: reduceMotion ? 0 : index * 0.06 }}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4"
              >
                <Icon size={20} className="mb-3 text-violet-300" />
                <p className="text-sm font-bold sm:text-base">
                  {benefit.title}
                </p>
                <p className="mt-1 text-xs text-slate-400">{benefit.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* LEARNING APPROACH */}
      <section
        id="learning"
        className="scroll-mt-20 border-y border-white/[0.06] bg-white/[0.018] px-4 py-14 sm:px-6 sm:py-18 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">
              Your project journey
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Learn by building AI solutions.
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Focus on practical applications, industry-inspired challenges,
              and implementing project ideas.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
            {learning.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: reduceMotion ? 0 : index * 0.08 }}
                  className="rounded-2xl border border-white/[0.09] bg-[#0B1020] p-5 transition hover:border-violet-400/30 sm:p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-400/10 text-violet-200">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold">{item.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.text}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECT SHOWCASE */}
      <section
        id="projects"
        className="scroll-mt-20 px-4 py-14 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Project possibilities
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Explore what you could build.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
              Example project directions focused on applying AI to practical
              problems. Final projects depend on the confirmed batch curriculum.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {projects.map((project, index) => {
              const Icon = project.icon;

              return (
                <motion.article
                  key={project.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: reduceMotion ? 0 : index * 0.07 }}
                  className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0B1020] transition hover:-translate-y-1 hover:border-white/20"
                >
                  <div
                    className={`relative flex h-32 items-center justify-center overflow-hidden bg-gradient-to-br ${project.glow} to-transparent`}
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]" />

                    <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-[#0B1020]/90 transition group-hover:scale-110">
                      <Icon size={31} className={project.color} />
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold">{project.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {project.text}
                    </p>
                    <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-violet-300">
                      Practical project idea
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* REGISTRATION CTA */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-violet-400/20 bg-gradient-to-r from-violet-950/60 via-[#12132A] to-cyan-950/40 p-6 sm:p-9">
          <div className="pointer-events-none absolute -right-10 -top-20 h-52 w-52 rounded-full bg-violet-500/15 blur-[80px]" />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-200">
                <Sparkles size={15} />
                Start your project journey
              </div>

              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                Ready to build with AI?
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Take the next step toward practical AI project experience with
                TRIQUON INDIA.
              </p>
            </div>

            <Link
              href={REGISTER_URL}
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3 text-sm font-bold transition hover:-translate-y-0.5"
            >
              Apply Now
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-5 flex max-w-6xl flex-col gap-3 text-xs leading-5 text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-start gap-2">
            <Check size={14} className="mt-0.5 shrink-0 text-emerald-300" />
            Certification is subject to program completion criteria. PPO
            opportunities, if available, depend on performance and selection
            criteria and are not guaranteed.
          </p>

          <Link
            href="/terms-and-conditions"
            className="shrink-0 text-violet-300 underline underline-offset-4 hover:text-violet-200"
          >
            Terms & Conditions
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
