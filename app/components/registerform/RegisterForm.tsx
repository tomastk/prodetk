"use client";
import { FieldValues, useForm } from "react-hook-form";
import styles from "./register.module.css";
import Title from "../title";
import Button from "../button";
import Link from "next/link";
import { UserService } from "@/app/services/UserService.class";
import { getCodeDetails } from "@/app/utils/api_codes_details";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Routes } from "@/app/services/data";

const RegisterForm = () => {
  const { register, handleSubmit, formState } = useForm();
  const router = useRouter();
  const [error, setError] = useState("");
  const [response, setResponse] = useState("");

  const registerUser = async (data: FieldValues) => {
    setError("");
    const { username, name, password, email } = data;
    const res = await UserService.initRegister({
      name,
      username,
      password,
      email,
    });

    const responseCode = getCodeDetails(res.message);

    if (responseCode.isFailureCode) {
      return setError(responseCode.codeMessage as string);
    }

    setResponse(responseCode.codeMessage as string);

    setTimeout(() => {
      router.push(Routes.PANEL);
    }, 2000);
  };

  return (
    <div className={`${styles.formContainer} `}>
      <Title title="Registrate" />
      <p>Solamente necesitás cuatro datos.</p>
      <form onSubmit={handleSubmit(registerUser)} className={`${styles.form} `}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="email@gmail.com"
          id="email"
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Introduce un correo que sea válido",
            },
          })}
          className={`${styles.input}`}
          aria-invalid={formState.errors.email ? "true" : "false"}
        />
        {formState.errors.email && (
          <p className={`${styles.error}`}>
            Introduce un correo que sea válido
          </p>
        )}
        <label htmlFor="name">Nombre completo</label>
        <input
          placeholder="Tomás Dos Santos"
          type="text"
          id="name"
          {...register("name", {
            required: true,
            minLength: 1,
          })}
          className={`${styles.input}`}
          aria-invalid={formState.errors.name ? "true" : "false"}
        />
        {formState.errors.name && (
          <p className={`${styles.error}`}>Introduce tu nombre </p>
        )}
        <label htmlFor="username">Elegí un nombre de usuario</label>
        <p className="input-aclaration">
          Tu nombre de usuario estará visible para otros jugadores.
        </p>
        <input
          type="text"
          id="username"
          {...register("username", {
            required: true,
            minLength: 3,
            maxLength: 20,
          })}
          placeholder="tomastk"
          className={`${styles.input}`}
          aria-invalid={formState.errors.username ? "true" : "false"}
        />
        {formState.errors.username && (
          <p className={`${styles.error}`}>
            Tu nombre de usuario debe tener al menos 3 caracteres.
          </p>
        )}
        <label htmlFor="password">Contraseña</label>

        <input
          type="password"
          id="password"
          {...register("password", {
            required: true,
            minLength: 8,
          })}
          className={`${styles.input}`}
          aria-invalid={formState.errors.password ? "true" : "false"}
        />
        {formState.errors.password && (
          <p className={`${styles.error}`}>
            La contraseña debe tener al menos 8 caracteres
          </p>
        )}
        {response && <p className={`${styles.success}`}>{response}</p>}
        {error && <p className={`${styles.error}`}>{error}</p>}
        <Button cta="Registrarme" />
        <Link className="link" href={Routes.LOGIN}>
          Ya tengo cuenta
        </Link>
      </form>
    </div>
  );
};
export default RegisterForm;
