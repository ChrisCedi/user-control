import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  .forgetPassword {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const Label = styled.label`
  padding: 2px 0px;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 500;
`;

export const Container = styled.section`
  .divInput {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .messageError {
    padding-bottom: 10px;
    font-size: 12px;
    color: red;
  }
`;
