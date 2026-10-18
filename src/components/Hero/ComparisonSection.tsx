"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Users,
  Clock,
  BookOpen,
  Network,
  ClipboardCheck,
  MessageCircle,
  FolderKanban,
  Award,
  BadgeCheck,
} from "lucide-react";
import { comparisons, fadeUp } from "./hero-data";
import { SectionLabel } from "./HeroUI";

export default function ComparisonSection() {
  return (
    <section
      id="comparison"
      className="relative overflow-hidden bg-[#02152B] px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-[#22E3D6]/5 blur-[100px]"
      />

      {/* Section heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-3xl text-center"
      >
        <SectionLabel>THE TRIQON EXPERIENCE</SectionLabel>

        <h2 className="mt-6 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
          More Than Learning.
          <span className="mt-2 block bg-gradient-to-r from-[#22E3D6] to-[#72F7FF] bg-clip-text text-transparent">
            Guided Industry Project Experience.
          </span>
        </h2>

        <p className="mt-5 text-base leading-7 text-[#A1B5D8] sm:text-lg">
          Learn with mentors, collaborate with fellow interns, and contribute
          to industry-based projects through structured, practical work.
        </p>
      </motion.div>

      {/* Program benefits */}
      <div className="relative mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {comparisons.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.article
              key={item.title}
              initial={{
                opacity: 0,
                y: 18,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 0.45,
                delay: (index % 3) * 0.08,
              }}
              className="group relative overflow-hidden rounded-2xl border border-[#22E3D6]/10 bg-[rgba(9,24,55,0.75)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#22E3D6]/35 hover:bg-[#0A2340] sm:p-6"
            >
              {/* Hover accent */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#22E3D6]/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#22E3D6]/15 bg-[#22E3D6]/10 text-[#22E3D6] transition-transform duration-300 group-hover:scale-105">
                <Icon size={22} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#A1B5D8]">
                {item.description}
              </p>
            </motion.article>
          );
        })}
      </div>

      {/* Fee information */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="relative mx-auto mt-10 flex max-w-3xl flex-col items-center justify-between gap-5 rounded-2xl border border-[#22E3D6]/20 bg-gradient-to-r from-[#0B2847] to-[#09233F] p-6 text-center sm:flex-row sm:text-left"
      >
        <div>
          <p className="text-sm font-semibold text-[#A1B5D8]">
            Explore our project-based programs
          </p>

          <p className="mt-1 text-2xl font-black text-white sm:text-3xl">
            Practical learning, with mentor guidance.
          </p>

          <p className="mt-2 text-xs leading-5 text-[#A1B5D8]">
            Review program details, eligibility, and applicable terms before
            registering.
          </p>
        </div>

        <a
          href="/contact"
          className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#22E3D6] px-5 py-3 text-sm font-extrabold text-[#02152B] transition hover:bg-[#72F7FF] active:scale-[0.98]"
        >
          Explore Programs
          <BriefcaseBusiness size={17} />
        </a>
      </motion.div>

      <p className="relative mx-auto mt-6 max-w-3xl text-center text-xs leading-5 text-[#8198BD]">
        Program features and learning resources are subject to availability
        and published program details. Certificate eligibility is subject
        to applicable completion criteria. Employment and PPO are not
        guaranteed.
      </p>
    </section>
  );
}