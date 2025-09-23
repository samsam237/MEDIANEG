#!/usr/bin/env node

/**
 * Script de configuration automatique des permissions Strapi
 * Usage: node scripts/setup-permissions.js
 */

const strapi = require('@strapi/strapi');

async function setupPermissions() {
  try {
    console.log('🔧 Configuration des permissions Strapi...\n');

    // Démarrer Strapi
    const app = await strapi().load();
    
    // Configuration des permissions pour le rôle public
    const publicRole = await strapi.query('plugin::users-permissions.role').findOne({
      where: { type: 'public' }
    });

    if (!publicRole) {
      console.log('❌ Rôle public non trouvé');
      return;
    }

    // Collections à configurer
    const collections = [
      {
        name: 'presentation',
        permissions: ['find', 'findOne'] // Lecture seule
      },
      {
        name: 'plan-action', 
        permissions: ['find', 'findOne'] // Lecture seule
      },
      {
        name: 'contact-message',
        permissions: ['create'] // Écriture seule (envoi de messages)
      }
    ];

    // Configurer les permissions pour chaque collection
    for (const collection of collections) {
      console.log(`📝 Configuration de ${collection.name}...`);
      
      for (const action of collection.permissions) {
        const permission = await strapi.query('plugin::users-permissions.permission').findOne({
          where: {
            action: `api::${collection.name}.${collection.name}.${action}`,
            role: publicRole.id
          }
        });

        if (permission) {
          // Permission existe déjà, l'activer
          await strapi.query('plugin::users-permissions.permission').update({
            where: { id: permission.id },
            data: { enabled: true }
          });
          console.log(`  ✅ ${action} activé`);
        } else {
          // Créer la permission
          await strapi.query('plugin::users-permissions.permission').create({
            data: {
              action: `api::${collection.name}.${collection.name}.${action}`,
              subject: null,
              properties: {},
              conditions: [],
              role: publicRole.id,
              enabled: true
            }
          });
          console.log(`  ✅ ${action} créé et activé`);
        }
      }
    }

    console.log('\n🎉 Permissions configurées avec succès !');
    console.log('\n📋 Résumé des permissions publiques :');
    console.log('- presentations: GET (find, findOne)');
    console.log('- plan-actions: GET (find, findOne)');
    console.log('- contact-messages: POST (create)');

  } catch (error) {
    console.error('❌ Erreur lors de la configuration :', error);
  } finally {
    process.exit(0);
  }
}

// Exécuter le script
setupPermissions();
