import axios, { AxiosInstance } from "axios";

export const api: AxiosInstance = axios.create({
  baseURL: "https://api.caiman-app.de/api",
  headers: {
    "Content-type": "application/json",
  },
});
