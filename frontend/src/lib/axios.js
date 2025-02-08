import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://nepal-yatra-backend.onrender.com/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
