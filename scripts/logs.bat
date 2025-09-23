@echo off
REM Script pour voir les logs
REM MEDIANEG International

echo 📝 Logs de MEDIANEG International
echo.

REM Afficher les options
echo Choisissez le service dont vous voulez voir les logs :
echo 1^) Tous les services
echo 2^) Frontend seulement
echo 3^) Backend seulement
echo 4^) Base de données seulement
echo.

set /p choice="Votre choix (1-4): "

if "%choice%"=="1" (
    echo 📝 Logs de tous les services...
    docker-compose logs -f
) else if "%choice%"=="2" (
    echo 📝 Logs du frontend...
    docker-compose logs -f frontend
) else if "%choice%"=="3" (
    echo 📝 Logs du backend...
    docker-compose logs -f backend
) else if "%choice%"=="4" (
    echo 📝 Logs de la base de données...
    docker-compose logs -f database
) else (
    echo ❌ Choix invalide
    pause
    exit /b 1
)
