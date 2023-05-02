import { TOKEN } from "./constants";

export const setToken = (token) => {
  localStorage.setItem(TOKEN, token);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN);
};

export const deleteToken = () => {
  localStorage.removeItem(TOKEN);
};
