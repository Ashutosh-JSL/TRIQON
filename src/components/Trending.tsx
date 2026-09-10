import Link from "next/link";
import { trendingCategories } from "@/lib/data";

export default function Trending() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <span className="font-mono-tag text-xs uppercase tracking-wide text-amber-deep">
          🔥 Trending in 3Skill
        </span>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Trending in 3Skill
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {trendingCategories.map((group) => (
            <div key={group.category} className="rounded-2xl border border-line bg-paper-raised p-6">
              <Link
                href={group.href}
                className="font-display text-lg font-bold text-ink hover:text-amber-deep"
              >
                {group.category}
              </Link>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={group.href}
                      className="flex items-center justify-between gap-3 rounded-xl border border-transparent px-3 py-2.5 -mx-3 transition-colors hover:border-line hover:bg-paper"
                    >
                      <span className="text-sm font-medium text-ink">{item.title}</span>
                      <span className="flex shrink-0 items-center gap-2 font-mono-tag text-xs text-ink-soft">
                        {item.meta}
                        <span className="text-amber-deep">★ {item.rating}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
