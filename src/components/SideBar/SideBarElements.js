import styled from "styled-components";
import { media } from "../../theme/breakpoints";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background.main};
  position: fixed;
  box-shadow: 0px 3px 6px #00000029;
  height: -webkit-fill-available;
  padding: 2rem;
  top: 0px;
  left: 0px;
  width: 350px;
  left: ${(props) => (props.sidebar ? "0" : "--webkit-fill-available;")};
  animation: showSidebar 0.4s;
  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;

    cursor: pointer;
  }
  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 350px;
      ${media.small`
    width: -webkit-fill-available;
  `}
    }
  }
  ${media.small`
    width: -webkit-fill-available;
  `}

  .boxButton {
    display: flex;
    justify-content: flex-end;
    padding-right: 1rem;
  }
  .closeIcon {
    height: 25px;
    padding-top: 85px;
    cursor: pointer;
  }
`;
