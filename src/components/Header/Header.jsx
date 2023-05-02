import React from "react";
import { Container } from "./HeaderElements";
import { Logo } from "../Logo/Logo";
import { Button } from "../Button/Button";
import { authLogout } from "../../redux/slices/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Container>
      <div className="divLogo" onClick={() => navigate("/")}>
        <Logo />
      </div>
      <Button $secondary onClick={() => dispatch(authLogout())}>
        Salir
      </Button>
    </Container>
  );
};
