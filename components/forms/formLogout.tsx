import { logout } from "@/actions/logout";
import ButtonSubmit from "../buttons/buttonSubmit";
import IconLogout from "@/icons/iconLogout/iconLogout";

const FormLogout = () => {
  return (
    <>
      <form
        action={logout}
        className="h-fit absolute right-[1rem] top-[1.9rem]"
      >
        <button>
          <IconLogout />
        </button>
      </form>
    </>
  );
};

export default FormLogout;
