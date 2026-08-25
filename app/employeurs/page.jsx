import { pageMetadata } from "../../lib/seo";
import EmployeursClient from "./EmployeursClient";

export function generateMetadata() {
  return pageMetadata("/employeurs", {
    fr: {
      title: "Pour les employeurs — Recruter des opérateurs USV qualifiés | USV Crew Management",
      description:
        "Recrutez des opérateurs, marins et techniciens qualifiés pour votre flotte USV sans construire votre vivier de zéro. Défense, hydrographie, éolien offshore.",
    },
    en: {
      title: "For Employers — Hire Qualified USV Operators",
      description:
        "Hire qualified operators, seafarers and technicians for your USV fleet without building a talent pool from scratch. Defence, hydrographic survey, offshore wind.",
    },
  });
}

export default function Page() {
  return <EmployeursClient />;
}
