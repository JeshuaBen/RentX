import axios from "axios";

const baseURL = "http://192.168.211.1:3333";

export const api = axios.create({
  baseURL: baseURL,
});
