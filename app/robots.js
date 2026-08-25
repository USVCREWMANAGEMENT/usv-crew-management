import { headers } from "next/headers";
import { DOMAINS, langForHost } from "../lib/seo";

export default function robots() {
  const base = DOMAINS[langForHost(headers().get("host"))];
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
  };
}
