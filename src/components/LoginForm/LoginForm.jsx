import React from "react";
import { Form, Label, Container } from "./LoginFormElements";
import { Button } from "../Button/Button";
import { useFields } from "./hooks/useFields";
import { Input } from "../Input/Input";

export const LoginForm = () => {
  const { handleSubmit, onSubmit, errors, emailRegister, passwordRegister } =
    useFields();

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="divInput">
          <Label>Email</Label>
          <Input
            placeholder="correo@dominio.com"
            elements={emailRegister}
            name="emal"
          />
          <span className="messageError">{errors.email?.message}</span>
        </div>
        <div className="divInput">
          <Label>Contraseña</Label>

          <Input
            type="password"
            placeholder="Contraseña"
            elements={passwordRegister}
            name="password"
          />
          <span className="messageError">{errors.password?.message}</span>
        </div>
        <span
          className="forgetPassword"
          onClick={() => window.alert("Estamos trabajando en esta función")}
        >
          ¿Olvidaste tu contraseña?
        </span>
        <Button type="submit">Enviar</Button>
      </Form>
    </Container>
  );
};
