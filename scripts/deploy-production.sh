#!/bin/bash

# Script de déploiement en production
# MEDIANEG International - Site Vitrine

set -e

echo "🚀 Déploiement en production de MEDIANEG International..."

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
    echo "❌ Fichier .env non trouvé. Veuillez créer un fichier .env avec vos configurations de production."
    echo "   Vous pouvez copier env.example et le modifier :"
    echo "   cp env.example .env"
    exit 1
fi

# Vérifier que NODE_ENV est défini en production
if ! grep -q "NODE_ENV=production" .env; then
    echo "⚠️  NODE_ENV n'est pas défini en production dans .env"
    echo "   Ajoutez NODE_ENV=production à votre fichier .env"
fi

# Vérifier que NEXT_PUBLIC_API_URL n'est pas localhost
if grep -q "localhost" .env; then
    echo "⚠️  Attention : NEXT_PUBLIC_API_URL contient 'localhost'"
    echo "   Assurez-vous d'utiliser votre domaine de production"
    read -p "Voulez-vous continuer ? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Arrêter les conteneurs existants
echo "🛑 Arrêt des conteneurs existants..."
docker-compose down

# Nettoyer les images inutilisées
echo "🧹 Nettoyage des images inutilisées..."
docker system prune -f

# Construire et lancer les services en mode production
echo "🔨 Construction et lancement des services en mode production..."
docker-compose up --build -d

# Attendre que les services soient prêts
echo "⏳ Attente du démarrage des services..."
sleep 45

# Vérifier l'état des services
echo "📊 Vérification de l'état des services..."
docker-compose ps

# Vérifier la santé des services
echo "🏥 Vérification de la santé des services..."

# Vérifier le frontend
if curl -f http://localhost:4000 > /dev/null 2>&1; then
    echo "✅ Frontend accessible sur http://localhost:4000"
else
    echo "❌ Frontend non accessible"
fi

# Vérifier le backend
if curl -f http://localhost:1337/api > /dev/null 2>&1; then
    echo "✅ Backend accessible sur http://localhost:1337"
else
    echo "❌ Backend non accessible"
fi

# Vérifier la base de données
if docker-compose exec -T database pg_isready -U ${DB_USER:-medianeg_user} > /dev/null 2>&1; then
    echo "✅ Base de données accessible"
else
    echo "❌ Base de données non accessible"
fi

echo ""
echo "🎉 Déploiement terminé !"
echo ""
echo "📋 Services disponibles :"
echo "   🌐 Frontend: http://localhost:4000"
echo "   🔧 Backend:  http://localhost:1337"
echo "   🗄️  Base de données: localhost:5432"
echo ""
echo "📝 Commandes utiles :"
echo "   Voir les logs : docker-compose logs -f"
echo "   Arrêter : docker-compose down"
echo "   Redémarrer : docker-compose restart"
echo ""
echo "🔧 Configuration initiale :"
echo "   1. Accéder à http://localhost:1337/admin"
echo "   2. Créer le compte administrateur"
echo "   3. Configurer les permissions dans Settings > Roles & Permissions"
echo ""
