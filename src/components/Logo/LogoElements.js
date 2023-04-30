import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  .userIcon {
    height: 40px;
    margin-right: 5px;
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 8px;
  }
`;
