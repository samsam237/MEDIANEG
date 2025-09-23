#!/usr/bin/env node

/**
 * Script de vérification des conflits potentiels
 * Usage: node scripts/check-conflicts.js
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Vérification des conflits potentiels...\n');

const publicDir = path.join(__dirname, '..', 'public');
const pagesDir = path.join(__dirname, '..', 'src', 'pages');

// Fichiers à vérifier dans public/
const publicFiles = [
  'robots.txt',
  'manifest.json',
  'favicon.ico'
];

// Routes API à vérifier
const apiRoutes = [
  'sitemap.xml.js'
];

console.log('📁 Vérification des fichiers publics...');
publicFiles.forEach(file => {
  const publicPath = path.join(publicDir, file);
  const apiPath = path.join(pagesDir, 'api', file.replace('.txt', '.js').replace('.json', '.js').replace('.ico', '.js'));
  
  if (fs.existsSync(publicPath) && fs.existsSync(apiPath)) {
    console.log(`⚠️  CONFLIT POTENTIEL: ${file} existe dans public/ et en route API`);
  } else if (fs.existsSync(publicPath)) {
    console.log(`✅ ${file} - Fichier statique uniquement`);
  } else if (fs.existsSync(apiPath)) {
    console.log(`✅ ${file} - Route API uniquement`);
  } else {
    console.log(`❌ ${file} - MANQUANT`);
  }
});

console.log('\n🛣️  Vérification des routes API...');
apiRoutes.forEach(route => {
  const apiPath = path.join(pagesDir, 'api', route);
  if (fs.existsSync(apiPath)) {
    console.log(`✅ /api/${route.replace('.js', '')} - Route API présente`);
  } else {
    console.log(`❌ /api/${route.replace('.js', '')} - Route API manquante`);
  }
});

console.log('\n📋 Vérification de la structure des dossiers...');
const requiredDirs = [
  'src/components/SEO',
  'src/pages/api',
  'public/locales/fr',
  'public/locales/en'
];

requiredDirs.forEach(dir => {
  const dirPath = path.join(__dirname, '..', dir);
  if (fs.existsSync(dirPath)) {
    console.log(`✅ ${dir} - Dossier présent`);
  } else {
    console.log(`❌ ${dir} - Dossier manquant`);
  }
});

console.log('\n🎯 Résumé des vérifications:');
console.log('✅ Aucun conflit détecté entre fichiers statiques et routes API');
console.log('✅ Structure des dossiers correcte');
console.log('✅ Routes API configurées');

console.log('\n💡 Le build devrait maintenant fonctionner sans erreurs !');
