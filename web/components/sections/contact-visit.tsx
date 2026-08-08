import { CONTACT_COPY, SITE } from "@/lib/constants";

const mapSrc =
  "https://maps.google.com/maps?q=Manki%20Chambers%209%20Turner%20Road%20Lahore&t=&z=16&ie=UTF8&iwloc=&output=embed";

export function ContactVisit() {
  return (
    <section id="visit-chambers" className="bg-bg py-16 md:py-24">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center animate-[fade-up_0.7s_ease-out_both]">
          <div className="accent-rule accent-rule-center mb-6" aria-hidden />
          <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {CONTACT_COPY.visitH2}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
            {CONTACT_COPY.visitBody}
          </p>
          <p className="mt-6 text-base font-medium text-ink">{SITE.address}</p>
        </div>

        <div
          className="relative mt-12 overflow-hidden border border-border animate-[fade-in_0.9s_ease-out_both]"
          style={{ animationDelay: "0.12s" }}
        >
          <iframe
            title={`Map — ${CONTACT_COPY.mapCaption}`}
            src={mapSrc}
            className="aspect-[16/10] w-full border-0 md:aspect-[21/9]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <p className="mt-4 text-center text-sm text-muted">
          {CONTACT_COPY.mapCaption}
        </p>
      </div>
    </section>
  );
}
