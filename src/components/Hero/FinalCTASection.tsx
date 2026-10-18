
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { PrimaryButton } from "./HeroUI";

export default function FinalCTASection() {
  return (
    <section className="bg-[#02152B] px-5 py-20 sm:px-8 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-[#22E3D6]/20 bg-gradient-to-br from-[#07354A] via-[#073052] to-[#031A32] px-6 py-14 text-center shadow-[0_0_80px_-45px_rgba(34,227,214,0.3)] sm:px-12 sm:py-16"
      >
        <motion.div
          aria-hidden="true"
          animate={{ scale: [1, 1.12, 1], opacity: [0.12, 0.22, 0.12] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-[#22E3D6]/20 blur-[90px]"
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#22E3D6]/25 bg-[#22E3D6]/10 text-[#22E3D6]">
            <Sparkles size={26} />
          </div>

          <h2 className="mt-6 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Ready To Build
            <span className="block bg-gradient-to-r from-[#22E3D6] to-[#72F7FF] bg-clip-text text-transparent">
              Real Experience?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#D4E3FF]">
            Explore project-based learning, mentorship, and opportunities
            to develop practical skills for your future.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <PrimaryButton href="#internships">Explore Programs</PrimaryButton>
            <Link
              href="#comparison"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#22E3D6]/25 bg-white/[0.03] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-[#22E3D6]/50"
            >
              Compare Benefits
              <ArrowRight size={17} />
            </Link>
          </div>

          <p className="mt-5 text-xs leading-5 text-[#A1B5D8]">
            Review the program details, fee, eligibility, and applicable
            terms before registering.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
