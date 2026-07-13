import Image from "next/image";
import Link from "next/link";
import { HOME_COPY, SITE } from "@/lib/constants";

export function HomeAboutTeaser() {
  return (
    <section className="bg-surface py-16 md:py-20">
      <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden md:aspect-[3/4]">
          <Image
            src="/images/about-teaser.jpg"
            alt={`${SITE.advocate} speaking at a podium`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            {HOME_COPY.aboutH2}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            {HOME_COPY.aboutBody}
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold">
            <Link href="/about" className="text-accent hover:text-accent-hover">
              About the practice
            </Link>
            <span className="text-border" aria-hidden>
              |
            </span>
            <Link href="/our-team" className="text-accent hover:text-accent-hover">
              Our team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
