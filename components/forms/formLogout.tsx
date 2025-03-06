"use client";
import { logout } from "@/actions/logout";
import ButtonLogout from "../buttons/buttonLogout";

const FormLogout = () => {
  return (
    <form action={logout} className="h-fit absolute right-[1rem] top-[1.9rem]">
      <ButtonLogout />
    </form>
  );
};

export default FormLogout;
