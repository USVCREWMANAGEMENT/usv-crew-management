import { pageMetadata } from "../../lib/seo";
import ContactClient from "./ContactClient";

export function generateMetadata() {
  return pageMetadata("/contact", {
    fr: {
      title: "Contact | USV Crew Management",
      description:
        "Parlons de votre besoin de recrutement ou de votre candidature. Intervention dans le monde entier.",
    },
    en: {
      title: "Contact | USV Crew Management",
      description: "Let's talk about your hiring needs or your application. Worldwide reach.",
    },
  });
}

export default function Page() {
  return <ContactClient />;
}
