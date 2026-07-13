import { HOME_COPY } from "@/lib/constants";

export function HomePositioning() {
  return (
    <section className="bg-surface py-16 md:py-20">
      <div className="container-narrow text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
          {HOME_COPY.positioningH2}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
          {HOME_COPY.positioningBody}
        </p>
      </div>
    </section>
  );
}
