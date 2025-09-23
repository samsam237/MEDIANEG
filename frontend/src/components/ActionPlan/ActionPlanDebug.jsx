import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { strapi } from '@/lib/api';
import { Bug, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

const ActionPlanDebug = () => {
  const { t, i18n } = useTranslation('common');
  const [debugInfo, setDebugInfo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const runDebug = async () => {
      try {
        setLoading(true);
        
        // Récupérer les plans d'action pour la locale actuelle
        const currentPlansResult = await strapi.getActionPlan(i18n.language);
        
        // Récupérer aussi les plans de l'autre locale pour comparaison
        const otherLocale = i18n.language === 'fr' ? 'en' : 'fr';
        const otherPlansResult = await strapi.getActionPlan(otherLocale);
        
        setDebugInfo({
          currentLocale: i18n.language,
          alternativeLocale: otherLocale,
          currentPlansData: currentPlansResult.data || [],
          currentPlansCount: currentPlansResult.data?.length || 0,
          otherPlansData: otherPlansResult.data || [],
          otherPlansCount: otherPlansResult.data?.length || 0,
          hasData: (currentPlansResult.data?.length || 0) > 0
        });
      } catch (error) {
        setDebugInfo({ error: error.message });
      } finally {
        setLoading(false);
      }
    };

    runDebug();
  }, [i18n.language]);

  if (loading) {
    return (
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
          <span className="text-blue-700">Chargement des informations de debug...</span>
        </div>
      </div>
    );
  }

  if (debugInfo.error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <div className="flex items-center space-x-2 mb-2">
          <XCircle className="w-5 h-5 text-red-600" />
          <span className="text-red-700 font-medium">Erreur de debug</span>
        </div>
        <p className="text-red-600 text-sm">{debugInfo.error}</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Bug className="w-5 h-5 text-gray-600" />
        <h3 className="text-lg font-semibold text-gray-900">Debug des plans d'action</h3>
      </div>

      <div className="space-y-4">
        {/* Informations de locale */}
        <div>
          <h4 className="font-medium text-gray-900 mb-2">Informations de locale</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-600">Locale actuelle:</span>
              <span className="ml-2 font-medium">{debugInfo.currentLocale}</span>
            </div>
            <div>
              <span className="text-gray-600">Locale alternative:</span>
              <span className="ml-2 font-medium">{debugInfo.alternativeLocale}</span>
            </div>
          </div>
        </div>

        {/* Résultats globaux */}
        <div>
          <h4 className="font-medium text-gray-900 mb-2">Résultats globaux</h4>
          <div className="bg-white rounded-lg p-4 border">
            <div className="flex items-center space-x-2 mb-2">
              {debugInfo.hasData ? (
                <CheckCircle className="w-5 h-5 text-green-600" />
              ) : (
                <XCircle className="w-5 h-5 text-red-600" />
              )}
              <span className="font-medium">Tous les plans d'action</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              {debugInfo.currentPlansCount} plan(s) trouvé(s) pour la locale actuelle
            </p>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">{debugInfo.currentLocale.toUpperCase()}:</span>
                <span className="font-medium">{debugInfo.currentPlansCount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">{debugInfo.alternativeLocale?.toUpperCase()}:</span>
                <span className="font-medium">{debugInfo.otherPlansCount}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Données détaillées */}
        {debugInfo.hasData && (
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Détails des plans</h4>
            <div className="space-y-3">
              {debugInfo.currentPlansData.map((plan, index) => {
                const locale = plan.attributes?.locale || 'unknown';
                const isFrench = locale === 'fr';
                const isEnglish = locale === 'en';
                
                return (
                  <div 
                    key={plan.id || index} 
                    className={`rounded-lg p-3 border ${
                      isFrench ? 'bg-white border-blue-200' : 
                      isEnglish ? 'bg-white border-green-200' : 
                      'bg-white border-gray-200'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-medium text-gray-900">
                        {plan.attributes?.title || 'Sans titre'}
                      </h5>
                      <span className={`text-xs px-2 py-1 rounded ${
                        isFrench ? 'bg-blue-100 text-blue-800' : 
                        isEnglish ? 'bg-green-100 text-green-800' : 
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {locale.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Année: {plan.attributes?.year || 'N/A'} | 
                      Description: {plan.attributes?.description || 'Aucune'}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Recommandations */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <AlertCircle className="w-5 h-5 text-blue-600" />
            <span className="text-blue-700 font-medium">Recommandations</span>
          </div>
          <div className="text-sm text-blue-600 space-y-1">
            {!debugInfo.hasData ? (
              <p>• Créer des plans d'action dans Strapi Admin pour la locale {debugInfo.currentLocale}</p>
            ) : (
              <p>• Les plans d'action sont correctement configurés pour {debugInfo.currentLocale}</p>
            )}
            <p>• L'API utilise maintenant l'internationalisation (locale={debugInfo.currentLocale})</p>
            <p>• Vérifier les permissions dans Strapi (Settings → Users & Permissions Plugin)</p>
            {debugInfo.otherPlansCount > 0 && (
              <p>• Des plans existent aussi en {debugInfo.alternativeLocale} ({debugInfo.otherPlansCount} plan(s))</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionPlanDebug;
