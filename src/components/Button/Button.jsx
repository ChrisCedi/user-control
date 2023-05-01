import React from "react";
import { ButtonComponent } from "./ButtonElements";

export const Button = ({ children, onClick, disabled }) => {
  return (
    <ButtonComponent $secondary onClick={onClick} disabled={disabled}>
      {children}
    </ButtonComponent>
  );
};
