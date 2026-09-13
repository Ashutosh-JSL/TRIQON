import { comparisonRows } from "@/lib/data";

export default function Difference() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            See The Triqon Difference
          </h2>
          <p className="mt-3 text-ink-soft">
            Most students learn alone from recorded videos. Our students learn live — with
            real mentors, real projects, and real feedback.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-line">
          <div className="grid grid-cols-[1.2fr_1fr_1fr] bg-ink text-paper">
            <div className="px-4 py-4 font-mono-tag text-xs uppercase tracking-wide text-paper/60 sm:px-6">
              What Matters
            </div>
            <div className="border-l border-paper/10 px-4 py-4 sm:px-6">
              <p className="text-sm font-semibold">Without Triqon</p>
              <p className="font-display text-lg font-bold text-paper/70">&lt;1% success</p>
            </div>
            <div className="border-l border-paper/10 bg-amber/15 px-4 py-4 sm:px-6">
              <p className="text-sm font-semibold text-amber-deep">With Triqon</p>
              <p className="font-display text-lg font-bold text-ink">5x Better Chances</p>
            </div>
          </div>

          {comparisonRows.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-[1.2fr_1fr_1fr] ${
                i % 2 === 1 ? "bg-paper-raised" : "bg-paper"
              }`}
            >
              <div className="flex items-center px-4 py-4 text-sm font-semibold text-ink sm:px-6">
                {row.label}
              </div>
              <div className="flex items-center border-l border-line px-4 py-4 text-sm text-ink-soft sm:px-6">
                {row.without}
              </div>
              <div className="flex items-center gap-2 border-l border-line bg-amber/5 px-4 py-4 text-sm font-medium text-ink sm:px-6">
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0 text-amber-deep">
                  <circle cx="8" cy="8" r="7.25" stroke="currentColor" strokeWidth="1.3" />
                  <path d="M5 8.2L7.1 10.3L11 5.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {row.with}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
