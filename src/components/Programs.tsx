const programs = [
  {
    number: "01",
    title: "Technology & Development",
    description:
      "Build practical software and technology solutions while gaining experience with real-world development workflows.",
  },
  {
    number: "02",
    title: "Data & AI",
    description:
      "Work with data-driven projects and explore practical applications of analytics and artificial intelligence.",
  },
  {
    number: "03",
    title: "Design & Creative",
    description:
      "Turn ideas into meaningful digital experiences through practical design and creative projects.",
  },
  {
    number: "04",
    title: "Business & Management",
    description:
      "Understand how businesses operate while solving practical problems through structured projects.",
  },
];

export default function Programs() {
  return (
    <section
      id="internships"
      className="bg-gray-50 px-4 py-16 sm:px-6 md:px-8 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">

        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6D4AFF]">
            Internship Opportunities
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
            Find Your Place to{" "}
            <span className="text-[#6D4AFF]">Build & Grow.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            Explore internship opportunities designed to help you apply your
            skills to practical projects and gain professional experience.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => (
            <div
              key={program.number}
              className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-sm font-black text-[#C4B5FD]">
                {program.number}
              </span>

              <h3 className="mt-6 text-xl font-black text-gray-950">
                {program.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {program.description}
              </p>

              <a
                href="#contact"
                className="mt-6 inline-flex min-h-[44px] items-center text-sm font-bold text-[#6D4AFF] hover:underline"
              >
                Explore Opportunity →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}