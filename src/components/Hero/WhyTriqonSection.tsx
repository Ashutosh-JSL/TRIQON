
"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { benefits, fadeUp, stagger } from "./hero-data";
import { SectionLabel, PrimaryButton } from "./HeroUI";

export default function WhyTriqonSection() {
  return (
    <section id="why-triqon" className="bg-[#02152B] px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.55 }}>
          <SectionLabel>Value beyond the price</SectionLabel>
          <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            ₹499 Is Not Just
            <span className="block bg-gradient-to-r from-[#22E3D6] to-[#72F7FF] bg-clip-text text-transparent">About a Program.</span>
            <span className="block">It’s About Your Growth.</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#A1B5D8]">
            Invest your time in structured learning, practical work, and
            career preparation. Review the program inclusions and decide
            whether they fit your goals.
          </p>
          <div className="mt-8">
            <PrimaryButton href="#tracks">Explore Project Tracks</PrimaryButton>
          </div>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid gap-3 sm:grid-cols-2">
          {benefits.map((benefit, index) => (
            <motion.div key={benefit} variants={fadeUp} transition={{ duration: 0.35 }} className={`flex items-center gap-3 rounded-xl border border-[#22E3D6]/15 bg-[rgba(9,24,55,0.75)] p-4 ${index === 0 ? "sm:col-span-2 sm:p-5" : ""}`}>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#22E3D6]/10 text-[#22E3D6]"><Check size={17} /></span>
              <span className="text-sm font-semibold text-[#D4E3FF]">{benefit}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
