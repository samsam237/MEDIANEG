# Scripts de Lancement - MEDIANEG International

Ce dossier contient tous les scripts nécessaires pour lancer et gérer l'application MEDIANEG International sur différentes plateformes.

## 🚀 Scripts de Lancement

### Production (avec Docker)

#### Linux/macOS
```bash
./scripts/start.sh
```

#### Windows (Command Prompt)
```cmd
scripts\start.bat
```

#### Windows (PowerShell)
```powershell
.\scripts\start.ps1
```

### Développement (sans Docker)

#### Linux/macOS
```bash
./scripts/dev.sh
```

#### Windows
```cmd
scripts\dev.bat
```

## 🛑 Scripts d'Arrêt

#### Linux/macOS
```bash
./scripts/stop.sh
```

#### Windows
```cmd
scripts\stop.bat
```

## 📝 Scripts de Logs

#### Linux/macOS
```bash
./scripts/logs.sh
```

#### Windows
```cmd
scripts\logs.bat
```

## 🔄 Scripts de Mise à Jour

#### Linux/macOS
```bash
./scripts/update.sh
```

## 🏥 Scripts de Vérification

#### Linux/macOS
```bash
./scripts/health-check.sh
```

## 📋 Commandes Rapides

### Démarrage rapide
```bash
# Linux/macOS
./scripts/start.sh

# Windows
scripts\start.bat
```

### Voir les logs
```bash
# Tous les services
docker-compose logs -f

# Service spécifique
docker-compose logs -f frontend
docker-compose logs -f backend
docker-compose logs -f database
```

### Arrêt rapide
```bash
docker-compose down
```

## 🌐 URLs d'Accès

Une fois lancé, l'application sera disponible sur :

- **Frontend**: http://localhost:4000
- **Backend**: http://localhost:1337
- **Admin Strapi**: http://localhost:1337/admin

## 🔧 Dépannage

### Problèmes courants

1. **Port déjà utilisé**
   ```bash
   # Vérifier les ports utilisés
   netstat -tulpn | grep :4000
   netstat -tulpn | grep :1337
   ```

2. **Services ne démarrent pas**
   ```bash
   # Voir les logs détaillés
   docker-compose logs
   
   # Redémarrer un service
   docker-compose restart frontend
   ```

3. **Problèmes de permissions (Linux/macOS)**
   ```bash
   # Rendre les scripts exécutables
   chmod +x scripts/*.sh
   ```

### Commandes utiles

```bash
# Voir l'état des conteneurs
docker-compose ps

# Accéder à un conteneur
docker-compose exec frontend sh
docker-compose exec backend sh

# Nettoyer les images inutilisées
docker system prune -a

# Voir l'utilisation des ressources
docker stats
```

## 📞 Support

En cas de problème :
1. Vérifier les logs : `./scripts/logs.sh` ou `scripts\logs.bat`
2. Vérifier la santé : `./scripts/health-check.sh`
3. Consulter la documentation principale
4. Contacter l'équipe technique
