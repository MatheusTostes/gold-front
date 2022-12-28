import axios from 'axios';

// const baseURL = 'http://localhost:8081/';
const baseURL = 'https://56b3-2804-56c-a403-4700-7079-8ff8-958b-a04f.ngrok.io';

// axios.defaults.withCredentials = true
axios.defaults.headers.get['Access-Control-Allow-Origin'] = true;
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.put['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.delete['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.get["ngrok-skip-browser-warning"] = true;

const api = axios.create({
  baseURL,
  withCredentials: false,
  timeout: 10000,
});

export default api;
