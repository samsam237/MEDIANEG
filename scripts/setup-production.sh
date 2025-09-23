#!/bin/bash

# Script de configuration pour la production
# MEDIANEG International - Site Vitrine

set -e

echo "🔧 Configuration pour la production de MEDIANEG International..."

# Vérifier si le fichier .env existe déjà
if [ -f ".env" ]; then
    echo "⚠️  Le fichier .env existe déjà."
    read -p "Voulez-vous le remplacer ? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ Configuration annulée."
        exit 1
    fi
fi

# Copier le fichier d'exemple
echo "📋 Copie du fichier env.example vers .env..."
cp env.example .env

# Demander les informations de production
echo ""
echo "🔐 Configuration des variables de production :"
echo ""

# Demander l'URL de l'API
read -p "🌐 URL de l'API (ex: https://api.medianeg.org): " API_URL
if [ -z "$API_URL" ]; then
    API_URL="https://api.medianeg.org"
fi

# Demander le nom de la base de données
read -p "🗄️  Nom de la base de données (ex: medianeg_production): " DB_NAME
if [ -z "$DB_NAME" ]; then
    DB_NAME="medianeg_production"
fi

# Demander l'utilisateur de la base de données
read -p "👤 Utilisateur de la base de données (ex: medianeg_admin): " DB_USER
if [ -z "$DB_USER" ]; then
    DB_USER="medianeg_admin"
fi

# Demander le mot de passe de la base de données
read -s -p "🔑 Mot de passe de la base de données: " DB_PASS
echo ""

# Générer des clés sécurisées
JWT_SECRET=$(openssl rand -base64 32)
ADMIN_JWT_SECRET=$(openssl rand -base64 32)
APP_KEYS=$(openssl rand -base64 16),$(openssl rand -base64 16),$(openssl rand -base64 16),$(openssl rand -base64 16)
API_TOKEN_SALT=$(openssl rand -base64 32)
TRANSFER_TOKEN_SALT=$(openssl rand -base64 32)

# Mettre à jour le fichier .env
echo "✏️  Mise à jour du fichier .env..."

# Créer un fichier .env temporaire
cat > .env.tmp << EOF
# Base de données
DB_NAME=${DB_NAME}
DB_USER=${DB_USER}
DB_PASS=${DB_PASS}

# Strapi Configuration
JWT_SECRET=${JWT_SECRET}
ADMIN_JWT_SECRET=${ADMIN_JWT_SECRET}
APP_KEYS=${APP_KEYS}
API_TOKEN_SALT=${API_TOKEN_SALT}
TRANSFER_TOKEN_SALT=${TRANSFER_TOKEN_SALT}

# Frontend Configuration
NEXT_PUBLIC_API_URL=${API_URL}

# Production Configuration
NODE_ENV=production
EOF

# Remplacer le fichier .env
mv .env.tmp .env

echo ""
echo "✅ Configuration terminée !"
echo ""
echo "📋 Variables configurées :"
echo "   🌐 API URL: ${API_URL}"
echo "   🗄️  DB Name: ${DB_NAME}"
echo "   👤 DB User: ${DB_USER}"
echo "   🔐 JWT Secret: ${JWT_SECRET:0:8}..."
echo ""
echo "🚀 Vous pouvez maintenant lancer le déploiement :"
echo "   ./scripts/deploy-production.sh"
echo ""
