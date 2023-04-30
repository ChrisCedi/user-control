import React from "react";
import { Form, Label, Input, Container } from "./LoginFormElements";
import { Button } from "../Button/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const LoginForm = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Formato de email invalido")
      .required("Campo requerido"),
    password: yup.string().required("Campo requerido"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    console.log("hola", values);
  };

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
