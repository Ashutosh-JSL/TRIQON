"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  X,
  Clock,
  BookOpen,
  Users,
  BriefcaseBusiness,
  ClipboardCheck,
  MessageCircle,
  FolderKanban,
  FileText,
  Mic,
  Award,
  BadgeCheck,
  Globe,
  Compass,
  Network,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  Zap,
  BarChart3,
  Code2,
  Bot,
  Database,
  Palette,
  Rocket,
  Brain,
  Target,
  ChartNoAxesCombined,
} from "lucide-react";

const comparisons = [
  { title: "Learning Schedule", icon: Clock, free: "May vary by provider", triqon: "32+ Hours Structured Training" },
  { title: "Training Resources", icon: BookOpen, free: "Limited or self-paced", triqon: "Guided learning resources" },
  { title: "Mentorship", icon: Users, free: "Not always available", triqon: "Weekly mentor sessions" },
  { title: "Projects", icon: BriefcaseBusiness, free: "May be observational", triqon: "Industry-inspired real projects" },
  { title: "Assignments", icon: ClipboardCheck, free: "Basic tasks", triqon: "Practical assignments with deliverables" },
  { title: "Doubt Support", icon: MessageCircle, free: "Depends on availability", triqon: "Dedicated doubt-solving support" },
  { title: "Portfolio Building", icon: FolderKanban, free: "Usually not included", triqon: "Portfolio-ready project showcase" },
  // { title: "Resume Support", icon: FileText, free: "Rarely provided", triqon: "Resume review and optimization" },
  // { title: "Mock Interviews", icon: Mic, free: "Not available", triqon: "Interview preparation sessions" },
  { title: "Certification", icon: Award, free: "Varies", triqon: "Verified Internship Certificate" },
  { title: "Project Certificate", icon: BadgeCheck, free: "Usually unavailable", triqon: "Project Completion Certificate" },
  // { title: "LinkedIn Optimization", icon: Globe, free: "Not included", triqon: "LinkedIn profile guidance" },
  // { title: "Career Guidance", icon: Compass, free: "Minimal", triqon: "Structured career roadmap" },
  { title: "Community Access", icon: Network, free: "Not always available", triqon: "Mentor and learner community" },
  // { title: "Placement Preparation", icon: TrendingUp, free: "Limited", triqon: "Interview, aptitude and communication guidance" },
];

const uniqueFeatures = [
  { icon: Bot, title: "AI Tools Training", text: "Explore AI tools and practical workflows." },
  { icon: Brain, title: "Industry Case Studies", text: "Learn through realistic business scenarios." },
  { icon: FileText, title: "Resume Optimization", text: "Present your skills and projects clearly." },
  { icon: Globe, title: "LinkedIn Branding", text: "Improve your professional profile." },
  { icon: FolderKanban, title: "Portfolio Building", text: "Showcase your work and project outcomes." },
  { icon: BarChart3, title: "Weekly Progress Tracking", text: "Review learning goals and progress." },
  { icon: Award, title: "Performance Scorecard", text: "Track progress against defined criteria." },
  { icon: Users, title: "Live Mentor Guidance", text: "Get support during your learning journey." },
  { icon: Code2, title: "Capstone Project", text: "Apply skills to a practical project." },
  { icon: Target, title: "Interview Preparation", text: "Practice presenting your skills confidently." },
  { icon: Network, title: "Networking Community", text: "Connect with fellow learners and mentors." },
  { icon: Compass, title: "Career Roadmap", text: "Plan your next learning and career steps." },
];

const benefits = [
  "Real Project Experience",
  "Industry Mentorship",
  "Practical Skill Development",
  "Portfolio Building",
  "Interview Readiness",
  "Resume Enhancement",
  "Professional Networking",
  "Career Guidance",
  "Verified Certification",
];

const tracks = [
  {
    icon: BarChart3,
    emoji: "📊",
    title: "Data Analytics",
    description: "Analyze data, discover patterns, create dashboards, and generate business insights using modern analytics tools.",
    skills: ["Excel", "Power BI", "SQL", "Data Visualization"],
    glow: "from-teal-400/20 to-cyan-500/5",
    iconColor: "text-teal-300 bg-teal-300/10",
  },
  {
    icon: Code2,
    emoji: "💻",
    title: "Web Development",
    description: "Build modern websites and applications using industry-standard technologies and best practices.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
    glow: "from-cyan-400/20 to-blue-500/5",
    iconColor: "text-cyan-300 bg-cyan-300/10",
  },
  {
    icon: Bot,
    emoji: "🤖",
    title: "AI & Emerging Technology",
    description: "Work on practical AI projects and explore real-world applications of modern technologies.",
    skills: ["AI Tools", "Prompt Engineering", "Automation", "ML Basics"],
    glow: "from-teal-400/20 to-emerald-500/5",
    iconColor: "text-emerald-300 bg-emerald-300/10",
  },
  {
    icon: Database,
    emoji: "🗄️",
    title: "Database & SQL",
    description: "Learn how to store, organize, query, and manage structured data efficiently.",
    skills: ["SQL", "Database Design", "Queries", "Data Management"],
    glow: "from-violet-400/20 to-teal-500/5",
    iconColor: "text-violet-300 bg-violet-300/10",
  },
  {
    icon: Palette,
    emoji: "🎨",
    title: "UI/UX & Product Design",
    description: "Create user-friendly digital experiences through visual design and an understanding of user behavior.",
    skills: ["Figma", "Wireframing", "Prototyping", "UX Research"],
    glow: "from-pink-400/20 to-teal-500/5",
    iconColor: "text-pink-300 bg-pink-300/10",
  },
  {
    icon: Rocket,
    emoji: "🚀",
    title: "Business & Professional Skills",
    description: "Develop communication, project management, leadership, and workplace readiness skills.",
    skills: ["Communication", "Leadership", "Project Management", "Presentations"],
    glow: "from-blue-400/20 to-cyan-500/5",
    iconColor: "text-blue-300 bg-blue-300/10",
  },
];

const trackBenefits = [
  "Industry Projects",
  "Weekly Mentorship",
  "Portfolio Building",
  "LinkedIn Optimization",
  "Interview Preparation",
  "Verified Certificates",
  "Career Guidance",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#22E3D6]/20 bg-[#22E3D6]/[0.07] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#22E3D6]">
      <Sparkles size={14} />
      {children}
    </span>
  );
}

function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#22E3D6] to-[#13CFCB] px-6 py-3.5 text-sm font-extrabold text-[#02152B] shadow-[0_0_28px_rgba(34,227,214,0.16)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_36px_rgba(34,227,214,0.32)]"
    >
      {children}
      <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

export default function Hero() {
  return (
    <main className="overflow-hidden bg-[#02152B] text-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#032B3E] via-[#042B57] to-[#02152B]">
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

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.55 }}
              className="mt-8 text-sm font-bold tracking-[0.24em] text-[#A1B5D8]"
            >
              TRIQON INDIA
            </motion.p>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mt-4 max-w-3xl text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-7xl"
            >
              Your Skills.
              <span className="block">Your Projects.</span>
              <span className="mt-1 block bg-gradient-to-r from-[#22E3D6] via-[#72F7FF] to-white bg-clip-text pb-2 text-transparent">
                Your Future.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mt-6 max-w-xl text-base leading-8 text-[#D4E3FF] sm:text-lg"
            >
              Discover what makes TRIQON INDIA different. Explore structured
              learning, mentor support, practical projects, and career-focused
              guidance.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <PrimaryButton href="#comparison">Compare Programs</PrimaryButton>
              <div className="inline-flex items-center gap-2 text-sm font-medium text-[#D4E3FF]">
                <ShieldCheck size={18} className="text-[#22E3D6]" />
                Practical Learning Experience
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mt-10 flex flex-wrap gap-5 text-xs font-semibold text-[#A1B5D8]"
            >
              {["Project-based learning", "Mentor support", "Career preparation"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check size={15} className="text-[#22E3D6]" />
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* PROGRAM CARD */}
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
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A1B5D8]">
                    Your learning journey
                  </p>
                  <h2 className="mt-2 text-xl font-extrabold sm:text-2xl">
                    TRIQON INDIA
                  </h2>
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
                  <Sparkles size={13} />
                  Learn • Build • Grow
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

            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-2 top-16 hidden rounded-xl border border-[#22E3D6]/20 bg-[#0A2140] px-4 py-3 shadow-xl sm:block md:-right-8"
            >
              <div className="flex items-center gap-2 text-sm font-bold">
                <span className="h-2 w-2 rounded-full bg-[#22E3D6]" />
                Learn by doing
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-[#22E3D6]/40 to-transparent" />
      </section>

      {/* COMPARISON */}
      <section id="comparison" className="relative px-4 py-20 sm:px-6 sm:py-24">
        <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-[#22E3D6]/5 blur-[100px]" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-3xl text-center"
        >
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
          {/* MOBILE STICKY HEADER */}
          <div className="sticky top-0 z-30 grid grid-cols-2 gap-3 border-b border-white/10 bg-[#02152B]/95 py-3 backdrop-blur-xl lg:hidden">
            <div className="rounded-2xl border border-white/10 bg-slate-100 p-4 text-[#10233D]">
              <p className="text-sm font-bold">Free Internships</p>
              <p className="mt-1 text-2xl font-black">₹0</p>
              <p className="mt-1 text-xs text-slate-500">Varies by provider</p>
            </div>
            <div className="rounded-2xl border border-[#22E3D6]/50 bg-gradient-to-br from-[#0B4050] to-[#09233F] p-4">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#22E3D6]">
                Most Popular
              </span>
              <p className="mt-1 text-sm font-bold">TRIQON INDIA</p>
              <p className="mt-1 text-2xl font-black text-[#22E3D6]">₹499</p>
            </div>
          </div>

          {/* MOBILE COMPARISON CARDS */}
          <div className="mt-5 space-y-4 lg:hidden">
            {comparisons.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.08 }}
                  variants={fadeUp}
                  transition={{ duration: 0.35, delay: (index % 3) * 0.04 }}
                  className="overflow-hidden rounded-2xl border border-[#22E3D6]/10 bg-[rgba(9,24,55,0.75)]"
                >
                  <div className="flex items-center gap-3 border-b border-white/10 px-4 py-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#22E3D6]/10 text-[#22E3D6]">
                      <Icon size={18} />
                    </span>
                    <h3 className="text-sm font-bold text-white">{item.title}</h3>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="p-4">
                      <p className="mb-2 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#A1B5D8]">
                        <X size={13} /> Free
                      </p>
                      <p className="text-sm leading-6 text-[#A1B5D8]">{item.free}</p>
                    </div>
                    <div className="border-l border-[#22E3D6]/15 bg-[#22E3D6]/[0.06] p-4">
                      <p className="mb-2 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#22E3D6]">
                        <Check size={13} /> TRIQON
                      </p>
                      <p className="text-sm font-semibold leading-6 text-[#D4E3FF]">{item.triqon}</p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* DESKTOP COMPARISON TABLE */}
          <div className="hidden overflow-hidden rounded-3xl border border-[#22E3D6]/15 bg-[rgba(9,24,55,0.75)] shadow-2xl shadow-black/20 lg:block">
            <div className="sticky top-0 z-20 grid grid-cols-[1.1fr_1fr_1fr] border-b border-white/10 bg-[#071C36]/95 backdrop-blur-xl">
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
                <span className="absolute right-4 top-4 rounded-full bg-[#22E3D6] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#02152B]">
                  Most Popular
                </span>
                <h3 className="mt-4 text-lg font-extrabold">TRIQON INDIA</h3>
                <p className="mt-2 text-3xl font-black text-[#22E3D6]">₹499</p>
                <p className="mt-1 text-xs text-[#D4E3FF]">Structured learning program</p>
              </div>
            </div>

            {comparisons.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.08 }}
                  transition={{ duration: 0.3, delay: (index % 4) * 0.035 }}
                  className={`grid grid-cols-[1.1fr_1fr_1fr] ${
                    index !== comparisons.length - 1 ? "border-b border-white/[0.07]" : ""
                  }`}
                >
                  <div className="flex items-center gap-3 p-5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] text-[#22E3D6]">
                      <Icon size={18} />
                    </span>
                    <span className="text-sm font-bold text-[#D4E3FF]">{item.title}</span>
                  </div>
                  <div className="flex items-center border-l border-white/[0.07] p-5">
                    <div className="flex items-start gap-2.5">
                      <X size={16} className="mt-1 shrink-0 text-slate-500" />
                      <p className="text-sm leading-6 text-[#A1B5D8]">{item.free}</p>
                    </div>
                  </div>
                  <div className="flex items-center border-x border-[#22E3D6]/10 bg-[#22E3D6]/[0.045] p-5">
                    <div className="flex items-start gap-2.5">
                      <Check size={16} className="mt-1 shrink-0 text-[#22E3D6]" />
                      <p className="text-sm font-semibold leading-6 text-[#D4E3FF]">{item.triqon}</p>
                    </div>
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

      

      {/* WHY TRIQUON */}
      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.55 }}
          >
            <SectionLabel>Value beyond the price</SectionLabel>
            <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              ₹499 Is Not Just
              <span className="block bg-gradient-to-r from-[#22E3D6] to-[#72F7FF] bg-clip-text text-transparent">
                About a Program.
              </span>
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

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-3 sm:grid-cols-2"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                variants={fadeUp}
                transition={{ duration: 0.35 }}
                className={`flex items-center gap-3 rounded-xl border border-[#22E3D6]/15 bg-[rgba(9,24,55,0.75)] p-4 ${
                  index === 0 ? "sm:col-span-2 sm:p-5" : ""
                }`}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#22E3D6]/10 text-[#22E3D6]">
                  <Check size={17} />
                </span>
                <span className="text-sm font-semibold text-[#D4E3FF]">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      
{/* YOUR JOURNEY SECTION */}
<section
  id="how-it-works"
  className="relative overflow-hidden bg-[#07111F] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10"
>
  <div
    aria-hidden="true"
    className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#14B8A6]/10 blur-3xl"
  />
  <div
    aria-hidden="true"
    className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#0D9488]/10 blur-3xl"
  />

  <div className="relative mx-auto max-w-7xl">
    {/* Heading */}
    <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
      <span className="inline-flex items-center rounded-full border border-[#14B8A6]/25 bg-[#14B8A6]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#5EEAD4]">
        Your Journey
      </span>

      <h2 className="mt-6 text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl md:text-5xl">
        Five steps from registration to{" "}
        <span className="bg-gradient-to-r from-[#14B8A6] to-[#5EEAD4] bg-clip-text text-transparent">
          real-world practice.
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#94A3B8] sm:text-base sm:leading-8">
        A clear, project-focused process so you know what happens next.
      </p>
    </div>

    {/* Steps */}
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
      {[
        {
          number: "01",
          title: "Register",
          description:
            "Submit your details and choose the area you want to explore.",
          icon: "01",
        },
        {
          number: "02",
          title: "Join Your Batch",
          description:
            "Get ready to learn, collaborate, and begin your practical project journey. Batch allocation is subject to availability and the Terms & Conditions.",
          icon: "02",
        },
        {
          number: "03",
          title: "Build Real Projects",
          description:
            "Work through practical tasks and project milestones with guidance.",
          icon: "03",
        },
        {
          number: "04",
          title: "Certification",
          description:
            "Every participant receives an internship completion certificate. Project completion certificates are subject to the applicable completion criteria in the Terms & Conditions.",
          icon: "04",
        },
        {
          number: "05",
          title: "Career Opportunities",
          description:
            "Build practical experience and explore career opportunities, including potential PPO opportunities, subject to the Terms & Conditions.",
          icon: "05",
        },
      ].map((step, index) => (
        <div key={step.number} className="relative flex">
          <article className="group relative flex w-full flex-col overflow-hidden rounded-[20px] border border-[#243548] bg-[#0D1B2A] p-6 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#14B8A6]/60 hover:bg-[#102638] hover:shadow-xl hover:shadow-[#14B8A6]/5 sm:p-7">
            <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#14B8A6] to-[#5EEAD4] transition-transform duration-300 group-hover:scale-x-100" />

            <div className="flex items-center justify-between">
              <span className="inline-flex h-11 min-w-11 items-center justify-center rounded-xl border border-[#14B8A6]/30 bg-[#14B8A6]/10 px-2 text-sm font-extrabold tracking-wide text-[#5EEAD4]">
                {step.number}
              </span>

              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#102638] text-[#14B8A6] transition-colors duration-300 group-hover:bg-[#14B8A6] group-hover:text-[#07111F]">
                <span className="text-sm font-bold">{step.icon}</span>
              </span>
            </div>

            <h3 className="mt-7 text-xl font-bold leading-snug text-white">
              {step.title}
            </h3>

            <p className="mt-3 flex-1 text-sm leading-7 text-[#94A3B8]">
              {step.description}
            </p>

            <div className="mt-7 flex items-center gap-2">
              <span className="h-1.5 w-8 rounded-full bg-[#14B8A6] transition-all duration-300 group-hover:w-12" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#243548]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#243548]" />
            </div>
          </article>

          {index < 4 && (
            <>
              <div
                aria-hidden="true"
                className="absolute -right-[17px] top-12 z-10 hidden h-8 w-8 items-center justify-center rounded-full border border-[#243548] bg-[#07111F] text-[#14B8A6] lg:flex"
              >
                <span className="text-lg">→</span>
              </div>

              <div
                aria-hidden="true"
                className="absolute -bottom-[18px] left-1/2 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-[#243548] bg-[#07111F] text-[#14B8A6] sm:hidden"
              >
                <span className="text-lg">↓</span>
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


      {/* EXPLORE PROJECT TRACKS */}
      <section
        id="tracks"
        className="relative isolate overflow-hidden bg-gradient-to-br from-[#032B3E] via-[#042B57] to-[#02152B] px-5 py-20 sm:px-8 sm:py-24"
      >
        <div className="pointer-events-none absolute -left-32 top-32 -z-10 h-96 w-96 rounded-full bg-[#22E3D6]/10 blur-[110px]" />
        <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[110px]" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
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

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="mx-auto mt-12 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {tracks.map((track) => {
            const Icon = track.icon;
            return (
              <motion.article
                key={track.title}
                variants={fadeUp}
                transition={{ duration: 0.45 }}
                className="group relative isolate overflow-hidden rounded-3xl border border-[#22E3D6]/15 bg-[rgba(9,24,55,0.75)] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-[#22E3D6]/45 hover:shadow-[0_20px_60px_-25px_rgba(34,227,214,0.25)] sm:p-7"
              >
                <div className={`pointer-events-none absolute -right-16 -top-16 -z-10 h-44 w-44 rounded-full bg-gradient-to-br ${track.glow} blur-2xl transition duration-500 group-hover:scale-125`} />

                <div className="flex items-start justify-between gap-4">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-white/5 ${track.iconColor}`}>
                    <Icon size={26} />
                  </div>
                  <span className="text-3xl" aria-hidden="true">{track.emoji}</span>
                </div>

                <h3 className="mt-6 text-xl font-extrabold tracking-tight">{track.title}</h3>
                <p className="mt-3 min-h-[84px] text-sm leading-7 text-[#A1B5D8]">
                  {track.description}
                </p>

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

                <div className="my-6 h-px bg-gradient-to-r from-[#22E3D6]/20 via-white/10 to-transparent" />

                <div className="space-y-3">
                  {["Real Projects", "Mentor Guidance", "Practical Learning"].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-xs font-semibold text-[#D4E3FF]">
                      <Check size={14} className="shrink-0 text-[#22E3D6]" />
                      {item}
                    </div>
                  ))}
                </div>

                <Link
                  href="#contact"
                  aria-label={`Enquire about ${track.title}`}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#22E3D6] transition group-hover:gap-3"
                >
                  Explore Track
                  <ArrowUpRight size={17} />
                </Link>
              </motion.article>
            );
          })}
        </motion.div>

        {/* TRIQUON ADVANTAGE */}
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="rounded-3xl border border-[#22E3D6]/15 bg-[rgba(9,24,55,0.7)] p-6 backdrop-blur-xl sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#22E3D6]">
                  The TRIQUON advantage
                </p>
                <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl">
                  Why Learn With TRIQON INDIA?
                </h3>
              </div>
              <p className="max-w-md text-sm leading-6 text-[#A1B5D8]">
                Explore the support available in your selected program.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {trackBenefits.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 rounded-xl border border-[#22E3D6]/10 bg-white/[0.025] p-3 text-xs font-semibold text-[#D4E3FF] transition hover:border-[#22E3D6]/30 hover:bg-[#22E3D6]/[0.05] sm:p-4 sm:text-sm"
                >
                  <Check size={15} className="shrink-0 text-[#22E3D6]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TRACK CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.55 }}
          className="mx-auto mt-10 max-w-5xl rounded-3xl border border-[#22E3D6]/25 bg-gradient-to-br from-[#0A2D49]/90 to-[#071B34]/90 p-7 text-center shadow-[0_0_60px_-35px_rgba(34,227,214,0.3)] sm:p-10"
        >
          <h3 className="text-2xl font-black sm:text-3xl">
            Not Sure Which Path To Choose?
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#A1B5D8] sm:text-base">
            Start your journey with TRIQON INDIA and build practical experience
            through structured project-based learning.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <PrimaryButton href="#contact">Explore Programs</PrimaryButton>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#22E3D6]/25 bg-white/[0.03] px-6 py-3.5 text-sm font-bold text-[#D4E3FF] transition hover:border-[#22E3D6]/50 hover:bg-white/[0.06]"
            >
              Talk To A Mentor
              <MessageCircle size={17} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-20 sm:px-8 sm:py-24">
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
              <PrimaryButton href="#contact">Apply Now</PrimaryButton>
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

      {/* FOOTER TAGLINE */}
      
    </main>
  );
}