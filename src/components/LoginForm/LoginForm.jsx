import React from "react";
import { Form, Label, Input, Container } from "./LoginFormElements";
import { Button } from "../Button/Button";
import { useFields } from "./hooks/useFields";

export const LoginForm = () => {
  const { register, handleSubmit, onSubmit, errors } = useFields();

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="divInput">
          <Label>Email</Label>
          <Input placeholder="correo@dominio.com" {...register("email")} />

          <text className="messageError">{errors.email?.message}</text>
        </div>
        <div className="divInput">
          <Label>Contraseña</Label>
          <Input
            type="password"
            placeholder="Contraseña"
            {...register("password")}
          />
          <text className="messageError">{errors.password?.message}</text>
        </div>
        <text>¿Olvidate tu contraseña?</text>
        <Button type="submit">Enviar</Button>
      </Form>
    </Container>
  );
};
