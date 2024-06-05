import { FieldValues } from "react-hook-form";
import { API_ENDPOINT, INTERNAL_API_ENDPOINT } from "./data";

type RegisterDetails = {
  name: string;
  username: string;
  password: string;
  email: string;
};

export class UserService {
  static async initRegister(data: RegisterDetails) {
    return fetch(`${API_ENDPOINT}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      return res.json();
    });
  }

  static async initLogin(data: FieldValues) {
    const loginData = JSON.stringify(data); // Almacena el texto de la solicitud en una variable
    const request = fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: loginData,
    });
    request
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.error) {
          throw new Error(data.errorText);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  static async login(username: string, password: string) {
    return fetch(`${API_ENDPOINT}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => data);
  }
}
