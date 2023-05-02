import React, { useState } from "react";
import { UserCard } from "../../components/UserCard/UserCard";
import { Container } from "./HomeElements";
import { Column, Row } from "styled-grid-system-component";
import { Pagination } from "../../components/Pagination/Pagination";
import Sidebar from "../../components/SideBar/SideBar";
import { useUsers } from "../../redux/slices/users/hooks/useUsers";
import { UpdateUserForm } from "../../components/UpdateUserForm/UpdateUserForm";

export const Home = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSiderbar = () => setSidebar(!sidebar);
  const { usersData, pageState, setPageState } = useUsers();

  return (
    <Container>
      <h2 className="title">Usuarios</h2>
      <p className="description">Lista completa de usuarios</p>
      <div className="divCards">
        <Row>
          {usersData?.data?.map((user, index) => (
            <Column sm={12} md={6} lg={4} key={index}>
              <UserCard user={user} showSiderbar={showSiderbar} />
            </Column>
          ))}
        </Row>
      </div>
      {sidebar && (
        <Sidebar active={setSidebar}>
          <div className="sidebarBody">
            <h1>Editar usuario</h1>
            <UpdateUserForm handleSidebar={setSidebar} />
          </div>
        </Sidebar>
      )}
      <Pagination pageState={pageState} setPageState={setPageState} />
    </Container>
  );
};
