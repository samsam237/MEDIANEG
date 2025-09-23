#!/bin/bash

# Script de vérification de santé
# MEDIANEG International

echo "🏥 Vérification de santé - MEDIANEG International"
echo "=================================================="

# Vérifier Docker
echo "🐳 Vérification de Docker..."
if command -v docker &> /dev/null; then
    echo "✅ Docker: $(docker --version)"
else
    echo "❌ Docker non installé"
    exit 1
fi

if command -v docker-compose &> /dev/null; then
    echo "✅ Docker Compose: $(docker-compose --version)"
else
    echo "❌ Docker Compose non installé"
    exit 1
fi

echo ""

# Vérifier l'état des conteneurs
echo "📊 État des conteneurs..."
docker-compose ps

echo ""

# Vérifier les services
echo "🌐 Vérification des services..."

# Frontend
echo -n "Frontend (http://localhost:4000): "
if curl -s -o /dev/null -w "%{http_code}" http://localhost:4000 | grep -q "200\|302"; then
    echo "✅ OK"
else
    echo "❌ KO"
fi

# Backend
echo -n "Backend (http://localhost:1337): "
if curl -s -o /dev/null -w "%{http_code}" http://localhost:1337 | grep -q "200\|302"; then
    echo "✅ OK"
else
    echo "❌ KO"
fi

# API
echo -n "API (http://localhost:1337/api): "
if curl -s -o /dev/null -w "%{http_code}" http://localhost:1337/api | grep -q "200\|404"; then
    echo "✅ OK"
else
    echo "❌ KO"
fi

echo ""

# Vérifier les logs récents
echo "📝 Logs récents (dernières 10 lignes):"
echo "Frontend:"
docker-compose logs --tail=10 frontend

echo ""
echo "Backend:"
docker-compose logs --tail=10 backend

echo ""
echo "Base de données:"
docker-compose logs --tail=10 database

echo ""
echo "🏥 Vérification terminée"
