import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/sections/contact-form";
import { CONTACT_COPY, SITE, whatsappUrl } from "@/lib/constants";

const channels = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: SITE.phoneDisplay,
    href: whatsappUrl(),
    external: true,
    icon: MessageCircle,
    hint: "Fastest reply",
  },
  {
    id: "call",
    label: "Call",
    value: SITE.phoneDisplay,
    href: `tel:${SITE.phoneTel}`,
    external: false,
    icon: Phone,
    hint: "Same number",
  },
  {
    id: "email",
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    external: false,
    icon: Mail,
    hint: "Direct to chambers",
  },
  {
    id: "address",
    label: "Chambers",
    value: SITE.address,
    href: "#visit-chambers",
    external: false,
    icon: MapPin,
    hint: SITE.city,
  },
] as const;

export function ContactPanel() {
  return (
    <section id="contact-form" className="bg-surface py-16 md:py-24">
      <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="animate-[fade-up_0.7s_ease-out_both]">
            <div className="accent-rule mb-6" aria-hidden />
            <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              {CONTACT_COPY.channelsH2}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
              {CONTACT_COPY.channelsBody}
            </p>
          </div>

          <ul className="mt-10 divide-y divide-border border-y border-border">
            {channels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <li
                  key={channel.id}
                  className="animate-[fade-up_0.7s_ease-out_both]"
                  style={{ animationDelay: `${0.06 * (index + 1)}s` }}
                >
                  <a
                    href={channel.href}
                    {...(channel.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex gap-4 py-5 transition-colors"
                  >
                    <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center border border-border text-accent transition-colors group-hover:border-accent">
                      <Icon className="size-4" aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">
                          {channel.label}
                        </span>
                        <span className="text-xs text-muted">{channel.hint}</span>
                      </span>
                      <span className="mt-1.5 block text-base font-medium text-ink transition-colors group-hover:text-accent md:text-lg">
                        {channel.value}
                      </span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="lg:col-span-7">
          <div className="animate-[fade-up_0.7s_ease-out_both] border border-border bg-bg p-6 md:p-8 lg:p-10">
            <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              {CONTACT_COPY.formH2}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              {CONTACT_COPY.formBody}
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
