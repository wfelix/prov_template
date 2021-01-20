import axios from 'axios';

const api = axios.create({
  baseURL: 'http://homologacao-api.conecto.com.br:8930/api',
  // baseURL: 'http://localhost:8930/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000,
  // transformRequest: data => {
  //   console.log('transformRequest:', data);
  // },
  // transformResponse: data => {
  //   console.log('transformResponse:', data);
  // },
});

// api.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
// api.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

export default api;
