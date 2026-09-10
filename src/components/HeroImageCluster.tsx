import Image from "next/image";
import { Star } from "lucide-react";
import FeatureCard from "./FeatureCard";

export default function HeroImageCluster() {
  return (
    <div className="relative mx-auto mt-10 min-h-[470px] w-full max-w-[620px] sm:min-h-[540px] lg:mt-0 lg:min-h-[600px]">
      {/* Decorative dots */}
      <div className="absolute right-[7%] top-4 hidden h-5 w-5 rounded-full bg-[#F0B429] md:block" />
      <div className="absolute left-[4%] top-[20%] hidden h-4 w-4 rounded-full bg-[#BFDCF5] md:block" />

      {/* Main blue arch */}
      <div className="absolute right-[2%] top-[7%] h-[330px] w-[72%] overflow-hidden rounded-[45%_45%_25%_25%] bg-[#BFDCF5] sm:h-[410px] lg:h-[475px] lg:w-[70%]">
        <Image
          src="/images/hero-man.jpg"
          alt="Young man learning with books"
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 640px) 60vw, (max-width: 1024px) 45vw, 40vw"
        />
      </div>

      {/* Yellow image card */}
      <div className="absolute bottom-[13%] left-[5%] h-[190px] w-[45%] overflow-hidden rounded-[30px] bg-[#F0B429] shadow-lg sm:h-[245px] sm:w-[43%] lg:h-[285px] lg:w-[43%]">
        <Image
          src="/images/hero-woman.jpg"
          alt="Young woman holding colorful books"
          fill
          className="object-cover object-center"
          sizes="(max-width: 640px) 45vw, 30vw"
        />
      </div>

      {/* Features card */}
      <div className="absolute left-0 top-[4%] z-20 w-[68%] max-w-[300px] rounded-2xl bg-white p-3 shadow-xl sm:w-[55%] sm:p-5 lg:left-[-2%] lg:w-[52%]">
        <div className="space-y-3 sm:space-y-5">
          <FeatureCard
            type="certification"
            title="Verified Certification"
            subtitle="Certificates you can trust"
          />

          <FeatureCard
            type="support"
            title="Instant Doubt Support"
            subtitle="Get answers when you need them"
          />

          <FeatureCard
            type="internship"
            title="Internship Opportunities"
            subtitle="Build experience with real work"
          />
        </div>
      </div>

      {/* Rating card */}
      <div className="absolute bottom-[7%] right-0 z-20 w-[150px] rounded-2xl bg-white p-4 shadow-xl sm:w-[180px] sm:p-5 lg:w-[195px]">
        <p className="text-[9px] font-bold tracking-widest text-gray-400 sm:text-[10px]">
          ⭐ LEARNER RATED
        </p>

        <p className="mt-1 text-2xl font-black text-gray-900 sm:text-3xl">
          4.9/5
        </p>

        <div
          className="mt-1 text-sm tracking-wide text-orange-500"
          aria-label="5 out of 5 stars"
        >
          ★★★★★
        </div>
      </div>

      {/* Online pill */}
      <div className="absolute bottom-[1%] right-[1%] z-30 rounded-full bg-[#0F4C3A] px-4 py-2 text-xs font-bold text-white shadow-lg sm:px-5 sm:py-2.5 sm:text-sm">
        🟢 We're online
      </div>
    </div>
  );
}