import axios from 'axios';

const teamTaskeAPI = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URI}/api`,
});

teamTaskeAPI.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
  };

  return config;
});

export default teamTaskeAPI;