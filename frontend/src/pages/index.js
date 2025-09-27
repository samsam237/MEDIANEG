import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import SEOHead from '@/components/SEO/SEOHead';
import { getHomePageStructuredData } from '@/components/SEO/StructuredData';
import HeroSection from '@/components/Hero/HeroSection';
import ImageTextSection from '@/components/Sections/ImageTextSection';
import ServicesSection from '@/components/Sections/ServicesSection';
import SectorsSection from '@/components/Sections/SectorsSection';
import GrowthSection from '@/components/Sections/GrowthSection';
import WhyChooseUsSection from '@/components/Sections/WhyChooseUsSection';
import ContactSection from '@/components/Sections/ContactSection';

const HomePage = () => {
  const { t } = useTranslation('common');

  // Configuration pour les sections image/texte
  const whoWeAreFeatures = [
    t('homePage.whoWeAre.feature1'),
    t('homePage.whoWeAre.feature2'),
    t('homePage.whoWeAre.feature3'),
    t('homePage.whoWeAre.feature4')
  ];

  const missionFeatures = [
    {
      title: t('homePage.mission.neutrality.title'),
      description: t('homePage.mission.neutrality.description')
    },
    {
      title: t('homePage.mission.expertise.title'),
      description: t('homePage.mission.expertise.description')
    },
    {
      title: t('homePage.mission.transparency.title'),
      description: t('homePage.mission.transparency.description')
    },
    {
      title: t('homePage.mission.innovation.title'),
      description: t('homePage.mission.innovation.description')
    }
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
      <HeroSection />

      {/* Qui nous sommes / Mission */}
      <ImageTextSection
        imageSrc="/images/backgrounds/hero-business-meeting.jpg"
        imageAlt={t('homePage.whoWeAre.imageAlt')}
        subtitle={t('homePage.whoWeAre.subtitle')}
        title={t('homePage.whoWeAre.title')}
        content={t('homePage.whoWeAre.content')}
        features={whoWeAreFeatures}
        bgColor="bg-white"
      />

      {/* Mission et Valeurs */}
      <ImageTextSection
        imageSrc="/images/backgrounds/pexels-sarah-33270-122370.jpg"
        imageAlt={t('homePage.mission.imageAlt')}
        subtitle={t('homePage.mission.subtitle')}
        title={t('homePage.mission.title')}
        content={t('homePage.mission.content')}
        features={missionFeatures}
        reverse={true}
        bgColor="bg-gray-50"
      />

      {/* Secteurs d'activité */}
      <SectorsSection />

      {/* Nos services */}
      <ServicesSection />

      {/* Notre croissance */}
      <GrowthSection />

      {/* Pourquoi nous choisir */}
      <WhyChooseUsSection />


      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('homePage.cta.title')}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('homePage.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center justify-center space-x-3 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>{t('homePage.cta.button1')}</span>
            </a>
            <a 
              href="/presentation" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center justify-center space-x-3 text-lg"
            >
              <span>{t('homePage.cta.button2')}</span>
            </a>
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

export default HomePage;