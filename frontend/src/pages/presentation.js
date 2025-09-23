import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { strapi } from '@/lib/api';
import { Users, Shield, Award } from 'lucide-react';
import SEOHead from '@/components/SEO/SEOHead';
import { getPresentationPageStructuredData } from '@/components/SEO/StructuredData';

const PresentationPage = ({ presentations }) => {
  const { t } = useTranslation('common');

  const presentation = presentations?.data?.[0]?.attributes || {};

  const sections = [
    {
      icon: <Users className="w-12 h-12" />,
      title: t('presentation.role'),
      content: presentation.role || "MEDIANEG International joue un rôle central dans la promotion de la paix et de la résolution des conflits par la médiation et la négociation. Notre organisation facilite les dialogues entre les parties en conflit et propose des solutions durables basées sur la compréhension mutuelle et le respect des droits de l'homme.",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: t('presentation.neutrality'),
      content: presentation.neutrality || "La neutralité est au cœur de notre approche. Nous maintenons une position impartiale dans tous les processus de médiation, garantissant ainsi la confiance de toutes les parties impliquées. Cette neutralité nous permet de créer un environnement sûr et équitable pour la résolution des conflits.",
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: t('presentation.commissions'),
      content: presentation.commissions || "Nos différentes commissions spécialisées travaillent en coordination pour aborder les aspects complexes des conflits internationaux. Chaque commission apporte son expertise dans des domaines spécifiques, allant de la médiation politique à la résolution des conflits économiques.",
    },
  ];

  return (
    <>
      <SEOHead
        title={t('seo.pages.presentation.title')}
        description={t('seo.pages.presentation.description')}
        keywords={t('seo.pages.presentation.keywords')}
        structuredData={getPresentationPageStructuredData(t)}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-navy-50 py-16">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              {t('presentation.title')}
            </h1>
            <p className="text-xl text-gray-600">
              {t('presentationPage.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container-custom">
          {/* Introduction */}
          {presentation.content && (
            <div className="max-w-4xl mx-auto mb-16">
              <div 
                className="prose prose-lg max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: presentation.content }}
              />
            </div>
          )}

          {/* Sections */}
          <div className="space-y-16">
            {sections.map((section, index) => (
              <div key={index} className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0 lg:space-x-12">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                      {section.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-navy-900 mb-6">
                      {section.title}
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-navy-900">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            {t('presentationPage.missionTitle')}
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t('presentationPage.missionDescription')}
          </p>
        </div>
      </section>
    </>
  );
};

export async function getStaticProps({ locale }) {
  try {
    const presentations = await strapi.getPresentations(locale);
    
    return {
      props: {
        presentations,
        ...(await serverSideTranslations(locale, ['common'])),
      },
      revalidate: 3600, // Revalidate every hour
    };
  } catch (error) {
    console.error('Error fetching presentations:', error);
    return {
      props: {
        presentations: { data: [] },
        ...(await serverSideTranslations(locale, ['common'])),
      },
    };
  }
}

export default PresentationPage;
