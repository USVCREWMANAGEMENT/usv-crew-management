import Link from "next/link";
import { Radio, Cpu, Radar, Shield, Compass, ArrowRight } from "lucide-react";
import SeaBackground from "../../../components/SeaBackground";

const NIVEAUX = [
  {
    title: "Niveau 1 — Sensibilisation",
    description:
      "Connaissance générale des systèmes USV, des règles de navigation applicables et des principes de sécurité opérationnelle.",
  },
  {
    title: "Niveau 2 — Opérateur qualifié",
    description:
      "Capable de conduire une mission de télépilotage ou de supervision sous encadrement, avec maîtrise des procédures d'urgence.",
  },
  {
    title: "Niveau 3 — Opérateur autonome",
    description:
      "Conduite de mission en autonomie complète, gestion multi-navires, prise de décision en situation dégradée.",
  },
  {
    title: "Niveau 4 — Superviseur de flotte",
    description:
      "Supervision de plusieurs opérateurs et navires simultanément, coordination des missions, gestion des priorités opérationnelles.",
  },
];

const COMPETENCES = [
  {
    icon: Radio,
    title: "Télépilotage / conduite à distance",
    description:
      "Maîtrise des interfaces de commande à distance, gestion de la latence, procédures de reprise en main manuelle.",
  },
  {
    icon: Cpu,
    title: "Maintenance systèmes embarqués",
    description:
      "Diagnostic et intervention sur les systèmes de propulsion, d'énergie et de communication embarqués.",
  },
  {
    icon: Radar,
    title: "Fusion de capteurs / navigation",
    description:
      "Interprétation des données radar, sonar, AIS et caméra pour la navigation et l'évitement de collision.",
  },
  {
    icon: Shield,
    title: "Cybersécurité opérationnelle",
    description:
      "Compréhension des vecteurs de risque sur les liaisons de commande et les systèmes embarqués connectés.",
  },
  {
    icon: Compass,
    title: "Gestion de mission / supervision de flotte",
    description:
      "Planification de mission, coordination multi-navires, gestion des priorités et des incidents.",
  },
];

export default function ReferentielPage() {
  return (
    <main>
      <section className="px-6 lg:px-16 py-16 lg:py-20 chart-grid relative overflow-hidden">
        <SeaBackground />
        <p className="text-xs uppercase tracking-widest text-[#F4530B] font-chart mb-4 font-semibold">
          Référentiel
        </p>
        <h1 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight text-[#0B2239] mb-4 max-w-2xl">
          Le référentiel de compétences opérateur USV.
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl">
          À défaut de norme STCW dédiée à ce jour, ce cadre structure les
          compétences et les parcours de reconversion pour les métiers
          d&apos;opérateur de navire de surface sans équipage.
        </p>
      </section>

      <section className="px-6 lg:px-16 py-16 max-w-3xl">
        <p className="text-slate-600 leading-relaxed mb-6">
          Ce référentiel définit les compétences, niveaux de qualification et
          passerelles de formation pour les métiers d&apos;opérateur USV. Il
          s&apos;appuie sur les brevets maritimes STCW existants comme socle,
          en les complétant par les compétences spécifiques à l&apos;exploitation
          de navires sans équipage.
        </p>
      </section>

      <section className="px-6 lg:px-16 py-16 border-t border-slate-100">
        <h2 className="text-xs uppercase tracking-widest text-slate-400 font-chart mb-10 font-semibold">
          Les cinq domaines de compétences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COMPETENCES.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className="border border-slate-200 rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-[#0E7490]/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#0E7490]" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-[#0B2239] mb-2">{c.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{c.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-6 lg:px-16 py-16 border-t border-slate-100 bg-slate-50/50">
        <h2 className="text-xs uppercase tracking-widest text-slate-400 font-chart mb-10 font-semibold">
          Les quatre niveaux de qualification
        </h2>
        <div className="space-y-4">
          {NIVEAUX.map((n, i) => (
            <div
              key={n.title}
              className="flex flex-col sm:flex-row gap-4 sm:gap-8 bg-white border border-slate-200 rounded-xl p-6"
            >
              <span className="text-2xl font-chart font-bold text-[#F4530B]/40 shrink-0">
                0{i + 1}
              </span>
              <div>
                <h3 className="font-semibold text-[#0B2239] mb-1">{n.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{n.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 lg:px-16 py-20 border-t border-slate-100 text-center">
        <h2 className="font-display text-2xl font-semibold mb-4 text-[#0B2239]">
          Vous vous reconnaissez dans ce référentiel ?
        </h2>
        <Link
          href="/candidature"
          className="inline-flex items-center gap-2 text-sm uppercase tracking-widest bg-[#F4530B] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#d94806] transition-colors"
        >
          Déposer mon profil
          <ArrowRight className="w-4 h-4" strokeWidth={2} />
        </Link>
      </section>
    </main>
  );
}
