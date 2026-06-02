# tp-wik-dps-01

API simple réalisée avec Node.js, TypeScript et Express.

Le projet contient une route `GET /ping` qui retourne les headers de la requête au format JSON, ainsi qu'une route `GET /stats` qui retourne quelques informations sur l'instance du serveur.

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
INSTANCE_ID=api-1
```

La variable `PING_LISTEN_PORT` permet de choisir le port sur lequel le serveur écoute.

La variable `INSTANCE_ID` permet d'identifier l'instance du serveur.

Un fichier `.env.example` peut être présent pour donner un exemple de configuration.

## Lancer le projet

```bash
npm run dev
```

Si le port est configuré sur `3000`, le serveur sera disponible ici :

```txt
http://localhost:3000
```

## Ouvrir l'API dans le navigateur

Pour tester la route principale :

```txt
http://localhost:3000/ping
```

Pour tester les statistiques du serveur :

```txt
http://localhost:3000/stats
```

## Routes disponibles

| Méthode | Route    | Description                                                                   |
| ------- | -------- | ----------------------------------------------------------------------------- |
| GET     | `/ping`  | Retourne les headers de la requête en JSON                                    |
| GET     | `/stats` | Retourne le nombre total de requêtes, l'uptime et l'identifiant de l'instance |

## Erreur 404

Toutes les autres routes retournent une erreur `404`.

## Docker

Le projet peut aussi être lancé avec Docker.

### Construire l'image

Depuis le dossier du projet :

```bash
docker build -t tp-wik-dps-01 .
```

### Lancer le conteneur

```bash
docker run -p 3000:3000 -e PING_LISTEN_PORT=3000 -e INSTANCE_ID=docker-api tp-wik-dps-01
```

### Scanner l'image

L'image Docker peut être scannée afin de détecter d'éventuelles vulnérabilités.

```bash
docker scout cves tp-wik-dps-01
```
