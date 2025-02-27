"use client";
import Button from "@/components/buttons/button";

type Props = {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
};

const RequestMessage = (props: Props) => {
  const handleClick = () => {
    props.setMessage("");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center w-screen h-screen bg-white">
      <div className="z-10 flex flex-col gap-8 text-lg text-center">
        {props.message}
        <div className="flex justify-center">
          <Button text="Powróć do formularza" action={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default RequestMessage;
