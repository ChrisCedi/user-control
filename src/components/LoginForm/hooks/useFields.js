import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

export const useFields = () => {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Formato de email inválido")
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
    navigate("/");
  };

  const emailRegister = register("email");
  const passwordRegister = register("password");

  return {
    handleSubmit,
    onSubmit,
    errors,
    emailRegister,
    passwordRegister,
  };
};
