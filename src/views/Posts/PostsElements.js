import styled from "styled-components";
import { media } from "../../theme/breakpoints";

export const Container = styled.div`
  .description {
    padding-bottom: 2rem;
  }
  .divHeaderPost {
    display: flex;
    justify-content: space-between;
  }
  .divAvatar {
    display: flex;
    align-items: center;
  }
  .avatar {
    height: 40px;
    border-radius: 6rem;
    margin-right: 10px;
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
`;
