"use client";
import { logout } from "@/actions/auth/logout";
import ButtonLogout from "../buttons/buttonLogout";
import { headerAdminTop } from "@/data/numbers/dataNumbers"

const FormLogout = () => {
  return (
    <form
      action={logout}
      className={`h-fit absolute right-[1rem] ${headerAdminTop}`}
    >
      <ButtonLogout />
    </form>
  );
};

export default FormLogout;
