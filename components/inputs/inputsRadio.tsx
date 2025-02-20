type Props = {
  headerText: string;
  inputsData: {
    value: string;
    name: string;
  }[];
};

const InputsRadio = (props: Props) => {
  return (
    <>
      <div className="text-lg text-accent">{props.headerText}</div>
      {props.inputsData.map(({ value, name }) => {
        return (
          <div className="form-control">
            <label className="cursor-pointer text-base flex items-center">
              <input
                type="radio"
                value={value}
                name={name}
                className="radio-xs checked:bg-accent mr-2"
              />
              <span>{value}</span>
            </label>
          </div>
        );
      })}
    </>
  );
};

export default InputsRadio;
