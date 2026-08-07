"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const isActive = (href) => pathname === href || pathname.startsWith(href + "/");
  return (
    <header className="border-b border-[#0B2239]/10 sticky top-0 bg-[#FAFBFC]/85 backdrop-blur-md z-50">
      <div className="px-6 lg:px-16 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-md bg-[#0B2239] flex items-center justify-center shrink-0 transition-transform group-hover:-rotate-6">
            <Ship className="w-4 h-4 text-[#F4530B]" strokeWidth={1.5} />
          </div>
          <span className="font-display font-semibold text-sm tracking-tight text-[#0B2239]">
            USV CREW MANAGEMENT
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={`relative text-sm transition-colors py-1 after:absolute after:left-0 after:-bottom-0.5 after:h-px after:bg-[#F4530B] after:transition-all after:duration-300 ${
                isActive(l.href)
                  ? "text-[#0B2239] after:w-full"
                  : "text-[#0B2239]/60 hover:text-[#0B2239] after:w-0 hover:after:w-full"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/candidature"
            className="hidden sm:flex font-chart text-[11px] uppercase tracking-widest text-white bg-[#F4530B] px-4 py-2 rounded-md hover:bg-[#d94806] hover:shadow-[0_6px_16px_-6px_rgba(244,83,11,0.55)] active:scale-[0.97] transition-all"
          >
            Déposer mon profil
          </Link>
          <button className="lg:hidden text-[#0B2239] p-2 -m-2" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-[#0B2239]/10 px-6 py-4 flex flex-col gap-1 bg-[#FAFBFC]">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={`text-sm py-2.5 px-3 rounded-md transition-colors ${
                isActive(l.href) ? "text-[#0B2239] bg-[#0B2239]/5 font-medium" : "text-[#0B2239]/70 hover:bg-[#0B2239]/5"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/candidature"
            onClick={() => setOpen(false)}
            className="font-chart text-[11px] uppercase tracking-widest text-white bg-[#F4530B] px-4 py-3 rounded-md text-center mt-2 active:scale-[0.98] transition-transform"
          >
            Déposer mon profil
          </Link>
        </nav>
      )}
    </header>
  );
}
