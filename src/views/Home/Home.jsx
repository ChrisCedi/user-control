import React from "react";
import { usersResponse } from "./mocks";
import { UserCard } from "../../components/UserCard/UserCard";
import { Container } from "./HomeElements";
import { Column, Row } from "styled-grid-system-component";
import { Pagination } from "../../components/Pagination/Pagination";

export const Home = () => {
  const { data } = usersResponse;

  return (
    <Container>
      <h1>Usuarios</h1>
      <text className="description">Lista completa de usuarios</text>
      <div className="divCards">
        <Row>
          {data.map((user, index) => (
            <Column sm={12} md={6} lg={4} key={index}>
              <UserCard user={user} />
            </Column>
          ))}
        </Row>
      </div>
      <Pagination />
    </Container>
  );
};
