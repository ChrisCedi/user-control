import React, { useState } from "react";
import { Form, Label, Container } from "./LoginFormElements";
import { Button } from "../Button/Button";
import { useFields } from "./hooks/useFields";
import { Input } from "../Input/Input";
import { Modal } from "../Modal/Modal";

export const LoginForm = () => {
  const [open, setOpen] = useState(false);
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
        <span className="forgetPassword" onClick={() => setOpen(true)}>
          ¿Olvidaste tu contraseña?
        </span>
        <Button type="submit">Enviar</Button>
      </Form>
      {open && (
        <Modal>
          <div className="bodyModal">
            Estamos trabajando con esta función
            <Button onClick={() => setOpen(false)}>Aceptar</Button>
          </div>
        </Modal>
      )}
    </Container>
  );
};
