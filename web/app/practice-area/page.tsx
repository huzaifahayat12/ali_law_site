import type { Metadata } from "next";
import { PracticeAreas } from "@/components/sections/practice-areas";
import { PracticeCta } from "@/components/sections/practice-cta";
import { PracticeGuide } from "@/components/sections/practice-guide";
import { PracticeIntro } from "@/components/sections/practice-intro";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Practice Area",
  description: `${SITE.name} practice areas — civil, criminal, family, property, corporate, and constitutional counsel in ${SITE.city}. Clear guides for clients.`,
};

export default function PracticeAreaPage() {
  return (
    <>
      <PracticeIntro />
      <PracticeGuide />
      <PracticeAreas />
      <PracticeCta />
    </>
  );
}
