import Link from "next/link";
import { TEAM_COPY } from "@/lib/constants";

export function TeamComingSoon() {
  return (
    <section className="relative overflow-hidden bg-bg py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 team-soon-glow"
        aria-hidden
      />

      <div className="container-site relative z-10">
        <div className="mx-auto max-w-2xl text-center" data-reveal="scale">
          <div className="team-soon-mark mx-auto mb-8 flex h-20 w-20 items-center justify-center">
            <span className="team-soon-ring" aria-hidden />
            <span className="team-soon-ring team-soon-ring-delay" aria-hidden />
            <span className="relative text-xs font-semibold tracking-[0.22em] text-accent uppercase">
              Soon
            </span>
          </div>

          <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">
            {TEAM_COPY.soonLabel}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {TEAM_COPY.soonH2}
          </h2>
          <div
            className="accent-rule accent-rule-center mt-6 mb-6"
            aria-hidden
          />
          <p className="text-base text-muted md:text-lg">{TEAM_COPY.soonBody}</p>
          <p className="mt-5 text-sm text-muted/80">{TEAM_COPY.soonNote}</p>

          <div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8"
            data-reveal
            style={{ ["--reveal-delay" as string]: "120ms" }}
          >
            <Link href="/about" className="motion-link text-accent hover:text-accent-hover">
              About the practice
            </Link>
            <Link
              href="/practice-area"
              className="motion-link text-accent hover:text-accent-hover"
            >
              Practice areas
            </Link>
            <Link href="/contact" className="motion-link text-accent hover:text-accent-hover">
              Contact chambers
            </Link>
          </div>
        </div>

        <div
          className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-4 md:mt-20 md:gap-6"
          aria-hidden
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="team-soon-slot aspect-[3/4]"
              data-reveal
              style={{ ["--reveal-delay" as string]: `${180 + i * 100}ms` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
