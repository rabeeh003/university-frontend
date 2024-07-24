import axios from 'axios';

const adminAPI = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
});

adminAPI.interceptors.request.use((config) => {
  const token = localStorage.getItem('admin');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default adminAPI;
