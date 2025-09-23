#!/bin/bash

# Script pour voir les logs
# MEDIANEG International

echo "📝 Logs de MEDIANEG International"
echo ""

# Afficher les options
echo "Choisissez le service dont vous voulez voir les logs :"
echo "1) Tous les services"
echo "2) Frontend seulement"
echo "3) Backend seulement"
echo "4) Base de données seulement"
echo ""

read -p "Votre choix (1-4): " choice

case $choice in
    1)
        echo "📝 Logs de tous les services..."
        docker-compose logs -f
        ;;
    2)
        echo "📝 Logs du frontend..."
        docker-compose logs -f frontend
        ;;
    3)
        echo "📝 Logs du backend..."
        docker-compose logs -f backend
        ;;
    4)
        echo "📝 Logs de la base de données..."
        docker-compose logs -f database
        ;;
    *)
        echo "❌ Choix invalide"
        exit 1
        ;;
esac
