import axios from 'axios';
import settings from '@/config';

const instance = axios.create();

instance.interceptors.request.use((conf) => {
  const config = conf;
  config.url = config.url || '';
  if (config.url.indexOf('http') !== 0) {
    config.url = settings.apiUrl + config.url;
  }

  config.headers = config.headers || {};
  // if (settings.clientId) {
  //   config.headers['X-Client-Id'] = settings.clientId;
  // }

  // if (store.getters.accessToken) {
  //   config.headers.Authorization = `Bearer ${store.getters.accessToken}`;
  // }

  return config;
}, error => Promise.reject(error));

instance.interceptors.response.use((response) => {
  if (response.config.responseType === 'blob') {
    return response;
  }

  return response;
}, (error) => {
  return Promise.reject(error);
});

export default instance;
