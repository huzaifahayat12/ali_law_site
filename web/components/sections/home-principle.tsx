import { HOME_COPY } from "@/lib/constants";

export function HomePrinciple() {
  return (
    <section className="relative overflow-hidden bg-footer-bg py-16 text-footer-fg md:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(135deg, var(--accent) 0%, transparent 45%, transparent 55%, var(--accent) 100%)",
        }}
        aria-hidden
      />
      <div className="container-narrow relative text-center" data-reveal>
        <div className="accent-rule accent-rule-center mb-8" aria-hidden />
        <blockquote className="text-2xl font-medium leading-snug tracking-tight text-footer-fg md:text-3xl md:leading-snug">
          {HOME_COPY.principleQuote}
        </blockquote>
        <p className="mt-6 text-sm tracking-[0.12em] text-accent uppercase">
          {HOME_COPY.principleAttr}
        </p>
      </div>
    </section>
  );
}
