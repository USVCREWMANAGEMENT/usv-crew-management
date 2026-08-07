import Link from "next/link";
import { Ship } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#0B2239]/10 px-6 lg:px-16 py-12 bg-[#0B2239] text-white">
      <svg
        aria-hidden
        className="absolute top-0 left-0 w-full h-10 pointer-events-none"
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
        fill="none"
      >
        <path d="M0,20 C180,4 360,4 540,20 C720,36 900,36 1080,20 C1260,4 1350,4 1440,20" stroke="#0E7490" strokeOpacity="0.35" strokeWidth="1" />
        <path d="M0,30 L1440,10" stroke="#F4530B" strokeOpacity="0.35" strokeWidth="1.5" className="route-animated" />
      </svg>
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Ship className="w-4 h-4 text-[#F4530B]" strokeWidth={1.5} />
            <span className="font-display font-semibold text-sm">USV CREW MANAGEMENT</span>
          </div>
          <p className="text-sm text-white/50 max-w-xs">
            L&apos;agence spécialisée dans le placement de personnels qualifiés pour
            véhicules de surface sans équipage : marins, opérateurs télépilotes,
            techniciens et superviseurs de mission.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
          <div>
            <p className="font-chart text-[10px] uppercase tracking-widest text-white/40 mb-3">Agence</p>
            <ul className="space-y-2 text-white/70">
              <li><Link href="/activites" className="hover:text-white transition-colors underline-offset-4 hover:underline decoration-[#F4530B]/60">Activités</Link></li>
              <li><Link href="/a-propos" className="hover:text-white transition-colors underline-offset-4 hover:underline decoration-[#F4530B]/60">À propos</Link></li>
              <li><Link href="/ressources" className="hover:text-white transition-colors underline-offset-4 hover:underline decoration-[#F4530B]/60">Ressources</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-chart text-[10px] uppercase tracking-widest text-white/40 mb-3">Candidats</p>
            <ul className="space-y-2 text-white/70">
              <li><Link href="/candidature" className="hover:text-white transition-colors underline-offset-4 hover:underline decoration-[#F4530B]/60">Déposer mon profil</Link></li>
              <li><Link href="/ressources/referentiel-competences-usv" className="hover:text-white transition-colors underline-offset-4 hover:underline decoration-[#F4530B]/60">Référentiel de compétences</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-chart text-[10px] uppercase tracking-widest text-white/40 mb-3">Employeurs</p>
            <ul className="space-y-2 text-white/70">
              <li><Link href="/employeurs" className="hover:text-white transition-colors underline-offset-4 hover:underline decoration-[#F4530B]/60">Recruter un opérateur</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors underline-offset-4 hover:underline decoration-[#F4530B]/60">Contact</Link></li>
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
