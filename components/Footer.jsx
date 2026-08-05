import Link from "next/link";
import { Ship } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#0B2239]/10 px-6 lg:px-16 py-12 bg-[#0B2239] text-white">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Ship className="w-4 h-4 text-[#F4530B]" strokeWidth={1.5} />
            <span className="font-display font-semibold text-sm">USV CREW MANAGEMENT</span>
          </div>
          <p className="text-sm text-white/50 max-w-xs">
            L&apos;agence spécialisée dans le placement d&apos;opérateurs et de techniciens
            pour véhicules de surface sans équipage.
          </p>
          <p className="font-chart text-[10px] text-white/30 mt-4">43°17&apos;N — 005°22&apos;E · MARSEILLE</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
          <div>
            <p className="font-chart text-[10px] uppercase tracking-widest text-white/40 mb-3">Agence</p>
            <ul className="space-y-2 text-white/70">
              <li><Link href="/activites" className="hover:text-white">Activités</Link></li>
              <li><Link href="/a-propos" className="hover:text-white">À propos</Link></li>
              <li><Link href="/ressources" className="hover:text-white">Ressources</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-chart text-[10px] uppercase tracking-widest text-white/40 mb-3">Candidats</p>
            <ul className="space-y-2 text-white/70">
              <li><Link href="/candidature" className="hover:text-white">Déposer mon profil</Link></li>
              <li><Link href="/ressources/referentiel-competences-usv" className="hover:text-white">Référentiel de compétences</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-chart text-[10px] uppercase tracking-widest text-white/40 mb-3">Employeurs</p>
            <ul className="space-y-2 text-white/70">
              <li><Link href="/employeurs" className="hover:text-white">Recruter un opérateur</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-white/10 font-chart text-xs text-white/40">
        USV Crew Management — contact@usvcrewmanagement.com
      </div>
    </footer>
  );
}
