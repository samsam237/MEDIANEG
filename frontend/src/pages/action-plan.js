import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Timeline from '@/components/Timeline';
import { strapi } from '@/lib/api';
import { Globe, Target, Users, TrendingUp, Shield, Hand } from 'lucide-react';
import SEOHead from '@/components/SEO/SEOHead';
import { getActionPlanPageStructuredData } from '@/components/SEO/StructuredData';
import ActionPlanDebug from '@/components/ActionPlan/ActionPlanDebug';
import { useActionPlan } from '@/hooks/useActionPlan';

const ActionPlanPage = ({ actionPlan }) => {
  const { t, i18n } = useTranslation('common');
  
  // Hook pour récupérer les données côté client (fallback)
  const { data: clientActionPlan, loading, error } = useActionPlan(i18n.language);

  // Debug pour voir ce qui est reçu
  console.log('ActionPlan reçu (SSR):', actionPlan);
  console.log('ActionPlan.data:', actionPlan?.data);
  console.log('ActionPlan.data length:', actionPlan?.data?.length);
  console.log('Client ActionPlan:', clientActionPlan);
  console.log('Client ActionPlan length:', clientActionPlan?.length);

  // Utiliser les données SSR si disponibles, sinon les données côté client
  const finalActionPlan = actionPlan?.data?.length > 0 ? actionPlan : { data: clientActionPlan };
  
  const timelineItems = finalActionPlan?.data?.map(item => ({
    id: item.id,
    year: item.attributes.year,
    title: item.attributes.title,
    description: item.attributes.description,
  })) || [];

  console.log('Timeline items finaux:', timelineItems);

  const objectives = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: t('actionPlanPage.strategicObjectives'),
      description: t('actionPlanPage.strategicObjectivesDesc'),
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: t('actionPlanPage.mediatorTraining'),
      description: t('actionPlanPage.mediatorTrainingDesc'),
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: t('actionPlanPage.operationalPlanning'),
      description: t('actionPlanPage.operationalPlanningDesc'),
    },
  ];

  return (
    <>
      <SEOHead
        title={t('seo.pages.actionPlan.title')}
        description={t('seo.pages.actionPlan.description')}
        keywords={t('seo.pages.actionPlan.keywords')}
        structuredData={getActionPlanPageStructuredData(t)}
      />
      
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/backgrounds/pexels-adam-lukac-254247-773958.jpg')`,
              backgroundAttachment: 'fixed'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50/90 to-navy-50/90" />
        </div>
        <div className="relative z-10 container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              {t('actionPlan.title')}
            </h1>
            <p className="text-xl text-white/90 drop-shadow-md">
              {t('actionPlanPage.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-700 mb-4">
              {t('actionPlan.timeline')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('actionPlanPage.timelineSubtitle')}
            </p>
          </div>

          {/* Debug component - masqué */}
          {false && (
            <div className="mb-8">
              <ActionPlanDebug />
            </div>
          )}
          <div className="max-w-4xl mx-auto">
            {loading && !actionPlan?.data?.length && (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto mb-4"></div>
                <p className="text-gray-500">Chargement des plans d'action...</p>
              </div>
            )}
            <Timeline items={timelineItems} />
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-700 mb-4">
              {t('actionPlanPage.objectivesTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('actionPlanPage.objectivesSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {objectives.map((objective, index) => (
              <div key={index} className="card text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-primary-600 mb-4 flex justify-center">
                  {objective.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary-700 mb-4">
                  {objective.title}
                </h3>
                <p className="text-gray-600">
                  {objective.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Year Focus */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/backgrounds/hero-technology-innovation.jpg')`,
              backgroundAttachment: 'fixed'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-navy-900/80" />
        </div>
        <div className="relative z-10 container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 drop-shadow-lg">
            {t('actionPlan.currentYear')} {new Date().getFullYear()}
          </h2>
          <p className="text-xl md:text-2xl text-white/95 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
            {t('actionPlanPage.currentYearDescription')}
          </p>
          
          {/* Additional visual elements */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 border border-white/20">
              <div className="text-2xl font-bold text-white">2025</div>
              <div className="text-sm text-white/80">{t('stats.vision')}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 border border-white/20">
              <div className="text-2xl font-bold text-white">1+</div>
              <div className="text-sm text-white/80">{t('stats.rapidGrowth')}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 border border-white/20">
              <div className="text-2xl font-bold text-white">20+</div>
              <div className="text-sm text-white/80">{t('stats.clientsInCountries')}</div>
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
      actionPlan: { data: [] },
      ...(await serverSideTranslations(locale, ['common'])),
    },
    revalidate: 3600, // Revalidate every hour
  };
}

export default ActionPlanPage;
