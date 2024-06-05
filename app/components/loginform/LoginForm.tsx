"use client";

import { FieldValues, useForm } from "react-hook-form";
import Button from "../button";
import { UserService } from "@/app/services/UserService.class";
import styles from "./login.module.css";
import Title from "../title";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Routes } from "@/app/services/data";

const LoginForm = () => {
  const { handleSubmit, register, formState } = useForm();
  const router = useRouter();
  const [error, setError] = useState("");

  const sendLoginRequest = async (data: FieldValues) => {
    setError("");
    const dataResponse = await UserService.login(data.username, data.password);

    if (!dataResponse.message || dataResponse.message !== "000") {
      return setError("Nombre de usuario inválido o contraseña incorrecta");
    }

    router.push(Routes.PANEL);
  };

  return (
    <div className={`${styles.formContainer} `}>
      <Title title="Iniciar Sesion" />
      <p>Volvamos a jugar en las competencias más importantes del mundo.</p>
      <form
        onSubmit={handleSubmit(sendLoginRequest)}
        className={`${styles.form} `}
      >
        <label htmlFor="username">Nombre de usuario</label>

        <input
          type="text"
          id="username"
          {...register("username", {
            required: true,
            minLength: 3,
          })}
          className={`${styles.input}`}
          aria-invalid={formState.errors.username ? "true" : "false"}
        />
        {formState.errors.username && (
          <p className={`${styles.error}`}>Introduce un nombre de usuario</p>
        )}
        <label htmlFor="password">Contraseña</label>

        <input
          type="password"
          id="password"
          {...register("password", {
            required: true,
          })}
          className={`${styles.input}`}
          aria-invalid={formState.errors.password ? "true" : "false"}
        />
        {formState.errors.password && (
          <p className={`${styles.error}`}>Introduce la contraseña</p>
        )}
        {error && <p className={`${styles.error}`}>{error}</p>}
        <Button cta="Login" />
        <Link className="link" href={Routes.REGISTER}>
          Registrarse
        </Link>
      </form>
    </div>
  );
};
export default LoginForm;
