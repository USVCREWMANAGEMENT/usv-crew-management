"use client";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import SeaBackground from "../../components/SeaBackground";
import { useT } from "../../lib/i18n/LanguageProvider";

export default function RessourcesPage() {
  const t = useT();

  return (
    <main>
      <section className="px-6 lg:px-16 py-16 lg:py-20 chart-grid relative overflow-hidden">
        <SeaBackground />
        <p className="text-xs uppercase tracking-widest text-[#F4530B] font-chart mb-4 font-semibold">
          {t.ressources.eyebrow}
        </p>
        <h1 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight text-[#0B2239] mb-4 max-w-2xl">
          {t.ressources.title}
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl">{t.ressources.intro}</p>
      </section>

      <section className="px-6 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.ressources.articles.map((a) => (
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
                {t.ressources.lire}
                <ArrowRight className="w-3 h-3" strokeWidth={2} />
              </span>
            </Link>
          ))}

          <div className="border border-dashed border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center text-center">
            <p className="text-sm text-slate-400">{t.ressources.aVenir}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
