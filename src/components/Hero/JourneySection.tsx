
"use client";

import { ArrowDown, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Register",
    description: "Submit your details and choose the area you want to explore.",
  },
  {
    number: "02",
    title: "Join Your Batch",
    description: "Get ready to learn, collaborate, and begin your practical project journey. Batch allocation is subject to availability and the Terms & Conditions.",
  },
  {
    number: "03",
    title: "Build Real Projects",
    description: "Work through practical tasks and project milestones with guidance.",
  },
  {
    number: "04",
    title: "Certification",
    description: "Every participant receives an internship completion certificate. Project completion certificates are subject to the applicable completion criteria in the Terms & Conditions.",
  },
  {
    number: "05",
    title: "Career Opportunities",
    description: "Build practical experience and explore career opportunities, including potential PPO opportunities, subject to the Terms & Conditions.",
  },
];

export default function JourneySection() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-[#07111F] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10">
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#14B8A6]/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#0D9488]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <span className="inline-flex items-center rounded-full border border-[#14B8A6]/25 bg-[#14B8A6]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#5EEAD4]">
            Your Journey
          </span>
          <h2 className="mt-6 text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl md:text-5xl">
            Five steps from registration to{" "}
            <span className="bg-gradient-to-r from-[#14B8A6] to-[#5EEAD4] bg-clip-text text-transparent">real-world practice.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#94A3B8] sm:text-base sm:leading-8">
            A clear, project-focused process so you know what happens next.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex">
              <article className="group relative flex w-full flex-col overflow-hidden rounded-[20px] border border-[#243548] bg-[#0D1B2A] p-6 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#14B8A6]/60 hover:bg-[#102638] hover:shadow-xl hover:shadow-[#14B8A6]/5 sm:p-7">
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#14B8A6] to-[#5EEAD4] transition-transform duration-300 group-hover:scale-x-100" />
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 min-w-11 items-center justify-center rounded-xl border border-[#14B8A6]/30 bg-[#14B8A6]/10 px-2 text-sm font-extrabold text-[#5EEAD4]">
                    {step.number}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#102638] text-sm font-bold text-[#14B8A6] transition-colors group-hover:bg-[#14B8A6] group-hover:text-[#07111F]">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-7 text-xl font-bold leading-snug text-white">{step.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-[#94A3B8]">{step.description}</p>
                <div className="mt-7 flex items-center gap-2">
                  <span className="h-1.5 w-8 rounded-full bg-[#14B8A6] transition-all group-hover:w-12" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#243548]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#243548]" />
                </div>
              </article>

              {index < steps.length - 1 && (
                <>
                  <div aria-hidden="true" className="absolute -right-[17px] top-12 z-10 hidden h-8 w-8 items-center justify-center rounded-full border border-[#243548] bg-[#07111F] text-[#14B8A6] lg:flex">
                    <ArrowRight size={15} />
                  </div>
                  <div aria-hidden="true" className="absolute -bottom-[18px] left-1/2 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-[#243548] bg-[#07111F] text-[#14B8A6] sm:hidden">
                    <ArrowDown size={15} />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <span className="h-2 w-2 rounded-full bg-[#14B8A6] shadow-[0_0_12px_rgba(20,184,166,0.6)]" />
          <p className="text-sm leading-6 text-[#94A3B8]">
            Every step is designed to move you closer to practical experience.
          </p>
        </div>
      </div>
    </section>
  );
}
