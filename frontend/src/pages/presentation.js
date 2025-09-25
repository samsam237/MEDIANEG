import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { strapi } from '@/lib/api';
import { Globe, Shield, TrendingUp, Target, Users } from 'lucide-react';
import SEOHead from '@/components/SEO/SEOHead';
import { getPresentationPageStructuredData } from '@/components/SEO/StructuredData';

const PresentationPage = ({ presentations }) => {
  const { t } = useTranslation('common');

  const presentation = presentations?.data?.[0]?.attributes || {};

  const sections = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: t('presentation.role'),
      content: presentation.expertise || t('presentationPage.missionDescription'),
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: t('presentation.neutrality'),
      content: presentation.neutrality || t('features.neutralityDescription'),
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: t('presentation.commissions'),
      content: presentation.sectors || t('features.commissionsDescription'),
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
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/backgrounds/hero-africa-landscape.jpg')`,
              backgroundAttachment: 'fixed'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50/90 to-navy-50/90" />
        </div>
        <div className="relative z-10 container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              {t('presentation.title')}
            </h1>
            <p className="text-xl text-white/90 drop-shadow-md">
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
                    <h2 className="text-3xl font-bold text-primary-700 mb-6">
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

      {/* Approach Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-700 mb-4">
              {t('presentationPage.approachTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('presentationPage.approachSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mx-auto mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-primary-700 mb-4">
                {t('presentationPage.approach.analysis.title')}
              </h3>
              <p className="text-gray-600">
                {t('presentationPage.approach.analysis.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mx-auto mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-primary-700 mb-4">
                {t('presentationPage.approach.collaboration.title')}
              </h3>
              <p className="text-gray-600">
                {t('presentationPage.approach.collaboration.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mx-auto mb-6">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-primary-700 mb-4">
                {t('presentationPage.approach.results.title')}
              </h3>
              <p className="text-gray-600">
                {t('presentationPage.approach.results.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/backgrounds/hero-mediation-handshake.jpg')`,
              backgroundAttachment: 'fixed'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-navy-900/80" />
        </div>
        <div className="relative z-10 container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 drop-shadow-lg">
            {t('presentationPage.missionTitle')}
          </h2>
          <p className="text-xl md:text-2xl text-white/95 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
            {t('presentationPage.missionDescription')}
          </p>
          
          {/* Additional visual elements */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 border border-white/20">
              <div className="text-2xl font-bold text-white">2008</div>
              <div className="text-sm text-white/80">Fondation</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 border border-white/20">
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-sm text-white/80">Projets réussis</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 border border-white/20">
              <div className="text-2xl font-bold text-white">95%</div>
              <div className="text-sm text-white/80">Taux de satisfaction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 border border-white/20">
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-sm text-white/80">Pays partenaires</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export async function getStaticProps({ locale }) {
  // Pendant le build, on retourne des données vides
  // Les données seront chargées côté client
  return {
    props: {
      presentations: { data: [] },
      ...(await serverSideTranslations(locale, ['common'])),
    },
    revalidate: 3600, // Revalidate every hour
  };
}

export default PresentationPage;
