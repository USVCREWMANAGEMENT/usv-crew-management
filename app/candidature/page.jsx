import { pageMetadata } from "../../lib/seo";
import CandidatureForm from "./CandidatureForm";

export function generateMetadata() {
  return pageMetadata("/candidature", {
    fr: {
      title: "Déposer mon profil | USV Crew Management",
      description:
        "Rejoignez le vivier USV Crew Management : opérateurs télépilotes, marins STCW, techniciens. Postulez en quelques minutes.",
    },
    en: {
      title: "Submit My Profile | USV Crew Management",
      description:
        "Join the USV Crew Management talent pool: remote operators, STCW seafarers, technicians. Apply in a few minutes.",
    },
  });
}

export default function CandidaturePage() {
  return <CandidatureForm />;
}
