import styled from "styled-components";
import { media } from "../../theme/breakpoints";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 0rem 2.5rem;
  ${media.small`
      padding: 0rem 1.5rem;
    `}
`;
