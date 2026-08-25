"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../lib/i18n/LanguageProvider";

const LANGS = [
  { code: "fr", label: "FR", flag: "🇫🇷" },
  { code: "en", label: "EN", flag: "🇬🇧" },
];

export default function LanguageSwitcher({ variant = "desktop", onPick }) {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onEsc = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  const current = LANGS.find((l) => l.code === lang) ?? LANGS[0];

  const pick = (code) => {
    setLang(code);
    setOpen(false);
    onPick?.();
  };

  // Inside the mobile menu the list is shown flat — no dropdown to fight with.
  if (variant === "mobile") {
    return (
      <div className="flex items-center gap-2">
        {LANGS.map((l) => (
          <button
            key={l.code}
            onClick={() => pick(l.code)}
            aria-current={l.code === lang ? "true" : undefined}
            className={`flex items-center gap-1.5 font-chart text-[11px] uppercase tracking-widest px-3 py-2 rounded-md border transition-colors ${
              l.code === lang
                ? "border-[#F4530B] text-[#F4530B] bg-[#F4530B]/5"
                : "border-[#0B2239]/15 text-[#0B2239]/60 hover:border-[#0B2239]/40"
            }`}
          >
            <span aria-hidden>{l.flag}</span>
            {l.label}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Langue / Language"
        className="flex items-center gap-1.5 font-chart text-[11px] uppercase tracking-widest text-[#0B2239]/70 hover:text-[#0B2239] border border-[#0B2239]/15 hover:border-[#0B2239]/35 rounded-md px-2.5 py-2 transition-colors"
      >
        <span aria-hidden>{current.flag}</span>
        {current.label}
        <ChevronDown
          className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`}
          strokeWidth={2}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full mt-1 min-w-[5.5rem] bg-white border border-[#0B2239]/12 rounded-md shadow-[0_10px_28px_-12px_rgba(11,34,57,0.35)] overflow-hidden z-50"
        >
          {LANGS.map((l) => (
            <li key={l.code}>
              <button
                role="option"
                aria-selected={l.code === lang}
                onClick={() => pick(l.code)}
                className={`w-full flex items-center gap-2 font-chart text-[11px] uppercase tracking-widest px-3 py-2.5 text-left transition-colors ${
                  l.code === lang
                    ? "text-[#F4530B] bg-[#F4530B]/5"
                    : "text-[#0B2239]/70 hover:bg-[#0B2239]/5"
                }`}
              >
                <span aria-hidden>{l.flag}</span>
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
