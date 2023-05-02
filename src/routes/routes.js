import { Home } from "../views/Home/Home";
import { BaseLayout } from "../layout/BaseLayout/BaseLayout";
import { Posts } from "../views/Posts/Posts";
import { Album } from "../views/Album/Album";

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
  {
    path: "/albums/:id",
    layout: BaseLayout,
    component: Album,
    exact: true,
    title: "Album",
  },
];
