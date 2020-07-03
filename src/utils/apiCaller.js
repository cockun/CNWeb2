import axios from "axios";
const a = "https://5ee5aa77ddcea00016a37721.mockapi.io";
const API_URL = "https://my-appcoc.herokuapp.com";
export function callApi(endpoint, method = "GET", body) {
  return axios({
    method: method,
    url: `${API_URL}/${endpoint}`,
    data: body,
  });
}
