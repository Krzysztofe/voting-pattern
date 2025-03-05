"use client";

import { login } from "@/actions/login";
import ButtonSubmit from "@/components/buttons/buttonSubmit";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const FormLogin = (props: Props) => {
  return (
    <form onSubmit={login} className="flex flex-col w-full mx-auto pb-16">
      {props.children}
      <ButtonSubmit text="Zaloguj" />
    </form>
  );
};

export default FormLogin;
