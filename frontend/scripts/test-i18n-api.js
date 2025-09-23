#!/usr/bin/env node

/**
 * Test de l'API avec internationalisation pour les plans d'action
 * Usage: node scripts/test-i18n-api.js
 */

const axios = require('axios');

async function testI18nAPI() {
  console.log('🌍 Test de l\'API avec internationalisation...\n');

  const baseUrl = 'http://localhost:1337/api/plan-actions';
  
  try {
    // Test pour le français
    console.log('📝 Test pour le français (locale=fr):');
    const frenchResponse = await axios.get(`${baseUrl}?locale=fr&sort=year:asc`);
    console.log('✅ Statut:', frenchResponse.status);
    console.log('📊 Nombre de plans:', frenchResponse.data.data?.length || 0);
    
    if (frenchResponse.data.data?.length > 0) {
      console.log('🎯 Premier plan français:');
      const firstPlan = frenchResponse.data.data[0];
      console.log('- ID:', firstPlan.id);
      console.log('- Titre:', firstPlan.attributes.title);
      console.log('- Locale:', firstPlan.attributes.locale);
      console.log('- Année:', firstPlan.attributes.year);
    }
    
    console.log('\n' + '='.repeat(50) + '\n');
    
    // Test pour l'anglais
    console.log('📝 Test pour l'anglais (locale=en):');
    const englishResponse = await axios.get(`${baseUrl}?locale=en&sort=year:asc`);
    console.log('✅ Statut:', englishResponse.status);
    console.log('📊 Nombre de plans:', englishResponse.data.data?.length || 0);
    
    if (englishResponse.data.data?.length > 0) {
      console.log('🎯 Premier plan anglais:');
      const firstPlan = englishResponse.data.data[0];
      console.log('- ID:', firstPlan.id);
      console.log('- Titre:', firstPlan.attributes.title);
      console.log('- Locale:', firstPlan.attributes.locale);
      console.log('- Année:', firstPlan.attributes.year);
    }
    
    console.log('\n' + '='.repeat(50) + '\n');
    
    // Test sans locale (devrait retourner la locale par défaut)
    console.log('📝 Test sans locale spécifiée:');
    const defaultResponse = await axios.get(`${baseUrl}?sort=year:asc`);
    console.log('✅ Statut:', defaultResponse.status);
    console.log('📊 Nombre de plans:', defaultResponse.data.data?.length || 0);
    
    if (defaultResponse.data.data?.length > 0) {
      console.log('🎯 Premier plan (défaut):');
      const firstPlan = defaultResponse.data.data[0];
      console.log('- ID:', firstPlan.id);
      console.log('- Titre:', firstPlan.attributes.title);
      console.log('- Locale:', firstPlan.attributes.locale);
      console.log('- Année:', firstPlan.attributes.year);
    }
    
  } catch (error) {
    console.log('❌ Erreur API:', error.message);
    if (error.response) {
      console.log('Status:', error.response.status);
      console.log('Data:', error.response.data);
    }
  }
}

testI18nAPI();
