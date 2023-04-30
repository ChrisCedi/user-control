import React from "react";
import styled from "styled-components";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { Button } from "../../components/Button/Button";

export const Login = () => {
  const Grid = styled.div`
    display: grid;
    grid-template-columns: 40% 60%;
    min-height: 100vh;
    @media (max-width: 800px) {
      grid-template-columns: 100%;
    }
  `;

  const Item1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
  `;

  const Item2 = styled.div`
    background-image: url(https://images.pexels.com/photos/3769022/pexels-photo-3769022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2);
    background-size: cover;
    background-position: center;
    color: #ffffff;
    padding: 10px;
    @media (max-width: 800px) {
      display: none;
    }
  `;

  return (
    <div>
      <Grid>
        <Item1>
          <h2>Ingresar</h2>
          <LoginForm />
        </Item1>
        <Item2 />
      </Grid>
    </div>
  );
};
