# Guide de Déploiement - MEDIANEG International

Ce guide détaille les étapes pour déployer le site vitrine MEDIANEG International en production.

## 🚀 Déploiement Rapide avec Docker

### 1. Préparation

```bash
# Cloner le projet
git clone <repository-url>
cd MEDIANEG

# Copier et configurer les variables d'environnement
cp env.example .env
```

### 2. Configuration des variables d'environnement

Éditer le fichier `.env` avec vos valeurs de production :

```env
# Base de données
DB_NAME=medianeg_production
DB_USER=medianeg_admin
DB_PASS=VotreMotDePasseSecurise123!

# Strapi Configuration (Générez des clés sécurisées)
JWT_SECRET=VotreJWTSecretTresSecurise456!
ADMIN_JWT_SECRET=VotreAdminJWTSecretTresSecurise789!
APP_KEYS=key1,key2,key3,key4
API_TOKEN_SALT=VotreApiTokenSaltSecurise
TRANSFER_TOKEN_SALT=VotreTransferTokenSaltSecurise

# Frontend Configuration
NEXT_PUBLIC_API_URL=https://api.medianeg.org
```

### 3. Lancement

```bash
# Construire et lancer tous les services
docker-compose up --build -d

# Vérifier que tous les services sont actifs
docker-compose ps
```

### 4. Configuration initiale

1. **Accéder à l'admin Strapi** : http://votre-domaine:1337/admin
2. **Créer le compte administrateur**
3. **Configurer les permissions** :
   - Aller dans Settings > Roles & Permissions
   - Public : Activer "find" pour presentations et plan-actions
   - Public : Activer "create" pour contact-messages

## 🌐 Déploiement avec Reverse Proxy (Nginx)

### Configuration Nginx

```nginx
server {
    listen 80;
    server_name medianeg.org www.medianeg.org;

    # Redirection vers HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name medianeg.org www.medianeg.org;

    # Certificats SSL
    ssl_certificate /path/to/certificate.crt;
    ssl_certificate_key /path/to/private.key;

    # Frontend Next.js
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Backend Strapi
    location /api/ {
        proxy_pass http://localhost:1337;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Admin Strapi
    location /admin {
        proxy_pass http://localhost:1337;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Uploads Strapi
    location /uploads {
        proxy_pass http://localhost:1337;
    }
}
```

## ☁️ Déploiement Cloud

### Option 1: VPS avec Docker

1. **Créer un VPS** (DigitalOcean, Linode, AWS EC2)
2. **Installer Docker et Docker Compose**
3. **Configurer le firewall** (ports 80, 443, 22)
4. **Cloner et déployer** selon les étapes ci-dessus

### Option 2: Services gérés

#### Frontend (Vercel/Netlify)
```bash
# Build command
npm run build

# Output directory
frontend/.next

# Environment variables
NEXT_PUBLIC_API_URL=https://api.medianeg.org
```

#### Backend (Railway/Heroku)
- Utiliser le Dockerfile.backend
- Configurer les variables d'environnement
- Attacher une base PostgreSQL

#### Base de données (AWS RDS/Google Cloud SQL)
- Créer une instance PostgreSQL
- Configurer la sécurité
- Mettre à jour les variables d'environnement

## 🔒 Sécurité en Production

### 1. Variables d'environnement
- Utiliser des mots de passe forts
- Générer des clés JWT uniques
- Ne jamais commiter les fichiers .env

### 2. Base de données
```bash
# Sauvegarde automatique
docker-compose exec database pg_dump -U medianeg_user medianeg_db > backup_$(date +%Y%m%d).sql

# Restauration
docker-compose exec -T database psql -U medianeg_user medianeg_db < backup.sql
```

### 3. SSL/TLS
- Utiliser Let's Encrypt pour les certificats gratuits
- Configurer la redirection HTTPS automatique
- Renforcer les headers de sécurité

### 4. Firewall
```bash
# UFW (Ubuntu)
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

## 📊 Monitoring et Maintenance

### 1. Logs
```bash
# Voir les logs en temps réel
docker-compose logs -f

# Logs d'un service spécifique
docker-compose logs -f backend
docker-compose logs -f frontend
```

### 2. Sauvegardes
```bash
#!/bin/bash
# backup.sh
DATE=$(date +%Y%m%d_%H%M%S)
docker-compose exec -T database pg_dump -U medianeg_user medianeg_db > "backups/backup_$DATE.sql"
find backups/ -name "*.sql" -mtime +7 -delete
```

### 3. Mises à jour
```bash
# Mettre à jour les images
docker-compose pull
docker-compose up -d

# Reconstruire après modifications
docker-compose up --build -d
```

## 🚨 Dépannage

### Problèmes courants

1. **Services ne démarrent pas**
   ```bash
   # Vérifier les logs
   docker-compose logs
   
   # Redémarrer un service
   docker-compose restart backend
   ```

2. **Erreur de base de données**
   ```bash
   # Vérifier la connexion
   docker-compose exec database psql -U medianeg_user -d medianeg_db
   
   # Réinitialiser la base
   docker-compose down -v
   docker-compose up -d
   ```

3. **Problèmes de permissions**
   ```bash
   # Corriger les permissions
   sudo chown -R $USER:$USER .
   chmod -R 755 .
   ```

### Commandes utiles

```bash
# Voir l'état des services
docker-compose ps

# Accéder à un conteneur
docker-compose exec backend sh
docker-compose exec frontend sh

# Nettoyer les images inutilisées
docker system prune -a

# Voir l'utilisation des ressources
docker stats
```

## 📞 Support

En cas de problème :
1. Vérifier les logs : `docker-compose logs`
2. Consulter ce guide
3. Contacter l'équipe technique : tech@medianeg.org

---

**Note** : Ce guide est fourni à titre informatif. Adaptez les configurations selon votre environnement et vos besoins spécifiques.
