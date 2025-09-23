#!/bin/bash

# Script de configuration SSL avec Let's Encrypt
# MEDIANEG International

set -e

echo "🔐 Configuration SSL pour MEDIANEG International..."

# Vérifier les prérequis
if ! command -v docker &> /dev/null; then
    echo "❌ Docker n'est pas installé."
    exit 1
fi

if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose n'est pas installé."
    exit 1
fi

# Demander le domaine
read -p "🌐 Domaine principal (ex: medianeg.org): " DOMAIN
if [ -z "$DOMAIN" ]; then
    echo "❌ Le domaine est requis."
    exit 1
fi

# Demander l'email pour Let's Encrypt
read -p "📧 Email pour Let's Encrypt: " EMAIL
if [ -z "$EMAIL" ]; then
    echo "❌ L'email est requis pour Let's Encrypt."
    exit 1
fi

# Créer le réseau Docker s'il n'existe pas
echo "🌐 Création du réseau Docker..."
docker network create medianeg-network 2>/dev/null || true

# Créer les dossiers nécessaires
echo "📁 Création des dossiers..."
mkdir -p nginx/conf.d
mkdir -p certbot/conf
mkdir -p certbot/www

# Mettre à jour la configuration Nginx avec le domaine
echo "✏️  Configuration de Nginx..."
sed -i "s/medianeg.org/$DOMAIN/g" nginx/nginx.conf
sed -i "s/medianeg.org/$DOMAIN/g" nginx/conf.d/default.conf
sed -i "s/admin@medianeg.org/$EMAIL/g" nginx/docker-compose.nginx.yml

# Lancer Nginx temporairement pour la validation
echo "🚀 Lancement de Nginx temporaire..."
docker-compose -f nginx/docker-compose.nginx.yml up -d nginx

# Attendre que Nginx soit prêt
echo "⏳ Attente du démarrage de Nginx..."
sleep 10

# Obtenir le certificat SSL
echo "🔐 Obtention du certificat SSL..."
docker-compose -f nginx/docker-compose.nginx.yml run --rm certbot certonly \
    --webroot \
    --webroot-path=/var/www/certbot \
    --email $EMAIL \
    --agree-tos \
    --no-eff-email \
    -d $DOMAIN \
    -d www.$DOMAIN \
    -d api.$DOMAIN

# Redémarrer Nginx avec SSL
echo "🔄 Redémarrage de Nginx avec SSL..."
docker-compose -f nginx/docker-compose.nginx.yml restart nginx

# Lancer le service de renouvellement automatique
echo "🔄 Lancement du service de renouvellement..."
docker-compose -f nginx/docker-compose.nginx.yml up -d certbot-renew

echo ""
echo "✅ Configuration SSL terminée !"
echo ""
echo "📋 Services disponibles :"
echo "   🌐 Site principal: https://$DOMAIN"
echo "   🔧 API: https://api.$DOMAIN"
echo "   🛠️  Admin: https://$DOMAIN/admin"
echo ""
echo "📝 Commandes utiles :"
echo "   Voir les logs: docker-compose -f nginx/docker-compose.nginx.yml logs -f"
echo "   Arrêter: docker-compose -f nginx/docker-compose.nginx.yml down"
echo "   Renouveler SSL: docker-compose -f nginx/docker-compose.nginx.yml run --rm certbot renew"
echo ""
