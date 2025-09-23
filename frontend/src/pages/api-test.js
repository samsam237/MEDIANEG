import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import ActionPlanExamples from '@/components/ActionPlan/ActionPlanExamples';
import SEOHead from '@/components/SEO/SEOHead';
import Layout from '@/components/Layout/Layout';

const APITestPage = () => {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <SEOHead
        title="Test des API Strapi - MEDIANEG International"
        description="Page de test pour démontrer l'utilisation des routes API Strapi pour les plans d'action"
        keywords="API test, Strapi, plans d'action, MEDIANEG"
      />
      
      <div className="min-h-screen bg-gray-50">
        <ActionPlanExamples />
      </div>
    </Layout>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default APITestPage;
