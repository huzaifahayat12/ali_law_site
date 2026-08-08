import type { Metadata } from "next";
import { EventsCta } from "@/components/sections/events-cta";
import { EventsIntro } from "@/components/sections/events-intro";
import { EventsList } from "@/components/sections/events-list";
import { EventsPresence } from "@/components/sections/events-presence";
import { EventsPurpose } from "@/components/sections/events-purpose";
import { EventsUpdates } from "@/components/sections/events-updates";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Events & Updates",
  description: `${SITE.name} — Bar engagement, chamber moments, and practice notices from ${SITE.advocate}, ${SITE.title}, ${SITE.city}.`,
};

export default function EventsUpdatesPage() {
  return (
    <>
      <EventsIntro />
      <EventsPurpose />
      <EventsList />
      <EventsUpdates />
      <EventsPresence />
      <EventsCta />
    </>
  );
}
