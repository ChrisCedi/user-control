import { createSlice } from "@reduxjs/toolkit";
import { userControlApi, contentApi } from "../../../api/apiConfig";
import { usersMap, userSelectedMap, updateUserMap } from "./helpers";
import { getToken } from "../../../utils/token";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    usersData: {},
    userSelected: {},
    postsUser: [],
    albumsUser: [],
  },
  reducers: {
    setUserList: (state, action) => {
      state.usersData = action.payload;
      state.page = action.payload;
    },
    setUserSelected: (state, action) => {
      state.userSelected = action.payload;
    },
    setPostsUser: (state, action) => {
      state.postsUser = action.payload;
    },
    setAlbumsUser: (state, action) => {
      state.albumsUser = action.payload;
    },
  },
});

export const { setUserList, setUserSelected, setPostsUser, setAlbumsUser } =
  userSlice.actions;
export default userSlice.reducer;

//user

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

//content

export const getPostsById = (id) => async (dispatch) => {
  try {
    const { status, data } = await contentApi({
      method: "get",
      url: `posts?userId=${id}`,
    });

    if (status === 200) dispatch(setPostsUser(data));
  } catch (error) {
    console.log(error);
  }
};

export const getAlbumsById = (id) => async (dispatch) => {
  try {
    const { status, data } = await contentApi({
      method: "get",
      url: `users/${id}/albums`,
    });

    if (status === 200) dispatch(setAlbumsUser(data));
  } catch (error) {
    console.log(error);
  }
};
