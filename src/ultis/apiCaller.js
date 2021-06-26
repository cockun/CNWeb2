import axios from "axios";

export function callApi( ) {
  return axios({
    method: "GET",
    url: `localhost:3000/api/products/all`,
    
  });
}
