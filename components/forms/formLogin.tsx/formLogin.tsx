// // import { login } from "@/actions/login";
// import { login } from "@/actions/login";
// import ButtonSubmit from "@/components/buttons/buttonSubmit";
// import { ReactNode } from "react";


// type Props = {
//   children: ReactNode;
// };

// const FormLogin = async (props: Props) => {


//   return (
//     <form action={login} className="flex flex-col w-full mx-auto pb-16">
//       {props.children}
//       <ButtonSubmit text="Zaloguj" />
//     </form>
//   );
// };

// export default FormLogin;


// components/forms/formLogin.tsx

"use client"

import { login } from "@/actions/login"; // Import the server-side login action
import ButtonSubmit from "@/components/buttons/buttonSubmit";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const FormLogin = (props: Props) => {
  return (
    <form
      onSubmit={login}   // This is correct because it is submitting to a server-side function
      // method="POST"   // Ensure it is using POST to trigger the server-side action
      className="flex flex-col w-full mx-auto pb-16"
    >
      {props.children}
      <ButtonSubmit text="Zaloguj" />
    </form>
  );
};

export default FormLogin;
