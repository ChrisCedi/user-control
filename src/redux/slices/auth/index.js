import { createSlice } from "@reduxjs/toolkit";
import { userControlApi } from "../../../api/apiConfig";
import { setToken } from "../../../utils/token";
import { deleteToken } from "../../../utils/token";
import { messagesResponse } from "./constants";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    auth: undefined,
  },
  reducers: {
    setAuth: (state, action) => {
      state.auth = action.payload;
    },
  },
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;

export const authLogin = (data) => async (dispatch) => {
  try {
    const {
      data: { token },
    } = await userControlApi({
      method: "post",
      url: "login",
      data: data,
    });

    if (token) {
      setToken(token);
      dispatch(setAuth(token));
    }
  } catch (error) {
    if (messagesResponse.notFound.error === error.response.data.error)
      window.alert(messagesResponse.notFound.message);
  }
};

export const authLogout = () => async (dispatch) => {
  try {
    await userControlApi({
      method: "post",
      url: "logout",
    });
    dispatch(setAuth(null));
    deleteToken();
  } catch (error) {
    window.alert(error.response.data.error);
  }
};
