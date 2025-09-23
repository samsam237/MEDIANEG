import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const strapi = {
  // Get presentations
  async getPresentations(locale = 'fr') {
    try {
      const response = await api.get(`/api/presentations?locale=${locale}&populate=*`);
      return response.data;
    } catch (error) {
      console.error('Error fetching presentations:', error);
      return { data: [] };
    }
  },

  // Get action plan - avec internationalisation
  async getActionPlan(locale = 'fr') {
    try {
      // Récupérer les plans d'action pour la locale spécifiée
      const response = await api.get(`/api/plan-actions?locale=${locale}&sort=year:asc`);
      
      return response.data;
    } catch (error) {
      console.error('Error fetching action plan:', error);
      return { data: [] };
    }
  },

  // Get action plan avec filtres avancés
  async getActionPlanFiltered(locale = 'fr', filters = {}) {
    try {
      let url = `/api/plan-actions?locale=${locale}&sort=year:asc`;
      
      // Ajouter les filtres
      if (filters.year) {
        url += `&filters[year][$eq]=${filters.year}`;
      }
      if (filters.limit) {
        url += `&pagination[limit]=${filters.limit}`;
      }
      if (filters.start) {
        url += `&pagination[start]=${filters.start}`;
      }
      
      const response = await api.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching filtered action plan:', error);
      return { data: [] };
    }
  },

  // Get action plan par année spécifique
  async getActionPlanByYear(year, locale = 'fr') {
    try {
      const response = await api.get(`/api/plan-actions?locale=${locale}&filters[year][$eq]=${year}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching action plan by year:', error);
      return { data: [] };
    }
  },

  // Get action plan par ID
  async getActionPlanById(id, locale = 'fr') {
    try {
      const response = await api.get(`/api/plan-actions/${id}?locale=${locale}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching action plan by ID:', error);
      return { data: null };
    }
  },

  // Get action plan avec pagination
  async getActionPlanPaginated(page = 1, pageSize = 10, locale = 'fr') {
    try {
      const start = (page - 1) * pageSize;
      const response = await api.get(`/api/plan-actions?locale=${locale}&pagination[start]=${start}&pagination[limit]=${pageSize}&sort=year:asc`);
      return response.data;
    } catch (error) {
      console.error('Error fetching paginated action plan:', error);
      return { data: [], meta: { pagination: { total: 0, page: 1, pageSize: 10, pageCount: 0 } } };
    }
  },

  // Send contact message
  async sendContactMessage(data) {
    try {
      const response = await api.post('/api/contact-messages', { data });
      return response.data;
    } catch (error) {
      console.error('Error sending contact message:', error);
      throw error;
    }
  },
};

export default api;
