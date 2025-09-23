# Configuration Nginx pour MEDIANEG International

Ce dossier contient la configuration Nginx complète pour déployer MEDIANEG International en production avec SSL/HTTPS.

## 📁 Structure des fichiers

```
nginx/
├── nginx.conf              # Configuration Nginx complète
├── conf.d/
│   └── default.conf        # Configuration simplifiée
├── docker-compose.nginx.yml # Docker Compose pour Nginx + SSL
├── setup-ssl.sh            # Script de configuration SSL
└── README.md               # Ce fichier
```

## 🚀 Déploiement rapide

### 1. Configuration SSL automatique

```bash
# Rendre le script exécutable
chmod +x nginx/setup-ssl.sh

# Lancer la configuration
./nginx/setup-ssl.sh
```

### 2. Déploiement manuel

```bash
# 1. Créer le réseau Docker
docker network create medianeg-network

# 2. Lancer Nginx + SSL
docker-compose -f nginx/docker-compose.nginx.yml up -d

# 3. Obtenir le certificat SSL
docker-compose -f nginx/docker-compose.nginx.yml run --rm certbot certonly \
    --webroot \
    --webroot-path=/var/www/certbot \
    --email admin@votre-domaine.com \
    --agree-tos \
    --no-eff-email \
    -d votre-domaine.com \
    -d www.votre-domaine.com \
    -d api.votre-domaine.com
```

## 🔧 Configuration

### Variables à modifier

1. **Domaine principal** : `medianeg.org` → `votre-domaine.com`
2. **Email Let's Encrypt** : `admin@medianeg.org` → `votre-email@domaine.com`
3. **Ports** : 80, 443 (par défaut)

### Configuration Nginx

- **Frontend** : `http://frontend:3000`
- **Backend API** : `http://backend:1337`
- **Admin Strapi** : `http://backend:1337/admin`
- **Uploads** : `http://backend:1337/uploads`

## 🌐 URLs de production

Après déploiement, votre site sera accessible sur :

- **Site principal** : `https://votre-domaine.com`
- **API** : `https://api.votre-domaine.com`
- **Admin** : `https://votre-domaine.com/admin`

## 🔒 Sécurité

### Headers de sécurité configurés

- `Strict-Transport-Security` : Force HTTPS
- `X-Frame-Options` : Protection contre le clickjacking
- `X-Content-Type-Options` : Protection MIME
- `X-XSS-Protection` : Protection XSS
- `Content-Security-Policy` : Politique de sécurité du contenu

### Rate Limiting

- **API** : 10 requêtes/seconde
- **Admin** : 5 requêtes/seconde

### SSL/TLS

- **Protocoles** : TLSv1.2, TLSv1.3
- **Ciphers** : Configuration moderne et sécurisée
- **Renouvellement** : Automatique avec Certbot

## 📊 Monitoring

### Logs

```bash
# Logs Nginx
docker-compose -f nginx/docker-compose.nginx.yml logs -f nginx

# Logs Certbot
docker-compose -f nginx/docker-compose.nginx.yml logs -f certbot
```

### Health Check

- **Endpoint** : `https://votre-domaine.com/health`
- **Réponse** : `healthy`

## 🔄 Maintenance

### Renouvellement SSL

```bash
# Renouvellement manuel
docker-compose -f nginx/docker-compose.nginx.yml run --rm certbot renew

# Redémarrage après renouvellement
docker-compose -f nginx/docker-compose.nginx.yml restart nginx
```

### Mise à jour

```bash
# Mettre à jour les images
docker-compose -f nginx/docker-compose.nginx.yml pull

# Redéployer
docker-compose -f nginx/docker-compose.nginx.yml up -d
```

## 🚨 Dépannage

### Problèmes courants

1. **Certificat SSL non valide**
   ```bash
   # Vérifier les certificats
   docker-compose -f nginx/docker-compose.nginx.yml exec nginx ls -la /etc/letsencrypt/live/
   ```

2. **Nginx ne démarre pas**
   ```bash
   # Vérifier la configuration
   docker-compose -f nginx/docker-compose.nginx.yml exec nginx nginx -t
   ```

3. **Problème de réseau**
   ```bash
   # Vérifier le réseau
   docker network ls | grep medianeg
   ```

### Commandes utiles

```bash
# Tester la configuration Nginx
docker-compose -f nginx/docker-compose.nginx.yml exec nginx nginx -t

# Recharger la configuration
docker-compose -f nginx/docker-compose.nginx.yml exec nginx nginx -s reload

# Voir les certificats
docker-compose -f nginx/docker-compose.nginx.yml exec nginx ls -la /etc/letsencrypt/live/

# Vérifier les logs d'erreur
docker-compose -f nginx/docker-compose.nginx.yml logs nginx | grep error
```

## 📞 Support

En cas de problème :

1. Vérifier les logs : `docker-compose -f nginx/docker-compose.nginx.yml logs`
2. Consulter ce README
3. Vérifier la configuration SSL : `https://www.ssllabs.com/ssltest/`

---

**Note** : Cette configuration est optimisée pour la production. Adaptez les paramètres selon vos besoins spécifiques.
