"use client";

import LoadingComponent from "../loadingComponent";
import { useFormStatus } from "react-dom";

type Props = {
  text: string;
  bacground?: string;
  textColor?: string;
};

const ButtonSubmit = (props: Props) => {
  const { pending } = useFormStatus();



  return (
    <button
      disabled={pending}
      className={`${props.bacground} text-base font-normal ${props.textColor} py-1 w-24 h-7 flex items-center justify-center`}
    >
      {pending ? (
        <LoadingComponent color="text-dark" size="loading-sm" />
      ) : (
        props.text
      )}
    </button>
  );
};

export default ButtonSubmit;
