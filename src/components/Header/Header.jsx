import React from "react";
import { Container } from "./HeaderElements";
import { Logo } from "../Logo/Logo";
import { Button } from "../Button/Button";
import { authLogout } from "../../redux/slices/auth";
import { useDispatch } from "react-redux";

export const Header = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Logo />
      <Button $secondary onClick={() => dispatch(authLogout())}>
        Salir
      </Button>
    </Container>
  );
};
