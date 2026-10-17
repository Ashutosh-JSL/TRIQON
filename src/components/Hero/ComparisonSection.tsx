
"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { comparisons, fadeUp } from "./hero-data";
import { SectionLabel } from "./HeroUI";

export default function ComparisonSection() {
  return (
    <section id="comparison" className="relative bg-[#02152B] px-4 py-20 sm:px-6 sm:py-24">
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-[#22E3D6]/5 blur-[100px]" />

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.6 }} className="relative mx-auto max-w-3xl text-center">
        <SectionLabel>Compare your options</SectionLabel>
        <h2 className="mt-6 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
          Beyond Free Internships
          <span className="mt-2 block bg-gradient-to-r from-[#22E3D6] to-[#72F7FF] bg-clip-text text-transparent">
            More Structure. More Support.
          </span>
        </h2>
        <p className="mt-5 text-base leading-7 text-[#A1B5D8] sm:text-lg">
          Compare the learning structure, project experience, mentor support,
          and career preparation offered by different programs.
        </p>
      </motion.div>

      <div className="mx-auto mt-12 max-w-6xl">
        <div className="sticky top-0 z-30 grid grid-cols-2 gap-3 border-b border-white/10 bg-[#02152B]/95 py-3 backdrop-blur-xl lg:hidden">
          <div className="rounded-2xl border border-white/10 bg-slate-100 p-4 text-[#10233D]">
            <p className="text-sm font-bold">Free Internships</p>
            <p className="mt-1 text-2xl font-black">₹0</p>
            <p className="mt-1 text-xs text-slate-500">Varies by provider</p>
          </div>
          <div className="rounded-2xl border border-[#22E3D6]/50 bg-gradient-to-br from-[#0B4050] to-[#09233F] p-4">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#22E3D6]">Most Popular</span>
            <p className="mt-1 text-sm font-bold">TRIQON INDIA</p>
            <p className="mt-1 text-2xl font-black text-[#22E3D6]">₹499</p>
          </div>
        </div>

        <div className="mt-5 space-y-4 lg:hidden">
          {comparisons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.08 }} variants={fadeUp} transition={{ duration: 0.35, delay: (index % 3) * 0.04 }} className="overflow-hidden rounded-2xl border border-[#22E3D6]/10 bg-[rgba(9,24,55,0.75)]">
                <div className="flex items-center gap-3 border-b border-white/10 px-4 py-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#22E3D6]/10 text-[#22E3D6]"><Icon size={18} /></span>
                  <h3 className="text-sm font-bold text-white">{item.title}</h3>
                </div>
                <div className="grid grid-cols-2">
                  <div className="p-4">
                    <p className="mb-2 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#A1B5D8]"><X size={13} /> Free</p>
                    <p className="text-sm leading-6 text-[#A1B5D8]">{item.free}</p>
                  </div>
                  <div className="border-l border-[#22E3D6]/15 bg-[#22E3D6]/[0.06] p-4">
                    <p className="mb-2 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#22E3D6]"><Check size={13} /> TRIQON</p>
                    <p className="text-sm font-semibold leading-6 text-[#D4E3FF]">{item.triqon}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="hidden overflow-hidden rounded-3xl border border-[#22E3D6]/15 bg-[rgba(9,24,55,0.75)] shadow-2xl shadow-black/20 lg:block">
          <div className="grid grid-cols-[1.1fr_1fr_1fr] border-b border-white/10 bg-[#071C36]/95">
            <div className="p-6">
              <p className="text-sm font-bold text-[#D4E3FF]">Compare features</p>
              <p className="mt-1 text-xs text-[#A1B5D8]">Choose what suits your goals</p>
            </div>
            <div className="border-l border-white/10 p-6">
              <h3 className="text-lg font-extrabold">Free Internships</h3>
              <p className="mt-2 text-3xl font-black">₹0</p>
              <p className="mt-1 text-xs text-[#A1B5D8]">Depends on provider</p>
            </div>
            <div className="relative border-x border-[#22E3D6]/20 bg-gradient-to-br from-[#0B4050] to-[#09233F] p-6">
              <span className="absolute right-4 top-4 rounded-full bg-[#22E3D6] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#02152B]">Most Popular</span>
              <h3 className="mt-4 text-lg font-extrabold">TRIQON INDIA</h3>
              <p className="mt-2 text-3xl font-black text-[#22E3D6]">₹499</p>
              <p className="mt-1 text-xs text-[#D4E3FF]">Structured learning program</p>
            </div>
          </div>

          {comparisons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.3, delay: (index % 4) * 0.035 }} className={`grid grid-cols-[1.1fr_1fr_1fr] ${index !== comparisons.length - 1 ? "border-b border-white/[0.07]" : ""}`}>
                <div className="flex items-center gap-3 p-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] text-[#22E3D6]"><Icon size={18} /></span>
                  <span className="text-sm font-bold text-[#D4E3FF]">{item.title}</span>
                </div>
                <div className="flex items-center border-l border-white/[0.07] p-5">
                  <div className="flex items-start gap-2.5"><X size={16} className="mt-1 shrink-0 text-slate-500" /><p className="text-sm leading-6 text-[#A1B5D8]">{item.free}</p></div>
                </div>
                <div className="flex items-center border-x border-[#22E3D6]/10 bg-[#22E3D6]/[0.045] p-5">
                  <div className="flex items-start gap-2.5"><Check size={16} className="mt-1 shrink-0 text-[#22E3D6]" /><p className="text-sm font-semibold leading-6 text-[#D4E3FF]">{item.triqon}</p></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-5 text-xs leading-5 text-[#8198BD]">
          Free internship offerings vary by provider. TRIQUON INDIA program
          features are subject to actual availability, published program details,
          and applicable terms.
        </p>
      </div>
    </section>
  );
}
