import Image from "next/image";
import { PRACTICE_COPY, SITE } from "@/lib/constants";

export function PracticeIntro() {
  return (
    <section className="grid min-h-[72svh] bg-footer-bg pt-[env(safe-area-inset-top,0px)] lg:min-h-[80svh] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
      <div className="flex flex-col justify-end px-6 pb-12 pt-28 sm:px-8 md:pb-16 md:pt-32 lg:px-12 xl:pl-[max(1.5rem,calc((100vw-1120px)/2))]">
        <div className="max-w-xl animate-[fade-up_0.8s_ease-out_both]">
          <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            {PRACTICE_COPY.introLabel}
          </p>
          <h1 className="mt-5 text-4xl font-bold uppercase tracking-[0.06em] text-footer-fg sm:text-5xl md:text-6xl">
            {PRACTICE_COPY.introHeadline}
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-footer-fg/75 md:text-lg">
            {PRACTICE_COPY.introSupport}
          </p>
          <p className="mt-8 text-sm text-footer-fg/55">
            {SITE.advocate} · {SITE.title} · {SITE.city}
          </p>
        </div>
      </div>

      <div className="relative min-h-[42vh] lg:min-h-full">
        <Image
          src="/images/practice/practice-hero.jpg"
          alt={`${SITE.name} practice areas — counsel and preparation`}
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-footer-bg/50 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-footer-bg/40"
          aria-hidden
        />
      </div>
    </section>
  );
}
