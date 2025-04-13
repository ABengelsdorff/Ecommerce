"use client";

import { Input, Button } from "@nextui-org/react";
import { useForm, Controller } from "react-hook-form";
import { ValidationRegister } from "../utils/RulesRegister";
import IRegisterData from "./InterfaceRegister";
import { registerUserService } from "@/app/services/authServices"; 
import { useRouter } from "next/navigation";
import Swal from 'sweetalert2'
import Link from "next/link";


const RegisterForm = () => {
  const router = useRouter()
  const { handleSubmit, control, formState: { errors }} = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      address: "",
      phone: "",
      confirmPassword: "",

    },
    mode: "onChange",
  });

  const onSubmit = async (data: IRegisterData) => {
    const res = await registerUserService(data);

    if(res) 
       Swal.fire({
              title: "Usuario creado correctamente!",
              icon: "success",
              draggable: true,
              customClass: {
                confirmButton: "custom-button",
              }
            });
      
    router.push("/login")
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-8 bg-white rounded-lg shadow-md w-full max-w-md flex flex-col gap-5"
      >
        <h1 className="text-2xl font-bold text-center mb-3">Registrarse</h1>

        {/* Nombre */}
        <Controller
          name="name"
          control={control}
          rules={ValidationRegister.name}
          render={({ field }) => (
            <Input
              {...field}
              type="text"
              label="Nombre"
              variant="bordered"
              placeholder="Jose Perez"
            />
          )}
        />
        {errors.name && (
          <span className="text-red-600">{errors.name.message}</span>
        )}

        {/* Email */}
        <Controller
          name="email"
          control={control}
          rules={ValidationRegister.email}
          render={({ field }) => (
            <Input
              {...field}
              type="email"
              label="Email"
              variant="bordered"
              placeholder="example@gmail.com"
            />
          )}
        />
        {errors.email && (
          <span className="text-red-600">{errors.email.message}</span>
        )}

        {/* Contraseña */}
        <Controller
          name="password"
          control={control}
          rules={ValidationRegister.password}
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

        {/* Confirmar Contraseña */}
        <Controller 
    name="confirmPassword"
    control={control}
    rules={ValidationRegister.confirmPassword}
    render={({ field }) => (
        <Input 
            {...field}
            type="password"
            label="Confirmar Contraseña"
            variant="bordered"
            placeholder="Vuelve a escribir la contraseña"
        />
    )}
/>
{errors.confirmPassword && (
    <span className="text-red-600">{errors.confirmPassword.message}</span>
)}

        {/* Dirección */}
        <Controller
          name="address"
          control={control}
          rules={ValidationRegister.address}
          render={({ field }) => (
            <Input
              {...field}
              type="text"
              label="Direccion"
              variant="bordered"
              placeholder="Calle Falsa 123"
            />
          )}
        />
        {errors.address && (
          <span className="text-red-600">{errors.address.message}</span>
        )}

        {/* Teléfono */}
        <Controller
          name="phone"
          control={control}
          rules={ValidationRegister.phone}
          render={({ field }) => (
            <Input
              {...field}
              type="tel"
              label="Telefono"
              variant="bordered"
              placeholder="011123445"
            />
          )}
        />
        {errors.phone && (
          <span className="text-red-600">{errors.phone.message}</span>
        )}

        <Button color="primary" variant="flat" type="submit">Registrarse</Button>

        <p className="flex justify-center"> ¿Ya estás registrado? Inicia sesión <Link href="./login" className="text-blue-700 ml-1"> aquí</Link></p>

      </form>
    </div>
  );
};

export default RegisterForm;
