import { configureStore } from "@reduxjs/toolkit";
import users from "./slices/users";
import auth from "./slices/auth";

export default configureStore({
  reducer: {
    users,
    auth,
  },
});
