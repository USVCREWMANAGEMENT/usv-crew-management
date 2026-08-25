import { pageMetadata } from "../lib/seo";
import HomeClient from "./HomeClient";

export function generateMetadata() {
  return pageMetadata("", {
    fr: {
      title: "USV Crew Management — Recrutement d'opérateurs et de marins pour flottes USV",
      description:
        "Agence spécialisée dans le recrutement d'opérateurs télépilotes, marins et techniciens pour navires de surface sans équipage (USV). Vivier qualifié, référentiel de compétences, intervention mondiale.",
    },
    en: {
      title: "USV Crew Management — Recruiting USV Operators & Seafarers",
      description:
        "Specialist recruitment agency for remote operators, seafarers and technicians on uncrewed surface vessels (USV). Qualified talent pool, competency framework, worldwide reach.",
    },
  });
}

export default function Page() {
  return <HomeClient />;
}
