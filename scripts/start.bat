@echo off
REM Script de lancement pour Windows
REM MEDIANEG International - Site Vitrine

echo 🚀 Démarrage de MEDIANEG International...

REM Vérifier si Docker est installé
docker --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Docker n'est pas installé. Veuillez installer Docker Desktop d'abord.
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
    echo ⚠️  Fichier .env non trouvé. Création à partir de env.example...
    copy env.example .env
    echo ✅ Fichier .env créé. Veuillez le modifier avec vos valeurs avant de relancer.
    pause
    exit /b 1
)

REM Arrêter les conteneurs existants
echo 🛑 Arrêt des conteneurs existants...
docker-compose down

REM Construire et lancer les services
echo 🔨 Construction et lancement des services...
docker-compose up --build -d

REM Attendre que les services soient prêts
echo ⏳ Attente du démarrage des services...
timeout /t 30 /nobreak >nul

REM Vérifier l'état des services
echo 📊 Vérification de l'état des services...
docker-compose ps

echo.
echo ✅ MEDIANEG International est maintenant disponible :
echo    🌐 Frontend: http://localhost:4000
echo    🔧 Backend:  http://localhost:1337
echo    🗄️  Base de données: localhost:5432
echo.
echo 📝 Pour voir les logs : docker-compose logs -f
echo 🛑 Pour arrêter : docker-compose down
echo.
pause
