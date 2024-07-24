import axios from 'axios';

const studentAPI = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
});

studentAPI.interceptors.request.use((config) => {
  const token = localStorage.getItem('student');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default studentAPI;
