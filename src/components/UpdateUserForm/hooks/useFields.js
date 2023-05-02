import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";

export const useFields = () => {
  const dispatch = useDispatch();
  const { userSelected } = useSelector((state) => state.users);

  const schema = yup.object().shape({
    firstName: yup.string().required("Campo requerido"),
    lastName: yup.string().required("Campo requerido"),
    email: yup
      .string()
      .email("Formato de email inválido")
      .required("Campo requerido"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  const firstName = register("firstName");
  const lastName = register("lastName");
  const email = register("email");

  return {
    handleSubmit,
    onSubmit,
    errors,
    firstName,
    lastName,
    email,
    userSelected,
    setValue,
  };
};
