import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { authLogin } from "../../../redux/slices/auth";

export const useFields = () => {
  const dispatch = useDispatch();

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
    dispatch(authLogin(values));
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
