import { HOME_COPY, whatsappUrl } from "@/lib/constants";
import { ButtonLink } from "@/components/ui/button-link";

export function HomeCtaBand() {
  return (
    <section className="bg-footer-bg py-16 text-footer-fg md:py-20">
      <div className="container-site flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="max-w-xl">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {HOME_COPY.ctaH2}
          </h2>
          <p className="mt-3 text-footer-fg/75">{HOME_COPY.ctaSupport}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <ButtonLink href={whatsappUrl()} external className="w-full sm:w-auto">
            WhatsApp
          </ButtonLink>
          <ButtonLink
            href="/contact"
            variant="ghost"
            className="w-full sm:w-auto"
          >
            Contact form
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
