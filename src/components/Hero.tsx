"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  GraduationCap,
  Lightbulb,
  Megaphone,
  Palette,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Wallet,
  Zap,
} from "lucide-react";

const tracks = [
  {
    title: "Web Development",
    description: "Build modern websites and practical web applications.",
    icon: Code2,
    tag: "Development",
    color: "bg-violet-100 text-violet-700",
  },
  {
    title: "Data Analytics",
    description: "Turn real-world data into meaningful insights.",
    icon: Database,
    tag: "Data & Insights",
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "UI/UX Design",
    description: "Create intuitive, user-friendly digital experiences.",
    icon: Palette,
    tag: "Creative",
    color: "bg-pink-100 text-pink-700",
  },
  {
    title: "Digital Marketing",
    description: "Explore content, campaigns, and digital growth.",
    icon: Megaphone,
    tag: "Marketing",
    color: "bg-orange-100 text-orange-700",
  },
  {
    title: "Business & Strategy",
    description: "Develop problem-solving and business thinking skills.",
    icon: BriefcaseBusiness,
    tag: "Business",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    title: "Explore Your Potential",
    description: "Discover new skills through guided practical learning.",
    icon: Lightbulb,
    tag: "Skill Building",
    color: "bg-amber-100 text-amber-700",
  },
];

const steps = [
  {
    number: "01",
    title: "Register",
    description: "Share your details and tell us about your interests.",
    icon: Users,
  },
  {
    number: "02",
    title: "Get Guidance",
    description: "Understand the program, expectations, and learning path.",
    icon: GraduationCap,
  },
  {
    number: "03",
    title: "Interview Round",
    description: "Participate in the applicable selection process.",
    icon: Target,
  },
  {
    number: "04",
    title: "Work on Projects",
    description: "Build practical skills through guided project work.",
    icon: BriefcaseBusiness,
  },
  {
    number: "05",
    title: "Complete & Grow",
    description:
      "Meet program requirements and receive applicable completion benefits.",
    icon: Sparkles,
  },
];

export default function Hero() {
  return (
    <main className="overflow-hidden bg-white text-[#17132D]">
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#F4F0FF] via-[#FBFAFF] to-[#EDE7FF]">
        <div className="pointer-events-none absolute -right-24 -top-28 -z-10 h-[420px] w-[420px] rounded-full bg-violet-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-fuchsia-200/30 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-10 lg:px-10 lg:py-24">
          {/* LEFT CONTENT */}
          <div className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-4 py-2 text-sm font-semibold text-[#6544D6] shadow-sm">
              <Sparkles size={16} />
              Learn. Build. Grow.
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Practical learning opportunities
            </div>

            <h1 className="text-4xl font-black leading-[1.12] tracking-tight sm:text-5xl lg:text-[4.25rem]">
              Turn Your
              <span className="block">Potential Into</span>
              <span className="mt-1 block bg-gradient-to-r from-[#6138D9] via-[#8255F6] to-[#B04BEA] bg-clip-text pb-2 text-transparent">
                Real Experience.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#625B78] sm:text-lg">
              Go beyond classroom learning. Explore practical projects,
              develop industry-relevant skills, and take the next step
              toward your professional journey with TRIQUON INDIA.
            </p>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
              {[
                "Practical projects",
                "Skill development",
                "Mentor guidance",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm font-semibold text-[#393052]"
                >
                  <CheckCircle2
                    size={17}
                    className="shrink-0 text-[#7048E8]"
                  />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#contact"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-[#6D4AFF] px-7 py-4 text-base font-bold text-white shadow-[0_12px_30px_-10px_rgba(109,74,255,0.65)] transition hover:-translate-y-1 hover:bg-[#5935E5] hover:shadow-[0_16px_35px_-10px_rgba(109,74,255,0.7)]"
              >
                Explore Opportunities
                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="#how-it-works"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-violet-200 bg-white/80 px-7 py-4 text-base font-bold text-[#5136B9] shadow-sm transition hover:-translate-y-1 hover:border-violet-400 hover:bg-white"
              >
                How It Works
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <p className="mt-5 text-xs leading-6 text-[#77708D]">
              Program availability, eligibility, selection, and benefits
              are subject to the applicable program terms.
            </p>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative mx-auto w-full max-w-[540px] lg:ml-auto">
            <div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-violet-300/50 via-fuchsia-200/40 to-indigo-200/50 blur-2xl" />

            <div className="relative rounded-[2rem] border border-white/80 bg-white/75 p-4 shadow-[0_25px_80px_-25px_rgba(73,48,145,0.30)] backdrop-blur-xl sm:p-6">
              <div className="flex items-center justify-between gap-3 border-b border-violet-100 pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8877BD]">
                    Your next chapter
                  </p>
                  <h2 className="mt-2 text-xl font-extrabold sm:text-2xl">
                    Build your future.
                  </h2>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6D4AFF] text-white shadow-lg shadow-violet-200">
                  <Zap size={23} fill="currentColor" />
                </div>
              </div>

              <div className="relative mt-5 overflow-hidden rounded-3xl bg-gradient-to-br from-[#6D4AFF] via-[#7851EE] to-[#9C5BEA] p-6 text-white sm:p-7">
                <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full border-[24px] border-white/10" />
                <div className="absolute -bottom-14 right-20 h-32 w-32 rounded-full bg-fuchsia-300/20 blur-xl" />

                <div className="relative">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-xs font-semibold">
                    <Sparkles size={14} />
                    Learn by doing
                  </span>

                  <h3 className="mt-6 max-w-sm text-2xl font-extrabold leading-snug sm:text-3xl">
                    Your ideas deserve to become real projects.
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/80">
                    Put your skills into practice, solve problems, and
                    build work you can learn from.
                  </p>

                  <div className="mt-7 flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#7650EC] bg-amber-200 text-sm font-black text-amber-900">
                        S
                      </div>
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#7650EC] bg-sky-200 text-sm font-black text-sky-900">
                        D
                      </div>
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#7650EC] bg-pink-200 text-sm font-black text-pink-900">
                        C
                      </div>
                    </div>

                    <p className="text-xs font-medium text-white/90">
                      Students. Skills. Possibilities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-violet-100 bg-[#F8F5FF] p-4 transition hover:border-violet-300 hover:bg-violet-50">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-200 text-violet-800">
                    <BriefcaseBusiness size={20} />
                  </div>
                  <h3 className="mt-3 text-sm font-bold">
                    Project Experience
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-[#746B8D]">
                    Apply what you learn.
                  </p>
                </div>

                <div className="rounded-2xl border border-fuchsia-100 bg-[#FFF5FC] p-4 transition hover:border-fuchsia-300 hover:bg-fuchsia-50">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-fuchsia-200 text-fuchsia-800">
                    <GraduationCap size={21} />
                  </div>
                  <h3 className="mt-3 text-sm font-bold">
                    Guided Learning
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-[#746B8D]">
                    Grow with direction.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-2 hidden items-center gap-3 rounded-2xl border border-white bg-white px-4 py-3 shadow-xl sm:flex md:-left-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <ShieldCheck size={22} />
              </div>
              <div>
                <p className="text-sm font-extrabold">A clear journey</p>
                <p className="text-xs text-[#817991]">
                  Understand each step
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-2 bg-gradient-to-r from-violet-400 via-fuchsia-300 to-indigo-400" />
      </section>

      {/* BENEFITS STRIP */}
      <section className="border-b border-violet-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-5 py-8 sm:px-8 md:grid-cols-4 lg:px-10">
          {[
            {
              icon: BriefcaseBusiness,
              title: "Practical Projects",
              subtitle: "Learn through application",
            },
            {
              icon: GraduationCap,
              title: "Skill Development",
              subtitle: "Strengthen your abilities",
            },
            {
              icon: Users,
              title: "Mentor Guidance",
              subtitle: "Get learning support",
            },
            {
              icon: Wallet,
              title: "Program Benefits",
              subtitle: "See applicable terms",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group flex items-center gap-3 rounded-2xl p-3 transition hover:bg-[#F8F5FF]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F0EAFF] text-[#6D4AFF] transition group-hover:bg-[#6D4AFF] group-hover:text-white">
                  <Icon size={22} />
                </div>

                <div>
                  <h3 className="text-sm font-extrabold text-[#29213E]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-[#817991]">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="relative overflow-hidden bg-[#FAF9FF] py-20 sm:py-24"
      >
        <div className="pointer-events-none absolute -right-28 top-20 h-72 w-72 rounded-full bg-violet-200/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#6845D8]">
              <Target size={15} />
              The process
            </span>

            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              From application
              <span className="block text-[#7048E8]">
                to practical experience.
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-[#6D6680]">
              A simple overview of the journey, from registration to
              project participation and program completion.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group relative rounded-3xl border border-violet-100 bg-white p-6 shadow-[0_8px_30px_-20px_rgba(72,45,145,0.30)] transition duration-300 hover:-translate-y-2 hover:border-violet-300 hover:shadow-[0_20px_40px_-20px_rgba(109,74,255,0.35)]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#EDE6FF] to-[#F8E8FF] text-[#6D4AFF] transition group-hover:from-[#6D4AFF] group-hover:to-[#9456F0] group-hover:text-white">
                      <Icon size={23} />
                    </div>

                    <span className="text-3xl font-black text-violet-100 transition group-hover:text-violet-200">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-extrabold">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#777087]">
                    {step.description}
                  </p>

                  {index < steps.length - 1 && (
                    <div className="absolute -right-3 top-11 z-10 hidden h-6 w-6 items-center justify-center rounded-full border border-violet-100 bg-white text-violet-500 lg:flex">
                      <ArrowRight size={13} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#6D4AFF] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-[#5935E5]"
            >
              Take the Next Step
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* PROGRAM TRACKS */}
      <section id="programs" className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-fuchsia-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-fuchsia-700">
                <Sparkles size={15} />
                Areas to explore
              </span>

              <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                Find a skill worth
                <span className="block text-[#7048E8]">
                  building.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-[#6D6680]">
                Explore learning areas that match your interests and
                help you develop practical, career-relevant capabilities.
              </p>
            </div>

            <Link
              href="#contact"
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-xl border border-violet-200 bg-[#F8F5FF] px-5 py-3 text-sm font-bold text-[#6040CD] transition hover:border-violet-400 hover:bg-violet-100 md:self-auto"
            >
              Ask About Programs
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tracks.map((track) => {
              const Icon = track.icon;

              return (
                <article
                  key={track.title}
                  className="group relative overflow-hidden rounded-3xl border border-[#ECE7F8] bg-white p-6 transition duration-300 hover:-translate-y-1.5 hover:border-violet-300 hover:shadow-[0_20px_45px_-25px_rgba(109,74,255,0.40)] sm:p-7"
                >
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-violet-50 transition group-hover:scale-150 group-hover:bg-violet-100" />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-3">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${track.color}`}
                      >
                        <Icon size={26} />
                      </div>

                      <span className="rounded-full bg-[#F6F3FF] px-3 py-1.5 text-[11px] font-bold text-[#7556D7]">
                        {track.tag}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-extrabold tracking-tight">
                      {track.title}
                    </h3>

                    <p className="mt-3 min-h-[48px] text-sm leading-6 text-[#777087]">
                      {track.description}
                    </p>

                    <Link
                      href="#contact"
                      aria-label={`Enquire about ${track.title}`}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#6D4AFF] transition group-hover:gap-3"
                    >
                      Explore this track
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#4F2DBD] via-[#6D4AFF] to-[#9554E9] px-6 py-12 text-center text-white shadow-[0_25px_70px_-25px_rgba(90,53,210,0.55)] sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -left-12 -top-24 h-60 w-60 rounded-full border-[35px] border-white/10" />
          <div className="pointer-events-none absolute -bottom-28 -right-12 h-72 w-72 rounded-full bg-fuchsia-300/20 blur-2xl" />

          <div className="relative mx-auto max-w-3xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/15">
              <Sparkles size={27} />
            </div>

            <h2 className="mt-6 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Your next step starts here.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
              Explore the available programs, understand the requirements,
              and choose a learning path that fits your goals.
            </p>

            <Link
              href="#contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-white px-7 py-4 text-sm font-extrabold text-[#5935D5] shadow-xl transition hover:-translate-y-1 hover:bg-[#F5F0FF]"
            >
              Get Started
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}