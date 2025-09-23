'use client';

import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { strapi } from '@/lib/api';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const { t } = useTranslation('common');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Désactiver temporairement la soumission du formulaire
    setSubmitStatus('error');
    return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await strapi.sendContactMessage(formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="card max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-navy-900 mb-6">{t('contact.form.send')}</h2>
      
      {/* Message d'information */}
      <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <h3 className="text-sm font-medium text-blue-800 mb-1">Formulaire temporairement indisponible</h3>
            <p className="text-sm text-blue-700">
              Le formulaire de contact est temporairement désactivé. Pour nous contacter, veuillez utiliser directement notre adresse email : 
              <a href="mailto:contact@medianeg.org" className="font-medium underline ml-1">contact@medianeg.org</a>
            </p>
          </div>
        </div>
      </div>
      
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <p className="text-green-800">{t('contact.form.success')}</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
          <AlertCircle className="w-5 h-5 text-red-600" />
          <p className="text-red-800">Le formulaire de contact est temporairement désactivé. Veuillez nous contacter directement par email à contact@medianeg.org</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              {t('contact.form.name')} *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              disabled
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder={t('placeholders.fullName')}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              {t('contact.form.email')} *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              disabled
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder={t('placeholders.emailAddress')}
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            {t('contact.form.subject')}
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            disabled
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder={t('placeholders.messageSubject')}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            {t('contact.form.message')} *
          </label>
          <textarea
            id="message"
            name="message"
            required
            disabled
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-vertical disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder={t('placeholders.yourMessage')}
          />
        </div>

        <button
          type="submit"
          disabled={true}
          className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="w-4 h-4" />
          <span>Formulaire désactivé</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
