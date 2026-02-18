# SEO technique pour un site Next.js : le guide complet

Vous avez choisi Next.js pour votre site. Bon choix. Mais est-ce que Google voit votre contenu correctement ? Est-ce que vos pages sont indexées ? Est-ce que votre site charge en moins de 2 secondes sur mobile ?

Le SEO technique, c'est tout ce qui se passe sous le capot pour que les moteurs de recherche comprennent, crawlent et classent vos pages. Et Next.js offre des outils puissants pour ça, à condition de savoir les utiliser.

Ce guide couvre les points techniques du référencement naturel spécifiques à Next.js. On suppose que vous savez ce qu'est un composant React et que vous avez déjà touché à Next.js, mais pas besoin d'être un expert pour suivre.

## Pourquoi Next.js est un bon choix pour le SEO

Les applications React classiques (créées avec Create React App ou Vite) ont un problème historique avec le SEO. Le HTML envoyé au navigateur est quasi-vide : une div racine et un paquet de JavaScript. C'est le navigateur qui construit la page, pas le serveur. Google sait lire du JavaScript depuis 2019, mais il le fait dans un second passage de crawl, plus lent et moins fiable.

Next.js résout ce problème par le rendu côté serveur. Quand Googlebot demande une page, il reçoit du HTML complet avec le contenu, les balises meta, les titres. Pas besoin d'attendre l'exécution du JavaScript.

Mais ce n'est pas automatique. Next.js vous donne les outils, pas le résultat. Il faut encore les configurer correctement.

Quelques chiffres pour situer. Les sites qui passent d'un rendu client pur à du SSR voient en moyenne une amélioration de 30 à 50% de leurs pages indexées dans les premières semaines. Le temps de crawl par page diminue aussi, ce qui permet à Google d'explorer plus de pages sur votre site dans le même budget de crawl.

## Les bases : metadata, sitemap, robots.txt

### La Metadata API de Next.js

Depuis Next.js 13 et l'App Router, la gestion des métadonnées passe par la Metadata API. C'est propre, typé, et intégré au framework.

Dans chaque fichier `layout.tsx` ou `page.tsx`, vous pouvez exporter un objet `metadata` :

```typescript
export const metadata: Metadata = {
  title: 'Création de site web sur-mesure | Vizion Web',
  description: 'Agence de développement web spécialisée React et Next.js. Sites vitrines, applications web et outils métier pour PME.',
  openGraph: {
    title: 'Création de site web sur-mesure',
    description: 'Sites vitrines et applications web pour PME',
    images: ['/og-image.jpg'],
  },
}
```

Pour les pages dynamiques (articles de blog, fiches produit), utilisez `generateMetadata` :

```typescript
export async function generateMetadata({ params }): Promise<Metadata> {
  const article = await getArticle(params.slug)
  return {
    title: article.title,
    description: article.excerpt,
  }
}
```

Points importants à retenir. Chaque page doit avoir un `title` et une `description` uniques. Le titre doit faire entre 50 et 60 caractères, la description entre 140 et 160. Si vous dépassez, Google tronque et ça ne donne pas envie de cliquer.

### Le fichier sitemap.xml

Next.js permet de générer un sitemap dynamique via un fichier `sitemap.ts` dans le dossier `app` :

```typescript
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getAllArticles()

  const articleUrls = articles.map((article) => ({
    url: `https://votresite.fr/blog/${article.slug}`,
    lastModified: article.updatedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: 'https://votresite.fr',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...articleUrls,
  ]
}
```

L'avantage par rapport à un fichier statique ? Le sitemap se met à jour automatiquement quand vous ajoutez du contenu. Pas besoin de plugin, pas besoin de le régénérer manuellement.

### Le fichier robots.txt

Même principe, un fichier `robots.ts` dans le dossier `app` :

```typescript
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/'],
    },
    sitemap: 'https://votresite.fr/sitemap.xml',
  }
}
```

Bloquez les routes que Google n'a pas besoin de crawler : les routes API, les pages d'administration, les pages de connexion. Chaque URL inutile que Google crawle, c'est du budget de crawl gaspillé.

## Rendu serveur vs statique : quel impact sur le SEO ?

Next.js propose plusieurs stratégies de rendu. Le choix a un impact direct sur le SEO.

### SSG (Static Site Generation)

Les pages sont générées au moment du build. Le HTML est prêt avant même qu'un visiteur arrive. C'est la méthode la plus rapide et la plus favorable au SEO : temps de réponse serveur proche de zéro, contenu immédiatement lisible par les bots.

Utilisez SSG pour : les pages qui ne changent pas souvent (accueil, à propos, services, articles de blog).

### SSR (Server-Side Rendering)

Les pages sont générées à chaque requête. Le serveur construit le HTML à la volée. C'est plus lent que le SSG, mais le contenu est toujours à jour.

Utilisez SSR pour : les pages qui dépendent de données en temps réel (résultats de recherche, tableaux de bord, pages personnalisées).

### ISR (Incremental Static Regeneration)

Un compromis entre les deux. Les pages sont générées statiquement, mais se régénèrent automatiquement après un intervalle défini. Vous obtenez la vitesse du statique avec la fraîcheur du dynamique.

```typescript
// Dans un Server Component
export const revalidate = 3600 // régénère toutes les heures
```

Pour un blog ou un site vitrine, la combinaison SSG + ISR est idéale. Vos pages chargent instantanément, et quand vous mettez à jour un contenu, il se propage sans nouveau déploiement.

### Ce que Google préfère

Google ne fait pas de différence entre SSG et SSR tant que le HTML complet arrive rapidement. Ce qui compte, c'est le Time to First Byte (TTFB). Un SSG avec un CDN donne un TTFB de 50 à 100ms. Un SSR sans cache peut monter à 500ms ou plus. Cette différence se ressent dans le classement, surtout sur mobile.

## Structured data avec JSON-LD

Les données structurées aident Google à comprendre le type de contenu de vos pages. Article de blog, fiche produit, FAQ, événement, avis client. Quand Google comprend le contexte, il peut afficher des résultats enrichis (les "rich snippets") qui augmentent votre taux de clic.

En Next.js, la méthode la plus propre est d'injecter du JSON-LD dans vos pages via un composant :

```typescript
export default function ArticlePage({ article }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      '@type': 'Organization',
      name: 'Vizion Web',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>{/* contenu */}</article>
    </>
  )
}
```

Les types de schema les plus utiles pour un site d'entreprise :

- **Organization** : nom, logo, coordonnées, réseaux sociaux
- **LocalBusiness** : si vous avez une adresse physique
- **Article** : pour les pages de blog
- **FAQPage** : pour les sections questions/réponses (ça peut donner des rich snippets très visibles)
- **BreadcrumbList** : pour le fil d'Ariane

Testez toujours vos données structurées avec l'outil de test de Google (Rich Results Test) avant de déployer. Une erreur de syntaxe dans votre JSON-LD et Google ignore tout le bloc.

## Performance et Core Web Vitals

Google utilise trois métriques principales pour évaluer l'expérience utilisateur de votre site. Elles pèsent dans le classement.

### LCP (Largest Contentful Paint)

C'est le temps que met le plus grand élément visible (souvent une image ou un titre) à s'afficher. Google veut un LCP inférieur à 2,5 secondes.

Avec Next.js, utilisez le composant `Image` natif. Il gère automatiquement le lazy loading, le redimensionnement et la conversion en WebP/AVIF :

```tsx
import Image from 'next/image'

<Image
  src="/hero.jpg"
  alt="Description pertinente"
  width={1200}
  height={630}
  priority // pour les images above the fold
/>
```

L'attribut `priority` est crucial pour l'image principale de chaque page. Sans lui, le lazy loading retarde le chargement de l'image hero, ce qui dégrade le LCP.

### INP (Interaction to Next Paint)

Remplaçant du FID depuis mars 2024, l'INP mesure la réactivité globale de la page lors des interactions utilisateur. Google attend un INP inférieur à 200ms.

Les causes fréquentes d'un mauvais INP en Next.js : des handlers d'événements qui bloquent le thread principal, des composants trop lourds qui re-rendent à chaque interaction, et des bibliothèques JavaScript importées sans code splitting.

Deux réflexes : utilisez `dynamic()` pour charger les composants lourds à la demande, et préférez les Server Components quand le composant n'a pas besoin d'interactivité.

### CLS (Cumulative Layout Shift)

Le CLS mesure la stabilité visuelle. Quand une image se charge et pousse le texte vers le bas, c'est un layout shift. Google veut un CLS inférieur à 0,1.

En Next.js, le composant `Image` règle ce problème en réservant l'espace de l'image avant son chargement (grâce aux attributs `width` et `height`). Mais attention aux polices personnalisées. Si votre police web met du temps à charger, le texte "saute" quand elle remplace la police système.

La solution : utilisez `next/font` pour charger vos polices. Il les héberge localement et applique automatiquement `font-display: swap` pour éviter le flash de texte invisible.

```typescript
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
```

## Les pièges à éviter

### Le piège du "tout client"

Utiliser `'use client'` partout parce que c'est plus simple, c'est annuler les bénéfices SEO de Next.js. Les Server Components envoient du HTML pur au navigateur. Les Client Components ajoutent du JavaScript. Plus vous avez de Client Components, plus votre bundle JavaScript grossit, et plus votre page est lente.

La règle : commencez en Server Component. Passez en Client Component uniquement quand vous avez besoin de state, d'effets, ou d'événements utilisateur.

### Les pages dynamiques sans fallback

Si vous avez des pages dynamiques (blog, catalogue) et que vous n'avez pas configuré `generateStaticParams`, Next.js génère les pages à la demande. Le premier visiteur attend que le serveur construise la page. Et si ce premier visiteur est Googlebot, il reçoit une page lente, ce qui n'est pas idéal.

```typescript
export async function generateStaticParams() {
  const articles = await getAllArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}
```

### Les erreurs de canonicalisation

Quand la même page est accessible via plusieurs URLs (`/blog/article`, `/blog/article/`, `/Blog/Article`), Google ne sait pas laquelle indexer. Configurez le `trailingSlash` dans `next.config.js` et ajoutez des balises canonical :

```typescript
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://votresite.fr/blog/mon-article',
  },
}
```

### Oublier les balises alt sur les images

Le composant `Image` de Next.js demande un attribut `alt`, mais rien ne vous empêche de mettre une chaîne vide. Prenez le temps de rédiger des alt descriptifs. C'est bon pour l'accessibilité, bon pour Google Images, et ça prend 10 secondes par image.

### Ne pas monitorer après le déploiement

Votre site peut avoir un score Lighthouse de 100 en local et des Core Web Vitals catastrophiques en production. La différence ? Le trafic réel, les connexions mobiles lentes, les appareils d'entrée de gamme. Utilisez Google Search Console et le rapport Core Web Vitals pour voir les vrais chiffres de vos vrais utilisateurs.

Chez Vizion Web, on développe tous nos sites avec Next.js et on intègre le SEO technique dès la première ligne de code. Pas en fin de projet, pas en option. Si vous voulez un site qui performe sur Google autant que pour vos visiteurs, c'est la base sur laquelle on construit.

## Questions fréquentes

### Est-ce que Next.js est meilleur que WordPress pour le SEO ?

Pas "meilleur" dans l'absolu. WordPress avec un bon thème, les bons plugins (Yoast, WP Rocket) et un hébergement performant peut très bien se référencer. Next.js offre plus de contrôle sur la performance et le rendu, ce qui donne un avantage technique, surtout pour les sites avec beaucoup de pages dynamiques. Le vrai facteur différenciant, c'est la vitesse : un site Next.js bien optimisé charge en moyenne 40 à 60% plus vite qu'un site WordPress équivalent, et Google récompense la vitesse.

### Comment vérifier que Google indexe bien mes pages Next.js ?

Trois outils. Google Search Console vous montre les pages indexées, les erreurs de crawl et les problèmes de couverture. L'outil "Inspection d'URL" vous permet de tester page par page. Et le rapport "Core Web Vitals" vous donne les métriques de performance réelles. Vérifiez aussi en tapant `site:votredomaine.fr` dans Google pour voir combien de pages sont indexées. Si le nombre est très inférieur au nombre de pages de votre site, il y a un problème de crawl ou de rendu.

### Faut-il un plugin SEO avec Next.js comme on en a avec WordPress ?

Non. Next.js intègre nativement tout ce dont vous avez besoin : Metadata API pour les balises title et description, génération de sitemap et robots.txt, composant Image optimisé, gestion des polices. Ce que Yoast fait avec WordPress (et parfois mal), vous le faites directement dans le code avec Next.js. L'avantage, c'est la précision : vous contrôlez chaque balise, chaque page, sans passer par une interface de plugin qui peut entrer en conflit avec d'autres extensions.
