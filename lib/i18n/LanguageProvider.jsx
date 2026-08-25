"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { fr } from "./fr";
import { en } from "./en";

const DICTIONARIES = { fr, en };
const STORAGE_KEY = "usv-lang";

const LanguageContext = createContext({ lang: "fr", setLang: () => {}, t: fr });

export function LanguageProvider({ children }) {
  // Always start on "fr" so server and first client render agree; the stored
  // preference is applied in the effect below to avoid a hydration mismatch.
  const [lang, setLangState] = useState("fr");

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
