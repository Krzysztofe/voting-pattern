import FormLogin from "@/components/forms/formLogin.tsx/formLogin";
import InputsText from "@/components/inputs/inputsText";

const dataInputsLogin = [
  { label: "Email", name: "userEmail", placeholder: "email" },
  {
    label: "Hasło",
    name: "userPassword",
    placeholder: "Hasło",
  },
];

const PageLogin = () => {
  return (
    <div className="flex justify-center h-screen items-center">
      <FormLogin/>
       
     
    </div>
  );
};

export default PageLogin;
