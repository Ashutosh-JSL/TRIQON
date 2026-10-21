
"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  Clock3,
  Code2,
  GraduationCap,
  Layers3,
  MessageCircle,
  Rocket,
  Sparkles,
  Users,
  Video,
  Workflow,
} from "lucide-react";

import { tracks } from "./hero-data";
import { SectionLabel, PrimaryButton } from "./HeroUI";

const programDetails = [
  {
    icon: Clock3,
    value: "32+ Hours",
    label: "Practical Learning",
  },
  {
    icon: Video,
    value: "Mentor-Led",
    label: "Guided Sessions",
  },
  {
    icon: BriefcaseBusiness,
    value: "2 Months",
    label: "Project Internship",
  },
  {
    icon: GraduationCap,
    value: "PPO",
    label: "Eligibility-Based Opportunity",
  },
];

const getTrackDetails = (title: string) => {
  if (title === "Web Development") {
    return {
      href: "/apply/web-development",
      buttonText: "Explore Track",
      description:
        "Build modern web experiences through hands-on development projects.",
      accent: "from-cyan-300 via-[#22E3D6] to-blue-400",
      icon: Code2,
      label: "BUILD FOR THE WEB",
      tag: "Development",
    };
  }

  if (title === "AI & Emerging Technology") {
    return {
      href: "/apply/ai-emerging-technology",
      buttonText: "Explore Track",
      description:
        "Explore AI tools, automation, and emerging technology through practical projects.",
      accent: "from-violet-300 via-[#A78BFA] to-cyan-300",
      icon: Workflow,
      label: "EXPLORE WHAT'S NEXT",
      tag: "Emerging Tech",
    };
  }

  return {
    href: "/contact",
    buttonText: "Enquire Now",
    description: "Discover a learning path that matches your interests.",
    accent: "from-cyan-300 via-[#22E3D6] to-blue-400",
    icon: Layers3,
    label: "START BUILDING",
    tag: "Career Skills",
  };
};

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut" as const,
    },
  },
};

export default function ProjectTracksSection() {
  const reduceMotion = useReducedMotion();

  const motionReveal = {
    ...reveal,
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 24,
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
      id="internships"
      className="relative isolate overflow-hidden bg-[#050B18] px-5 py-20 text-white sm:px-8 sm:py-24 lg:py-28"
    >
      {/* SHARED TRI QOLO BACKGROUND */}

      <div className="pointer-events-none absolute inset-0 -z-10">
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
          className="absolute -left-32 top-40 h-80 w-80 rounded-full bg-violet-600/15 blur-[110px]"
          animate={
            reduceMotion
              ? {}
              : { x: [0, 30, 0], y: [0, 20, 0] }
          }
          transition={{ duration: 14, repeat: Infinity }}
        />

        <motion.div
          className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-[110px]"
          animate={
            reduceMotion
              ? {}
              : { x: [0, -25, 0], y: [0, -25, 0] }
          }
          transition={{ duration: 16, repeat: Infinity }}
        />

        {[
          "left-[8%] top-[16%]",
          "left-[32%] top-[9%]",
          "right-[12%] top-[22%]",
          "left-[18%] bottom-[15%]",
          "right-[28%] bottom-[12%]",
        ].map((position, index) => (
          <motion.span
            key={position}
            className={`absolute ${position} h-1 w-1 rounded-full bg-cyan-200/70`}
            animate={
              reduceMotion
                ? {}
                : { opacity: [0.2, 0.9, 0.2], scale: [1, 1.7, 1] }
            }
            transition={{
              duration: 3 + index,
              repeat: Infinity,
              delay: index * 0.3,
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl">
        {/* SECTION INTRO */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={motionReveal}
          className="mx-auto max-w-3xl text-center"
        >
          <SectionLabel>Explore Your Interests</SectionLabel>

          <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Choose Your Path.
            <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-[#22E3D6] to-violet-400 bg-clip-text text-transparent">
              Start Building.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
            Practical learning. Mentor guidance. Projects that matter.
          </p>
        </motion.div>

        {/* PROGRAM METRICS */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.08,
              },
            },
          }}
          className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-3 lg:grid-cols-4"
        >
          {programDetails.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                variants={motionReveal}
                whileHover={reduceMotion ? undefined : { y: -5 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#09182D]/75 p-4 text-center shadow-lg shadow-black/10 backdrop-blur-xl transition-colors duration-300 hover:border-cyan-300/35 hover:bg-cyan-300/[0.04] sm:p-5"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-cyan-300/[0.07] blur-2xl transition-colors group-hover:bg-cyan-300/15" />

                <div className="relative mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.07] text-cyan-300 transition-transform group-hover:scale-110">
                  <Icon size={21} />
                </div>

                <p className="relative mt-3 text-lg font-black tracking-tight sm:text-xl">
                  {item.value}
                </p>

                <p className="relative mt-1 text-[11px] leading-5 text-slate-400 sm:text-xs">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <p className="mx-auto mt-4 max-w-3xl text-center text-[10px] leading-5 text-slate-500 sm:text-xs">
          Program duration and hours depend on the applicable program.
          Certification and PPO consideration are subject to requirements
          and selection; outcomes are not guaranteed.
        </p>

        {/* PROGRAM TRACKS */}

        <motion.div
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.13,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="mx-auto mt-14 grid max-w-5xl items-stretch gap-6 sm:grid-cols-2 sm:gap-8 lg:gap-10"
        >
          {tracks.map((track) => {
            const Icon = track.icon;
            const details = getTrackDetails(track.title);
            const TrackSymbol = details.icon;

            const benefits =
              track.title === "Web Development"
                ? [
                    "Modern Web Technologies",
                    "Practical Project Work",
                    "Mentor-Guided Learning",
                  ]
                : track.title === "AI & Emerging Technology"
                  ? [
                      "AI Tools & Prompt Engineering",
                      "Applied AI Projects",
                      "Automation Fundamentals",
                    ]
                  : [
                      "Practical Learning",
                      "Mentor Guidance",
                      "Structured Learning Path",
                    ];

            return (
              <motion.article
                key={track.title}
                variants={motionReveal}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -6,
                        transition: { duration: 0.25 },
                      }
                }
                className="group relative isolate flex h-full min-w-0 flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#09182D]/80 p-5 shadow-[0_20px_70px_-40px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-colors duration-300 hover:border-cyan-300/30 hover:shadow-[0_25px_70px_-35px_rgba(34,211,238,0.18)] sm:p-7"
              >
                {/* CARD LIGHTING */}

                <div
                  className={`pointer-events-none absolute -right-20 -top-20 -z-10 h-56 w-56 rounded-full bg-gradient-to-br ${track.glow} opacity-30 blur-[65px] transition-all duration-500 group-hover:scale-125 group-hover:opacity-60`}
                />

                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent opacity-60" />

                {/* TRACK HEADER */}

                <div className="flex items-start justify-between gap-4">
                  <motion.div
                    whileHover={
                      reduceMotion
                        ? undefined
                        : { rotate: 5, scale: 1.06 }
                    }
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 ${track.iconColor}`}
                  >
                    <Icon size={27} />
                  </motion.div>

                  <span className="text-3xl" aria-hidden="true">
                    {track.emoji}
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-cyan-200">
                    {details.tag}
                  </span>

                  <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                    {details.label}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-extrabold leading-snug tracking-tight text-white sm:text-2xl">
                  {track.title}
                </h3>

                <p className="mt-3 min-h-[56px] text-sm leading-6 text-slate-400">
                  {details.description || track.description}
                </p>

                {/* SKILL TAGS */}

                <div className="mt-5 flex flex-wrap gap-2">
                  {track.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/[0.08] bg-white/[0.035] px-2.5 py-1.5 text-[11px] font-medium text-slate-300 transition-colors duration-200 hover:border-cyan-300/25 hover:text-cyan-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* CARD DIVIDER */}

                <div className="my-6 h-px bg-gradient-to-r from-cyan-300/20 via-white/[0.07] to-transparent" />

                {/* BENEFITS */}

                <div className="flex-1 space-y-3">
                  {benefits.map((benefit) => (
                    <motion.div
                      key={benefit}
                      whileHover={
                        reduceMotion ? undefined : { x: 3 }
                      }
                      className="flex items-center gap-3 text-xs font-medium text-slate-300 sm:text-sm"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-cyan-300/15 bg-cyan-300/[0.07]">
                        <Check size={12} className="text-cyan-300" />
                      </span>

                      {benefit}
                    </motion.div>
                  ))}
                </div>

                {/* CAREER OUTCOME STRIP */}

                <div className="mt-6 grid grid-cols-2 gap-2">
                  <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
                    <BadgeCheck
                      size={17}
                      className="text-violet-300"
                    />
                    <p className="mt-2 text-[10px] font-bold text-slate-200 sm:text-xs">
                      Internship Certificate
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
                    <Rocket
                      size={17}
                      className="text-cyan-300"
                    />
                    <p className="mt-2 text-[10px] font-bold text-slate-200 sm:text-xs">
                      PPO Opportunity*
                    </p>
                  </div>
                </div>

                {/* APPLY BUTTON */}

                <div className="mt-6 border-t border-white/[0.07] pt-5">
                  <Link
                    href={details.href}
                    aria-label={`${details.buttonText} - ${track.title}`}
                    className={`group/apply relative flex min-h-[50px] w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r ${details.accent} px-5 py-3 text-sm font-extrabold text-[#050B18] shadow-lg shadow-cyan-500/[0.08] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-cyan-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050B18]`}
                  >
                    <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover/apply:translate-x-full" />

                    <span className="relative">
                      {details.buttonText}
                    </span>

                    <ArrowRight
                      size={17}
                      className="relative transition-transform group-hover/apply:translate-x-1"
                    />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <p className="mx-auto mt-5 max-w-3xl text-center text-[10px] leading-5 text-slate-500">
          *Internship certification depends on completion requirements.
          PPO consideration, where applicable, depends on eligibility
          and selection and is not guaranteed.
        </p>

        {/* FINAL CTA */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={motionReveal}
          className="relative mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#09182D]/80 p-7 text-center shadow-[0_0_70px_-45px_rgba(34,211,238,0.25)] backdrop-blur-xl sm:p-10"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(109,74,255,0.14),transparent_60%)]" />

          <div className="relative">
            <motion.div
              animate={
                reduceMotion ? {} : { y: [0, -4, 0] }
              }
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.07] text-cyan-300"
            >
              <Sparkles size={23} />
            </motion.div>

            <h3 className="mt-5 text-2xl font-black tracking-tight sm:text-3xl">
              Your Next Move Starts Here.
            </h3>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-400">
              Find your track. Build practical skills. Take the next step.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <PrimaryButton href="#internships">
                Explore Programs
              </PrimaryButton>

              <Link
                href="/contact"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-bold text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                Talk to Our Team
                <MessageCircle size={17} />
                <ArrowUpRight size={15} className="text-slate-400" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
