type Propps = {
  size: string;
  color: string;
};

const LoadingComponent = (props: Propps) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`loading loading-ring bg-${props.color} loading-${props.size}`}
      ></div>
    </div>
  );
};

export default LoadingComponent;
