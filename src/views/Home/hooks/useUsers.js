import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersList } from "../../../redux/slices/users";

export const useUsers = () => {
  const { usersData } = useSelector((state) => state.users);

  const [pageState, setPageState] = useState(
    usersData.page ? usersData.page : 1
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersList(pageState));
  }, [dispatch, pageState]);

  return { usersData, pageState, setPageState };
};
