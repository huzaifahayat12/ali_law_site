import Image from "next/image";
import Link from "next/link";
import { HOME_COPY } from "@/lib/constants";

export function HomeTeamTeaser() {
  return (
    <section className="bg-bg py-16 md:py-20">
      <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div
          className="group relative aspect-[4/5] overflow-hidden md:aspect-[3/4] lg:order-2"
          data-reveal="scale"
        >
          <Image
            src="/images/team-chambers.jpg"
            alt="Advocates at Ali Law Associate chambers"
            fill
            className="object-cover object-top motion-zoom"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="lg:order-1" data-reveal="left">
          <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            {HOME_COPY.teamH2}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            {HOME_COPY.teamBody}
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold">
            <Link href="/our-team" className="motion-link text-accent hover:text-accent-hover">
              Meet the team
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
