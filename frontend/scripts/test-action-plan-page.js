#!/usr/bin/env node

/**
 * Test de la page action-plan avec internationalisation
 * Usage: node scripts/test-action-plan-page.js
 */

const axios = require('axios');

async function testActionPlanPage() {
  console.log('📄 Test de la page action-plan...\n');

  try {
    // Test de la page en français
    console.log('🇫🇷 Test page française:');
    const frenchPage = await axios.get('http://localhost:3000/fr/action-plan');
    console.log('✅ Statut:', frenchPage.status);
    console.log('📏 Taille de la réponse:', frenchPage.data.length, 'caractères');
    
    // Vérifier si la timeline est présente
    const hasTimeline = frenchPage.data.includes('Timeline') || frenchPage.data.includes('chronologie');
    console.log('🎯 Timeline présente:', hasTimeline ? 'Oui' : 'Non');
    
    // Vérifier si le debug est présent
    const hasDebug = frenchPage.data.includes('Debug des plans d\'action');
    console.log('🔍 Debug présent:', hasDebug ? 'Oui' : 'Non');
    
    console.log('\n' + '='.repeat(50) + '\n');
    
    // Test de la page en anglais
    console.log('🇬🇧 Test page anglaise:');
    const englishPage = await axios.get('http://localhost:3000/en/action-plan');
    console.log('✅ Statut:', englishPage.status);
    console.log('📏 Taille de la réponse:', englishPage.data.length, 'caractères');
    
    // Vérifier si la timeline est présente
    const hasTimelineEn = englishPage.data.includes('Timeline') || englishPage.data.includes('timeline');
    console.log('🎯 Timeline présente:', hasTimelineEn ? 'Oui' : 'Non');
    
    // Vérifier si le debug est présent
    const hasDebugEn = englishPage.data.includes('Debug des plans d\'action') || englishPage.data.includes('Action plan debug');
    console.log('🔍 Debug présent:', hasDebugEn ? 'Oui' : 'Non');
    
  } catch (error) {
    console.log('❌ Erreur:', error.message);
    if (error.response) {
      console.log('Status:', error.response.status);
    }
  }
}

testActionPlanPage();
