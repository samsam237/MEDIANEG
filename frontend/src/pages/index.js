import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { ArrowRight, Users, Target, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import SEOHead from '@/components/SEO/SEOHead';
import { getHomePageStructuredData } from '@/components/SEO/StructuredData';

const HomePage = () => {
  const { t } = useTranslation('common');

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: t('presentation.role'),
      description: t('features.roleDescription'),
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: t('presentation.neutrality'),
      description: t('features.neutralityDescription'),
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: t('presentation.commissions'),
      description: t('features.commissionsDescription'),
    },
  ];

  return (
    <>
      <SEOHead
        title={t('seo.pages.home.title')}
        description={t('seo.pages.home.description')}
        keywords={t('seo.pages.home.keywords')}
        structuredData={getHomePageStructuredData(t)}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-navy-50 py-20">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-3xl">M</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-navy-900 mb-6">
              {t('home.title')}
            </h1>
            
            <p className="text-xl text-navy-600 mb-4">
              {t('home.subtitle')}
            </p>
            
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              {t('home.tagline')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/presentation" className="btn-primary inline-flex items-center space-x-2">
                <span>{t('home.learnMore')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="btn-secondary inline-flex items-center space-x-2">
                <span>{t('home.getInTouch')}</span>
                <MessageCircle className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">
              {t('features.commitmentsTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('features.commitmentsSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-primary-600 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t('features.missionTitle')}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('features.missionDescription')}
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
            <span>{t('features.contactUs')}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
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

export default HomePage;
