"use client";
import Link from "next/link";
import { useState } from "react";
import { Ship, Menu, X } from "lucide-react";

const LINKS = [
  { href: "/activites", label: "Activités" },
  { href: "/employeurs", label: "Employeurs" },
  { href: "/ressources", label: "Ressources" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b border-[#0B2239]/10 sticky top-0 bg-[#FAFBFC]/90 backdrop-blur z-50">
      <div className="px-6 lg:px-16 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-md bg-[#0B2239] flex items-center justify-center shrink-0">
            <Ship className="w-4 h-4 text-[#F4530B]" strokeWidth={1.5} />
          </div>
          <span className="font-display font-semibold text-sm tracking-tight text-[#0B2239]">
            USV CREW MANAGEMENT
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-[#0B2239]/60 hover:text-[#0B2239] transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/candidature" className="hidden sm:flex font-chart text-[11px] uppercase tracking-widest text-white bg-[#F4530B] px-4 py-2 rounded-md hover:bg-[#d94806] transition-colors">
            Déposer mon profil
          </Link>
          <button className="lg:hidden text-[#0B2239]" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-[#0B2239]/10 px-6 py-4 flex flex-col gap-4 bg-[#FAFBFC]">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-[#0B2239]/70">
              {l.label}
            </Link>
          ))}
          <Link href="/candidature" onClick={() => setOpen(false)} className="font-chart text-[11px] uppercase tracking-widest text-white bg-[#F4530B] px-4 py-2 rounded-md text-center">
            Déposer mon profil
          </Link>
        </nav>
      )}
    </header>
  );
}
