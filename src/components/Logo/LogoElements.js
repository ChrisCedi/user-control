import styled from "styled-components";
import { media } from "../../theme/breakpoints";

export const Container = styled.div`
  display: flex;
  align-items: center;
  ${media.small`
  padding: .5rem 0rem`}

  .userIcon {
    height: 40px;
    margin-right: 5px;
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 8px;
  }
  .name {
    ${media.small`
    display: none`}
  }
`;
