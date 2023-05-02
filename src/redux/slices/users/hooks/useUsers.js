import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersList, updateUser, getUserById } from "../index";

export const useUsers = () => {
  const { usersData, userSelected } = useSelector((state) => state.users);

  const [pageState, setPageState] = useState(
    usersData.page ? usersData.page : 1
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersList(pageState));
  }, [dispatch, pageState]);

  return {
    usersData,
    userSelected,
    pageState,
    setPageState,
    updateUser,
    dispatch,
    getUsersList,
    getUserById,
  };
};
