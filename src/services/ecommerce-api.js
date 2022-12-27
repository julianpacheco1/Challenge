import axios from "axios";

const baseURL = "http://localhost:3000/productos";

export default {
  fetchProduct() {
    return axios
      .get(`${baseURL}`, { withCredentials: true })
      .then((response) => response.data.data);
  },
};
