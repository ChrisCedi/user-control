import React from "react";
import { ButtonComponent } from "./ButtonElements";

export const Button = ({ children }) => {
  return <ButtonComponent $secondary>{children}</ButtonComponent>;
};
