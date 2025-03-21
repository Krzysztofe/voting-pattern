import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Wrapper = (props: Props) => {
  return (
    <div className="relative max-w-[750px] min-h-screen mx-auto bg-white">
      {props.children}
    </div>
  );
};

export default Wrapper;
