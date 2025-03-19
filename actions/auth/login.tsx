import { authClient } from "@/lib/auth-client";
import { useState, useRef } from "react";

export const useLogin = () => {
  const [loginError, setLoginError] = useState("");
  const [requestError, setRequestError] = useState("");
  const [isLoading, setloading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const loginAction = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    const newVotingValues = {
      email: formData.get("userEmail")?.toString().trim() || "",
      password: formData.get("userPassword")?.toString().trim() || "",
      callbackURL: "/login/admin",
    };
    setLoginError("");

    if (!newVotingValues.email || !newVotingValues.password) {
      setLoginError("Wypełnij pola");
      return;
    }

    try {
      setLoginError("");
      setloading(true);

      const { error } = await authClient.signIn.email(newVotingValues, {
        onRequest: ctx => setloading(true),
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
    loginAction,
    loginError,
    isLoading,
    requestError,
    setRequestError,
    formRef,
  };
};
