import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  min-height: 100vh;
  @media (max-width: 800px) {
    grid-template-columns: 100%;
  }
`;

export const ItemForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  .boxHeader {
    padding-top: 30px;
    position: fixed;
    top: 0;
    padding-top: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 300px;
    @media (max-width: 800px) {
      padding-top: 10px;
    }
  }
  .boxFooter {
    position: fixed;
    bottom: 0;
    text-align: center;
  }
`;

export const ItemImage = styled.div`
  background-image: url(https://images.pexels.com/photos/3769022/pexels-photo-3769022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2);
  background-size: cover;
  background-position: center;
  color: #ffffff;
  padding: 10px;
  @media (max-width: 800px) {
    display: none;
  }
`;
