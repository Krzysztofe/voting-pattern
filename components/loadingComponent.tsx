type Propps = {
  size: string;
  color: string;
};

const LoadingComponent = (props: Propps) => {
  const size = `loading-${props.size}`;
  const color = `bg-${props.color}`;

  return (
    <div className="flex items-center justify-center">
      <div className={`loading loading-ring ${size} ${color}`}></div>
    </div>
  );
};

export default LoadingComponent;
