#!/usr/bin/env node

/**
 * Script de debug pour les plans d'action
 * Usage: node scripts/debug-action-plan.js
 */

const axios = require('axios');

const API_BASE = 'http://localhost:1337/api';

async function debugActionPlan() {
  console.log('🔍 Debug des plans d\'action...\n');

  const tests = [
    {
      name: 'Plans en français',
      url: `${API_BASE}/plan-actions?locale=fr&sort=year:asc`
    },
    {
      name: 'Plans en anglais',
      url: `${API_BASE}/plan-actions?locale=en&sort=year:asc`
    },
    {
      name: 'Tous les plans (sans locale)',
      url: `${API_BASE}/plan-actions?sort=year:asc`
    }
  ];

  for (const test of tests) {
    try {
      console.log(`🔍 Test: ${test.name}`);
      console.log(`   URL: ${test.url}`);
      
      const response = await axios.get(test.url, { timeout: 5000 });
      
      console.log(`   ✅ Status: ${response.status}`);
      
      if (response.data && response.data.data) {
        console.log(`   📊 Résultats: ${response.data.data.length} plan(s) d'action`);
        
        if (response.data.data.length > 0) {
          console.log(`   📋 Détails du premier plan:`);
          const firstPlan = response.data.data[0];
          console.log(`      - ID: ${firstPlan.id}`);
          console.log(`      - Année: ${firstPlan.attributes?.year || 'N/A'}`);
          console.log(`      - Titre: ${firstPlan.attributes?.title || 'N/A'}`);
          console.log(`      - Description: ${firstPlan.attributes?.description || 'N/A'}`);
          console.log(`      - Locale: ${firstPlan.attributes?.locale || 'N/A'}`);
          console.log(`      - Publié: ${firstPlan.attributes?.publishedAt ? 'Oui' : 'Non'}`);
        }
      } else {
        console.log(`   ⚠️  Aucune donnée reçue`);
      }
      
    } catch (error) {
      if (error.response) {
        console.log(`   ❌ Erreur ${error.response.status}: ${error.response.statusText}`);
        if (error.response.data && error.response.data.error) {
          console.log(`   📝 Détails: ${error.response.data.error.message}`);
        }
      } else {
        console.log(`   ❌ Erreur de connexion: ${error.message}`);
      }
    }
    
    console.log();
  }

  // Test de l'API frontend
  console.log('🔍 Test de l\'API frontend...');
  try {
    const { strapi } = require('../src/lib/api');
    
    console.log('   Test getActionPlan("fr")...');
    const frResult = await strapi.getActionPlan('fr');
    console.log(`   📊 Résultats FR: ${frResult.data ? frResult.data.length : 0} plan(s)`);
    
    console.log('   Test getActionPlan("en")...');
    const enResult = await strapi.getActionPlan('en');
    console.log(`   📊 Résultats EN: ${enResult.data ? enResult.data.length : 0} plan(s)`);
    
  } catch (error) {
    console.log(`   ❌ Erreur API frontend: ${error.message}`);
  }

  console.log('\n💡 Solutions recommandées:');
  console.log('1. Créer du contenu en français dans Strapi Admin');
  console.log('2. Ou modifier l\'existant pour ajouter la version française');
  console.log('3. Ou utiliser le fallback automatique (déjà implémenté)');
  
  console.log('\n🏁 Debug terminé');
}

// Exécuter le debug
debugActionPlan().catch(console.error);
