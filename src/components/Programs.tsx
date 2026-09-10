import Link from "next/link";
import { programs } from "@/lib/data";

export default function Programs() {
  return (
    <section className="border-b border-line bg-paper-raised">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <span className="font-mono-tag text-xs uppercase tracking-wide text-amber-deep">
            📚 Courses &amp; Programs
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Pick Your Learning Path
          </h2>
          <p className="mt-3 text-ink-soft">
            From short workshops to full placement-ready programs — every track is built
            around live mentorship and real projects.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <Link
              key={program.title}
              href={program.href}
              className="group flex flex-col rounded-2xl border border-line bg-paper p-6 transition-all hover:-translate-y-1 hover:border-ink hover:shadow-[0_16px_40px_-24px_rgba(14,19,48,0.4)]"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`rounded-full px-3 py-1 font-mono-tag text-[11px] font-medium uppercase tracking-wide ${
                    program.comingSoon
                      ? "bg-violet/10 text-violet"
                      : "bg-cyan/10 text-cyan"
                  }`}
                >
                  {program.tag}
                </span>
                <span className="font-display text-xs font-bold text-ink-soft">3SKILL</span>
              </div>

              <h3 className="mt-5 font-display text-xl font-bold text-ink">
                {program.title}
              </h3>
              <p className="mt-1 text-sm text-ink-soft">{program.subtitle}</p>

              <ul className="mt-4 space-y-2">
                {program.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-ink-soft">
                    <span aria-hidden="true" className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap items-center gap-1.5">
                <span className="font-mono-tag text-[11px] uppercase tracking-wide text-ink-soft/70">
                  Skills &amp; Tools
                </span>
                {program.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-line px-1.5 py-0.5 font-mono-tag text-[10px] text-ink-soft"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
                {program.cta}
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
