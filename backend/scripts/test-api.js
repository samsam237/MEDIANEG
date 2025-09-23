#!/usr/bin/env node

/**
 * Script de test des API Strapi
 * Usage: node scripts/test-api.js
 */

const axios = require('axios');

const API_BASE = 'http://localhost:1337/api';

async function testAPI() {
  console.log('🧪 Test des API Strapi...\n');

  const tests = [
    {
      name: 'Presentations (FR)',
      url: `${API_BASE}/presentations?locale=fr`,
      method: 'GET'
    },
    {
      name: 'Presentations (EN)',
      url: `${API_BASE}/presentations?locale=en`,
      method: 'GET'
    },
    {
      name: 'Plan Actions (FR)',
      url: `${API_BASE}/plan-actions?locale=fr&sort=year:asc`,
      method: 'GET'
    },
    {
      name: 'Plan Actions (EN)',
      url: `${API_BASE}/plan-actions?locale=en&sort=year:asc`,
      method: 'GET'
    },
    {
      name: 'Contact Message (POST)',
      url: `${API_BASE}/contact-messages`,
      method: 'POST',
      data: {
        data: {
          name: 'Test User',
          email: 'test@example.com',
          subject: 'Test API',
          message: 'Test message from API script'
        }
      }
    }
  ];

  for (const test of tests) {
    try {
      console.log(`🔍 Test: ${test.name}`);
      console.log(`   URL: ${test.url}`);
      
      const response = await axios({
        method: test.method,
        url: test.url,
        data: test.data,
        timeout: 5000
      });

      console.log(`   ✅ Status: ${response.status}`);
      
      if (test.method === 'GET') {
        console.log(`   📊 Données reçues: ${response.data.data ? response.data.data.length : 0} éléments`);
      } else {
        console.log(`   📤 Message envoyé avec succès`);
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

  console.log('🏁 Tests terminés');
}

// Exécuter les tests
testAPI().catch(console.error);
