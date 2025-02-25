type Props = {
  text: string;
  action: () => void;
};

const Button = (props: Props) => {
  return (
    <button
      onClick={props.action}
      className="bg-accent text-white p-1 px-3 block text-xs"
    >
      {props.text}
    </button>
  );
};

export default Button;
