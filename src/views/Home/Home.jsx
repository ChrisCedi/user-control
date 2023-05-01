import React, { useEffect, useState } from "react";
import { UserCard } from "../../components/UserCard/UserCard";
import { Container } from "./HomeElements";
import { Column, Row } from "styled-grid-system-component";
import { Pagination } from "../../components/Pagination/Pagination";
import Sidebar from "../../components/SideBar/SideBar";
import { getUsersList } from "../../redux/slices/users";
import { useDispatch, useSelector } from "react-redux";

export const Home = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSiderbar = () => setSidebar(!sidebar);
  const { usersData } = useSelector((state) => state.users);
  const [pageState, setPageState] = useState(
    usersData.page ? usersData.page : 1
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersList(pageState));
  }, [dispatch, pageState]);

  return (
    <Container>
      <h2 className="title">Usuarios</h2>
      <text className="description">Lista completa de usuarios</text>
      <div className="divCards">
        <Row>
          {usersData?.data?.map((user, index) => (
            <Column sm={12} md={6} lg={4} key={index} onClick={showSiderbar}>
              <UserCard user={user} />
            </Column>
          ))}
        </Row>
      </div>
      {sidebar && <Sidebar active={setSidebar} />}
      <Pagination pageState={pageState} setPageState={setPageState} />
    </Container>
  );
};
