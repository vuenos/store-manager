import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5050/api',
  // withCredentials: true,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});

export default apiClient;