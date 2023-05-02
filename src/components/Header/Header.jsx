import React from "react";
import { Container } from "./HeaderElements";
import { Logo } from "../Logo/Logo";
import { Button } from "../Button/Button";
import { authLogout } from "../../redux/slices/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Container>
      <motion.div
        onClick={() => navigate("/")}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "tween", stiffness: 300, damping: 1 }}
        className="divLogo"
      >
        <Logo />
      </motion.div>
      <Button $secondary onClick={() => dispatch(authLogout())}>
        Salir
      </Button>
    </Container>
  );
};
