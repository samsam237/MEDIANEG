import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { ArrowRight, Users, Target, MessageCircle, Globe, TrendingUp, Shield, Users2 } from 'lucide-react';
import Link from 'next/link';
import SEOHead from '@/components/SEO/SEOHead';
import { getHomePageStructuredData } from '@/components/SEO/StructuredData';
import BackgroundImageZone from '@/components/BackgroundImageZone';
import ImageCarousel from '@/components/ImageCarousel';

const HomePage = () => {
  const { t } = useTranslation('common');

  // Configuration des images pour le carousel
  const carouselImages = [
    {
      src: '/images/backgrounds/image 5.png',
      alt: 'Agriculture et développement rural',
      title: 'Développement Rural',
      description: 'Accompagnement des communautés agricoles'
    },
    {
      src: '/images/backgrounds/image 6.png',
      alt: 'Transformation des produits agricoles',
      title: 'Transformation',
      description: 'Valorisation des produits locaux'
    },
    {
      src: '/images/backgrounds/image 7.png',
      alt: 'Commercialisation et export',
      title: 'Commercialisation',
      description: 'Accès aux marchés internationaux'
    },
    {
      src: '/images/backgrounds/image 8.png',
      alt: 'Formation et innovation',
      title: 'Innovation',
      description: 'Technologies et pratiques modernes'
    },
    {
      src: '/images/backgrounds/image 9.png',
      alt: 'Partenariat et collaboration',
      title: 'Partenariat',
      description: 'Réseaux et collaborations stratégiques'
    },
    {
      src: '/images/backgrounds/image 10.png',
      alt: 'Durabilité et environnement',
      title: 'Durabilité',
      description: 'Agriculture respectueuse de l\'environnement'
    }
  ];

  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: t('features.roleDescription'),
      description: t('home.tagline'),
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: t('features.neutralityDescription'),
      description: t('features.neutralityDescription'),
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: t('features.commissionsDescription'),
      description: t('features.commissionsDescription'),
    },
  ];

  const services = [
    {
      icon: <Users2 className="w-8 h-8" />,
      title: t('services.mediation.title'),
      description: t('services.mediation.description'),
      features: t('services.mediation.features', { returnObjects: true }),
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: t('services.negotiation.title'),
      description: t('services.negotiation.description'),
      features: t('services.negotiation.features', { returnObjects: true }),
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t('services.sourcing.title'),
      description: t('services.sourcing.description'),
      features: t('services.sourcing.features', { returnObjects: true }),
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: t('services.intelligence.title'),
      description: t('services.intelligence.description'),
      features: t('services.intelligence.features', { returnObjects: true }),
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: t('services.support.title'),
      description: t('services.support.description'),
      features: t('services.support.features', { returnObjects: true }),
    },
  ];

  const sectors = [
    t('sectors.agricultural'),
    t('sectors.rawMaterials'),
    t('sectors.manufactured'),
  ];

  const whyChooseUs = [
    {
      icon: <Target className="w-6 h-6" />,
      title: t('whyChooseUs.expertise.title'),
      description: t('whyChooseUs.expertise.description'),
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: t('whyChooseUs.network.title'),
      description: t('whyChooseUs.network.description'),
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: t('whyChooseUs.approach.title'),
      description: t('whyChooseUs.approach.description'),
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: t('whyChooseUs.support.title'),
      description: t('whyChooseUs.support.description'),
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
            
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              {t('home.tagline')}
            </p>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-12 max-w-4xl mx-auto shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mb-3">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-navy-900 mb-2">{t('home.overview.global')}</h3>
                  <p className="text-sm text-gray-600">{t('home.overview.globalDesc')}</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mb-3">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-navy-900 mb-2">{t('home.overview.trusted')}</h3>
                  <p className="text-sm text-gray-600">{t('home.overview.trustedDesc')}</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mb-3">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-navy-900 mb-2">{t('home.overview.growth')}</h3>
                  <p className="text-sm text-gray-600">{t('home.overview.growthDesc')}</p>
                </div>
              </div>
            </div>

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

      {/* Carousel d'images */}
      <ImageCarousel
        images={carouselImages}
        interval={4000}
        height="h-80"
        overlay={true}
        overlayOpacity={0.4}
        className="my-8"
      />

      {/* Zone d'image d'agriculteur */}
      <BackgroundImageZone
        imageSrc="/images/backgrounds/image 1.png"
        imageAlt="Agriculteur travaillant dans un champ"
        overlay={true}
        overlayOpacity={0.3}
        height="h-64"
        className="my-8"
      >
        <div className="text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {t('sectors.agricultural')}
          </h3>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Nous accompagnons les agriculteurs dans leurs négociations commerciales
          </p>
        </div>
      </BackgroundImageZone>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">
              {t('features.commitmentsTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('features.commitmentsSubtitle')}
            </p>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              {t('presentationPage.missionDescription')}
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

      {/* Sectors Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">
              {t('sectors.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('sectors.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <div key={index} className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-primary-600 mb-4">
                  <TrendingUp className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900">
                  {sector}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone d'image de plantation */}
      <BackgroundImageZone
        imageSrc="/images/backgrounds/image 2.png"
        imageAlt="Plantation et cultures agricoles"
        overlay={true}
        overlayOpacity={0.4}
        height="h-64"
        className="my-8"
      >
        <div className="text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Production et Transformation
          </h3>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            De la plantation à la commercialisation, nous optimisons vos chaînes de valeur
          </p>
        </div>
      </BackgroundImageZone>

      {/* Zone d'image supplémentaire */}
      <BackgroundImageZone
        imageSrc="/images/backgrounds/image 3.png"
        imageAlt="Secteur agricole et matières premières"
        overlay={true}
        overlayOpacity={0.3}
        height="h-48"
        className="my-8"
      >
        <div className="text-center text-white">
          <h3 className="text-xl md:text-2xl font-bold mb-2">
            Matières Premières
          </h3>
          <p className="text-base md:text-lg max-w-xl mx-auto">
            Négociation et commercialisation des produits agricoles
          </p>
        </div>
      </BackgroundImageZone>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">
              {t('services.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mx-auto mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-4">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-navy-700 mb-3 text-center">
                    {t('services.keyFeatures')}
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-navy-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">
              {t('whyChooseUs.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('whyChooseUs.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="text-primary-600 mr-4 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone d'image finale */}
      <BackgroundImageZone
        imageSrc="/images/backgrounds/image 4.png"
        imageAlt="Partenariat et collaboration agricole"
        overlay={true}
        overlayOpacity={0.4}
        height="h-64"
        className="my-8"
      >
        <div className="text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Partenariat & Collaboration
          </h3>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Ensemble, construisons un avenir durable pour l'agriculture africaine
          </p>
        </div>
      </BackgroundImageZone>

      {/* CTA Section */}
      {/* <section className="py-20 bg-navy-900">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
              <span>{t('cta.contactUs')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/presentation" className="btn-secondary inline-flex items-center space-x-2">
              <span>{t('cta.learnMore')}</span>
              <MessageCircle className="w-4 h-4" />
            </Link>
          </div>
          <div className="text-gray-300">
            <p className="mb-2">{t('cta.email')}</p>
            <p>{t('cta.phone')}</p>
          </div>
        </div>
      </section> */}
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
