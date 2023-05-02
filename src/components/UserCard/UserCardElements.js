import styled from "styled-components";

export const Card = styled.div`
  border: 0.5px solid ${(props) => props.theme.colors.primary};

  min-height: 220px;
  margin-bottom: 1.5rem;
  border-radius: 1rem;
  &:hover {
    cursor: pointer;
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
