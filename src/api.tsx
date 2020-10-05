import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "6d499214320b2e165ed71aabbc1a7e90",
    languege: "en-us"
  }
});

api.get("tv/popular");

export default api;