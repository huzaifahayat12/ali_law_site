import type { Metadata } from "next";
import { FaqCta } from "@/components/sections/faq-cta";
import { FaqIntro } from "@/components/sections/faq-intro";
import { FaqList } from "@/components/sections/faq-list";
import { FaqOverview } from "@/components/sections/faq-overview";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ",
  description: `${SITE.name} — frequently asked questions about consultation, process, fees, practice areas, and chambers in ${SITE.city}.`,
};

export default function FaqPage() {
  return (
    <>
      <FaqIntro />
      <FaqOverview />
      <FaqList />
      <FaqCta />
    </>
  );
}
