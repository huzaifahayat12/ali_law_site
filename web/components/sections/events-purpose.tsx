import { EVENTS_COPY } from "@/lib/constants";

export function EventsPurpose() {
  return (
    <section className="bg-surface py-16 md:py-20">
      <div className="container-narrow">
        <div data-reveal>
          <div className="accent-rule mb-6" aria-hidden />
          <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            {EVENTS_COPY.purposeH2}
          </h2>
        </div>
        <div className="mt-6 space-y-5">
          {EVENTS_COPY.purposeBody.map((paragraph, index) => (
            <p
              key={paragraph.slice(0, 32)}
              className="text-base leading-relaxed text-muted md:text-lg"
              data-reveal
              style={{ ["--reveal-delay" as string]: `${index * 80}ms` }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
