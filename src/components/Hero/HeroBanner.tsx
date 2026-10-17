
"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { fadeUp, stagger } from "./hero-data";
import { SectionLabel, PrimaryButton } from "./HeroUI";

export default function HeroBanner() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-gradient-to-br from-[#032B3E] via-[#042B57] to-[#02152B]">
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 22, 0], y: [0, -18, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-32 -top-32 -z-10 h-[440px] w-[440px] rounded-full bg-[#22E3D6]/10 blur-[100px]"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -bottom-40 left-0 -z-10 h-[420px] w-[420px] rounded-full bg-blue-500/15 blur-[110px]"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-12 lg:py-24">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeUp} transition={{ duration: 0.55 }}>
            <SectionLabel>Learn • Build • Grow</SectionLabel>
          </motion.div>

          <motion.p variants={fadeUp} transition={{ duration: 0.55 }} className="mt-8 text-sm font-bold tracking-[0.24em] text-[#A1B5D8]">
            TRIQON INDIA
          </motion.p>

          <motion.h1 variants={fadeUp} transition={{ duration: 0.6 }} className="mt-4 max-w-3xl text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-7xl">
            Your Skills.
            <span className="block">Your Projects.</span>
            <span className="mt-1 block bg-gradient-to-r from-[#22E3D6] via-[#72F7FF] to-white bg-clip-text pb-2 text-transparent">
              Your Future.
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} transition={{ duration: 0.6 }} className="mt-6 max-w-xl text-base leading-8 text-[#D4E3FF] sm:text-lg">
            Discover what makes TRIQON INDIA different. Explore structured
            learning, mentor support, practical projects, and career-focused guidance.
          </motion.p>

          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <PrimaryButton href="#internships">Explore Programs</PrimaryButton>
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[#D4E3FF]">
              <ShieldCheck size={18} className="text-[#22E3D6]" />
              Practical Learning Experience
            </div>
          </motion.div>

          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="mt-10 flex flex-wrap gap-5 text-xs font-semibold text-[#A1B5D8]">
            {["Project-based learning", "Mentor support", "Career preparation"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <Check size={15} className="text-[#22E3D6]" />
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-[#22E3D6]/50 via-blue-500/20 to-cyan-300/30 opacity-70 blur-xl" />

          <div className="relative rounded-[2rem] border border-[#22E3D6]/20 bg-[rgba(9,24,55,0.85)] p-6 shadow-2xl backdrop-blur-2xl sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A1B5D8]">Your learning journey</p>
                <h2 className="mt-2 text-xl font-extrabold sm:text-2xl">TRIQON INDIA</h2>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#22E3D6]/20 bg-[#22E3D6]/10 text-[#22E3D6]">
                <Zap size={24} />
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-[#22E3D6]/15 bg-gradient-to-br from-[#22E3D6]/10 to-blue-500/5 p-5">
              <p className="text-sm font-medium text-[#A1B5D8]">Program Fee</p>
              <div className="mt-2 flex items-end gap-2">
                <span className="text-5xl font-black tracking-tight">₹499</span>
                <span className="pb-2 text-sm text-[#A1B5D8]">per program</span>
              </div>
              <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#22E3D6]/10 px-3 py-1.5 text-xs font-bold text-[#22E3D6]">
                <Sparkles size={13} /> Learn • Build • Grow
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {["Real Projects", "Mentor Support", "Career Guidance", "Industry-inspired Learning"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-[#D4E3FF]">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#22E3D6]/10 text-[#22E3D6]">
                    <Check size={14} />
                  </span>
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-7 border-t border-white/10 pt-5 text-xs leading-5 text-[#A1B5D8]">
              Program inclusions and eligibility are subject to the applicable
              program details and terms.
            </div>
          </div>

          <motion.div animate={{ y: [0, -7, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -right-2 top-16 hidden rounded-xl border border-[#22E3D6]/20 bg-[#0A2140] px-4 py-3 shadow-xl sm:block md:-right-8">
            <div className="flex items-center gap-2 text-sm font-bold">
              <span className="h-2 w-2 rounded-full bg-[#22E3D6]" />
              Learn by doing
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-[#22E3D6]/40 to-transparent" />
    </section>
  );
}
