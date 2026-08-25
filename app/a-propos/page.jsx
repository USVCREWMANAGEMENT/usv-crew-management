"use client";
import { Anchor, Compass, Shield } from "lucide-react";
import SeaBackground from "../../components/SeaBackground";
import { useT } from "../../lib/i18n/LanguageProvider";

const CARTE_ICONS = [Anchor, Compass, Shield];

export default function AProposPage() {
  const t = useT();

  return (
    <main>
      <section className="px-6 lg:px-16 py-16 lg:py-20 chart-grid relative overflow-hidden">
        <SeaBackground />
        <p className="text-xs uppercase tracking-widest text-[#F4530B] font-chart mb-4 font-semibold">
          {t.aPropos.eyebrow}
        </p>
        <h1 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight text-[#0B2239] mb-4 max-w-2xl">
          {t.aPropos.title}
        </h1>
      </section>

      <section className="px-6 lg:px-16 py-16 max-w-3xl">
        <p className="text-slate-600 text-lg leading-relaxed mb-6">{t.aPropos.p1}</p>
        <p className="text-slate-600 text-lg leading-relaxed mb-6">{t.aPropos.p2}</p>
      </section>

      <section className="px-6 lg:px-16 py-16 border-t border-slate-100 bg-slate-50/50">
        <h2 className="text-xs uppercase tracking-widest text-slate-400 font-chart mb-10 font-semibold">
          {t.aPropos.distingueTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.aPropos.cartes.map((item, i) => {
            const Icon = CARTE_ICONS[i];
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
