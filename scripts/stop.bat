@echo off
REM Script d'arrêt pour Windows
REM Arrêt de tous les services MEDIANEG

echo 🛑 Arrêt de MEDIANEG International...

REM Arrêter les conteneurs Docker
docker-compose down

REM Demander pour le nettoyage des volumes
set /p cleanup_volumes="🗑️  Voulez-vous supprimer les volumes de données ? (y/N): "
if /i "%cleanup_volumes%"=="y" (
    echo 🗑️  Suppression des volumes...
    docker-compose down -v
    docker volume prune -f
)

REM Demander pour le nettoyage des images
set /p cleanup_images="🧹 Voulez-vous supprimer les images Docker ? (y/N): "
if /i "%cleanup_images%"=="y" (
    echo 🧹 Suppression des images...
    docker-compose down --rmi all
)

echo ✅ Arrêt terminé
pause
