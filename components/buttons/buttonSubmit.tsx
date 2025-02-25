"use client";

import LoadingComponent from "../loadingComponent";
import { useFormStatus } from "react-dom";

type Props = {
  text: string;
};

const ButtonSubmit = (props: Props) => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="bg-accent text-white py-1 block ml-auto mt-8 mr-24 w-24 h-7 flex items-center justify-center"
    >
      {pending ? <LoadingComponent color="white" size="sm" /> : props.text}
    </button>
  );
};

export default ButtonSubmit;
