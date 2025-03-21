"use client";

import FormInputsWrapper from "../forms/formVote/formInputsWrapper";
import { UseFormRegister } from "react-hook-form";
import { FormVoteSchemaModel } from "@/components/forms/formVote/useFormVoteSubmit";

type Props = {
  headerText: string;
  inputsData: {
    value: string;
    name: keyof FormVoteSchemaModel;
  }[];
  errorMsg?: string;
  register?: UseFormRegister<FormVoteSchemaModel>;
};

const InputsRadio = ({ headerText, inputsData, errorMsg, register }: Props) => {
  return (
    <FormInputsWrapper>
      <div className="text-lg text-accent">{headerText}</div>
      {inputsData.map(({ value, name }) => (
        <div className="form-control" key={value}>
          <label className="cursor-pointer text-base flex items-center">
            <input
              type="radio"
              value={value}
              className="radio-xs checked:bg-accent mr-2"
              {...(register ? register(name) : {})}
            />
            <span>{value}</span>
          </label>
        </div>
      ))}
      <div className="text-xs text-danger h-4">{errorMsg}</div>
    </FormInputsWrapper>
  );
};

export default InputsRadio;
