import styled from "styled-components";
import { media } from "../../theme/breakpoints";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background.main};
  position: fixed;
  box-shadow: 0px 3px 6px #00000029;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 400px;
  left: ${(props) => (props.sidebar ? "0" : "-100%")};
  animation: showSidebar 0.4s;
  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 400px;
      ${media.small`
    width: 100%
  `}
    }
  }
  ${media.small`
    width: 100%
  `}

  .boxButton {
    display: flex;
    justify-content: flex-end;
    padding-right: 1rem;
  }
  .closeIcon {
    height: 25px;
    padding-top: 100px;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  margin-top: 100px;
`;
