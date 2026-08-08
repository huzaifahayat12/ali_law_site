import { HOME_COPY } from "@/lib/constants";

export function HomeApproach() {
  return (
    <section className="bg-surface py-16 md:py-20">
      <div className="container-site">
        <div className="max-w-2xl">
          <div className="accent-rule mb-6" aria-hidden />
          <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            {HOME_COPY.approachH2}
          </h2>
          <p className="mt-3 text-muted">{HOME_COPY.approachBody}</p>
        </div>

        <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {HOME_COPY.approachSteps.map((item, index) => (
            <li
              key={item.step}
              className="relative animate-[fade-up_0.7s_ease-out_both]"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <span className="block font-semibold tracking-[0.2em] text-accent">
                {item.step}
              </span>
              <h3 className="mt-3 text-xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                {item.body}
              </p>
              {index < HOME_COPY.approachSteps.length - 1 ? (
                <span
                  className="pointer-events-none absolute top-3 right-0 hidden h-px w-10 bg-border md:block lg:w-16"
                  aria-hidden
                />
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
