import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Add token header to every request if available
api.interceptors.request.use(config => {
  const token = localStorage.getItem('authToken'); // or wherever you store token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
