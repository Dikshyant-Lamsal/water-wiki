import api from './api';

export const fetchArticles = (params) => api.get('/articles', { params });
export const fetchArticle = (id) => api.get(`/articles/${id}`);
export const createArticle = (payload) => api.post('/articles', payload);
export const updateArticle = (id, payload) => api.put(`/articles/${id}`, payload);
export const deleteArticle = (id) => api.delete(`/articles/${id}`);
