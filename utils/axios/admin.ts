import axios from 'axios';
import { baseURL } from '../constValue';
import { getCookie } from '../cookie';

const adminAPI = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

adminAPI.interceptors.request.use((config) => {
  const token = getCookie('admin');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default adminAPI;
