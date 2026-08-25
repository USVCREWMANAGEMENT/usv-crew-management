"use client";
import Link from "next/link";
import { Radio, Cpu, Radar, Shield, Compass, ArrowRight } from "lucide-react";
import SeaBackground from "../../../components/SeaBackground";
import { useT } from "../../../lib/i18n/LanguageProvider";

const COMPETENCE_ICONS = [Radio, Cpu, Radar, Shield, Compass];

export default function ReferentielPage() {
  const t = useT();

  return (
    <main>
      <section className="px-6 lg:px-16 py-16 lg:py-20 chart-grid relative overflow-hidden">
        <SeaBackground />
        <p className="text-xs uppercase tracking-widest text-[#F4530B] font-chart mb-4 font-semibold">
          {t.referentiel.eyebrow}
        </p>
        <h1 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight text-[#0B2239] mb-4 max-w-2xl">
          {t.referentiel.title}
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl">{t.referentiel.intro}</p>
      </section>

      <section className="px-6 lg:px-16 py-16 max-w-3xl">
        <p className="text-slate-600 leading-relaxed mb-6">{t.referentiel.body}</p>
      </section>

      <section className="px-6 lg:px-16 py-16 border-t border-slate-100">
        <h2 className="text-xs uppercase tracking-widest text-slate-400 font-chart mb-10 font-semibold">
          {t.referentiel.domainesTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.referentiel.competences.map((c, i) => {
            const Icon = COMPETENCE_ICONS[i];
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
          {t.referentiel.niveauxTitle}
        </h2>
        <div className="space-y-4">
          {t.referentiel.niveaux.map((n, i) => (
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
          {t.referentiel.finalTitle}
        </h2>
        <Link
          href="/candidature"
          className="inline-flex items-center gap-2 text-sm uppercase tracking-widest bg-[#F4530B] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#d94806] transition-colors"
        >
          {t.referentiel.ctaDeposer}
          <ArrowRight className="w-4 h-4" strokeWidth={2} />
        </Link>
      </section>
    </main>
  );
}
