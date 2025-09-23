import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useActionPlan, useActionPlanByYear, useActionPlanPagination } from '@/hooks/useActionPlan';
import { Calendar, ChevronLeft, ChevronRight, Filter, Loader2 } from 'lucide-react';

const ActionPlanWithHooks = () => {
  const { t, i18n } = useTranslation('common');
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;

  // Hooks pour différentes utilisations
  const { data: allPlans, loading: allLoading, error: allError } = useActionPlan(i18n.language);
  const { data: yearPlans, loading: yearLoading, error: yearError } = useActionPlanByYear(selectedYear, i18n.language);
  const { 
    data: paginatedPlans, 
    pagination, 
    loading: paginatedLoading, 
    error: paginatedError,
    hasNextPage,
    hasPrevPage,
    totalPages
  } = useActionPlanPagination(currentPage, pageSize, i18n.language);

  const LoadingSpinner = () => (
    <div className="flex items-center justify-center p-4">
      <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
      <span className="ml-2 text-gray-600">Chargement...</span>
    </div>
  );

  const ErrorMessage = ({ error }) => (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
      <p className="text-red-700 font-medium">Erreur</p>
      <p className="text-red-600 text-sm">{error}</p>
    </div>
  );

  const PlanCard = ({ plan }) => (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-gray-900">{plan.attributes?.title || 'Sans titre'}</h3>
        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
          {plan.attributes?.year || 'N/A'}
        </span>
      </div>
      <p className="text-gray-600 text-sm">
        {plan.attributes?.description || 'Pas de description disponible'}
      </p>
      {plan.attributes?.order && (
        <div className="mt-2 text-xs text-gray-500">
          Ordre: {plan.attributes.order}
        </div>
      )}
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Plans d'action avec React Hooks
        </h2>
        <p className="text-gray-600">
          Démonstration de l'utilisation des hooks personnalisés pour les routes Strapi
        </p>
      </div>

      {/* Section 1: Tous les plans */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <Calendar className="w-5 h-5 mr-2" />
          Tous les plans d'action
        </h3>
        
        {allLoading && <LoadingSpinner />}
        {allError && <ErrorMessage error={allError} />}
        {!allLoading && !allError && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allPlans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
            {allPlans.length === 0 && (
              <div className="col-span-full text-center text-gray-500 py-8">
                Aucun plan d'action trouvé
              </div>
            )}
          </div>
        )}
      </div>

      {/* Section 2: Plans par année */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <Filter className="w-5 h-5 mr-2" />
          Plans pour une année spécifique
        </h3>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sélectionner une année:
          </label>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(parseInt(e.target.value))}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {[2020, 2021, 2022, 2023, 2024, 2025].map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>

        {yearLoading && <LoadingSpinner />}
        {yearError && <ErrorMessage error={yearError} />}
        {!yearLoading && !yearError && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {yearPlans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
            {yearPlans.length === 0 && (
              <div className="col-span-full text-center text-gray-500 py-8">
                Aucun plan d'action trouvé pour l'année {selectedYear}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Section 3: Pagination */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Plans avec pagination ({pagination.total || 0} au total)
        </h3>
        
        {paginatedLoading && <LoadingSpinner />}
        {paginatedError && <ErrorMessage error={paginatedError} />}
        {!paginatedLoading && !paginatedError && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {paginatedPlans.map((plan) => (
                <PlanCard key={plan.id} plan={plan} />
              ))}
            </div>

            {/* Contrôles de pagination */}
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Page {currentPage} sur {totalPages}
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={!hasPrevPage || paginatedLoading}
                  className="btn-secondary text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Précédent
                </button>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={!hasNextPage || paginatedLoading}
                  className="btn-secondary text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                >
                  Suivant
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Informations sur les routes utilisées */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          📋 Routes API utilisées
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Tous les plans:</h4>
            <code className="bg-white px-2 py-1 rounded text-xs">
              GET /api/plan-actions?locale={i18n.language}&sort=year:asc
            </code>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Par année:</h4>
            <code className="bg-white px-2 py-1 rounded text-xs">
              GET /api/plan-actions?locale={i18n.language}&filters[year][$eq]={selectedYear}
            </code>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Avec pagination:</h4>
            <code className="bg-white px-2 py-1 rounded text-xs">
              GET /api/plan-actions?locale={i18n.language}&pagination[start]={(currentPage - 1) * pageSize}&pagination[limit]={pageSize}
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionPlanWithHooks;
