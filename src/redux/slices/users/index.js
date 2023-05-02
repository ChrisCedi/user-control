import { createSlice } from "@reduxjs/toolkit";
import { userControlApi } from "../../../api/apiConfig";
import { usersMap, userSelectedMap, updateUserMap } from "./helpers";
import { getToken } from "../../../utils/token";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    usersData: {},
    userSelected: {},
  },
  reducers: {
    setUserList: (state, action) => {
      state.usersData = action.payload;
      state.page = action.payload;
    },
    setUserSelected: (state, action) => {
      state.userSelected = action.payload;
    },
  },
});

export const { setUserList, setUserSelected } = userSlice.actions;
export default userSlice.reducer;

export const getUsersList = (page) => async (dispatch) => {
  try {
    const { data, status } = await userControlApi.get(`users?page=${page}`);
    if (status === 200) dispatch(setUserList(usersMap(data)));
  } catch (error) {
    console.log(error);
  }
};

export const getUserById = (id) => async (dispatch) => {
  try {
    const { data, status } = await userControlApi({
      method: "get",
      url: `users/${id}`,
    });

    if (status === 200) dispatch(setUserSelected(userSelectedMap(data.data)));
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = (values) => async (dispatch) => {
  try {
    const response = await userControlApi({
      method: "put",
      url: `users/${values}`,
      data: updateUserMap(values),
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });

    console.log(response);

    if (response) dispatch(getUsersList(1));
  } catch (error) {
    console.log(error);
  }
};
