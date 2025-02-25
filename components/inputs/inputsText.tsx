import FormInputsWrapper from "../forms/formVote/formInputsWrapper";

type Props = {
  inputsData: {
    label: string;
    name: string;
    placeholder: string;
  }[];
  errorMsg: Record<string, string>;
};

const InputsText = (props: Props) => {
  return (
    <>
      {props.inputsData.map(({ label, name, placeholder }) => {
        return (
          <FormInputsWrapper key={name}>
            <div>
              <label htmlFor="" className="text-lg text-accent block">
                {label}
              </label>
              <input
                type="text"
                className="w-full max-w-xs border-b-2 border-gray-300 focus:border-accent focus:outline-none px-2 py-1"
                placeholder={placeholder}
                name={name}
              />
              <div className="text-xs text-danger h-4">
                {props.errorMsg[name]}
              </div>
            </div>
          </FormInputsWrapper>
        );
      })}
    </>
  );
};

export default InputsText;
