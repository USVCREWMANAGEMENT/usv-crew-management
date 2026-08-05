"use client";
import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nom: "", email: "", entreprise: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // À brancher sur le même circuit Google Apps Script que le formulaire de candidature,
    // ou sur une adresse mailto en attendant.
    window.location.href = `mailto:contact@usvcrewmanagement.com?subject=${encodeURIComponent(
      "Contact depuis le site — " + form.nom
    )}&body=${encodeURIComponent(
      `Entreprise : ${form.entreprise}\nEmail : ${form.email}\n\n${form.message}`
    )}`;
    setSent(true);
  };

  return (
    <main>
      <section className="px-6 lg:px-16 py-16 lg:py-20 chart-grid">
        <p className="text-xs uppercase tracking-widest text-[#F4530B] font-chart mb-4 font-semibold">
          Contact
        </p>
        <h1 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight text-[#0B2239] mb-4 max-w-2xl">
          Parlons de votre besoin.
        </h1>
      </section>

      <section className="px-6 lg:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-start gap-3 mb-6">
              <Mail className="w-4 h-4 text-[#F4530B] mt-1 shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-sm font-medium text-[#0B2239]">Email</p>
                <a href="mailto:contact@usvcrewmanagement.com" className="text-sm text-slate-500 hover:text-[#F4530B]">
                  contact@usvcrewmanagement.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#F4530B] mt-1 shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-sm font-medium text-[#0B2239]">Zone d&apos;intervention</p>
                <p className="text-sm text-slate-500">France, bassin méditerranéen, Europe</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {sent ? (
              <div className="border border-emerald-200 bg-emerald-50 rounded-lg p-4 text-sm text-emerald-700">
                Ton client email va s&apos;ouvrir pour finaliser l&apos;envoi.
              </div>
            ) : null}
            <div>
              <label className="text-[10px] uppercase tracking-widest font-chart text-slate-400 mb-1.5 block">
                Nom
              </label>
              <input
                required
                value={form.nom}
                onChange={(e) => setForm({ ...form, nom: e.target.value })}
                className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#F4530B] focus:ring-1 focus:ring-[#F4530B]"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-widest font-chart text-slate-400 mb-1.5 block">
                Email
              </label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#F4530B] focus:ring-1 focus:ring-[#F4530B]"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-widest font-chart text-slate-400 mb-1.5 block">
                Entreprise (si vous recrutez)
              </label>
              <input
                value={form.entreprise}
                onChange={(e) => setForm({ ...form, entreprise: e.target.value })}
                className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#F4530B] focus:ring-1 focus:ring-[#F4530B]"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-widest font-chart text-slate-400 mb-1.5 block">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#F4530B] focus:ring-1 focus:ring-[#F4530B] resize-none"
              />
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 text-sm uppercase tracking-widest bg-[#F4530B] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#d94806] transition-colors"
            >
              Envoyer
              <Send className="w-4 h-4" strokeWidth={2} />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
