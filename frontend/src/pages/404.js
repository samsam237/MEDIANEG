import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';
import SEOHead from '@/components/SEO/SEOHead';
import Layout from '@/components/Layout/Layout';
import LogoWithText from '@/components/Logo/LogoWithText';

const Custom404 = () => {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <SEOHead
        title="Page non trouvée - MEDIANEG International"
        description="La page que vous recherchez n'existe pas. Retournez à l'accueil de MEDIANEG International."
        keywords="404, page non trouvée, erreur, MEDIANEG"
      />
      
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full text-center">
          <div className="mb-8">
            <div className="mb-6 flex justify-center">
              <LogoWithText 
                href="/"
                width={150}
                height={75}
                priority={true}
              />
            </div>
            <h1 className="text-6xl font-bold text-primary-600 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Page non trouvée
            </h2>
            <p className="text-gray-600 mb-8">
              Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link 
              href="/"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <Home className="w-4 h-4" />
              <span>Retour à l'accueil</span>
            </Link>
            
            <div>
              <Link 
                href="javascript:history.back()"
                className="text-primary-600 hover:text-primary-700 inline-flex items-center space-x-1"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Page précédente</span>
              </Link>
            </div>
          </div>
          
          <div className="mt-12 text-sm text-gray-500">
            <p>Si vous pensez qu'il s'agit d'une erreur,</p>
            <Link href="/contact" className="text-primary-600 hover:text-primary-700">
              contactez-nous
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Custom404;
