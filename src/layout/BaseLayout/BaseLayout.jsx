import React from "react";
import { Container } from "./BaseLayoutElements";
import { Header } from "../../components/Header/Header";

export const BaseLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};
