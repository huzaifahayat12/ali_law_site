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

export function whatsappUrl(message: string = SITE.whatsappGreeting) {
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
  teamH2: "A chamber built for advocacy",
  teamBody:
    "Associates and counsel work alongside Ali Raza Wahga — files prepared, arguments sharpened, clients kept informed.",
  chambersH2: "From chambers to the High Court",
  chambersBody:
    "Day-to-day practice spans Manki Chambers on Turner Road and appearances before the Lahore High Court.",
  successH2: "Present in the profession",
  successBody:
    "Active engagement with the Lahore High Court Bar — advocacy that extends beyond a single brief.",
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
  galleryH2: "Practice in pictures",
  galleryBody: "Moments from chambers, court corridors, and matters in progress.",
  principleQuote:
    "Clear advice. Steady presence. Advocacy that holds up when it matters.",
  principleAttr: "Ali Law Associate · Lahore",
  approachH2: "How a matter moves",
  approachBody: "A direct path from first contact to representation.",
  approachSteps: [
    {
      step: "01",
      title: "Consult",
      body: "Share the facts on WhatsApp or in chambers — we frame the issue.",
    },
    {
      step: "02",
      title: "Counsel",
      body: "Options, risks, and next steps explained in plain language.",
    },
    {
      step: "03",
      title: "Advocate",
      body: "Filings, hearings, and follow-through before the relevant forum.",
    },
  ],
  imageBreakCaption: "Preparation before the hearing — chambers work that shows in court.",
  valuesH2: "What guides the practice",
  valuesBody: "Standards we hold on every brief.",
  values: [
    {
      title: "Clarity first",
      body: "You leave each conversation knowing where the matter stands.",
    },
    {
      title: "Court readiness",
      body: "Papers, authorities, and argument prepared before you need them.",
    },
    {
      title: "Responsive counsel",
      body: "Reach us by WhatsApp, call, or email when something shifts.",
    },
  ],
  engagementH2: "Presence beyond the brief",
  engagementBody:
    "Professional standing is built in chambers, at the Bar, and in how counsel meets people when the matter is personal.",
  ctaH2: "Ready to discuss your matter?",
  ctaSupport: "Message on WhatsApp for the fastest response.",
} as const;

export const ABOUT_COPY = {
  introLabel: "About",
  introHeadline: SITE.name,
  introSupport: `${SITE.advocate} · ${SITE.title} · ${SITE.city}`,
  storyH2: "A Lahore chamber practice",
  storyBody: [
    "Ali Law Associate is built around clear counsel and steady courtroom presence. Led by Ali Raza Wahga, Advocate High Court, the practice serves clients across civil, criminal, family, property, commercial, and related matters.",
    "Work runs from Manki Chambers on Turner Road to appearances before the Lahore High Court — formal in tradition, direct in how we communicate, and practical about what a matter needs next.",
  ],
  valuesH2: "What we hold to",
  valuesBody: "Standards that shape every brief and every conversation.",
  values: [
    {
      title: "Client-centered",
      body: "You understand the issue, the options, and the next step — without unnecessary jargon.",
    },
    {
      title: "Thorough preparation",
      body: "Papers, authorities, and argument are ready before the hearing, not assembled at the door.",
    },
    {
      title: "Accessible counsel",
      body: "Reach us on WhatsApp, by call, or email when facts change and you need a prompt reply.",
    },
  ],
  photoCaption:
    "Chamber work and court presence — advocacy rooted in Lahore.",
  credentialsH2: "Standing & practice",
  credentialsBody:
    "Standing of the practice as confirmed today. Education and further affiliations can be added when verified.",
  credentials: [
    {
      label: "Advocate",
      value: `${SITE.advocate}, ${SITE.title}`,
    },
    {
      label: "Practice",
      value: `${SITE.name} · Full-spectrum advocacy`,
    },
    {
      label: "Chambers",
      value: SITE.address,
    },
    {
      label: "Forum",
      value: "Lahore High Court and related forums",
    },
  ],
  ctaH2: "Discuss your matter",
  ctaSupport: "Message on WhatsApp for the fastest response — or use the contact form.",
} as const;

export const HOME_GALLERY = [
  {
    src: "/images/team-group.jpg",
    alt: "Ali Law Associate team at chambers",
  },
  {
    src: "/images/court-corridor.jpg",
    alt: "Ali Raza Wahga at the court complex",
  },
  {
    src: "/images/chambers-consult.jpg",
    alt: "Consultation at chambers",
  },
  {
    src: "/images/court-matter.jpg",
    alt: "Counsel outside the court building",
  },
] as const;

export const PRACTICE_COPY = {
  introLabel: "Practice areas",
  introHeadline: SITE.name,
  introSupport:
    "Clear guides to the matters we handle — read the overview, common issues, and how counsel helps.",
  guideH2: "How to use this page",
  guideBody:
    "Pick an area below, or jump straight to the section that matches your situation. Each guide is written for clients who want to understand the landscape before the consult.",
  guideNote:
    "This page is for orientation — not legal advice. Bring your facts to WhatsApp or chambers for counsel on your matter.",
  ctaH2: "Not sure which area fits?",
  ctaSupport:
    "Describe your situation on WhatsApp — we will point you to the right path and next step.",
} as const;

export const PRACTICE_AREAS = [
  {
    slug: "civil-litigation",
    label: "Civil Litigation",
    image: "/images/practice/civil-litigation.jpg",
    imageAlt: "Legal documents and preparation for civil proceedings",
    overview:
      "Civil litigation covers disputes between individuals or organisations — contracts, money claims, injunctions, and related relief before civil courts and the High Court.",
    commonMatters: [
      "Breach of contract and recovery of money",
      "Injunctions and interim relief",
      "Specific performance and declaration suits",
      "Appeals and revisions in civil matters",
    ],
    howWeHelp:
      "We frame the claim or defence, prepare pleadings and evidence, and appear for hearings with a clear view of settlement options versus trial.",
    studyTip:
      "Write down dates, amounts, and any written agreements before the consult — timelines drive civil strategy.",
  },
  {
    slug: "criminal-law",
    label: "Criminal Law",
    image: "/images/practice/criminal-law.jpg",
    imageAlt: "Courthouse corridor associated with criminal proceedings",
    overview:
      "Criminal matters involve the state and the accused — from first information and bail to trial, appeal, and related High Court proceedings.",
    commonMatters: [
      "Bail applications and cancellation",
      "Trial representation and defence strategy",
      "Quashment and High Court petitions",
      "Appeals against conviction or sentence",
    ],
    howWeHelp:
      "Urgent steps first (bail, protection of rights), then a structured defence or prosecution support with papers ready for each stage.",
    studyTip:
      "Keep copies of the FIR, remand papers, and any notices. Note every court date and who appeared.",
  },
  {
    slug: "family-law",
    label: "Family Law",
    image: "/images/practice/family-law.jpg",
    imageAlt: "People together representing family and personal matters",
    overview:
      "Family law addresses marriage, divorce, custody, maintenance, and related personal status questions with care for both procedure and the people involved.",
    commonMatters: [
      "Khula, divorce, and dissolution proceedings",
      "Custody and visitation arrangements",
      "Maintenance and dower claims",
      "Guardianship and related petitions",
    ],
    howWeHelp:
      "Plain-language options, filings prepared for the family forum, and steady updates so you know what each hearing is for.",
    studyTip:
      "List dependents, existing orders, and what outcome you need most — custody, maintenance, or status clarity.",
  },
  {
    slug: "property-real-estate",
    label: "Property / Real Estate",
    image: "/images/practice/property-real-estate.jpg",
    imageAlt: "Residential property and real estate context",
    overview:
      "Property work spans title, possession, transfers, and disputes over land or buildings — often document-heavy and fact-specific.",
    commonMatters: [
      "Title disputes and possession suits",
      "Specific performance of sale agreements",
      "Partition and co-ownership issues",
      "Mutation, registry, and transfer questions",
    ],
    howWeHelp:
      "We review documents first, map ownership and risk, then pursue negotiation or court action with papers that match the registry trail.",
    studyTip:
      "Gather sale deeds, mutation records, site plans, and any notices — property cases turn on the paper trail.",
  },
  {
    slug: "corporate-commercial",
    label: "Corporate & Commercial",
    image: "/images/practice/corporate-commercial.jpg",
    imageAlt: "Commercial documents and business counsel",
    overview:
      "Corporate and commercial counsel supports companies and traders — contracts, disputes, and day-to-day legal structure for business in Lahore and beyond.",
    commonMatters: [
      "Commercial contracts and dispute resolution",
      "Partnership and company-related issues",
      "Recovery and enforcement for businesses",
      "Advisory on transactions and risk",
    ],
    howWeHelp:
      "Practical drafting and negotiation where possible; litigation when needed — always with commercial timelines in mind.",
    studyTip:
      "Bring the contract, correspondence, and a short timeline of performance and breach.",
  },
  {
    slug: "constitutional-law",
    label: "Constitutional Law",
    image: "/images/practice/constitutional-law.jpg",
    imageAlt: "Classical columns suggesting constitutional and High Court advocacy",
    overview:
      "Constitutional practice focuses on fundamental rights, writ jurisdiction, and High Court petitions where state action or public duty is in question.",
    commonMatters: [
      "Writ petitions under High Court jurisdiction",
      "Fundamental rights and public law remedies",
      "Service and regulatory challenges where appropriate",
      "Related appellate and review steps",
    ],
    howWeHelp:
      "We assess whether a constitutional remedy fits, prepare a focused petition, and argue for relief that matches the rights and facts at stake.",
    studyTip:
      "Note the authority you are challenging, the order or omission, and the right you say was affected — precision matters in writs.",
  },
] as const;
