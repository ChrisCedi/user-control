import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "../../../api/apiConfig";
import { usersMap } from "./helpers";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    usersData: [],
    userSelected: {},
  },
  reducers: {
    setUserList: (state, action) => {
      state.usersData = action.payload;
      state.page = action.payload;
    },
  },
});

export const { setUserList } = userSlice.actions;
export default userSlice.reducer;

export const getUsersList = (page) => async (dispatch) => {
  try {
    const response = await userApi.get(`users?page=${page}`);
    dispatch(setUserList(usersMap(response.data)));
  } catch (error) {
    console.log(error);
  }
};
