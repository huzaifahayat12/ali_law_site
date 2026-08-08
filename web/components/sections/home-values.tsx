import { HOME_COPY } from "@/lib/constants";

export function HomeValues() {
  return (
    <section className="bg-bg py-16 md:py-20">
      <div className="container-site">
        <div className="max-w-2xl">
          <div className="accent-rule mb-6" aria-hidden />
          <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            {HOME_COPY.valuesH2}
          </h2>
          <p className="mt-3 text-muted">{HOME_COPY.valuesBody}</p>
        </div>

        <ul className="mt-12 grid gap-10 md:grid-cols-3 md:gap-12">
          {HOME_COPY.values.map((item, index) => (
            <li
              key={item.title}
              className="animate-[fade-up_0.7s_ease-out_both] border-t-2 border-accent pt-6"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
