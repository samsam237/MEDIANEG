@echo off
echo 🧹 Nettoyage des conteneurs et volumes Docker...

echo Arrêt des conteneurs...
docker-compose down --volumes --remove-orphans

echo Nettoyage des images...
docker image prune -f

echo Nettoyage des volumes...
docker volume prune -f

echo Nettoyage du système Docker...
docker system prune -f

echo ✅ Nettoyage terminé !
echo 🚀 Redémarrage des services...

docker-compose up --build -d

echo ✅ Services redémarrés !
pause
