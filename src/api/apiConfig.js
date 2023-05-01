import axios from "axios";

export const userControlApi = axios.create({
  baseURL: "https://reqres.in/api",
});
