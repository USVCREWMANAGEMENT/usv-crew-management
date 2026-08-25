import { headers } from "next/headers";

// Les deux domaines sont traités comme les versions FR et EN d'un même site :
// même structure d'URL, contenu différent selon la langue de chaque domaine.
export const DOMAINS = {
  fr: "https://usvcrewmanagement.fr",
  en: "https://usvcrewmanagement.com",
};

export function langForHost(host) {
  const h = (host || "").toLowerCase();
  return h.includes("usvcrewmanagement.com") ? "en" : "fr";
}

/**
 * Construit un objet Metadata Next.js localisé pour une route donnée.
 * `path` est le chemin sans domaine (ex: "/activites", "" pour l'accueil).
 * `copy` fournit { fr: {title, description}, en: {title, description} }.
 */
export function pageMetadata(path, copy) {
  const host = headers().get("host");
  const lang = langForHost(host);
  const active = copy[lang];
  const canonical = `${DOMAINS[lang]}${path}`;

  return {
    title: active.title,
    description: active.description,
    alternates: {
      canonical,
      languages: {
        fr: `${DOMAINS.fr}${path}`,
        en: `${DOMAINS.en}${path}`,
      },
    },
    openGraph: {
      title: active.title,
      description: active.description,
      url: canonical,
      siteName: "USV Crew Management",
      locale: lang === "en" ? "en_US" : "fr_FR",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: active.title,
      description: active.description,
    },
  };
}
