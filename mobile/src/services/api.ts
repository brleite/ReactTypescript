import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.6.38.166:19002',
});

export default api;
