const steps = [
  {
    number: "01",
    title: "Register",
    label: "START",
    description:
      "Submit your application and register for the Triqon internship program.",
  },
  {
    number: "02",
    title: "Prepare",
    label: "LEARN",
    description:
      "Access the internship preparation course covering the knowledge and expectations required for your project.",
  },
  {
    number: "03",
    title: "Interview",
    label: "SELECT",
    description:
      "Complete the interview round where we evaluate your skills, communication and readiness.",
  },
  {
    number: "04",
    title: "Get Selected",
    label: "JOIN",
    description:
      "Successfully selected candidates become part of the Triqon internship program.",
  },
  {
    number: "05",
    title: "Paid Internship",
    label: "BUILD",
    description:
      "Work on real-world projects, gain professional experience and learn how teams deliver results.",
  },
  {
    number: "06",
    title: "Certificate + PPO",
    label: "GROW",
    description:
      "Complete your internship to receive your certificate, with PPO opportunities for exceptional performers.",
  },
];

export default function ProjectsPortfolio() {
  return (
    <section
      id="how-it-works"
      className="bg-[#6D4AFF] px-4 py-16 text-white sm:px-6 md:px-8 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">

        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C4B5FD]">
            How It Works
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Your Journey With Triqon
          </h2>

          <p className="mt-5 text-base leading-7 text-white/70 sm:text-lg">
            A simple and structured path from registration to real-world
            experience.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="flex items-center justify-between">
                <span className="text-4xl font-black text-[#C4B5FD]">
                  {step.number}
                </span>

                <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold tracking-widest text-white/70">
                  {step.label}
                </span>
              </div>

              <h3 className="mt-7 text-xl font-black">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/65">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}