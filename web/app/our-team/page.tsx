import type { Metadata } from "next";
import { TeamComingSoon } from "@/components/sections/team-coming-soon";
import { TeamCta } from "@/components/sections/team-cta";
import { TeamIntro } from "@/components/sections/team-intro";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Team",
  description: `${SITE.name} — team profiles coming soon. Chamber counsel with ${SITE.advocate}, ${SITE.title}, ${SITE.city}.`,
};

export default function OurTeamPage() {
  return (
    <>
      <TeamIntro />
      <TeamComingSoon />
      <TeamCta />
    </>
  );
}
