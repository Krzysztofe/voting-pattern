"use client";

import LoadingComponent from "../loadingComponent";
import { useFormStatus } from "react-dom";

const ButtonSubmit = () => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="bg-accent text-white py-1 block ml-auto mt-8 mr-24 w-24 h-7 flex items-center justify-center"
    >
      {pending ? <LoadingComponent color="white" size="sm" /> : "Zagłosuj"}
    </button>
  );
};

export default ButtonSubmit;
