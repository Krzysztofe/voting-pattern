type Propps = {
  size: string;
  color: string;
};

const LoadingComponent = (props: Propps) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`loading loading-ring  text-${props.color} ${props.size}`}
      ></div>
    </div>
  );
};

export default LoadingComponent;
