import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Wrapper = (props: Props) => {
  return (
    <div className="w-100 max-w-[1100px] min-h-screen mx-auto px-6 bg-white">
      {props.children}
    </div>
  );
};

export default Wrapper;
