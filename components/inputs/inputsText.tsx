"use client";

import FormInputsWrapper from "../forms/formVote/formInputsWrapper";
import { FormVoteSchemaModel } from "@/components/forms/formVote/useFormVoteSubmit";
import { UseFormRegister } from "react-hook-form";



type Props = {
  inputsData: {
    label: string;
    name: keyof FormVoteSchemaModel | string;
    placeholder: string;
    type: string;
    defaultValue?: string;
  }[];
  errorMsg?: Partial<Record<keyof FormVoteSchemaModel, string>>;
  register?:  UseFormRegister<any>;
};

const InputsText = ({ inputsData, errorMsg = {}, register }: Props) => {
  return (
    <>
      {inputsData.map(({ label, name, placeholder, type, defaultValue }) => {
        return (
          <FormInputsWrapper key={name}>
            <div>
              <label htmlFor={name} className="text-lg text-accent block">
                {label}
              </label>
              <input
                type={type}
                id={name}
                className="w-full max-w-xs border-b-2 border-gray-300 focus:border-accent focus:outline-none px-2 py-1"
                placeholder={placeholder}
                defaultValue={defaultValue}
                {...(register ? register(name as string) : {})}
              />
              <div className="text-xs text-danger h-4">
                {errorMsg[name as keyof FormVoteSchemaModel]}
              </div>
            </div>
          </FormInputsWrapper>
        );
      })}
    </>
  );
};

export default InputsText;
