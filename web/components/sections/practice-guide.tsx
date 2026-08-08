import { PRACTICE_AREAS, PRACTICE_COPY } from "@/lib/constants";

export function PracticeGuide() {
  return (
    <section id="contents" className="scroll-mt-24 bg-bg py-16 md:scroll-mt-28 md:py-20">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div className="max-w-md">
            <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              Study guide
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              {PRACTICE_COPY.guideH2}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
              {PRACTICE_COPY.guideBody}
            </p>
            <p className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-muted">
              {PRACTICE_COPY.guideNote}
            </p>
          </div>

          <nav aria-label="Jump to practice area">
            <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-muted uppercase">
              Contents · {PRACTICE_AREAS.length} areas
            </p>
            <ol className="divide-y divide-border border-y border-border">
              {PRACTICE_AREAS.map((area, index) => (
                <li key={area.slug}>
                  <a
                    href={`#${area.slug}`}
                    className="group flex items-baseline gap-5 py-4 transition-colors hover:bg-surface/80 sm:gap-8 sm:py-5"
                  >
                    <span className="w-8 shrink-0 font-semibold tabular-nums tracking-wide text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-base font-medium text-ink transition-colors group-hover:text-accent md:text-lg">
                      {area.label}
                    </span>
                    <span
                      className="hidden text-sm text-muted transition-colors group-hover:text-accent sm:inline"
                      aria-hidden
                    >
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
}
