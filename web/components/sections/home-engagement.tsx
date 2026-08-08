import Image from "next/image";
import Link from "next/link";
import { HOME_COPY } from "@/lib/constants";

export function HomeEngagement() {
  return (
    <section className="bg-surface py-16 md:py-20">
      <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="accent-rule mb-6" aria-hidden />
          <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            {HOME_COPY.engagementH2}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            {HOME_COPY.engagementBody}
          </p>
          <Link
            href="/events-updates"
            className="mt-8 inline-block text-sm font-semibold text-accent hover:text-accent-hover"
          >
            See events & updates
          </Link>
        </div>

        <div className="relative grid grid-cols-12 gap-3 lg:col-span-7 lg:gap-4">
          <div className="relative col-span-7 aspect-[3/4] overflow-hidden">
            <Image
              src="/images/field-presence.jpg"
              alt="Counsel meeting community members outside chambers"
              fill
              className="object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.03]"
              sizes="(max-width: 1024px) 60vw, 35vw"
            />
          </div>
          <div className="relative col-span-5 mt-10 aspect-[3/4] overflow-hidden self-end md:mt-16">
            <Image
              src="/images/chambers-consult.jpg"
              alt="Client consultation at chambers"
              fill
              className="object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.03]"
              sizes="(max-width: 1024px) 40vw, 25vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
