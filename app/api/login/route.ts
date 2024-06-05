import { UserService } from "@/app/services/UserService.class";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const data = await request.json();
  const cookieStore = cookies();
  console.log(cookieStore.getAll());
  const { username, password } = data;

  if (requestIsInvalid(username, password)) {
    return NextResponse.json(
      {
        error: true,
        errorText: "Invalid username or password",
      },
      { status: 400 }
    );
  }

  const response = await UserService.login(username, password);

  if (response.error || response.success != true) {
    return NextResponse.json(
      {
        error: true,
        errorText: "Invalid username or password",
      },
      { status: 400 }
    );
  }

  const { token } = response;

  cookies().set({
    name: "token",
    value: token,
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 365 * 1000,
    expires: new Date(Date.now() + 60 * 60 * 24 * 365 * 1000),
  });

  return NextResponse.json({
    message: "Login Successful",
  });
};
function requestIsInvalid(username: string, password: string) {
  return (
    username === null ||
    username.length === 0 ||
    password === null ||
    password.length === 0
  );
}
