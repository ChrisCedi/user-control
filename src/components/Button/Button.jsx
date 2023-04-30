import React from "react";
import styled from "styled-components";

export const Button = ({ children }) => {
  const Button = styled.button`
    background: ${(props) =>
      props.$primary
        ? props.theme.colors.primary
        : props.theme.colors.secondary};
    color: white;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid
      ${(props) =>
        props.$primary
          ? props.theme.colors.primary
          : props.theme.colors.secondary};
    border-radius: 3px;
    &:hover {
      background-color: ${(props) => props.theme.colors.hover};
      border: 2px solid ${(props) => props.theme.colors.hover};
    }
  `;

  return <Button $secondary>{children}</Button>;
};
