import { HomeAboutTeaser } from "@/components/sections/home-about-teaser";
import { HomeCtaBand } from "@/components/sections/home-cta-band";
import { HomeHero } from "@/components/sections/home-hero";
import { HomePositioning } from "@/components/sections/home-positioning";
import { HomePracticePreview } from "@/components/sections/home-practice-preview";
import { HomeSuccessTeaser } from "@/components/sections/home-success-teaser";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomePositioning />
      <HomePracticePreview />
      <HomeAboutTeaser />
      <HomeSuccessTeaser />
      <HomeCtaBand />
    </>
  );
}
