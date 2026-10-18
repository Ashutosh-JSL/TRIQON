"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock3,
  MessageCircle,
  Sparkles,
  Video,
  BriefcaseBusiness,
  GraduationCap,
  Send,
} from "lucide-react";

import { tracks, fadeUp, stagger } from "./hero-data";
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
    label: "Sessions",
  },
  {
    icon: BriefcaseBusiness,
    value: "2 Months",
    label: "Project Internship",
  },
  {
    icon: GraduationCap,
    value: "PPO",
    label: "Opportunity on Eligibility",
  },
];

const getTrackDetails = (title: string) => {
  if (title === "Web Development") {
    return {
      href: "/apply/web-development",
      buttonText: "Apply Now",
      description:
        "Learn modern web technologies and apply your skills through practical development projects.",
      accent: "from-cyan-300 via-[#22E3D6] to-blue-400",
    };
  }

  if (title === "AI & Emerging Technology") {
    return {
      href: "/apply/ai-emerging-technology",
      buttonText: "Apply Now",
      description:
        "Explore AI tools, prompt engineering, automation, and emerging technologies through practical projects.",
      accent: "from-emerald-300 via-teal-300 to-cyan-400",
    };
  }

  return {
    href: "/contact",
    buttonText: "Enquire Now",
    description: "",
    accent: "from-cyan-300 via-[#22E3D6] to-blue-400",
  };
};

export default function ProjectTracksSection() {
  const reduceMotion = useReducedMotion();

  const reveal = {
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
      className="relative isolate overflow-hidden bg-gradient-to-br from-[#032B3E] via-[#042B57] to-[#02152B] px-5 py-20 text-white sm:px-8 sm:py-24"
    >
      {/* BACKGROUND EFFECTS */}
      <div className="pointer-events-none absolute -left-32 top-32 -z-10 h-96 w-96 rounded-full bg-[#22E3D6]/10 blur-[110px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[110px]" />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* SECTION INTRO */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={reveal}
        className="mx-auto max-w-3xl text-center"
      >
        <SectionLabel>Explore Your Interests</SectionLabel>

        <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Choose Your Path.
          <span className="mt-2 block bg-gradient-to-r from-[#22E3D6] to-[#72F7FF] bg-clip-text text-transparent">
            Build Skills That Matter.
          </span>
        </h2>

        <p className="mt-5 text-base leading-7 text-[#D4E3FF] sm:text-lg">
          Go beyond theory with structured learning, mentor guidance, and
          practical project experience. Explore a track that matches your
          interests and career goals.
        </p>
      </motion.div>

      {/* PROGRAM VALUE STRIP */}
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
              variants={reveal}
              whileHover={reduceMotion ? undefined : { y: -4 }}
              className="group flex min-h-[142px] flex-col items-center justify-center rounded-2xl border border-[#22E3D6]/15 bg-[rgba(9,24,55,0.65)] p-4 text-center backdrop-blur-xl transition-colors duration-300 hover:border-[#22E3D6]/40 hover:bg-[#22E3D6]/[0.05] sm:min-h-[155px] sm:p-5"
            >
              <Icon
                className="text-[#22E3D6] transition-transform duration-300 group-hover:scale-110"
                size={23}
              />

              <p className="mt-3 text-xl font-black sm:text-2xl">
                {item.value}
              </p>

              <p className="mt-1 text-xs leading-5 text-[#A1B5D8] sm:text-sm">
                {item.label}
              </p>
            </motion.div>
          );
        })}
      </motion.div>

      <p className="mx-auto mt-4 max-w-3xl text-center text-xs leading-6 text-[#A1B5D8]">
        Program details, completion requirements, certification eligibility,
        and PPO consideration are subject to the applicable program terms
        and selection criteria.
      </p>

      {/* TRACK CARDS */}
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
        className="mx-auto mt-14 grid max-w-5xl items-stretch gap-8 sm:grid-cols-2 lg:gap-10"
      >
        {tracks.map((track) => {
          const Icon = track.icon;
          const details = getTrackDetails(track.title);

          const benefitsForTrack =
            track.title === "Web Development"
              ? [
                  "Modern Web Technologies",
                  "Industry-Oriented Projects",
                  "Mentor-Guided Learning",
                ]
              : track.title === "AI & Emerging Technology"
                ? [
                    "AI Tools & Prompt Engineering",
                    "Practical AI Project Work",
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
              variants={reveal}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -7,
                      transition: { duration: 0.25 },
                    }
              }
              className="group relative isolate flex h-full min-w-0 flex-col overflow-hidden rounded-3xl border border-[#22E3D6]/15 bg-[rgba(9,24,55,0.78)] p-6 backdrop-blur-xl transition-[border-color,box-shadow] duration-300 hover:border-[#22E3D6]/45 hover:shadow-[0_20px_60px_-25px_rgba(34,227,214,0.3)] sm:p-7"
            >
              {/* CARD GLOW */}
              <div
                className={`pointer-events-none absolute -right-16 -top-16 -z-10 h-44 w-44 rounded-full bg-gradient-to-br ${track.glow} blur-2xl transition-transform duration-500 group-hover:scale-125`}
              />

              {/* ICON AND EMOJI */}
              <div className="flex items-start justify-between gap-4">
                <motion.div
                  whileHover={reduceMotion ? undefined : { rotate: 5, scale: 1.06 }}
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/5 ${track.iconColor}`}
                >
                  <Icon size={27} />
                </motion.div>

                <span className="text-3xl" aria-hidden="true">
                  {track.emoji}
                </span>
              </div>

              {/* TITLE AND DESCRIPTION */}
              <h3 className="mt-6 min-h-[56px] text-xl font-extrabold leading-7 tracking-tight">
                {track.title}
              </h3>

              <p className="mt-3 min-h-[84px] text-sm leading-7 text-[#A1B5D8]">
                {track.description}
              </p>

              {/* SKILLS */}
              <div className="mt-5 flex flex-wrap content-start gap-2">
                {track.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-xs font-medium text-[#D4E3FF] transition-colors duration-200 hover:border-[#22E3D6]/30 hover:bg-[#22E3D6]/[0.06]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* DIVIDER */}
              <div className="my-6 h-px bg-gradient-to-r from-[#22E3D6]/20 via-white/10 to-transparent" />

              {/* TRACK BENEFITS */}
              <div className="flex-1 space-y-3">
                {benefitsForTrack.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={false}
                    whileHover={reduceMotion ? undefined : { x: 3 }}
                    className="flex items-start gap-2.5 text-xs font-semibold leading-5 text-[#D4E3FF]"
                  >
                    <Check
                      size={15}
                      className="mt-0.5 shrink-0 text-[#22E3D6]"
                    />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* DYNAMIC APPLY BUTTON */}
              <div className="mt-8 border-t border-white/[0.07] pt-6">
                <Link
                  href={details.href}
                  aria-label={`${details.buttonText} - ${track.title}`}
                  className={`group/apply relative flex min-h-[52px] w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r ${details.accent} px-5 py-3.5 text-sm font-extrabold text-[#02152B] shadow-[0_6px_24px_-10px_rgba(34,227,214,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-8px_rgba(34,227,214,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#72F7FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#02152B] active:translate-y-0`}
                >
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover/apply:translate-x-full" />

                  <span className="relative">
                    {details.buttonText}
                  </span>

                  <motion.span
                    className="relative flex items-center"
                    animate={
                      reduceMotion
                        ? undefined
                        : { x: [0, 3, 0] }
                    }
                    transition={{
                      duration: 1.5,
                      repeat: reduceMotion ? 0 : Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowRight size={18} />
                  </motion.span>
                </Link>

                <p className="mt-3 text-center text-[11px] leading-5 text-[#8198BD]">
                  Explore program details and eligibility
                </p>
              </div>
            </motion.article>
          );
        })}
      </motion.div>

      {/* FINAL CTA */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={reveal}
        className="relative mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl border border-[#22E3D6]/25 bg-gradient-to-br from-[#0A2D49]/90 to-[#071B34]/90 p-7 text-center shadow-[0_0_60px_-35px_rgba(34,227,214,0.3)] sm:p-10"
      >
        <div className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-[#22E3D6]/10 blur-[70px]" />

        <div className="relative">
          <motion.div
            animate={
              reduceMotion ? undefined : { y: [0, -4, 0] }
            }
            transition={{
              duration: 2.5,
              repeat: reduceMotion ? 0 : Infinity,
              ease: "easeInOut",
            }}
            className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-[#22E3D6]/20 bg-[#22E3D6]/10 text-[#22E3D6]"
          >
            <Sparkles size={24} />
          </motion.div>

          <h3 className="mt-5 text-2xl font-black sm:text-3xl">
            Not Sure Which Path to Choose?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#A1B5D8] sm:text-base">
            Explore your options, understand the program requirements, and
            choose the learning track that fits your interests.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <PrimaryButton href="#internships">
              Explore Programs
            </PrimaryButton>

            <Link
              href="/contact"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-[#22E3D6]/25 bg-white/[0.03] px-6 py-3.5 text-sm font-bold text-[#D4E3FF] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#22E3D6]/50 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22E3D6]"
            >
              Talk to Our Team
              <MessageCircle size={17} />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}