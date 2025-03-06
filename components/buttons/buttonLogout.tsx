import IconLogout from "@/icons/iconLogout/iconLogout";
import LoadingComponent from "../loadingComponent";
import { useFormStatus } from "react-dom";


const ButtonLogout = () => {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>
      {pending ? (
        <LoadingComponent color="text-accent" size="loading-sm" />
      ) : (
        <IconLogout />
      )}
    </button>
  );
};

export default ButtonLogout;
