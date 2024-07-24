import axios from 'axios';

const teacherAPI = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
});

teacherAPI.interceptors.request.use((config) => {
  const token = localStorage.getItem('teacher');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default teacherAPI;
