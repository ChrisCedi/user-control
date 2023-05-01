import React from "react";
import { Container } from "./HeaderElements";
import { Logo } from "../Logo/Logo";
import { Button } from "../Button/Button";

export const Header = () => {
  return (
    <Container>
      <Logo />
      <Button $secondary>Salir</Button>
    </Container>
  );
};
