"use client";

import FormInputsWrapper from "../forms/formVote/formInputsWrapper";

type Props = {
  inputsData: {
    label: string;
    name: string;
    placeholder: string;
    type: string
    defaultValue?: string
  }[];
  errorMsg?: Record<string, string>;
  handleChange?: (name: string) => void;
};

const InputsText = ({
  inputsData,
  errorMsg = {},
  handleChange = () => {},
}: Props) => {
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
                name={name}
                defaultValue={defaultValue}
                onChange={() => handleChange(name)}
              />
              <div className="text-xs text-danger h-4">{errorMsg[name]}</div>
            </div>
          </FormInputsWrapper>
        );
      })}
    </>
  );
};

export default InputsText;
