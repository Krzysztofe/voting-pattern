import { authClient } from "@/lib/auth-client";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";

type DefaultValuesModel = {
  userEmail: string;
  userPassword: string;
};

export const useLogin = () => {
  const [loginError, setLoginError] = useState("");
  const [requestError, setRequestError] = useState("");
  const [isLoading, setloading] = useState(false);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      userEmail: "test@example.com",
      userPassword: "password1234",
    },
  });

  const loginAction = async (data: DefaultValuesModel) => {

    setLoginError("");

    if (!data.userEmail || !data.userPassword) {
      setLoginError("Wypełnij pola");
      return;
    }
    const newValues = {
      email: data.userEmail?.toString().trim() || "",
      password: data.userPassword?.toString().trim() || "",
      callbackURL: "/login/admin",
    };
    try {
      setLoginError("");
      setloading(true);

      const { error } = await authClient.signIn.email(newValues, {
        onRequest: (ctx) => setloading(true),
      });

      if (
        typeof error?.status === "number" &&
        error.status >= 400 &&
        error.status <= 499
      ) {
        setLoginError("Błędne hasło lub login");
        setloading(false);
        return;
      }

      setloading(false);
    } catch (error: any) {
      console.error("Błąd połączenia:", error);
      setRequestError("Błąd. Odświerz stronę");
      setloading(false);
    }
  };

  return {
    register,
    loginAction,
    handleSubmit,
    loginError,
    isLoading,
    requestError,
    setRequestError,
  };
};
