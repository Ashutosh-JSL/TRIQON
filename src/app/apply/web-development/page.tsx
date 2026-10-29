
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Globe,
  Layers,
  Monitor,
  Smartphone,
  Database,
  Rocket,
  Clock3,
  Users,
  FileCheck2,
  Target,
  Sparkles,
  Check,
  Terminal,
  Download,
  Bug,
  CloudUpload,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const benefits = [
  {
    icon: Clock3,
    title: "32+ Hours",
    text: "Practical learning",
  },
  {
    icon: Users,
    title: "Mentor-Led",
    text: "Guided sessions",
  },
  {
    icon: Target,
    title: "2 Months",
    text: "Learning journey",
  },
  {
    icon: FileCheck2,
    title: "Certificate",
    text: "Subject to criteria",
  },
];

const journey = [
  {
    number: "01",
    icon: Download,
    title: "Setup & Installation",
    text: "Set up development tools and configure your workspace.",
  },
  {
    number: "02",
    icon: Code2,
    title: "Design & Development",
    text: "Create responsive interfaces and build application features.",
  },
  {
    number: "03",
    icon: Bug,
    title: "Testing & Refinement",
    text: "Test functionality, fix issues, and improve user experience.",
  },
  {
    number: "04",
    icon: CloudUpload,
    title: "Deployment",
    text: "Learn how web applications are prepared and deployed.",
  },
];

const projects = [
  {
    icon: Globe,
    title: "Business Website",
    description:
      "Explore responsive pages, business layouts, and service presentation.",
    color: "text-cyan-300",
    glow: "from-cyan-500/20",
    label: "WEB DESIGN",
  },
  {
    icon: Layers,
    title: "Interactive Web App",
    description:
      "Explore forms, interactive features, and application workflows.",
    color: "text-blue-300",
    glow: "from-blue-500/20",
    label: "WEB APPLICATION",
  },
  {
    icon: Monitor,
    title: "Data Dashboard",
    description:
      "Explore data presentation, dashboard layouts, and visual components.",
    color: "text-violet-300",
    glow: "from-violet-500/20",
    label: "DASHBOARD",
  },
];

function CodeWindow() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="absolute inset-10 rounded-full bg-cyan-500/20 blur-[90px]" />

      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative overflow-hidden rounded-[1.75rem] border border-cyan-400/20 bg-[#0B1120]/95 shadow-[0_0_70px_rgba(34,211,238,0.10)]"
      >
        {/* Editor Header */}
        <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-4 sm:px-5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

            <span className="ml-2 text-xs text-slate-400">
              project.tsx
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] text-cyan-300">
            <Code2 size={13} />
            WEB DEVELOPMENT
          </div>
        </div>

        <div className="grid grid-cols-[38px_1fr] sm:grid-cols-[46px_1fr]">
          {/* Editor Sidebar */}
          <div className="flex flex-col items-center gap-5 border-r border-white/[0.06] py-6 text-slate-600">
            <Code2 size={17} />
            <Globe size={17} />
            <Layers size={17} />
            <Database size={17} />
          </div>

          {/* Editor Content */}
          <div className="min-w-0 p-4 sm:p-6">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-white">
                  Turn ideas into applications.
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Learn · Build · Improve
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                <Terminal size={20} />
              </div>
            </div>

            {/* Code Preview */}
            <div className="space-y-2.5 rounded-xl border border-white/[0.06] bg-[#070B16] p-4 font-mono text-[11px] leading-6 sm:text-xs">
              <p>
                <span className="text-violet-300">const</span>{" "}
                <span className="text-cyan-200">project</span>{" "}
                <span className="text-slate-400">= {"{"}</span>
              </p>

              <p className="pl-4">
                <span className="text-sky-300">technology</span>
                <span className="text-slate-400">:</span>{" "}
                <span className="text-emerald-300">
                  "Modern Web"
                </span>
                ,
              </p>

              <p className="pl-4">
                <span className="text-sky-300">approach</span>
                <span className="text-slate-400">:</span>{" "}
                <span className="text-emerald-300">
                  "Practical Learning"
                </span>
                ,
              </p>

              <p className="pl-4">
                <span className="text-sky-300">workflow</span>
                <span className="text-slate-400">:</span>{" "}
                <span className="text-emerald-300">
                  "Build & Test"
                </span>
              </p>

              <p className="text-slate-400">{"};"}</p>

              <p className="pt-2">
                <span className="text-violet-300">
                  export default
                </span>{" "}
                <span className="text-cyan-200">project</span>;
              </p>
            </div>

            {/* Mini Features */}
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[
                { icon: Smartphone, label: "Responsive" },
                { icon: Layers, label: "Interactive" },
                { icon: CloudUpload, label: "Deployment" },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-xl border border-white/[0.07] bg-white/[0.025] px-1.5 py-3 text-center"
                  >
                    <Icon
                      size={18}
                      className="mx-auto text-cyan-300"
                    />

                    <p className="mt-2 text-[9px] text-slate-400 sm:text-[10px]">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Editor Footer */}
        <div className="flex items-center justify-between border-t border-white/[0.08] px-4 py-3 text-[10px] text-slate-500 sm:px-5">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Development workspace
          </span>

          <span>Learn → Build → Improve</span>
        </div>
      </motion.div>

      {/* Floating Icons */}
      <div className="pointer-events-none absolute -right-3 top-1/4 hidden rounded-2xl border border-cyan-400/20 bg-[#0B1120] p-3 text-cyan-300 shadow-xl sm:block">
        <Code2 size={22} />
      </div>

      <div className="pointer-events-none absolute -bottom-3 -left-3 hidden rounded-2xl border border-blue-400/20 bg-[#0B1120] p-3 text-blue-300 shadow-xl sm:block">
        <Rocket size={22} />
      </div>
    </div>
  );
}

export default function WebDevelopmentPage() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen overflow-hidden bg-[#070A17] text-white selection:bg-cyan-500/30">
      <Navbar />

      {/* HERO */}
      <section className="relative px-4 pb-12 pt-12 sm:px-6 sm:pb-16 sm:pt-16 lg:px-8">
        <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-blue-600/20 blur-[110px]" />

        <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Hero Content */}
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

            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/[0.08] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-cyan-200">
              <Sparkles size={14} />
              GrowZeal · Web Development
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Learn Web Development.
              <br />

              <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                Build. Test. Deploy.
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-7 text-slate-300 sm:text-base">
              Learn modern web technologies and apply your skills
              through structured sessions, practical development,
              and mentor-guided learning.
            </p>

            {/* Technology Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "HTML & CSS",
                "JavaScript",
                "React & Next.js",
                "Deployment",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/payment/web-development"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-sm font-bold shadow-lg shadow-blue-900/30 transition hover:-translate-y-0.5"
              >
                Apply Now
                <ArrowRight size={17} />
              </Link>

              <a
                href="#journey"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/[0.05]"
              >
                Explore Learning Journey
              </a>
            </div>

            <p className="mt-4 text-xs leading-5 text-slate-500">
              Program fee: ₹499, inclusive of applicable taxes.
              Review the program details and Terms & Conditions
              before registering.
            </p>
          </motion.div>

          {/* Hero Illustration */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <CodeWindow />
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
                transition={{
                  delay: reduceMotion ? 0 : index * 0.06,
                }}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4"
              >
                <Icon size={20} className="mb-3 text-cyan-300" />

                <p className="text-sm font-bold sm:text-base">
                  {benefit.title}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  {benefit.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* LEARNING JOURNEY */}
      <section
        id="journey"
        className="scroll-mt-20 border-y border-white/[0.06] bg-[#090E1B] px-4 py-14 sm:px-6 sm:py-16 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Your learning journey
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              From Setup{" "}
              <span className="text-cyan-300">to Deployment.</span>
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Understand the web development workflow through
              practical learning and application building.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: reduceMotion ? 0 : index * 0.07,
                  }}
                  className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition hover:border-cyan-400/30"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                      <Icon size={21} />
                    </div>

                    <span className="font-mono text-xs tracking-wider text-slate-600">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-5 font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {step.text}
                  </p>

                  {index < journey.length - 1 && (
                    <ArrowRight
                      size={15}
                      className="absolute bottom-4 right-4 hidden text-cyan-400/40 lg:block"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECT POSSIBILITIES */}
      <section
        id="projects"
        className="scroll-mt-20 px-4 py-14 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Put your skills into practice
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Turn Ideas Into Applications
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Discover how web technologies can be used to create
              websites, interactive applications, and dashboards.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {projects.map((project, index) => {
              const Icon = project.icon;

              return (
                <motion.article
                  key={project.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: reduceMotion ? 0 : index * 0.07,
                  }}
                  className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0B1020] transition hover:-translate-y-1 hover:border-white/20"
                >
                  <div
                    className={`relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br ${project.glow} to-transparent`}
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]" />

                    <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-[#0B1020]/90 transition group-hover:scale-110">
                      <Icon size={31} className={project.color} />
                    </div>

                    <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/20 px-2 py-1 text-[9px] font-semibold tracking-wider text-slate-300">
                      {project.label}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold">{project.title}</h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {project.description}
                    </p>

                    <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-cyan-300">
                      Practical Application
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL REGISTRATION CTA */}
      <section className="px-4 pb-16 pt-8 sm:px-6 sm:pb-20 lg:px-8">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-blue-950/60 via-[#10172A] to-cyan-950/40 p-6 sm:p-9">
          <div className="pointer-events-none absolute -right-10 -top-20 h-52 w-52 rounded-full bg-cyan-500/15 blur-[80px]" />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-200">
                <Rocket size={15} />
                Start your development journey
              </div>

              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                Ready to build something meaningful?
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Learn modern web technologies, strengthen your
                practical skills, and take the next step in your
                development journey with GrowZeal.
              </p>
            </div>

            <Link
              href="/payment/web-development"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-sm font-bold transition hover:-translate-y-0.5"
            >
              Apply Now
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mx-auto mt-5 flex max-w-6xl flex-col gap-3 text-xs leading-5 text-slate-500 sm:flex-row sm:items-start sm:justify-between">
          <p className="flex items-start gap-2">
            <Check
              size={14}
              className="mt-0.5 shrink-0 text-emerald-300"
            />
            Certificate issuance is subject to program completion
            requirements. PPO consideration, where offered, depends
            on eligibility and selection and is not guaranteed.
          </p>

          <Link
            href="/terms-and-conditions"
            className="shrink-0 text-cyan-300 underline underline-offset-4 hover:text-cyan-200"
          >
            Terms & Conditions
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
