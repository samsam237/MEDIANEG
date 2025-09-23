'use strict';

/**
 * contact-message controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::contact-message.contact-message', ({ strapi }) => ({
  async create(ctx) {
    try {
      const { data } = ctx.request.body;
      
      // Create the contact message
      const contactMessage = await strapi.entityService.create('api::contact-message.contact-message', {
        data: {
          name: data.name,
          email: data.email,
          message: data.message,
          subject: data.subject || 'Nouveau message de contact',
        },
      });

      // Here you could add email notification logic
      // await strapi.plugins['email'].services.email.send({
      //   to: 'contact@medianeg.org',
      //   from: data.email,
      //   subject: data.subject || 'Nouveau message de contact',
      //   text: `Message de ${data.name} (${data.email}):\n\n${data.message}`,
      // });

      return { data: contactMessage };
    } catch (error) {
      ctx.throw(500, 'Erreur lors de l\'envoi du message');
    }
  },
}));
