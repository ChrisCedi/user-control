import React from "react";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { Footer } from "../../components/Footer/Footer";
import { Grid, ItemForm, ItemImage } from "./LoginElements";
import { Logo } from "../../components/Logo/Logo";

export const Login = () => {
  return (
    <Grid>
      <ItemForm>
        <div className="boxHeader">
          <Logo />
        </div>
        <h3>Ingresar</h3>
        <LoginForm />
        <div className="boxFooter">
          <Footer />
        </div>
      </ItemForm>
      <ItemImage />
    </Grid>
  );
};
