# USV Crew Management — Site web

Site vitrine + formulaire de candidature pour USV Crew Management, agence de placement
d'opérateurs pour véhicules de surface sans équipage (USV).

## Stack
- Next.js 14 (App Router), export statique (`output: "export"`)
- Tailwind CSS
- Lucide React (icônes)
- Backend candidatures : Google Apps Script → Google Sheets + Google Drive (aucune base de données)

## Identité visuelle "carte marine"
- Fond : `#FAFBFC` · Encre : `#0B2239` · Accent : `#F4530B` (orange signal) · Secondaire : `#0E7490` (teal ligne de sonde)
- Typo : Space Grotesk (display, classe `font-display`), Inter/système (texte), IBM Plex Mono (annotations, classe `font-chart`)
- Motifs : grille de carte (`chart-grid`), route animée entre waypoints (`route-animated`), coordonnées de Marseille
- Tout est défini dans `app/globals.css`

## Structure
- `app/page.jsx` — accueil (hero HeroChart = signature visuelle)
- `app/activites`, `app/employeurs`, `app/a-propos`, `app/contact`
- `app/ressources` + `app/ressources/referentiel-competences-usv`
- `app/candidature` — formulaire multi-étapes relié à Google Sheets
- `components/` — Nav, Footer, HeroChart, ChartEyebrow, VideoPlaceholder

## Backend candidatures (déjà en place)
- L'URL du script est dans `app/candidature/CandidatureForm.jsx` (`APPS_SCRIPT_URL`)
- Le script tourne sur le compte Google usvcrewmanagement@gmail.com
- Sheet : "USV Crew Management - Candidatures" (onglet "Candidatures")
- Les CV sont déposés dans le dossier Drive "Candidatures - CV"
- Envoi en `mode: "no-cors"` : les données partent mais la réponse n'est pas lisible côté navigateur (limite Apps Script) — le succès affiché est optimiste
- ⚠️ Si le code du script Google est modifié, il faut REDÉPLOYER (Gérer les déploiements > Modifier > Nouvelle version), pas seulement sauvegarder

## TODO connus
- [ ] Intégrer les vraies vidéos (2 emplacements VideoPlaceholder : accueil + activités)
- [ ] Brancher le formulaire /contact sur le même circuit Google Sheets (actuellement mailto)
- [ ] Modifs design demandées par Adel (à préciser)
- [ ] Déploiement : Netlify (glisser-déposer `out/` ou brancher le repo), domaine usvcrewmanagement.com + .fr (OVH, commande n°256494222)
- [ ] Redirection email career@/contact@ (OVH, gratuite) ou Google Workspace plus tard

## Commandes
```bash
npm install
npm run dev    # dev local
npm run build  # export statique dans out/
```
