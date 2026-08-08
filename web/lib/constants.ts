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

export const EVENTS_COPY = {
  introLabel: "Events & Updates",
  introHeadline: SITE.name,
  introSupport:
    "Bar engagement, chamber moments, and notices from the practice — published here when there is something to share.",
  purposeH2: "Present in the profession",
  purposeBody: [
    "Advocacy is not only the brief on the desk. Standing grows through Bar gatherings, chamber work, and how counsel meets people when the matter is personal.",
    "When Ali Law Associate hosts or attends an event — or has a practice update worth noting — it will appear on this page.",
  ],
  eventsH2: "Events",
  eventsBody:
    "Gatherings, Bar engagements, and public appearances connected to the chambers.",
  eventsEmpty:
    "No events listed at this time. When there is a gathering, Bar engagement, or appearance to share, it will be posted here.",
  updatesH2: "Updates",
  updatesBody:
    "Short notices from the practice — chamber news and professional notes.",
  updatesEmpty:
    "No updates published yet. Practice notices will appear here as they are released.",
  photoCaption:
    "From chambers to the Bar — presence that sits alongside the brief.",
  ctaH2: "Have a matter to discuss?",
  ctaSupport:
    "Message on WhatsApp for the fastest response — or use the contact form.",
} as const;

/** Add events here when there are any. Newest first. */
export const EVENTS: readonly {
  id: string;
  title: string;
  date: string;
  location?: string;
  body: string;
  image?: string;
  imageAlt?: string;
}[] = [];

/** Add updates here when there are any. Newest first. */
export const UPDATES: readonly {
  id: string;
  title: string;
  date: string;
  body: string;
}[] = [];

export const FAQ_COPY = {
  introLabel: "FAQ",
  introHeadline: SITE.name,
  introSupport:
    "Clear answers to common questions — consultation, process, fees, and how to reach chambers.",
  overviewH2: "Find what you need",
  overviewBody:
    "Browse by topic or search. These answers are for orientation — your facts decide the next step.",
  overviewNote:
    "Nothing here creates an attorney–client relationship or replaces advice on your matter.",
  tipsH2: "Before you message",
  tips: [
    {
      title: "Gather the basics",
      body: "Dates, parties, orders, and any FIR, notices, or contracts you already have.",
    },
    {
      title: "Say what you need",
      body: "Bail, injunction, divorce, title clarity — a short goal helps us respond faster.",
    },
    {
      title: "Prefer WhatsApp",
      body: "Fastest path for a first reply. Call or email if that suits you better.",
    },
  ],
  listH2: "Questions & answers",
  listBody: "Select a topic or type a keyword to narrow the list.",
  searchPlaceholder: "Search questions…",
  emptySearch: "No questions match that search. Try another word or clear the filter.",
  ctaH2: "Still have a question?",
  ctaSupport:
    "Message on WhatsApp with a short summary of your matter — we will point you to the next step.",
} as const;

export const FAQ_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "getting-started", label: "Getting started" },
  { id: "process", label: "Process" },
  { id: "fees", label: "Fees" },
  { id: "practice", label: "Practice areas" },
  { id: "chambers", label: "Chambers & contact" },
] as const;

export type FaqCategoryId = (typeof FAQ_CATEGORIES)[number]["id"];

export const FAQ_ITEMS: readonly {
  id: string;
  category: Exclude<FaqCategoryId, "all">;
  question: string;
  answer: string;
}[] = [
  {
    id: "book-consult",
    category: "getting-started",
    question: "How do I book a consultation?",
    answer:
      "Message us on WhatsApp with a short summary of your matter, or call during chamber hours. We will confirm a time for a WhatsApp discussion or an in-person meeting at Manki Chambers, Turner Road, Lahore.",
  },
  {
    id: "first-meeting-bring",
    category: "getting-started",
    question: "What should I bring to the first meeting?",
    answer:
      "Bring identity documents, any court orders, FIR or police papers, contracts, title deeds, notices, and a written timeline of key dates. Photos or scans on your phone are fine for a first look — originals help when we prepare filings.",
  },
  {
    id: "whatsapp-consult",
    category: "getting-started",
    question: "Can we discuss my matter on WhatsApp first?",
    answer:
      "Yes. WhatsApp is the fastest way to share facts and documents. We use it to triage urgency (for example bail or interim relief) and to decide whether an in-chamber consult is needed next.",
  },
  {
    id: "creates-relationship",
    category: "getting-started",
    question: "Does contacting you create an attorney–client relationship?",
    answer:
      "No. A first inquiry or browse of this site does not create an attorney–client relationship. Engagement begins when both sides agree on the scope of work and the terms of representation.",
  },
  {
    id: "urgent-matter",
    category: "getting-started",
    question: "What if my matter is urgent — bail or interim relief?",
    answer:
      "Say so clearly in your first message and share the next hearing date or remand status. Urgent criminal and interim steps are prioritised so we can advise on timing and papers as soon as possible.",
  },
  {
    id: "after-consult",
    category: "process",
    question: "What happens after the first consult?",
    answer:
      "We frame the issue, outline options and risks, and agree next steps — filings, appearance, or further document review. You leave knowing where the matter stands and what we need from you.",
  },
  {
    id: "which-courts",
    category: "process",
    question: "Which forums do you appear in?",
    answer:
      "Practice centres on the Lahore High Court and related forums, with chamber work at Manki Chambers. Exact forum depends on the matter — civil, criminal, family, property, commercial, or constitutional.",
  },
  {
    id: "case-updates",
    category: "process",
    question: "How will I get updates on my case?",
    answer:
      "We keep you informed of hearing dates, filings, and material developments — usually by WhatsApp or call. You can also reach chambers when something on your side changes and you need a prompt reply.",
  },
  {
    id: "how-long",
    category: "process",
    question: "How long does a typical matter take?",
    answer:
      "Timelines vary widely by forum, backlog, and whether the other side contests every step. At consult we give a realistic range for the stage you are in — not a guarantee — and update that view as the file moves.",
  },
  {
    id: "settlement-vs-trial",
    category: "process",
    question: "Do you always push for trial, or can matters settle?",
    answer:
      "We prepare as if the hearing matters, and we also assess settlement where it protects your interests. You get a plain comparison of options so you can decide with eyes open.",
  },
  {
    id: "fee-structure",
    category: "fees",
    question: "How are fees structured?",
    answer:
      "Fees depend on the nature of the matter, urgency, and the work involved — consult, drafting, appearances, and follow-through. We discuss the fee position clearly before formal engagement so you know what you are committing to.",
  },
  {
    id: "other-costs",
    category: "fees",
    question: "What other costs should I expect?",
    answer:
      "Court fees, stamp duty, process fees, certified copies, and similar out-of-pocket items are usually separate from counsel fees. We flag likely expenses when we map the next steps.",
  },
  {
    id: "payment-timing",
    category: "fees",
    question: "When is payment expected?",
    answer:
      "Payment terms are agreed when we take on the matter — often a portion at engagement and further amounts tied to stages of work. Exact terms are confirmed in writing for your file.",
  },
  {
    id: "which-areas",
    category: "practice",
    question: "What practice areas do you handle?",
    answer:
      "Civil litigation, criminal law, family law, property and real estate, corporate and commercial, and constitutional matters. See the Practice Area page for overviews of each.",
  },
  {
    id: "criminal-bail",
    category: "practice",
    question: "Do you handle bail and criminal defence?",
    answer:
      "Yes. Criminal work includes bail, trial representation, quashment and High Court petitions, and appeals — with urgent steps taken first when liberty or remand is at stake.",
  },
  {
    id: "property-disputes",
    category: "practice",
    question: "Can you help with property title or possession disputes?",
    answer:
      "Yes. Property matters often turn on the paper trail — sale deeds, mutation, agreements, and notices. We review documents first, then advise on negotiation or court action.",
  },
  {
    id: "family-matters",
    category: "practice",
    question: "Do you take family matters such as khula, custody, or maintenance?",
    answer:
      "Yes. Family work covers dissolution, custody and visitation, maintenance and dower, and related petitions — with plain-language options and steady updates through each hearing.",
  },
  {
    id: "chambers-location",
    category: "chambers",
    question: "Where are your chambers?",
    answer: `Manki Chambers, 5th Floor, 9-Turner Road, Lahore. Ask for ${SITE.advocate}, ${SITE.title}.`,
  },
  {
    id: "best-contact",
    category: "chambers",
    question: "What is the best way to reach you?",
    answer: `WhatsApp on ${SITE.phoneDisplay} is usually fastest. You can also call the same number, email ${SITE.email}, or use the contact form on this site.`,
  },
  {
    id: "response-time",
    category: "chambers",
    question: "How quickly do you reply?",
    answer:
      "We aim to respond promptly on WhatsApp during working hours. If the matter is time-sensitive, mark it as urgent and include the next court date or deadline in your first message.",
  },
  {
    id: "languages",
    category: "chambers",
    question: "Can we communicate in Urdu or English?",
    answer:
      "Yes. We work with clients in Urdu and English — choose whichever lets you explain the facts most clearly.",
  },
];

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
