import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: 'https://hacker-news.firebaseio.com/v0/',
  timeout: 7000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  // валидация всех ответов от сервера
  validateStatus: (status) => {
    return status >= 200 && status <= 299;
  },
});

axiosClient.interceptors.request.use(
  async (config) => {
    const value = localStorage.getItem('token');

    if (value) {
      Object.assign(config.headers, {
        Authorization: `Bearer ${value}`,
      });
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
