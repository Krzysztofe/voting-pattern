"use client";

import { useFormStatus } from "react-dom";

const ButtonSubmit = () => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="bg-accent text-white py-1 block ml-auto mt-8 mr-24 w-24"
    >
      {pending ? "Wysyła" : "Zagłosuj"}
    </button>
  );
};

export default ButtonSubmit;
