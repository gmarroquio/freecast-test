import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.openweathermap.org/",
  params: { appid: import.meta.env.VITE_OPEN_WATHER_KEY },
});
