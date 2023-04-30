import { Home } from "../views/Home/Home";
import { Login } from "../views/Login/Login";
import { BaseLayout } from "../layout/BaseLayout/BaseLayout";
import { FullScreenLayout } from "../layout/FullScreenLayout/FullScreenLayout";

export const routes = [
  {
    path: "/login",
    layout: FullScreenLayout,
    component: Login,
    exact: true,
    title: "Login",
  },
  {
    path: "/",
    layout: BaseLayout,
    component: Home,
    exact: true,
    title: "Home",
  },
];
