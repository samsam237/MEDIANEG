#!/bin/bash

# Script de mise à jour
# MEDIANEG International

set -e

echo "🔄 Mise à jour de MEDIANEG International..."

# Sauvegarder les données importantes
echo "💾 Sauvegarde des données..."
BACKUP_DIR="backups/$(date +%Y%m%d_%H%M%S)"
mkdir -p "$BACKUP_DIR"

# Sauvegarder la base de données
if docker-compose ps database | grep -q "Up"; then
    echo "💾 Sauvegarde de la base de données..."
    docker-compose exec -T database pg_dump -U medianeg_user medianeg_db > "$BACKUP_DIR/database.sql"
fi

# Sauvegarder les uploads Strapi
if docker-compose ps backend | grep -q "Up"; then
    echo "💾 Sauvegarde des uploads..."
    docker cp $(docker-compose ps -q backend):/app/public/uploads "$BACKUP_DIR/" 2>/dev/null || true
fi

# Arrêter les services
echo "🛑 Arrêt des services..."
docker-compose down

# Mettre à jour le code
echo "📥 Mise à jour du code..."
git pull origin main

# Reconstruire les images
echo "🔨 Reconstruction des images..."
docker-compose build --no-cache

# Relancer les services
echo "🚀 Relancement des services..."
docker-compose up -d

# Attendre que les services soient prêts
echo "⏳ Attente du démarrage..."
sleep 30

# Restaurer les données si nécessaire
if [ -f "$BACKUP_DIR/database.sql" ]; then
    echo "🔄 Restauration de la base de données..."
    docker-compose exec -T database psql -U medianeg_user -d medianeg_db < "$BACKUP_DIR/database.sql" || echo "⚠️  Restauration de la base de données échouée"
fi

echo "✅ Mise à jour terminée !"
echo "📁 Sauvegarde disponible dans : $BACKUP_DIR"
echo ""
echo "🌐 Frontend: http://localhost:4000"
echo "🔧 Backend:  http://localhost:1337"
