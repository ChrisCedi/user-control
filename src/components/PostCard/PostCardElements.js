import styled from "styled-components";
import { media } from "../../theme/breakpoints";

export const Card = styled.div`
  .divHeaderPost {
    display: flex;
    justify-content: space-between;
  }
  .divAvatar {
    display: flex;
    align-items: center;
  }
  .avatar {
    height: 70px;
    border-radius: 6rem;
    margin-right: 10px;
    ${media.small`
    height: 50px`}
  }
  .divider {
    border-top: 1px solid #bbb;
  }
  .divBody {
    padding: 1rem 6rem;
    ${media.small`
    padding: .5rem 2rem;
    
    `}
  }
  .titlePost {
    font-weight: 600;
    font-size: 18px;
  }
  .lastName {
    padding-left: 5px;
    ${media.small`
    display: none`}
  }
  .divButtonsModal {
    display: flex;
    justify-content: space-between;
  }
  .divCloseButton {
    display: flex;
    justify-content: flex-end;
    &:hover {
      cursor: pointer;
    }
  }
`;
