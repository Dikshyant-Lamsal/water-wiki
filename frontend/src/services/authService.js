import api from './api';

export const signup = (payload) => api.post('/auth/signup', payload);
export const login = (payload) => api.post('/auth/login', payload);
