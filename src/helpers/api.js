import axios from 'axios';

// const baseURL = 'http://localhost:8081/';
const baseURL = 'http://2a87-2804-56c-a403-4700-7129-2eb1-4958-d8d0.ngrok.io';

const api = axios.create({
  baseURL,
  withCredentials: false,
  timeout: 10000,
});

export default api;
