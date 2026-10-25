import type { Metadata } from "next";
import { ContactCta } from "@/components/sections/contact-cta";
import { ContactIntro } from "@/components/sections/contact-intro";
import { ContactPanel } from "@/components/sections/contact-panel";
import { ContactVisit } from "@/components/sections/contact-visit";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${SITE.name} — ${SITE.advocate}, ${SITE.title}. WhatsApp, call, email, or send a message to chambers in ${SITE.city}.`,
};

export default function ContactPage() {
  return (
    <>
      <ContactIntro />
      <ContactPanel />
      <ContactVisit />
      <ContactCta />
    </>
  );
}
