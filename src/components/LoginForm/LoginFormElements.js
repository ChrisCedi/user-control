import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  padding: 2px 0px;
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
