import styled from "styled-components";

export const Card = styled.div`
  .body {
    border: 0.5px solid ${(props) => props.theme.colors.primary};

    min-height: 220px;
    margin-bottom: 1.5rem;
    border-radius: 1rem;
  }

  .backgroundAvatar {
    height: 70px;

    background-color: #fcf3cf;
    transition: background-color 0.5s ease;
    border-radius: 1rem 1rem 0rem 0rem;
    display: flex;
    justify-content: center;
    padding-top: 1rem;
    &:hover {
      background-color: ${(props) => props.theme.colors.secondary};
    }
  }

  .divInformation {
    padding: 1rem 1rem;
  }
  .divButtons {
    display: flex;

    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const Avatar = styled.img`
  border-radius: 5rem;
  height: 100px;
  width: 100px;
`;
