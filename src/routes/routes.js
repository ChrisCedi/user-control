import { Home } from "../views/Home/Home";
import { BaseLayout } from "../layout/BaseLayout/BaseLayout";

export const routes = [
  {
    path: "/",
    layout: BaseLayout,
    component: Home,
    exact: true,
    title: "Home",
  },
];
