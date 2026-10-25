import type { Metadata } from "next";
import { AboutCredentials } from "@/components/sections/about-credentials";
import { AboutCta } from "@/components/sections/about-cta";
import { AboutIntro } from "@/components/sections/about-intro";
import { AboutPhoto } from "@/components/sections/about-photo";
import { AboutStory } from "@/components/sections/about-story";
import { AboutValues } from "@/components/sections/about-values";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: `${SITE.name} — ${SITE.advocate}, ${SITE.title}. Chamber practice at ${SITE.address}.`,
};

export default function AboutPage() {
  return (
    <>
      <AboutIntro />
      <AboutStory />
      <AboutValues />
      <AboutPhoto />
      <AboutCredentials />
      <AboutCta />
    </>
  );
}
