import api from './api';

export const fetchPosts = (params) => api.get('/forum', { params });
export const fetchPost = (id) => api.get(`/forum/${id}`);
export const createPost = (payload) => api.post('/forum', payload);
export const upvotePost = (id) => api.post(`/forum/${id}/upvote`);
