@echo off
REM Script de développement pour Windows
REM Lancement en mode développement (sans Docker)

echo 🚀 Démarrage en mode développement...

REM Vérifier si Node.js est installé
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js n'est pas installé. Veuillez installer Node.js 18+ d'abord.
    pause
    exit /b 1
)

echo ✅ Node.js détecté

REM Installer les dépendances du projet racine
echo 📦 Installation des dépendances du projet...
npm install

REM Installer les dépendances du frontend
echo 📦 Installation des dépendances du frontend...
cd frontend
npm install
cd ..

REM Installer les dépendances du backend
echo 📦 Installation des dépendances du backend...
cd backend
npm install
cd ..

REM Créer le fichier .env pour le frontend s'il n'existe pas
if not exist "frontend\.env.local" (
    echo NEXT_PUBLIC_API_URL=http://localhost:1337 > frontend\.env.local
    echo ✅ Fichier .env.local créé pour le frontend
)

REM Créer le fichier .env pour le backend s'il n'existe pas
if not exist "backend\.env" (
    (
        echo HOST=0.0.0.0
        echo PORT=1337
        echo APP_KEYS=toBeModified1,toBeModified2,toBeModified3,toBeModified4
        echo API_TOKEN_SALT=tobemodified
        echo ADMIN_JWT_SECRET=tobemodified
        echo TRANSFER_TOKEN_SALT=tobemodified
        echo JWT_SECRET=tobemodified
        echo DATABASE_CLIENT=sqlite
        echo DATABASE_FILENAME=.tmp/data.db
    ) > backend\.env
    echo ✅ Fichier .env créé pour le backend
)

echo.
echo 🎯 Pour lancer en mode développement :
echo    npm run dev
echo.
echo    Ou lancez manuellement :
echo    Frontend: cd frontend ^&^& npm run dev
echo    Backend:  cd backend ^&^& npm run develop
echo.
echo ✅ Frontend sera disponible sur : http://localhost:3000
echo ✅ Backend sera disponible sur  : http://localhost:1337
echo.
pause
