import { successStories } from "@/lib/data";

export default function SuccessStories() {
  return (
    <section className="border-b border-line bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <span className="font-mono-tag text-xs uppercase tracking-wide text-amber">
          🎥 Success Stories
        </span>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
          From Free Intern to Paid Intern
        </h2>
        <p className="mt-3 max-w-xl text-paper/60">Real growth stories from our interns.</p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {successStories.map((story) => (
            <div
              key={story.headline}
              className="flex flex-col overflow-hidden rounded-2xl border border-paper/10 bg-paper/[0.04]"
            >
              <div className="relative flex aspect-video items-center justify-center border-b border-paper/10 bg-gradient-to-br from-paper/10 to-transparent">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-paper text-ink">
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                    <path d="M4 2.5v11l10-5.5-10-5.5z" />
                  </svg>
                </span>
                <span className="absolute left-4 top-4 rounded-full bg-paper/10 px-3 py-1 font-mono-tag text-[11px]">
                  {story.track}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-base font-bold leading-snug">
                  {story.headline}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/60">{story.quote}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-amber">
                  Watch Story
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
