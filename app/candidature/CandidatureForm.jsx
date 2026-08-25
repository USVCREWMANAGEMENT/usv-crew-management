"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "../../lib/i18n/LanguageProvider";
import {
  Compass, Anchor, Ship, FileText, User, CheckCircle2,
  Plus, Trash2, Upload, ChevronRight, MapPin, Clock, Radio, Shield, Cpu, Radar
} from "lucide-react";

const STEP_KEYS = ["identite", "profil", "experience", "documents", "recap"];
const STEP_ICONS = [User, Compass, Anchor, FileText, CheckCircle2];
const COMPETENCE_ICONS = [Radio, Cpu, Radar, Shield, Compass];

const emptyExperience = () => ({
  id: crypto.randomUUID(),
  poste: "",
  employeur: "",
  debut: "",
  fin: "",
  description: "",
});

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzUuTTzc049D5s3agNUgsfvPUFjXUbF47wYnecrVmEqjvnUEcn8wrjZS2ZxhHejY7GYuw/exec";

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    if (!file) return resolve("");
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function CandidatureForm() {
  const { lang, t: dict } = useLanguage();
  const t = dict.candidature;
  const STEPS = STEP_KEYS.map((key, i) => ({ key, label: t.steps[key], icon: STEP_ICONS[i] }));
  const COMPETENCES_USV = t.competences.map((c, i) => ({ ...c, icon: COMPETENCE_ICONS[i] }));
  const [stepIndex, setStepIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [data, setData] = useState({
    nom: "", prenom: "", email: "", telephone: "", localisation: "",
    disponibilite: "immediate",
    typeProfil: "les_deux",
    brevets: [],
    competencesUSV: [],
    experiences: [emptyExperience()],
    cvName: "",
    certName: "",
    cvFile: null,
    certFile: null,
  });

  const step = STEPS[stepIndex];
  const isLast = stepIndex === STEPS.length - 1;
  const isFirst = stepIndex === 0;

  const update = (field, value) => setData((d) => ({ ...d, [field]: value }));

  const toggleArrayValue = (field, value) => {
    setData((d) => {
      const arr = d[field];
      return {
        ...d,
        [field]: arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value],
      };
    });
  };

  const updateExperience = (id, field, value) => {
    setData((d) => ({
      ...d,
      experiences: d.experiences.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    }));
  };

  const addExperience = () =>
    setData((d) => ({ ...d, experiences: [...d.experiences, emptyExperience()] }));

  const removeExperience = (id) =>
    setData((d) => ({
      ...d,
      experiences: d.experiences.filter((exp) => exp.id !== id),
    }));

  const canAdvance = () => {
    if (step.key === "identite") return data.nom && data.prenom && data.email;
    if (step.key === "profil") return data.typeProfil;
    return true;
  };

  const handleNext = async () => {
    if (!canAdvance()) return;
    if (isLast) {
      setSubmitting(true);
      setSubmitError("");
      try {
        const [cvBase64, certBase64] = await Promise.all([
          fileToBase64(data.cvFile),
          fileToBase64(data.certFile),
        ]);
        await fetch(APPS_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify({
            ...data,
            // Les valeurs partent dans la langue du candidat, avec la langue
            // elle-même pour savoir dans quelle version il a postulé.
            langue: lang.toUpperCase(),
            disponibilite:
              t.dispoOptions.find((o) => o.value === data.disponibilite)?.label ?? data.disponibilite,
            typeProfil:
              t.typeOptions.find((o) => o.value === data.typeProfil)?.label ?? data.typeProfil,
            competencesUSV: data.competencesUSV.map(
              (k) => COMPETENCES_USV.find((c) => c.key === k)?.label ?? k
            ),
            cvBase64,
            certBase64,
          }),
        });
        setSubmitted(true);
      } catch (err) {
        setSubmitError(t.erreurReseau);
      } finally {
        setSubmitting(false);
      }
    } else {
      setStepIndex((i) => i + 1);
    }
  };

  const handleBack = () => {
    if (!isFirst) setStepIndex((i) => i - 1);
  };

  if (submitted) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-white text-[#0B2239] font-sans px-6">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="mx-auto w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center">
            <Anchor className="w-7 h-7 text-emerald-600" strokeWidth={1.5} />
          </div>
          <h1 className="font-semibold text-2xl tracking-tight">{t.succesTitle}</h1>
          <p className="text-slate-500 text-sm leading-relaxed">
            {t.succesMerci}{data.prenom ? ` ${data.prenom}` : ""}, {t.succesText}
          </p>
          <Link
            href="/"
            className="inline-block text-xs uppercase tracking-widest text-[#F4530B] border border-[#F4530B]/40 px-4 py-2 rounded-lg hover:bg-[#F4530B]/5 transition-colors"
          >
            {t.succesRetour}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-white text-[#0B2239] font-sans flex flex-col lg:flex-row">
      <aside className="lg:w-72 shrink-0 bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-200 px-6 py-8 lg:py-10">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-7 h-7 rounded-lg bg-[#F4530B] flex items-center justify-center">
            <Ship className="w-4 h-4 text-white" strokeWidth={1.5} />
          </div>
          <span className="font-semibold text-sm tracking-tight text-[#0B2239]">
            USV Crew Management
          </span>
        </div>
        <Link
          href="/"
          className="text-[10px] uppercase tracking-widest text-slate-400 hover:text-slate-700 transition-colors mb-8 block"
        >
          {t.retour}
        </Link>

        <div className="relative pl-1">
          <div className="absolute left-[9px] top-2 bottom-2 w-px bg-slate-200" />
          <div
            className="absolute left-[9px] top-2 w-px bg-[#F4530B]/50 transition-all duration-500"
            style={{ height: `${(stepIndex / (STEPS.length - 1)) * 100}%`, maxHeight: "calc(100% - 16px)" }}
          />
          <div className="space-y-8">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              const active = i === stepIndex;
              const done = i < stepIndex;
              return (
                <div key={s.key} className="relative flex items-center gap-3">
                  <div
                    className={`relative z-10 w-[19px] h-[19px] rounded-full flex items-center justify-center border transition-colors
                      ${done ? "bg-[#F4530B]/50 border-[#F4530B]" : active ? "bg-white border-[#F4530B]" : "bg-white border-slate-300"}`}
                  >
                    {done ? (
                      <CheckCircle2 className="w-3 h-3 text-white" strokeWidth={3} />
                    ) : active ? (
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F4530B]/50" />
                    ) : null}
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon className={`w-3.5 h-3.5 ${active ? "text-[#F4530B]" : "text-slate-400"}`} strokeWidth={1.5} />
                    <span
                      className={`text-xs tracking-wide uppercase font-chart ${
                        active ? "text-[#0B2239]" : done ? "text-slate-500" : "text-slate-400"
                      }`}
                    >
                      {s.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-200 hidden lg:block">
          <p className="text-[10px] font-chart uppercase tracking-widest text-slate-400 leading-relaxed">
            {t.capSuivi}<br />
            <span className="text-slate-600">{t.etape} {stepIndex + 1} / {STEPS.length}</span>
          </p>
        </div>
      </aside>

      <main className="flex-1 px-6 py-10 lg:px-16 lg:py-14 max-w-3xl">
        {step.key === "identite" && (
          <Section title={t.identiteTitle} subtitle={t.identiteSub}>
            <Row>
              <Field label={t.prenom} required>
                <Input value={data.prenom} onChange={(v) => update("prenom", v)} placeholder={t.prenomPh} />
              </Field>
              <Field label={t.nom} required>
                <Input value={data.nom} onChange={(v) => update("nom", v)} placeholder={t.nomPh} />
              </Field>
            </Row>
            <Row>
              <Field label={t.email} required>
                <Input type="email" value={data.email} onChange={(v) => update("email", v)} placeholder={t.emailPh} />
              </Field>
              <Field label={t.telephone}>
                <Input value={data.telephone} onChange={(v) => update("telephone", v)} placeholder={t.telephonePh} />
              </Field>
            </Row>
            <Row>
              <Field label={t.localisation} icon={MapPin}>
                <Input value={data.localisation} onChange={(v) => update("localisation", v)} placeholder={t.localisationPh} />
              </Field>
              <Field label={t.disponibilite} icon={Clock}>
                <Select
                  value={data.disponibilite}
                  onChange={(v) => update("disponibilite", v)}
                  options={t.dispoOptions}
                />
              </Field>
            </Row>
          </Section>
        )}

        {step.key === "profil" && (
          <Section title={t.profilTitle} subtitle={t.profilSub}>
            <Field label={t.typeProfil} required>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {t.typeOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => update("typeProfil", opt.value)}
                    className={`text-xs uppercase tracking-wide font-chart py-3 px-3 rounded-lg border transition-colors text-left
                      ${data.typeProfil === opt.value
                        ? "border-[#F4530B] bg-[#F4530B]/5 text-[#F4530B]"
                        : "border-slate-200 text-slate-500 hover:border-slate-300"}`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </Field>

            <Field label={t.brevetsLabel} hint={t.brevetsHint}>
              <div className="flex flex-wrap gap-2">
                {t.brevets.map((b) => (
                  <Chip
                    key={b}
                    label={b}
                    active={data.brevets.includes(b)}
                    onClick={() => toggleArrayValue("brevets", b)}
                  />
                ))}
              </div>
            </Field>

            <Field label={t.competencesLabel} hint={t.competencesHint}>
              <div className="space-y-2">
                {COMPETENCES_USV.map((c) => {
                  const Icon = c.icon;
                  const active = data.competencesUSV.includes(c.key);
                  return (
                    <button
                      key={c.key}
                      type="button"
                      onClick={() => toggleArrayValue("competencesUSV", c.key)}
                      className={`w-full flex items-center gap-3 text-left px-3 py-2.5 rounded-lg border transition-colors
                        ${active ? "border-[#F4530B]/50 bg-[#F4530B]/5" : "border-slate-200 hover:border-slate-300"}`}
                    >
                      <Icon className={`w-4 h-4 shrink-0 ${active ? "text-[#F4530B]" : "text-slate-400"}`} strokeWidth={1.5} />
                      <span className={`text-sm ${active ? "text-[#0B2239]" : "text-slate-500"}`}>{c.label}</span>
                    </button>
                  );
                })}
              </div>
            </Field>
          </Section>
        )}

        {step.key === "experience" && (
          <Section title={t.expTitle} subtitle={t.expSub}>
            <div className="space-y-6">
              {data.experiences.map((exp, idx) => (
                <div key={exp.id} className="border border-slate-200 rounded-lg p-4 relative bg-slate-50/50">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-chart uppercase tracking-widest text-slate-400">
                      {t.poste} {idx + 1}
                    </span>
                    {data.experiences.length > 1 && (
                      <button
                        onClick={() => removeExperience(exp.id)}
                        className="text-slate-400 hover:text-red-500 transition-colors"
                        aria-label={t.supprimerPoste}
                      >
                        <Trash2 className="w-3.5 h-3.5" strokeWidth={1.5} />
                      </button>
                    )}
                  </div>
                  <Row>
                    <Field label={t.intitule}>
                      <Input value={exp.poste} onChange={(v) => updateExperience(exp.id, "poste", v)} placeholder={t.intitulePh} />
                    </Field>
                    <Field label={t.employeur}>
                      <Input value={exp.employeur} onChange={(v) => updateExperience(exp.id, "employeur", v)} placeholder={t.employeurPh} />
                    </Field>
                  </Row>
                  <Row>
                    <Field label={t.debut}>
                      <Input type="month" value={exp.debut} onChange={(v) => updateExperience(exp.id, "debut", v)} />
                    </Field>
                    <Field label={t.fin} hint={t.finHint}>
                      <Input type="month" value={exp.fin} onChange={(v) => updateExperience(exp.id, "fin", v)} />
                    </Field>
                  </Row>
                  <Field label={t.description}>
                    <textarea
                      value={exp.description}
                      onChange={(e) => updateExperience(exp.id, "description", e.target.value)}
                      rows={3}
                      placeholder={t.descriptionPh}
                      className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm text-[#0B2239] placeholder-slate-400 focus:outline-none focus:border-[#F4530B] focus:ring-1 focus:ring-[#F4530B] transition-colors resize-none"
                    />
                  </Field>
                </div>
              ))}
            </div>
            <button
              onClick={addExperience}
              className="mt-4 flex items-center gap-2 text-xs uppercase tracking-widest text-[#F4530B] hover:text-[#F4530B] transition-colors"
            >
              <Plus className="w-3.5 h-3.5" strokeWidth={2} />
              {t.ajouterPoste}
            </button>
          </Section>
        )}

        {step.key === "documents" && (
          <Section title={t.docTitle} subtitle={t.docSub}>
            <Field label={t.cv} required>
              <FileDrop
                fileName={data.cvName}
                onFile={(file) => { update("cvName", file?.name || ""); update("cvFile", file || null); }}
                accept=".pdf,.doc,.docx"
                cta={t.fileCta}
              />
            </Field>
            <Field label={t.certificats}>
              <FileDrop
                fileName={data.certName}
                onFile={(file) => { update("certName", file?.name || ""); update("certFile", file || null); }}
                accept=".pdf,.jpg,.png"
                cta={t.fileCta}
              />
            </Field>
          </Section>
        )}

        {step.key === "recap" && (
          <Section title={t.recapTitle} subtitle={t.recapSub}>
            <div className="space-y-5 font-chart text-sm">
              <RecapRow label={t.recapNom} value={`${data.prenom} ${data.nom}`.trim() || "—"} />
              <RecapRow label={t.recapContact} value={data.email || "—"} />
              <RecapRow label={t.recapProfil} value={
                data.typeProfil === "les_deux"
                  ? t.typeRecapLesDeux
                  : t.typeOptions.find((o) => o.value === data.typeProfil)?.label ?? "—"
              } />
              <RecapRow label={t.recapBrevets} value={data.brevets.length ? data.brevets.join(", ") : t.aucunBrevet} />
              <RecapRow label={t.recapCompetences} value={
                data.competencesUSV.length
                  ? data.competencesUSV.map((k) => COMPETENCES_USV.find((c) => c.key === k)?.label).join(", ")
                  : t.aucuneCompetence
              } />
              <RecapRow label={t.recapExperience} value={`${data.experiences.filter((e) => e.poste).length} ${t.postesRenseignes}`} />
              <RecapRow label={t.recapCv} value={data.cvName || t.nonFourni} />
            </div>
          </Section>
        )}

        {submitError && (
          <p className="text-xs text-red-500 mt-6 font-chart">{submitError}</p>
        )}
        <div className="flex items-center justify-between mt-6 pt-6 border-t border-slate-200">
          <button
            onClick={handleBack}
            disabled={isFirst || submitting}
            className={`text-xs uppercase tracking-widest transition-colors ${
              isFirst || submitting ? "text-slate-300 cursor-not-allowed" : "text-slate-500 hover:text-[#0B2239]"
            }`}
          >
            {t.retourBtn}
          </button>
          <button
            onClick={handleNext}
            disabled={!canAdvance() || submitting}
            className={`flex items-center gap-2 text-xs uppercase tracking-widest px-5 py-2.5 rounded-lg transition-colors
              ${canAdvance() && !submitting
                ? "bg-[#F4530B] text-white hover:bg-[#d94806]"
                : "bg-slate-100 text-slate-400 cursor-not-allowed"}`}
          >
            {submitting ? t.envoiEnCours : isLast ? t.envoyer : t.continuer}
            <ChevronRight className="w-3.5 h-3.5" strokeWidth={2} />
          </button>
        </div>
      </main>
    </div>
  );
}


function Section({ title, subtitle, children }) {
  return (
    <div>
      <h1 className="font-semibold text-2xl tracking-tight text-[#0B2239] mb-1">{title}</h1>
      <p className="text-slate-400 text-sm mb-8">{subtitle}</p>
      <div className="space-y-5">{children}</div>
    </div>
  );
}

function Row({ children }) {
  return <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{children}</div>;
}

function Field({ label, required, hint, icon: Icon, children }) {
  return (
    <div>
      <label className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-chart text-slate-400 mb-1.5">
        {Icon && <Icon className="w-3 h-3" strokeWidth={1.5} />}
        {label}
        {required && <span className="text-[#F4530B]">*</span>}
      </label>
      {children}
      {hint && <p className="text-[11px] text-slate-400 mt-1">{hint}</p>}
    </div>
  );
}

function Input({ value, onChange, placeholder, type = "text" }) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm text-[#0B2239] placeholder-slate-400 focus:outline-none focus:border-[#F4530B] focus:ring-1 focus:ring-[#F4530B] transition-colors"
    />
  );
}

function Select({ value, onChange, options }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm text-[#0B2239] focus:outline-none focus:border-[#F4530B] focus:ring-1 focus:ring-[#F4530B] transition-colors"
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>{o.label}</option>
      ))}
    </select>
  );
}

function Chip({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-xs px-3 py-1.5 rounded-full border transition-colors font-chart
        ${active ? "border-[#F4530B] bg-[#F4530B]/5 text-[#F4530B]" : "border-slate-200 text-slate-500 hover:border-slate-300"}`}
    >
      {label}
    </button>
  );
}

function FileDrop({ fileName, onFile, accept, cta }) {
  const inputId = React.useId();
  return (
    <label
      htmlFor={inputId}
      className="flex items-center gap-3 border border-dashed border-slate-300 rounded-lg px-4 py-4 cursor-pointer hover:border-[#F4530B]/60 hover:bg-[#F4530B]/5/30 transition-colors"
    >
      <Upload className="w-4 h-4 text-slate-400 shrink-0" strokeWidth={1.5} />
      <span className="text-sm text-slate-500 truncate">
        {fileName || cta}
      </span>
      <input
        id={inputId}
        type="file"
        accept={accept}
        className="hidden"
        onChange={(e) => onFile(e.target.files?.[0] || null)}
      />
    </label>
  );
}

function RecapRow({ label, value }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 border-b border-slate-200 pb-3">
      <span className="w-40 shrink-0 text-[10px] uppercase tracking-widest text-slate-400">{label}</span>
      <span className="text-[#0B2239]">{value}</span>
    </div>
  );
}

