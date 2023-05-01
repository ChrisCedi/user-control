import styled from "styled-components";

export const InputComponent = styled.input.attrs((props) => ({
  size: props.size || "1em",
}))`
  font-size: 1em;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 3px;
  margin-top: 10px;
  padding: ${(props) => props.size};
  &:focus {
    outline: none;
    border: 2px solid ${(props) => props.theme.colors.secondary};
  }
`;
