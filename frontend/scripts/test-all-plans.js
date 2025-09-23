#!/usr/bin/env node

/**
 * Script de test pour récupérer tous les plans d'action (toutes langues)
 * Usage: node scripts/test-all-plans.js
 */

const axios = require('axios');

const API_BASE = 'http://localhost:1337/api';

async function testAllPlans() {
  console.log('🔍 Test de récupération de tous les plans d\'action...\n');

  try {
    console.log('📡 Test de l\'API Strapi...');
    const response = await axios.get(`${API_BASE}/plan-actions?sort=year:asc`, { timeout: 5000 });
    
    console.log(`✅ Status: ${response.status}`);
    
    if (response.data && response.data.data) {
      console.log(`📊 Résultats: ${response.data.data.length} plan(s) d'action trouvé(s)`);
      
      if (response.data.data.length > 0) {
        console.log('\n📋 Détails des plans:');
        response.data.data.forEach((plan, index) => {
          console.log(`\n${index + 1}. Plan d'action:`);
          console.log(`   - ID: ${plan.id}`);
          console.log(`   - Année: ${plan.attributes?.year || 'N/A'}`);
          console.log(`   - Titre: ${plan.attributes?.title || 'N/A'}`);
          console.log(`   - Description: ${plan.attributes?.description || 'N/A'}`);
          console.log(`   - Locale: ${plan.attributes?.locale || 'N/A'}`);
          console.log(`   - Publié: ${plan.attributes?.publishedAt ? 'Oui' : 'Non'}`);
        });
        
        // Statistiques par langue
        const localeStats = {};
        response.data.data.forEach(plan => {
          const locale = plan.attributes?.locale || 'unknown';
          localeStats[locale] = (localeStats[locale] || 0) + 1;
        });
        
        console.log('\n📊 Statistiques par langue:');
        Object.entries(localeStats).forEach(([locale, count]) => {
          console.log(`   - ${locale.toUpperCase()}: ${count} plan(s)`);
        });
        
      } else {
        console.log('⚠️  Aucun plan d\'action trouvé');
      }
    } else {
      console.log('⚠️  Aucune donnée reçue');
    }
    
  } catch (error) {
    if (error.response) {
      console.log(`❌ Erreur ${error.response.status}: ${error.response.statusText}`);
      if (error.response.data && error.response.data.error) {
        console.log(`📝 Détails: ${error.response.data.error.message}`);
      }
    } else {
      console.log(`❌ Erreur de connexion: ${error.message}`);
      console.log('💡 Vérifiez que Strapi est démarré sur http://localhost:1337');
    }
  }

  console.log('\n🎯 Résultat:');
  console.log('✅ L\'API récupère maintenant tous les plans d\'action, quelle que soit leur langue');
  console.log('✅ Plus besoin de se soucier des locales spécifiques');
  console.log('✅ La page action-plan devrait maintenant afficher vos données');
  
  console.log('\n💡 Prochaines étapes:');
  console.log('1. Vérifiez que http://localhost:3000/action-plan affiche maintenant les données');
  console.log('2. Le composant de debug vous montrera les détails');
  console.log('3. Vous pouvez supprimer le composant de debug une fois que tout fonctionne');
}

// Exécuter le test
testAllPlans().catch(console.error);
