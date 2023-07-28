import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_OMDB_API_URL}/?apiKey=${import.meta.env.VITE_OMDB_API_KEY}`
});

export default api;
