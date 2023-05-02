import React, { useEffect } from "react";
import { Form, Label, Container } from "./UpdateUserFormElements";
import { Button } from "../Button/Button";
import { useFields } from "./hooks/useFields";
import { Input } from "../Input/Input";

export const UpdateUserForm = ({ handleSidebar }) => {
  const {
    handleSubmit,
    onSubmit,
    errors,
    firstName,
    lastName,
    email,
    userSelected,
    setValue,
  } = useFields(handleSidebar);

  useEffect(() => {
    let keys = Object.keys(userSelected);

    if (userSelected !== undefined && keys) {
      setValue(`${keys[0]}`, `${userSelected.firstName}`);
      setValue(`${keys[1]}`, `${userSelected.lastName}`);
      setValue(`${keys[2]}`, `${userSelected.email}`);
      setValue(`${keys[3]}`, `${userSelected.id}`);
    }
  }, [userSelected, setValue]);

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="divInput">
          <Label>Nombre</Label>
          <Input
            placeholder="Ej: Christian"
            elements={firstName}
            name="firstName"
          />
          <span className="messageError">{errors.firstName?.message}</span>
        </div>
        <div className="divInput">
          <Label>Apellido</Label>
          <Input
            placeholder="Ej: Estrada"
            elements={lastName}
            name="lastName"
          />
          <span className="messageError">{errors.lastName?.message}</span>
        </div>
        <div className="divInput">
          <Label>Email</Label>

          <Input
            placeholder="correo@dominio.com"
            elements={email}
            name="email"
            disabled={true}
          />
          <span className="messageError">{errors.email?.message}</span>
        </div>

        <Button type="submit">Guardar cambios</Button>
      </Form>
    </Container>
  );
};
