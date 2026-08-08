import { FAQ_COPY } from "@/lib/constants";

export function FaqOverview() {
  return (
    <section className="bg-surface py-16 md:py-20">
      <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
          <div className="max-w-md animate-[fade-up_0.7s_ease-out_both]">
            <div className="accent-rule mb-6" aria-hidden />
            <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              {FAQ_COPY.overviewH2}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
              {FAQ_COPY.overviewBody}
            </p>
            <p className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-muted">
              {FAQ_COPY.overviewNote}
            </p>
            <a
              href="#faq-list"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-accent transition-colors hover:text-accent-hover"
            >
              Browse questions
              <span aria-hidden>→</span>
            </a>
          </div>

          <div>
            <p className="mb-5 text-xs font-semibold tracking-[0.18em] text-muted uppercase">
              {FAQ_COPY.tipsH2}
            </p>
            <ul className="divide-y divide-border border-y border-border">
              {FAQ_COPY.tips.map((tip, index) => (
                <li
                  key={tip.title}
                  className="flex gap-5 py-5 animate-[fade-up_0.7s_ease-out_both] sm:gap-8"
                  style={{ animationDelay: `${0.08 * (index + 1)}s` }}
                >
                  <span className="w-8 shrink-0 font-semibold tabular-nums tracking-wide text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-medium text-ink md:text-lg">
                      {tip.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
                      {tip.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
