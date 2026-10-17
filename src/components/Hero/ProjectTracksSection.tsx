
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, MessageCircle, ArrowUpRight } from "lucide-react";
import { tracks, trackBenefits, fadeUp, stagger } from "./hero-data";
import { SectionLabel, PrimaryButton } from "./HeroUI";

export default function ProjectTracksSection() {
  return (
    <section id="internships" className="relative isolate overflow-hidden bg-gradient-to-br from-[#032B3E] via-[#042B57] to-[#02152B] px-5 py-20 sm:px-8 sm:py-24">
      <div className="pointer-events-none absolute -left-32 top-32 -z-10 h-96 w-96 rounded-full bg-[#22E3D6]/10 blur-[110px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[110px]" />

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.55 }} className="mx-auto max-w-3xl text-center">
        <SectionLabel>Explore your interests</SectionLabel>
        <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Choose Your Path.
          <span className="block bg-gradient-to-r from-[#22E3D6] to-[#72F7FF] bg-clip-text text-transparent">
            Build Real Skills Through Projects.
          </span>
        </h2>
        <p className="mt-5 text-base leading-7 text-[#D4E3FF]">
          Explore industry-focused learning tracks designed to help you gain
          practical experience, build projects, and prepare for real-world opportunities.
        </p>
      </motion.div>

      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.08 }} className="mx-auto mt-12 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {tracks.map((track) => {
          const Icon = track.icon;
          return (
            <motion.article key={track.title} variants={fadeUp} transition={{ duration: 0.45 }} className="group relative isolate overflow-hidden rounded-3xl border border-[#22E3D6]/15 bg-[rgba(9,24,55,0.75)] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-[#22E3D6]/45 hover:shadow-[0_20px_60px_-25px_rgba(34,227,214,0.25)] sm:p-7">
              <div className={`pointer-events-none absolute -right-16 -top-16 -z-10 h-44 w-44 rounded-full bg-gradient-to-br ${track.glow} blur-2xl transition duration-500 group-hover:scale-125`} />
              <div className="flex items-start justify-between gap-4">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-white/5 ${track.iconColor}`}>
                  <Icon size={26} />
                </div>
                <span className="text-3xl" aria-hidden="true">{track.emoji}</span>
              </div>
              <h3 className="mt-6 text-xl font-extrabold tracking-tight">{track.title}</h3>
              <p className="mt-3 min-h-[84px] text-sm leading-7 text-[#A1B5D8]">{track.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {track.skills.map((skill) => (
                  <span key={skill} className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-xs font-medium text-[#D4E3FF]">{skill}</span>
                ))}
              </div>
              <div className="my-6 h-px bg-gradient-to-r from-[#22E3D6]/20 via-white/10 to-transparent" />
              <div className="space-y-3">
                {["Real Projects", "Mentor Guidance", "Practical Learning"].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs font-semibold text-[#D4E3FF]">
                    <Check size={14} className="shrink-0 text-[#22E3D6]" /> {item}
                  </div>
                ))}
              </div>
              <Link href="/contact" aria-label={`Enquire about ${track.title}`} className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#22E3D6] transition group-hover:gap-3">
                Apply Now <ArrowUpRight size={17} />
              </Link>
            </motion.article>
          );
        })}
      </motion.div>

      <div className="mx-auto mt-16 max-w-7xl">
        <div className="rounded-3xl border border-[#22E3D6]/15 bg-[rgba(9,24,55,0.7)] p-6 backdrop-blur-xl sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#22E3D6]">The TRIQUON advantage</p>
              <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl">Why Learn With TRIQON INDIA?</h3>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#A1B5D8]">Explore the support available in your selected program.</p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {trackBenefits.map((item) => (
              <div key={item} className="flex items-center gap-2.5 rounded-xl border border-[#22E3D6]/10 bg-white/[0.025] p-3 text-xs font-semibold text-[#D4E3FF] transition hover:border-[#22E3D6]/30 hover:bg-[#22E3D6]/[0.05] sm:p-4 sm:text-sm">
                <Check size={15} className="shrink-0 text-[#22E3D6]" /> {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.55 }} className="mx-auto mt-10 max-w-5xl rounded-3xl border border-[#22E3D6]/25 bg-gradient-to-br from-[#0A2D49]/90 to-[#071B34]/90 p-7 text-center shadow-[0_0_60px_-35px_rgba(34,227,214,0.3)] sm:p-10">
        <h3 className="text-2xl font-black sm:text-3xl">Not Sure Which Path To Choose?</h3>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#A1B5D8] sm:text-base">
          Start your journey with TRIQON INDIA and build practical experience
          through structured project-based learning.
        </p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <PrimaryButton href="/contact">Explore Programs</PrimaryButton>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#22E3D6]/25 bg-white/[0.03] px-6 py-3.5 text-sm font-bold text-[#D4E3FF] transition hover:border-[#22E3D6]/50 hover:bg-white/[0.06]">
            Talk To A Mentor <MessageCircle size={17} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
