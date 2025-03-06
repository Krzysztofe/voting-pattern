"use client";

import LoadingComponent from "../loadingComponent";
import { useFormStatus } from "react-dom";

type Props = {
  text: string;
  bacground?: string;
  textColor?: string;
  loading?: boolean;
};

const ButtonSubmit = (props: Props) => {
  const { pending } = useFormStatus();

  const isPending = props.loading ?? pending;

  return (
    <button
      disabled={isPending}
      className={`${props.bacground} text-base font-normal ${props.textColor} py-1 w-24 h-7 flex items-center justify-center ml-auto mt-8 mr-24`}
    >
      {isPending ? (
        <LoadingComponent color="text-white" size="loading-sm" />
      ) : (
        props.text
      )}
    </button>
  );
};

export default ButtonSubmit;
