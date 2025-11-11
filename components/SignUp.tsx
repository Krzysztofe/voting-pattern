"use client";
import { authClient } from "@/lib/auth-client";

const SignUp = () => {
  const click = async () => {
    console.log("wwwww");
    await authClient.signUp.email({
      email: "test@example.com",
      name: "ola",
      password: "password1234",
    });
  };

  return <button onClick={click}>zapisz</button>;
};

export default SignUp;
