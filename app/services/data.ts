const API_ENDPOINT = "http://localhost:8080";
const INTERNAL_API_ENDPOINT = "http://localhost:3000";

type ApiCode = {
  code: string;
  message: string;
  isFailureCode: boolean;
};

export enum Routes {
  HOME = "/",
  LOGIN = "/login",
  REGISTER = "/register",
  PANEL = "/panel",
}

const API_CODES: ApiCode[] = [
  {
    code: "010",
    message: "Usuario registrado exitosamente, redireccionando a la home.",
    isFailureCode: false,
  },
  {
    code: "011",
    isFailureCode: true,
    message: "Ya existe un usuario con ese nombre de usuario/email",
  },
];

export { API_ENDPOINT, INTERNAL_API_ENDPOINT, API_CODES };
