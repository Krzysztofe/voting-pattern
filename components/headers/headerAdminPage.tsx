import { headerAdminHeight } from "@/data/numbers/dataNumbers";
import FormLogout from "../forms/formLogout";

const HeaderAdminPage = () => {
  return (
    <header
      className="relative text-lg border-b-8 border-bacground font-bold flex items-center"
      style={{ height: headerAdminHeight }}
    >
      <div className="mx-auto text-xl">Wynik</div> <FormLogout />
    </header>
  );
};

export default HeaderAdminPage;
