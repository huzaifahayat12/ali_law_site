import Image from "next/image";
import { PRACTICE_AREAS, whatsappUrl } from "@/lib/constants";
import { ButtonLink } from "@/components/ui/button-link";

export function PracticeAreas() {
  return (
    <div className="bg-surface">
      {PRACTICE_AREAS.map((area, index) => (
        <section
          key={area.slug}
          id={area.slug}
          className="scroll-mt-24 border-t border-border md:scroll-mt-28"
        >
          <div className="relative h-[36vh] min-h-[220px] overflow-hidden md:h-[42vh]">
            <Image
              src={area.image}
              alt={area.imageAlt}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/15"
              aria-hidden
            />
            <div className="container-site relative z-10 flex h-full items-end pb-8 md:pb-10">
              <div className="animate-[fade-up_0.7s_ease-out_both]">
                <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                  Chapter {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  {area.label}
                </h2>
              </div>
            </div>
          </div>

          <div className="container-narrow py-12 md:py-16">
            <div className="animate-[fade-up_0.7s_ease-out_both]">
              <p className="text-lg leading-relaxed text-ink md:text-xl md:leading-relaxed">
                {area.overview}
              </p>

              <div className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-12">
                <div>
                  <h3 className="border-b border-accent pb-2 text-xs font-semibold tracking-[0.16em] text-ink uppercase">
                    Common matters
                  </h3>
                  <ol className="mt-5 space-y-4">
                    {area.commonMatters.map((item, matterIndex) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted md:text-base">
                        <span className="shrink-0 font-semibold tabular-nums text-accent">
                          {matterIndex + 1}.
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div>
                  <h3 className="border-b border-accent pb-2 text-xs font-semibold tracking-[0.16em] text-ink uppercase">
                    How counsel helps
                  </h3>
                  <p className="mt-5 text-sm leading-relaxed text-muted md:text-base">
                    {area.howWeHelp}
                  </p>

                  <div className="mt-8 bg-bg px-4 py-5 md:px-5">
                    <p className="text-xs font-semibold tracking-[0.14em] text-accent uppercase">
                      Before you consult
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {area.studyTip}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-border pt-8">
                <ButtonLink
                  href={whatsappUrl(
                    `Assalam o Alaikum, I would like to inquire about ${area.label} with Ali Law Associate.`,
                  )}
                  external
                >
                  Ask about {area.label}
                </ButtonLink>
                <a
                  href="#contents"
                  className="text-sm font-medium text-muted transition-colors hover:text-accent"
                >
                  Back to contents
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
