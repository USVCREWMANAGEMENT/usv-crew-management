import { headers } from "next/headers";
import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { LanguageProvider } from "../lib/i18n/LanguageProvider";

// Le domaine .com sert la version anglaise par défaut, le .fr (et tout le
// reste — vercel.app, localhost, prévisualisations) sert le français.
// Un choix explicite de l'utilisateur (stocké côté client) reste prioritaire.
function defaultLangForHost(host) {
  const h = (host || "").toLowerCase();
  if (h.includes("usvcrewmanagement.com")) return "en";
  return "fr";
}

export const metadata = {
  title: "USV Crew Management — Recrutement d'opérateurs USV",
  description:
    "L'agence spécialisée dans le placement d'opérateurs et de techniciens pour navires de surface sans équipage (USV).",
  openGraph: {
    title: "USV Crew Management — Recrutement d'opérateurs USV",
    description:
      "Placement d'équipage, référentiel de compétences et conseil pour les flottes de navires de surface sans équipage. Intervention dans le monde entier.",
    locale: "fr_FR",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0B2239",
};

export default function RootLayout({ children }) {
  const host = headers().get("host");
  const defaultLang = defaultLangForHost(host);

  return (
    <html lang={defaultLang}>
      <body className="bg-white text-slate-900 font-sans antialiased">
        <LanguageProvider defaultLang={defaultLang}>
          <Nav />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
