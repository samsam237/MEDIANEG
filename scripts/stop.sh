#!/bin/bash

# Script d'arrêt pour Linux/macOS
# Arrêt de tous les services MEDIANEG

echo "🛑 Arrêt de MEDIANEG International..."

# Arrêter les conteneurs Docker
docker-compose down

# Nettoyer les volumes (optionnel)
read -p "🗑️  Voulez-vous supprimer les volumes de données ? (y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🗑️  Suppression des volumes..."
    docker-compose down -v
    docker volume prune -f
fi

# Nettoyer les images (optionnel)
read -p "🧹 Voulez-vous supprimer les images Docker ? (y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🧹 Suppression des images..."
    docker-compose down --rmi all
fi

echo "✅ Arrêt terminé"
