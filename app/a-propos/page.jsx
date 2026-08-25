import { Anchor, Compass, Shield } from "lucide-react";
import SeaBackground from "../../components/SeaBackground";

export default function AProposPage() {
  return (
    <main>
      <section className="px-6 lg:px-16 py-16 lg:py-20 chart-grid relative overflow-hidden">
        <SeaBackground />
        <p className="text-xs uppercase tracking-widest text-[#F4530B] font-chart mb-4 font-semibold">
          À propos
        </p>
        <h1 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight text-[#0B2239] mb-4 max-w-2xl">
          Un métier structuré par ceux qui le connaissent de l&apos;intérieur.
        </h1>
      </section>

      <section className="px-6 lg:px-16 py-16 max-w-3xl">
        <p className="text-slate-600 text-lg leading-relaxed mb-6">
          USV Crew Management est né d&apos;un constat simple : le marché des
          navires de surface sans équipage grandit vite, mais aucune agence
          n&apos;est dédiée au recrutement des personnes qui les font
          fonctionner. Les crewing agencies traditionnelles n&apos;ont pas de
          ligne USV. Les fabricants recrutent en direct, sans vivier structuré.
        </p>
        <p className="text-slate-600 text-lg leading-relaxed mb-6">
          Notre agence repose sur une double expertise : une carrière maritime
          opérationnelle et une expérience de fleet management dans la robotique
          navale. Nous ne sommes pas un cabinet RH qui découvre le sujet — nous
          sommes des professionnels du secteur qui structurent le métier.
        </p>
      </section>

      <section className="px-6 lg:px-16 py-16 border-t border-slate-100 bg-slate-50/50">
        <h2 className="text-xs uppercase tracking-widest text-slate-400 font-chart mb-10 font-semibold">
          Ce qui nous distingue
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Anchor,
              title: "Double expertise",
              text: "Droit maritime STCW et compétences robotique/autonomie navale, réunis dans une seule agence.",
            },
            {
              icon: Compass,
              title: "Une seule spécialité",
              text: "L'USV est notre unique activité — c'est là que nous mettons tout notre temps.",
            },
            {
              icon: Shield,
              title: "Un référentiel partagé",
              text: "Nous construisons un référentiel de compétences pour un métier qui n'en a pas encore, et nous le mettons à disposition.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="bg-white border border-slate-200 rounded-xl p-6">
                <Icon className="w-5 h-5 text-[#F4530B] mb-4" strokeWidth={1.5} />
                <h3 className="font-semibold text-[#0B2239] mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
