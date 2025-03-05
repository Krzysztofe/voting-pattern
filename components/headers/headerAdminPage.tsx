import FormLogout from "../forms/formLogout";

const HeaderAdminPage = () => {
  return (
    <header className="relative py-5 text-lg border-b-8 border-bacground font-bold flex items-center">
      <div className="mx-auto text-xl">Wynik</div> <FormLogout />
    </header>
  );
};

export default HeaderAdminPage;
