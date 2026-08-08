import Image from "next/image";
import { EVENTS_COPY } from "@/lib/constants";

export function EventsPresence() {
  return (
    <section className="relative min-h-[48vh] overflow-hidden md:min-h-[56vh]">
      <Image
        src="/images/field-presence.jpg"
        alt="Counsel meeting community members outside chambers"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/20"
        aria-hidden
      />
      <div className="container-site relative z-10 flex min-h-[48vh] items-end pb-12 md:min-h-[56vh] md:pb-16">
        <p
          className="max-w-xl text-lg font-medium leading-snug text-white md:text-2xl"
          data-reveal
        >
          {EVENTS_COPY.photoCaption}
        </p>
      </div>
    </section>
  );
}
