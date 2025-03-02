"use client";

import { login } from "@/actions/logAdmin";
import ButtonSubmit from "@/components/buttons/buttonSubmit";
import InputsText from "@/components/inputs/inputsText";
import { useActionState } from "react";

const dataInputsLogin = [
  { label: "Login", name: "userLogin", placeholder: "Login" },
  {
    label: "Hasło",
    name: "userPassword",
    placeholder: "Hasło",
  },
];

const FormLogin = () => {
  const [state, loginAction] = useActionState(login, undefined);

  console.log('',state)
  const funct = (ala: string) => { return ala};

  return (
    <form action={loginAction} className="flex flex-col w-full mx-auto pb-16">
      <InputsText
        inputsData={dataInputsLogin}
        errorMsg={{
          userName: "www",
          userSurname: "wwwwee",
        }}
        handleChange={funct}
      />
      <ButtonSubmit text="Zaloguj" />
    </form>
  );
};

export default FormLogin;
