#!/usr/bin/env node

/**
 * Script de test des routes pour les plans d'action
 * Usage: node scripts/test-action-plan-routes.js
 */

const axios = require('axios');

const API_BASE = 'http://localhost:1337/api';

async function testActionPlanRoutes() {
  console.log('🧪 Test des routes pour les plans d\'action...\n');

  const tests = [
    {
      name: 'Tous les plans (FR)',
      url: `${API_BASE}/plan-actions?locale=fr&sort=year:asc`,
      expectedFields: ['id', 'attributes']
    },
    {
      name: 'Tous les plans (EN)',
      url: `${API_BASE}/plan-actions?locale=en&sort=year:asc`,
      expectedFields: ['id', 'attributes']
    },
    {
      name: 'Plans avec limite',
      url: `${API_BASE}/plan-actions?locale=fr&pagination[limit]=3&sort=year:asc`,
      expectedFields: ['id', 'attributes']
    },
    {
      name: 'Plans par année (2024)',
      url: `${API_BASE}/plan-actions?locale=fr&filters[year][$eq]=2024`,
      expectedFields: ['id', 'attributes']
    },
    {
      name: 'Pagination (page 1, 2 éléments)',
      url: `${API_BASE}/plan-actions?locale=fr&pagination[start]=0&pagination[limit]=2&sort=year:asc`,
      expectedFields: ['id', 'attributes']
    }
  ];

  for (const test of tests) {
    try {
      console.log(`🔍 Test: ${test.name}`);
      console.log(`   URL: ${test.url}`);
      
      const response = await axios.get(test.url, { timeout: 5000 });
      
      console.log(`   ✅ Status: ${response.status}`);
      
      if (response.data && response.data.data) {
        console.log(`   📊 Données reçues: ${response.data.data.length} plan(s) d'action`);
        
        // Vérifier les champs attendus
        if (response.data.data.length > 0) {
          const firstItem = response.data.data[0];
          console.log(`   📋 Structure du premier élément:`);
          console.log(`      - ID: ${firstItem.id}`);
          console.log(`      - Année: ${firstItem.attributes?.year || 'N/A'}`);
          console.log(`      - Titre: ${firstItem.attributes?.title || 'N/A'}`);
          console.log(`      - Description: ${firstItem.attributes?.description ? 'Présente' : 'Absente'}`);
          console.log(`      - Ordre: ${firstItem.attributes?.order || 'N/A'}`);
        }
        
        // Vérifier la pagination si présente
        if (response.data.meta && response.data.meta.pagination) {
          const pagination = response.data.meta.pagination;
          console.log(`   📄 Pagination:`);
          console.log(`      - Page: ${pagination.page || 'N/A'}`);
          console.log(`      - Taille: ${pagination.pageSize || 'N/A'}`);
          console.log(`      - Total: ${pagination.total || 'N/A'}`);
          console.log(`      - Pages: ${pagination.pageCount || 'N/A'}`);
        }
      } else {
        console.log(`   ⚠️  Aucune donnée reçue`);
      }
      
    } catch (error) {
      if (error.response) {
        console.log(`   ❌ Erreur ${error.response.status}: ${error.response.statusText}`);
        if (error.response.data && error.response.data.error) {
          console.log(`   📝 Détails: ${error.response.data.error.message}`);
          
          if (error.response.status === 403) {
            console.log(`   💡 Solution: Configurer les permissions dans Strapi Admin`);
            console.log(`      → Settings → Users & Permissions Plugin → Roles → Public`);
            console.log(`      → Activer "find" et "findOne" pour plan-action`);
          }
        }
      } else {
        console.log(`   ❌ Erreur de connexion: ${error.message}`);
        console.log(`   💡 Vérifiez que Strapi est démarré sur http://localhost:1337`);
      }
    }
    
    console.log();
  }

  // Test d'un plan spécifique si des données existent
  try {
    console.log(`🔍 Test d'un plan spécifique...`);
    const response = await axios.get(`${API_BASE}/plan-actions?locale=fr&pagination[limit]=1`, { timeout: 5000 });
    
    if (response.data && response.data.data && response.data.data.length > 0) {
      const planId = response.data.data[0].id;
      console.log(`   Test avec l'ID: ${planId}`);
      
      const specificResponse = await axios.get(`${API_BASE}/plan-actions/${planId}?locale=fr`, { timeout: 5000 });
      console.log(`   ✅ Plan spécifique récupéré avec succès`);
      console.log(`   📋 Titre: ${specificResponse.data.data?.attributes?.title || 'N/A'}`);
    } else {
      console.log(`   ⚠️  Aucun plan disponible pour le test spécifique`);
    }
  } catch (error) {
    console.log(`   ❌ Erreur lors du test spécifique: ${error.message}`);
  }

  console.log('\n🏁 Tests terminés');
  console.log('\n💡 Conseils:');
  console.log('- Assurez-vous que Strapi est démarré (npm run develop)');
  console.log('- Vérifiez les permissions dans l\'admin Strapi');
  console.log('- Créez des plans d\'action via l\'admin si aucun n\'existe');
}

// Exécuter les tests
testActionPlanRoutes().catch(console.error);
