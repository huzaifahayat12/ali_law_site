import Image from "next/image";
import { HOME_COPY } from "@/lib/constants";

export function HomeImageBreak() {
  return (
    <section className="relative min-h-[48vh] overflow-hidden md:min-h-[56vh]">
      <Image
        src="/images/case-prep.jpg"
        alt="Advocates reviewing authorities and case papers at chambers"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/20"
        aria-hidden
      />
      <div className="container-site relative z-10 flex min-h-[48vh] items-end pb-12 md:min-h-[56vh] md:pb-16">
        <p className="max-w-xl animate-[fade-up_0.8s_ease-out_both] text-lg font-medium leading-snug text-white md:text-2xl">
          {HOME_COPY.imageBreakCaption}
        </p>
      </div>
    </section>
  );
}
