import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const FormInputsWrapper = (props: Props) => {
  return (
    <div className="border-b-8 border-bacground py-8">
      <div className="w-[50%] mx-auto">
          {props.children}
      </div>
    </div>
  );
};

export default FormInputsWrapper;
