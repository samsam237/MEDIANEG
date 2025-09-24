#!/bin/bash

echo "🧹 Nettoyage des conteneurs et volumes Docker..."

# Arrêter tous les conteneurs
echo "Arrêt des conteneurs..."
docker-compose down --volumes --remove-orphans

# Nettoyer les images non utilisées
echo "Nettoyage des images..."
docker image prune -f

# Nettoyer les volumes non utilisés
echo "Nettoyage des volumes..."
docker volume prune -f

# Nettoyer le système
echo "Nettoyage du système Docker..."
docker system prune -f

echo "✅ Nettoyage terminé !"
echo "🚀 Redémarrage des services..."

# Reconstruire et redémarrer
docker-compose up --build -d

echo "✅ Services redémarrés !"
