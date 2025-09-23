import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { ChevronRight, Home } from 'lucide-react';
import { getBreadcrumbStructuredData } from './StructuredData';

const Breadcrumbs = ({ items = [] }) => {
  const router = useRouter();
  const { t } = useTranslation('common');

  // Générer les breadcrumbs automatiquement si non fournis
  const generateBreadcrumbs = () => {
    const pathSegments = router.asPath.split('/').filter(segment => segment !== '');
    const breadcrumbs = [
      {
        name: t('navigation.home'),
        url: '/',
      }
    ];

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      // Ignorer les locales dans les breadcrumbs
      if (segment === 'en' || segment === 'fr') {
        return;
      }

      const segmentName = t(`navigation.${segment.replace('-', '')}`) || segment;
      breadcrumbs.push({
        name: segmentName,
        url: currentPath,
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = items.length > 0 ? items : generateBreadcrumbs();
  const structuredData = getBreadcrumbStructuredData(breadcrumbs);

  return (
    <>
      {/* Données structurées pour les breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      
      {/* Navigation des breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 py-4">
        <div className="container-custom">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((crumb, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
                )}
                {index === 0 && (
                  <Home className="w-4 h-4 text-gray-600 mr-1" />
                )}
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-gray-900 font-medium" aria-current="page">
                    {crumb.name}
                  </span>
                ) : (
                  <Link 
                    href={crumb.url}
                    className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                  >
                    {crumb.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
};

export default Breadcrumbs;
