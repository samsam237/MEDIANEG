import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const ContactSection = () => {
  const { t } = useTranslation('common');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simuler l'envoi du formulaire
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'contact@medianeg.org',
      description: 'Réponse sous 24h'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Téléphone',
      content: '+33 1 23 45 67 89',
      description: 'Du lundi au vendredi, 9h-18h'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Adresse',
      content: 'Grand-Rue 1A',
      description: '2000 Neuchâtel, Suisse'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Horaires',
      content: 'Lun - Ven: 9h00 - 18h00',
      description: 'CET (Central European Time)'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-primary-600 font-semibold text-lg uppercase tracking-wide mb-4" data-aos="fade-up">
            Contactez-nous
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6" data-aos="fade-up" data-aos-delay="200">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="400">
            Notre équipe d'experts est à votre disposition pour vous accompagner dans vos projets 
            de médiation et négociation commerciale internationale.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-8" data-aos="fade-right" data-aos-delay="600">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Informations de Contact
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay={`${800 + (index * 100)}`}>
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 flex-shrink-0 hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h4>
                      <p className="text-gray-900 font-medium mb-1">
                        {info.content}
                      </p>
                      <p className="text-sm text-gray-600">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300" data-aos="fade-up" data-aos-delay="1200">
              <h4 className="font-bold text-gray-900 mb-3">
                Pourquoi nous contacter ?
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2" data-aos="fade-up" data-aos-delay="1300">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Consultation gratuite pour évaluer vos besoins</span>
                </li>
                <li className="flex items-center space-x-2" data-aos="fade-up" data-aos-delay="1400">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Devis personnalisé sous 48h</span>
                </li>
                <li className="flex items-center space-x-2" data-aos="fade-up" data-aos-delay="1500">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Accompagnement dédié tout au long du projet</span>
                </li>
                <li className="flex items-center space-x-2" data-aos="fade-up" data-aos-delay="1600">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Support technique et commercial inclus</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300" data-aos="fade-left" data-aos-delay="600">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Envoyez-nous un message
            </h3>

            {submitStatus === 'success' && (
              <div className="bg-secondary-50 border border-secondary-200 rounded-lg p-4 mb-6 flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-secondary-600" />
                <p className="text-secondary-800">
                  Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-center space-x-3">
                <AlertCircle className="w-5 h-5 text-red-600" />
                <p className="text-red-800">
                  Une erreur s'est produite lors de l'envoi. Veuillez réessayer ou nous contacter directement.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Entreprise / Organisation
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                  placeholder="Nom de votre organisation"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Sujet *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                  placeholder="Objet de votre message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 resize-none"
                  placeholder="Décrivez votre projet et vos besoins..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary inline-flex items-center justify-center space-x-2 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <span>Envoyer le message</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
