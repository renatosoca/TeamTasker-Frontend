import axios, { AxiosRequestHeaders} from 'axios';

const teamTaskeAPI = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URI}/api`,
});

teamTaskeAPI.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
  } as AxiosRequestHeaders;

  return config;
});

export default teamTaskeAPI;