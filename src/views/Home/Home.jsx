import React, { useState } from "react";
import { UserCard } from "../../components/UserCard/UserCard";
import { Container } from "./HomeElements";
import { Column, Row } from "styled-grid-system-component";
import { Pagination } from "../../components/Pagination/Pagination";
import Sidebar from "../../components/SideBar/SideBar";
import { useUsers } from "../../redux/slices/users/hooks/useUsers";
import { UpdateUserForm } from "../../components/UpdateUserForm/UpdateUserForm";
import { motion } from "framer-motion";

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
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <UserCard user={user} showSiderbar={showSiderbar} />
              </motion.div>
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
