import { Home } from "../views/Home/Home";
import { BaseLayout } from "../layout/BaseLayout/BaseLayout";
import { Posts } from "../views/Posts/Posts";

export const routes = [
  {
    path: "/",
    layout: BaseLayout,
    component: Home,
    exact: true,
    title: "Home",
  },
  {
    path: "/posts/:id",
    layout: BaseLayout,
    component: Posts,
    exact: true,
    title: "Posts",
  },
];
