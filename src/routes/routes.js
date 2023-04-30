import { Home } from "../views/Home/Home";
import { Login } from "../views/Login/Login";

export const routes = [
  {
    path: "/login",
    component: Login,
    exact: true,
    title: "Login",
  },
  {
    path: "/",
    component: Home,
    exact: true,
    title: "Home",
  },
];
