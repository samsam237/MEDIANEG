#!/bin/bash

# Script de développement pour Linux/macOS
# Lancement en mode développement (sans Docker)

set -e

echo "🚀 Démarrage en mode développement..."

# Vérifier si Node.js est installé
if ! command -v node &> /dev/null; then
    echo "❌ Node.js n'est pas installé. Veuillez installer Node.js 18+ d'abord."
    exit 1
fi

# Vérifier la version de Node.js
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ requise. Version actuelle: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) détecté"

# Installer les dépendances du projet racine
echo "📦 Installation des dépendances du projet..."
npm install

# Installer les dépendances du frontend
echo "📦 Installation des dépendances du frontend..."
cd frontend
npm install
cd ..

# Installer les dépendances du backend
echo "📦 Installation des dépendances du backend..."
cd backend
npm install
cd ..

# Créer le fichier .env pour le frontend s'il n'existe pas
if [ ! -f "frontend/.env.local" ]; then
    echo "NEXT_PUBLIC_API_URL=http://localhost:1337" > frontend/.env.local
    echo "✅ Fichier .env.local créé pour le frontend"
fi

# Créer le fichier .env pour le backend s'il n'existe pas
if [ ! -f "backend/.env" ]; then
    cat > backend/.env << EOF
HOST=0.0.0.0
PORT=1337
APP_KEYS=toBeModified1,toBeModified2,toBeModified3,toBeModified4
API_TOKEN_SALT=tobemodified
ADMIN_JWT_SECRET=tobemodified
TRANSFER_TOKEN_SALT=tobemodified
JWT_SECRET=tobemodified
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db
EOF
    echo "✅ Fichier .env créé pour le backend"
fi

echo ""
echo "🎯 Pour lancer en mode développement :"
echo "   npm run dev"
echo ""
echo "   Ou lancez manuellement :"
echo "   Frontend: cd frontend && npm run dev"
echo "   Backend:  cd backend && npm run develop"
echo ""
echo "✅ Frontend sera disponible sur : http://localhost:3000"
echo "✅ Backend sera disponible sur  : http://localhost:1337"
