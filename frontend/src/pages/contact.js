import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import SEOHead from '@/components/SEO/SEOHead';
import { getContactPageStructuredData } from '@/components/SEO/StructuredData';

const ContactPage = () => {
  const { t } = useTranslation('common');

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t('contact.address'),
      details: [
        "123 Avenue de la Paix",
        "75000 Paris, France"
      ],
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: t('contact.phone'),
      details: [
        "+33 1 23 45 67 89",
        t('contactPage.availability')
      ],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: t('contact.email'),
      details: [
        "contact@medianeg.org",
        "info@medianeg.org"
      ],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: t('contactPage.hours'),
      details: [
        t('contactPage.hoursWeekdays'),
        t('contactPage.hoursEmergency')
      ],
    },
  ];

  return (
    <>
      <SEOHead
        title={t('seo.pages.contact.title')}
        description={t('seo.pages.contact.description')}
        keywords={t('seo.pages.contact.keywords')}
        structuredData={getContactPageStructuredData(t)}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-navy-50 py-16">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-gray-600">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-8">
                {t('contactPage.coordinatesTitle')}
              </h2>
              
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy-900 mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-12 p-6 bg-primary-50 rounded-lg">
                <h3 className="text-lg font-semibold text-navy-900 mb-3">
                  {t('contactPage.whyContactTitle')}
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>{t('contactPage.whyContactItems.mediation')}</li>
                  <li>{t('contactPage.whyContactItems.training')}</li>
                  <li>{t('contactPage.whyContactItems.partnership')}</li>
                  <li>{t('contactPage.whyContactItems.general')}</li>
                  <li>{t('contactPage.whyContactItems.emergency')}</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">
              {t('contactPage.locationTitle')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('contactPage.locationSubtitle')}
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">
                  {t('contactPage.mapPlaceholder')}
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  123 Avenue de la Paix, 75000 Paris, France
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default ContactPage;
