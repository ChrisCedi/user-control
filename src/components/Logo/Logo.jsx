import React from "react";
import { Images } from "../../assets/Images";
import { Container } from "./LogoElements";

export const Logo = () => {
  return (
    <Container>
      <img src={Images.userIcon} alt="userIcon" className="userIcon" />
      <h2 className="name">U control</h2>
    </Container>
  );
};
