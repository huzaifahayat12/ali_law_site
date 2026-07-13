import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SITE, whatsappUrl } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-footer-bg text-footer-fg">
      <div className="container-site grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Image
            src="/brand/logo-lockup.png"
            alt={SITE.name}
            width={200}
            height={44}
            className="h-10 w-auto brightness-0 invert"
          />
          <p className="text-sm text-footer-fg/70">
            {SITE.advocate}, {SITE.title} — {SITE.city}
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
            Explore
          </h2>
          <ul className="space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
            Contact
          </h2>
          <ul className="space-y-2 text-sm text-footer-fg/85">
            <li>
              <a href={whatsappUrl()} className="hover:text-accent" target="_blank" rel="noopener noreferrer">
                WhatsApp {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`tel:${SITE.phoneTel}`} className="hover:text-accent">
                Call {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-accent">
                {SITE.email}
              </a>
            </li>
            <li className="max-w-xs pt-1 leading-relaxed">{SITE.address}</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
            Legal
          </h2>
          <p className="text-sm leading-relaxed text-footer-fg/70">
            Information on this site is for general purposes only and does not
            create an attorney–client relationship.
          </p>
          <Link href="/disclaimer" className="mt-3 inline-block text-sm text-accent hover:underline">
            Full disclaimer
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-5 text-xs text-footer-fg/55 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>{SITE.city}, Pakistan</p>
        </div>
      </div>
    </footer>
  );
}
