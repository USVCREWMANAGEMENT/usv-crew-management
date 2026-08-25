"use client";
import Link from "next/link";
import { Radio, Cpu, Radar, Shield, Compass, ArrowRight, Anchor, ClipboardCheck, LifeBuoy, Wrench, CloudSun, Waves } from "lucide-react";
import ChartEyebrow from "../components/ChartEyebrow";
import HeroChart from "../components/HeroChart";
import SeaBackground from "../components/SeaBackground";
import { useT } from "../lib/i18n/LanguageProvider";

const ACTIVITE_META = [
  { icon: Anchor, href: "/activites" },
  { icon: Compass, href: "/ressources/referentiel-competences-usv" },
  { icon: ClipboardCheck, href: "/employeurs" },
];

const COMPETENCE_ICONS = [Radio, Compass, Waves, Cpu, Wrench, Radar, LifeBuoy, CloudSun, Shield];

export default function Home() {
  const t = useT();

  return (
    <main className="bg-[#FAFBFC] text-[#0B2239]">
      <section className="chart-grid border-b border-[#0B2239]/10 relative overflow-hidden">
        <SeaBackground />
        <div className="relative px-6 lg:px-16 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <ChartEyebrow>{t.home.eyebrow}</ChartEyebrow>
            <h1 className="font-display text-4xl lg:text-[3.4rem] font-semibold tracking-tight leading-[1.05] mb-6">
              {t.home.title}
            </h1>
            <p className="text-[#0B2239]/60 text-lg leading-relaxed mb-10 max-w-xl">
              {t.home.intro}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/candidature" className="flex items-center gap-2 font-chart text-[11px] uppercase tracking-widest bg-[#F4530B] text-white px-6 py-3.5 rounded-md hover:bg-[#d94806] hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-8px_rgba(244,83,11,0.55)] active:translate-y-0 active:shadow-none transition-all">
                {t.home.ctaVivier} <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </Link>
              <Link href="/employeurs" className="flex items-center gap-2 font-chart text-[11px] uppercase tracking-widest border border-[#0B2239]/20 text-[#0B2239] px-6 py-3.5 rounded-md hover:border-[#0B2239]/50 transition-colors">
                {t.home.ctaRecrute}
              </Link>
            </div>
          </div>
          <HeroChart />
        </div>
      </section>

      <section className="px-6 lg:px-16 py-16">
        <div className="rounded-lg overflow-hidden aspect-[21/9] relative">
          <img src="https://images.unsplash.com/photo-1541828985935-1fe979f9fc0b?fm=jpg&q=80&w=2000&auto=format&fit=crop" alt={t.home.imgAlt} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2239]/50 to-transparent" />
          <p className="absolute bottom-4 left-5 font-chart text-[10px] uppercase tracking-widest text-white/70">
            {t.home.zone}
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-16 py-16 border-t border-[#0B2239]/10">
        <div className="max-w-2xl">
          <ChartEyebrow fix="FIX 01">{t.home.domaineEyebrow}</ChartEyebrow>
          <h2 className="font-display text-2xl lg:text-3xl font-semibold mb-4">
            {t.home.domaineTitle}
          </h2>
          <p className="text-[#0B2239]/60 leading-relaxed">
            {t.home.domaineText}
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-16 py-16 border-t border-[#0B2239]/10">
        <ChartEyebrow fix="FIX 02">{t.home.activitesEyebrow}</ChartEyebrow>
        <h2 className="font-display text-2xl lg:text-3xl font-semibold mb-12 max-w-xl">
          {t.home.activitesTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.home.activites.map((a, i) => {
            const Icon = ACTIVITE_META[i].icon;
            return (
              <Link key={a.title} href={ACTIVITE_META[i].href} className="bg-white border border-[#0B2239]/10 rounded-lg p-6 hover:border-[#F4530B]/60 hover:-translate-y-1 hover:shadow-[0_16px_36px_-16px_rgba(11,34,57,0.25)] active:translate-y-0 active:shadow-none transition-all duration-300 group block">
                <div className="w-10 h-10 rounded-md bg-[#0E7490]/10 flex items-center justify-center mb-5 transition-colors group-hover:bg-[#F4530B]/10">
                  <Icon className="w-5 h-5 text-[#0E7490] transition-colors group-hover:text-[#F4530B]" strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{a.title}</h3>
                <p className="text-[#0B2239]/55 text-sm leading-relaxed mb-4">{a.description}</p>
                <span className="font-chart text-[10px] uppercase tracking-widest text-[#F4530B] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  {t.home.explorer} <ArrowRight className="w-3 h-3" strokeWidth={2} />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="px-6 lg:px-16 py-16 border-t border-[#0B2239]/10 bg-white">
        <ChartEyebrow fix="FIX 03">{t.home.competencesEyebrow}</ChartEyebrow>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {t.home.competences.map((label, i) => {
            const Icon = COMPETENCE_ICONS[i];
            return (
              <div key={label} className="flex items-center gap-3 border border-[#0B2239]/10 bg-[#FAFBFC] rounded-md px-4 py-4 transition-colors duration-300 hover:border-[#0E7490]/40 hover:bg-[#0E7490]/[0.04]">
                <Icon className="w-4 h-4 text-[#F4530B] shrink-0" strokeWidth={1.5} />
                <span className="text-sm text-[#0B2239]/80">{label}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-6 lg:px-16 py-16 border-t border-[#0B2239]/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-lg overflow-hidden aspect-[4/3] order-2 lg:order-1">
            <img src="https://images.unsplash.com/photo-1654083198752-56ff209c8129?fm=jpg&q=80&w=1600&auto=format&fit=crop" alt={t.home.marcheImgAlt} className="w-full h-full object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <ChartEyebrow fix="FIX 04">{t.home.marcheEyebrow}</ChartEyebrow>
            <h2 className="font-display text-2xl lg:text-3xl font-semibold mb-4">
              {t.home.marcheTitle}
            </h2>
            <p className="text-[#0B2239]/60 leading-relaxed mb-8">
              {t.home.marcheText}
            </p>
            <div className="grid grid-cols-3 gap-6 border-t border-[#0B2239]/10 pt-6">
              {t.home.stats.map((s) => (
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
        <p className="font-chart text-[11px] uppercase tracking-[0.2em] text-[#0E7490] mb-4">{t.home.finalEyebrow}</p>
        <h2 className="font-display text-2xl lg:text-3xl font-semibold mb-4">
          {t.home.finalTitle}
        </h2>
        <p className="text-[#0B2239]/60 mb-8 max-w-xl mx-auto">
          {t.home.finalText}
        </p>
        <Link href="/candidature" className="inline-flex items-center gap-2 font-chart text-[11px] uppercase tracking-widest bg-[#F4530B] text-white px-7 py-4 rounded-md hover:bg-[#d94806] hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-8px_rgba(244,83,11,0.55)] active:translate-y-0 active:shadow-none transition-all">
          {t.nav.deposer} <ArrowRight className="w-4 h-4" strokeWidth={2} />
        </Link>
      </section>
    </main>
  );
}
