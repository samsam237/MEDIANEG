import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { strapi } from '@/lib/api';
import { Calendar, Filter, Search, List, Hash } from 'lucide-react';

const ActionPlanExamples = () => {
  const { t, i18n } = useTranslation('common');
  const [examples, setExamples] = useState({});
  const [loading, setLoading] = useState({});
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const runExample = async (exampleName, apiCall) => {
    setLoading(prev => ({ ...prev, [exampleName]: true }));
    try {
      const result = await apiCall();
      setExamples(prev => ({ ...prev, [exampleName]: result }));
    } catch (error) {
      console.error(`Erreur dans l'exemple ${exampleName}:`, error);
      setExamples(prev => ({ ...prev, [exampleName]: { error: error.message } }));
    } finally {
      setLoading(prev => ({ ...prev, [exampleName]: false }));
    }
  };

  const examplesList = [
    {
      name: 'basic',
      title: 'Récupération basique (tous les plans)',
      description: 'Récupère tous les plans d\'action triés par année',
      icon: <List className="w-5 h-5" />,
      apiCall: () => strapi.getActionPlan(i18n.language)
    },
    {
      name: 'filtered',
      title: 'Récupération avec filtres',
      description: 'Récupère les plans avec filtres personnalisés',
      icon: <Filter className="w-5 h-5" />,
      apiCall: () => strapi.getActionPlanFiltered(i18n.language, { limit: 3 })
    },
    {
      name: 'byYear',
      title: `Plans pour l'année ${currentYear}`,
      description: `Récupère les plans d'action pour l'année ${currentYear}`,
      icon: <Calendar className="w-5 h-5" />,
      apiCall: () => strapi.getActionPlanByYear(currentYear, i18n.language)
    },
    {
      name: 'paginated',
      title: 'Récupération paginée',
      description: 'Récupère les plans par pages (page 1, 5 éléments)',
      icon: <Hash className="w-5 h-5" />,
      apiCall: () => strapi.getActionPlanPaginated(1, 5, i18n.language)
    }
  ];

  const renderExampleResult = (exampleName) => {
    const example = examples[exampleName];
    if (!example) return null;

    if (example.error) {
      return (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-700 font-medium">Erreur</p>
          <p className="text-red-600 text-sm">{example.error}</p>
        </div>
      );
    }

    if (example.data && example.data.length > 0) {
      return (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-green-700 font-medium mb-2">
            ✅ {example.data.length} plan(s) trouvé(s)
          </p>
          <div className="space-y-2">
            {example.data.map((plan, index) => (
              <div key={plan.id || index} className="bg-white rounded p-3 border">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {plan.attributes?.title || 'Sans titre'}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {plan.attributes?.description || 'Pas de description'}
                    </p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {plan.attributes?.year || 'N/A'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-yellow-700">⚠️ Aucun plan d'action trouvé</p>
        </div>
      );
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Exemples d'utilisation des routes Strapi pour les plans d'action
        </h2>
        <p className="text-gray-600">
          Démonstration des différentes façons de récupérer les plans d'action via l'API Strapi
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {examplesList.map((example) => (
          <div key={example.name} className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-blue-600">{example.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {example.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {example.description}
                </p>
              </div>
            </div>

            <div className="mb-4">
              <button
                onClick={() => runExample(example.name, example.apiCall)}
                disabled={loading[example.name]}
                className="btn-primary text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading[example.name] ? (
                  <span className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Chargement...</span>
                  </span>
                ) : (
                  <span className="flex items-center space-x-2">
                    <Search className="w-4 h-4" />
                    <span>Tester cette route</span>
                  </span>
                )}
              </button>
            </div>

            {renderExampleResult(example.name)}
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          📋 Routes API disponibles
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Routes de base :</h4>
            <ul className="space-y-1 text-gray-600">
              <li><code>GET /api/plan-actions</code> - Tous les plans</li>
              <li><code>GET /api/plan-actions/:id</code> - Plan par ID</li>
              <li><code>GET /api/plan-actions?locale=fr</code> - Version française</li>
              <li><code>GET /api/plan-actions?locale=en</code> - Version anglaise</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Paramètres avancés :</h4>
            <ul className="space-y-1 text-gray-600">
              <li><code>?sort=year:asc</code> - Tri par année</li>
              <li><code>?filters[year][$eq]=2024</code> - Filtrer par année</li>
              <li><code>?pagination[limit]=5</code> - Limiter les résultats</li>
              <li><code>?pagination[start]=0</code> - Pagination</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-blue-800 text-sm">
          💡 <strong>Conseil :</strong> Assurez-vous que les permissions sont correctement configurées 
          dans Strapi (Settings → Users & Permissions Plugin → Roles → Public) pour permettre 
          l'accès en lecture aux collections plan-actions.
        </p>
      </div>
    </div>
  );
};

export default ActionPlanExamples;
