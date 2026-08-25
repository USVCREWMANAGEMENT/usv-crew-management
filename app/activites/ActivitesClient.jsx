"use client";
import Link from "next/link";
import { Anchor, Compass, ClipboardCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import SeaBackground from "../../components/SeaBackground";
import { useT } from "../../lib/i18n/LanguageProvider";

const ITEM_ICONS = [Anchor, Compass, ClipboardCheck];

export default function ActivitesPage() {
  const t = useT();

  return (
    <main>
      <section className="px-6 lg:px-16 py-16 lg:py-20 chart-grid relative overflow-hidden">
        <SeaBackground />
        <p className="text-xs uppercase tracking-widest text-[#F4530B] font-chart mb-4 font-semibold">
          {t.activites.eyebrow}
        </p>
        <h1 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight text-[#0B2239] mb-4 max-w-2xl">
          {t.activites.title}
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl">{t.activites.intro}</p>
      </section>

      <section className="px-6 lg:px-16 py-16">
        <div className="space-y-16">
          {t.activites.items.map((a, i) => {
            const Icon = ITEM_ICONS[i];
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
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-slate-400 font-chart mb-4 font-semibold">
            {t.activites.commentEyebrow}
          </p>
          <h2 className="font-display text-2xl font-semibold mb-4 text-[#0B2239]">
            {t.activites.commentTitle}
          </h2>
          <p className="text-slate-500 leading-relaxed">{t.activites.commentText}</p>
        </div>
      </section>

      <section className="px-6 lg:px-16 py-20 border-t border-slate-100 text-center">
        <h2 className="font-display text-2xl font-semibold mb-4 text-[#0B2239]">
          {t.activites.finalTitle}
        </h2>
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <Link
            href="/employeurs"
            className="flex items-center gap-2 text-sm uppercase tracking-widest bg-[#F4530B] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#d94806] transition-colors"
          >
            {t.activites.ctaRecrute}
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </Link>
          <Link
            href="/candidature"
            className="flex items-center gap-2 text-sm uppercase tracking-widest border border-slate-200 text-slate-700 px-6 py-3 rounded-lg hover:border-slate-300 hover:bg-slate-50 transition-colors"
          >
            {t.activites.ctaDeposer}
          </Link>
        </div>
      </section>
    </main>
  );
}
