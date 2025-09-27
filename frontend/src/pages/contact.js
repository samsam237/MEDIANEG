import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import ContactForm from '@/components/ContactForm';
import InteractiveMap from '@/components/Map/InteractiveMap';
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
        "Grand-Rue 1A",
        "2000 Neuchâtel, Suisse"
      ],
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: t('contact.phone'),
      details: [
        "+41 (58) 201 0612",
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
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/backgrounds/hero-technology-innovation.jpg')`,
              backgroundAttachment: 'fixed'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50/90 to-navy-50/90" />
        </div>
        <div className="relative z-10 container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-white/90 drop-shadow-md">
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
              <h2 className="text-4xl font-bold text-primary-700 mb-8">
                {t('contactPage.coordinatesTitle')}
              </h2>
              
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary-700 mb-2">
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
                <h3 className="text-lg font-semibold text-primary-700 mb-3">
                  {t('contactPage.whyContactTitle')}
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>{t('contactPage.whyContactItems.mediation')}</li>
                  <li>{t('contactPage.whyContactItems.sourcing')}</li>
                  <li>{t('contactPage.whyContactItems.negotiation')}</li>
                  <li>{t('contactPage.whyContactItems.products')}</li>
                  <li>{t('contactPage.whyContactItems.logistics')}</li>
                  <li>{t('contactPage.whyContactItems.general')}</li>
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
            <h2 className="text-4xl font-bold text-primary-700 mb-4">
              {t('contactPage.locationTitle')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('contactPage.locationSubtitle')}
            </p>
          </div>
          
          <InteractiveMap 
            height="h-96"
            showTitle={false}
          />
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
