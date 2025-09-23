#!/usr/bin/env node

/**
 * Script de test pour vérifier le sitemap
 * Usage: node scripts/test-sitemap.js
 */

const http = require('http');

console.log('🗺️  Test du sitemap dynamique...\n');

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/api/sitemap.xml',
  method: 'GET',
  headers: {
    'Accept': 'application/xml'
  }
};

const req = http.request(options, (res) => {
  console.log(`Status: ${res.statusCode}`);
  console.log(`Content-Type: ${res.headers['content-type']}`);
  
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    if (res.statusCode === 200) {
      console.log('✅ Sitemap généré avec succès');
      
      // Vérifications basiques
      if (data.includes('<?xml version="1.0" encoding="UTF-8"?>')) {
        console.log('✅ Format XML valide');
      } else {
        console.log('❌ Format XML invalide');
      }
      
      if (data.includes('https://medianeg.org/')) {
        console.log('✅ URLs générées correctement');
      } else {
        console.log('❌ URLs manquantes');
      }
      
      if (data.includes('hreflang')) {
        console.log('✅ Hreflang configuré');
      } else {
        console.log('❌ Hreflang manquant');
      }
      
      console.log(`\n📊 Taille du sitemap: ${data.length} caractères`);
    } else {
      console.log('❌ Erreur lors de la génération du sitemap');
    }
  });
});

req.on('error', (error) => {
  console.log(`❌ Erreur de connexion: ${error.message}`);
  console.log('💡 Assurez-vous que le serveur de développement est démarré (npm run dev)');
});

req.end();
