# Accessibilité web : obligations légales et bonnes pratiques pour votre site

Votre site est joli. Il charge vite. Le design est moderne. Mais est-ce qu'un utilisateur malvoyant peut lire votre page d'accueil ? Est-ce qu'une personne qui navigue au clavier arrive à remplir votre formulaire de contact ? Si la réponse est "je ne sais pas", vous avez un problème. Et depuis 2025, ce problème peut aussi devenir juridique.

L'accessibilité web, ce n'est pas un sujet réservé aux grandes administrations ou aux sites gouvernementaux. La directive européenne sur l'accessibilité (European Accessibility Act) change la donne pour le secteur privé. Si vous vendez des produits ou services en ligne, vous êtes probablement concerné.

On va voir ensemble ce que dit la loi, qui doit se mettre en conformité, les règles de base à respecter, et pourquoi l'accessibilité est aussi (surtout ?) un avantage business.

## Ce que dit la loi en France et en Europe

### Le RGAA : le référentiel français

Le RGAA (Référentiel Général d'Amélioration de l'Accessibilité) existe depuis 2009 en France. Il s'appuie sur les normes internationales WCAG (Web Content Accessibility Guidelines) et les traduit en critères vérifiables pour les sites web.

La version actuelle, le RGAA 4.1, comprend 106 critères répartis en 13 thématiques : images, cadres, couleurs, multimédia, tableaux, liens, scripts, éléments obligatoires, structuration de l'information, présentation, formulaires, navigation et consultation.

Jusqu'ici, le RGAA s'appliquait principalement aux services publics. L'État, les collectivités territoriales, les établissements publics et les entreprises délégataires de mission de service public devaient rendre leurs sites accessibles. Les sanctions existaient sur le papier (20 000 euros d'amende par an pour les sites non conformes), mais les contrôles restaient rares.

Ce cadre a changé.

### La directive européenne sur l'accessibilité (EAA 2025)

Le 28 juin 2025, l'European Accessibility Act est entré en application dans tous les pays de l'Union européenne. Cette directive étend les obligations d'accessibilité au secteur privé. Plus seulement les administrations, mais aussi les entreprises qui fournissent des services numériques.

Sont concernés : les sites de e-commerce, les services bancaires en ligne, les plateformes de transport, les services de communication électronique, les livres numériques, et plus largement toute interface numérique liée à la vente de produits ou services.

Les sanctions varient selon les pays, mais la France a transposé la directive avec des amendes pouvant atteindre 50 000 euros. Ce n'est plus symbolique.

### Le WCAG : la norme internationale

Derrière le RGAA et l'EAA, il y a le WCAG, maintenu par le W3C. Le niveau visé par la législation est le WCAG 2.1 niveau AA. Ce standard définit quatre principes : le contenu doit être perceptible, utilisable, compréhensible et techniquement fiable.

Concrètement, le WCAG AA demande des choses comme un contraste de couleurs suffisant (ratio de 4.5:1 pour le texte), des alternatives textuelles pour les images, une navigation possible au clavier, et des formulaires correctement étiquetés.

## Qui est concerné exactement ?

La question que tout le monde se pose : "Est-ce que mon entreprise est visée ?"

Voici les catégories directement concernées par l'EAA :

- **E-commerce** : si vous vendez en ligne, votre boutique doit être accessible
- **Services financiers** : banques en ligne, assurances, plateformes de paiement
- **Télécommunications** : opérateurs, services de messagerie
- **Transport** : billetterie en ligne, applications de suivi
- **Médias audiovisuels** : plateformes de streaming, podcasts

Pour les PME de moins de 10 salariés avec un chiffre d'affaires inférieur à 2 millions d'euros, une exemption existe. Mais attention : cette exemption ne couvre pas tous les cas, et elle ne vous protège pas d'une plainte d'un utilisateur. Un client qui ne peut pas utiliser votre site peut vous attaquer sur la base de la discrimination, indépendamment de la directive EAA.

Et même si vous n'êtes pas légalement obligé aujourd'hui, la tendance est claire. Le périmètre s'élargit à chaque révision des textes. Se mettre en conformité maintenant, c'est anticiper plutôt que subir.

## Les 10 règles de base de l'accessibilité web

Pas besoin de devenir expert WCAG pour améliorer significativement l'accessibilité de votre site. Ces dix règles couvrent la majorité des problèmes rencontrés par les utilisateurs.

### 1. Des contrastes de couleurs suffisants

Le texte doit être lisible. Un texte gris clair sur fond blanc, c'est joli sur une maquette Figma, mais c'est illisible pour 15 à 20% de la population. Le ratio minimum est de 4.5:1 pour le texte standard et 3:1 pour les grands titres. Des outils gratuits comme WebAIM Contrast Checker permettent de vérifier en deux secondes.

### 2. Des alternatives textuelles pour chaque image

Chaque image qui porte du sens doit avoir un attribut alt descriptif. Pas "image1.jpg", pas "photo", mais une description de ce que l'image montre. Si l'image est purement décorative, l'alt doit être vide (alt="") pour que les lecteurs d'écran l'ignorent.

### 3. Une navigation complète au clavier

Tous les éléments interactifs (liens, boutons, formulaires, menus) doivent être utilisables avec la touche Tab et la touche Entrée. Beaucoup de sites cassent cette navigation avec des composants JavaScript personnalisés qui ne gèrent pas le focus.

Testez vous-même : débranchez votre souris et essayez de naviguer sur votre site. Si vous restez bloqué quelque part, vos utilisateurs en situation de handicap aussi.

### 4. Une structure de titres logique

Les balises H1, H2, H3 ne sont pas des outils de mise en forme. Elles structurent le contenu de manière hiérarchique. Un utilisateur de lecteur d'écran navigue de titre en titre pour comprendre la page. Si vos titres sautent du H1 au H4 parce que vous trouvez le H4 plus joli, vous cassez cette navigation.

### 5. Des formulaires avec des labels explicites

Chaque champ de formulaire doit être associé à un label visible. Le placeholder ne suffit pas : il disparaît dès que l'utilisateur commence à taper, et certains lecteurs d'écran ne le lisent pas. Un label clair ("Votre adresse email"), associé au champ avec l'attribut for, règle le problème.

### 6. Des vidéos sous-titrées

12% de la population française a des difficultés auditives. Si vous publiez des vidéos sur votre site, les sous-titres ne sont pas un bonus. YouTube génère des sous-titres automatiques, mais leur qualité est médiocre. Investissez 30 minutes pour corriger les sous-titres de chaque vidéo.

### 7. Un site qui fonctionne à 200% de zoom

Quand un utilisateur agrandit le texte à 200% dans son navigateur, votre site ne doit pas casser. Pas de texte qui déborde, pas de boutons qui disparaissent, pas de colonnes qui se chevauchent. Si votre site est responsive et bien codé, ce point est souvent déjà géré.

### 8. Des liens explicites

"Cliquez ici" ne veut rien dire pour un lecteur d'écran qui lit les liens hors contexte. Préférez "Télécharger notre guide tarifaire" ou "Voir les détails de l'offre Pro". L'utilisateur doit comprendre où le mène le lien sans lire le texte autour.

### 9. Des messages d'erreur clairs

Quand un formulaire est mal rempli, l'utilisateur doit comprendre ce qui ne va pas et où. Un message générique "Erreur dans le formulaire" en haut de page ne suffit pas. Chaque champ en erreur doit avoir son propre message, positionné à côté du champ.

### 10. Pas d'information transmise uniquement par la couleur

Si vous indiquez qu'un champ est en erreur uniquement en le colorant en rouge, les daltoniens (8% des hommes en France) ne verront pas la différence. Ajoutez un pictogramme, un texte, ou un changement de forme en complément de la couleur.

## L'impact business de l'accessibilité

Soyons francs : si l'accessibilité n'était qu'une obligation légale, beaucoup d'entreprises la traiteraient comme une corvée. Mais les chiffres racontent une autre histoire.

### Un marché de 12 millions de personnes en France

En France, 12 millions de personnes sont en situation de handicap. Parmi elles, 80% ont un handicap invisible (troubles cognitifs, déficiences visuelles légères, troubles de l'attention, dyslexie). Ces personnes naviguent sur le web tous les jours. Si votre site leur pose problème, elles vont chez un concurrent dont le site est plus simple à utiliser. C'est aussi bête que ça.

À l'échelle européenne, on parle de 87 millions de personnes en situation de handicap. Un marché que vous excluez si votre site n'est pas accessible.

### Un meilleur référencement naturel

Google ne sait pas "voir" votre site. Son robot navigue dans le code, comme un lecteur d'écran. Les pratiques d'accessibilité recoupent largement les bonnes pratiques SEO : structure de titres cohérente, alternatives textuelles sur les images, contenu lisible et bien organisé, temps de chargement optimisé.

Une étude de Semrush en 2024 a montré que les sites conformes au WCAG AA se positionnaient en moyenne 12% mieux sur les requêtes concurrentielles que les sites non conformes. Ce n'est pas un hasard.

### Une meilleure expérience pour tout le monde

Les améliorations d'accessibilité profitent à tous vos utilisateurs, pas seulement à ceux en situation de handicap. Des contrastes suffisants, ça aide aussi la personne qui consulte votre site en plein soleil sur son téléphone. Les sous-titres, c'est utile pour celui qui regarde une vidéo dans le métro sans écouteurs. Les formulaires bien étiquetés réduisent les erreurs de saisie pour tout le monde.

On a eu un client qui vendait des compléments alimentaires en ligne. Après avoir amélioré l'accessibilité de son tunnel de commande (labels de formulaires, contrastes, navigation clavier), son taux de conversion est passé de 2.1% à 2.9%. Pas parce qu'il a touché les personnes handicapées, mais parce que le parcours d'achat est devenu plus clair pour tout le monde.

### Une image de marque positive

Afficher une page d'accessibilité sur votre site, mentionner votre démarche dans votre communication, c'est un signal de sérieux. Les acheteurs B2B, les donneurs d'ordre publics et les grands comptes regardent de plus en plus ces critères dans leurs appels d'offres.

## Comment auditer l'accessibilité de votre site

Vous ne savez pas où vous en êtes ? Voici une méthode en trois étapes.

### Étape 1 : les outils automatiques

Installez l'extension WAVE ou axe DevTools sur votre navigateur. Lancez un scan sur votre page d'accueil et sur vos trois ou quatre pages principales. Ces outils détectent environ 30% des problèmes d'accessibilité : contrastes insuffisants, images sans alt, labels manquants, structure de titres cassée.

C'est un bon point de départ, mais ça ne suffit pas.

### Étape 2 : les tests manuels

Testez la navigation au clavier. Essayez de remplir un formulaire sans souris. Activez le lecteur d'écran de votre système (VoiceOver sur Mac, Narrator sur Windows) et essayez de comprendre votre page en n'écoutant que la lecture audio. C'est souvent là qu'on prend conscience de l'ampleur du travail.

### Étape 3 : l'audit professionnel

Pour une conformité RGAA complète, un audit professionnel est nécessaire. Un expert teste les 106 critères du RGAA sur un échantillon de pages, rédige un rapport détaillé, et vous donne un taux de conformité. Le coût varie entre 3 000 et 8 000 euros selon la taille du site.

Chez Vizion Web, quand on construit un site, on intègre les critères d'accessibilité dès la conception. C'est beaucoup moins coûteux que de rattraper après coup un site qui n'a pas été pensé pour ça. Un formulaire de contact bien codé dès le départ prend 10 minutes de plus. Reprendre un formulaire existant pour le rendre accessible peut prendre une journée.

## Questions fréquentes

### Mon site n'est pas du e-commerce, est-ce que je suis quand même concerné ?

La directive EAA cible principalement les services numériques liés au commerce en ligne. Si votre site est un site vitrine sans vente en ligne, vous n'êtes pas dans le périmètre direct de l'EAA. En revanche, le RGAA s'applique si vous êtes une entité publique ou si vous fournissez un service public. Et dans tous les cas, un utilisateur peut porter plainte pour discrimination si votre site lui est inaccessible. Au-delà du cadre légal, rendre votre site accessible est une bonne pratique qui profite à votre référencement et à votre taux de conversion.

### Rendre mon site accessible, ça coûte combien ?

Ça dépend du point de départ. Si votre site est bien codé, avec un framework moderne et un code propre, les corrections d'accessibilité coûtent entre 1 500 et 5 000 euros. Si le site a été construit avec un page builder WordPress sans aucune attention à l'accessibilité, les corrections peuvent coûter plus cher que de refaire le site. C'est pour ça qu'on recommande d'intégrer l'accessibilité dès la création : le surcoût est d'environ 10 à 15% du budget initial, alors que la mise en conformité après coup peut représenter 30 à 50% du coût du site.

### Les overlays d'accessibilité (widgets qui s'ajoutent au site) sont-ils une solution ?

Non. Les overlays comme AccessiBe, UserWay ou AudioEye ne rendent pas votre site conforme. Ils ajoutent une couche cosmétique par-dessus un site inaccessible, mais ils ne corrigent pas les problèmes de fond (structure du code, navigation au clavier, labels de formulaires). Pire, certains de ces outils créent de nouveaux problèmes d'accessibilité. La National Federation of the Blind aux États-Unis a d'ailleurs pris position publiquement contre ces solutions. La seule approche efficace, c'est de corriger le code du site lui-même.