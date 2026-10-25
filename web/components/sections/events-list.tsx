import Image from "next/image";
import { EVENTS, EVENTS_COPY } from "@/lib/constants";

export function EventsList() {
  return (
    <section
      id="events"
      className="scroll-mt-24 bg-bg py-16 md:scroll-mt-28 md:py-20"
    >
      <div className="container-site">
        <div className="max-w-2xl" data-reveal>
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Calendar
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            {EVENTS_COPY.eventsH2}
          </h2>
          <p className="mt-3 text-muted">{EVENTS_COPY.eventsBody}</p>
        </div>

        {EVENTS.length === 0 ? (
          <div className="mt-12 max-w-xl border-t-2 border-accent pt-8" data-reveal>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              {EVENTS_COPY.eventsEmpty}
            </p>
          </div>
        ) : (
          <ul className="mt-12 divide-y divide-border border-y border-border">
            {EVENTS.map((event, index) => (
              <li
                key={event.id}
                className="grid gap-6 py-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-12 md:py-10"
                data-reveal
                style={{ ["--reveal-delay" as string]: `${index * 80}ms` }}
              >
                <div>
                  <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                    {event.date}
                  </p>
                  {event.location ? (
                    <p className="mt-2 text-sm text-muted">{event.location}</p>
                  ) : null}
                  {event.image ? (
                    <div className="group relative mt-5 aspect-[4/3] overflow-hidden md:mt-6">
                      <Image
                        src={event.image}
                        alt={event.imageAlt ?? event.title}
                        fill
                        className="object-cover motion-zoom"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                    </div>
                  ) : null}
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
                    {event.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted">
                    {event.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
