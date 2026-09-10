import { projects } from "@/lib/data";

const trackColors: Record<string, string> = {
  "Web Development": "text-cyan bg-cyan/10",
  "AI & ML": "text-violet bg-violet/10",
  "Data Analytics": "text-amber-deep bg-amber/15",
  "Machine Learning": "text-violet bg-violet/10",
};

export default function ProjectsPortfolio() {
  return (
    <section className="border-b border-line bg-paper-raised">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Projects Portfolio
          </h2>
          <p className="mt-3 text-ink-soft">
            Build evidence of your skills with 8 ready-to-ship projects.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col rounded-2xl border border-line bg-paper p-5 transition-transform hover:-translate-y-1"
            >
              <span
                className={`w-fit rounded-full px-2.5 py-1 font-mono-tag text-[10px] font-medium uppercase tracking-wide ${
                  trackColors[project.track] ?? "text-ink-soft bg-ink/5"
                }`}
              >
                {project.track}
              </span>
              <h3 className="mt-4 font-display text-base font-bold leading-snug text-ink">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
