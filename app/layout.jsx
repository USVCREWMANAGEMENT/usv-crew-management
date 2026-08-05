import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata = {
  title: "USV Crew Management — Recrutement d'opérateurs USV",
  description:
    "L'agence spécialisée dans le placement d'opérateurs et de techniciens pour véhicules de surface sans équipage (USV).",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-white text-slate-900 font-sans antialiased">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
