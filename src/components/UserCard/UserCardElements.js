import styled from "styled-components";

export const Card = styled.div`
  border: 0.5px solid ${(props) => props.theme.colors.primary};
  /* padding: 1rem; */
  height: 250px;
  margin-bottom: 1.5rem;
  border-radius: 1rem;
  &:hover {
    border: 0.5px solid ${(props) => props.theme.colors.secondary};
  }

  .backgroundAvatar {
    height: 70px;
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: 1rem 1rem 0rem 0rem;
    display: flex;
    justify-content: center;
    padding-top: 1rem;
  }

  .divInformation {
    padding: 3rem 1rem;
  }
`;

export const Avatar = styled.img`
  border-radius: 5rem;
  height: 120px;
  width: 120px;
`;
