import { pageMetadata } from "../../lib/seo";
import RessourcesClient from "./RessourcesClient";

export function generateMetadata() {
  return pageMetadata("/ressources", {
    fr: {
      title: "Ressources — Référentiels et actualités USV | USV Crew Management",
      description:
        "Référentiels de compétences, actualités du secteur USV et guides pour candidats et opérateurs de flotte.",
    },
    en: {
      title: "Resources — USV Frameworks & Industry News",
      description:
        "Competency frameworks, USV industry news, and guides for candidates and fleet operators.",
    },
  });
}

export default function Page() {
  return <RessourcesClient />;
}
