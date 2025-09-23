@echo off
REM Script de déploiement en production pour Windows
REM MEDIANEG International - Site Vitrine

echo 🚀 Déploiement en production de MEDIANEG International...

REM Vérifier si Docker est installé
docker --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Docker n'est pas installé. Veuillez installer Docker d'abord.
    pause
    exit /b 1
)

docker-compose --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Docker Compose n'est pas installé. Veuillez installer Docker Compose d'abord.
    pause
    exit /b 1
)

REM Vérifier si le fichier .env existe
if not exist ".env" (
    echo ❌ Fichier .env non trouvé. Veuillez créer un fichier .env avec vos configurations de production.
    echo    Vous pouvez copier env.example et le modifier :
    echo    copy env.example .env
    pause
    exit /b 1
)

REM Vérifier que NEXT_PUBLIC_API_URL n'est pas localhost
findstr /C:"localhost" .env >nul
if %errorlevel% equ 0 (
    echo ⚠️  Attention : NEXT_PUBLIC_API_URL contient 'localhost'
    echo    Assurez-vous d'utiliser votre domaine de production
    set /p continue="Voulez-vous continuer ? (y/N): "
    if /i not "%continue%"=="y" (
        exit /b 1
    )
)

REM Arrêter les conteneurs existants
echo 🛑 Arrêt des conteneurs existants...
docker-compose down

REM Nettoyer les images inutilisées
echo 🧹 Nettoyage des images inutilisées...
docker system prune -f

REM Construire et lancer les services en mode production
echo 🔨 Construction et lancement des services en mode production...
docker-compose up --build -d

REM Attendre que les services soient prêts
echo ⏳ Attente du démarrage des services...
timeout /t 45 /nobreak >nul

REM Vérifier l'état des services
echo 📊 Vérification de l'état des services...
docker-compose ps

echo.
echo 🎉 Déploiement terminé !
echo.
echo 📋 Services disponibles :
echo    🌐 Frontend: http://localhost:4000
echo    🔧 Backend:  http://localhost:1337
echo    🗄️  Base de données: localhost:5432
echo.
echo 📝 Commandes utiles :
echo    Voir les logs : docker-compose logs -f
echo    Arrêter : docker-compose down
echo    Redémarrer : docker-compose restart
echo.
echo 🔧 Configuration initiale :
echo    1. Accéder à http://localhost:1337/admin
echo    2. Créer le compte administrateur
echo    3. Configurer les permissions dans Settings ^> Roles ^& Permissions
echo.
pause
