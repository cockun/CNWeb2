import axios from 'axios';

const API_URL = 'https://5ee5aa77ddcea00016a37721.mockapi.io';
export function callApi(endpoint, method = 'GET', body) {
  return axios({
    method: method,
    url: `${API_URL}/${endpoint}`,
    data: body,
  });
}
