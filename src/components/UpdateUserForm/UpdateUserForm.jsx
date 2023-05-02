import React from "react";
import { Form, Label, Container } from "./UpdateUserFormElements";
import { Button } from "../Button/Button";
import { useFields } from "./hooks/useFields";
import { Input } from "../Input/Input";

export const UpdateUserForm = () => {
  const { handleSubmit, onSubmit, errors, firstName, lastName, email } =
    useFields();

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="divInput">
          <Label>Nombre</Label>
          <Input placeholder="Ej: Christian" elements={firstName} name="emal" />
          <span className="messageError">{errors.firstName?.message}</span>
        </div>
        <div className="divInput">
          <Label>Apellido</Label>
          <Input placeholder="Ej: Estrada" elements={lastName} name="emal" />
          <span className="messageError">{errors.lastName?.message}</span>
        </div>
        <div className="divInput">
          <Label>Email</Label>

          <Input
            type="password"
            placeholder="correo@dominio.com"
            elements={email}
            name="password"
          />
          <span className="messageError">{errors.email?.message}</span>
        </div>

        <Button type="submit">Guardar cambios</Button>
      </Form>
    </Container>
  );
};
