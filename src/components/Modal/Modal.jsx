import React from "react";
import { ModalContainer, ModalContent } from "./ModalElements";

export const Modal = ({ children }) => {
  return (
    <ModalContainer>
      <ModalContent>{children}</ModalContent>
    </ModalContainer>
  );
};
