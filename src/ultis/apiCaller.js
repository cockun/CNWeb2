
import axios from 'axios';

const API_URL = 'http://Localhost:3000/api';
export function callApi(endpoint, method = 'GET', body) {
  return axios({
    method: method,
    url: `${API_URL}/${endpoint}`,
    data: body,
  });
}