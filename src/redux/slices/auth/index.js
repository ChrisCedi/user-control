import { createSlice } from "@reduxjs/toolkit";
import { userControlApi } from "../../../api/apiConfig";
import { setToken } from "../../../utils/token";

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

    console.log(token);
    if (token) {
      setToken(token);
      dispatch(setAuth(token));
    }
  } catch (error) {
    console.log(error);
  }
};
