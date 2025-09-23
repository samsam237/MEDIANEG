#!/usr/bin/env node

/**
 * Test direct de l'API pour les plans d'action
 * Usage: node scripts/test-api-direct.js
 */

const axios = require('axios');

async function testAPI() {
  console.log('🧪 Test direct de l\'API...\n');

  try {
    const response = await axios.get('http://localhost:1337/api/plan-actions?sort=year:asc');
    
    console.log('✅ API accessible');
    console.log('📊 Données reçues:', JSON.stringify(response.data, null, 2));
    
    if (response.data.data && response.data.data.length > 0) {
      console.log('\n🎯 Premier plan d\'action:');
      const firstPlan = response.data.data[0];
      console.log('- ID:', firstPlan.id);
      console.log('- Année:', firstPlan.attributes.year);
      console.log('- Titre:', firstPlan.attributes.title);
      console.log('- Description:', firstPlan.attributes.description);
      console.log('- Locale:', firstPlan.attributes.locale);
    }
    
  } catch (error) {
    console.log('❌ Erreur API:', error.message);
    if (error.response) {
      console.log('Status:', error.response.status);
      console.log('Data:', error.response.data);
    }
  }
}

testAPI();
