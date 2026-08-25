import Link from "next/link";
import { Radio, Cpu, Radar, Shield, Compass, ArrowRight, Anchor, ClipboardCheck, LifeBuoy, Wrench, CloudSun, Waves } from "lucide-react";
import ChartEyebrow from "../components/ChartEyebrow";
import HeroChart from "../components/HeroChart";
import SeaBackground from "../components/SeaBackground";

const ACTIVITES = [
  { icon: Anchor, title: "Placement d'équipage USV", description: "Recrutement et mise à disposition d'opérateurs télépilotes, superviseurs de mission et techniciens pour votre flotte — y compris équipage qualifié pour essais en mer.", href: "/activites" },
  { icon: Compass, title: "Référentiel de compétences", description: "Le cadre structuré des compétences et parcours de reconversion des métiers d'opérateur USV.", href: "/ressources/referentiel-competences-usv" },
  { icon: ClipboardCheck, title: "Conseil, audit & process", description: "Audit opérationnel, définition des process d'exploitation, conformité réglementaire, accompagnement à la mise en œuvre — avant de déployer votre flotte.", href: "/employeurs" },
];

const COMPETENCES = [
  { icon: Radio, label: "Télépilotage / conduite à distance" },
  { icon: Compass, label: "Navigation & réglementation maritime (COLREG)" },
  { icon: Waves, label: "Manœuvre et conduite nautique" },
  { icon: Cpu, label: "Maintenance systèmes embarqués" },
  { icon: Wrench, label: "Mécanique & propulsion navale" },
  { icon: Radar, label: "Fusion de capteurs / navigation" },
  { icon: LifeBuoy, label: "Sécurité en mer & gestion d'urgence" },
  { icon: CloudSun, label: "Météorologie & routage maritime" },
  { icon: Shield, label: "Cybersécurité opérationnelle" },
];

const STATS = [
  { value: "100%", label: "Focus USV — aucune autre activité" },
  { value: "STCW", label: "Passerelle brevets maritimes → USV" },
  { value: "1er", label: "Vivier français dédié au métier" },
];

export default function Home() {
  return (
    <main className="bg-[#FAFBFC] text-[#0B2239]">
      <section className="chart-grid border-b border-[#0B2239]/10 relative overflow-hidden">
        <SeaBackground />
        <div className="relative px-6 lg:px-16 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <ChartEyebrow>Recrutement spécialisé USV</ChartEyebrow>
            <h1 className="font-display text-4xl lg:text-[3.4rem] font-semibold tracking-tight leading-[1.05] mb-6">
              La route la plus courte entre votre flotte USV et son équipage.
            </h1>
            <p className="text-[#0B2239]/60 text-lg leading-relaxed mb-10 max-w-xl">
              Un métier nouveau a besoin d&apos;un vivier dédié, pas d&apos;un service annexe
              chez une agence de crewing généraliste. Nous qualifions et déployons les
              opérateurs, techniciens et superviseurs qui font tourner les flottes autonomes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/candidature" className="flex items-center gap-2 font-chart text-[11px] uppercase tracking-widest bg-[#F4530B] text-white px-6 py-3.5 rounded-md hover:bg-[#d94806] hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-8px_rgba(244,83,11,0.55)] active:translate-y-0 active:shadow-none transition-all">
                Rejoindre le vivier <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </Link>
              <Link href="/employeurs" className="flex items-center gap-2 font-chart text-[11px] uppercase tracking-widest border border-[#0B2239]/20 text-[#0B2239] px-6 py-3.5 rounded-md hover:border-[#0B2239]/50 transition-colors">
                Je recrute
              </Link>
            </div>
          </div>
          <HeroChart />
        </div>
      </section>

      <section className="px-6 lg:px-16 py-16">
        <div className="rounded-lg overflow-hidden aspect-[21/9] relative">
          <img src="https://images.unsplash.com/photo-1541828985935-1fe979f9fc0b?fm=jpg&q=80&w=2000&auto=format&fit=crop" alt="Vue aérienne d'un navire de surface en mer" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2239]/50 to-transparent" />
          <p className="absolute bottom-4 left-5 font-chart text-[10px] uppercase tracking-widest text-white/70">
            Zone d&apos;opération · Monde entier
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-16 py-16 border-t border-[#0B2239]/10">
        <div className="max-w-2xl">
          <ChartEyebrow fix="FIX 01">Comprendre le domaine</ChartEyebrow>
          <h2 className="font-display text-2xl lg:text-3xl font-semibold mb-4">
            Qu&apos;est-ce qu&apos;un navire de surface sans équipage ?
          </h2>
          <p className="text-[#0B2239]/60 leading-relaxed">
            Un USV (Unmanned Surface Vessel) opère sans équipage à bord, piloté à distance
            ou de façon autonome. Hydrographie, surveillance côtière, éolien offshore,
            défense : les usages se multiplient, et avec eux le besoin de personnels
            qualifiés pour les exploiter.
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-16 py-16 border-t border-[#0B2239]/10">
        <ChartEyebrow fix="FIX 02">Nos activités</ChartEyebrow>
        <h2 className="font-display text-2xl lg:text-3xl font-semibold mb-12 max-w-xl">
          Recruter, qualifier, déployer : trois activités, une seule mission.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACTIVITES.map((a) => {
            const Icon = a.icon;
            return (
              <Link key={a.title} href={a.href} className="bg-white border border-[#0B2239]/10 rounded-lg p-6 hover:border-[#F4530B]/60 hover:-translate-y-1 hover:shadow-[0_16px_36px_-16px_rgba(11,34,57,0.25)] active:translate-y-0 active:shadow-none transition-all duration-300 group block">
                <div className="w-10 h-10 rounded-md bg-[#0E7490]/10 flex items-center justify-center mb-5 transition-colors group-hover:bg-[#F4530B]/10">
                  <Icon className="w-5 h-5 text-[#0E7490] transition-colors group-hover:text-[#F4530B]" strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{a.title}</h3>
                <p className="text-[#0B2239]/55 text-sm leading-relaxed mb-4">{a.description}</p>
                <span className="font-chart text-[10px] uppercase tracking-widest text-[#F4530B] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  Explorer <ArrowRight className="w-3 h-3" strokeWidth={2} />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="px-6 lg:px-16 py-16 border-t border-[#0B2239]/10 bg-white">
        <ChartEyebrow fix="FIX 03">Compétences recherchées</ChartEyebrow>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {COMPETENCES.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.label} className="flex items-center gap-3 border border-[#0B2239]/10 bg-[#FAFBFC] rounded-md px-4 py-4 transition-colors duration-300 hover:border-[#0E7490]/40 hover:bg-[#0E7490]/[0.04]">
                <Icon className="w-4 h-4 text-[#F4530B] shrink-0" strokeWidth={1.5} />
                <span className="text-sm text-[#0B2239]/80">{c.label}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-6 lg:px-16 py-16 border-t border-[#0B2239]/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-lg overflow-hidden aspect-[4/3] order-2 lg:order-1">
            <img src="https://images.unsplash.com/photo-1654083198752-56ff209c8129?fm=jpg&q=80&w=1600&auto=format&fit=crop" alt="Parc éolien offshore" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <ChartEyebrow fix="FIX 04">Un marché en croissance</ChartEyebrow>
            <h2 className="font-display text-2xl lg:text-3xl font-semibold mb-4">
              L&apos;éolien offshore, l&apos;hydrographie et la défense tirent la demande.
            </h2>
            <p className="text-[#0B2239]/60 leading-relaxed mb-8">
              Le marché des USV croît à deux chiffres. Les analystes identifient un déficit
              de main-d&apos;œuvre qualifiée comme frein structurel — c&apos;est le vide que
              nous occupons.
            </p>
            <div className="grid grid-cols-3 gap-6 border-t border-[#0B2239]/10 pt-6">
              {STATS.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl font-semibold text-[#F4530B]">{s.value}</p>
                  <p className="text-xs text-[#0B2239]/50 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="chart-grid px-6 lg:px-16 py-20 border-t border-[#0B2239]/10 text-center">
        <p className="font-chart text-[11px] uppercase tracking-[0.2em] text-[#0E7490] mb-4">Dernier waypoint</p>
        <h2 className="font-display text-2xl lg:text-3xl font-semibold mb-4">
          Marin STCW en reconversion, ou déjà opérateur USV ?
        </h2>
        <p className="text-[#0B2239]/60 mb-8 max-w-xl mx-auto">
          Déposez votre profil — nous le mettons en relation avec les entreprises qui recrutent.
        </p>
        <Link href="/candidature" className="inline-flex items-center gap-2 font-chart text-[11px] uppercase tracking-widest bg-[#F4530B] text-white px-7 py-4 rounded-md hover:bg-[#d94806] hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-8px_rgba(244,83,11,0.55)] active:translate-y-0 active:shadow-none transition-all">
          Déposer mon profil <ArrowRight className="w-4 h-4" strokeWidth={2} />
        </Link>
      </section>
    </main>
  );
}
