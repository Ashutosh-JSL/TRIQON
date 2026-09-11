const points = [
  "Confidence to work on real projects",
  "Experience you can discuss in interviews",
  "Understanding of professional workflows",
  "A stronger practical portfolio",
  "Internship completion certificate",
  "Potential PPO opportunity for exceptional performance",
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 px-4 py-16 sm:px-6 md:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6D4AFF]">
            Your Outcome
          </p>

          <h2 className="mt-3 text-3xl font-black text-gray-950 sm:text-4xl lg:text-5xl">
            Leave With More Than a Certificate.
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            The goal of Triqon is to help you become more confident,
            experienced and ready for the professional world.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
          {points.map((point) => (
            <div
              key={point}
              className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EDE9FE] text-[#6D4AFF]">
                ✓
              </div>

              <span className="text-sm font-semibold text-gray-700">
                {point}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}