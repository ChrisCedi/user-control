import React from "react";
import { Body, Container } from "./BaseLayoutElements";
import { Header } from "../../components/Header/Header";

export const BaseLayout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Body>{children}</Body>
    </Container>
  );
};
