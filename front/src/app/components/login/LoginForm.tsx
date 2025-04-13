"use client";

import { Input, Button } from "@nextui-org/react";
import { useForm, Controller } from "react-hook-form";
import { ValidationRules } from "../utils/RulesForm";
import IFromData from "./InterfaceLogin";
import { loginService } from "@/app/services/authServices";
import useUserDataStore from "@/store";

import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Link from "next/link";

const LoginForm = () => {
  const router = useRouter();
  const { setUserData } = useUserDataStore();

  const { handleSubmit, control, formState: { errors }} = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange", //Valida los campos conforme el usuario escribe
  });

  
  const onSubmit = async (data: IFromData) => {
    try {
      const response = await loginService(data);

      // Guardar en localStorage y actualizar el estado
      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));
      setUserData(response);

      Swal.fire({
        title: "Usuario logueado correctamente!",
        icon: "success",
        draggable: true,
        customClass: {
          confirmButton: "custom-button",
        },
      });

      router.push("/"); 
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: (error as Error).message,
        customClass: {
          confirmButton: "custom-button",
        },
      });
    }
  };


  return (
    <div className="flex items-start justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-52 p-8 bg-white rounded-lg shadow-md w-full max-w-md flex flex-col gap-5"
      >
        <h1 className="text-2xl font-bold text-center mb-3">Iniciar Sesión</h1>

        <Controller
          name="email"
          control={control} //Gestiona el estado y validacion del input
          rules={ValidationRules.email} 
          render={({ field }) => (
            <Input
              {...field} //Propiedades y metodos para el control del campo.
              type="email"
              label="Email"
              variant="bordered"
              placeholder="ejemplo@gmail.com"
            />
          )}
        />
        {errors.email && (
          <span className="text-red-600">{errors.email.message}</span>
        )}

        <Controller
          name="password"
          control={control}
          rules={ValidationRules.password}
          render={({ field }) => (
            <Input
              {...field}
              type="password"
              label="Contraseña"
              variant="bordered"
            />
          )}
        />
        {errors.password && (
          <span className="text-red-600">{errors.password.message}</span>
        )}

        <Button color="primary" variant="flat" type="submit">
          Acceder
        </Button>
        
        <p className="flex justify-center"> ¿Aún no te has registrado? Regístrate <Link href="./register" className="text-blue-700 ml-1"> aquí</Link></p>

      </form>
    </div>
  );
};

export default LoginForm;
