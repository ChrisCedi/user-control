import React from "react";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { Footer } from "../../components/Footer/Footer";
import { Grid, ItemForm, ItemImage } from "./LoginElements";
import { Logo } from "../../components/Logo/Logo";

export const Login = () => {
  return (
    <Grid>
      <ItemForm>
        <box className="boxHeader">
          <Logo />
        </box>
        <h3>Ingresar</h3>
        <LoginForm />
        <box className="boxFooter">
          <Footer />
        </box>
      </ItemForm>
      <ItemImage />
    </Grid>
  );
};
