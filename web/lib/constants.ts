export const SITE = {
  name: "Ali Law Associate",
  advocate: "Ali Raza Wahga",
  title: "Advocate High Court",
  city: "Lahore",
  phoneDisplay: "0333 4389957",
  phoneTel: "+923334389957",
  whatsappNumber: "923334389957",
  email: "Wahga70007@gmail.com",
  address: "Manki Chambers, 5th Floor, 9-Turner Road, Lahore",
  whatsappGreeting:
    "Assalam o Alaikum, I would like to inquire about legal consultation with Ali Law Associate.",
} as const;

export function whatsappUrl(message = SITE.whatsappGreeting) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/our-team", label: "Our Team" },
  { href: "/practice-area", label: "Practice Area" },
  { href: "/events-updates", label: "Events & Updates" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
] as const;

export const PRACTICE_PREVIEW = [
  { label: "Civil Litigation", slug: "civil-litigation" },
  { label: "Criminal Law", slug: "criminal-law" },
  { label: "Family Law", slug: "family-law" },
  { label: "Property / Real Estate", slug: "property-real-estate" },
  { label: "Corporate & Commercial", slug: "corporate-commercial" },
  { label: "Constitutional Law", slug: "constitutional-law" },
] as const;

export const HOME_COPY = {
  heroHeadline:
    "From first consult to court — experienced High Court representation.",
  heroSupport: `${SITE.advocate} · ${SITE.title} · ${SITE.city}`,
  positioningH2: "Counsel built on clarity and presence",
  positioningBody:
    "Ali Law Associate is a Lahore-based practice led by Ali Raza Wahga, Advocate High Court, with a broad team across civil, criminal, family, property, commercial, and related matters.",
  practiceIntro:
    "Full-spectrum advocacy — start with the area that fits your matter.",
  aboutH2: "Meet Ali Raza Wahga",
  aboutBody:
    "Advocate High Court — chamber practice at Manki Chambers, Turner Road, Lahore.",
  successH2: "Hard work in practice",
  successItems: [
    {
      title: "Chamber & court advocacy",
      body: "Ongoing representation before the Lahore High Court and related forums.",
    },
    {
      title: "Client-centered counsel",
      body: "Practical guidance from first consult through WhatsApp and email follow-up.",
    },
  ],
  ctaH2: "Ready to discuss your matter?",
  ctaSupport: "Message on WhatsApp for the fastest response.",
} as const;
