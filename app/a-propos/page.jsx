import { pageMetadata } from "../../lib/seo";
import AProposClient from "./AProposClient";

export function generateMetadata() {
  return pageMetadata("/a-propos", {
    fr: {
      title: "À propos — Une agence spécialisée USV | USV Crew Management",
      description:
        "USV Crew Management structure le recrutement pour les navires de surface sans équipage : double expertise maritime et robotique navale.",
    },
    en: {
      title: "About Us — A Specialist USV Agency",
      description:
        "USV Crew Management structures recruitment for uncrewed surface vessels: dual expertise in maritime careers and marine robotics.",
    },
  });
}

export default function Page() {
  return <AProposClient />;
}
