import { HomeAboutTeaser } from "@/components/sections/home-about-teaser";
import { HomeApproach } from "@/components/sections/home-approach";
import { HomeChambersTeaser } from "@/components/sections/home-chambers-teaser";
import { HomeCtaBand } from "@/components/sections/home-cta-band";
import { HomeEngagement } from "@/components/sections/home-engagement";
import { HomeGallery } from "@/components/sections/home-gallery";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeImageBreak } from "@/components/sections/home-image-break";
import { HomePositioning } from "@/components/sections/home-positioning";
import { HomePracticePreview } from "@/components/sections/home-practice-preview";
import { HomePrinciple } from "@/components/sections/home-principle";
import { HomeSuccessTeaser } from "@/components/sections/home-success-teaser";
import { HomeTeamTeaser } from "@/components/sections/home-team-teaser";
import { HomeValues } from "@/components/sections/home-values";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomePositioning />
      <HomePrinciple />
      <HomePracticePreview />
      <HomeApproach />
      <HomeAboutTeaser />
      <HomeImageBreak />
      <HomeTeamTeaser />
      <HomeValues />
      <HomeChambersTeaser />
      <HomeEngagement />
      <HomeSuccessTeaser />
      <HomeGallery />
      <HomeCtaBand />
    </>
  );
}
