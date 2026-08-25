import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/next";

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
  return (
    <html lang="fr">
      <body className="bg-white text-slate-900 font-sans antialiased">
        <Nav />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
