import { useState, useEffect } from 'react';
import { strapi } from '@/lib/api';

/**
 * Hook personnalisé pour gérer les plans d'action
 */
export const useActionPlan = (locale = 'fr') => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActionPlan = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await strapi.getActionPlan(locale);
        setData(result.data || []);
      } catch (err) {
        setError(err.message);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchActionPlan();
  }, [locale]);

  return { data, loading, error, refetch: () => fetchActionPlan() };
};

/**
 * Hook pour récupérer un plan d'action par année
 */
export const useActionPlanByYear = (year, locale = 'fr') => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActionPlanByYear = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await strapi.getActionPlanByYear(year, locale);
        setData(result.data || []);
      } catch (err) {
        setError(err.message);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    if (year) {
      fetchActionPlanByYear();
    }
  }, [year, locale]);

  return { data, loading, error };
};

/**
 * Hook pour la pagination des plans d'action
 */
export const useActionPlanPagination = (page = 1, pageSize = 10, locale = 'fr') => {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPaginatedActionPlan = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await strapi.getActionPlanPaginated(page, pageSize, locale);
        setData(result.data || []);
        setPagination(result.meta?.pagination || {});
      } catch (err) {
        setError(err.message);
        setData([]);
        setPagination({});
      } finally {
        setLoading(false);
      }
    };

    fetchPaginatedActionPlan();
  }, [page, pageSize, locale]);

  return { 
    data, 
    pagination, 
    loading, 
    error,
    hasNextPage: pagination.page < pagination.pageCount,
    hasPrevPage: pagination.page > 1,
    totalPages: pagination.pageCount || 0,
    totalItems: pagination.total || 0
  };
};

/**
 * Hook pour récupérer un plan d'action spécifique par ID
 */
export const useActionPlanById = (id, locale = 'fr') => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActionPlanById = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await strapi.getActionPlanById(id, locale);
        setData(result.data);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchActionPlanById();
    }
  }, [id, locale]);

  return { data, loading, error };
};

export default {
  useActionPlan,
  useActionPlanByYear,
  useActionPlanPagination,
  useActionPlanById
};
