import FormLogin from "@/components/forms/formLogin.tsx/formLogin";
import InputsText from "@/components/inputs/inputsText";

const dataInputsLogin = [
  { label: "Login", name: "userName", placeholder: "Login" },
  {
    label: "Hasło",
    name: "userEmail",
    placeholder: "Hasło",
  },
];

const PageLogin = () => {
  return (
    <div className="flex justify-center h-screen items-center">
      <FormLogin>
        <InputsText
          inputsData={dataInputsLogin}
          errorMsg={{
            userName: "www",
            userEmail: "wwwwee",
          }}
        />
      </FormLogin>
    </div>
  );
};

export default PageLogin;

