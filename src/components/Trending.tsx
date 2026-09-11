import {
  Check,
  IndianRupee,
  ShieldCheck,
} from "lucide-react";

const inclusions = [
  "Internship Preparation Course",
  "Interview Opportunity",
  "Real Project Experience",
  "Paid Internship",
  "Internship Certificate",
  "PPO Opportunity for Exceptional Performers",
];

export default function Trending() {
  return (
    <section className="bg-gray-50 px-4 py-16 sm:px-6 md:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-5xl">

        <div className="overflow-hidden rounded-[32px] bg-white shadow-xl">

          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">

            {/* Price */}
            <div className="bg-[#EDE9FE] p-8 sm:p-10 lg:p-12">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6D4AFF]">
                Start Your Journey
              </p>

              <div className="mt-6 flex items-center gap-2">
                <IndianRupee className="h-8 w-8 text-[#6D4AFF]" />

                <span className="text-6xl font-black tracking-tight text-gray-950">
                  499
                </span>
              </div>

              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#6D4AFF] px-4 py-2 text-xs font-bold text-white">
                <ShieldCheck className="h-4 w-4" />
                100% REFUNDABLE*
              </div>

              <p className="mt-6 text-sm leading-6 text-gray-600">
                Begin your Triqon journey with a ₹499 registration amount.
                The amount is 100% refundable subject to the applicable
                program terms and eligibility conditions.
              </p>
            </div>

            {/* Inclusions */}
            <div className="p-8 sm:p-10 lg:p-12">

              <h2 className="text-2xl font-black text-gray-950 sm:text-3xl">
                What&apos;s Included
              </h2>

              <div className="mt-7 space-y-4">
                {inclusions.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EDE9FE]">
                      <Check className="h-4 w-4 text-[#6D4AFF]" />
                    </div>

                    <span className="text-sm font-medium text-gray-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-8 inline-flex min-h-[52px] w-full items-center justify-center rounded-full bg-[#6D4AFF] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#4C2FBF] sm:w-auto"
              >
                Start Your Application
              </a>

              <p className="mt-4 text-xs text-gray-400">
                *Refund subject to applicable program terms and conditions.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}