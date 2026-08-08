import Image from "next/image";
import { CONTACT_COPY, SITE } from "@/lib/constants";

export function ContactIntro() {
  return (
    <section className="relative min-h-[70svh] overflow-hidden md:min-h-[78svh]">
      <Image
        src="/images/chambers-consult.jpg"
        alt="Consultation at Ali Law Associate chambers"
        fill
        priority
        className="pointer-events-none object-cover object-[center_30%]"
        sizes="100vw"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/35"
        aria-hidden
      />

      <div className="container-site relative z-10 flex min-h-[70svh] flex-col justify-end pb-14 pt-28 md:min-h-[78svh] md:pb-20 md:pt-32">
        <div className="max-w-2xl animate-[fade-up_0.8s_ease-out_both]">
          <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">
            {CONTACT_COPY.introLabel}
          </p>
          <h1 className="mt-4 text-4xl font-bold uppercase tracking-[0.06em] text-white sm:text-5xl md:text-6xl">
            {CONTACT_COPY.introHeadline}
          </h1>
          <div className="accent-rule mt-6 mb-5" aria-hidden />
          <p className="text-base text-white/85 md:text-lg">
            {CONTACT_COPY.introSupport}
          </p>
          <p className="mt-6 text-sm text-white/55">
            {SITE.advocate} · {SITE.title} · {SITE.city}
          </p>
        </div>
      </div>
    </section>
  );
}
