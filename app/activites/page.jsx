import Link from "next/link";
import { Anchor, Compass, ClipboardCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import VideoPlaceholder from "../../components/VideoPlaceholder";
import SeaBackground from "../../components/SeaBackground";

const ACTIVITES = [
  {
    icon: Anchor,
    title: "Placement d'équipage USV",
    description:
      "Recrutement, qualification et mise à disposition ou placement d'opérateurs télépilotes, superviseurs de mission, techniciens de maintenance/mise en œuvre et ingénieurs d'exploitation pour le compte d'opérateurs de flotte USV.",
    points: [
      "Vérification des qualifications et présélection technique",
      "Défense, hydrographie, éolien offshore, surveillance côtière",
      "Mise à disposition (ETM) ou placement simple (SPRPGM) selon le poste",
      "Équipage qualifié pour essais en mer (sea trials)",
    ],
  },
  {
    icon: Compass,
    title: "Référentiel de compétences USV",
    description:
      "Conception et entretien d'un cadre structuré définissant les compétences, niveaux de qualification et parcours de formation/reconversion pour les métiers d'opérateur USV — à défaut de norme STCW dédiée à ce jour.",
    points: [
      "Fiches de poste types et prérequis techniques",
      "Passerelles depuis les brevets maritimes STCW existants",
      "Support pour la qualification des candidats et les partenariats formation",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Conseil, audit & process",
    description:
      "Missions de conseil et d'audit auprès d'opérateurs USV et d'organisations qui déploient ou envisagent de déployer des flottes autonomes : diagnostic opérationnel, définition des process d'exploitation, conformité réglementaire, accompagnement à la mise en œuvre.",
    points: [
      "Audit opérationnel avant montée en charge d'une flotte",
      "Définition et formalisation des process d'exploitation",
      "Veille et accompagnement réglementaire (cadre USV en évolution)",
      "Accompagnement à la mise en œuvre et au déploiement",
    ],
  },
];

export default function ActivitesPage() {
  return (
    <main>
      <section className="px-6 lg:px-16 py-16 lg:py-20 chart-grid relative overflow-hidden">
        <SeaBackground />
        <p className="text-xs uppercase tracking-widest text-[#F4530B] font-chart mb-4 font-semibold">
          Nos activités
        </p>
        <h1 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight text-[#0B2239] mb-4 max-w-2xl">
          Trois activités, un seul objectif : faire tourner votre flotte USV avec les bonnes personnes.
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl">
          Chacune joue un rôle distinct — l&apos;une porte la trésorerie court
          terme, l&apos;autre construit l&apos;actif différenciant, la
          troisième devient le moteur de revenu long terme.
        </p>
      </section>

      <section className="px-6 lg:px-16 py-16">
        <div className="space-y-16">
          {ACTIVITES.map((a, i) => {
            const Icon = a.icon;
            return (
              <div
                key={a.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start pb-16 border-b border-slate-100 last:border-0"
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-10 h-10 rounded-lg bg-[#0E7490]/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#0E7490]" strokeWidth={1.5} />
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-[#0B2239] mb-3">{a.title}</h2>
                  <p className="text-slate-500 leading-relaxed mb-6">{a.description}</p>
                  <ul className="space-y-2">
                    {a.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-[#F4530B] shrink-0 mt-0.5" strokeWidth={1.5} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="rounded-xl border border-slate-200 p-8 bg-slate-50/50 h-full flex items-center justify-center">
                    <span className="text-6xl font-chart text-slate-200 font-bold">
                      0{i + 1}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-6 lg:px-16 py-16 border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <VideoPlaceholder
            label="Présentation de l'activité USV Crew Management"
            sublabel="Emplacement vidéo — à intégrer"
          />
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-400 font-chart mb-4 font-semibold">
              Comment ça marche
            </p>
            <h2 className="font-display text-2xl font-semibold mb-4 text-[#0B2239]">
              Une seule agence, une expertise double.
            </h2>
            <p className="text-slate-500 leading-relaxed">
              Capitaine 500, mécanicien 750kW et expérience en robotique navale
              chez Exail Maritime — nous recrutons pour un métier que nous
              connaissons de l&apos;intérieur, pas depuis un rapport de marché.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-16 py-20 border-t border-slate-100 text-center">
        <h2 className="font-display text-2xl font-semibold mb-4 text-[#0B2239]">
          Une flotte à armer, un vivier à construire ?
        </h2>
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <Link
            href="/employeurs"
            className="flex items-center gap-2 text-sm uppercase tracking-widest bg-[#F4530B] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#d94806] transition-colors"
          >
            Je recrute
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </Link>
          <Link
            href="/candidature"
            className="flex items-center gap-2 text-sm uppercase tracking-widest border border-slate-200 text-slate-700 px-6 py-3 rounded-lg hover:border-slate-300 hover:bg-slate-50 transition-colors"
          >
            Je dépose mon profil
          </Link>
        </div>
      </section>
    </main>
  );
}
