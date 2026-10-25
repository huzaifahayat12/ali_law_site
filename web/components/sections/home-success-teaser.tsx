import Image from "next/image";
import Link from "next/link";
import { HOME_COPY } from "@/lib/constants";

export function HomeSuccessTeaser() {
  return (
    <section className="bg-bg py-16 md:py-20">
      <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div
          className="group relative aspect-[4/5] overflow-hidden md:aspect-[3/4] lg:order-2"
          data-reveal="scale"
        >
          <Image
            src="/images/success-teaser.jpg"
            alt="Speaking at the Lahore High Court Bar Association"
            fill
            className="object-cover object-center motion-zoom"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="lg:order-1" data-reveal="left">
          <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            {HOME_COPY.successH2}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            {HOME_COPY.successBody}
          </p>

          <ul className="mt-8 space-y-5">
            {HOME_COPY.successItems.map((item, index) => (
              <li
                key={item.title}
                className="border-l-2 border-accent pl-5"
                data-reveal
                style={{ ["--reveal-delay" as string]: `${index * 80}ms` }}
              >
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-muted">{item.body}</p>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold">
            <Link
              href="/events-updates"
              className="motion-link text-accent hover:text-accent-hover"
            >
              Events & updates
            </Link>
            <span className="text-border" aria-hidden>
              |
            </span>
            <Link href="/about" className="motion-link text-accent hover:text-accent-hover">
              About the practice
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
