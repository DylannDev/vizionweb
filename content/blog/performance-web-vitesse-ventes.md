# Performance web : pourquoi la vitesse de votre site impacte vos ventes

Votre site met 4 secondes à charger. Vous ne le savez peut-être pas, parce que vous le consultez depuis votre Mac avec la fibre. Mais votre prospect, lui, est sur son téléphone dans le métro avec une 4G capricieuse. Il a cliqué sur votre lien Google, il a vu un écran blanc pendant 3 secondes, et il est parti chez votre concurrent. Vous n'avez jamais su qu'il existait.

La vitesse d'un site web n'est pas un sujet technique réservé aux développeurs. C'est un sujet commercial. Chaque seconde de chargement en trop, c'est du chiffre d'affaires qui s'évapore. Et ce n'est pas une intuition : les chiffres le prouvent.

## Chaque seconde compte : les chiffres

Amazon a calculé qu'une seconde de latence supplémentaire sur leur site leur coûterait 1,6 milliard de dollars de ventes par an. Google a mesuré qu'un temps de chargement passant de 0,4 à 0,9 seconde réduisait le trafic de 20%. Walmart a observé que chaque seconde de gain en vitesse augmentait les conversions de 2%.

Ces entreprises ont des équipes entières dédiées à la performance. Vous n'avez pas besoin d'une équipe de 50 ingénieurs, mais les proportions s'appliquent aussi à votre échelle.

Quelques données qui parlent d'elles-mêmes :

- **53% des visiteurs mobiles** quittent un site qui met plus de 3 secondes à charger (source : Google, 2023)
- Un site qui passe de 1 à 3 secondes de chargement voit son taux de rebond augmenter de **32%**
- De 1 à 5 secondes, le taux de rebond explose à **+90%**
- Les pages qui chargent en 2 secondes ont un taux de conversion moyen de **3,05%**, contre **1,68%** pour celles qui chargent en 4 secondes

Prenons un exemple concret. Votre site e-commerce génère 10 000 visiteurs par mois et convertit à 2% avec un panier moyen de 150 euros. Ça fait 30 000 euros de CA mensuel. Si votre site est lent et que vous perdez 25% de ces visiteurs avant même qu'ils voient vos produits, vous laissez 7 500 euros sur la table chaque mois. 90 000 euros par an.

Est-ce que la performance est un luxe ? Pas vraiment.

## Ce que Google mesure : les Core Web Vitals

Depuis 2021, Google utilise la vitesse de votre site comme critère de classement dans ses résultats de recherche. Pas un critère mineur ou accessoire. Un critère officiel, mesuré, et public. Ces mesures portent un nom : les Core Web Vitals.

Trois métriques. Pas besoin d'un diplôme d'ingénieur pour les comprendre.

### LCP (Largest Contentful Paint) : la vitesse d'affichage

Le LCP mesure le temps nécessaire pour que le plus gros élément visible de la page s'affiche. Souvent une image, une bannière ou un bloc de texte principal. C'est ce que le visiteur perçoit comme "la page est chargée".

- **Bon** : moins de 2,5 secondes
- **À améliorer** : entre 2,5 et 4 secondes
- **Mauvais** : plus de 4 secondes

Si votre page d'accueil affiche une grande image de héros non optimisée de 3 Mo, votre LCP sera mauvais. Le visiteur voit un rectangle gris pendant que l'image se télécharge.

### INP (Interaction to Next Paint) : la réactivité

Le INP mesure le délai entre le moment où un visiteur clique (ou tape) sur quelque chose et le moment où la page réagit. Vous avez déjà cliqué sur un bouton "Ajouter au panier" sans que rien ne se passe pendant 2 secondes ? C'est un mauvais INP.

- **Bon** : moins de 200 millisecondes
- **À améliorer** : entre 200 et 500 millisecondes
- **Mauvais** : plus de 500 millisecondes

### CLS (Cumulative Layout Shift) : la stabilité visuelle

Le CLS mesure les déplacements inattendus des éléments pendant le chargement. Vous lisez un article, une pub se charge au-dessus et le texte saute vers le bas. Ou vous cliquez sur un bouton, mais une image se charge juste avant et le bouton se décale : vous cliquez sur le mauvais lien. Irritant.

- **Bon** : score inférieur à 0,1
- **À améliorer** : entre 0,1 et 0,25
- **Mauvais** : supérieur à 0,25

Google ne se contente pas de mesurer ces métriques en laboratoire. Il les collecte auprès des vrais utilisateurs de votre site (via Chrome). Si vos visiteurs ont une mauvaise expérience, Google le sait, et votre positionnement en souffre.

## Les causes courantes de lenteur

Un site lent n'est pas une fatalité. Dans 90% des cas, la lenteur vient de quelques problèmes récurrents et tout à fait corrigeables.

### Des images trop lourdes

C'est la cause numéro un. Une photo prise avec un iPhone pèse entre 3 et 8 Mo. Si vous en affichez 5 sur votre page d'accueil sans les optimiser, c'est 20 Mo à télécharger. Sur une connexion mobile, ça prend une éternité.

La solution est simple : convertir les images en format WebP ou AVIF, les redimensionner à la taille d'affichage réelle (pas besoin d'une image de 4000 pixels de large pour un espace de 800 pixels), et utiliser le chargement différé (lazy loading) pour les images hors écran.

### Trop de JavaScript

Les sites WordPress avec 15 plugins chargent des dizaines de fichiers JavaScript, dont la moitié ne servent à rien sur la page affichée. Un slider, un chatbot, un outil d'analytics, un pixel Facebook, un script de cookies, un outil de heatmap... Chaque script ajoute du poids et du temps de traitement.

Un site vitrine n'a pas besoin de 2 Mo de JavaScript. Un site bien construit en Next.js charge entre 100 et 300 Ko de JavaScript, et uniquement ce qui est nécessaire pour la page en cours.

### Un hébergement bas de gamme

Votre hébergement à 3 euros par mois mutualisé chez OVH partage un serveur avec 200 autres sites. Quand le site de votre voisin de serveur fait un pic de trafic, c'est votre site qui ralentit. Le temps de réponse du serveur (TTFB) est souvent le premier goulot d'étranglement.

Passer sur un hébergement dédié ou un service comme Vercel, Netlify ou un VPS correctement configuré peut diviser le temps de réponse par 3 ou 4. Pour 15 à 50 euros par mois au lieu de 3.

### Pas de mise en cache

La mise en cache permet de stocker une version pré-générée de vos pages pour ne pas les reconstruire à chaque visite. Sans cache, chaque visiteur demande au serveur de tout recalculer : requêtes à la base de données, génération du HTML, compilation du CSS. Avec un cache bien configuré, la page est servie en quelques millisecondes.

### Des polices web mal chargées

Charger 4 variantes de Google Fonts (regular, bold, italic, bold italic) en bloquant l'affichage de la page, c'est ajouter 500 ms à 1 seconde de délai. Utilisez le paramètre `font-display: swap` et ne chargez que les variantes dont vous avez réellement besoin.

## Comment tester la vitesse de votre site

Pas besoin d'outils payants. Google met à disposition des outils gratuits et fiables.

### PageSpeed Insights (pagespeed.web.dev)

L'outil officiel de Google. Entrez votre URL, et vous obtenez un score de 0 à 100 pour mobile et desktop, avec le détail de chaque Core Web Vital et des recommandations d'amélioration. Visez un score supérieur à 90 sur mobile.

### GTmetrix (gtmetrix.com)

Plus détaillé que PageSpeed. GTmetrix montre un "waterfall" (diagramme en cascade) qui visualise chaque ressource chargée par la page et le temps que chacune prend. C'est utile pour identifier le fichier ou le script qui bloque tout.

### L'onglet Performance de Chrome DevTools

Ouvrez votre site dans Chrome, appuyez sur F12, allez dans l'onglet "Performance", et lancez un enregistrement. Vous verrez exactement ce que le navigateur fait pendant le chargement : parsing HTML, téléchargement des images, exécution du JavaScript. C'est l'outil le plus technique mais aussi le plus précis.

### Le test du terrain

Au-delà des outils, faites le test le plus simple : ouvrez votre site sur votre téléphone, en 4G, et comptez les secondes. Demandez à quelqu'un qui ne l'a jamais visité de faire la même chose. Si la personne grimace ou soupire, vous avez votre réponse.

## Les quick wins pour gagner en performance

Vous n'avez pas forcément besoin de refondre tout votre site. Certaines actions rapides peuvent produire des résultats importants.

### 1. Optimiser les images

Convertissez toutes vos images en WebP. Redimensionnez-les à la taille d'affichage. Activez le lazy loading. Sur WordPress, le plugin Imagify ou ShortPixel fait ça automatiquement. Sur un site sur-mesure, le composant `Image` de Next.js gère tout nativement. Gain potentiel : 1 à 3 secondes.

### 2. Supprimer les scripts inutiles

Faites l'inventaire de tous les scripts chargés sur votre site. Ce slider que personne n'utilise ? Supprimez-le. Le plugin de partage social avec 0 clics par mois ? Supprimez-le. Chaque script retiré allège la page. Sur WordPress, le plugin Query Monitor permet de voir quels scripts sont chargés et par quel plugin.

### 3. Activer la compression et le cache

La compression Gzip ou Brotli réduit la taille des fichiers transférés de 60 à 80%. Le cache navigateur évite de re-télécharger les fichiers qui n'ont pas changé. Ces deux réglages se font côté serveur ou via un plugin comme WP Rocket (sur WordPress).

### 4. Passer à un meilleur hébergement

Si votre serveur met plus de 600 ms à répondre (visible dans PageSpeed sous "Time to First Byte"), l'hébergement est le problème. Un hébergement performant (Vercel pour Next.js, Kinsta ou WP Engine pour WordPress) fait une vraie différence, pour 20 à 50 euros par mois.

### 5. Utiliser un CDN

Un CDN (Content Delivery Network) copie vos fichiers sur des serveurs répartis dans le monde. Votre visiteur à Lyon télécharge les fichiers depuis un serveur à Paris, pas depuis un datacenter à New York. Cloudflare propose une offre gratuite qui suffit pour la plupart des sites.

### Et si rien ne suffit ?

Parfois, les quick wins ne suffisent pas. Un site construit sur une base technique fragile (WordPress avec 25 plugins, un thème acheté sur ThemeForest en 2019, un hébergement mutualisé) a un plafond de performance. On peut l'optimiser, mais il ne sera jamais rapide. Dans ce cas, la refonte sur une base moderne (Next.js, par exemple) est l'investissement le plus rentable sur le long terme.

Chez Vizion Web, on développe des sites en React et Next.js qui atteignent systématiquement des scores PageSpeed supérieurs à 95. Pas parce qu'on est des magiciens, mais parce que la base technique le permet. Quand on part d'une feuille blanche propre, on ne traîne pas 15 plugins derrière soi.

## Questions fréquentes

### Un site lent perd-il vraiment des positions sur Google ?

Oui. Depuis la mise à jour "Page Experience" de 2021, les Core Web Vitals sont un facteur de classement officiel de Google. Un site avec de mauvais scores ne sera pas automatiquement relégué en page 10, mais à contenu égal, un site rapide sera favorisé par rapport à un site lent. Et l'écart se creuse sur mobile, où Google applique l'indexation mobile-first.

### Quel score PageSpeed faut-il viser ?

Visez 90 ou plus sur mobile. C'est le seuil à partir duquel Google considère que la performance est bonne. Un score entre 50 et 89 est "à améliorer", et en dessous de 50, c'est considéré comme mauvais. Attention : le score mobile est presque toujours inférieur au score desktop. Si vous avez 95 sur desktop et 45 sur mobile, c'est le score mobile qui compte, parce que Google indexe la version mobile de votre site en priorité.

### La performance, c'est seulement un problème WordPress ?

Non. Un site Webflow mal construit peut être lent. Un site Next.js mal développé aussi. La technologie aide, mais ne fait pas tout. Un WordPress bien optimisé avec un hébergeur premium peut atteindre 85-90 sur PageSpeed. Un Next.js bâclé peut descendre à 60. Ce qui compte, c'est la compétence de la personne qui construit et maintient le site, quelle que soit la technologie utilisée.