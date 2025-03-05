"use client"

import FormInputsWrapper from "../forms/formVote/formInputsWrapper";

type Props = {
  headerText: string;
  inputsData: {
    value: string;
    name: string;
  }[];
  errorMsg: string;
  handleChange: (name: string) => void;
};

const InputsRadio = ({
  headerText,
  inputsData,
  errorMsg,
  handleChange,
}: Props) => {
  return (
    <FormInputsWrapper>
      <div className="text-lg text-accent">{headerText}</div>
      {inputsData.map(({ value, name }) => (
        <div className="form-control" key={value}>
          <label className="cursor-pointer text-base flex items-center">
            <input
              type="radio"
              value={value}
              name={name}
              className="radio-xs checked:bg-accent mr-2"
              onChange={() => handleChange(name)}
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
