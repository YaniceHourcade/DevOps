# tp-wik-dps-01

API réalisée avec Node.js, TypeScript et Express.

Le projet contient une route `GET /ping` qui retourne les headers de la requête au format JSON.

## Cloner le projet

```bash
git clone <url-du-repo>
cd tp-wik-dps-01
```

## Installer les dépendances

```bash
npm install
```

## Configuration

Créer un fichier `.env` à la racine du projet :

```env
PING_LISTEN_PORT=3000
```

Cette variable permet de choisir le port sur lequel le serveur va écouter.

## Lancer le projet

```bash
npm run dev
```

Si le port est configuré sur `3000`, le serveur sera disponible ici :

```txt
http://localhost:3000
```

## Ouvrir l'API dans le navigateur

Pour tester la route principale, ouvrir cette URL dans le navigateur :

```txt
http://localhost:3000/ping
```


## Route disponible

| Méthode | Route   | Description                                |
| ------- | ------- | ------------------------------------------ |
| GET     | `/ping` | Retourne les headers de la requête en JSON |

## Erreur 404

Toutes les autres routes retournent une erreur `404`.

