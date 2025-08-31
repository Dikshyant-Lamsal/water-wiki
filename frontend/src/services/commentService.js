import api from './api';
export const fetchComments = (postId) => api.get(`/comments/${postId}`);
export const createComment = (postId, payload) => api.post(`/comments/${postId}`, payload);
