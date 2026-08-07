import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import SeaBackground from "../../components/SeaBackground";

const ARTICLES = [
  {
    slug: "/ressources/referentiel-competences-usv",
    title: "Le référentiel de compétences opérateur USV",
    excerpt:
      "À défaut de norme STCW dédiée, un cadre structuré des compétences et parcours de reconversion pour les métiers d'opérateur USV.",
    tag: "Référentiel",
  },
];

export default function RessourcesPage() {
  return (
    <main>
      <section className="px-6 lg:px-16 py-16 lg:py-20 chart-grid relative overflow-hidden">
        <SeaBackground />
        <p className="text-xs uppercase tracking-widest text-[#F4530B] font-chart mb-4 font-semibold">
          Ressources
        </p>
        <h1 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight text-[#0B2239] mb-4 max-w-2xl">
          Ce que nous publions pour structurer le métier.
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl">
          Référentiels, actualités du secteur USV, guides pour candidats et
          opérateurs de flotte.
        </p>
      </section>

      <section className="px-6 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ARTICLES.map((a) => (
            <Link
              key={a.slug}
              href={a.slug}
              className="border border-slate-200 rounded-xl p-6 hover:border-[#F4530B]/40 hover:shadow-sm transition-all block"
            >
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-4 h-4 text-[#F4530B]" strokeWidth={1.5} />
                <span className="text-[10px] uppercase tracking-widest text-[#F4530B] font-chart font-semibold">
                  {a.tag}
                </span>
              </div>
              <h2 className="font-semibold text-lg text-[#0B2239] mb-2">{a.title}</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{a.excerpt}</p>
              <span className="flex items-center gap-1 text-xs uppercase tracking-widest text-[#F4530B]">
                Lire
                <ArrowRight className="w-3 h-3" strokeWidth={2} />
              </span>
            </Link>
          ))}

          <div className="border border-dashed border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center text-center">
            <p className="text-sm text-slate-400">
              D&apos;autres ressources et actualités du secteur USV seront
              publiées ici.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
