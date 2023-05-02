import axios from "axios";

export const userControlApi = axios.create({
  baseURL: "https://reqres.in/api",
});

export const contentApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
