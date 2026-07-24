// Central business data — sourced from sparklingwhitedental.com.au (Goondiwindi location).
// Placeholder items are clearly marked; replace before go-live.

export const BIZ = {
  name: "Sparkling White Dental",
  location: "Goondiwindi",
  city: "Goondiwindi",
  phone: "(07) 4671 1097",
  phoneHref: "tel:+61746711097",
  address: "153 Marshall St, Goondiwindi, QLD 4390",
  bookUrl: "https://www.centaurportal.com/d4w/org-1576/search",
  facebook: "https://www.facebook.com/sparklingwhitedental",
  instagram: "https://www.instagram.com/sparklingwhitedental",
  logo: "/images/logo.webp",
  mapEmbed:
    "https://www.google.com/maps?q=153%20Marshall%20St%2C%20Goondiwindi%20QLD%204390&output=embed",
};

// New-patient highlight shown in the hero.
// Swap `headline` for a real promo when available, e.g.
//   headline: "$149 New Patient Exam, X-rays & Clean"
export const OFFER = {
  tag: "New Patients",
  headline: "New patients always welcome",
  sub: "Kids bulk-billed under CDBS · Interest-free payment plans",
};

// Media — real photos pulled from the live Goondiwindi location page.
// NOTE: Goondiwindi has no practice video on the live site, so the video
// section is intentionally omitted (we don't substitute another clinic's film).
export const MEDIA = {
  drBik: "/images/gdi-dr-bik.webp", // Dr. Bik in the Goondiwindi surgery
  team: "/images/gdi-about.webp", // Dr. Bik and the team with a happy patient
  doctify: "/images/doctify-badge.png", // "Recommended by patients on Doctify"
  // Live Doctify verified-reviews carousel for the Goondiwindi practice
  doctifyReviews:
    "https://www.doctify.com/wv2/average-carousel-rating-widget?containerId=040w47ok&dotsArrowsColor=0170a0&language=en&profileType=practice&slugs=sparkling-white-dental-goondiwindi&tenantId=athena-au&theme=transparent&widgetName=average-carousel-rating-widget",
};

// Payment-option & cover logos — shown in the trust strip and payments section.
export const COVER_LOGOS = [
  { src: "/images/pay-denticare.png", alt: "Denticare payment plans" },
  { src: "/images/pay-afterpay.png", alt: "Afterpay" },
  { src: "/images/pay-humm.png", alt: "Humm" },
  { src: "/images/pay-supercare.webp", alt: "SuperCare" },
  { src: "/images/pay-dva.png", alt: "Department of Veterans' Affairs (DVA)" },
  { src: "/images/pay-cdbs.png", alt: "Medicare Child Dental Benefit Scheme" },
];

// Opening hours — PLACEHOLDER. Confirm with the practice and update.
export const HOURS: { day: string; time: string }[] = [
  { day: "Monday", time: "8:30am – 5:30pm" },
  { day: "Tuesday", time: "8:30am – 5:30pm" },
  { day: "Wednesday", time: "8:30am – 5:30pm" },
  { day: "Thursday", time: "8:30am – 5:30pm" },
  { day: "Friday", time: "8:30am – 5:00pm" },
  { day: "Saturday", time: "By appointment" },
  { day: "Sunday", time: "Closed" },
];

export const SERVICES = [
  {
    icon: "svc-general",
    name: "General Dentistry",
    tag: "Preventive care",
    body: "Routine check-ups, professional cleaning, fillings and preventive care to keep your smile healthy for life.",
  },
  {
    icon: "svc-ortho",
    name: "Orthodontics",
    tag: "Braces & aligners",
    body: "Traditional braces, clear aligners and custom solutions to straighten teeth and correct bite issues.",
  },
  {
    icon: "svc-cosmetic",
    name: "Cosmetic Dentistry",
    tag: "Whitening & veneers",
    body: "Teeth whitening, veneers and bonding — each treatment customised to your aesthetic goals and dental needs.",
  },
  {
    icon: "svc-implant",
    name: "Dental Implants",
    tag: "Missing teeth",
    body: "Durable implants that look and function like natural teeth, preserving jawbone health long-term.",
  },
  {
    icon: "svc-emergency",
    name: "Emergency Dentistry",
    tag: "Same-day care",
    body: "Toothache, broken tooth or urgent pain? We prioritise emergencies with prompt, effective treatment.",
  },
  {
    icon: "svc-children",
    name: "Children's Dentistry",
    tag: "CDBS accepted",
    body: "Gentle, family-friendly care — fluoride, sealants and education for lifelong healthy habits.",
  },
  {
    icon: "svc-perio",
    name: "Periodontics",
    tag: "Gum health",
    body: "Deep cleaning and gum disease management from a team experienced in complex periodontal cases.",
  },
  {
    icon: "svc-surgery",
    name: "Oral Surgery",
    tag: "Extractions",
    body: "Extractions and wisdom teeth removal performed with precision for minimal discomfort and faster recovery.",
  },
];

export const PAYMENTS = [
  { name: "Denticare", note: "Flexible, interest-free payment plans." },
  { name: "Afterpay", note: "Split your treatment into easy instalments." },
  { name: "SuperCare", note: "Access your super for eligible dental care." },
  { name: "HICAPS", note: "On-the-spot claims for all major health funds." },
  { name: "DVA", note: "Department of Veterans' Affairs accepted." },
  { name: "CDBS", note: "Child Dental Benefit Schedule bulk-billed." },
];

export const FAQS = [
  {
    q: "Are you accepting new patients in Goondiwindi?",
    a: "Yes — we warmly welcome new patients of all ages. You can book online 24/7 or call our friendly team on (07) 4671 1097 to arrange your first visit.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Absolutely. We offer flexible, interest-free options through Denticare, Afterpay and SuperCare, and we accept DVA and the Child Dental Benefit Schedule (CDBS). We also process all major health funds on the spot through HICAPS.",
  },
  {
    q: "Can I get an emergency dental appointment?",
    a: "Yes. As a trusted emergency dentist in Goondiwindi, we prioritise urgent care such as toothache, broken or knocked-out teeth. Call us as early as possible in the day and we'll do our best to see you the same day.",
  },
  {
    q: "Do you treat children? Is it bulk-billed?",
    a: "We love treating children and provide gentle, preventive care including fluoride treatments and sealants. Eligible children can be bulk-billed under the Child Dental Benefit Schedule (CDBS).",
  },
  {
    q: "Where are you located and is there parking?",
    a: "We're at 153 Marshall St, right in the heart of Goondiwindi, with easy local parking. Contact us if you need directions for your visit.",
  },
];
