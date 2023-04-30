import React from "react";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { Footer } from "../../components/Footer/Footer";
import { Grid, ItemForm, ItemImage } from "./LoginElements";
import { Images } from "../../assets/Images";

export const Login = () => {
  return (
    <Grid>
      <ItemForm>
        <box className="boxHeader">
          <img src={Images.userIcon} alt="userIcon" className="userIcon" />
          <h2>U control</h2>
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
