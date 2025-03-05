"use client";

import { login } from "@/actions/logAdmin";
import ButtonSubmit from "@/components/buttons/buttonSubmit";
import InputsText from "@/components/inputs/inputsText";
import { authClient } from "@/lib/auth-client";
import { useActionState, useRef } from "react";
import { useFormAction } from "react-router-dom";

const dataInputsLogin = [
  { label: "Login", name: "userName", placeholder: "Login" },
  {
    label: "Hasło",
    name: "userEmail",
    placeholder: "Hasło",
  },
];

const FormLogin = () => {
  // const [state, loginAction] = useActionState(login, undefined);

  const formRef = useRef<HTMLFormElement>(null);
  const funct = (ala: string) => {
    return ala;
  };

  // const clientAction = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   // if (!formRef.current) return;

  //   // const formData = new FormData(formRef.current);
  //   // const newVotingValues = {
  //   //   userName: formData.get("userName")?.toString().trim(),
  //   //   userEmail: formData.get("userEmail")?.toString().trim(),
  //   // };

  //   // if (!newVotingValues) return;
  //   const { data, error } = await authClient.signUp.email(
  //     {
  //       email: "test@example.com",
  //         name: "test",
  //       password: "password1234",

  //       // image: "https://example.com/image.png",
  //       callbackURL: "/login/admin",
  //     },
  //     {
  //       onRequest: ctx => {},
  //       onSuccess: ctx => {},
  //       onError: ctx => {},
  //     }
  //   );

  //   // console.log("", newVotingValues);
  // };

  const clientAction = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate payload
    const payload = {
      email: "test@example.com",
      name: "test",
      password: "password1234",
      callbackURL: "/login/admin",
    };

    if (!payload.email || !payload.password || !payload.name) {
      console.error("❌ Missing required fields:", payload);
      return;
    }

    try {
      const { data, error } = await authClient.signUp.email(payload, {
        onRequest: ctx => console.log("🚀 Request sent", ctx),
        onSuccess: ctx => console.log("✅ Success!", ctx),
        onError: ctx => console.error("❌ Error occurred", ctx),
      });

      if (error) {
        console.error("Sign-up failed:", error);
      } else {
        console.log("Sign-up successful:", data);
      }
    } catch (error) {
      console.error("Unexpected error during sign-up:", error);
    }
  };

  return (
    <form
      onSubmit={clientAction}
      ref={formRef}
      className="flex flex-col w-full mx-auto pb-16"
    >
      <InputsText
        inputsData={dataInputsLogin}
        errorMsg={{
          userName: "www",
          userEmail: "wwwwee",
        }}
        handleChange={funct}
      />
      <ButtonSubmit text="Zaloguj" />
    </form>
  );
};

export default FormLogin;
