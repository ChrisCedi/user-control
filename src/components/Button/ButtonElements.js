import styled from "styled-components";
import { css } from "styled-components";

export const ButtonComponent = styled.button`
  background: ${(props) =>
    props.$primary ? props.theme.colors.primary : props.theme.colors.secondary};
  color: white;
  font-size: 1em;
  margin-right: 1em;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.25em 1em;
  border: 2px solid
    ${(props) =>
      props.$primary
        ? props.theme.colors.primary
        : props.theme.colors.secondary};
  border-radius: 3px;
  &:hover {
    background-color: ${(props) => props.theme.colors.button.hover};
    border: 2px solid ${(props) => props.theme.colors.button.hover};
    cursor: pointer;
  }
  ${(props) =>
    props.disabled &&
    css`
      background-color: ${(props) => props.theme.colors.button.disabled};
      border: 2px solid ${(props) => props.theme.colors.button.disabled};
      &:hover {
        cursor: default;
        background-color: ${(props) => props.theme.colors.button.disabled};
        border: 2px solid ${(props) => props.theme.colors.button.disabled};
      }
    `}
`;
