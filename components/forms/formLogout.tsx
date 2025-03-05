import { logout } from "@/actions/logout";
import ButtonSubmit from "../buttons/buttonSubmit";

const FormLogout = () => {
  return (
    <form action={logout} className="h-fit absolute right-[1rem] top-[1.9rem]">
      <ButtonSubmit text="Wyloguj" bacground=""/>
    </form>
  );
};

export default FormLogout;
