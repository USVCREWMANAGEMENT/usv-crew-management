"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { fr } from "./fr";
import { en } from "./en";

const DICTIONARIES = { fr, en };
const STORAGE_KEY = "usv-lang";

const LanguageContext = createContext({ lang: "fr", setLang: () => {}, t: fr });

export function LanguageProvider({ children, defaultLang = "fr" }) {
  // Start on the language the server picked from the request's domain
  // (.com → en, .fr → fr) so server and first client render agree — no
  // flash, no hydration mismatch. A stored preference (explicit user
  // choice, from any domain) overrides it in the effect below.
  const [lang, setLangState] = useState(defaultLang);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && DICTIONARIES[stored]) setLangState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (next) => {
    if (!DICTIONARIES[next]) return;
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: DICTIONARIES[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

/** Returns { lang, setLang, t } — `t` is the active dictionary. */
export function useLanguage() {
  return useContext(LanguageContext);
}

/** Shorthand for components that only need the strings. */
export function useT() {
  return useContext(LanguageContext).t;
}
