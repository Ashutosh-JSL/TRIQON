import { ArrowUpRight, Play } from "lucide-react";
import RatingBadge from "./RatingBadge";
import HeroImageCluster from "./HeroImageCluster";

export default function Hero() {
  return (
    <main className="overflow-x-hidden">
      <section id="home" className="overflow-hidden bg-white">
        <div className="mx-auto grid min-h-[calc(100vh-64px)] w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 py-8 sm:px-6 sm:py-12 md:px-8 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-16">

          {/* Left Content */}
          <div className="max-w-2xl">

            {/* Badge */}
            <div className="mb-6 inline-flex max-w-full flex-wrap items-center gap-1 rounded-full border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-700 shadow-sm sm:px-4 sm:text-sm">
              <span>India&apos;s</span>

              <span className="font-extrabold text-[#0F4C3A]">
                No.1 Live Training
              </span>

              <span>Platform</span>
            </div>

            {/* Heading */}
            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">

              <span className="text-[#0F4C3A]">
                Level Up
                <ArrowUpRight
                  className="ml-1 inline-block h-7 w-7 stroke-[3] sm:h-9 sm:w-9 lg:h-10 lg:w-10"
                  aria-hidden="true"
                />
              </span>

              {" "}Your Skills With Real Projects &amp; Mentor Feedback{" "}

              <span className="mt-2 inline-flex items-center rounded-lg bg-[#DCF3E8] px-2.5 py-1 align-middle text-sm font-black text-[#0F4C3A] sm:text-base lg:text-lg">
                LIVE
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
              Guided projects, 1:1 mentor feedback, and a certificate you can
              actually use — across every course and program.
            </p>

            {/* Rating */}
            <div className="mt-6">
              <RatingBadge />
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-3">

              <a
                href="#courses"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#0F4C3A] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#0a3b2d] focus:outline-none focus:ring-2 focus:ring-[#0F4C3A] focus:ring-offset-2 sm:text-base"
              >
                Explore Courses
              </a>

              <a
                href="#how-it-works"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-[#0F4C3A] transition hover:bg-[#DCF3E8] focus:outline-none focus:ring-2 focus:ring-[#0F4C3A] focus:ring-offset-2 sm:text-base"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#0F4C3A]">
                  <Play
                    className="ml-0.5 h-4 w-4 fill-[#0F4C3A]"
                    aria-hidden="true"
                  />
                </span>

                See how it works
              </a>

            </div>
          </div>

          {/* Right Image Cluster */}
          <div className="flex w-full items-center justify-center">
            <HeroImageCluster />
          </div>

        </div>
      </section>

      {/* Scroll */}
      <div className="hidden pb-6 text-center sm:block">
        <a
          href="#courses"
          className="inline-flex flex-col items-center gap-2 text-[10px] font-bold tracking-[0.3em] text-gray-400"
          aria-label="Scroll to courses"
        >
          <span>SCROLL</span>
          <span className="animate-bounce">↓</span>
        </a>
      </div>
    </main>
  );
}