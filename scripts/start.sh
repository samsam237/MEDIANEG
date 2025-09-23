#!/bin/bash

# Script de lancement pour Linux/macOS
# MEDIANEG International - Site Vitrine

set -e

echo "🚀 Démarrage de MEDIANEG International..."

# Vérifier si Docker est installé
if ! command -v docker &> /dev/null; then
    echo "❌ Docker n'est pas installé. Veuillez installer Docker d'abord."
    exit 1
fi

if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose n'est pas installé. Veuillez installer Docker Compose d'abord."
    exit 1
fi

# Vérifier si le fichier .env existe
if [ ! -f ".env" ]; then
    echo "⚠️  Fichier .env non trouvé. Création à partir de env.example..."
    cp env.example .env
    echo "✅ Fichier .env créé. Veuillez le modifier avec vos valeurs avant de relancer."
    exit 1
fi

# Arrêter les conteneurs existants
echo "🛑 Arrêt des conteneurs existants..."
docker-compose down

# Construire et lancer les services
echo "🔨 Construction et lancement des services..."
docker-compose up --build -d

# Attendre que les services soient prêts
echo "⏳ Attente du démarrage des services..."
sleep 30

# Vérifier l'état des services
echo "📊 Vérification de l'état des services..."
docker-compose ps

echo ""
echo "✅ MEDIANEG International est maintenant disponible :"
echo "   🌐 Frontend: http://localhost:4000"
echo "   🔧 Backend:  http://localhost:1337"
echo "   🗄️  Base de données: localhost:5432"
echo ""
echo "📝 Pour voir les logs : docker-compose logs -f"
echo "🛑 Pour arrêter : docker-compose down"
