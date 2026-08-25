import { headers } from "next/headers";
import { DOMAINS, langForHost } from "../lib/seo";

const PATHS = [
  { path: "", priority: 1 },
  { path: "/activites", priority: 0.8 },
  { path: "/employeurs", priority: 0.8 },
  { path: "/ressources", priority: 0.6 },
  { path: "/ressources/referentiel-competences-usv", priority: 0.6 },
  { path: "/a-propos", priority: 0.5 },
  { path: "/contact", priority: 0.5 },
  { path: "/candidature", priority: 0.9 },
];

export default function sitemap() {
  const base = DOMAINS[langForHost(headers().get("host"))];
  const lastModified = new Date();

  return PATHS.map(({ path, priority }) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: "weekly",
    priority,
  }));
}
