# Script de lancement PowerShell pour Windows
# MEDIANEG International - Site Vitrine

Write-Host "🚀 Démarrage de MEDIANEG International..." -ForegroundColor Green

# Vérifier si Docker est installé
try {
    $dockerVersion = docker --version
    Write-Host "✅ Docker détecté: $dockerVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Docker n'est pas installé. Veuillez installer Docker Desktop d'abord." -ForegroundColor Red
    Read-Host "Appuyez sur Entrée pour quitter"
    exit 1
}

try {
    $composeVersion = docker-compose --version
    Write-Host "✅ Docker Compose détecté: $composeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Docker Compose n'est pas installé. Veuillez installer Docker Compose d'abord." -ForegroundColor Red
    Read-Host "Appuyez sur Entrée pour quitter"
    exit 1
}

# Vérifier si le fichier .env existe
if (-not (Test-Path ".env")) {
    Write-Host "⚠️  Fichier .env non trouvé. Création à partir de env.example..." -ForegroundColor Yellow
    Copy-Item "env.example" ".env"
    Write-Host "✅ Fichier .env créé. Veuillez le modifier avec vos valeurs avant de relancer." -ForegroundColor Green
    Read-Host "Appuyez sur Entrée pour quitter"
    exit 1
}

# Arrêter les conteneurs existants
Write-Host "🛑 Arrêt des conteneurs existants..." -ForegroundColor Yellow
docker-compose down

# Construire et lancer les services
Write-Host "🔨 Construction et lancement des services..." -ForegroundColor Yellow
docker-compose up --build -d

# Attendre que les services soient prêts
Write-Host "⏳ Attente du démarrage des services..." -ForegroundColor Yellow
Start-Sleep -Seconds 30

# Vérifier l'état des services
Write-Host "📊 Vérification de l'état des services..." -ForegroundColor Yellow
docker-compose ps

Write-Host ""
Write-Host "✅ MEDIANEG International est maintenant disponible :" -ForegroundColor Green
Write-Host "   🌐 Frontend: http://localhost:4000" -ForegroundColor Cyan
Write-Host "   🔧 Backend:  http://localhost:1337" -ForegroundColor Cyan
Write-Host "   🗄️  Base de données: localhost:5432" -ForegroundColor Cyan
Write-Host ""
Write-Host "📝 Pour voir les logs : docker-compose logs -f" -ForegroundColor Yellow
Write-Host "🛑 Pour arrêter : docker-compose down" -ForegroundColor Yellow
Write-Host ""

Read-Host "Appuyez sur Entrée pour continuer"
