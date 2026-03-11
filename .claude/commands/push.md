Commit et push les changements en cours.

Message optionnel : $ARGUMENTS

Instructions :
1. `git status` pour voir les fichiers modifiés et non trackés
2. `git diff` pour comprendre les changements
3. `git log --oneline -5` pour suivre le style des commits existants
4. Stage les fichiers pertinents (pas .claude/settings.local.json ni les fichiers sensibles)
5. Crée un ou plusieurs commits logiques avec des messages clairs et concis. Si $ARGUMENTS est fourni, utilise-le comme message. Sinon, génère un message adapté aux changements.
6. Termine chaque message par : `Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>`
7. Push vers le remote
8. Affiche un résumé des commits poussés
