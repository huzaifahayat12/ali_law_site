import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HOME_COPY } from "@/lib/constants";

export function HomeSuccessTeaser() {
  return (
    <section className="bg-bg py-16 md:py-20">
      <div className="container-site">
        <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
          {HOME_COPY.successH2}
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {HOME_COPY.successItems.map((item) => (
            <article key={item.title} className="border-l-2 border-accent pl-5">
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-muted">{item.body}</p>
            </article>
          ))}
        </div>

        <Link
          href="/events-updates"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover"
        >
          Events & updates
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
