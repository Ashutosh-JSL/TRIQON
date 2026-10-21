
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Code2,
  BrainCircuit,
  Cloud,
  Rocket,
} from "lucide-react";

const floatingCards = [
  {
    label: "Industrial Project Experience",
    icon: Code2,
    className: "left-0 top-[12%]",
    delay: 0.2,
  },
  {
    label: "PPO Opportunity",
    icon: Rocket,
    className: "right-0 top-[10%]",
    delay: 0.4,
  },
  {
    label: "Internship Certificate",
    icon: Sparkles,
    className: "right-0 bottom-[24%]",
    delay: 0.6,
  },
  {
    label: "Portfolio-Ready Projects",
    icon: Cloud,
    className: "left-0 bottom-[18%]",
    delay: 0.8,
  },
];

const technologyTags = [
  "Industrial Project Experience",
  "Internship Certificate",
  "PPO Opportunity",
  "Portfolio-Ready Projects",
];

export default function HeroBanner() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#030B1D] text-white"
    >
      {/* =====================================================
          ANIMATED BACKGROUND
      ====================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Ambient glows */}
        <div className="hero-glow hero-glow-blue absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-blue-600/20 blur-[120px]" />

        <div className="hero-glow hero-glow-cyan absolute -right-40 top-[10%] h-[35rem] w-[35rem] rounded-full bg-cyan-400/20 blur-[140px]" />

        <div className="hero-glow hero-glow-teal absolute bottom-[-18rem] left-[25%] h-[34rem] w-[34rem] rounded-full bg-teal-400/15 blur-[130px]" />

        {/* Glow behind illustration */}
        <div className="hero-pulse absolute left-[62%] top-[45%] h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/[0.07] blur-[100px]" />

        {/* Moving grid */}
        <div
          className="hero-grid absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,229,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.18) 1px, transparent 1px)",
            backgroundSize: "58px 58px",
            maskImage:
              "linear-gradient(to bottom, black 0%, transparent 90%)",
          }}
        />

        {/* Rotating orbit rings */}
        <div className="hero-orbit absolute left-[62%] top-[46%] h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/[0.10]" />

        <div className="hero-orbit-reverse absolute left-[62%] top-[46%] h-[43rem] w-[43rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/[0.08]" />

        {/* Floating particles */}
        {Array.from({ length: 18 }, (_, i) => (
          <span
            key={i}
            className="hero-particle absolute rounded-full bg-cyan-200"
            style={{
              left: `${5 + ((i * 37) % 90)}%`,
              top: `${8 + ((i * 29) % 82)}%`,
              width: i % 4 === 0 ? "4px" : "2px",
              height: i % 4 === 0 ? "4px" : "2px",
              opacity: 0.2 + (i % 4) * 0.12,
              animationDelay: `${(i % 7) * -0.8}s`,
              animationDuration: `${5 + (i % 5)}s`,
            }}
          />
        ))}

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030B1D] to-transparent" />
      </div>

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}
      <div className="mx-auto max-w-[1600px] px-5 pb-12 pt-14 sm:px-8 sm:pb-16 sm:pt-20 lg:px-12 lg:pb-20 lg:pt-16 xl:px-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.88fr_1.32fr] lg:gap-5 xl:grid-cols-[0.82fr_1.38fr] xl:gap-8">
          {/* LEFT: TEXT CONTENT */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative z-10 mx-auto w-full max-w-2xl text-center lg:mx-0 lg:text-left"
          >
            {/* Brand badge */}
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-4 py-2.5 shadow-[0_0_35px_rgba(0,229,255,0.07)]">
              <span className="relative flex h-2 w-2">
                {!reduceMotion && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-60" />
                )}
                <span className="relative h-2 w-2 rounded-full bg-cyan-300" />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-100 sm:text-xs">
                TRIQOLO · LEARN BY BUILDING
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-balance text-[2.65rem] font-bold leading-[1.08] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-[3.25rem] xl:text-[4.15rem]">
              Learn with Mentors.
              <span className="mt-3 block bg-gradient-to-r from-cyan-200 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Contribute to Real Projects.
              </span>
            </h1>

            {/* Supporting description */}
            <p className="mx-auto mt-6 max-w-xl text-pretty text-sm leading-7 text-slate-300 sm:text-base sm:leading-8 lg:mx-0 lg:text-lg">
              Turn what you learn into what you can build. Develop practical
              skills through guided learning, collaborative projects, and
              hands-on technology experience.
            </p>

            {/* Benefit tags */}
            <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
              {technologyTags.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-cyan-300/30 hover:text-cyan-200 sm:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Link
                href="/programs"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-400 px-6 py-3 text-sm font-bold text-[#03101F] shadow-[0_8px_35px_rgba(0,229,255,0.2)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_45px_rgba(0,229,255,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030B1D] sm:text-base"
              >
                Explore Programs
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="#how-it-works"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition duration-300 hover:border-cyan-300/40 hover:bg-cyan-300/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 sm:text-base"
              >
                How It Works
                <ArrowUpRight
                  size={17}
                  className="text-cyan-300 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>

            {/* Supporting highlights */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs text-slate-400 sm:text-sm lg:justify-start">
              <span className="inline-flex items-center gap-2">
                <Sparkles size={15} className="text-cyan-300" />
                Practical learning
              </span>

              <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />

              <span className="inline-flex items-center gap-2">
                <Code2 size={15} className="text-cyan-300" />
                Build real projects
              </span>
            </div>
          </motion.div>

          {/* RIGHT: LARGE ILLUSTRATION */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, scale: 0.96, x: 18 }
            }
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.12, ease: "easeOut" }}
            className="relative mx-auto w-full min-w-0 lg:-mr-8 lg:w-[calc(100%+2rem)] xl:-mr-12 xl:w-[calc(100%+3rem)]"
          >
            {/* Illustration glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-[100px]"
            />

            {/* Decorative orbit rings */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-[82%] w-[96%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-cyan-300/10"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-[94%] w-[108%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-blue-300/[0.09]"
            />

            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl border border-cyan-200/20 bg-[#07142D]/60 shadow-[0_0_70px_rgba(0,160,255,0.15)] sm:rounded-3xl lg:overflow-hidden lg:rounded-2xl">
              <Image
                src="/images/triqolo-hero.png"
                alt="TriQolo learner working on a laptop in a futuristic technology workspace"
                width={1648}
                height={896}
                priority
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 90vw, 65vw"
                className="h-auto w-full object-contain"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030B1D]/25 via-transparent to-[#030B1D]/5"
              />
            </div>

            {/* Floating cards — desktop only */}
            <div className="pointer-events-none absolute inset-0 hidden lg:block">
              {floatingCards.map((card) => {
                const Icon = card.icon;

                return (
                  <motion.div
                    key={card.label}
                    initial={
                      reduceMotion
                        ? false
                        : { opacity: 0, y: 10, scale: 0.95 }
                    }
                    animate={{
                      opacity: 1,
                      y: reduceMotion ? 0 : [0, -6, 0],
                      scale: 1,
                    }}
                    transition={{
                      opacity: {
                        duration: 0.5,
                        delay: card.delay,
                      },
                      scale: {
                        duration: 0.5,
                        delay: card.delay,
                      },
                      y: reduceMotion
                        ? { duration: 0 }
                        : {
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: card.delay,
                          },
                    }}
                    className={`absolute ${card.className} flex max-w-[185px] items-center gap-2.5 rounded-xl border border-cyan-200/20 bg-[#07142D]/95 px-3 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl xl:px-4`}
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-300/15 bg-cyan-300/10 text-cyan-200">
                      <Icon size={18} />
                    </span>

                    <span className="text-xs font-semibold leading-5 text-slate-100 xl:text-sm">
                      {card.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Floating brand statement */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                y: reduceMotion ? 0 : [0, -4, 0],
              }}
              transition={{
                opacity: { duration: 0.6, delay: 0.7 },
                y: reduceMotion
                  ? { duration: 0 }
                  : {
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
              }}
              className="relative mx-auto mt-4 flex w-fit items-center gap-2 rounded-full border border-cyan-200/15 bg-[#07142D]/95 px-4 py-2.5 shadow-[0_0_30px_rgba(0,229,255,0.08)] backdrop-blur-xl lg:absolute lg:bottom-[-18px] lg:left-1/2 lg:mt-0 lg:-translate-x-1/2"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-300/10 text-cyan-200">
                <Sparkles size={15} />
              </span>

              <span className="text-xs font-semibold tracking-wide text-slate-200 sm:text-sm">
                BUILD <span className="text-cyan-300">·</span> LEARN{" "}
                <span className="text-cyan-300">·</span> LAUNCH
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom accent */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent"
      />
    </section>
  );
}
