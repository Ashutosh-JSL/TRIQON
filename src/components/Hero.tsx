import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  GraduationCap,
  IndianRupee,
  Play,
  Rocket,
  Sparkles,
} from "lucide-react";
import HeroImageCluster from "./HeroImageCluster";

const highlights = [
  "Real-world projects",
  "Paid internships",
  "Industry experience",
  "Certificate",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#F8F6FF]"
    >
      {/* Background decoration */}
      <div
        className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#EDE9FE] blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute right-[-180px] top-[-100px] h-[520px] w-[520px] rounded-full bg-[#DDD6FE] opacity-60 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute bottom-0 left-[40%] h-[300px] w-[300px] rounded-full bg-[#F3E8FF] blur-3xl"
        aria-hidden="true"
      />

      {/* Main Hero */}
      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-72px)] w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:gap-10 lg:px-10 lg:py-20">

        {/* LEFT CONTENT */}
        <div className="max-w-2xl">

          {/* Badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#6D4AFF]/10 bg-[#EDE9FE] px-4 py-2 text-xs font-bold text-[#5B3FD1] sm:text-sm">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#6D4AFF] text-white">
              <GraduationCap className="h-3.5 w-3.5" />
            </span>

            From Campus to Career
          </div>

          {/* Heading */}
          <h1 className="max-w-3xl text-[2.8rem] font-black leading-[0.98] tracking-[-0.045em] text-[#15112B] sm:text-5xl md:text-6xl lg:text-[4.5rem]">

            Don't Just Learn.

            <br />

            <span className="bg-gradient-to-r from-[#6D4AFF] via-[#8B5CF6] to-[#C026D3] bg-clip-text text-transparent">
              Build. Experience.
            </span>

            <ArrowUpRight
              className="ml-1 inline-block h-9 w-9 text-[#6D4AFF] sm:h-11 sm:w-11 lg:h-12 lg:w-12"
              strokeWidth={2.5}
              aria-hidden="true"
            />
          </h1>

          {/* Sub heading */}
          <div className="mt-7 flex flex-wrap items-center gap-x-2 gap-y-2">
            <span className="text-xl font-black text-[#17132D] sm:text-2xl lg:text-3xl">
              Get Trained.
            </span>

            <span className="text-xl font-black text-[#6D4AFF] sm:text-2xl lg:text-3xl">
              Get Selected.
            </span>

            <span className="rounded-lg bg-[#6D4AFF] px-2.5 py-1 text-xl font-black text-white shadow-lg shadow-purple-200 sm:text-2xl lg:text-3xl">
              Get Paid.
            </span>
          </div>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-7 text-[#625D73] sm:text-lg sm:leading-8">
            TRIQON connects college students with real projects, paid
            internships and career opportunities — helping you move from
            classroom learning to professional experience.
          </p>

          {/* Highlights */}
          <div className="mt-7 grid grid-cols-1 gap-3 min-[450px]:grid-cols-2">
            {highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-center gap-2 text-sm font-semibold text-[#403B52]"
              >
                <CheckCircle2
                  className="h-4 w-4 shrink-0 text-[#6D4AFF]"
                  aria-hidden="true"
                />

                <span>{highlight}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-9 flex flex-col gap-3 min-[430px]:flex-row">

            <a
              href="#contact"
              className="group inline-flex min-h-[54px] items-center justify-center gap-2 rounded-2xl bg-[#6D4AFF] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-purple-200 transition-all duration-300 hover:-translate-y-1 hover:bg-[#5B3FD1] hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#6D4AFF] focus:ring-offset-2 sm:px-8 sm:text-base"
            >
              Explore Internships

              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>

            <a
              href="#how-it-works"
              className="inline-flex min-h-[54px] items-center justify-center gap-3 rounded-2xl border border-[#E4DFFF] bg-white px-5 py-3 text-sm font-bold text-[#29233F] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C4B5FD] hover:bg-[#FAF9FF] sm:text-base"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EDE9FE] text-[#6D4AFF]">
                <Play
                  className="ml-0.5 h-4 w-4 fill-[#6D4AFF]"
                  aria-hidden="true"
                />
              </span>

              How It Works
            </a>

          </div>

          {/* Trust information */}
          <div className="mt-9 flex flex-wrap gap-x-7 gap-y-5 border-t border-[#E5E0F5] pt-6">

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EDE9FE]">
                <IndianRupee className="h-5 w-5 text-[#6D4AFF]" />
              </div>

              <div>
                <p className="text-sm font-black text-[#17132D]">
                  ₹499
                </p>

                <p className="text-[11px] text-[#777187]">
                  100% refundable*
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F3E8FF]">
                <BriefcaseBusiness className="h-5 w-5 text-[#8B5CF6]" />
              </div>

              <div>
                <p className="text-sm font-black text-[#17132D]">
                  Paid Internship
                </p>

                <p className="text-[11px] text-[#777187]">
                  Real project experience
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FCE7F3]">
                <Rocket className="h-5 w-5 text-[#C026D3]" />
              </div>

              <div>
                <p className="text-sm font-black text-[#17132D]">
                  PPO Opportunity
                </p>

                <p className="text-[11px] text-[#777187]">
                  For top performers
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT VISUAL */}
        <div className="relative flex w-full items-center justify-center lg:justify-end">
          <HeroImageCluster />
        </div>

      </div>

      {/* Bottom scroll */}
      <div className="relative z-10 hidden pb-7 text-center sm:block">
        <a
          href="#how-it-works"
          className="inline-flex flex-col items-center gap-2 text-[10px] font-black tracking-[0.3em] text-[#9A94AA] transition hover:text-[#6D4AFF]"
        >
          <span>EXPLORE</span>

          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#DDD7EE] bg-white">
            ↓
          </span>
        </a>
      </div>
    </section>
  );
}