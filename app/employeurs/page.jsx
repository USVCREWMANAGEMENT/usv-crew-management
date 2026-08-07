import Link from "next/link";
import { ArrowRight, CheckCircle2, Search, FileCheck, Users } from "lucide-react";
import SeaBackground from "../../components/SeaBackground";

const ETAPES = [
  {
    icon: Search,
    title: "Vous exprimez votre besoin",
    description: "Type de poste, compétences requises, durée, zone d'opération.",
  },
  {
    icon: FileCheck,
    title: "Nous qualifions le vivier",
    description: "Vérification des brevets STCW, des compétences USV, entretiens techniques.",
  },
  {
    icon: Users,
    title: "Vous rencontrez les profils",
    description: "Sélection resserrée de candidats correspondant à votre besoin réel.",
  },
];

export default function EmployeursPage() {
  return (
    <main>
      <section className="px-6 lg:px-16 py-16 lg:py-20 chart-grid relative overflow-hidden">
        <SeaBackground />
        <p className="text-xs uppercase tracking-widest text-[#F4530B] font-chart mb-4 font-semibold">
          Pour les opérateurs de flotte USV
        </p>
        <h1 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight text-[#0B2239] mb-4 max-w-2xl">
          Recrutez des opérateurs qualifiés, sans construire votre propre vivier de zéro.
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mb-8">
          Défense, hydrographie, éolien offshore, surveillance côtière — nous
          qualifions et vous mettons en relation avec les profils qui font
          tourner votre flotte.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-sm uppercase tracking-widest bg-[#F4530B] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#d94806] transition-colors"
        >
          Exprimer un besoin
          <ArrowRight className="w-4 h-4" strokeWidth={2} />
        </Link>
      </section>

      <section className="px-6 lg:px-16 py-16 border-t border-slate-100">
        <h2 className="text-xs uppercase tracking-widest text-slate-400 font-chart mb-10 font-semibold">
          Comment ça marche
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ETAPES.map((e, i) => {
            const Icon = e.icon;
            return (
              <div key={e.title} className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#F4530B]/5 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#F4530B]" strokeWidth={1.5} />
                  </div>
                  <span className="text-3xl font-chart font-bold text-slate-100">0{i + 1}</span>
                </div>
                <h3 className="font-semibold text-lg text-[#0B2239] mb-2">{e.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{e.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-6 lg:px-16 py-16 border-t border-slate-100 bg-slate-50/50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#0B2239] mb-4">
              Pourquoi passer par nous plutôt que recruter en direct ?
            </h2>
            <ul className="space-y-3">
              {[
                "Un vivier déjà qualifié plutôt qu'un recrutement à construire depuis zéro",
                "Une connaissance double : droit maritime STCW et compétences robotique/autonomie",
                "Un référentiel de compétences propre au métier, pas une grille RH générique",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-[#F4530B] shrink-0 mt-0.5" strokeWidth={1.5} />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-8">
            <h3 className="font-semibold text-[#0B2239] mb-4">Types de postes couverts</h3>
            <div className="space-y-2 text-sm">
              {[
                "Opérateur télépilote",
                "Superviseur de mission / flotte",
                "Technicien de maintenance et mise en œuvre",
                "Ingénieur d'exploitation",
              ].map((role) => (
                <div key={role} className="px-3 py-2 rounded-lg bg-slate-50 text-slate-700">
                  {role}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-16 py-20 border-t border-slate-100 text-center">
        <h2 className="font-display text-2xl font-semibold mb-4 text-[#0B2239]">
          Parlons de votre besoin de recrutement.
        </h2>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-sm uppercase tracking-widest bg-[#F4530B] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#d94806] transition-colors"
        >
          Nous contacter
          <ArrowRight className="w-4 h-4" strokeWidth={2} />
        </Link>
      </section>
    </main>
  );
}
