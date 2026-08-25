import { pageMetadata } from "../../lib/seo";
import ActivitesClient from "./ActivitesClient";

export function generateMetadata() {
  return pageMetadata("/activites", {
    fr: {
      title: "Nos activités — Placement d'équipage, référentiel USV, conseil | USV Crew Management",
      description:
        "Trois activités : placement d'équipage USV, référentiel de compétences opérateur, conseil et audit pour les flottes de navires sans équipage.",
    },
    en: {
      title: "What We Do — USV Crew Placement, Competency Framework, Consulting",
      description:
        "Three services: USV crew placement, operator competency framework, and consulting/audit for uncrewed surface vessel fleets.",
    },
  });
}

export default function Page() {
  return <ActivitesClient />;
}
