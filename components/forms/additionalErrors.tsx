type Props = {
  text: string;
 
};

const AdditionalErrors = (props:Props) => {
  return (
    <div className="text-xs text-danger h-4 w-[50%] mx-auto">
      {props.text}
    </div>
  );
};

export default AdditionalErrors;
