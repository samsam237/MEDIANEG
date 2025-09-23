#!/usr/bin/env node

/**
 * Script de vérification des permissions Strapi
 * Usage: node scripts/check-permissions.js
 */

const strapi = require('@strapi/strapi');

async function checkPermissions() {
  try {
    console.log('🔍 Vérification des permissions Strapi...\n');

    // Démarrer Strapi
    const app = await strapi().load();
    
    // Récupérer le rôle public
    const publicRole = await strapi.query('plugin::users-permissions.role').findOne({
      where: { type: 'public' }
    });

    if (!publicRole) {
      console.log('❌ Rôle public non trouvé');
      return;
    }

    console.log(`📋 Rôle public trouvé (ID: ${publicRole.id})`);

    // Récupérer toutes les permissions du rôle public
    const permissions = await strapi.query('plugin::users-permissions.permission').findMany({
      where: { role: publicRole.id }
    });

    console.log(`\n📊 Permissions trouvées: ${permissions.length}\n`);

    // Grouper par collection
    const collections = {};
    permissions.forEach(permission => {
      const match = permission.action.match(/api::(.+)\.(.+)\.(.+)/);
      if (match) {
        const [, collection, , action] = match;
        if (!collections[collection]) {
          collections[collection] = [];
        }
        collections[collection].push({
          action,
          enabled: permission.enabled
        });
      }
    });

    // Afficher les permissions par collection
    Object.keys(collections).forEach(collection => {
      console.log(`📁 ${collection}:`);
      collections[collection].forEach(perm => {
        const status = perm.enabled ? '✅' : '❌';
        console.log(`  ${status} ${perm.action}`);
      });
      console.log();
    });

    // Vérifier les collections manquantes
    const expectedCollections = ['presentation', 'plan-action', 'contact-message'];
    const missingCollections = expectedCollections.filter(col => !collections[col]);

    if (missingCollections.length > 0) {
      console.log('⚠️  Collections sans permissions configurées:');
      missingCollections.forEach(col => console.log(`  - ${col}`));
    }

  } catch (error) {
    console.error('❌ Erreur lors de la vérification :', error);
  } finally {
    process.exit(0);
  }
}

// Exécuter le script
checkPermissions();
