import {
  BriefcaseBusiness,
  CheckCircle2,
  FileCheck2,
  GraduationCap,
  Rocket,
  Sparkles,
} from "lucide-react";

export default function HeroImageCluster() {
  return (
    <div className="relative h-[520px] w-full max-w-[620px] sm:h-[580px]">

      {/* Main lavender glow */}
      <div
        className="absolute left-[12%] top-[8%] h-[390px] w-[390px] rounded-full bg-[#DDD6FE] opacity-70 blur-3xl"
        aria-hidden="true"
      />

      {/* Decorative circles */}
      <div className="absolute left-[7%] top-[27%] h-20 w-20 rounded-full bg-[#EDE9FE]" />
      <div className="absolute right-[2%] top-[14%] h-14 w-14 rounded-full border-4 border-[#C4B5FD]" />
      <div className="absolute bottom-[15%] right-[5%] h-20 w-20 rounded-full bg-[#F3E8FF]" />

      {/* Dashed career path */}
      <div
        className="absolute left-[19%] top-[18%] h-[300px] w-[430px] rotate-[-8deg] rounded-[50%] border-2 border-dashed border-[#A78BFA]/50"
        aria-hidden="true"
      />

      {/* TOP LEARN CARD */}
      <div className="absolute right-[16%] top-[3%] z-20 w-[150px] rounded-3xl border border-white bg-white/90 p-5 text-center shadow-xl shadow-purple-100 backdrop-blur-md sm:w-[165px]">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EDE9FE] text-[#6D4AFF]">
          <GraduationCap className="h-6 w-6" />
        </div>

        <p className="mt-3 text-base font-black text-[#17132D]">
          Learn
        </p>

        <p className="mt-1 text-xs text-[#777187]">
          Industry Skills
        </p>
      </div>

      {/* BUILD CARD */}
      <div className="absolute left-[8%] top-[22%] z-30 w-[145px] rounded-3xl border border-white bg-white/90 p-5 text-center shadow-xl shadow-purple-100 backdrop-blur-md sm:w-[155px]">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F3E8FF] text-[#8B5CF6]">
          <FileCheck2 className="h-6 w-6" />
        </div>

        <p className="mt-3 text-base font-black text-[#17132D]">
          Build
        </p>

        <p className="mt-1 text-xs text-[#777187]">
          Real Projects
        </p>
      </div>

      {/* INTERN CARD */}
      <div className="absolute right-[1%] top-[28%] z-30 w-[145px] rounded-3xl border border-white bg-white/90 p-5 text-center shadow-xl shadow-purple-100 backdrop-blur-md sm:w-[155px]">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EDE9FE] text-[#6D4AFF]">
          <BriefcaseBusiness className="h-6 w-6" />
        </div>

        <p className="mt-3 text-base font-black text-[#17132D]">
          Intern
        </p>

        <p className="mt-1 text-xs text-[#777187]">
          Get Paid
        </p>
      </div>

      {/* GROW CARD */}
      <div className="absolute right-[-1%] top-[52%] z-30 w-[145px] rounded-3xl border border-white bg-white/90 p-5 text-center shadow-xl shadow-purple-100 backdrop-blur-md sm:w-[155px]">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FCE7F3] text-[#C026D3]">
          <Rocket className="h-6 w-6" />
        </div>

        <p className="mt-3 text-base font-black text-[#17132D]">
          Grow
        </p>

        <p className="mt-1 text-xs text-[#777187]">
          Your Career
        </p>
      </div>

      {/* MAIN LAPTOP / DASHBOARD */}
      <div className="absolute bottom-[7%] left-[12%] z-20 w-[76%] rotate-[-3deg]">

        {/* Laptop screen */}
        <div className="rounded-[22px] border-[7px] border-[#26213F] bg-white p-2 shadow-2xl shadow-purple-300">

          {/* Browser bar */}
          <div className="flex items-center gap-1.5 border-b border-[#EEEAF7] px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-[#C4B5FD]" />
            <span className="h-2 w-2 rounded-full bg-[#DDD6FE]" />
            <span className="h-2 w-2 rounded-full bg-[#EDE9FE]" />

            <div className="ml-3 h-5 flex-1 rounded-full bg-[#F7F5FF]" />
          </div>

          {/* Dashboard */}
          <div className="grid min-h-[210px] grid-cols-[75px_1fr] sm:min-h-[245px] sm:grid-cols-[95px_1fr]">

            {/* Sidebar */}
            <div className="border-r border-[#EEEAF7] bg-[#FAF9FF] p-2 sm:p-3">

              <div className="mb-4 flex items-center justify-center">
                <span className="text-xs font-black text-[#6D4AFF]">
                  TRIQON.
                </span>
              </div>

              <div className="space-y-2">

                <div className="rounded-lg bg-[#EDE9FE] px-2 py-1.5 text-[7px] font-bold text-[#6D4AFF] sm:text-[9px]">
                  Dashboard
                </div>

                <div className="px-2 py-1.5 text-[7px] font-semibold text-[#777187] sm:text-[9px]">
                  Internships
                </div>

                <div className="px-2 py-1.5 text-[7px] font-semibold text-[#777187] sm:text-[9px]">
                  Projects
                </div>

                <div className="px-2 py-1.5 text-[7px] font-semibold text-[#777187] sm:text-[9px]">
                  Certificates
                </div>

              </div>
            </div>

            {/* Main dashboard */}
            <div className="p-4 sm:p-5">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-[8px] font-semibold text-[#9992A9] sm:text-[10px]">
                    YOUR JOURNEY
                  </p>

                  <p className="mt-1 text-sm font-black text-[#17132D] sm:text-lg">
                    Career Progress
                  </p>
                </div>

                <Sparkles className="h-5 w-5 text-[#6D4AFF]" />
              </div>

              {/* Progress */}
              <div className="mt-5 space-y-3">

                <JourneyItem
                  title="Preparation"
                  completed
                />

                <JourneyItem
                  title="Interview"
                  completed
                />

                <JourneyItem
                  title="Paid Internship"
                  completed
                />

                <JourneyItem
                  title="Real Project"
                />

                <JourneyItem
                  title="Certificate"
                />

                <JourneyItem
                  title="PPO Opportunity"
                />

              </div>

            </div>
          </div>
        </div>

        {/* Laptop base */}
        <div className="mx-auto h-4 w-[108%] -translate-x-[4%] rounded-b-[50%] bg-gradient-to-b from-[#A9A2C5] to-[#6F6987] shadow-lg sm:h-5" />

      </div>

      {/* FLOATING ₹499 CARD */}
      <div className="absolute bottom-[3%] left-[1%] z-40 rounded-2xl border border-white bg-white px-4 py-3 shadow-xl sm:px-5 sm:py-4">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EDE9FE] text-[#6D4AFF]">
            ₹
          </div>

          <div>
            <p className="text-xs font-black text-[#17132D]">
              ₹499
            </p>

            <p className="text-[10px] text-[#777187]">
              100% refundable*
            </p>
          </div>

        </div>
      </div>

      {/* FLOATING CERTIFICATE CARD */}
      <div className="absolute bottom-[14%] right-[17%] z-40 rounded-2xl border border-white bg-white px-4 py-3 shadow-xl sm:px-5 sm:py-4">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FCE7F3] text-[#C026D3]">
            <CheckCircle2 className="h-5 w-5" />
          </div>

          <div>
            <p className="text-xs font-black text-[#17132D]">
              Certificate
            </p>

            <p className="text-[10px] text-[#777187]">
              Career Ready
            </p>
          </div>

        </div>
      </div>

      {/* Paper plane */}
      <div className="absolute left-[45%] top-[35%] z-40 rotate-[-25deg] text-[#6D4AFF]">
        <Sparkles className="h-8 w-8" />
      </div>

    </div>
  );
}


/* Journey step component */
function JourneyItem({
  title,
  completed = false,
}: {
  title: string;
  completed?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">

      <div
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
          completed
            ? "bg-[#6D4AFF] text-white"
            : "border-2 border-[#D9D2ED] bg-white"
        }`}
      >
        {completed && (
          <CheckCircle2 className="h-3.5 w-3.5" />
        )}
      </div>

      <span
        className={`text-[9px] font-semibold sm:text-[11px] ${
          completed
            ? "text-[#29233F]"
            : "text-[#9A94AA]"
        }`}
      >
        {title}
      </span>

    </div>
  );
}