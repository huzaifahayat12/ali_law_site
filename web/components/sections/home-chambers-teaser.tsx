import Image from "next/image";
import Link from "next/link";
import { HOME_COPY, SITE } from "@/lib/constants";

export function HomeChambersTeaser() {
  return (
    <section className="bg-surface py-16 md:py-20">
      <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div
          className="group relative aspect-[4/5] overflow-hidden md:aspect-[3/4]"
          data-reveal="scale"
        >
          <Image
            src="/images/court-presence.jpg"
            alt={`${SITE.advocate} in advocate's gown at the High Court`}
            fill
            className="object-cover object-[center_20%] motion-zoom"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div data-reveal="right">
          <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            {HOME_COPY.chambersH2}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            {HOME_COPY.chambersBody}
          </p>
          <p className="mt-3 text-sm text-muted">{SITE.address}</p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold">
            <Link href="/contact" className="motion-link text-accent hover:text-accent-hover">
              Visit or message us
            </Link>
            <span className="text-border" aria-hidden>
              |
            </span>
            <Link
              href="/practice-area"
              className="motion-link text-accent hover:text-accent-hover"
            >
              Practice areas
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
