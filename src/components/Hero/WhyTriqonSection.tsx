
"use client";

import { motion } from "framer-motion";
import {
  Check,
  BriefcaseBusiness,
  GraduationCap,
  Users,
  Code2,
  ClipboardCheck,
  Lightbulb,
  FolderCheck,
  Award,
  Sparkles,
} from "lucide-react";

import { fadeUp } from "./hero-data";
import { SectionLabel, PrimaryButton } from "./HeroUI";

const floatingBenefits = [
  {
    title: "Industry-Based Project Experience",
    icon: BriefcaseBusiness,
    position: "sm:translate-y-3",
  },
  {
    title: "Mentor-Guided Learning",
    icon: GraduationCap,
    position: "sm:-translate-y-2",
  },
  {
    title: "Collaborative Project Work",
    icon: Users,
    position: "sm:translate-y-2",
  },
  {
    title: "Practical Skill Development",
    icon: Code2,
    position: "sm:-translate-y-3",
  },
  {
    title: "Hands-On Assignments",
    icon: ClipboardCheck,
    position: "sm:translate-y-1",
  },
  {
    title: "Real-World Problem Solving",
    icon: Lightbulb,
    position: "sm:-translate-y-2",
  },
  {
    title: "Project Deliverables",
    icon: FolderCheck,
    position: "sm:translate-y-3",
  },
  {
    title: "Internship Certificate*",
    icon: Award,
    position: "sm:-translate-y-1",
  },
  {
    title: "PPO Opportunity*",
    icon: BriefcaseBusiness,
    position: "sm:-translate-y-3",
    featured: true,
  },
];

export default function WhyTriqonSection() {
  return (
    <section
      id="why-Triqon"
      className="relative isolate overflow-hidden bg-[#02152B] px-5 py-20 sm:px-8 sm:py-24"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#22E3D6]/10 blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#72F7FF]/[0.07] blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        {/* Left content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.55 }}
        >
          <SectionLabel>Value Beyond the Price</SectionLabel>

          <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            More Than a Program.
            <span className="mt-2 block bg-gradient-to-r from-[#22E3D6] via-[#72F7FF] to-[#22E3D6] bg-clip-text text-transparent">
              An Investment in Your Growth.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-[#A1B5D8]">
            Build practical skills, work on industry-based projects, learn
            collaboratively, and prepare for your next career opportunity
            through a structured learning experience.
          </p>

          {/* Quick highlights */}
          <div className="mt-7 flex flex-wrap gap-2">
            {["Learn", "Build", "Demonstrate", "Grow"].map((item, index) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.35 }}
                className="rounded-full border border-[#22E3D6]/20 bg-[#22E3D6]/[0.06] px-3 py-1.5 text-xs font-semibold text-[#BDEFF2]"
              >
                {item}
              </motion.span>
            ))}
          </div>

          <div className="mt-8">
            <PrimaryButton href="#internships">
              Explore Project Tracks
            </PrimaryButton>
          </div>

          <p className="mt-5 text-xs leading-5 text-[#8198BD]">
            *Certificate is subject to successful completion requirements.
            PPO consideration, where available, is subject to eligibility
            and selection and is not guaranteed.
          </p>
        </motion.div>

        {/* Right side: floating benefit cards */}
        <div className="relative">
          {/* Decorative orbit rings */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[115%] w-[115%] -translate-x-1/2 -translate-y-1/2 rounded-[40%] border border-[#22E3D6]/[0.08] rotate-12"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[95%] w-[95%] -translate-x-1/2 -translate-y-1/2 rounded-[35%] border border-dashed border-[#22E3D6]/10 -rotate-12"
          />

          {/* Floating center decoration */}
          <motion.div
            aria-hidden="true"
            animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#22E3D6]/[0.05] blur-2xl sm:h-56 sm:w-56"
          />

          <div className="relative z-10 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-5">
            {floatingBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const isFeatured = Boolean(benefit.featured);

              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 25, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                    ease: "easeOut",
                  }}
                  animate={{
                    y: [0, index % 2 === 0 ? -5 : 5, 0],
                  }}
                  whileHover={{
                    y: -7,
                    scale: 1.025,
                    transition: { duration: 0.2 },
                  }}
                  className={`group relative flex min-h-[82px] items-center gap-3 overflow-hidden rounded-2xl border p-4 shadow-lg backdrop-blur-xl transition-colors duration-300 ${
                    isFeatured
                      ? "border-[#22E3D6]/50 bg-gradient-to-br from-[#0B4050] to-[#09233F] shadow-[#22E3D6]/10 sm:col-span-2 sm:mx-8"
                      : `border-[#22E3D6]/15 bg-[rgba(9,24,55,0.78)] hover:border-[#22E3D6]/40 hover:bg-[#0A2844] ${benefit.position}`
                  }`}
                  style={{
                    animationDelay: `${index * 150}ms`,
                  }}
                >
                  {/* Hover glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#22E3D6]/[0.07] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />

                  <span
                    className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${
                      isFeatured
                        ? "border-[#22E3D6]/30 bg-[#22E3D6]/15 text-[#72F7FF]"
                        : "border-[#22E3D6]/15 bg-[#22E3D6]/[0.08] text-[#22E3D6]"
                    }`}
                  >
                    <Icon size={20} strokeWidth={1.8} />
                  </span>

                  <div className="relative min-w-0 flex-1">
                    {isFeatured && (
                      <span className="mb-1 inline-flex items-center gap-1 text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#72F7FF]">
                        <Sparkles size={11} />
                        Career Opportunity
                      </span>
                    )}

                    <p className="text-sm font-bold leading-5 text-[#D4E3FF]">
                      {benefit.title}
                    </p>

                    {isFeatured && (
                      <p className="mt-1 text-xs leading-5 text-[#A1D9E1]">
                        Potential consideration based on eligibility,
                        performance, and selection.
                      </p>
                    )}
                  </div>

                  <span
                    className={`relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                      isFeatured
                        ? "bg-[#22E3D6] text-[#02152B]"
                        : "bg-[#22E3D6]/10 text-[#22E3D6]"
                    }`}
                  >
                    <Check size={14} strokeWidth={2.5} />
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom decorative label */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="relative z-10 mt-6 flex items-center justify-center gap-2 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-[#8198BD]"
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#22E3D6]/40" />
            Learn With Purpose · Build With Confidence
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#22E3D6]/40" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
