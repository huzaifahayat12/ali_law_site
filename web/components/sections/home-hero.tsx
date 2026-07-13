import Image from "next/image";
import { HOME_COPY, SITE, whatsappUrl } from "@/lib/constants";
import { ButtonLink } from "@/components/ui/button-link";

export function HomeHero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <Image
        src="/images/hero-portrait.jpg"
        alt={`${SITE.advocate}, ${SITE.title}`}
        fill
        priority
        className="pointer-events-none object-cover object-[center_20%]"
        sizes="100vw"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/25"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"
        aria-hidden
      />

      <div className="container-site relative z-10 flex min-h-[100svh] flex-col justify-end pb-16 pt-28 md:justify-center md:pb-24 md:pt-32">
        <div className="max-w-2xl animate-[fade-up_0.8s_ease-out_both]">
          <h1 className="text-4xl font-bold uppercase tracking-[0.06em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {SITE.name}
          </h1>
          <p className="mt-5 max-w-xl text-lg font-medium leading-snug text-white/95 md:text-xl">
            {HOME_COPY.heroHeadline}
          </p>
          <p className="mt-3 text-sm text-white/75 md:text-base">
            {HOME_COPY.heroSupport}
          </p>
          <div className="mt-8">
            <ButtonLink href={whatsappUrl()} external>
              Chat on WhatsApp
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
