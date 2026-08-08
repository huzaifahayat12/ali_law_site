import { EVENTS_COPY, UPDATES } from "@/lib/constants";

export function EventsUpdates() {
  return (
    <section
      id="updates"
      className="scroll-mt-24 bg-surface py-16 md:scroll-mt-28 md:py-20"
    >
      <div className="container-site">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            From the chambers
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            {EVENTS_COPY.updatesH2}
          </h2>
          <p className="mt-3 text-muted">{EVENTS_COPY.updatesBody}</p>
        </div>

        {UPDATES.length === 0 ? (
          <div className="mt-12 max-w-xl border-t-2 border-accent pt-8">
            <p className="text-base leading-relaxed text-muted md:text-lg">
              {EVENTS_COPY.updatesEmpty}
            </p>
          </div>
        ) : (
          <ul className="mt-12 space-y-0">
            {UPDATES.map((update, index) => (
              <li
                key={update.id}
                className="animate-[fade-up_0.7s_ease-out_both] border-l-2 border-accent py-6 pl-5 md:pl-6"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <p className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">
                  {update.date}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-ink md:text-xl">
                  {update.title}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
                  {update.body}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
