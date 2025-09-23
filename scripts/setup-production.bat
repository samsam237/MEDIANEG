@echo off
REM Script de configuration pour la production sur Windows
REM MEDIANEG International - Site Vitrine

echo 🔧 Configuration pour la production de MEDIANEG International...

REM Vérifier si le fichier .env existe déjà
if exist ".env" (
    echo ⚠️  Le fichier .env existe déjà.
    set /p replace="Voulez-vous le remplacer ? (y/N): "
    if /i not "%replace%"=="y" (
        echo ❌ Configuration annulée.
        pause
        exit /b 1
    )
)

REM Copier le fichier d'exemple
echo 📋 Copie du fichier env.example vers .env...
copy env.example .env >nul

REM Demander les informations de production
echo.
echo 🔐 Configuration des variables de production :
echo.

REM Demander l'URL de l'API
set /p API_URL="🌐 URL de l'API (ex: https://api.medianeg.org): "
if "%API_URL%"=="" set API_URL=https://api.medianeg.org

REM Demander le nom de la base de données
set /p DB_NAME="🗄️  Nom de la base de données (ex: medianeg_production): "
if "%DB_NAME%"=="" set DB_NAME=medianeg_production

REM Demander l'utilisateur de la base de données
set /p DB_USER="👤 Utilisateur de la base de données (ex: medianeg_admin): "
if "%DB_USER%"=="" set DB_USER=medianeg_admin

REM Demander le mot de passe de la base de données
set /p DB_PASS="🔑 Mot de passe de la base de données: "

REM Générer des clés sécurisées (version simplifiée pour Windows)
set JWT_SECRET=%RANDOM%%RANDOM%%RANDOM%%RANDOM%
set ADMIN_JWT_SECRET=%RANDOM%%RANDOM%%RANDOM%%RANDOM%
set APP_KEYS=%RANDOM%,%RANDOM%,%RANDOM%,%RANDOM%
set API_TOKEN_SALT=%RANDOM%%RANDOM%%RANDOM%%RANDOM%
set TRANSFER_TOKEN_SALT=%RANDOM%%RANDOM%%RANDOM%%RANDOM%

REM Mettre à jour le fichier .env
echo ✏️  Mise à jour du fichier .env...

REM Créer un fichier .env temporaire
(
echo # Base de données
echo DB_NAME=%DB_NAME%
echo DB_USER=%DB_USER%
echo DB_PASS=%DB_PASS%
echo.
echo # Strapi Configuration
echo JWT_SECRET=%JWT_SECRET%
echo ADMIN_JWT_SECRET=%ADMIN_JWT_SECRET%
echo APP_KEYS=%APP_KEYS%
echo API_TOKEN_SALT=%API_TOKEN_SALT%
echo TRANSFER_TOKEN_SALT=%TRANSFER_TOKEN_SALT%
echo.
echo # Frontend Configuration
echo NEXT_PUBLIC_API_URL=%API_URL%
echo.
echo # Production Configuration
echo NODE_ENV=production
) > .env.tmp

REM Remplacer le fichier .env
move .env.tmp .env >nul

echo.
echo ✅ Configuration terminée !
echo.
echo 📋 Variables configurées :
echo    🌐 API URL: %API_URL%
echo    🗄️  DB Name: %DB_NAME%
echo    👤 DB User: %DB_USER%
echo    🔐 JWT Secret: %JWT_SECRET:~0,8%...
echo.
echo 🚀 Vous pouvez maintenant lancer le déploiement :
echo    scripts\deploy-production.bat
echo.
pause
