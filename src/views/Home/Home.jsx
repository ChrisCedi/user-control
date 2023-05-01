import React, { useEffect, useState } from "react";
import { UserCard } from "../../components/UserCard/UserCard";
import { Container } from "./HomeElements";
import { Column, Row } from "styled-grid-system-component";
import { Pagination } from "../../components/Pagination/Pagination";
import Sidebar from "../../components/SideBar/SideBar";
import { useUsers } from "./hooks/useUsers";

export const Home = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSiderbar = () => setSidebar(!sidebar);
  const { usersData, pageState, setPageState } = useUsers();

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
