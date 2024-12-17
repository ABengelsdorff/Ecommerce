"use client";

import { Input, Button } from "@nextui-org/react";
import { useForm, Controller } from "react-hook-form";
import { ValidationRules } from "../utils/ReglasForm";
import IFromData from "./InterfaceLogin";
import { loginService } from "@/app/services/authServices";
import useUserDataStore from "@/store";

import { useRouter } from "next/navigation";


const LoginForm = () => {
  const router = useRouter();
  const { setUserData } = useUserDataStore()

  const {
    handleSubmit,
    control,
    formState: { errors }} = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data: IFromData) => {
    const response = await loginService(data)

    localStorage.setItem("token", response.token);
    localStorage.setItem("user", JSON.stringify(response.user));

    setUserData(response)

    if(response) alert("Usuario logueado correctamente")
      router.push("/")

    console.log(data);
  };

  return (
    <div className="flex items-start justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-52 p-8 bg-white rounded-lg shadow-md w-full max-w-md flex flex-col gap-5"
      >
        <h1 className="text-2xl font-bold text-center mb-3">Login</h1>

        <Controller
          name="email"
          control={control}
          rules={ValidationRules.email}
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

        <Controller
          name="password"
          control={control}
          rules={ValidationRules.password}
          render={({ field }) => (
            <Input
              {...field}
              type="password"
              label="Contrasea"
              variant="bordered"
            />
          )}
        />
        {errors.password && (
          <span className="text-red-600">{errors.password.message}</span>
        )}

        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default LoginForm;
