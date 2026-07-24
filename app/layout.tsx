import type { Metadata, Viewport } from "next";
import { Playfair_Display, Questrial } from "next/font/google";
import { BIZ, SERVICES } from "./data";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const questrial = Questrial({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-questrial",
  display: "swap",
});

// Canonical page for the Goondiwindi practice. Update if this deploys elsewhere.
const CANONICAL =
  "https://www.sparklingwhitedental.com.au/locations/family-dentist-in-goondiwindi/";
const OG_IMAGE =
  "https://www.sparklingwhitedental.com.au/wp-content/uploads/2024/07/Experienced-Goondiwindi-Dentists-1.webp";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sparklingwhitedental.com.au"),
  title: "Family Dentist in Goondiwindi | Sparkling White Dental",
  description:
    "Your trusted family dentist in Goondiwindi for 10 years. General, cosmetic & emergency dentistry, implants, orthodontics and children's care. Payment plans.",
  keywords: [
    "dentist Goondiwindi",
    "family dentist Goondiwindi",
    "emergency dentist Goondiwindi",
    "dental implants Goondiwindi",
    "children's dentist Goondiwindi",
    "affordable dentist Goondiwindi",
    "teeth whitening Goondiwindi",
    "best dentist Goondiwindi",
  ],
  authors: [{ name: "Sparkling White Dental" }],
  creator: "Sparkling White Dental",
  publisher: "Sparkling White Dental",
  category: "Dentist",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Family Dentist in Goondiwindi | Sparkling White Dental",
    description:
      "10 years of trusted, affordable dental care in Goondiwindi. Comprehensive, gentle care in one convenient location.",
    url: CANONICAL,
    siteName: "Sparkling White Dental",
    type: "website",
    locale: "en_AU",
    images: [
      {
        url: OG_IMAGE,
        width: 543,
        height: 584,
        alt: "Dr. Bik at Sparkling White Dental, Goondiwindi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Family Dentist in Goondiwindi | Sparkling White Dental",
    description:
      "Your trusted family dentist in Goondiwindi for 10 years. Book online or call (07) 4671 1097.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0082b3",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": `${CANONICAL}#dentist`,
  name: "Sparkling White Dental — Goondiwindi",
  alternateName: "Family Dentist in Goondiwindi",
  description:
    "Your family dentist in Goondiwindi for 10 years. General, cosmetic and emergency dentistry, implants, orthodontics and children's dentistry, led by Dr. Bik.",
  url: CANONICAL,
  telephone: "+61746711097",
  image: OG_IMAGE,
  logo: "https://www.sparklingwhitedental.com.au/wp-content/uploads/2024/05/Logo-1.webp",
  priceRange: "$$",
  currenciesAccepted: "AUD",
  address: {
    "@type": "PostalAddress",
    streetAddress: "153 Marshall St",
    addressLocality: "Goondiwindi",
    addressRegion: "QLD",
    postalCode: "4390",
    addressCountry: "AU",
  },
  geo: { "@type": "GeoCoordinates", latitude: -28.5486, longitude: 150.3094 },
  areaServed: [
    { "@type": "Place", name: "Goondiwindi" },
    { "@type": "Place", name: "Goondiwindi Region" },
    { "@type": "Place", name: "Border Rivers, QLD/NSW" },
  ],
  sameAs: [BIZ.facebook, BIZ.instagram],
  medicalSpecialty: "Dentistry",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.91",
    reviewCount: "13",
    bestRating: "5",
    worstRating: "1",
  },
  availableService: SERVICES.map((s) => ({
    "@type": "MedicalProcedure",
    name: s.name,
  })),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={`${playfair.variable} ${questrial.variable}`}>
      <body>
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
