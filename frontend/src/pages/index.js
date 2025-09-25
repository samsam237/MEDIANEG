import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import SEOHead from '@/components/SEO/SEOHead';
import { getHomePageStructuredData } from '@/components/SEO/StructuredData';
import HeroSection from '@/components/Hero/HeroSection';
import ImageTextSection from '@/components/Sections/ImageTextSection';
import ServicesSection from '@/components/Sections/ServicesSection';
import SectorsSection from '@/components/Sections/SectorsSection';
import WhyChooseUsSection from '@/components/Sections/WhyChooseUsSection';
import ContactSection from '@/components/Sections/ContactSection';

const HomePage = () => {
  const { t } = useTranslation('common');

  // Configuration pour les sections image/texte
  const whoWeAreFeatures = [
    'Médiation commerciale internationale depuis 2008',
    'Réseau de partenaires dans 50+ pays',
    'Expertise sectorielle approfondie',
    'Approche éthique et transparente'
  ];

  const missionFeatures = [
    {
      title: 'Neutralité',
      description: 'Garantir une médiation impartiale entre toutes les parties'
    },
    {
      title: 'Expertise',
      description: 'Connaissance approfondie des marchés africains et internationaux'
    },
    {
      title: 'Transparence',
      description: 'Processus clairs et communication ouverte à chaque étape'
    },
    {
      title: 'Innovation',
      description: 'Intégration des nouvelles technologies dans nos services'
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
        imageAlt="Équipe MEDIANEG en réunion de médiation"
        subtitle="À propos de MEDIANEG"
        title="Votre partenaire de confiance en médiation commerciale"
        content="Depuis plus de 15 ans, MEDIANEG International facilite les échanges commerciaux entre l'Afrique et le monde. Notre expertise en médiation et négociation nous permet de créer des ponts durables entre les entreprises et les marchés internationaux."
        features={whoWeAreFeatures}
        bgColor="bg-white"
      />

      {/* Mission et Valeurs */}
      <ImageTextSection
        imageSrc="/images/backgrounds/hero-mediation-handshake.jpg"
        imageAlt="Handshake symbolisant la médiation et la coopération"
        subtitle="Notre Mission"
        title="Promouvoir la paix par le commerce"
        content="Nous croyons que le commerce équitable et la médiation transparente sont les clés d'un développement durable et d'une paix durable. Notre mission est de faciliter ces échanges en créant de la valeur pour tous les acteurs."
        features={missionFeatures}
        reverse={true}
        bgColor="bg-gray-50"
      />

      {/* Secteurs d'activité */}
      <SectorsSection />

      {/* Nos services */}
      <ServicesSection />

      {/* Pourquoi nous choisir */}
      <WhyChooseUsSection />

      {/* Témoignages avec image */}
      <ImageTextSection
        imageSrc="/images/backgrounds/hero-africa-business.jpg"
        imageAlt="Partenaires et clients satisfaits de MEDIANEG"
        subtitle="Témoignages"
        title="Nos clients témoignent"
        content="Découvrez comment MEDIANEG a transformé les projets commerciaux de nos clients et partenaires à travers le monde. Leurs succès sont notre plus grande récompense."
        features={[
          'Plus de 500 projets réussis',
          'Clients dans 50+ pays',
          '95% de taux de satisfaction',
          'Partenariats durables établis'
        ]}
        bgColor="bg-white"
      />

      {/* Contact */}
      <ContactSection />

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Prêt à transformer vos projets commerciaux ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Rejoignez les centaines d'entreprises qui font confiance à MEDIANEG pour leurs projets de médiation et négociation internationale.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center justify-center space-x-3 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Démarrer un projet</span>
            </a>
            <a 
              href="/presentation" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center justify-center space-x-3 text-lg"
            >
              <span>En savoir plus</span>
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