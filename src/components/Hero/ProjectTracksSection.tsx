
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
  Bot,
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

const commonBenefits = [
  "Practical Learning",
  "Mentor Guidance",
  "Project-Based Experience",
  "Structured Learning Path",
];

function getTrackDetails(title: string) {
  if (title === "Web Development") {
    return {
      href: "/apply/web-development",
      buttonText: "Explore Web Development",
      description:
        "Learn modern web technologies and apply your skills through practical development projects.",
      accent: "text-cyan-300",
    };
  }

  if (title === "AI & Emerging Technology") {
    return {
      href: "/apply/ai-emerging-technology",
      buttonText: "Explore AI Program",
      description:
        "Explore AI tools, prompt engineering, automation, and emerging technologies through practical projects.",
      accent: "text-emerald-300",
    };
  }

  return {
    href: "/contact",
    buttonText: "Enquire About This Track",
    description: "",
    accent: "text-cyan-300",
  };
}

export default function ProjectTracksSection() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 22,
    },
    visible: {
      opacity: 1,
      y: 0,
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
        transition={{ duration: reduceMotion ? 0 : 0.55 }}
        className="mx-auto max-w-3xl text-center"
      >
        <SectionLabel>Explore Your Interests</SectionLabel>

        <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Choose Your Path.
          <span className="block bg-gradient-to-r from-[#22E3D6] to-[#72F7FF] bg-clip-text text-transparent">
            Build Skills That Matter.
          </span>
        </h2>

        <p className="mt-5 text-base leading-7 text-[#D4E3FF]">
          Go beyond theory with structured learning, mentor guidance, and
          practical project experience. Explore a track that matches your
          interests and career goals.
        </p>
      </motion.div>

      {/* PROGRAM VALUE STRIP */}
      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-3 lg:grid-cols-4">
        {programDetails.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={reveal}
              transition={{
                duration: reduceMotion ? 0 : 0.4,
                delay: reduceMotion ? 0 : index * 0.06,
              }}
              className="rounded-2xl border border-[#22E3D6]/15 bg-[rgba(9,24,55,0.65)] p-4 text-center backdrop-blur-xl transition hover:border-[#22E3D6]/35 hover:bg-[#22E3D6]/[0.04] sm:p-5"
            >
              <Icon className="mx-auto text-[#22E3D6]" size={23} />

              <p className="mt-3 text-xl font-black sm:text-2xl">
                {item.value}
              </p>

              <p className="mt-1 text-xs leading-5 text-[#A1B5D8] sm:text-sm">
                {item.label}
              </p>
            </motion.div>
          );
        })}
      </div>

      <p className="mx-auto mt-4 max-w-3xl text-center text-xs leading-6 text-[#A1B5D8]">
        Program details, completion requirements, certification eligibility,
        and PPO consideration are subject to the applicable program terms
        and selection criteria.
      </p>

      {/* TRACK CARDS */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
        className="mx-auto mt-14 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3"
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
                : commonBenefits.slice(0, 3);

          return (
            <motion.article
              key={track.title}
              variants={reveal}
              transition={{ duration: reduceMotion ? 0 : 0.45 }}
              whileHover={reduceMotion ? undefined : { y: -6 }}
              className="group relative isolate flex h-full flex-col overflow-hidden rounded-3xl border border-[#22E3D6]/15 bg-[rgba(9,24,55,0.78)] p-6 backdrop-blur-xl transition duration-300 hover:border-[#22E3D6]/45 hover:shadow-[0_20px_60px_-25px_rgba(34,227,214,0.25)] sm:p-7"
            >
              {/* CARD GLOW */}
              <div
                className={`pointer-events-none absolute -right-16 -top-16 -z-10 h-44 w-44 rounded-full bg-gradient-to-br ${track.glow} blur-2xl transition duration-500 group-hover:scale-125`}
              />

              {/* ICON AND EMOJI */}
              <div className="flex items-start justify-between gap-4">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-white/5 ${track.iconColor}`}
                >
                  <Icon size={27} />
                </div>

                <span className="text-3xl" aria-hidden="true">
                  {track.emoji}
                </span>
              </div>

              {/* TITLE AND DESCRIPTION */}
              <h3 className="mt-6 text-xl font-extrabold tracking-tight">
                {track.title}
              </h3>

              <p className="mt-3 min-h-[84px] text-sm leading-7 text-[#A1B5D8]">
                {track.description}
              </p>

              {/* SKILLS */}
              <div className="mt-5 flex flex-wrap gap-2">
                {track.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-xs font-medium text-[#D4E3FF]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* TRACK BENEFITS */}
              <div className="my-6 h-px bg-gradient-to-r from-[#22E3D6]/20 via-white/10 to-transparent" />

              <div className="flex-1 space-y-3">
                {benefitsForTrack.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2.5 text-xs font-semibold leading-5 text-[#D4E3FF]"
                  >
                    <Check
                      size={15}
                      className="mt-0.5 shrink-0 text-[#22E3D6]"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* TRACK-SPECIFIC CTA */}
              <Link
                href={details.href}
                aria-label={`${details.buttonText} - ${track.title}`}
                className={`mt-7 inline-flex w-fit items-center gap-2 text-sm font-bold ${details.accent} transition-all duration-300 group-hover:gap-3`}
              >
                {details.buttonText}
                <ArrowUpRight size={17} />
              </Link>
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
        transition={{ duration: reduceMotion ? 0 : 0.55 }}
        className="mx-auto mt-10 max-w-5xl rounded-3xl border border-[#22E3D6]/25 bg-gradient-to-br from-[#0A2D49]/90 to-[#071B34]/90 p-7 text-center shadow-[0_0_60px_-35px_rgba(34,227,214,0.3)] sm:p-10"
      >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-[#22E3D6]/20 bg-[#22E3D6]/10 text-[#22E3D6]">
          <Sparkles size={24} />
        </div>

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
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#22E3D6]/25 bg-white/[0.03] px-6 py-3.5 text-sm font-bold text-[#D4E3FF] transition hover:border-[#22E3D6]/50 hover:bg-white/[0.06]"
          >
            Talk to Our Team
            <MessageCircle size={17} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
