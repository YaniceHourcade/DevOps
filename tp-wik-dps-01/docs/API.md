# Documentation API

## GET /ping

Retourne les headers de la requête au format JSON.

### URL

```txt
http://localhost:3000/ping
```

### Méthode

```txt
GET
```

### Exemple de réponse

```json
{
  "host": "localhost:3000",
  "connection": "keep-alive",
  "sec-ch-ua": "...",
  "sec-ch-ua-mobile": "?0",
}
```

## Erreur 404

Si une route autre que `/ping` est appelée, le serveur retourne une erreur `404`.

Exemple :

```txt
http://localhost:3000/unknown
```
