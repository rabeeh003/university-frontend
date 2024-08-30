import axios from 'axios';
import { baseURL } from '../constValue';
import { getCookie } from '../cookie';

const collegeAPI = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

collegeAPI.interceptors.request.use((config) => {
  const token = getCookie('college');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default collegeAPI;
