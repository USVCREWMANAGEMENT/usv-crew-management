import { headers } from "next/headers";
import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { LanguageProvider } from "../lib/i18n/LanguageProvider";
import { DOMAINS, langForHost } from "../lib/seo";

const ORG_DESCRIPTION = {
  fr: "Agence spécialisée dans le recrutement d'opérateurs télépilotes, marins et techniciens pour navires de surface sans équipage (USV).",
  en: "Specialist recruitment agency for remote operators, seafarers and technicians on uncrewed surface vessels (USV).",
};

function organizationJsonLd(lang) {
  return {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    name: "USV Crew Management",
    url: DOMAINS[lang],
    description: ORG_DESCRIPTION[lang],
    areaServed: "Worldwide",
    email: "contact@usvcrewmanagement.com",
    // sameAs: ["https://www.linkedin.com/company/…"], // à compléter une fois la page LinkedIn créée
  };
}

// Filet de secours pour les rares routes sans generateMetadata propre
// (ex. la page 404). Chaque page définit ses propres titre/description/
// canonical/hreflang via lib/seo.js — voir generateMetadata dans chaque
// app/**/page.jsx.
export const metadata = {
  title: "USV Crew Management",
  description:
    "Agence spécialisée dans le recrutement d'opérateurs, marins et techniciens pour navires de surface sans équipage (USV).",
};

export const viewport = {
  themeColor: "#0B2239",
};

export default function RootLayout({ children }) {
  // Le domaine .com sert la version anglaise par défaut, le .fr (et tout le
  // reste — vercel.app, localhost, prévisualisations) sert le français.
  // Un choix explicite de l'utilisateur (stocké côté client) reste prioritaire.
  const defaultLang = langForHost(headers().get("host"));

  return (
    <html lang={defaultLang}>
      <body className="bg-white text-slate-900 font-sans antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd(defaultLang)) }}
        />
        <LanguageProvider defaultLang={defaultLang}>
          <Nav />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
