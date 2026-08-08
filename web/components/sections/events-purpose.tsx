import { EVENTS_COPY } from "@/lib/constants";

export function EventsPurpose() {
  return (
    <section className="bg-surface py-16 md:py-20">
      <div className="container-narrow">
        <div className="accent-rule mb-6" aria-hidden />
        <h2 className="animate-[fade-up_0.7s_ease-out_both] text-2xl font-semibold tracking-tight text-ink md:text-3xl">
          {EVENTS_COPY.purposeH2}
        </h2>
        <div className="mt-6 space-y-5">
          {EVENTS_COPY.purposeBody.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className="animate-[fade-up_0.7s_ease-out_both] text-base leading-relaxed text-muted md:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
