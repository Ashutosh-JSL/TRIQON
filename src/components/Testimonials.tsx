import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="border-b border-line bg-paper-raised">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <span className="font-mono-tag text-xs uppercase tracking-wide text-amber-deep">
          ⭐ Student Reviews
        </span>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Hear What Our Interns Have to Say
        </h2>
        <p className="mt-3 max-w-xl text-ink-soft">
          Hear directly from our students about their learning experiences and achievements.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-2xl border border-line bg-paper p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-violet/10 font-display text-sm font-bold text-violet">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <figcaption className="text-sm font-semibold text-ink">{t.name}</figcaption>
                  <p className="text-xs text-ink-soft">{t.role}</p>
                </div>
              </div>
              <span aria-hidden="true" className="mt-4 text-sm text-amber">★★★★★</span>
              <blockquote className="mt-3 text-sm leading-relaxed text-ink-soft">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
