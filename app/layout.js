import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Providers from "./components/Providers";

const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });
const lato = Lato({ variable: "--font-lato", weight: ["300", "400", "700"], subsets: ["latin"] });

const SITE_URL = "https://www.equilibrealimentaire.fr";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Anita Diététique — Diététicienne nutritionniste à Épinal",
    template: "%s | Anita Diététique",
  },
  description: "Anita Chenot, diététicienne nutritionniste à Épinal et Jeuxey (Vosges). Consultations individuelles, ateliers culinaires, accompagnement personnalisé sans régime.",
  keywords: [
    "diététicienne Épinal",
    "nutritionniste Vosges",
    "diététicienne Jeuxey",
    "consultation diététique Épinal",
    "bilan alimentaire Vosges",
    "rééquilibrage alimentaire Épinal",
    "atelier culinaire Vosges",
    "diététicienne libérale Épinal",
  ],
  authors: [{ name: "Anita Chenot", url: SITE_URL }],
  creator: "Anita Chenot",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "Anita Diététique",
    title: "Anita Diététique — Diététicienne nutritionniste à Épinal",
    description: "Consultations individuelles, ateliers culinaires et accompagnement personnalisé vers l'équilibre alimentaire à Épinal et Jeuxey (88).",
    images: [{ url: "/img/og-image.webp", width: 1200, height: 630, alt: "Anita Diététique — Épinal" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anita Diététique — Diététicienne à Épinal",
    description: "Consultations individuelles et ateliers culinaires à Épinal et Jeuxey (Vosges).",
    images: ["/img/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: "Anita Chenot — Diététicienne",
      url: SITE_URL,
      telephone: "+33606452788",
      email: "anitachenot@free.fr",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3 rue des Paquis",
        addressLocality: "Jeuxey",
        postalCode: "88000",
        addressCountry: "FR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 48.1789,
        longitude: 6.4637,
      },
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
      ],
      priceRange: "€€",
      description: "Diététicienne nutritionniste à Jeuxey (Épinal, Vosges). Consultations individuelles, ateliers culinaires, journée sensations alimentaires.",
      image: `${SITE_URL}/img/logoSite.png`,
      sameAs: ["http://www.linkedin.com/in/chenot-anita-bb926b115"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Anita Diététique",
      inLanguage: "fr-FR",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${lato.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FDF8F0]">
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
