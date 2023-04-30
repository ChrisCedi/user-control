import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  padding: 2px 0px;
`;

export const Input = styled.input.attrs((props) => ({
  size: props.size || "1em",
}))`
  font-size: 1em;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 3px;
  margin-top: 10px;
  padding: ${(props) => props.size};
`;

export const Container = styled.section`
  .divInput {
    display: flex;
    flex-direction: column;
    width: 300px;
  }

  .messageError {
    padding-top: 2px;
    padding-bottom: 20px;
    font-size: 12px;
    color: red;
  }
`;
