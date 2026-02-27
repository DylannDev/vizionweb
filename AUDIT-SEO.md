# Rapport d'Audit SEO - Vizion Web

## Sommaire Exécutif

**Score SEO Global : 38/100**

Le site vizionweb.fr repose sur de bonnes fondations techniques (Next.js, SSG, sitemap dynamique), mais souffre d'un **problème majeur de duplication de contenu** sur les 19 pages locales qui constitue un risque de pénalité Google. L'absence de blog, de contenu unique par ville, et de schémas structurés actifs limite fortement le potentiel de visibilité organique.

---

## 1. Architecture du Site

### Pages existantes (22 URLs)

| Route | Type | Contenu unique |
|-------|------|----------------|
| `/` | Homepage | Oui |
| `/paris` | SEO local | Non (template identique) |
| `/lyon` | SEO local | Non |
| `/marseille` | SEO local | Non |
| `/toulouse` | SEO local | Non |
| `/bordeaux` | SEO local | Non |
| `/lille` | SEO local | Non |
| `/nantes` | SEO local | Non |
| `/nice` | SEO local | Non |
| `/strasbourg` | SEO local | Non |
| `/rennes` | SEO local | Non |
| `/montpellier` | SEO local | Non |
| `/pointe-a-pitre` | SEO local | Non |
| `/fort-de-france` | SEO local | Non |
| `/cayenne` | SEO local | Non |
| `/saint-denis` | SEO local | Non |
| `/guadeloupe` | SEO local | Non |
| `/martinique` | SEO local | Non |
| `/guyane` | SEO local | Non |
| `/la-reunion` | SEO local | Non |
| `/mentions-legales` | Legal | Oui |
| `/politique-confidentialite` | Legal | Oui |

### Localités existantes à conserver

**15 villes :** Paris, Lyon, Marseille, Toulouse, Bordeaux, Lille, Nantes, Nice, Strasbourg, Rennes, Montpellier, Pointe-à-Pitre, Fort-de-France, Cayenne, Saint-Denis

**4 territoires :** Guadeloupe, Martinique, Guyane, La Réunion

---

## 2. Points Forts Actuels

### Technique (ce qui fonctionne bien)

| Élément | Score | Détail |
|---------|-------|--------|
| SSG / Pré-rendu statique | 9/10 | `generateStaticParams()` pour les 19 pages locales |
| Sitemap dynamique | 8/10 | `app/sitemap.ts` incluant toutes les routes, priorités différenciées |
| Robots.txt | 8/10 | Bloque `/api/` et `/admin/`, référence le sitemap |
| Chargement des polices | 9/10 | `display: "swap"` sur Geist et Inter Tight |
| Images optimisées | 7/10 | `next/image` avec lazy loading, quality=80, sizes responsives |
| Accessibilité | 7/10 | `aria-label`, `aria-hidden`, HTML sémantique, `lang="fr"` |
| FAQ Schema JSON-LD | 8/10 | Implémenté et actif avec 8 questions structurées |
| HTTPS & sécurité | 8/10 | Site servi en HTTPS |

### Contenu

- **FAQ bien rédigée** : 8 questions répondant aux vraies objections clients (prix, délais, outils, process)
- **Témoignages réels** : 9 témoignages clients nommés avec rôles et photos
- **Proposition de valeur claire** : H1 explicite, offres tarifées transparentes
- **CTA bien placés** : Boutons d'appel et de prise de RDV (Cal.com)

---

## 3. Faiblesses Critiques

### 3.1. DUPLICATION DE CONTENU MASSIVE (Impact : CRITIQUE)

**Problème** : Les 19 pages locales (`/[slug]/page.tsx`) utilisent le composant `<HomeSection>` identique à la homepage. Seuls le H1 et la meta description changent (insertion du nom de ville).

```tsx
// app/[slug]/page.tsx - ligne 49
return <HomeSection locationName={locationName} preposition={preposition} />;
```

**Contenu identique à 95%+ sur les 20 pages :**
- Mêmes 6 services (textes identiques)
- Mêmes 4 réalisations portfolio
- Mêmes 9 témoignages
- Mêmes 4 offres tarifaires
- Mêmes 8 FAQ
- Même processus en 4 étapes

**Risque Google** : Duplication massive = pages thin content pouvant entraîner une pénalité algorithmique ou un filtre de déduplications. Google n'indexera probablement qu'une seule version.

**Priorité** : P0 - À corriger en premier

---

### 3.2. SCHÉMAS STRUCTURÉS DÉSACTIVÉS (Impact : ÉLEVÉ)

**Problème** : Les schémas Organization et Service sont commentés dans `app/page.tsx` (lignes 20-66).

```tsx
{/* <Script id="service-jsonld" ... > */}
{/* <Script id="org-jsonld" ... > */}
```

**Impact** : Pas de Knowledge Panel possible, pas de rich snippets pour les services, pas d'identification d'entreprise par Google.

**Schémas manquants** :
- `LocalBusiness` (pour chaque page ville)
- `BreadcrumbList` (navigation fil d'Ariane)
- `WebSite` + `SearchAction`
- `AggregateRating` (le bandeau "9.2/10 satisfaction" n'est pas structuré)

---

### 3.3. PAS DE BLOG / CONTENU ÉDITORIAL (Impact : ÉLEVÉ)

**Problème** : Zéro contenu informatif, zéro articles, zéro pages de ressources. Le site n'a que des pages commerciales.

**Conséquence** : Aucune chance de se positionner sur des requêtes informationnelles ("comment créer un site web", "combien coûte une application", etc.) qui représentent 80%+ du volume de recherche dans la niche.

---

### 3.4. META DESCRIPTION AVEC FAUTE DE GRAMMAIRE (Impact : MOYEN)

**Fichier** : `app/layout.tsx` ligne 22

```
"L'agence Vizion Web est spécialisé dans la création..."
```

Devrait être **"spécialisée"** (accord féminin avec "agence").

---

### 3.5. PAS DE BALISES CANONICAL EXPLICITES (Impact : MOYEN)

Les pages locales n'ont pas de `<link rel="canonical">` explicite. Avec 20 pages au contenu quasi-identique, c'est un signal de confusion pour Google.

---

### 3.6. IMAGE OG = LOGO SVG (Impact : MOYEN)

```tsx
// layout.tsx ligne 33
url: "https://vizionweb.fr/logo.svg",
width: 1200,
height: 630,
```

Un SVG n'est pas idéal comme image OpenGraph. La plupart des plateformes sociales requièrent un PNG/JPG. L'image devrait être un visuel marketing de 1200x630px.

---

### 3.7. ALT TEXT GÉNÉRIQUES SUR LES ILLUSTRATIONS (Impact : FAIBLE)

Certaines illustrations utilisent `alt="Image"` ou `alt="Cursor"` au lieu de descriptions pertinentes.

---

### 3.8. HIÉRARCHIE DES TITRES CASSÉE (Impact : FAIBLE)

- Section Pricing : un `<h4>` apparaît sans `<h3>` parent (saut de niveau)
- FAQ : les questions dans l'accordéon ne sont pas des headings sémantiques (juste des triggers Radix)

---

### 3.9. PAS DE TRACKING ANALYTICS (Impact : MOYEN)

Aucun Google Analytics, aucun tag de vérification Search Console détecté. Impossible de mesurer le trafic organique ou d'identifier les problèmes d'indexation.

---

## 4. Opportunités Manquées

| Opportunité | Potentiel | Effort |
|-------------|-----------|--------|
| Blog avec articles ciblant des requêtes longue traîne | Très élevé | Élevé |
| Contenu unique par ville (données locales, cas clients, zones d'activité) | Élevé | Moyen |
| Activation des schémas Organization + Service | Élevé | Faible |
| Schéma LocalBusiness par ville | Élevé | Moyen |
| Fil d'Ariane (breadcrumbs) sur pages locales | Moyen | Faible |
| Pages de comparaison (Next.js vs WordPress, etc.) | Élevé | Moyen |
| FAQ enrichies par ville | Moyen | Moyen |
| Page glossaire (termes SaaS, landing page, etc.) | Moyen | Moyen |
| Témoignages schémas (Review) | Faible | Faible |
| Image OG dédiée (PNG 1200x630) | Faible | Faible |

---

## 5. Score SEO Détaillé

| Catégorie | Score | Poids | Justification |
|-----------|-------|-------|---------------|
| **Crawlability & Indexation** | 7/10 | 20% | Sitemap OK, robots OK, mais pas de canonical, pas de breadcrumbs |
| **Technique** | 7/10 | 20% | SSG, fonts swap, images optimisées, mais schémas désactivés, pas de tracking |
| **On-Page** | 3/10 | 25% | Duplication massive sur 19 pages, faute meta, hiérarchie cassée, alt génériques |
| **Contenu** | 2/10 | 25% | Zéro blog, zéro contenu informatif, pages locales sans contenu unique |
| **Autorité & Liens** | 3/10 | 10% | Pas de contenu linkable, pas de backlinks détectables via le code |

### Calcul

`(7×0.20) + (7×0.20) + (3×0.25) + (2×0.25) + (3×0.10) = 1.4 + 1.4 + 0.75 + 0.5 + 0.3 = 4.35 /10`

**Score final : 43/100** *(ajusté à 38/100 avec malus duplication)*

Le malus de -5 points est appliqué car la duplication de contenu sur 19 pages est un risque actif de pénalité, pas juste une opportunité manquée.

---

## 6. Plan d'Action Prioritaire

### Corrections immédiates (Semaine 1)
1. Activer les schémas Organization + Service (décommenter dans `page.tsx`)
2. Corriger "spécialisé" en "spécialisée" dans `layout.tsx`
3. Ajouter des balises canonical explicites sur les pages locales
4. Remplacer l'image OG SVG par un PNG 1200x630

### Corrections structurelles (Semaines 2-4)
5. Refondre les pages locales avec du contenu unique par ville (Étape 2)
6. Ajouter les schémas LocalBusiness par ville
7. Implémenter les breadcrumbs
8. Configurer Google Analytics + Search Console

### Croissance organique (Mois 2+)
9. Créer la section blog (Étape 3)
10. Publier les 5 premiers articles P1
11. Mettre en place un calendrier éditorial
