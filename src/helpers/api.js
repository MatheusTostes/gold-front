import axios from 'axios';

// const baseURL = 'http://localhost:8081/';
const baseURL = 'https://2a87-2804-56c-a403-4700-7129-2eb1-4958-d8d0.ngrok.io/';

axios.defaults.withCredentials = true
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.put['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.delete['Access-Control-Allow-Origin'] = '*';

const api = axios.create({
  baseURL,
  // withCredentials: true,
  timeout: 10000,
});

export default api;
