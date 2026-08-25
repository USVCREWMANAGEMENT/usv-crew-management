import { pageMetadata } from "../../../lib/seo";
import ReferentielClient from "./ReferentielClient";

export function generateMetadata() {
  return pageMetadata("/ressources/referentiel-competences-usv", {
    fr: {
      title: "Référentiel de compétences opérateur USV | USV Crew Management",
      description:
        "Le cadre structuré des compétences, niveaux de qualification et passerelles STCW pour les métiers d'opérateur de navire de surface sans équipage.",
    },
    en: {
      title: "USV Operator Competency Framework",
      description:
        "The structured framework of skills, qualification levels and STCW bridges for uncrewed surface vessel operator roles.",
    },
  });
}

export default function Page() {
  return <ReferentielClient />;
}
